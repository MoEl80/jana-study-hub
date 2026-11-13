# Community reports: choosing max_tokens for reasoning models and handling runaway output

Research date: 2026-11-13. Labels: **[community]** = user or third-party post; **[official]** = vendor staff answer on a forum or vendor docs. Items marked "(snippet only)" came from search-result summaries and were NOT confirmed by fetching the page. Treat them as weaker evidence.

## Q1. What happens when max_tokens is too low for reasoning models (empty responses, finish_reason length, billed thinking), and what values did people end up using?

### Takeaway
On every vendor covered (OpenAI, Gemini, Kimi), reasoning tokens count against the same output cap as the answer. A cap that is too small returns HTTP 200 with an empty answer and finish reason length/MAX_TOKENS/incomplete, and the reasoning tokens are still billed. The values that worked in these reports are in the thousands of tokens: at least 8,192 for Kimi and Gemini Flash, at least 16,000 in Moonshot's docs. Caps of 2,000 or less fail often. On high effort, even 800 tokens failed 5 out of 5 times.

### Cited Findings
- **OpenAI, gpt-5.2-codex, Responses API (Feb 7, 2026) [community]:** when status is "incomplete" with reason "max_output_tokens", the "output contains only type:"reasoning" items", "No type:"message" item is emitted (so output_text is empty)", and "usage.output_tokens is non-zero". Blank-response test results: high effort was blank 5/5 at 350 tokens, 5/5 at 400, and 5/5 at 800 (short prompt). Low effort was blank 2/5 at 350 and 0/5 at 400. The poster's summary: "the blank-output rate increases as reasoning.effort increases." The poster quotes the OpenAI reasoning guide: "you could incur costs for input and reasoning tokens without receiving a visible response." — [OpenAI Developer Community thread 1373609](https://community.openai.com/t/responses-api-empty-output-text-no-message-item-when-status-incomplete-due-to-max-output-tokens-reasoning-only-output/1373609)
  - Reply from regular user `_j` (not staff) [community]: "Set the max_output_tokens high." and "If you want the AI to be encouraged to write less at your expense, use either reasoning.effort or text.verbosity levels." The original poster proposed treating "incomplete + max_output_tokens + no message item" as retryable, then retrying with a higher max_output_tokens (bounded retries) and optionally a lower effort. — same thread
