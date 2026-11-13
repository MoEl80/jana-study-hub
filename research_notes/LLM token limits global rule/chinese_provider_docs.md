# Token limits for reasoning models: DeepSeek, Moonshot Kimi, Zhipu/z.ai GLM, Alibaba Qwen, Synthetic.new

Research date: 2026-11-13. Every source below is a vendor page ("official") unless it is marked "community".
Method caveat: pages were read through a fetch tool that returns extracted or condensed text. Text in quotation marks is what that tool reported as verbatim. Spot-check exact wording before republishing.
Model generations in the current docs: DeepSeek V4.1-Flash / V4-Pro; Kimi K3 / K3.1 Pro / K2.6 / K2.7-code; GLM-5.3 / 5.2 / 5.1 / 5 / 4.7 / 4.6; Qwen3.5-3.8 / qwen4-max-preview. Older figures such as "deepseek-reasoner 32K default / 64K max" and "kimi-k2-thinking" no longer appear on these pages; the K2-thinking guide URL now covers K3.

## Q1. Parameter names, defaults and maximums, and whether reasoning tokens count against them

### Takeaway
On every native API checked, the output cap now covers reasoning plus answer tokens: DeepSeek (by inference), Kimi (explicit), GLM via DashScope (explicit), and DeepSeek-V4 via DashScope (explicit). The exception is most Qwen models on DashScope: there, `max_tokens` covers only the answer, and a separate `thinking_budget` caps the reasoning. Defaults are large (64K-131K in thinking mode) and maximums are 128K-1M, so one global output rule of "leave it unset, or set it high (at least 32K, ideally 64K)" works everywhere.

