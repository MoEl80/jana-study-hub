# Cap output at 65,536, reserve 40,000 input

**Bottom line:** set the same output limit for every model and every job kind: **65,536 tokens, lowered to the model's published max output or to the room left in its context window, and never below 16,000. If the room is below 16,000, do not send the job.** Every provider in the notes counts thinking inside the output cap. When the cap is too small, the provider returns HTTP 200 with an empty or truncated answer and still bills all the thinking. Unused allowance is never billed. A large cap has only indirect costs: OpenAI TPM accounting and the OpenRouter credit hold. This is why the rule uses 65,536 and not the model max. For input, budget each job as **context window − output cap − 40,000 tokens of hidden overhead, with your prompt estimate inflated by 15%.** Hidden overhead is the system prompt and tool definitions a bridge adds (the ~27,000 you saw on Z Code; ~33,000 measured for Claude Code). Your failed runs fit known causes. Gemini Argon's 32,000 ceiling is Google's documented 32,768 non-streaming cap. Kimi's 3,000 limit sits far below Moonshot's documented floor of 16,000. The Qwen fake tool call matches a known tool-call-parser failure. Neither failure needs a per-model table. The model max output and context window are the only per-model inputs. Every provider and OpenRouter (`/api/v1/models`) publishes them, so the rule covers new models automatically.

Source labels: **(official)** = vendor docs, vendor repo, or vendor staff reply. **(community)** = user or third-party post. Caveats from the notes:
- The DeepSeek, Kimi, GLM, Qwen and Synthetic quotes came from a fetch tool that returns **condensed or extracted text**. The notes say to spot-check the exact wording.
- Items marked **(snippet only)** came from search-result summaries and were not confirmed by fetching the page.
- The OpenAI, Anthropic, Gemini and OpenRouter quotes are recorded as verbatim unless marked as a paraphrase.

---

## Q1. Every vendor puts thinking inside one output cap, and only three publish a number