- **GPT-5 Nano (snippet only) [community]:** "when I bump it to 1000, the reasoning tokens shoot past 1000 — which results in an empty response." — [OpenAI community thread 1351246](https://community.openai.com/t/is-anyone-experiencing-issues-with-gpt-5-nano-returning-no-output/1351246)
- **Gemini 2.5 Pro (Dec 3, 2025) [community]:** a response with `"finishReason": "MAX_TOKENS"`, `"thoughtsTokenCount": 65535`, and `"candidatesTokenCount": null`. All of the output budget went to thinking, so no answer came back. The poster asked: "Is this bug or it can happen?" — [Google AI forum: "Thinking ate all the tokens and hit MAX_TOKENS"](https://discuss.ai.google.dev/t/thinking-ate-all-the-tokens-and-hit-max-tokens/110971)
  - Reply from Sonali_Kumari1 (support role; the page does not confirm staff status), Dec 9, 2025: for 2.5 Pro, "explicitly set lower thinkingBudget", for example `thinking_budget=1024`, so as to prevent "the model's internal reasoning from consuming all the tokens". For Gemini 3 Pro, set `thinking_level` to `low` to "minimize token usage." — same thread
- **python-genai issue #782 (opened May 8, 2025) [community]:** reports three problems. (1) "The `thinking_budget` appears to be ignored." (2) "A `MAX_TOKENS` finish reason appears to be given if `thoughts_token_count + output_token_count > max_output_tokens`." (3) "the response text is empty, making debugging of the above very difficult." Data points from the same issue:
  - Even with `thinking_budget=0`, `max_output_tokens=2000` produced `thoughts_token_count=2000`.
  - With no cap, thoughts reached 65,536.
  - Aug 22, 2026: on gemini-3.5-flash via Vertex, `max_output_tokens=2048` returned MAX_TOKENS with 146 characters every time, while `8192` worked. The commenter estimated a thinking floor of roughly 2–3k tokens.
  - Oct 1, 2026: on gemini-3.6-flash with a 200-token cap, default thinking hit MAX_TOKENS after 191 thought tokens. `thinkingBudget: 0` and `thinkingLevel: "minimal"` worked, but `"low"` still truncated.
  - The issue was still open; a maintainer self-assigned it on Jul 22, 2026. — [googleapis/python-genai#782](https://github.com/googleapis/python-genai/issues/782)
- **Gemini 3 Pro preview / 2.5 (Dec 8, 2025) [community]:** HTTP 200 with finish_reason STOP but empty content, while "usage_metadata indicates that a significant number of output tokens were generated" (~1,500, all reasoning). A second user reported the same failure intermittently on gemini-3-pro-preview. Support replies only asked for logs or suggested safetySettings BLOCK_NONE. No root cause was found. Note that this report is **STOP, not MAX_TOKENS**, so empty answers also happen without hitting the cap. — [Google AI forum thread 111426](https://discuss.ai.google.dev/t/gemini-3-0-2-5-api-returns-http-200-with-empty-content-despite-high-reasoning-token-usage/111426)
- **Kimi K2.5 (HF discussion, Feb 3) [community + official]:** a user wrote "when the "max_tokens" in a request is less than 330, the content of response is empty". Moonshot AI org member courage17340 [official] replied: "It's because the thinking is not finished yet, and you can check reasoning_content." Another user [community] advised: "change it to something like 8192 or higher." A third user reported that the "model generates all the response in `reasoning` block and content block remains empty." — [moonshotai/Kimi-K2.5 discussion 40](https://huggingface.co/moonshotai/Kimi-K2.5/discussions/40)
- **Moonshot docs (snippet only) [official]:** the reasoning and final content share the budget. The docs recommend setting "max_tokens ≥ 16,000 to ensure the full reasoning_content and final content can be returned without truncation." — [Kimi platform: use kimi k2 thinking model](https://platform.kimi.ai/docs/guide/use-kimi-k2-thinking-model)

### Inferences
- The user's Kimi run with a 3,000-token thinking limit matches the documented pattern: the cap cut off reasoning, `content` came back empty, and the tokens were billed. Moonshot's own floor is about 5x higher (16k).
- In the Gemini case (32k cap on high thinking, 4/4 with no answer), one of three things is likely: (a) the 32k cap covers thinking plus answer, as issue #782 and thread 110971 show; (b) high-level thinking can use the full 65k (thread 110971); or (c) a loop (see Q2). Lowering thinking_level or budget is the fix staff suggested, rather than only raising the cap.
- A robust client should check three things: the finish reason (length / MAX_TOKENS / incomplete), whether the visible content is empty, and whether reasoning tokens are greater than 0. If all three hold, treat the result as a distinct "budget exhausted by thinking" failure. Users proposed this rule; no vendor gave it as official guidance.

### Gaps
- I found no official per-vendor number for "minimum safe max_tokens" for Gemini 3 at each thinking level. The only data points are the user-reported 2048-fails / 8192-works figures for Flash.
- I did not fetch the OpenAI reasoning guide directly. A 25,000-token "reserve" figure attributed to OpenAI appeared only on a vendor content site (fast.io), so it is unverified here.

## Q2. Reports of thinking loops and repetition (Gemini 2.5/3, Kimi, GLM/Qwen/DeepSeek) and of fake tool calls emitted as text

### Takeaway
Gemini 3/3.1 looping that burns tokens is widely reported and has been escalated by Google forum staff, but I found no announced fix. Qwen thinking loops are common in local inference, and the usual remedy (presence_penalty) is sometimes silently dropped by the runtime. Raw `<tool_call>` text appears in the chat when the serving stack's tool-call parser fails for GLM or Qwen. The model writes the call, but nobody parses it.

### Cited Findings
- **Gemini 3 Pro (Feb 16, 2026) [community]:** "Gemini 3 Pro is the worst frontier model when it comes to getting stuck in loops and burning through tokens." The poster tests over 190 models. Google forum staff Abhijit_Pramanik [official] replied on Feb 20, 2026: "We have escalated the issue to our internal teams for a thorough investigation." The poster later reported that 3.1 still loops but "it's stopped at anywhere from 5-6 loops - this is better." Related thread titles (not read): "[Bug] Gemini 3.1 Pro leaking raw _thought blocks and stuck in infinite "Done" loop" (Mar 2026), "Infinite loop bug while using the Gemini 3" (18 replies, activity Oct 10, 2026), "Antigravity agent stuck in endless file-reading loop (Gemini models)" (Oct 14, 2026). — [Google AI forum thread 123259](https://discuss.ai.google.dev/t/bug-gemini-3-pro-constant-looping/123259)
- **Gemini 3 Flash (snippet only) [community]:** when called via the API it "often ends in infinite thinking loops until all tokens are consumed." — [Google AI forum thread 114528](https://discuss.ai.google.dev/t/gemini-3-flash-preview-infinite-reasoning-loop-causing-max-token-exhaustion-raw-logic-leak/114528/15). Another report (snippet only) says the model consumes all output tokens on recursive steps such as "Verifying schema compliance", and that max thinking tokens appeared ignored. — [thread 138686](https://discuss.ai.google.dev/t/infinite-looping-thinking-steps-for-gemini-3-apis/138686)
- **Gemini 3.1 Pro in Cursor (Apr 24, 2026) [community]:** "for 12 hours it had been going in a loop". A Cursor team member (Mohit; staff title not shown) replied: "This is a known issue class that our team has been tracking." — [Cursor forum 158921](https://forum.cursor.com/t/gemini-3-1-pro-gets-stuck/158921)
- **Qwen (Ollama issue, Feb 27, 2026) [community]:** `repeat_penalty`, `presence_penalty`, and `frequency_penalty` are "accepted by the API without error and silently discarded". This matters because the model card "explicitly recommends `presence_penalty=1.5` to prevent repetition loops during thinking." Setting it "has no effect whatsoever." A follow-up said: "Repetition penalties appear to be ignored (model loops endlessly)." — [ollama/ollama#14493](https://github.com/ollama/ollama/issues/14493)
- **gpt-oss on vLLM/Ollama (Feb 11, 2026) [community]:** "the inference never ends and once it hits context length (131000 or whatever i limit it to) it outputs", and "the output is hallucination, just repeated words." — [HF forum 173351](https://discuss.huggingface.co/t/never-ending-inference-until-it-reaches-max-context-length/173351)
- **Laguna model (snippet only) [community]:** without a repetition penalty, "all 8 hit finish_reason: length with ~30,000 chars of reasoning_content and 0 chars of answer". With a penalty of 1.15, 4 of 8 completed. — [HF poolside/Laguna-S-2.1-NVFP4 discussion 10](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4/discussions/10)
- **GLM 5.2 in Cursor (Jul 8, 2026) [community]:** "Built-in GLM 5.2 intermittently fails to execute Cursor Agent tool calls", printing `<tool_call>Shell…</tool_call>` into the chat. Expected behavior: "Raw tool-call markup like <tool_call>Shell…</tool_call> should never be printed into the user-visible chat." The thread was merged into "Tool calls terminate chats" with no confirmed fix. — [Cursor forum 165202](https://forum.cursor.com/t/built-in-glm-5-2-intermittently-prints-raw-tool-call-markup-instead-of-invoking-agent-tools/165202)
  - (snippet only) In the merged thread, someone blamed the parser: "the sglang tool-call-parser should be updated to support the slightly changed prompt/output format", and noted that the error did not occur in opencode or Claude Code. — [Cursor forum 165182](https://forum.cursor.com/t/glm-5-2-tool-calls-terminate-chats/165182)
- **Qwen speaking tool-call JSON aloud (snippet only) [community]:** suggested workaround is to set `tool_choice` to `required` instead of `auto`. — [LiveKit community](https://community.livekit.io/t/qwen-model-speaking-tool-call-json-out-loud-instead-of-executing/146)

### Inferences
- The user's Qwen run that returned "fake tool call text instead of a review" fits the parser/template failure pattern: the model emitted tool-call markup, and the bridge or provider did not convert it. It is also possible the model was shown tool definitions it should not have had for a review-only task. A practical defense is to detect `<tool_call>`, `{"name":..., "arguments":...}`, and similar patterns in final text and classify the result as a failed run, not as an answer.

### Gaps
- Kimi K2 looping: I found no concrete community report. Kimi's empty answers in this research all trace to budget exhaustion (Q1), not loops.
- DeepSeek repetition loops: not found within the search budget.
- GLM 4.6 r/LocalLLaMA looping thread: not found.

## Q3. How people stop looping models without timeouts

### Takeaway
Reported levers:
- A hard output cap (max_tokens), because uncapped local servers default to the whole remaining context.
- Lowering thinking level or budget (Gemini).
- Presence or repetition penalty (Qwen recommends 1.5; 1.15 helped Laguna), after first verifying the backend honors it.
- Retrying with bounded escalation.
- Client-side loop detection, which users have asked for.

I found no source describing a cumulative per-job token budget in a community post.

### Cited Findings
- Without max_tokens, vLLM's reported default is "default_max_tokens = context_window − prompt_tokens" (so a 131k window and a 50k prompt allow about 80k output). The replier [community] recommended setting max_tokens / max_completion_tokens "to something like 256–2048" for benchmarking. — [HF forum 173351](https://discuss.huggingface.co/t/never-ending-inference-until-it-reaches-max-context-length/173351)
- Gemini: lower `thinking_budget` (e.g. 1024) or set `thinking_level: low` (forum support reply). — [thread 110971](https://discuss.ai.google.dev/t/thinking-ate-all-the-tokens-and-hit-max-tokens/110971). In issue #782, `thinkingBudget: 0` or `"minimal"` stopped truncation on Flash. — [python-genai#782](https://github.com/googleapis/python-genai/issues/782)
- The original poster in the Gemini looping thread asked Google for "a loop-detection catch". — [thread 123259](https://discuss.ai.google.dev/t/bug-gemini-3-pro-constant-looping/123259)
- Qwen (snippet only, official release notes): "adjust the presence_penalty parameter between 0 and 2 to reduce endless repetitions", warning that a higher value "may occasionally result in language mixing and a slight decrease in model performance." Penalties may be silently dropped by Ollama ([#14493](https://github.com/ollama/ollama/issues/14493)).
- Retry pattern: on incomplete with no message, retry with a higher cap and bounded retries, optionally at lower effort. — [OpenAI community 1373609](https://community.openai.com/t/responses-api-empty-output-text-no-message-item-when-status-incomplete-due-to-max-output-tokens-reasoning-only-output/1373609)

### Inferences
- Set a finite cap per call, sized above the thinking floor. Then add a per-job cumulative token ceiling and a repetition detector (for example, the same n-gram or line repeated N times in a streamed reasoning or content block), so loops end without wall-clock timeouts. Gemini 3.1 looping "5-6" times and then self-stopping suggests a cap set close to the model's max simply wastes money when a loop happens.

### Gaps
- No community source quantified how well n-gram repetition detection works in production. The "runaway repetition... 21,000 times" Claude issue appeared in search ([claudeissues mirror](https://claudeissues.com/issue/90268-runaway-repetition-a-single-response-repeats-one-line-21-000-times-and-consumes)) but was not read.

## Q4. Hidden input-token overhead from system prompts, tool definitions, and bridges, and safety margins for input

### Takeaway
Coding-agent harnesses add roughly 7k to 33k input tokens before the user's prompt, and MCP servers can add tens of thousands more. This matches the user's observation of about 27k hidden tokens on a 650-token prompt. No community source states a formal "input safety margin" rule.

### Cited Findings
- Systima AI measurement via logging proxy, same model (Sonnet 4.5) [community]: Claude Code's calibrated first-turn overhead is about 32,800 tokens versus about 6,900 for OpenCode. Claude Code sends 27 tools with 99,778 chars of schemas, against 10 tools and 20,856 chars for OpenCode. "Claude Code's system prompt alone weighs 26,891 characters (~6.5K tokens)". About 24,000 of the 33,000 baseline tokens are tool definitions. The post was updated Oct 20, 2026, and the findings were published July 2026. — [Eden AI post](https://www.edenai.co/post/claude-code-vs-opencode-the-33k-token-overhead-gap)
- claude-code issue #11364 (Nov 10, 2025), per mirrors and secondary blogs (snippet only; GitHub page not opened): "seven MCP servers consume 67,300 tokens of tool definitions — 33.7% of a 200k context window — before the user types anything". GitHub's MCP server alone was about 18k tokens across 27 tools. The issue requested lazy loading to cut usage from about 67k to about 10k. Claude Code later added MCP Tool Search, which activates when tool descriptions would exceed 10% of context. — [claudeissues mirror of #11364](https://claudeissues.com/issue/11364-lazy-load-mcp-tool-definitions-to-reduce-context-usage); [mcpplaygroundonline blog](https://mcpplaygroundonline.com/blog/mcp-context-bloat-tool-search)

### Inferences
- When a CLI/subscription bridge (Claude Code, Codex, Kimi Code, etc.) is used for a plain review job, budget input as prompt + roughly 30–35k harness overhead, plus MCP tools if any are enabled. Overhead can be measured empirically by logging usage.input_tokens on a trivial prompt. This is how Systima measured it.

### Gaps
- No community "recommended input safety margin" percentage was found.
- Codex CLI, Kimi Code, and Gemini CLI baseline overheads: not measured in any source I read.

## Q5. Global heuristics for setting max_tokens

### Takeaway
I found no consensus formula. The advice that recurs is "set it high", combined with controlling cost through effort or thinking level rather than a tight cap. The working floors people report are 8k (Kimi, Gemini Flash) and 16k (Moonshot docs). Leaving the cap unset can mean "context minus prompt" on local servers.

### Cited Findings
- "Set the max_output_tokens high." Use effort or verbosity to make the model write less. — `_j`, [OpenAI community 1373609](https://community.openai.com/t/responses-api-empty-output-text-no-message-item-when-status-incomplete-due-to-max-output-tokens-reasoning-only-output/1373609) [community]
- "change it to something like 8192 or higher" (Kimi). — [HF Kimi-K2.5 #40](https://huggingface.co/moonshotai/Kimi-K2.5/discussions/40) [community]
- Moonshot: max_tokens ≥ 16,000 (snippet only). — [Kimi docs](https://platform.kimi.ai/docs/guide/use-kimi-k2-thinking-model) [official]
- Gemini Flash: 2048 failed, 8192 worked; estimated thinking floor of about 2–3k. — [python-genai#782](https://github.com/googleapis/python-genai/issues/782) [community]
- Uncapped vLLM defaults to context − prompt. — [HF forum 173351](https://discuss.huggingface.co/t/never-ending-inference-until-it-reaches-max-context-length/173351) [community]

### Inferences
- A defensible global rule from this evidence: cap = min(model_max_output, context − measured_input − margin), with a floor of about 16k for any reasoning model on high or default thinking. Control spend through effort or thinking level plus loop detection and a cumulative job budget, not a small max_tokens. "Just set it to the model max" avoids empty answers, but on Gemini 3 looping models it lets a single loop burn about 65k tokens (thread 110971).

### Gaps
- No "percentage of context" heuristic was found in any community source I read. Vendor content-site claims (fast.io: "16,000 to 25,000 tokens" headroom) were seen only in snippets and are not from community or official sources.