### Cited Findings
**DeepSeek (official)**
- `max_tokens`: "The value must be between 1 and 384K (393216)." Default: "When not set, the default is 8K in non-thinking mode, 64K in thinking mode (128K with `reasoning_effort` set to `max`)." — [DeepSeek Create Chat Completion](https://api-docs.deepseek.com/api/create-chat-completion)
- "The total length of input tokens and generated tokens is limited by the model's context length." — [same](https://api-docs.deepseek.com/api/create-chat-completion)
- Pricing page: context "1M"; max output "MAXIMUM: 384K"; models `deepseek-flash` = "DeepSeek-V4.1-Flash-1017" and `deepseek-v4-pro` = "DeepSeek-V4-Pro-0813"; "Supports both non-thinking and thinking (default) modes". — [DeepSeek Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing)
- Thinking toggle: "Thinking mode is enabled by default, with the default effort being `high`". Use `{"thinking": {"type": "enabled/disabled"}}` or `reasoning_effort` low/high/max. With the OpenAI SDK, "you need to pass the `thinking` parameter within `extra_body`". "Thinking mode does not support the `temperature`, `presence_penalty`, or `frequency_penalty` parameters"; setting them "will not trigger an error but will also have no effect." — [DeepSeek Thinking Mode guide](https://api-docs.deepseek.com/guides/thinking_mode)
- Neither the API reference nor the thinking-mode guide says explicitly whether `reasoning_content` counts toward `max_tokens`. — [API ref](https://api-docs.deepseek.com/api/create-chat-completion), [Thinking guide](https://api-docs.deepseek.com/guides/thinking_mode)
- Alibaba's DashScope reference, which re-hosts DeepSeek, says that for deepseek-v4, `max_tokens` covers "the sum of the model's answer and chain-of-thought content." (official, Alibaba) — [Model Studio DashScope API](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-dashscope)

**Moonshot Kimi (official, platform.kimi.ai; formerly platform.moonshot.ai, which now 301-redirects there)**
- `max_tokens`: "Deprecated, please refer to max_completion_tokens". For K3-series models, `max_completion_tokens` "defaults to 131072" and "can be set up to 1048576." "This refers to the length of tokens you expect us to return, not the total length of input plus output." Completion output counts "both reasoning and answer tokens." — [Kimi Chat API](https://platform.kimi.ai/docs/api/chat)
- "Tokens in `reasoning_content` are also controlled by the `max_tokens` parameter". The combined `reasoning_content` and `content` must not exceed max_tokens. Recommendation: "Set `max_tokens >= 16000` to ensure the full `reasoning_content` and `content` can be returned without truncation." — [Kimi thinking-model guide](https://platform.kimi.ai/docs/guide/use-kimi-k2-thinking-model)
- On thinking control, K3 series (`kimi-k3.1-pro`, `-highspeed`, `kimi-k3`): "It does not use the `thinking` parameter"; it uses `reasoning_effort` low/high/max, default max. For kimi-k2.6, `thinking.type` "Defaults to `"enabled"`." For kimi-k2.7-code, passing `"disabled"` returns an error. — [Kimi Chat API](https://platform.kimi.ai/docs/api/chat)
- "Do not set `temperature`." K3.1-pro and K3 fix it at 1.0. kimi-k3 "supports a 1M-token context window". — [Kimi thinking guide](https://platform.kimi.ai/docs/guide/use-kimi-k2-thinking-model)

**Zhipu / z.ai GLM (official)**
- `max_tokens`: "The maximum number of tokens for model output". The schema range is 1-131072 with example 1024 and no default shown. "GLM-5.3, GLM-5.2, GLM-5.1, GLM-5, GLM-4.7, GLM-4.6 series supports 128K maximum output." — [z.ai Chat Completion API](https://docs.z.ai/api-reference/llm/chat-completion)
- `thinking.type` defaults to enabled. "GLM-5.3 GLM-5.3-FLASH series can only be enabled"; "the thinking depth is controlled by `reasoning_effort`." — [same](https://docs.z.ai/api-reference/llm/chat-completion)
- Thinking guide: "`enabled` (default): Enable dynamic thinking." Thinking is forced on GLM-5.3, 5.3-Flash and 4.7. `reasoning_effort` "Controls the degree of reasoning within the thought chain" (GLM-5.2+), default `max`. The examples use `"max_tokens": 4096`, with no recommendation given. The guide does not say whether reasoning counts toward max_tokens. — [z.ai Thinking guide](https://docs.z.ai/guides/capabilities/thinking)
- On DashScope (Alibaba re-hosting GLM, official Alibaba): glm-5.3 `max_tokens` "defaults to 65536, with a maximum of 131072", and it covers "the sum of the model's answer and chain-of-thought content". For glm-5.2 it depends on whether `thinking_budget` is passed. For glm-5.3, "`enable_thinking` only accepts `true`; passing `false` causes the API request to fail." — [Model Studio DashScope API](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-dashscope)

**Alibaba Qwen / Model Studio (official)**
- `max_tokens` is marked "to be deprecated"; new integrations should use `max_completion_tokens`. For most models, "the default and maximum values are both the model's maximum output length." For non-DeepSeek and non-GLM models it is "The maximum number of tokens for the model's answer (excluding chain-of-thought)." — [DashScope API](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-dashscope)
- `thinking_budget`: "The maximum length of the thinking process." "The default value is the maximum chain-of-thought length for the model." For Qwen3.8, "the default thinking_budget (131072)" applies, and the range 16385-262144 maps to `xhigh`. "reasoning_effort and thinking_budget cannot be set at the same time. Setting both will cause an error." — [same](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-dashscope)
- "Once the limit is reached, the model immediately starts generating the response." "kimi-k3.1-pro and kimi-k3 do not support this parameter". Qwen Plus is a "Hybrid thinking mode, thinking mode not enabled by default". — [Model Studio Deep thinking](https://www.alibabacloud.com/help/en/model-studio/deep-thinking)
- Model table: qwen4-max-preview has a 1M context and max output "393,216 (thinking + output)". qwen3.8-max, qwen3.8-flash and qwen3.7-plus have 1M context and 128k max output. Open qwen3.5 models have a 256k context. Most other rows list no max output. — [Model Studio text-generation models](https://www.alibabacloud.com/help/en/model-studio/text-generation-model)

**Synthetic.new (official)**
- The page says Synthetic "provides an OpenAI-compatible API and Anthropic-compatible API for all models we support"; the Anthropic base URL is `https://api.synthetic.new/anthropic/v1`, with `/messages/count_tokens` available. No max_tokens or output-limit documentation was found. — [Synthetic API overview](https://dev.synthetic.new/docs/api/overview)

### Inferences
- A practical global output rule is to omit the output cap, or set it to at least 32K and ideally 64K, while staying at or below 128K (131072). Every provider's thinking-mode default or maximum is at least that large: DeepSeek 64K default, Kimi 131072 default, GLM 128K max, Qwen3.8 128k. Kimi's documented floor is 16000. Setting 131072 explicitly is valid on all of them, but on DashScope GLM it equals the max and on DeepSeek it exceeds the 64K default.
- Qwen-on-DashScope is the outlier, because `max_tokens` excludes chain-of-thought. A small max_tokens there truncates only the answer, and reasoning is capped separately by `thinking_budget`.

### Gaps
- No current statement in DeepSeek's own docs says that reasoning_content counts toward max_tokens. The old "deepseek-reasoner" page wording (32K default / 64K max) was not found on current pages.
- GLM's native docs give no default for max_tokens and do not say whether reasoning counts against it.
- Synthetic: no per-model output caps or max_tokens docs were found.

## Q2. Explicit "set max_tokens to at least N" recommendations

### Takeaway
Only Kimi publishes an explicit floor: max_tokens >= 16000. The others imply a floor through large defaults.

### Cited Findings
- Kimi: "Set `max_tokens >= 16000` to ensure the full `reasoning_content` and `content` can be returned without truncation." (official) — [Kimi thinking guide](https://platform.kimi.ai/docs/guide/use-kimi-k2-thinking-model)
- DeepSeek's thinking-mode default is 64K (128K at max effort), which is an implicit sizing signal. (official) — [DeepSeek API](https://api-docs.deepseek.com/api/create-chat-completion)
- z.ai only warns: "Thinking process will consume extra tokens, please manage your tokens." (official) — [z.ai Thinking guide](https://docs.z.ai/guides/capabilities/thinking)
- Qwen: when thinking is on, long prompts "may cause response truncation or request timeout." (official) — [Model Studio Deep thinking](https://www.alibabacloud.com/help/en/model-studio/deep-thinking)

### Inferences
- A global minimum of 16K is the documented floor. A 32K-64K target matches the vendors' own defaults.

### Gaps
- No explicit numeric recommendation was found for DeepSeek, GLM, Qwen or Synthetic.

## Q3. What happens when the limit is too small, and are reasoning tokens billed

### Takeaway
All providers return `finish_reason: "length"` on truncation. Reasoning tokens are billed as output tokens on Kimi and Qwen (explicit), and on DeepSeek they are covered implicitly by "total ... output tokens". No source documents the "empty content, reasoning only" case explicitly, but it follows from caps that include reasoning.

### Cited Findings
- DeepSeek finish_reason values: `stop`, `length` (the max_tokens limit was reached, or the context was exceeded), `content_filter`, `tool_calls`, `insufficient_system_resource`, `aborted`. (official) — [DeepSeek API](https://api-docs.deepseek.com/api/create-chat-completion)
- DeepSeek billing is based on "the total number of input and output tokens by the model"; reasoning tokens are not addressed separately. (official) — [DeepSeek pricing](https://api-docs.deepseek.com/quick_start/pricing)
- Kimi: the finish_reason enum is `stop`, `length`, `tool_calls`. "`reasoning_content` consumes tokens." "Yes, `reasoning_content` counts towards your input/output token quota." "Historical reasoning content continues to occupy context space and is billed". (official) — [Kimi Chat API](https://platform.kimi.ai/docs/api/chat); [Kimi thinking guide](https://platform.kimi.ai/docs/guide/use-kimi-k2-thinking-model)
- GLM finish_reason: "Can be `stop`, `tool_calls`, `length`, `sensitive`, `model_context_window_exceeded` or `network_error`." (official) — [z.ai Chat Completion API](https://docs.z.ai/api-reference/llm/chat-completion)
- Qwen: "If the model's output exceeds this value, generation stops early, and the returned `finish_reason` is `length`." (official) — [DashScope API](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-dashscope)
- Qwen billing: "Thinking content is billed by Output Token." "If the model does not Output Thinking Process in thinking mode, it is billed at the non-thinking mode price." With `preserve_thinking`, historical `reasoning_content` "will be counted toward input Token count and billing." (official) — [Model Studio Deep thinking](https://www.alibabacloud.com/help/en/model-studio/deep-thinking)

### Inferences
- When the cap includes reasoning (DeepSeek, Kimi, GLM-5.3), a cap that is too small can be used up by reasoning alone. The result is `finish_reason: "length"` with empty or truncated `content`, and the reasoning tokens are still billed. Job tools should treat `length` plus empty content as a retry-with-higher-cap condition.

### Gaps
- No vendor page explicitly describes the "only reasoning_content returned, content empty" scenario.

## Q4. Does a large max_tokens cost money, reserve quota, or get rejected when prompt + max_tokens > context?

### Takeaway
Kimi explicitly clamps instead of erroring. DeepSeek says only that the total is limited by context length. Billing everywhere is on generated tokens, not on the cap. Coding and subscription plans count usage in credits or quota derived from tokens, not raw prompt counts. None of the sources say a large max_tokens reserves quota.

### Cited Findings
- Kimi: when prompt + max tokens exceed the context, there is no error: "the API automatically lowers the generation limit for the current request to fit the remaining context space." "The input token count itself must be less than the model context window size." (official) — [Kimi Chat API](https://platform.kimi.ai/docs/api/chat)
- DeepSeek: "The total length of input tokens and generated tokens is limited by the model's context length." The page does not describe an error. (official) — [DeepSeek API](https://api-docs.deepseek.com/api/create-chat-completion)
- GLM has a dedicated finish_reason, `model_context_window_exceeded`. (official) — [z.ai Chat Completion API](https://docs.z.ai/api-reference/llm/chat-completion)
- Qwen DashScope: the page lists no error for over-limit max_tokens or context. Documented errors concern invalid `reasoning_effort` values or setting both `reasoning_effort` and `thinking_budget`. (official) — [DashScope API](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-dashscope)
- **GLM Coding Plan (official):** "Each plan is subject to both a 5-hour usage limit and a weekly usage limit." Credits per 5h / week are Lite 2,000 / 10,000, Pro 12,000 / 60,000 and Max 28,000 / 140,000. Credits come from input, cached-input and output tokens times model multipliers, divided by 10,000. "MCP tool credit usage = Number of calls × Output multiplier." Off-peak usage is "charged at 50% of the standard credit rate" (peak is 14:00-18:00 UTC+8 on weekdays). "All plans support GLM-5.3, GLM-5.3-Flash"; GLM-5.2 and 5.1 requests route to 5.3, and 4.7 routes to 5.3-Flash. — [z.ai DevPack overview](https://docs.z.ai/devpack/overview)
- **Kimi Code (official):** the Anthropic-compatible base is `https://api.kimi.com/coding/` (CN) or `https://api.kimi.ai/coding/` (intl), and the OpenAI base is `.../coding/v1`. "`k3` (1M) consumes about twice as much quota as `k3-256k`." The highspeed variant uses about 2× quota. Model IDs are `k3.1-pro`, `k3.1-pro-highspeed`, `k3`, `k3-256k`, `kimi-for-coding`, `kimi-for-coding-highspeed`. k3.1-pro "rejects requests with thinking disabled". The page gives no max output figure and no unit of usage counting. — [Kimi Code docs](https://www.kimi.com/code/docs/en/)
- **Synthetic (official):** "Synthetic only uses weekly limits. Unlike other services, there aren't additional five-hour or monthly limits." "Every 202 minutes (about 3.4 hours), you get back 2% of your total weekly credit limit." "Some models consume more of your credits than others." — [Synthetic rate limits](https://synthetic.new/rate-limits). The pricing page says "Your plan's weekly credit quota uses tokens at discounted rates"; fast mode makes "each request use 2× as much of your rate limit"; "infinite mode requests never count against your rate limit". — [Synthetic pricing](https://synthetic.new/pricing)
- Conflict (community and search snippets): third-party write-ups describe "500 requests per five hours" with 5% regeneration (every 15 minutes or every 3 minutes, depending on the source), weighted by output token cost. This contradicts the official page fetched today, which describes weekly credits only, and is likely stale. — [community limits write-up](https://hn.jakechampion.name/reader/https://organic.eris.host/limits); official: [Synthetic rate limits](https://synthetic.new/rate-limits)

### Inferences
- A large max_tokens appears to be harmless on cost, because billing and credits follow tokens actually generated. On Kimi it is also harmless on context, because the cap is clamped. On DeepSeek and GLM, prompt + max_tokens over the context window behaves in an undocumented way or ends with `model_context_window_exceeded`, so a global rule should keep max_tokens at or below context minus prompt. With 1M contexts this rarely matters, but it does for 128K-256K models such as qwen3.5 open models (256k) and qwen-max (128k).

### Gaps
- Kimi Code's usage unit (requests vs tokens, and the window length) was not found; a membership-benefits URL redirected to the docs index.
- None of the sources state whether a large max_tokens reserves rate-limit or TPM quota up front.

## Q5. Hidden system-prompt tokens added by coding plans, bridges or Anthropic-compatible endpoints

### Takeaway
No source documents hidden system-prompt injection. All five vendors offer Anthropic-compatible endpoints: DeepSeek supports Anthropic-format `output_config.effort`; Kimi Code, Synthetic and Model Studio have Anthropic Messages endpoints; and the GLM Coding Plan lists Claude Code as supported.

### Cited Findings
- DeepSeek accepts `{"output_config": {"effort": "low/high/max"}}` "in Anthropic format". (official) — [DeepSeek Thinking guide](https://api-docs.deepseek.com/guides/thinking_mode)
- Model Studio: "Compatible with the Anthropic Messages API. Supports thinking and tool calling." (official) — [Model Studio API overview](https://www.alibabacloud.com/help/en/model-studio/use-qwen-by-calling-api)
- The z.ai DevPack page does not address hidden system prompts or endpoint behaviour. (official) — [z.ai DevPack](https://docs.z.ai/devpack/overview)

### Inferences
- Budget the input with headroom, since client tools such as Claude Code add their own system prompts and tool schemas. This is general knowledge, not vendor-cited.

### Gaps
- No vendor page found that quantifies hidden or system-prompt tokens on the coding-plan endpoints. GitHub issues were not searched because the tool-call budget ran out.