**OpenAI**
- (official) `max_output_tokens`: "An upper bound for the number of tokens that can be generated for a response, including visible output tokens and reasoning tokens." ([Responses reference](https://developers.openai.com/api/reference/resources/responses/methods/create.md))
- (official) "OpenAI recommends reserving at least 25,000 tokens for reasoning and outputs" when you start experimenting. This is the only explicit Western floor. ([Reasoning guide](https://developers.openai.com/api/docs/guides/reasoning))
- (official) Models "may generate anywhere from a few hundred to tens of thousands of reasoning tokens". ([Reasoning guide](https://developers.openai.com/api/docs/guides/reasoning))
- (official) GPT-6.1 Sol defaults to `medium` reasoning effort. ([Reasoning guide](https://developers.openai.com/api/docs/guides/reasoning))

**Anthropic**
- (official) "Thinking tokens are a subset of your `max_tokens` parameter, are billed as output tokens, and count toward rate limits." 1M-context models "can generate up to 128k output tokens". ([Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows))
- (official) `budget_tokens` "is deprecated. Claude 4.7 and later models do not support it and reject requests that use it, returning a 400 error." ([Extended thinking](https://platform.claude.com/docs/en/build-with-claude/extended-thinking))
- (official) "`max_tokens` is a hard cap on total output … `effort` is soft guidance." "A `max_tokens` sized for a response with no thinking is often too small once Claude starts thinking on hard requests." ([Steering thinking](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost))
- (official) "For complex tasks, start with a larger budget of 16,000 tokens or more". "For thinking budgets above 32k, use batch processing". ([Extended thinking](https://platform.claude.com/docs/en/build-with-claude/extended-thinking))

**Google Gemini**
- (official) "`max_output_tokens` … sets the maximum number of tokens a response can generate, including thought tokens … a hard cutoff … without changing how the model allocates its thinking". ([Thinking guide, generateContent](https://aistudio.google.com/docs/thinking.md?generate-content=true))
- (official) Gemini 4: "the default `max_output_tokens` cap is 65,536 tokens … or up to 32,768 tokens for non-streaming calls on `gemini-4-carbon` and `gemini-4-argon`." Going beyond 65,536 needs `background=True` or client-side continuation. ([Thinking guide](https://aistudio.google.com/docs/thinking))
- (official) Gemini 4 Argon thinking levels are low/medium/high, default "medium". "Run your evaluations … with a high `max_output_tokens` so the limit doesn't cut answers short." ([Thinking guide](https://aistudio.google.com/docs/thinking))

**DeepSeek** (condensed fetch)
- (official) `max_tokens` "must be between 1 and 384K (393216)". The default is "8K in non-thinking mode, 64K in thinking mode (128K with `reasoning_effort` set to `max`)." ([DeepSeek API](https://api-docs.deepseek.com/api/create-chat-completion))
- (official) DeepSeek's own docs do not say whether reasoning counts toward `max_tokens`. Alibaba's re-host says that for deepseek-v4 it covers "the sum of the model's answer and chain-of-thought content." ([DashScope API](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-dashscope))

**Kimi** (condensed fetch)
- (official) K3-series `max_completion_tokens` "defaults to 131072" and counts "both reasoning and answer tokens." ([Kimi Chat API](https://platform.kimi.ai/docs/api/chat))
- (official) "Set `max_tokens >= 16000` to ensure the full `reasoning_content` and `content` can be returned without truncation." ([Kimi thinking guide](https://platform.kimi.ai/docs/guide/use-kimi-k2-thinking-model)). The community notes saw this same line as snippet only. The Chinese-provider notes fetched it, in condensed form.

**GLM / z.ai** (condensed fetch)
- (official) "GLM-5.3 … supports 128K maximum output." The schema range is 1–131072, with no default shown. The native docs do not say whether thinking counts. ([z.ai API](https://docs.z.ai/api-reference/llm/chat-completion))
- (official) On Alibaba's re-host, glm-5.3 `max_tokens` "defaults to 65536, with a maximum of 131072" and covers answer plus chain-of-thought. ([DashScope API](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-dashscope))

**Qwen** (condensed fetch). Qwen is the exception.
- (official) For non-DeepSeek and non-GLM models on DashScope, `max_tokens` is "The maximum number of tokens for the model's answer (excluding chain-of-thought)". A separate `thinking_budget` caps thinking, with "default thinking_budget (131072)" on Qwen3.8. ([DashScope API](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-dashscope))
- (official) The model table lists qwen4-max-preview max output as "393,216 (thinking + output)". ([Model Studio models](https://www.alibabacloud.com/help/en/model-studio/text-generation-model))

**OpenRouter**
- (official) `max_tokens`: "The maximum value is the context length minus the prompt length. For reasoning models, this limit covers reasoning tokens and visible output together on most providers." ([Parameters](https://openrouter.ai/docs/api/reference/parameters))
- (official) Effort is a share of the output cap: max/xhigh ≈95%, high ≈80%, medium ≈50%, low ≈20%, minimal ≈10%. ([Reasoning tokens](https://openrouter.ai/docs/use-cases/reasoning-tokens))
- (official) "When a sampling parameter is absent … the provider applies its own default." ([Parameters](https://openrouter.ai/docs/api/reference/parameters))

**Synthetic.new**
- (official) Synthetic offers OpenAI- and Anthropic-compatible APIs, with `/messages/count_tokens` available. **No max_tokens or output-limit docs were found.** ([Synthetic API](https://dev.synthetic.new/docs/api/overview))

## Q2. A cap that is too small returns HTTP 200, an empty answer, and a full bill

- (official) OpenAI: the response has "`status` of `incomplete`" with `reason` `max_output_tokens`. "This might occur before any visible output tokens are produced". Reasoning tokens "are billed as" output tokens. ([Reasoning guide](https://developers.openai.com/api/docs/guides/reasoning))
- (official) Anthropic: "You are billed for the full thinking process, not the thinking content visible in the response." For `stop_reason: "max_tokens"` the remedies are: "Raise `max_tokens` … Lower the effort level". ([Steering thinking](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost))
- (official) Gemini: the model "stops generating with `finish_reason: MAX_TOKENS` and returns truncated or empty output (while still billing for any thinking tokens generated)". The guide recommends lowering `thinking_level` "instead of setting a small `max_output_tokens`." ([Thinking guide](https://aistudio.google.com/docs/thinking.md?generate-content=true))
- (official) OpenRouter: "A reasoning model spent the whole `max_tokens` budget on reasoning. The response is a `200` with `finish_reason: "length"`, empty `content` … Retrying does not help; raise `max_tokens` or cap reasoning instead." ([Errors](https://openrouter.ai/docs/api/reference/errors-and-debugging.md))
- (official, condensed) Kimi: "`reasoning_content` counts towards your input/output token quota." ([Kimi Chat API](https://platform.kimi.ai/docs/api/chat)). Qwen: "Thinking content is billed by Output Token." ([Deep thinking](https://www.alibabacloud.com/help/en/model-studio/deep-thinking))
- (official, condensed) DeepSeek bills on "the total number of input and output tokens" and does not address reasoning separately. ([Pricing](https://api-docs.deepseek.com/quick_start/pricing))
- (community) GPT-5.2-codex at high effort returned blank answers 5/5 times at caps of 350, 400 and 800 tokens. The poster noted "the blank-output rate increases as reasoning.effort increases". ([OpenAI forum 1373609](https://community.openai.com/t/responses-api-empty-output-text-no-message-item-when-status-incomplete-due-to-max-output-tokens-reasoning-only-output/1373609))
- (community) Gemini 2.5 Pro returned `"thoughtsTokenCount": 65535` with `"candidatesTokenCount": null`. ([Google forum 110971](https://discuss.ai.google.dev/t/thinking-ate-all-the-tokens-and-hit-max-tokens/110971))
- (community) Gemini 3.5 Flash: `max_output_tokens=2048` failed every time and `8192` worked. ([python-genai#782](https://github.com/googleapis/python-genai/issues/782))
- (community) Kimi K2.5 returned empty content below 330 tokens. A Moonshot org member (official) replied: "the thinking is not finished yet". Another user advised "8192 or higher". ([HF discussion 40](https://huggingface.co/moonshotai/Kimi-K2.5/discussions/40)). Your Kimi run with a 3,000 limit, ~3,151 tokens used, no answer and a bill matches this pattern exactly.
- (community) An empty answer can also come with STOP and not MAX_TOKENS: Gemini 3 Pro returned HTTP 200 with empty content after ~1,500 reasoning tokens. ([Google forum 111426](https://discuss.ai.google.dev/t/gemini-3-0-2-5-api-returns-http-200-with-empty-content-despite-high-reasoning-token-usage/111426))

## Q3. Unused allowance is free, but OpenAI and OpenRouter still count the cap

- (official) Anthropic: "The `max_tokens` parameter does not factor into OTPM rate limit calculations, so there is no rate limit downside to setting a higher `max_tokens` value." ([Rate limits](https://platform.claude.com/docs/en/api/rate-limits))
- (official) OpenAI: "Your rate limit is calculated as the maximum of `max_tokens` and the estimated number of tokens … Try to set the `max_tokens` value as close to your expected response size as possible." ([Rate limits](https://developers.openai.com/api/docs/guides/rate-limits.md))
- (official) OpenRouter holds an up-front estimate of "the input tokens, plus the completion tokens allowed by `max_tokens` up to a fixed per-request cap". On `weight_exceeds_budget` the advice is: "Lower `max_tokens` or the prompt size, or add credits." ([Limits](https://openrouter.ai/docs/api_reference/limits.md))
- (official) Overflow behaviour on Anthropic: on 4.5+ models, if "input tokens plus `max_tokens` exceeds the context window size, the API accepts the request". "On earlier models, the API returns a validation error". ([Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows))
- (official) Overflow behaviour on Gemini 4: "the API automatically caps the output limit to the remaining space". ([Thinking guide](https://aistudio.google.com/docs/thinking))
- (official, condensed) Overflow behaviour on Kimi: "the API automatically lowers the generation limit … to fit the remaining context space." ([Kimi Chat API](https://platform.kimi.ai/docs/api/chat))
- (official) Overflow behaviour on OpenAI: input over the window "will fail with a 400 error" unless `truncation: auto` is set. ([Responses reference](https://developers.openai.com/api/reference/resources/responses/methods/create.md))
- (official) Speed: Anthropic says thinking "beyond 32k tokens produces long-running requests that can hit system timeouts and open-connection limits". ([Extended thinking](https://platform.claude.com/docs/en/build-with-claude/extended-thinking))
- (official, condensed) Subscription plans count tokens that were actually used. GLM Coding Plan credits come from input, cached and output tokens × multipliers, with "5-hour usage limit and a weekly usage limit". ([z.ai DevPack](https://docs.z.ai/devpack/overview))
- (official, condensed) Synthetic "only uses weekly limits". ([Synthetic rate limits](https://synthetic.new/rate-limits))
- (official, condensed) On Kimi Code, "`k3` (1M) consumes about twice as much quota as `k3-256k`". ([Kimi Code docs](https://www.kimi.com/code/docs/en/))
- (community) A third-party write-up describes Synthetic as "500 requests per five hours". This contradicts the official page and is likely stale. ([write-up](https://hn.jakechampion.name/reader/https://organic.eris.host/limits))

## Q4. Real tools take the model max and clamp it with a global ceiling

**(a) Percentage of context: minority approach**
- (official) Roo Code: `return Math.min(model.maxTokens, Math.ceil(model.contextWindow * 0.2))`. ([Roo api.ts](https://github.com/RooCodeInc/Roo-Code/blob/b867ec9145750d0ae1ff7f02d35406e9bf2a0b16/src/shared/api.ts#L99-L157))
- (official) Continue: `Math.min(llmInfo.maxCompletionTokens, … this.contextLength / 4)`. ([Continue index.ts](https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/llm/index.ts#L234-L243))
- (community) zen-mcp-server: "content_ratio = 0.8, response_ratio = 0.2" for large-context models. ([model_context.py](https://github.com/BeehiveInnovations/zen-mcp-server/blob/7afc7c1cc96e23992c8f105f960132c657883bb1/utils/model_context.py#L127-L142))

**(b) Model max output, clamped: majority approach**
- (official) OpenCode HEAD uses `OUTPUT_TOKEN_FALLBACK = 32_000`, `OUTPUT_TOKEN_MAX = 256_000` ("No reply needs more, however much the model allows"), `ESTIMATE_ERROR = 0.15` and `OUTPUT_TOKEN_MIN = 1_024`. It fits output to the room: `return Math.min(requested, Math.max(OUTPUT_TOKEN_MIN, room))`. ([model-request.ts](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/session/model-request.ts#L54-L104)). The older v1 used a 32,000 ceiling. ([transform.ts@v1.0.150](https://github.com/sst/opencode/blob/v1.0.150/packages/opencode/src/provider/transform.ts#L321-L345))
- (official) Cline SDK: `Math.max(baseDefault, Math.floor(input.model.maxOutputTokens * 0.3))`, where the base is 32,000. It is then capped to `contextWindow - estimatedInputTokens - reserveTokens`. ([gateway.ts](https://github.com/cline/cline/blob/72b3d7140553a733242126e51a7c2e87efe75c64/sdk/packages/llms/src/providers/gateway.ts#L193-L260))
- (official) Claude Code: "For a model ID Claude Code can't resolve … the default is 32000 and the cap is 128000." ([env vars](https://code.claude.com/docs/en/env-vars))
- (official) Library defaults:
  - LiteLLM falls back to `128000`. ([constants.py](https://github.com/BerriAI/litellm/blob/6a1f81b9f8bd365718e781c50141fd3164721dbb/litellm/constants.py#L652))
  - CrewAI: "Unknown IDs use 32000". ([completion.py](https://github.com/crewAIInc/crewAI/blob/bc36a4df62936d57addae345a942e503d2b4bd1d/lib/crewai/src/crewai/llms/providers/anthropic/completion.py#L57-L81))
  - LangChain uses the profile max, falling back to 4096. ([chat_models.py](https://github.com/langchain-ai/langchain/blob/980e4a80d01f699ba359db139cd7c8bfc348c110/libs/partners/anthropic/langchain_anthropic/chat_models.py#L1697-L1707))

**(c) Fixed per task: used only for helper calls**
- (official) Gemini CLI helper caps: classifier 1024, prompt-completion 16000, fast-ack 120, summarizer 2000. ([defaultModelConfigs.ts](https://github.com/google-gemini/gemini-cli/blob/b9776560ea5710bc673891499aaec68c737d160a/packages/core/src/config/defaultModelConfigs.ts#L173-L240))
- (official) Codex web search uses `max_output_tokens: Some(2500)`. ([search.rs](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/codex-api/src/endpoint/search.rs#L212))
- (official) Aider sets a fixed number per model in YAML, e.g. `max_tokens: 64000`. ([model-settings.yml](https://github.com/Aider-AI/aider/blob/5dc9490bb35f9729ef2c95d00a19ccd30c26339c/aider/resources/model-settings.yml#L187-L200))

**(d) Other: send nothing and use the provider default**
- (official) Codex's main `ResponsesApiRequest` has no `max_output_tokens` field. ([common.rs](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/codex-api/src/common.rs#L325-L351))
- (official) Gemini CLI's main chat sets no maxOutputTokens. ([defaultModelConfigs.ts](https://github.com/google-gemini/gemini-cli/blob/b9776560ea5710bc673891499aaec68c737d160a/packages/core/src/config/defaultModelConfigs.ts#L31-L60))

## Q5. Community advice converges on "set it high, steer with effort"

- (community) "Set the max_output_tokens high." "If you want the AI to be encouraged to write less at your expense, use either reasoning.effort or text.verbosity levels." ([OpenAI forum 1373609](https://community.openai.com/t/responses-api-empty-output-text-no-message-item-when-status-incomplete-due-to-max-output-tokens-reasoning-only-output/1373609))
- (community) For Gemini 3 Pro, users report looping: "the worst frontier model when it comes to getting stuck in loops and burning through tokens". Google staff (official) replied "We have escalated the issue". ([Google forum 123259](https://discuss.ai.google.dev/t/bug-gemini-3-pro-constant-looping/123259))
- (community, snippet only) Gemini 3 Flash "often ends in infinite thinking loops until all tokens are consumed." ([Google forum 114528](https://discuss.ai.google.dev/t/gemini-3-flash-preview-infinite-reasoning-loop-causing-max-token-exhaustion-raw-logic-leak/114528/15))
- (community) GLM 5.2 in Cursor printed `<tool_call>Shell…</tool_call>` into the chat instead of running the tool. ([Cursor forum 165202](https://forum.cursor.com/t/built-in-glm-5-2-intermittently-prints-raw-tool-call-markup-instead-of-invoking-agent-tools/165202))
- (community, snippet only) In the merged Cursor thread, someone blamed "the sglang tool-call-parser". ([Cursor forum 165182](https://forum.cursor.com/t/glm-5-2-tool-calls-terminate-chats/165182))
- (community, snippet only) For Qwen speaking tool-call JSON aloud, the suggested workaround is to set `tool_choice` to `required`. ([LiveKit](https://community.livekit.io/t/qwen-model-speaking-tool-call-json-out-loud-instead-of-executing/146))
- Your Qwen fake-tool-call run fits this parser failure pattern. That is the notes' inference, not a confirmed diagnosis.
- (community) Ollama accepts Qwen's recommended `presence_penalty=1.5` but "silently discarded" it. ([ollama#14493](https://github.com/ollama/ollama/issues/14493))
- (community) Uncapped vLLM uses "default_max_tokens = context_window − prompt_tokens", and gpt-oss outputs "repeated words" until the context is full. ([HF forum 173351](https://discuss.huggingface.co/t/never-ending-inference-until-it-reaches-max-context-length/173351))

## Q6. Tools stop loops with counts and budgets, not clocks

- (official) OpenCode v1: `DOOM_LOOP_THRESHOLD = 3` identical tool calls (same name and same JSON input). ([processor.ts@v1.0.150](https://github.com/sst/opencode/blob/v1.0.150/packages/opencode/src/session/processor.ts#L146-L175))
- (official) OpenCode HEAD has an agent step cap. After a `length` stop it injects "Do not apologize, recap, or repeat yourself. Break the remaining work into smaller pieces." ([llm.ts](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/session/runner/llm.ts#L39))
- (official) Roo Code: `ToolRepetitionDetector(limit = 3)` and `DEFAULT_CONSECUTIVE_MISTAKE_LIMIT = 3`. ([ToolRepetitionDetector.ts](https://github.com/RooCodeInc/Roo-Code/blob/b867ec9145750d0ae1ff7f02d35406e9bf2a0b16/src/core/tools/ToolRepetitionDetector.ts#L9-L60))
- (official) Cline CLI: `CLI_DEFAULT_MAX_CONSECUTIVE_MISTAKES = 3`. ([defaults.ts](https://github.com/cline/cline/blob/72b3d7140553a733242126e51a7c2e87efe75c64/apps/cli/src/runtime/defaults.ts#L15))
- (official) Gemini CLI: `TOOL_CALL_LOOP_THRESHOLD = 5`, `CONTENT_LOOP_THRESHOLD = 10`, and an LLM loop judge after 30 turns. Subagents still carry `DEFAULT_MAX_TIME_MINUTES = 10`. ([loopDetectionService.ts](https://github.com/google-gemini/gemini-cli/blob/b9776560ea5710bc673891499aaec68c737d160a/packages/core/src/services/loopDetectionService.ts#L29-L48); [types.ts](https://github.com/google-gemini/gemini-cli/blob/b9776560ea5710bc673891499aaec68c737d160a/packages/core/src/agents/types.ts#L51-L56))
- (official) Token and money budgets:
  - Codex has `max_goal_token_budget`, and `job_max_runtime_seconds` is now a "no-op". ([config_toml.rs](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/config/src/config_toml.rs#L755-L790))
  - The Claude Agent SDK has `max_budget_usd`, and `task_budget` makes "the model … aware of its remaining token budget". ([types.py](https://github.com/anthropics/claude-agent-sdk-python/blob/22b8eb9c19adfa78759b79e22bd664a57843bb06/src/claude_agent_sdk/types.py#L2420-L2430))
  - AutoGen has `TokenUsageTermination`. ([_terminations.py](https://github.com/microsoft/autogen/blob/8390985108cb1e3881f5f7297765758d8ad2540c/python/packages/autogen-agentchat/src/autogen_agentchat/conditions/_terminations.py#L235))
- (official) Anthropic: "In a tool-use loop, each request in the turn has its own `max_tokens`, so it doesn't bound the whole turn's spend." For coding work, the per-call cap alone does not bound the job. ([Steering thinking](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost))
- (community) A Gemini 3.1 user reports it "stopped at anywhere from 5-6 loops". ([Google forum 123259](https://discuss.ai.google.dev/t/bug-gemini-3-pro-constant-looping/123259))

## Q7. Hidden input overhead runs 7k–33k, and tools reserve 10–15% plus a fixed floor

- (community) Claude Code's first-turn overhead is ~32,800 tokens, against ~6,900 for OpenCode. About 24,000 of that is tool definitions. ([Eden AI / Systima](https://www.edenai.co/post/claude-code-vs-opencode-the-33k-token-overhead-gap)). Your Z Code 27,000-token overhead falls inside this range.
- (community, snippet only) Seven MCP servers consumed "67,300 tokens … 33.7% of a 200k context window". ([claudeissues mirror #11364](https://claudeissues.com/issue/11364-lazy-load-mcp-tool-definitions-to-reduce-context-usage))
- (official) OpenCode HEAD: `RESERVE_SHARE = 0.15` and `RESERVE_MIN = 16_000`. The comment says "Single steps grew by up to ~22k tokens at p99". ([compaction.ts](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/session/compaction.ts#L1163-L1171))
- (official) Codex: `default_effective_context_window_percent() … { 95 }`, "after reserving headroom for system prompts, tool overhead, and model output". Auto-compact is at 90%. ([openai_models.rs](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/protocol/src/openai_models.rs#L567-L589))
- (official) Cline legacy: on a 200k window, `contextWindow - 40_000`. The code comment says "80% of 64k meant only ~10k buffer which was too small". ([context-window-utils.ts@v3.30.0](https://github.com/cline/cline/blob/v3.30.0/src/core/context/context-management/context-window-utils.ts))
- (official) Other reserves: Roo `TOKEN_BUFFER_PERCENTAGE = 0.1`, CrewAI `CONTEXT_WINDOW_USAGE_RATIO = 0.85`, Continue `min(1000, 2%)`. ([Roo](https://github.com/RooCodeInc/Roo-Code/blob/b867ec9145750d0ae1ff7f02d35406e9bf2a0b16/src/core/context-management/index.ts#L169-L192); [CrewAI](https://github.com/crewAIInc/crewAI/blob/bc36a4df62936d57addae345a942e503d2b4bd1d/lib/crewai/src/crewai/llms/context_window.py#L39); [Continue](https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/llm/countTokens.ts#L369-L377))
- (official) Anthropic: token counting "is **free to use**", but "The token count is an **estimate**". Do not reuse counts across tokenizer generations. ([Token counting](https://platform.claude.com/docs/en/build-with-claude/token-counting.md))
- (official) Claude Code: "Increasing [CLAUDE_CODE_MAX_OUTPUT_TOKENS] reduces the effective context window available before auto-compaction triggers". ([env vars](https://code.claude.com/docs/en/env-vars))

---

## Recommendation: one rule for every model and all three job kinds

The output cap is computed first. The input check falls out of the same calculation.

```
est_input  = provider token count of your prompt (or your best estimate) × 1.15
room       = context_window − est_input − 40,000
output_cap = min(65,536, model_max_output, room)
if output_cap < 16,000 → do not send (prompt too big for this model)
```

**(b) Output limit: 65,536, clamped to the model max and to the room, with a floor of 16,000. Use the same rule for small review, big review and coding work.**

Why 65,536:
- It is the default cap on Gemini 4 and on DashScope GLM-5.3. It equals DeepSeek's thinking-mode default (64K).
- It is the published max for two of your models (GLM 5.3 and GPT-OSS on Synthetic), so it never needs a per-model exception.
- It is ~5× your largest observed answer (13,300) and 2.6× OpenAI's 25,000 floor.
- It stays below the 128k maxima, which limits OpenAI TPM accounting and the OpenRouter credit hold (Q3).
- It follows the tool consensus of "model max, clamped by a global ceiling" (OpenCode, Cline, Claude Code).

Why the 16,000 floor: it is Kimi's documented minimum, and Anthropic's "16,000 tokens or more" for complex tasks. Below it, empty-but-billed answers are documented (Q2).

Three operational parts of the rule:
1. **Always stream, or use background mode, for Gemini.** Non-streaming Argon is hard-limited to 32,768, which is exactly your 4/4 failure.
2. **On Qwen via DashScope, `max_tokens` excludes thinking.** The same 65,536 then caps only the answer, and `thinking_budget` stays at its default.
3. **On a `length`/`MAX_TOKENS`/`incomplete` result with empty content, retry once with `output_cap = min(model_max_output, room)` and never resend identically.** OpenRouter: "Retrying does not help; raise `max_tokens`". A model that can loop will spend whatever cap you give it, so this one escalation is the only point where the model max is used.

Also classify any final text containing `<tool_call>` or `{"name":…,"arguments":…}` markup as a failed run, not as a review.

Supporting sources for (b): OpenAI Reasoning guide (25,000 floor); Kimi thinking guide (≥16,000); Anthropic Extended thinking (16,000+) and Steering thinking; Gemini Thinking guide (65,536 default, 32,768 non-streaming); DeepSeek API (64K default); DashScope API (GLM 65,536 default; Qwen excludes thinking); OpenRouter Parameters and Errors; OpenCode `model-request.ts` and Cline `gateway.ts` (the clamp pattern).

**(a) Input limit: the prompt must satisfy `prompt × 1.15 + 40,000 + output_cap ≤ context_window`.** Any prompt that leaves less than 16,000 for output is rejected before sending.

Where the numbers come from:
- The 40,000 reserve covers the hidden bridge overhead measured at ~27k (your Z Code run) and ~33k (Systima). It matches Cline's 40,000 reserve on 200k windows.
- The 1.15 factor is OpenCode's `ESTIMATE_ERROR`, which covers tokenizer drift. Anthropic warns that counts are estimates.
- Where a free count endpoint exists (Anthropic, Synthetic `/messages/count_tokens`), use it.

Resulting prompt ceilings, worked out from these formulas (no source lists them):

| Model | Context | Max prompt for a full 65,536 output | Hard max prompt (16,000 output) |
|---|---|---|---|
| GPT-OSS-120B (Synthetic) | 131,072 | 22,205 | 65,280 |
| Kimi K3.1 Pro (Kimi Code) | 262,144 | 136,180 | 179,255 |
| GPT 6.1 Sol | 500,000 | 343,012 | 386,086 |
| GLM 5.3 (Synthetic) | 524,288 | 364,132 | 407,206 |
| GLM-5.3 (Z Code) / Qwen4 Max preview | 1,000,000 | 777,794 | 820,869 |
| Gemini 4 Argon | 1,048,576 | 820,034 | 863,109 |

Supporting sources for (a): Systima/Eden AI overhead measurement (community); Cline legacy `contextWindow - 40_000` (official); OpenCode `ESTIMATE_ERROR = 0.15` and `RESERVE_MIN = 16_000` (official); OpenRouter "context length minus the prompt length" (official); Anthropic token counting (official).

What the rule leaves unbounded: coding work makes many calls, so the per-call cap does not bound the whole job (Anthropic, Q6). The tools add a cumulative per-job token budget (Codex `max_goal_token_budget`, AutoGen `TokenUsageTermination`), and that fits your token-only constraint. No source gives a number for that budget, so none is recommended here.

**Not found:** an official max_tokens recommendation or output-limit doc for Synthetic, DeepSeek (beyond defaults), GLM and Qwen (beyond defaults and maxima); whether DeepSeek's own API counts reasoning in `max_tokens`; the default when OpenAI `max_output_tokens` is omitted; the value of OpenRouter's "fixed per-request cap"; whether Gemini's `maxOutputTokens` affects rate limits; quota units for ChatGPT/Codex plans, Claude plans, Google AI Pro, the Qwen token plan and Kimi Code; hidden-token overhead for Codex CLI, Kimi Code and Gemini CLI; and any sourced number for a cumulative per-job token budget.
