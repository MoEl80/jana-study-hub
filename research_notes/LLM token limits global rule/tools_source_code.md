# How real AI coding/agent tools set max output tokens and manage context (source-code survey)

Method: shallow-cloned each repo's default branch on 2026-11-13 and read the code; a few older-tag files were fetched from raw.githubusercontent.com; docs fetched as markdown from the official doc sites. Every link below is pinned to the commit I read. "official" = the tool vendor's own repo or docs; "community" = third-party project.

Commits read (default branch HEAD, commit date):
- openai/codex `69231e1` (2026-11-13), sst/opencode `ba77ff9` (2026-11-13) plus tag `v1.0.150`, cline/cline `72b3d71` (2026-11-13) plus tag `v3.30.0`, RooCodeInc/Roo-Code `b867ec9` (2026-05-15, last commit), Aider-AI/aider `5dc9490` (2026-05-22), continuedev/continue `5522c6f` (2026-07-20), BerriAI/litellm `6a1f81b` (2026-11-13), google-gemini/gemini-cli `b977656` (2026-11-12), langchain-ai/langchain `980e4a8` (2026-11-12), crewAIInc/crewAI `bc36a4d` (2026-11-13), microsoft/autogen `8390985` (2026-11-12, README says the repo is archived), BeehiveInnovations/zen-mcp-server `7afc7c1` (2025-12-15), musistudio/claude-code-router `057abaa` (2026-10-10), anthropics/claude-agent-sdk-python `22b8eb9` (2026-11-12).

## Q1: How does each tool set the max output tokens (percentage of context / model max / fixed per task / other)?

### Takeaway
No tool sets output as a plain percentage of the context window by default, with one exception: Roo Code clamps it to 20% of the context. The most common pattern is **model max output (from a catalog) clamped by a fixed global ceiling** (OpenCode: 32k, now 256k; Claude Code: per-model default with a 32k/128k fallback; Cline SDK: max(32k, 30% of model max)). It is then **fitted to the room left in the window** (OpenCode, Cline SDK). Several tools send **no max_tokens at all** for the main loop and use the provider default: Codex Responses API, Gemini CLI main chat, Aider unless set per model. **Fixed per-task numbers** are used for helper/side calls: Gemini CLI uses 120, 1024, 2000 or 16000 per helper, Codex web-search uses 2500. Libraries that must send max_tokens to Anthropic default to the model's max output: LiteLLM 128k fallback, LangChain profile max with a 4096 fallback, CrewAI table with a 32k fallback, AutoGen a fixed 4096.

### Cited Findings

