# Cap input at 128,000, then check fit

**Bottom line:** use one rule for every model and every job kind: **input limit = min(128,000, context window − min(65,536, model max output) − 40,000)**, where the input is estimated as **UTF-8 bytes ÷ 2** (the same as characters ÷ 2 for English and code). If the estimate is over the limit, refuse the job and name the files. Never cut files. The rule has two clauses, and they rest on different evidence. The **fit clause** (window − output cap − 40,000) is about **avoiding rejection**. It is backed by official overflow rules from OpenAI, Anthropic, Kimi, Gemini and OpenRouter, by the ~27,000 hidden tokens you measured on the Z Code bridge, and by the 31–34K overhead measured for Claude Code and Kiro. The **128,000 ceiling** is about **quality**. Every benchmark in the notes measures decline in absolute tokens, not as a percentage of the window. Decline is gradual and starts at a few thousand tokens. The latest vendor numbers show frontier models still strong averaged up to 128K and collapsing at 1M. That makes 128,000 a defensible judgment call, not a measured threshold: no source gives a code-review-specific number. For your five reference models, the limit is **128,000 for Kimi K3.1 (Qoder), Kimi K3.1, GLM 5.3 and Gemini 4 Argon, and 25,536 for GPT-OSS-120B**. Your ~1,400-token review prompts are far below every limit. Only big coding jobs will ever hit it.

Source labels: **(official)** = vendor docs, vendor repo or paper authors. **(community)** = third party. Flags carried over from the notes:
- **[condensed]**: the quote came from a fetch tool that returns summarized text. The notes say to spot-check the wording. Vendor quotes marked verbatim in the notes are not flagged.
- **[snippet]**: from a search-result summary; the page itself was not opened.
- **[mirror]**: read through a mirror site (claudeissues.com), not the original GitHub issue.

---

## Q1. Quality falls with length in absolute tokens, well below 50% of any window