**Claude Code (official docs; closed source)**
- `CLAUDE_CODE_MAX_OUTPUT_TOKENS`: "Set the maximum number of output tokens for most requests. Defaults and caps vary by model ... Claude Code lowers a value above a model's cap to the cap. For a model ID Claude Code can't resolve to a model it knows, the default is 32000 and the cap is 128000. Increasing this value reduces the effective context window available before auto-compaction triggers" — [official: Claude Code env vars](https://code.claude.com/docs/en/env-vars)
- `MAX_THINKING_TOKENS`: "Fixed token budget for extended thinking. Claude Code caps it at one token below the request's max output tokens and never below 1,024 ... When unset and thinking is enabled, models with adaptive reasoning choose their own thinking depth, and other models use the cap." — [official: env vars](https://code.claude.com/docs/en/env-vars)
- Tool-output caps are fixed numbers: `MAX_MCP_OUTPUT_TOKENS` "(default: 25000). Claude Code displays a warning when output exceeds 10,000 tokens"; `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS` "Override the default token limit for file reads, which is 25,000 tokens" — [official: env vars](https://code.claude.com/docs/en/env-vars)
- Subagents: the frontmatter fields are `description, tools, disallowedTools, model, permissionMode, mcpServers, hooks, maxTurns, autoCompactWindow, skills, initialPrompt, memory, effort, background, omitClaudeMd, isolation`. **There is no per-subagent max-output field.** Subagents are bounded by `maxTurns`, `effort`, `model` and `autoCompactWindow`. — [official: sub-agents docs](https://code.claude.com/docs/en/sub-agents)
- Agent SDK has a token-pacing option rather than a hard output cap: `task_budget` "API-side task budget in tokens. When set, the model is made aware of its remaining token budget so it can pace tool use and wrap up before the limit. Sent as output_config.task_budget with the task-budgets-2026-03-13 beta header." — [official: claude-agent-sdk-python types.py L2804-2810](https://github.com/anthropics/claude-agent-sdk-python/blob/22b8eb9c19adfa78759b79e22bd664a57843bb06/src/claude_agent_sdk/types.py#L2804-L2810)

**OpenAI Codex CLI (official, codex-rs)**
- The main Responses API request struct `ResponsesApiRequest` has the fields `model, stream, service_tier, input, tools, tool_choice, parallel_tool_calls, reasoning, store, stream_options, include, prompt_cache_key, prompt_cache_options, text, client_metadata, access_programs`. **There is no `max_output_tokens` field**, so the server or model default applies. — [official: codex-api/src/common.rs L325-351](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/codex-api/src/common.rs#L325-L351)
- I found no `model_max_output_tokens` setting in current codex-rs. A grep for `model_max_output` returned nothing; only `conversation_history_max_output_tokens` exists, for the guardian/auto-review feature (`config_toml.rs L598`). → Not found.
- Fixed per-task numbers: the web search endpoint uses `max_output_tokens: Some(2500)` — [official: codex-api/src/endpoint/search.rs L212](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/codex-api/src/endpoint/search.rs#L212). The code-mode exec tool says "`max_output_tokens` sets the token budget for direct `exec` results. Defaults to 10000 tokens." — [official: code-mode-protocol/src/description.rs L33](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/code-mode-protocol/src/description.rs#L33)

**OpenCode (official, sst/opencode)**
- Legacy v1 code (tag v1.0.150): `export const OUTPUT_TOKEN_MAX = 32_000` in `session/prompt.ts` (L58). `maxOutputTokens()` used `const modelCap = modelLimit || globalLimit; const standardLimit = Math.min(modelCap, globalLimit)`. For Anthropic with thinking enabled: "Return text tokens so that text + thinking <= model cap, preferring 32k text when possible. if (budgetTokens + standardLimit <= modelCap) return standardLimit; return modelCap - budgetTokens" — [official: provider/transform.ts@v1.0.150 L321-345](https://github.com/sst/opencode/blob/v1.0.150/packages/opencode/src/provider/transform.ts#L321-L345)
- Current HEAD (rewritten `packages/core`). The ceiling was raised and output is now fitted to the room left in the window:
  - `const OUTPUT_TOKEN_FALLBACK = 32_000` ("Used when the catalog has no output limit")
  - `const OUTPUT_TOKEN_MAX = 256_000` ("No reply needs more, however much the model allows")
  - `const ESTIMATE_ERROR = 0.15`
  - `const WINDOW_HEADROOM = 0.01`
  - `const OUTPUT_TOKEN_MIN = 1_024`
  - `outputLimit`: `const requested = Math.min(limit.output > 0 ? limit.output : OUTPUT_TOKEN_FALLBACK, OUTPUT_TOKEN_MAX)` ... `room = Math.floor(limit.context * (1 - headroom)) - inputTokens.measured - Math.ceil(inputTokens.estimated * (1 + ESTIMATE_ERROR)); return Math.min(requested, Math.max(OUTPUT_TOKEN_MIN, room))`
  - Source: [official: packages/core/src/session/model-request.ts L54-104](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/session/model-request.ts#L54-L104)
- Anthropic thinking-budget variants are still capped at 32k: `const ANTHROPIC_OUTPUT_TOKEN_MAX = 32_000`, with the comment "Alibaba thinking budget variants stay under 64k" (`ALIBABA_THINKING_BUDGET_MAX = 64_000`) — [official: packages/core/src/variant.ts L43-45](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/variant.ts#L43-L45)
- OpenCode's Claude-Agent provider passes the limit by env var: `options.env = { ...options.env, CLAUDE_CODE_MAX_OUTPUT_TOKENS: String(input.maxOutputTokens) }` — [official: claude-agent/claude/query-options.ts L104-105](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/plugin/provider/claude-agent/claude/query-options.ts#L104-L105)

**Cline (official)**
- The current SDK (`sdk/packages/llms`) gateway:
  - `DEFAULT_GATEWAY_MAX_OUTPUT_TOKENS = 32_000`
  - `DEFAULT_GATEWAY_MAX_OUTPUT_FRACTION = 0.3`
  - `GATEWAY_OUTPUT_RESERVE_TOKENS = 1_024`
  - The comment says "the flat default ... is a floor, not a ceiling: a fraction of the model's advertised output budget ... only ever raises it". The code is `Math.max(baseDefault, Math.floor(input.model.maxOutputTokens * DEFAULT_GATEWAY_MAX_OUTPUT_FRACTION))`.
  - Caps are then pushed for the model max output and `remainingContext = contextWindow - estimatedInputTokens - reserveTokens`.
  - A reasoning budget raises the default: `reasoningBudgetTokens + outputReserveTokens`.
  - Source: [official: sdk/packages/llms/src/providers/gateway.ts L29-41, L193-260](https://github.com/cline/cline/blob/72b3d7140553a733242126e51a7c2e87efe75c64/sdk/packages/llms/src/providers/gateway.ts#L193-L260)
- Catalog fallback: `const DEFAULT_MAX_TOKENS = 4096;` ... `const outputToken = model.limit?.output ?? DEFAULT_MAX_TOKENS;` — [official: sdk/packages/llms/src/catalog/catalog-live.ts L92, L319](https://github.com/cline/cline/blob/72b3d7140553a733242126e51a7c2e87efe75c64/sdk/packages/llms/src/catalog/catalog-live.ts#L319)

**Roo Code (official; last commit 2026-05-15)**
- `getModelMaxOutputTokens`:
  - For reasoning-budget models it returns `settings?.modelMaxTokens || DEFAULT_HYBRID_REASONING_MODEL_MAX_TOKENS` (16_384).
  - For Anthropic hybrid models it returns `ANTHROPIC_DEFAULT_MAX_TOKENS` (8192).
  - Otherwise: "If model has explicit maxTokens, clamp it to 20% of the context window. Exception: GPT-5 models should use their exact configured max output tokens" → `return Math.min(model.maxTokens, Math.ceil(model.contextWindow * 0.2))`.
  - Source: [official: src/shared/api.ts L99-157](https://github.com/RooCodeInc/Roo-Code/blob/b867ec9145750d0ae1ff7f02d35406e9bf2a0b16/src/shared/api.ts#L99-L157); `ANTHROPIC_DEFAULT_MAX_TOKENS = 8192` at [packages/types/src/providers/anthropic.ts L204](https://github.com/RooCodeInc/Roo-Code/blob/b867ec9145750d0ae1ff7f02d35406e9bf2a0b16/packages/types/src/providers/anthropic.ts#L204)
- Thinking budget:
  - Default `DEFAULT_HYBRID_REASONING_MODEL_THINKING_TOKENS = 8_192`, or 128 for Gemini 2.5 Pro.
  - "Reasoning cannot exceed 80% of the `maxTokens` value" → `if (maxTokens && reasoningBudget > Math.floor(maxTokens * 0.8)) reasoningBudget = Math.floor(maxTokens * 0.8)`.
  - The minimum is 1024, or 128 for Gemini 2.5 Pro.
  - Source: [official: src/api/transform/model-params.ts L103-125](https://github.com/RooCodeInc/Roo-Code/blob/b867ec9145750d0ae1ff7f02d35406e9bf2a0b16/src/api/transform/model-params.ts#L103-L125)

**Aider (official)**
- Aider does not compute max_tokens. It is set per model as a fixed number in `model-settings.yml` `extra_params`. Example for `anthropic/claude-3-7-sonnet-20250219`: `extra_params: extra_headers: anthropic-beta: ...output-128k-2025-02-19` and `max_tokens: 64000`, `accepts_settings: ["thinking_tokens"]`. Other entries use 8192, 32000, 65536, 128000 and 160000. — [official: aider/resources/model-settings.yml L187-200](https://github.com/Aider-AI/aider/blob/5dc9490bb35f9729ef2c95d00a19ccd30c26339c/aider/resources/model-settings.yml#L187-L200)
- Thinking: `set_thinking_tokens` parses "8k"/"0.5M" style values and sets `self.extra_params["thinking"] = {"type": "enabled", "budget_tokens": num_tokens}`. On OpenRouter it sets `extra_body.reasoning = {"max_tokens": num_tokens}`. `set_reasoning_effort` passes `reasoning_effort` (or `reasoning: {"effort": ...}` on OpenRouter) unchanged. — [official: aider/models.py L791-864](https://github.com/Aider-AI/aider/blob/5dc9490bb35f9729ef2c95d00a19ccd30c26339c/aider/models.py#L791-L864)

**Continue (official)**
- `DEFAULT_MAX_TOKENS = 4096; DEFAULT_CONTEXT_LENGTH = 32_768; DEFAULT_PRUNING_LENGTH = 128000; DEFAULT_REASONING_TOKENS = 2048` — [official: core/llm/constants.ts L1-5](https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/llm/constants.ts#L1-L5)
- The default output is a quarter of the context, capped at the model max: `maxTokens: options.completionOptions?.maxTokens ?? (llmInfo?.maxCompletionTokens ? Math.min(llmInfo.maxCompletionTokens, // Even if the model has a large maxTokens, we don't want to use that every time, because it takes away from the context length  this.contextLength / 4) : DEFAULT_MAX_TOKENS)` — [official: core/llm/index.ts L234-243](https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/llm/index.ts#L234-L243)

**LiteLLM (official)**
- Anthropic requires max_tokens. The default is the model's max output from the cost map: "anthropic requires a default value for max_tokens ... config["max_tokens"] = configured_max_output_tokens if ... else cls.get_max_tokens_for_model(model)". The fallback is `DEFAULT_ANTHROPIC_CHAT_MAX_TOKENS: Final = get_env_int("DEFAULT_ANTHROPIC_CHAT_MAX_TOKENS", 128000)`. — [official: litellm/llms/anthropic/chat/transformation.py L694-721](https://github.com/BerriAI/litellm/blob/6a1f81b9f8bd365718e781c50141fd3164721dbb/litellm/llms/anthropic/chat/transformation.py#L694-L721); [constants.py L652](https://github.com/BerriAI/litellm/blob/6a1f81b9f8bd365718e781c50141fd3164721dbb/litellm/constants.py#L652)
- `reasoning_effort` → `budget_tokens` uses fixed numbers that env vars can override: `DEFAULT_REASONING_EFFORT_LOW_THINKING_BUDGET ... 1024`, `MEDIUM ... 2048`, `HIGH ... 4096`, `XHIGH ... 8192`, `MAX ... 16384`, `DISABLE ... 0` — [official: litellm/constants.py L231, L371-377](https://github.com/BerriAI/litellm/blob/6a1f81b9f8bd365718e781c50141fd3164721dbb/litellm/constants.py#L371-L377). On adaptive-thinking models it sends `type="adaptive", display="summarized"` instead of a budget — [transformation.py L1764-1794](https://github.com/BerriAI/litellm/blob/6a1f81b9f8bd365718e781c50141fd3164721dbb/litellm/llms/anthropic/chat/transformation.py#L1764-L1794).
- LiteLLM caps a legacy `budget_tokens` below `max_tokens`: "(Anthropic requires max_tokens > budget_tokens) ... budget_tokens=max_tokens - 1" — [transformation.py L1844-1855](https://github.com/BerriAI/litellm/blob/6a1f81b9f8bd365718e781c50141fd3164721dbb/litellm/llms/anthropic/chat/transformation.py#L1844-L1855)
- `modify_params = env_flag(os.environ, "LITELLM_MODIFY_PARAMS", ...)` — [litellm/__init__.py L230](https://github.com/BerriAI/litellm/blob/6a1f81b9f8bd365718e781c50141fd3164721dbb/litellm/__init__.py#L230). One example of its use: "if litellm.modify_params: optional_params.pop("thinking", None)" when the last assistant tool-call message has no thinking blocks — [transformation.py L2550-2564](https://github.com/BerriAI/litellm/blob/6a1f81b9f8bd365718e781c50141fd3164721dbb/litellm/llms/anthropic/chat/transformation.py#L2550-L2564)

**LangChain (official)**
- ChatAnthropic: `max_tokens: int | None = Field(default=None, alias="max_tokens_to_sample")`. The docstring says "If not specified, this is set dynamically using the model's `max_output_tokens` from its model profile." The validator is `values["max_tokens"] = profile.get("max_output_tokens", _FALLBACK_MAX_OUTPUT_TOKENS)` with `_FALLBACK_MAX_OUTPUT_TOKENS: Final[int] = 4096`. — [official: libs/partners/anthropic/langchain_anthropic/chat_models.py L139, L1402-1410, L1697-1707](https://github.com/langchain-ai/langchain/blob/980e4a80d01f699ba359db139cd7c8bfc348c110/libs/partners/anthropic/langchain_anthropic/chat_models.py#L1697-L1707)
- ChatOpenAI: `max_tokens: int | None = Field(default=None, alias="max_completion_tokens")`, so nothing is sent by default — [official: langchain_openai/chat_models/base.py L947](https://github.com/langchain-ai/langchain/blob/980e4a80d01f699ba359db139cd7c8bfc348c110/libs/partners/openai/langchain_openai/chat_models/base.py#L947). ChatOpenRouter: `max_tokens: int | None = None` (L246).

**CrewAI (official)**
- Native Anthropic provider: "Anthropic requires max_tokens. Offered models all accept at least 32000. Longest prefix wins. Unknown IDs use 32000". Values are a per-model table: opus/sonnet 4.6+ and 5 = 128000; haiku-4-5, sonnet-4-5 and opus-4-5 = 64000; `_DEFAULT_MODEL_MAX_TOKENS: Final[int] = 32000`. — [official: lib/crewai/src/crewai/llms/providers/anthropic/completion.py L57-81](https://github.com/crewAIInc/crewAI/blob/bc36a4df62936d57addae345a942e503d2b4bd1d/lib/crewai/src/crewai/llms/providers/anthropic/completion.py#L57-L81)
- Generic `LLM`: `max_completion_tokens: int | None = None; max_tokens: int | float | None = None` — [llm.py L283-284](https://github.com/crewAIInc/crewAI/blob/bc36a4df62936d57addae345a942e503d2b4bd1d/lib/crewai/src/crewai/llm.py#L283-L284)

**AutoGen (official; repository archived, successor is Microsoft Agent Framework)**
- Anthropic client: `"max_tokens": create_args.get("max_tokens", 4096)`. The docstring says "Maximum tokens in the response. Default is 4096." — [official: autogen-ext/.../_anthropic_client.py L617, L1187](https://github.com/microsoft/autogen/blob/8390985108cb1e3881f5f7297765758d8ad2540c/python/packages/autogen-ext/src/autogen_ext/models/anthropic/_anthropic_client.py#L617)

**Gemini CLI (official)**
- Main chat configs (`chat-base`, `chat-base-2.5`, `chat-base-3`) set only `thinkingConfig` (`thinkingBudget: DEFAULT_THINKING_MODE`, where `DEFAULT_THINKING_MODE = 8192`, or `thinkingLevel: HIGH`) and temperature. They set **no maxOutputTokens**.
- Helper tasks use fixed numbers: `classifier` maxOutputTokens 1024 (thinkingBudget 512), `prompt-completion` 16000, `fast-ack-helper` 120, `summarizer-default` and `summarizer-shell` 2000.
- Sources: [official: packages/core/src/config/defaultModelConfigs.ts L31-60, L173-240](https://github.com/google-gemini/gemini-cli/blob/b9776560ea5710bc673891499aaec68c737d160a/packages/core/src/config/defaultModelConfigs.ts#L173-L240); [models.ts L180](https://github.com/google-gemini/gemini-cli/blob/b9776560ea5710bc673891499aaec68c737d160a/packages/core/src/config/models.ts#L180)

**OpenRouter (official docs)**
- `max_tokens`: "Optional, integer, 1 or above ... The maximum value is the context length minus the prompt length. For reasoning models, this limit covers reasoning tokens and visible output together on most providers." There is no documented numeric default. — [official: OpenRouter API parameters](https://openrouter.ai/docs/api-reference/parameters)
- Reasoning effort is a **percentage of the output limit**: "max ≈95%, xhigh ≈95%, high ≈80%, medium ≈50%, low ≈20%, minimal ≈10%" of `max_tokens`/`max_output_tokens`. Also: "For Anthropic models, `max_output_tokens` must be strictly higher than the reasoning budget." — [official: OpenRouter reasoning tokens](https://openrouter.ai/docs/use-cases/reasoning-tokens)

**Multi-model orchestrators (community)**
- zen-mcp-server (now PAL MCP), Gemini thinking budget as a percentage of the model's max thinking tokens: `THINKING_BUDGETS = {"minimal": 0.005, "low": 0.08, "medium": 0.33 # (default), "high": 0.67, "max": 1.0}` — [community: providers/gemini.py L37-43](https://github.com/BeehiveInnovations/zen-mcp-server/blob/7afc7c1cc96e23992c8f105f960132c657883bb1/providers/gemini.py#L37-L43)
- zen-mcp-server's context split is a percentage of the window: "Smaller context models (O3) [<300k]: content_ratio = 0.6, response_ratio = 0.4 ... Larger context models (Gemini): content_ratio = 0.8, response_ratio = 0.2" — [community: utils/model_context.py L127-142](https://github.com/BeehiveInnovations/zen-mcp-server/blob/7afc7c1cc96e23992c8f105f960132c657883bb1/utils/model_context.py#L127-L142). `max_output_tokens` is only forwarded when given (`completion_params["max_completion_tokens"] = max_output_tokens`, [providers/openai_compatible.py L436-437](https://github.com/BeehiveInnovations/zen-mcp-server/blob/7afc7c1cc96e23992c8f105f960132c657883bb1/providers/openai_compatible.py#L436-L437)).
- zen-mcp-server sizes its own input from Claude's MCP output cap: "Allocate 60% of tokens for input ... input_token_budget = int(max_tokens * 0.6)", where max_tokens comes from `MAX_MCP_OUTPUT_TOKENS`. The default is 60,000 chars ("~15k tokens input of 25k total"). — [community: config.py L120-142](https://github.com/BeehiveInnovations/zen-mcp-server/blob/7afc7c1cc96e23992c8f105f960132c657883bb1/config.py#L120-L142)
- claude-code-router routes on input size, not output. Its original design: "The router uses tiktoken to calculate token lengths in real time, and if the context exceeds 32K, it switches to [the longContext] model". In current code `longContextThreshold` no longer appears; the gateway reads `body.max_tokens` from the client. — [community: blog/en/project-motivation-and-how-it-works.md L99](https://github.com/musistudio/claude-code-router/blob/057abaa1f95519ab8faf999e1ccef2b80ccdeb9e/blog/en/project-motivation-and-how-it-works.md); [packages/core/src/gateway/limits/window-limiter.ts L73](https://github.com/musistudio/claude-code-router/blob/057abaa1f95519ab8faf999e1ccef2b80ccdeb9e/packages/core/src/gateway/limits/window-limiter.ts#L73)

### Inferences
- The common pattern is: output = min(model's catalog max output, a global ceiling), lowered further to fit the room left in the context window, with a small floor (1024 in OpenCode and in Cline's reserve).
- A percentage of the context window is the minority approach: Roo 20%, Continue 25%, zen 20–40%. Percentages are used more for **reasoning budgets as a share of the output limit**: OpenRouter 10–95%, Roo ≤80%, zen 0.5–100% of max thinking.
- Fixed per-task caps appear where the task's output size is known (classifier, summarizer, search, tool-result truncation).
- OpenCode's change from 32k to 256k suggests a 32k ceiling turned out to be too low for current models. The thinking-budget cap stays at 32k for Anthropic.

### Gaps
- Claude Code's per-model default max output values are not listed in the env-var doc. It links to the Anthropic models page, which I did not fetch.
- I did not inspect just-every/code or consult-llm (not cloned within the tool budget).
- I found no OpenRouter default for max_tokens when it is omitted.

## Q2: How is input/context reserved (compaction thresholds, safety margins/buffers)?

### Takeaway
Compaction triggers range from ~50% (Gemini CLI) through 85–90% (CrewAI, Codex, Cline SDK) to roughly "context minus output reserve" (OpenCode v1, Roo, legacy Cline). Codex uses two separate percentages of the context window: 95% treated as usable for input, and 90% as the auto-compact limit. Fixed-token buffers are also common: legacy Cline used 27k/30k/40k, OpenCode now uses max(15%, 16k), and Continue uses min(1000, 2%).

### Cited Findings
- **Codex**:
  - `const fn default_effective_context_window_percent() -> i64 { 95 }`, documented as "Percentage of the context window considered usable for inputs, after reserving headroom for system prompts, tool overhead, and model output". Used as `context_window.saturating_mul(self.effective_context_window_percent) / 100`.
  - Auto-compact: "When omitted, core derives it from `context_window` (90%). When provided, core clamps it to 90% of the context window" → `(context_window * 9) / 10` and `std::cmp::min(limit, context_limit)`.
  - The fallback model info has `context_window: Some(272_000)`.
  - Sources: [official: protocol/src/openai_models.rs L413-415, L483-493, L567-589](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/protocol/src/openai_models.rs#L567-L589); [models-manager/src/model_info.rs L129-133](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/models-manager/src/model_info.rs#L129-L133)
  - User config: `model_context_window`, `model_auto_compact_token_limit` ("Token usage threshold triggering auto-compaction"), and `model_auto_compact_token_limit_scope` — [config/src/config_toml.rs L176-190](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/config/src/config_toml.rs#L176-L190)
- **Claude Code** (docs):
  - "If you don't set an auto-compact window, Claude Code compacts when the conversation reaches the model's context limit, except ...". Models with a native 1M window "compact before the window fills, at about 967K tokens by default". Sonnet/Opus 4.6 without extended context "compact at the 200K boundary". — [official: model-config docs](https://code.claude.com/docs/en/model-config)
  - `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` "Set the percentage (1-100) ... at which auto-compaction triggers. Use lower values like 50 to compact earlier; the variable can't raise the threshold ... Applies to both main conversations and subagents".
  - `CLAUDE_CODE_AUTO_COMPACT_WINDOW` accepts "from 100000 to 1000000 tokens".
  - `DISABLE_AUTO_COMPACT`.
  - "Increasing [CLAUDE_CODE_MAX_OUTPUT_TOKENS] reduces the effective context window available before auto-compaction triggers."
  - Env-var source: [official: env vars](https://code.claude.com/docs/en/env-vars)
  - Subagents support an `autoCompactWindow` frontmatter field — [official: sub-agents](https://code.claude.com/docs/en/sub-agents)
- **OpenCode v1**:
  - `isOverflow`: `const output = Math.min(model.limit.output, OUTPUT_TOKEN_MAX) || OUTPUT_TOKEN_MAX; const usable = context - output; return count > usable`, so the reserve equals the full output budget (≤32k).
  - Pruning: `PRUNE_MINIMUM = 20_000`, `PRUNE_PROTECT = 40_000` (tool outputs beyond the most recent 40k are pruned when ≥20k can be freed).
  - Source: [official: session/compaction.ts@v1.0.150 L33-44](https://github.com/sst/opencode/blob/v1.0.150/packages/opencode/src/session/compaction.ts#L33-L44)
- **OpenCode HEAD**:
  - `RESERVE_MIN = 16_000` ("The least of the window kept free for the last reply before compaction and for the summary itself").
  - `RESERVE_SHARE = 0.15` ("Share of the window kept free before automatic compaction ... Single steps grew by up to ~22k tokens at p99 in real sessions").
  - `UNKNOWN_WINDOW = 200_000`, `SUMMARY_OUTPUT_FLOOR = 32_000`, `SHRINK_STEPS = [0.85, 0.7, 0.5, 0.35]` (applied after "too long" rejections).
  - `calculateCeiling`: `return window - Math.max(Math.floor(window * RESERVE_SHARE), window >= 2 * RESERVE_MIN ? RESERVE_MIN : 0)`. A user `compaction.buffer` can be a token count or a "%" string.
  - Source: [official: packages/core/src/session/compaction.ts L127-139, L1163-1171](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/session/compaction.ts#L1163-L1171)
- **Cline legacy** (v3.30.0):
  - `contextWindow || 128_000`.
  - `case 64_000: maxAllowedSize = contextWindow - 27_000`, `case 128_000: ... - 30_000`, `case 200_000: ... - 40_000`, `default: Math.max(contextWindow - 40_000, contextWindow * 0.8)`.
  - The default branch carries the comment: "for deepseek, 80% of 64k meant only ~10k buffer which was too small and resulted in users getting context window errors".
  - Source: [official: src/core/context/context-management/context-window-utils.ts@v3.30.0](https://github.com/cline/cline/blob/v3.30.0/src/core/context/context-management/context-window-utils.ts)
- **Cline SDK HEAD**: `COMPACTION_TRIGGER_RATIO = 0.9`, `DEFAULT_PRESERVE_RECENT_TOKENS = 20_000` — [official: sdk/packages/core/src/extensions/context/compaction-shared.ts L19, L29](https://github.com/cline/cline/blob/72b3d7140553a733242126e51a7c2e87efe75c64/sdk/packages/core/src/extensions/context/compaction-shared.ts#L19). Recommended catalog `maxInputTokens: 128_000` (`catalog-cline-recommended.ts L34`).
- **Roo Code**:
  - `TOKEN_BUFFER_PERCENTAGE = 0.1`, with `const reservedTokens = maxTokens || ANTHROPIC_DEFAULT_MAX_TOKENS; const allowedTokens = contextWindow * (1 - TOKEN_BUFFER_PERCENTAGE) - reservedTokens`.
  - Condense triggers when `contextPercent >= effectiveThreshold || prevContextTokens > allowedTokens`.
  - The default `autoCondenseContextPercent = 100` (Task.ts L3888); `MIN_CONDENSE_THRESHOLD = 5`.
  - Source: [official: src/core/context-management/index.ts L24, L169-192](https://github.com/RooCodeInc/Roo-Code/blob/b867ec9145750d0ae1ff7f02d35406e9bf2a0b16/src/core/context-management/index.ts#L169-L192)
- **Gemini CLI**:
  - `DEFAULT_COMPRESSION_TOKEN_THRESHOLD = 0.5` (compress at 50% of the model limit), `COMPRESSION_PRESERVE_THRESHOLD = 0.3` (keep the most recent 30%), `COMPRESSION_FUNCTION_RESPONSE_TOKEN_BUDGET = 50_000`.
  - Source: [official: packages/core/src/context/chatCompressionService.ts L45, L367, L372](https://github.com/google-gemini/gemini-cli/blob/b9776560ea5710bc673891499aaec68c737d160a/packages/core/src/context/chatCompressionService.ts#L45)
- **Aider**:
  - Chat-history summarization budget: "Calculate max_chat_history_tokens as 1/16th of max_input_tokens, with minimum 1k and maximum 8k" → `min(max(max_input_tokens / 16, 1024), 8192)`. The repo map is max_input/8 clamped to 1024–4096. — [official: aider/models.py L356-358, L785-789](https://github.com/Aider-AI/aider/blob/5dc9490bb35f9729ef2c95d00a19ccd30c26339c/aider/models.py#L356-L358)
  - There is no automatic hard truncation. `check_tokens` warns when the input is at or above `max_input_tokens` and asks "Try to proceed anyway?" — [base_coder.py L1396-1415](https://github.com/Aider-AI/aider/blob/5dc9490bb35f9729ef2c95d00a19ccd30c26339c/aider/coders/base_coder.py#L1396-L1415)
- **Continue**:
  - `MAX_TOKEN_SAFETY_BUFFER = 1000; TOKEN_SAFETY_PROPORTION = 0.02` → `Math.min(MAX_TOKEN_SAFETY_BUFFER, contextLength * TOKEN_SAFETY_PROPORTION)`, and `MIN_RESPONSE_TOKENS = 1000`.
  - The autocomplete path uses `maxAllowedPromptTokens = contextLength - reservedTokens - safetyBuffer`.
  - Sources: [official: core/llm/countTokens.ts L369-377](https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/llm/countTokens.ts#L369-L377); [core/autocomplete/templating/index.ts L206-207](https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/autocomplete/templating/index.ts#L206-L207). File reads are limited to `model.contextLength / 2` (`core/tools/implementations/readFileLimit.ts L12`).
- **CrewAI**: `CONTEXT_WINDOW_USAGE_RATIO: Final[float] = 0.85` — [official: lib/crewai/src/crewai/llms/context_window.py L39](https://github.com/crewAIInc/crewAI/blob/bc36a4df62936d57addae345a942e503d2b4bd1d/lib/crewai/src/crewai/llms/context_window.py#L39). `respect_context_window` defaults to True: "Keep messages under the context window size by summarizing content." — [agent/core.py L317-320](https://github.com/crewAIInc/crewAI/blob/bc36a4df62936d57addae345a942e503d2b4bd1d/lib/crewai/src/crewai/agent/core.py#L317-L320)

### Inferences
- There are two ways to reserve headroom. (1) Subtract the output budget from the window (OpenCode v1, Roo, Cline's gateway, Claude Code's note that raising max output lowers the compaction point). (2) Take a fixed share of the window (Codex 90/95%, CrewAI 85%, Cline 90%, Gemini 50%). Newer code combines them: OpenCode uses max(15%, 16k).
- A fixed share alone breaks at the extremes. Cline's DeepSeek comment and OpenCode's "~22k p99 step growth" comment both explain why they added an absolute floor.

### Gaps
- Claude Code's exact buffer formula is not published (closed source). The docs give only behaviour: compaction at the context limit, or ~967K on 1M-window models.

## Q3: How do tools stop looping/rambling models without wall-clock limits?

### Takeaway
They combine (1) step/turn caps, (2) detection of identical tool calls (threshold 3 in OpenCode v1 and Roo, 5 in Gemini CLI), (3) content-repetition and LLM-judged loop checks (Gemini CLI), (4) consecutive-mistake limits (3 in Cline and Roo), and (5) token or USD budgets (Claude Agent SDK `max_budget_usd`, Codex goal token budget, AutoGen `TokenUsageTermination`). Some frameworks still use wall-clock limits as well: CrewAI `max_execution_time` and Gemini subagents at 10 min.

### Cited Findings
- **OpenCode v1** doom loop:
  - `const DOOM_LOOP_THRESHOLD = 3`. If the last 3 parts are the same tool with `JSON.stringify(p.state.input) === JSON.stringify(value.input)`, it asks the user (`Possible doom loop: "${toolName}" called ${DOOM_LOOP_THRESHOLD} times with identical arguments`) or throws, depending on the `doom_loop` permission (ask/deny). — [official: session/processor.ts@v1.0.150 L17, L146-175](https://github.com/sst/opencode/blob/v1.0.150/packages/opencode/src/session/processor.ts#L146-L175)
  - At HEAD the `doom_loop` permission key remains (`v1/config/permission.ts L27`), but I did **not find** a `DOOM_LOOP_THRESHOLD` constant in the rewritten `packages/core`.
- **OpenCode HEAD** step cap:
  - `const stepLimitReached = loaded.agent.info.steps !== undefined && step >= loaded.agent.info.steps`. When it is reached, tools are disabled and the max-steps prompt says "The maximum number of steps allowed for this task has been reached. Tools are disabled until next user input. Respond with text only." — [official: session/runner/llm.ts L261](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/session/runner/llm.ts#L261); [session/runner/max-steps.ts L3](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/session/runner/max-steps.ts#L3)
  - On a `length` stop it injects: "Your last response hit the output token limit ... Do not apologize, recap, or repeat yourself. Break the remaining work into smaller pieces." — [runner/llm.ts L39](https://github.com/sst/opencode/blob/ba77ff90d34efc0bc792169698c760dd892ad1e2/packages/core/src/session/runner/llm.ts#L39)
- **Gemini CLI**:
  - `TOOL_CALL_LOOP_THRESHOLD = 5; CONTENT_LOOP_THRESHOLD = 10; CONTENT_CHUNK_SIZE = 50; LLM_LOOP_CHECK_HISTORY_COUNT = 20; LLM_CHECK_AFTER_TURNS = 30` ("The number of turns that must pass in a single prompt before the LLM-based loop check is activated"), and `DEFAULT_LLM_CHECK_INTERVAL = 10` — [official: packages/core/src/services/loopDetectionService.ts L29-48](https://github.com/google-gemini/gemini-cli/blob/b9776560ea5710bc673891499aaec68c737d160a/packages/core/src/services/loopDetectionService.ts#L29-L48)
  - Also `const MAX_TURNS = 100` (client.ts L85), `maxSessionTurns ?? -1` (unlimited by default, config.ts L1258), and subagent `DEFAULT_MAX_TURNS = 30` and `DEFAULT_MAX_TIME_MINUTES = 10` — [agents/types.ts L51-56](https://github.com/google-gemini/gemini-cli/blob/b9776560ea5710bc673891499aaec68c737d160a/packages/core/src/agents/types.ts#L51-L56)
- **Roo Code**:
  - `DEFAULT_CONSECUTIVE_MISTAKE_LIMIT = 3` — [packages/types/src/provider-settings.ts L29](https://github.com/RooCodeInc/Roo-Code/blob/b867ec9145750d0ae1ff7f02d35406e9bf2a0b16/packages/types/src/provider-settings.ts#L29)
  - `ToolRepetitionDetector(limit = 3)` counts `consecutiveIdenticalToolCallCount` ("0 means unlimited") and raises `mistake_limit_reached`. It is constructed with `this.consecutiveMistakeLimit`. — [official: src/core/tools/ToolRepetitionDetector.ts L9-60](https://github.com/RooCodeInc/Roo-Code/blob/b867ec9145750d0ae1ff7f02d35406e9bf2a0b16/src/core/tools/ToolRepetitionDetector.ts#L9-L60)
- **Cline**:
  - CLI `CLI_DEFAULT_MAX_CONSECUTIVE_MISTAKES = 3`, with "max consecutive mistakes reached (...) in yolo mode" as an exit reason — [official: apps/cli/src/runtime/defaults.ts L15](https://github.com/cline/cline/blob/72b3d7140553a733242126e51a7c2e87efe75c64/apps/cli/src/runtime/defaults.ts#L15)
  - SDK agent runtime: `this.config.maxIterations === undefined || this.state.iteration < this.config.maxIterations` → "Agent runtime exceeded maxIterations" — [sdk/packages/agents/src/agent-runtime.ts L850, L1039](https://github.com/cline/cline/blob/72b3d7140553a733242126e51a7c2e87efe75c64/sdk/packages/agents/src/agent-runtime.ts#L850)
- **Aider**: `max_reflections = 3` → "Only {max_reflections} reflections allowed, stopping." — [official: aider/coders/base_coder.py L101, L939-940](https://github.com/Aider-AI/aider/blob/5dc9490bb35f9729ef2c95d00a19ccd30c26339c/aider/coders/base_coder.py#L939-L940)
- **Codex**:
  - `DEFAULT_AGENT_MAX_THREADS: Option<usize> = Some(6)` and `DEFAULT_AGENT_MAX_DEPTH: i32 = 1` — [official: core/src/config/mod.rs L274, L284](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/core/src/config/mod.rs#L274-L284)
  - `max_goal_token_budget` ("Maximum token budget allowed for a goal").
  - `job_max_runtime_seconds` is now "Removed agent-job setting retained as a no-op" — [config/src/config_toml.rs L755-790](https://github.com/openai/codex/blob/69231e119bfca0b14453515e97d99688ce1c47c9/codex-rs/config/src/config_toml.rs#L755-L790)
- **Claude Code / Agent SDK**:
  - `max_turns` ("Maximum number of conversation turns before the query stops").
  - `max_budget_usd` ("The query will stop if this budget is exceeded, returning an error_max_budget_usd result").
  - Source: [official: claude-agent-sdk-python types.py L2420-2430](https://github.com/anthropics/claude-agent-sdk-python/blob/22b8eb9c19adfa78759b79e22bd664a57843bb06/src/claude_agent_sdk/types.py#L2420-L2430)
  - Subagent `maxTurns`: "When the subagent reaches the limit, Claude Code returns its output marked as partial, and Claude can resume it" — [official: sub-agents docs](https://code.claude.com/docs/en/sub-agents)
- **CrewAI**: `max_iter: int = Field(default=25, ...)` — [base_agent.py L285-287](https://github.com/crewAIInc/crewAI/blob/bc36a4df62936d57addae345a942e503d2b4bd1d/lib/crewai/src/crewai/agents/agent_builder/base_agent.py#L285-L287). Also `max_retry_limit` default 2, plus `max_rpm` and an optional `max_execution_time` (wall clock) — [agent/core.py L248-330](https://github.com/crewAIInc/crewAI/blob/bc36a4df62936d57addae345a942e503d2b4bd1d/lib/crewai/src/crewai/agent/core.py#L277-L330)
- **AutoGen**:
  - `max_tool_iterations: int = Field(default=1, ge=1)` — [official: _assistant_agent.py L85](https://github.com/microsoft/autogen/blob/8390985108cb1e3881f5f7297765758d8ad2540c/python/packages/autogen-agentchat/src/autogen_agentchat/agents/_assistant_agent.py#L85)
  - Termination conditions include `MaxMessageTermination` and `TokenUsageTermination` — [conditions/_terminations.py L62, L235](https://github.com/microsoft/autogen/blob/8390985108cb1e3881f5f7297765758d8ad2540c/python/packages/autogen-agentchat/src/autogen_agentchat/conditions/_terminations.py#L235)
  - RoundRobinGroupChat `max_turns: int | None = None` (L92)
- **zen-mcp-server**: conversation threads are capped at `MAX_CONVERSATION_TURNS` (default 50 if env invalid/unset) — [community: utils/conversation_memory.py L123-126](https://github.com/BeehiveInnovations/zen-mcp-server/blob/7afc7c1cc96e23992c8f105f960132c657883bb1/utils/conversation_memory.py#L123-L126)

### Inferences
- Tools converge on "3 strikes" for identical tool calls and consecutive mistakes (OpenCode v1, Roo, Cline). Gemini CLI uses more lenient thresholds (5 tool calls, 10 content chunks) plus a periodic LLM judge after 30 turns.
- Default turn caps differ widely: Gemini subagent 30, CrewAI 25, Gemini main 100 per prompt, Claude Code/OpenCode none unless configured. Dollar and token budgets are opt-in.
- The output-token cap itself also limits rambling. OpenCode explicitly tells the model, after a `length` stop, not to recap but to split the work.

### Gaps
- The Claude Code CLI's internal loop detection (if any) is not documented in the pages I read.
- I did not look at Cline SDK's default `maxIterations` value or whether it has identical-call detection; the grep for "identical" in agents/core found nothing.
- I did not inspect just-every/code or consult-llm.