- (official) Lost in the Middle: "performance is often highest when relevant information occurs at the beginning or end of the input context, and significantly degrades when models must access relevant information in the middle of long contexts." GPT-3.5-Turbo's accuracy "can drop by more than 20%—in the worst case, performance in 20- and 30-document settings is lower than performance without any input documents (i.e., closed-book performance; 56.1%)." Those settings were only ~4K–6K tokens. The 16K variant behaved the same: "nearly superimposed". ([Liu et al.](https://arxiv.org/abs/2307.03172))
- (official) RULER defines effective length against a fixed bar: "We use the performance of Llama2-7b model at the 4K context length as the threshold" (85.6%). Of the models tested, "only half of them can maintain satisfactory performance at the length of 32K". Effective length was **64K for GPT-4 and Llama3.1-70B (128K claimed)** and **32K for Qwen2-72B, Command-R+ and Llama3.1-8B**. GPT-4 slid from 96.6 at 4K to 81.2 at 128K. In the 2025 rows, Qwen3-235B-A22B and Qwen3-32B pass at 128K and Qwen3-8B passes only to 64K. ([RULER paper](https://arxiv.org/html/2404.06654v3); [RULER GitHub](https://github.com/NVIDIA/RULER))
- (official) NoLiMa removes literal word overlap between question and answer: "At 32K, for instance, 10 models drop below 50% of their strong short-length baselines." GPT-4o falls "from an almost-perfect baseline of 99.3% to 69.7%". Effective length (≥85% of base) was **16K for GPT-4.1, 8K for GPT-4o, 4K for Claude 3.5 Sonnet, and 2K for Gemini 2.5 Flash and Llama 3.3 70B**. ([NoLiMa](https://github.com/adobe-research/NoLiMa))
- (official) Du et al. (EMNLP Findings 2025) show that length alone hurts: "even when models can perfectly retrieve all relevant information, their performance still degrades substantially (13.9%–85%) as input length increases but remains well within the models' claimed lengths". This holds even with whitespace filler or masked filler. On HumanEval, Llama-3.1-8B lost 12.2 points at 7.5K of whitespace and 31.7 at 30K. GPT-4o lost 3.1 at 30K. "The closed-source models generally exhibit more robustness than the open-source ones." ([Du et al.](https://arxiv.org/abs/2510.05381v1))
- (official, Chroma vendor research) Context Rot tested 18 models from Anthropic, OpenAI, Google and Qwen: "Across all experiments, model performance consistently degrades with increasing input length." "Even a single distractor reduces performance relative to the baseline." On LongMemEval, ~113K-token prompts against ~300-token focused prompts: "All models performed significantly better on focused prompts." Chroma gives curves, not a threshold. ([Chroma](https://www.trychroma.com/research/context-rot))
- (official) LongCodeBench (code repair): "performance drops such as from 29% to 3% for Claude 3.5 Sonnet". LongSWE-Bench resolved rates: **Claude 3.5 Sonnet 29/19/15/3 at 32K/64K/128K/256K**; **Gemini 2.5 Pro 23/25/22/24 up to 256K, then 12 at 512K and 7 at 1M**. Code QA (multiple choice) stayed much flatter. ([LongCodeBench](https://arxiv.org/html/2505.07897v3))
- (official, vendor) Gemini 3.1 Pro model card, MRCR v2 8-needle: **84.9% averaged to 128K but 26.3% at 1M**. Gemini 3 Pro scores 77.0% and 26.3%. Sonnet 4.6 scores 84.9%, Opus 4.6 84.0% and GPT-5.2 83.8% at 128K. No vendor point between 128K and 1M was found. ([Gemini 3.1 Pro card](https://deepmind.google/models/model-cards/gemini-3-1-pro/))
- (official, vendor) GPT-5.2 is "the first model we've seen that achieves near 100% accuracy on the 4-needle MRCR variant (out to 256k tokens)". **[snippet]** ([OpenAI](https://openai.com/en-US/index/introducing-gpt-5-2/))
- (community) Databricks long-context RAG: "Llama-3.1-405b performance starts to decrease after 32k tokens". GPT-4-0125 drops after 64K. gpt-4-turbo and claude-3-sonnet saturate around 16K. gpt-4o and claude-3.5-sonnet stay "mostly stable". ([Databricks](https://www.databricks.com/blog/long-context-rag-performance-llms))
- (community) Fiction.LiveBench: aggregators show only the 16K column. Kimi K2.5 tops the open models at 86.1%. **[mirror]** The aggregators were not checked against fiction.live, whose page returned no data. ([DataLearner](https://www.datalearner.com/en/benchmarks/fiction-livebench); [Epoch AI](https://epoch.ai/benchmarks/fictionlivebench))
- **Drop point as % of window:** none of the papers define one. Converted from their tables, RULER effective length is ~25–50% of a 128K claim and under 13% for most 1M claims, and NoLiMa's is 0.1–6%. The decline is a slope that begins at a few thousand tokens, not a cliff at 50, 60 or 70%. Anthropic says the same (below).
- **Not read:** Michelangelo, LongBench / LongBench v2, HELMET and BABILong. The notes report no numbers for them. No results exist in the notes for GPT-5.x, Kimi, GLM, DeepSeek or gpt-oss on NoLiMa or RULER.

## Q2. Vendors warn about context rot but publish no fill percentage

- (official) Anthropic, verbatim: "more context isn't automatically better. As token count grows, accuracy and recall degrade, a phenomenon known as *context rot*. This makes curating what's in context just as important as how much space is available." ([Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows))
- (official) Anthropic Engineering: the factors "create a performance gradient rather than a hard cliff". The guiding principle is "finding the smallest possible set of high-signal tokens that maximize the likelihood of some desired outcome." ([Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents))
- (official) Anthropic, verbatim: for "20k+ tokens … Put long-form data at the top". "Queries at the end can improve response quality by up to 30 percent in tests". ([Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices))
- (official) OpenAI GPT-4.1 guide: "long context performance can degrade as more items are required to be retrieved". Instructions at both the beginning and end work "better than only above or below". ([GPT-4.1 Prompting Guide](https://developers.openai.com/cookbook/examples/gpt4-1_prompting_guide))
- (official) Gemini: with multiple needles "the model does not perform with the same accuracy". "the model's performance will be better if you put your query / question at the end of the prompt". **[condensed]** ([Gemini Long context](https://aistudio.google.com/docs/long-context))
- (official) DeepSeek, Kimi, GLM, Qwen, OpenRouter and Synthetic: none of the pages read gives fill guidance or long-context quality notes.
- **Conclusion:** no vendor gives a number. Any ceiling, including 128,000, is a design choice justified by the context-rot statements, not vendor policy.

## Q3. Input over the window is always an error; output overflow varies by provider

- (official) OpenAI Responses: "`disabled` (default): If the input size will exceed the context window size for a model, the request will fail with a 400 error." With `truncation: auto`: "the API subtracts the model's maximum output allowance from its input limit". ([Responses reference](https://developers.openai.com/api/reference/resources/responses/methods/create.md))
- (community) OpenAI Chat Completions: users report "400 This model's maximum context length is 1048576 tokens. However, you requested 1049647 tokens (985647 in the messages, 64000 in the completion)." **[snippet]** The official conversation-state guide speaks only of output being "truncated". ([OpenAI forum](https://community.openai.com/t/gpt-4o-context-length-issue-input-tokens-within-limit-but-exceeds-maximum/1109543); [Conversation state](https://developers.openai.com/api/docs/guides/conversation-state))
- (official) Anthropic, verbatim: "If the input alone already exceeds the model's context window, the API returns a 400 `invalid_request_error` ('prompt is too long') on every model. On Claude 4.5 models and newer, if input tokens plus `max_tokens` exceeds the context window size, the API accepts the request … it stops with `stop_reason: "model_context_window_exceeded"`. On earlier models, the API returns a validation error instead." ([Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows))
- (official) Gemini: "If your input tokens plus max_output_tokens exceed 1,048,576 tokens, the API automatically caps the output limit to the remaining space in the context window". **[condensed]** ([Gemini Long context](https://aistudio.google.com/docs/long-context))
- (official) Kimi: when input plus `max_completion_tokens` exceeds the window, the API lowers the generation limit for that request to fit. "The input token count itself must be less than the model context window size." **[condensed]** ([Kimi Chat API](https://platform.kimi.ai/docs/api/chat))
- (official) OpenRouter: "The maximum value is the context length minus the prompt length." ([Parameters](https://openrouter.ai/docs/api/reference/parameters))
- (official) GLM / z.ai lists `model_context_window_exceeded` as a `finish_reason` but does not say when it fires. **[condensed]** ([z.ai Chat Completion](https://docs.z.ai/api-reference/llm/chat-completion))
- (official) DeepSeek's error-code page has no context-length error; the closest are "400 - Invalid Format" and "422 - Invalid Parameters". Synthetic and Qwen pricing pages do not document overflow. **[condensed]** ([DeepSeek Error Codes](https://api-docs.deepseek.com/quick_start/error_codes); [Synthetic](https://dev.synthetic.new/docs/openai/chat-completions))
- **Consequence for a fixed output cap:** on Gemini, Kimi and Claude 4.5+, a request that overflows is not rejected. The output cap shrinks silently, or generation stops early. Only a pre-send check of input + output cap ≤ window protects the fixed min(65,536, max) output.

## Q4. chars/4 undercounts code by up to 80% on new tokenizers

- (official) Gemini: "a token is equivalent to about 4 characters." System instructions and tools are "counted as part of the input tokens". ([Gemini tokens](https://aistudio.google.com/docs/tokens))
- (official) Anthropic: "Claude 4.7 and later models … use a newer tokenizer. The same input text produces approximately 30 percent more tokens than on earlier models." The token count "is an **estimate**". ([Token counting](https://platform.claude.com/docs/en/build-with-claude/token-counting))
- (community, measured with each vendor's counter) PlayCode, chars per token (old Claude → Claude 4.7+): **English 4.44 → 3.33; Python 2.71 → 2.20; TypeScript 3.22 → 2.45; Rust 2.87 → 2.23; JSON tool schema 3.78 → 3.01; Chinese 0.87 → 0.88**. o200k (GPT): TypeScript ≈ 4.24, Chinese ≈ 1.26. Gemini: TypeScript ≈ 3.66. So chars/4 undercounts Python on new Claude by ~82% (4 ÷ 2.20). ([PlayCode](https://playcode.io/blog/real-price-of-frontier-models))
- (community, >1M requests) OpenRouter found the median ratio of Opus 4.7's native token count to chars/4 at **1.41x–1.73x** on real traffic. For Opus 4.6 it was 1.00x–1.30x. ([OpenRouter analysis](https://openrouter.ai/blog/insights/opus-47-tokenizer-analysis/))
- (official) Anthropic Opus 4.7 migration guide: "roughly 1x to 1.35x as many tokens … (up to ~35% more, varying by content)". **[snippet]** (same OpenRouter link)
- (official, paper) Roberts et al.: "assuming near-consistent tokenization rates across domains and models is an oversimplification". ([arXiv 2601.11518](https://arxiv.org/html/2601.11518v1))
- (official, paper) Arabic: ~2.4 tokens per word against 1.5–1.6 for English. **[snippet]** ([arXiv 2602.05374](https://arxiv.org/pdf/2602.05374)) Petrov et al.: some languages are "more than 15 times longer than English". ([arXiv 2305.15425](https://arxiv.org/abs/2305.15425)) No chars-per-token figure for Arabic was found.
- **Free counters:**
  - (official) Anthropic `count_tokens` "is **free to use**", with 5,000–20,000 RPM. ([Token counting](https://platform.claude.com/docs/en/build-with-claude/token-counting))
  - (official) Gemini `count_tokens` returns "the total number of tokens in the input only". ([Gemini tokens](https://aistudio.google.com/docs/tokens))
  - (official) Kimi `POST /v1/tokenizers/estimate-token-count` needs a Bearer key; pricing is unconfirmed. **[snippet]** ([Kimi estimate](https://platform.kimi.ai/docs/api/estimate))
  - (community) OpenAI: offline tiktoken o200k matched live usage. ([PlayCode](https://playcode.io/blog/real-price-of-frontier-models))
- **Safety factors in tools:**
  - (official) PAL MCP: `return len(text) // 3  # Conservative estimate`. ([model_context.py](https://github.com/BeehiveInnovations/pal-mcp-server/blob/main/utils/model_context.py))
  - (official) OpenCode: `ESTIMATE_ERROR = 0.15`. ([model-request.ts](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/session/model-request.ts#L54-L104))
  - (official) OpenCode v2 counts serialized JSON at 4 chars/token with a 20,000 buffer. **[snippet]** ([OpenCode compaction](https://v2.opencode.ai/docs/compaction))
  - Neither ×1.15 nor ÷3 covers the measured 1.82x for Python on Claude 4.7+.

## Q5. Coding harnesses add 2K–34K hidden tokens before your first word

- (community, measured 2026-10-08, "OK" prompt) TestDino first-call input tokens: **Kiro 31,798; Claude Code 31,480 (34,161 with a real profile and 3 MCP servers); Copilot CLI 17,059; Codex CLI 14,768; Qwen Code 13,677; OpenCode 13,437; Cursor CLI 13,174; Gemini CLI 9,290; Cline 5,382; Aider ~2,500; Pi 1,894**. Kimi Code, Roo and Z Code were not covered. ([TestDino](https://testdino.com/blog/harness-overhead-benchmark))
- (community, proxy traces) Peak context on one bug task: Claude Code 31,966; OpenCode 34,506; Cline 33,981; Aider 13,808. ([dev.to, Lars de Ridder](https://dev.to/larsderidder/five-clis-walk-into-a-context-window-1c5a))
- (community) Claude Code's first-turn overhead is ~32,800 tokens. ([Eden AI](https://www.edenai.co/post/claude-code-vs-opencode-the-33k-token-overhead-gap))
- (community) 7 MCP servers used 67,300 tokens (33.7% of 200K). **[mirror]** ([claudeissues #11364](https://claudeissues.com/issue/11364-lazy-load-mcp-tool-definitions-to-reduce-context-usage)) GitHub MCP with all 93 tools is ≈55,000 tokens (labelled "Est."). ([dev.to kenimo49](https://dev.to/kenimo49/your-mcp-server-eats-55000-tokens-before-your-agent-says-a-word-i-measured-the-real-cost-19l8))
- (community) Claude Code v2.1.111 on Opus 4.7 "consumes ~1.7–2x more context tokens than v2.1.110 on a fresh session". **[mirror]** ([claudeissues #49356](https://claudeissues.com/issue/49356-bug-v2-1-111-with-opus-4-7-consumes-1-7-2x-more-context-tokens-than-v2-1-110-on))
- Your Z Code measurement (~27,000 added to a 650-token prompt) sits in the Claude Code / Kiro class. No published Z Code figure was found.

## Q6. Real tools mostly compact; the few that refuse use a fixed or conservative budget

- (official) Codex: `default_effective_context_window_percent() -> i64 { 95 }`, documented as "Percentage of the context window considered usable for inputs, after reserving headroom for system prompts, tool overhead, and model output". Auto-compact is at `(context_window * 9) / 10`. ([openai_models.rs](https://github.com/openai/codex/blob/main/codex-rs/protocol/src/openai_models.rs))
- (official) Gemini CLI compresses history at `DEFAULT_COMPRESSION_TOKEN_THRESHOLD = 0.5`. It **refuses** an over-large request: `if (estimatedRequestTokenCount > remainingTokenCount) { yield { type: GeminiEventType.ContextWindowWillOverflow, ... }; return turn; }`. ([chatCompressionService.ts](https://github.com/google-gemini/gemini-cli/blob/main/packages/core/src/context/chatCompressionService.ts); [client.ts](https://github.com/google-gemini/gemini-cli/blob/main/packages/core/src/core/client.ts))
- (official) Qwen Code: `DEFAULT_PCT = 0.85`, `SUMMARY_RESERVE = 20_000` and `AUTOCOMPACT_BUFFER = 13_000`. The comment says the buffer "Matches claude-code's AUTOCOMPACT_BUFFER_TOKENS … empirically chosen to leave headroom". The trigger is `min(pct * window, absoluteCeiling)`. ([chatCompressionService.ts](https://github.com/QwenLM/qwen-code/blob/main/packages/core/src/services/chatCompressionService.ts))
- (community) Claude Code compacts at ~367K–420K on 1M-window Opus, i.e. it does not let 1M sessions fill. **[mirror]** No official reason was found. ([claudeissues #54056](https://claudeissues.com/issue/54056-bug-auto-compact-triggers-consistently-at-367k-tokens-on-opus-4-7-1m-in-claude-c))
- (official) Kimi CLI: `reserved_context_size … default=50_000`, `compaction_trigger_ratio … default=0.85`, whichever fires first. ([compaction.py](https://github.com/MoonshotAI/kimi-cli/blob/main/src/kimi_cli/soul/compaction.py))
- (official) Goose: `DEFAULT_COMPACTION_THRESHOLD: f64 = 0.8`, combined as `threshold.min(token_limit as f64 / context_limit as f64)`, i.e. a percent capped by an absolute token limit. ([goose mod.rs](https://github.com/block/goose/blob/main/crates/goose/src/context_mgmt/mod.rs))
- (official) Roo Code: `allowedTokens = contextWindow * (1 - TOKEN_BUFFER_PERCENTAGE) - reservedTokens`, with the buffer at 0.1. ([Roo index.ts](https://github.com/RooCodeInc/Roo-Code/blob/main/src/core/context-management/index.ts))
- (official) Cline legacy: `contextWindow - 40_000` on 200K windows; "80% of 64k meant only ~10k buffer which was too small". ([context-window-utils.ts](https://github.com/cline/cline/blob/v3.30.0/src/core/context/context-management/context-window-utils.ts))
- (official) PAL MCP: "STRICT REJECTION at MCP boundary. No partial inclusion - either all files fit or request is rejected." The file threshold is 0.6 of the window below 500K, 0.7 at ≥500K and 0.8 at ≥1M. It returns `"status": "code_too_large"`. ([file_utils.py](https://github.com/BeehiveInnovations/pal-mcp-server/blob/main/utils/file_utils.py))
- (official) Aider: "Your estimated chat context of {input_tokens:,} tokens exceeds the {max_input_tokens:,} token limit", then "Try to proceed anyway?". ([base_coder.py](https://github.com/Aider-AI/aider/blob/main/aider/coders/base_coder.py))
- (official) PR-Agent: `max_model_tokens = 32000 # Limits the maximum number of tokens that can be used by any model, regardless of the model's default capabilities.` This is an absolute ceiling independent of the window. Its default `large_patch_policy = "clip"` truncates. ([configuration.toml](https://github.com/qodo-ai/pr-agent/blob/main/pr_agent/settings/configuration.toml))
- (official) LiteLLM with `enable_pre_call_checks` "raises `ContextWindowExceededError`". SWE-agent exits with `exit_context`. ([LiteLLM](https://docs.litellm.ai/docs/proxy/reliability); [SWE-agent](https://github.com/SWE-agent/SWE-agent/blob/main/sweagent/agent/agents.py))
- The code comments give **headroom** reasons, never quality reasons. Only PR-Agent and Goose apply an absolute token ceiling.

## Q7. When files don't fit, refuse and split visibly; don't summarize code under review

- (official) PR-Agent on silent omission: "Omitting it would make the gap invisible: the model would report on the pull request while quietly skipping a changed file, and the result is indistinguishable from a file that is clean." ([pr_processing.py](https://github.com/qodo-ai/pr-agent/blob/main/pr_agent/algo/pr_processing.py))
- (official) PR-Agent's opt-in chunking will "split the diff into chunks, review each chunk, and merge the per-chunk results into one review". No accuracy data is published. ([configuration.toml](https://github.com/qodo-ai/pr-agent/blob/main/pr_agent/settings/configuration.toml))
- (official) Long context vs RAG: "when resourced sufficiently, LC consistently outperforms RAG in terms of average performance". Self-Route keeps "comparable performance to LC" at lower cost. ([Li et al.](https://arxiv.org/abs/2407.16833))
- (official) LongCodeBench: **Claude 3.5 Sonnet + RAG held 21–23% from 32K to 256K**, while plain long context fell to 3%. ([LongCodeBench](https://arxiv.org/html/2505.07897v3))
- (official) Cline: "when you chunk code for embeddings, you're literally tearing apart its logic". ([Cline blog](https://cline.bot/blog/why-cline-doesnt-index-your-codebase-and-why-thats-a-good-thing))
- (official) Aider's repo map ranks files on a dependency graph, with "`--map-tokens` … defaults to 1k tokens". ([Aider repomap](https://aider.chat/docs/repomap.html))
- (official) OpenHands condenser: 54% vs 53% solve rate. Agent-history summarization barely hurt. ([OpenHands blog](https://openhands.dev/blog/openhands-context-condensensation-for-more-efficient-ai-agents))
- (official) Du et al.'s "Retrieve then Solve" (recite the evidence, then answer) gave GPT-4o up to +4% on RULER. ([Du et al.](https://arxiv.org/abs/2510.05381v1))
- **Order that keeps accuracy best with no silent cuts:**
  1. Refuse with a list of files and their estimated sizes.
  2. Let the caller narrow the set, or split it into explicit sub-jobs, each under the limit, with a manifest of covered files.
  3. Use retrieval only to choose which whole files go in.
  4. Never summarize the code under review, because summaries lose line-level detail.
- No study compares map-reduce code review against single-pass review for accuracy.

---

## Recommendation: one formula, two clauses, two different reasons

```
out          = min(65,536, model_max_output)                       # already fixed
est_input    = UTF-8 bytes of everything you send ÷ 2              # = chars ÷ 2 for English/code
input_limit  = min(128,000, context_window − out − 40,000)
if est_input > input_limit → refuse: "Job needs ~X tokens; limit for <model> is Y. Files: …"
```

The only per-model inputs are the context window and max output. Both are published by every provider and by OpenRouter's model list, so new models are covered automatically. There is no table and no learning.

| Model | Context | Max output | Output cap | Fit clause (window − out − 40,000) | **Input limit** | ≈ characters at ÷2 |
|---|---|---|---|---|---|---|
| Kimi K3.1 (Qoder) | 200,000 | 32,000 | 32,000 | 128,000 | **128,000** | 256,000 |
| GPT-OSS-120B | 131,072 | 65,536 | 65,536 | 25,536 | **25,536** | 51,072 |
| Kimi K3.1 | 262,144 | 131,072 | 65,536 | 156,608 | **128,000** | 256,000 |
| Synthetic GLM 5.3 | 524,288 | 65,536 | 65,536 | 418,752 | **128,000** | 256,000 |
| Gemini 4 Argon | 1,048,576 | 65,536 | 65,536 | 943,040 | **128,000** | 256,000 |

**The fit clause is chosen for FITTING only.** Three sources support it:
- **Hard-rule docs:** OpenAI's input-over-window 400 (and `truncation: auto` subtracting the output allowance), Anthropic's "prompt is too long", Kimi's "input … must be less than the model context window", and OpenRouter's "context length minus the prompt length". On the silent-shrink providers (Gemini, Kimi, Claude 4.5+), the check is the only thing that guarantees your fixed output cap.
- **The 40,000 reserve:** your measured ~27,000 on Z Code, TestDino's 31,480–34,161 for Claude Code and 31,798 for Kiro, and Cline's `contextWindow - 40_000`. It does not cover heavy MCP loads (55,000–67,300). If a bridge loads many MCP servers, its overhead must be measured, or it must be run without them.
- **Tool code:** Gemini CLI refuses when the estimate exceeds what remains; the Qwen Code / Claude Code constants (20,000 + 13,000 reserve); Kimi CLI's 50,000 reserve.

**The 128,000 ceiling is chosen for QUALITY and is a judgment call.** No source gives a code-review threshold. Four pieces of evidence point to 128,000:
- It is the longest length at which current vendor evidence still shows frontier models strong: MRCR v2 84–85% averaged to 128K for Gemini 3.1 Pro, Sonnet 4.6, Opus 4.6 and GPT-5.2. The only point beyond it is 26.3% at 1M.
- It is where RULER stops testing, and where the best 2025 open models (Qwen3-235B, Qwen3-32B) still pass.
- Gemini 2.5 Pro's code-repair score held steady to 256K, while Claude 3.5 Sonnet's had already halved by 128K. So 128K is not safe for every model, but it is the region where strong models still hold up.
- It keeps Gemini under its 200K price tier and Qwen Plus under its 256K tier. ([Gemini pricing](https://aistudio.google.com/docs/pricing); [Qwen pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing))

Because the estimate uses ÷2, a 128,000-*estimated* job is really ~64K–128K tokens, depending on tokenizer and content. For English on GPT, the real count is ~64K, which matches RULER's 64K effective length for GPT-4 and Llama-3.1-70B. The ceiling cannot promise full quality. NoLiMa and Du et al. show decline already at 8K–30K. It only bounds how far down the slope a job may go. If you value review accuracy over job size, a lower ceiling (64,000) has equal support: RULER and Databricks put many models' knees at 32K–64K. Pick one number and keep it global.

**Why ÷2 and not ÷4.** chars/4 is calibrated on English prose. Measured undercounts are up to 1.82x for Python on Claude 4.7+ (PlayCode) and 1.41–1.73x on real Opus 4.7 traffic (OpenRouter). OpenCode's 1.15 and PAL's ÷3 (1.33x) do not cover those numbers; ÷2 (2.0x) does. Counting UTF-8 bytes instead of characters is my inference, not a sourced method. For Chinese, measured at 0.87–1.48 chars/token, a CJK character is 3 bytes, so bytes ÷ 2 still overestimates the token count. For Arabic (2 bytes per character), bytes ÷ 2 assumes one token per character. No Arabic chars-per-token figure was found to check this. ÷2 wastes up to half the budget for English prose on GPT and Gemini. That only matters for GPT-OSS-sized windows.

**The 50/60/70% vs "whatever fits" disagreement.** Both camps are fitting rules, and percentages fail in both directions.
- **Small windows:** on GPT-OSS-120B, 50% means 65,536 input + 65,536 output = the whole 131,072 window, with no room for the 27,000 the bridge adds. That is a rejection or a shrunken output. 60% and 70% are worse.
- **Large windows:** on Gemini 4 Argon, 50% allows 524,288 tokens. That is the 512K point where Gemini 2.5 Pro's code repair halved, and halfway to the 1M point where Gemini 3.x scores 26.3%.
- **The research itself:** no paper expresses degradation as a share of the window. The percentages tools use (Gemini CLI 50%, PAL 60–80%, Codex 90–95%) are documented as headroom, not quality.
- **"Whatever fits"** (window − output − 32,768 or 40,000) is right about fitting, and it is the second clause here. Used alone, it lets Argon take 943,040 tokens, where the only quality evidence is poor.
- **Resolution:** min(absolute quality ceiling, fit limit). This is the same shape Goose, Qwen Code and Claude Code already use (percent or ceiling, whichever is smaller), with the percent replaced by an absolute number, because quality is measured in absolute tokens.

**Not found:** any benchmark of code or design review quality against input length; long-context results for Kimi, GLM, DeepSeek or gpt-oss; Michelangelo, LongBench, HELMET and Fiction.LiveBench per-length tables; Arabic chars-per-token; Z Code's or Kimi Code's own hidden-token size; DeepSeek, Qwen and Synthetic overflow behavior; and a vendor-stated fill percentage or safety margin.

## Conclusion

The conflict in the earlier research came from treating one number as doing two jobs. Fitting is a property of the window and is best handled by subtraction. Quality is a property of the token count and is best handled by an absolute ceiling. Once they are separated, the rule gets simpler, not harder. The same min() also protects you from new 1M–10M window models: a bigger advertised window raises only the fit clause, which the quality ceiling already caps. The open risk is the quality number itself. A one-off check, not ongoing learning, would test it: rerun one fixed review at 32K, 64K and 128K of padded context, then move the single global ceiling if the findings degrade.
