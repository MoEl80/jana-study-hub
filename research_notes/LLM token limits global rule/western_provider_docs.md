# Output/input token limits for reasoning models: OpenAI, Anthropic, Google Gemini, OpenRouter (official docs, read 2026-11-13)

All sources below are vendor documentation ("official"), fetched on 2026-11-13. Doc locations changed recently:
- platform.openai.com/docs now 301-redirects to developers.openai.com/api/docs
- docs.claude.com now redirects to platform.claude.com/docs
- ai.google.dev now 301-redirects to aistudio.google.com/docs. Google now labels `generateContent` "a legacy API" and makes the Interactions API the default ([llms.txt, official](https://aistudio.google.com/llms.txt)).

None of the pages showed a "last updated" date. Quotes are verbatim unless marked "(paraphrase)". Model names (GPT-5.5/5.6/6.x, Claude Opus 5.5, Gemini 4 Carbon/Argon/Hydrogen, etc.) are copied as they appear in the docs.

## Q1. How is the output limit set, and do thinking/reasoning tokens count against it? Recommended numbers

### Takeaway
At all four providers the output cap is one number that covers reasoning tokens and visible text together. If reasoning uses up the cap, the visible answer is empty.
- OpenAI gives an explicit floor: "reserving at least 25,000 tokens for reasoning and outputs".
- Anthropic's newer models (4.7+) drop `budget_tokens` in favour of adaptive thinking plus `effort`. `max_tokens` is the only hard cap, and these models allow up to 128k.
- Gemini 3/4 use `thinkingLevel`. Gemini 2.5 uses `thinkingBudget` (-1 = dynamic). On Gemini 4, `thinkingBudget` is deprecated.
- OpenRouter turns `reasoning.effort` into a fraction of `max_tokens` (max/xhigh 0.95, high 0.8, medium 0.5, low 0.2, minimal 0.1).

### Cited Findings

**OpenAI (official)**
- Responses API, `max_output_tokens`: "An upper bound for the number of tokens that can be generated for a response, including visible output tokens and reasoning tokens." `minimum: 16`. — [Responses create reference (official)](https://developers.openai.com/api/reference/resources/responses/methods/create.md)
- Chat Completions, `max_completion_tokens`: "An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and reasoning tokens." — [Chat Completions create reference (official)](https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create.md)
- Chat Completions, `max_tokens`: "This value is now deprecated in favor of `max_completion_tokens`, and is not compatible with o-series models." — [Chat Completions create reference (official)](https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create.md)
- Reasoning guide: "OpenAI recommends reserving at least 25,000 tokens for reasoning and outputs" when you start experimenting with these models. — [Reasoning guide (official)](https://developers.openai.com/api/docs/guides/reasoning)
- Reasoning guide: `max_output_tokens` lets you "limit the total number of tokens the model generates, including reasoning tokens". Reasoning tokens "still occupy space in the model's context window and are billed as" output tokens. — [Reasoning guide (official)](https://developers.openai.com/api/docs/guides/reasoning)
- Reasoning guide: "the models may generate anywhere from a few hundred to tens of thousands of reasoning tokens". — [Reasoning guide (official)](https://developers.openai.com/api/docs/guides/reasoning)
- `reasoning_effort` (Chat Completions): "(default: "medium") … Currently supported values are `none`, `minimal`, `low`, `medium`, `high`, `xhigh`, and `max`. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response. Not all reasoning models support every value." — [Chat Completions create reference (official)](https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create.md)
- Reasoning guide, per-model defaults: "`gpt-5.5` defaults to `medium` reasoning effort." "If you omit `reasoning.effort`, GPT-5.6 defaults to `medium` in both modes." "GPT-6.1 Sol, GPT-6 Sol, and GPT-6 Luna also default to `medium` reasoning effort." Some models do "not support `none` or `minimal`" and return HTTP 400 for `none`. — [Reasoning guide (official)](https://developers.openai.com/api/docs/guides/reasoning)

**Anthropic (official)**
- Messages API, `max_tokens` (a required field, typed `number`): "The maximum number of tokens to generate before stopping. Note that our models may stop _before_ reaching this maximum. This parameter only specifies the absolute maximum number of tokens to generate. … Different models have different maximum values for this parameter." — [Messages create reference (official)](https://platform.claude.com/docs/en/api/messages/create.md)
- Model limits: the 1M-context models (Fable 5.x, Mythos 5.x, Opus 4.6–5.5, Sonnet 4.6/5/5.5, Haiku 5.5, Mythos Preview) "have a 1M-token context window. A single request to any of them can generate up to 128k output tokens (`max_tokens`). Other Claude models, including Claude Sonnet 4.5 (deprecated), have a 200k-token context window." — [Context windows (official)](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- "Thinking tokens are a subset of your `max_tokens` parameter, are billed as output tokens, and count toward rate limits." — [Context windows (official)](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- Manual budget is legacy: "Extended thinking (`thinking.type: "enabled"` with `budget_tokens`) is deprecated. Claude 4.7 and later models do not support it and reject requests that use it, returning a 400 error." — [Extended thinking (official)](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)
- Budget rules on models that still accept it: "**Minimum of 1,024 tokens.** The API rejects smaller values." and "**Less than `max_tokens`.** Thinking tokens count toward the `max_tokens` limit for the turn, so the budget must leave room for the final response." The exception is interleaved thinking, "where `budget_tokens` can exceed `max_tokens` because the budget spans all thinking blocks within one assistant turn." — [Extended thinking (official)](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)
- "The budget is a target rather than a strict cap. … `max_tokens` remains the hard ceiling on total output." — [Extended thinking (official)](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)
- Tuning: "For complex tasks, start with a larger budget of 16,000 tokens or more". "For thinking budgets above 32k, use batch processing to avoid networking issues. Pushing the model to think beyond 32k tokens produces long-running requests that can hit system timeouts and open-connection limits." — [Extended thinking (official)](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)
- Migration example: `max_tokens: 16000` with `budget_tokens: 10000` becomes `thinking: {type: "adaptive"}` plus `output_config: {effort: "high"}`. "Claude Opus 5.5 and Claude Haiku 5.5 default to `"medium"`, and other models that support effort default to `"high"`." — [Extended thinking (official)](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)
- Adaptive cost control: "You don't set a thinking token budget. Two controls bound cost: `max_tokens` is a hard cap on total output for the request, thinking and response text combined. Claude never generates past it. In a tool-use loop, each request in the turn has its own `max_tokens`, so it doesn't bound the whole turn's spend. `effort` is soft guidance on how much of that output Claude allocates to thinking. It shapes behavior but doesn't guarantee a token count." — [Steering thinking (official)](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost)
- "Because thinking counts toward `max_tokens`, set it high enough to leave room for both the reasoning and the answer. A `max_tokens` sized for a response with no thinking is often too small once Claude starts thinking on hard requests." — [Steering thinking (official)](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost)
- Effort levels: `max` ("no constraint on thinking length"), `xhigh`, `high` ("default on most models"), `medium` ("default on Claude Opus 5.5 and Claude Haiku 5.5"), and `low`. "No level guarantees a thinking block on every request." — [Steering thinking (official)](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost)

**Google Gemini (official)**
- generateContent `maxOutputTokens`: "Optional. The maximum number of tokens to include in a response candidate. Note: The default value varies by model, see the `Model.output_token_limit` attribute of the `Model` returned from the `getModel` function." — [generateContent API reference (official)](https://aistudio.google.com/api-reference/generate-content)
- "The `max_output_tokens` generation parameter sets the maximum number of tokens a response can generate, including thought tokens. When set, this parameter acts as a hard cutoff enforced by the infrastructure without changing how the model allocates its thinking budget (`thinking_level`)." — [Thinking guide, generateContent version (official)](https://aistudio.google.com/docs/thinking.md?generate-content=true)
- "Gemini models engage in dynamic thinking by default, automatically adjusting the amount of reasoning effort based on the complexity of the request." Default `thinking_level` by model:
  - Gemini 4 Hydrogen: "high" (low/medium/high/xhigh)
  - Gemini 4 Carbon and Gemini 4 Argon: "medium" (low/medium/high)
  - Gemini 3.8 Flash and Gemini 3.6 Flash: "medium"
  - Gemini 3.1 Pro preview and Gemini 3 Pro/Flash preview: "high"
  - Gemini 3.5/3.1 Flash-Lite: "minimal"

  — [Thinking guide (official)](https://aistudio.google.com/docs/thinking)
- `thinkingLevel` enum: "`MINIMAL`: Little to no thinking. `LOW` … `MEDIUM` … `HIGH` … `XHIGH`". The field is "Recommended for Gemini 3 or later models. Use with earlier models results in an error." `thinkingBudget`: "The number of thoughts tokens that the model should generate." — [generateContent API reference (official)](https://aistudio.google.com/api-reference/generate-content)
- "Using `xhigh` increases latency and token use and can cause overthinking or exhaust `max_output_tokens` on simpler prompts such as text or JSON extraction. Run your evaluations at all four levels with a high `max_output_tokens` so the limit doesn't cut answers short, then pick the lowest `thinking_level` that meets your quality bar." — [Thinking guide (official)](https://aistudio.google.com/docs/thinking)
- `thinkingBudget` (Gemini 2.5): "You can disable thinking by setting `thinkingBudget` to 0. Setting the `thinkingBudget` to -1 turns on **dynamic thinking**." Ranges:
  - 2.5 Pro: "`128` to `32768`", "Cannot disable thinking", default -1
  - 2.5 Flash: "`0` to `24576`", default -1
  - 2.5 Flash Lite: "`512` to `24576`", "Model does not think" by default
  - Robotics-ER 1.6 Preview: `0`–`24576`, default -1

  — [Thinking guide, generateContent (official)](https://aistudio.google.com/docs/thinking.md?generate-content=true)
- "In Gemini 4 models (`gemini-4-carbon`, `gemini-4-argon`, and `gemini-4-hydrogen`), `thinkingBudget` (`thinking_budget`) is deprecated. If passed alone, it maps to the nearest `thinkingLevel` (`thinking_level`) and returns a warning; sending `thinkingBudget` and `thinkingLevel` together returns a `400` error." — [Thinking guide, generateContent (official)](https://aistudio.google.com/docs/thinking.md?generate-content=true)
- Gemini 4 output caps: "When `background=False`, the default `max_output_tokens` cap is 65,536 tokens. A single foreground hop generates up to 65,536 tokens for streaming calls and `gemini-4-hydrogen` non-streaming calls, or up to 32,768 tokens for non-streaming calls on `gemini-4-carbon` and `gemini-4-argon`." To go beyond 65,536 (up to 1,048,576), "configure `max_output_tokens` greater than `65,536` with `background=True` or client-side continuation." — [Thinking guide (official)](https://aistudio.google.com/docs/thinking)

**OpenRouter (official)**
- `max_tokens`: "This sets the upper limit for the number of tokens the model can generate in response." "The maximum value is the context length minus the prompt length." "For reasoning models, this limit covers reasoning tokens and visible output together on most providers." `max_completion_tokens` "shares `max_tokens` semantics". — [Parameters (official)](https://openrouter.ai/docs/api/reference/parameters)
- No hidden defaults: "When a sampling parameter is absent from your request, OpenRouter omits it upstream rather than substituting a hardcoded value," so "the provider applies its own default." — [Parameters (official)](https://openrouter.ai/docs/api/reference/parameters)
- `reasoning` object: `"effort"` "Can be "max", "xhigh", "high", "medium", "low", "minimal" or "none""; `"max_tokens": 2000` is a "Specific token limit (Anthropic-style)"; `"enabled": true` "Enables reasoning at the "medium" effort level with no exclusions." — [Reasoning tokens (official)](https://openrouter.ai/docs/use-cases/reasoning-tokens)
- Effort ratios: "The percentages below are of the request's output token limit (`max_output_tokens`, or `max_tokens` on Chat Completions)":
  - max ≈95%
  - xhigh "Same allocation as max"
  - high ≈80%
  - medium ≈50%
  - low ≈20%
  - minimal ≈10%
  - none "Disables reasoning entirely"

  "For models that only support `reasoning.max_tokens`, the effort level will be set based on the percentages above." — [Reasoning tokens (official)](https://openrouter.ai/docs/use-cases/reasoning-tokens)
- Anthropic via OpenRouter: "`budget_tokens = max(min(max_output_tokens * {effort_ratio}, 128000), 1024)`"; "effort_ratio is 0.95 for max and xhigh effort, 0.8 for high effort, 0.5 for medium effort, 0.2 for low effort, and 0.1 for minimal effort." "**Important**: `max_output_tokens` must be strictly higher than the reasoning budget to ensure there are tokens available for the final response after thinking." — [Reasoning tokens (official)](https://openrouter.ai/docs/use-cases/reasoning-tokens)
- Gemini 3 via OpenRouter: "OpenRouter maps the `reasoning.effort` parameter directly to Google's `thinkingLevel` values". `reasoning.max_tokens` is passed as `thinkingBudget` but mapped to a level, so exact token control is not guaranteed (paraphrase). — [Reasoning tokens (official)](https://openrouter.ai/docs/use-cases/reasoning-tokens)
- Per-model discovery: `GET /api/v1/models` returns `reasoning.supported_efforts`, `default_effort`, `default_enabled`, `supports_max_tokens`, and `mandatory`. — [Reasoning tokens (official)](https://openrouter.ai/docs/use-cases/reasoning-tokens)

### Inferences
- A global rule like "output cap = expected answer + reasoning headroom" maps directly onto every provider, because each counts reasoning inside the cap. OpenAI's 25,000 floor is the only explicit vendor number. Anthropic's examples use 16,000 (budget 10,000) and Gemini 4 defaults to 65,536.
- Per-model hard maxima differ: Claude 128k (32k+ thinking → batch/streaming advised), Gemini 4 65,536 synchronous, and model-dependent caps elsewhere. A global rule should clamp to each model's maximum.
- On OpenRouter, a small `max_tokens` with an effort setting also shrinks the reasoning budget proportionally (for example, max_tokens 4,000 at high effort gives about 3,200 reasoning tokens).

### Gaps
- No explicit OpenAI per-model maximum output values were read; the model pages were not fetched.
- Not found: whether OpenAI's 25,000 recommendation varies by model or effort.

## Q2. What happens when the output limit is too small? Are thinking tokens still billed?

### Takeaway
The request returns a successful response, not an error. It is marked truncated and may have empty visible text, and all reasoning tokens generated are billed.
- OpenAI Responses: `status: "incomplete"` with `incomplete_details.reason: "max_output_tokens"`.
- OpenAI Chat Completions: `finish_reason: "length"`.
- Anthropic: `stop_reason: "max_tokens"`.
- Gemini: `finishReason: MAX_TOKENS` (generateContent) or status `"incomplete"` (Interactions).
- OpenRouter: `finish_reason: "length"` with empty `content` (Chat Completions), or the incomplete status (Responses).

### Cited Findings
- OpenAI: when the limit is reached "you'll receive a response with a `status` of `incomplete`" and "`incomplete_details` with `reason` set to `max_output_tokens`". "This might occur before any visible output tokens are produced". The guide's code example sets `max_output_tokens: 300`. If `output_text` is empty, it reports the response "ran out of tokens during reasoning" (paraphrase of code). — [Reasoning guide (official)](https://developers.openai.com/api/docs/guides/reasoning)
- OpenAI `incomplete_details.reason` enum: `"max_output_tokens" or "max_messages" or "content_filter" or "steered"`. — [Responses create reference (official)](https://developers.openai.com/api/reference/resources/responses/methods/create.md)
- OpenAI Chat: `finish_reason` is "`length` if the maximum number of tokens specified in the request was reached". — [Chat Completions create reference (official)](https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create.md)
- OpenAI billing: reasoning tokens "are billed as" output tokens. The reasoning guide's example usage shows `"output_tokens": 1186`, `"reasoning_tokens": 1024`. — [Reasoning guide (official)](https://developers.openai.com/api/docs/guides/reasoning)
- Anthropic: `max_tokens` stop: "Claude stopped because it reached the `max_tokens` limit specified in your request." Recommended action: "Raise `max_tokens` or continue the response." For a truncated tool call, "you'll need to retry the request with a higher `max_tokens` value to get the full tool use." — [Handling stop reasons (official)](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons)
- Anthropic: "At `high` effort and above, Claude might think extensively and is more likely to exhaust the budget. If you see `stop_reason: "max_tokens"` in responses, you have two remedies: Raise `max_tokens` … Lower the effort level". "If quality on those requests matters, raise the cap; if they were over-thought, lower the effort." — [Steering thinking (official)](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost)
- Anthropic billing: "You are billed for the full thinking process, not the thinking content visible in the response." The billed output tokens are "The full thinking tokens Claude generated internally" whether `display` is "summarized" or "omitted". Usage reports `usage.output_tokens_details.thinking_tokens`; "`output_tokens` remains the inclusive, authoritative total used for billing." — [Steering thinking (official)](https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost)
- Gemini: "If the model hits this limit while reasoning, it stops generating with `finish_reason: MAX_TOKENS` and returns truncated or empty output (while still billing for any thinking tokens generated). To reduce cost or latency without truncating responses, lower `thinking_level` (`low` or `medium`) instead of setting a small `max_output_tokens`." — [Thinking guide, generateContent (official)](https://aistudio.google.com/docs/thinking.md?generate-content=true). The Interactions-API version says the model "stops generating with status `"incomplete"`". — [Thinking guide (official)](https://aistudio.google.com/docs/thinking)
- Gemini `FinishReason`: "`MAX_TOKENS`: The maximum number of tokens as specified in the request was reached." Usage has `thoughtsTokenCount` ("Number of tokens of thoughts for thinking models"). — [generateContent API reference (official)](https://aistudio.google.com/api-reference/generate-content)
- Gemini pricing: "When thinking is turned on, response pricing is the sum of output tokens and thinking tokens." "Pricing is based on the full thought tokens the model needs to generate, despite only the summary being output from the API." — [Thinking guide (official)](https://aistudio.google.com/docs/thinking)
- OpenRouter (Responses): "If the limit is small enough that the model spends all of it reasoning, the response returns `status: "incomplete"` with `incomplete_details.reason: "max_output_tokens"` and no `message` item in `output`, and the reasoning tokens are still billed." — [Reasoning tokens (official)](https://openrouter.ai/docs/use-cases/reasoning-tokens)
- OpenRouter (Chat): "If the model spends all of it reasoning, the response returns `finish_reason: "length"` with an empty `content`, and the reasoning tokens are still billed." With `exclude: true`, "the only signal left is `finish_reason` plus `usage`." Detection: subtract `reasoning_tokens` from output tokens; the result is "0 or near 0 when reasoning consumed the budget." — [Reasoning tokens (official)](https://openrouter.ai/docs/use-cases/reasoning-tokens)
- OpenRouter errors doc: "A reasoning model spent the whole `max_tokens` budget on reasoning. The response is a `200` with `finish_reason: "length"`, empty `content` … Retrying does not help; raise `max_tokens` or cap reasoning instead." — [Errors and debugging (official)](https://openrouter.ai/docs/api/reference/errors-and-debugging.md)
- OpenRouter: "Reasoning tokens are considered output tokens and charged accordingly." `exclude: true`: "The tokens are still billed and count against `max_tokens`." — [Reasoning tokens (official)](https://openrouter.ai/docs/use-cases/reasoning-tokens)

### Inferences
- A job tool should treat {incomplete/max_output_tokens, length, max_tokens, MAX_TOKENS} as a failure class. When visible output is empty, retry with a larger cap or lower effort, and do not retry identically. Each failed attempt still costs the full reasoning spend.
- A too-small cap is strictly worse than a too-large one: you pay for reasoning and get nothing usable.

### Gaps
- Anthropic stop-reasons page (first 100k chars read) had no explicit note about empty text when thinking consumes all of `max_tokens`. It is implied by "Thinking tokens are a subset of your `max_tokens`".

## Q3. Does an unused output allowance cost anything, reserve rate-limit quota, slow requests, or get rejected (prompt + max_tokens > context)? Defaults when omitted?

### Takeaway
No provider charges for unused allowance; billing is on generated tokens. The side effects differ by provider:
- **OpenAI:** a large `max_tokens` DOES count toward TPM rate limiting.
- **Anthropic:** it explicitly does NOT count toward OTPM ("no rate limit downside").
- **OpenRouter:** it DOES feed an up-front in-flight credit hold, and an oversized request can get HTTP 402.
- **Gemini:** rate limits count input TPM; nothing found about `maxOutputTokens` reserving quota.

On context overflow from input + max_tokens:
- Anthropic 4.5+ accepts the request, stopping with `model_context_window_exceeded` if needed. Older models error.
- Gemini 4 auto-caps the output to the remaining window.
- OpenRouter's max is "context length minus the prompt length".
- OpenAI: input over the window gives a 400 unless `truncation: "auto"`.

On defaults when omitted:
- Anthropic `max_tokens` is required.
- Gemini default "varies by model" (`output_token_limit`); Gemini 4 default cap is 65,536.
- OpenRouter passes nothing upstream, so the provider default applies, and it uses a fixed per-request cap for its credit hold.

### Cited Findings
- OpenAI rate limits: "Your rate limit is calculated as the maximum of `max_tokens` and the estimated number of tokens based on the character count of your request. Try to set the `max_tokens` value as close to your expected response size as possible." (section "Reduce the `max_tokens` to match the size of your completions") — [Rate limits guide (official)](https://developers.openai.com/api/docs/guides/rate-limits.md)
- OpenAI `truncation`: "`disabled` (default): If the input size will exceed the context window size for a model, the request will fail with a 400 error." With `auto`: "On some models, trimming can begin earlier because the API subtracts the model's maximum output allowance from its input limit, even if you set a lower `max_output_tokens`." — [Responses create reference (official)](https://developers.openai.com/api/reference/resources/responses/methods/create.md)
- OpenAI: "It's important to ensure there's enough space in the context window for reasoning tokens when creating responses." "Context window lengths are found on the model reference page, and will differ across model snapshots." — [Reasoning guide (official)](https://developers.openai.com/api/docs/guides/reasoning)
- Anthropic OTPM: "OTPM rate limits are evaluated in real time as output tokens are produced, counting only the actual tokens generated. The `max_tokens` parameter does not factor into OTPM rate limit calculations, so there is no rate limit downside to setting a higher `max_tokens` value." — [Rate limits (official)](https://platform.claude.com/docs/en/api/rate-limits)
- Anthropic ITPM: "**The API's default ITPM rate limits count only uncached input tokens.**" "ITPM rate limits are estimated at the beginning of each request, and the estimate is adjusted during the request". — [Rate limits (official)](https://platform.claude.com/docs/en/api/rate-limits)
- Anthropic ramp limits (relevant to bulk jobs): "After a sharp increase in usage, requests can return a 429 error even while you're under your ITPM and OTPM rate limits." "Start scheduled or bulk jobs at a low rate and spread requests evenly". — [Rate limits (official)](https://platform.claude.com/docs/en/api/rate-limits)
- Anthropic overflow: "If the input alone already exceeds the model's context window, the API returns a 400 `invalid_request_error` ("prompt is too long") on every model. On Claude 4.5 models and newer, if input tokens plus `max_tokens` exceeds the context window size, the API accepts the request. If generation then reaches the context window limit, it stops with `stop_reason: "model_context_window_exceeded"`. On earlier models, the API returns a validation error instead." Older models can opt in with the beta header `model-context-window-exceeded-2025-08-26`. — [Context windows (official)](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- Anthropic: `model_context_window_exceeded` "lets you request the maximum possible tokens without knowing the exact input size." Recommended action: "Treat the response as truncated." — [Handling stop reasons (official)](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons)
- Anthropic latency: thinking above 32k risks "long-running requests that can hit system timeouts and open-connection limits", so use batch. — [Extended thinking (official)](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)
- Gemini overflow: "If your input tokens plus `max_output_tokens` exceed 1,048,576 tokens, the API automatically caps the output limit to the remaining space in the context window (`1,048,576` minus your input tokens)." (Gemini 4) — [Thinking guide (official)](https://aistudio.google.com/docs/thinking)
- Gemini rate limits are measured as "Requests per minute (**RPM**)", "Tokens per minute (input) (**TPM**)", and "Requests per day (**RPD**)". — [Rate limits, generateContent (official)](https://aistudio.google.com/docs/rate-limits.md?generate-content=true)
- Gemini default when omitted: "The default value varies by model, see the `Model.output_token_limit` attribute". — [generateContent API reference (official)](https://aistudio.google.com/api-reference/generate-content)
- OpenRouter credit hold: "OpenRouter estimates each paid request's token cost up front, at the endpoint's prices: the input tokens, plus the completion tokens allowed by `max_tokens` up to a fixed per-request cap (the cap is used when `max_tokens` is not set). … The estimate is held against your account while the request runs. When the request completes or fails, the hold is replaced by the request's actual cost for a short settlement window, and then released." — [Limits (official)](https://openrouter.ai/docs/api_reference/limits.md)
- OpenRouter: on `"weight_exceeds_budget"`, "this single request's estimated cost is larger than your whole budget, so retrying will not help. Lower `max_tokens` or the prompt size, or add credits." Also: "Reduce the request size (fewer input tokens or a lower `max_tokens`) so its estimated cost fits your balance and in-flight budget." — [Limits (official)](https://openrouter.ai/docs/api_reference/limits.md)
- OpenRouter: `max_tokens` "maximum value is the context length minus the prompt length." — [Parameters (official)](https://openrouter.ai/docs/api/reference/parameters)

### Inferences
- Unused allowance is free at all four providers, since billing is on generated tokens in every doc read. The cost of a large cap is indirect:
  - OpenAI TPM consumption
  - OpenRouter in-flight credit holds (which matter for highly parallel job tools)
  - possible context-window collisions on older Claude models or OpenAI `truncation: auto`
- Practical global rule: set the output cap from the input size, as min(model max output, context window − input tokens − safety margin). That satisfies OpenRouter's documented max and older Claude validation, and it avoids OpenAI TPM waste. On Anthropic 4.5+ and Gemini 4 the server clamps anyway.

### Gaps
- Not found: OpenAI documentation of any server-side clamping or explicit error when prompt + `max_output_tokens` > context (only the input-overflow 400 and the truncation note were read).
- Not found: the OpenAI default when `max_output_tokens` is omitted.
- Not found: Gemini docs stating whether `maxOutputTokens` affects rate-limit accounting.
- Not found: the exact value of OpenRouter's "fixed per-request cap".

## Q4. Context-window management, reserving input space, context awareness, token counting

### Takeaway
- Anthropic offers a free token-counting endpoint, automatic context awareness on some models (an injected token budget), task budgets, and compaction.
- OpenAI tells you to leave context room for reasoning and uses `truncation`.
- Gemini 4 shares one 1,048,576-token window across input, thinking and output.
- On Claude 4.5+ models, previous-turn thinking blocks persist as input (they are billed as input and count toward the window).

### Cited Findings
- Anthropic: "Everything in the request counts toward the context window: the system prompt, every message in `messages` (including tool results, images, and documents), and your tool definitions. The output Claude generates for the turn, including its extended thinking, counts too." "To estimate a request before you send it, use the token counting API." — [Context windows (official)](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- Anthropic token counting: "Token counting is **free to use** but subject to requests per minute rate limits". "The token count is an **estimate**." Newer tokenizer: "don't reuse token counts measured on the older model to estimate costs or context window fit." — [Token counting (official)](https://platform.claude.com/docs/en/build-with-claude/token-counting.md)
- Anthropic context awareness: "Claude Sonnet 5, Claude Sonnet 4.6, Claude Sonnet 4.5 (deprecated), and Claude Haiku 4.5 have **context awareness:** these models track their remaining context window". The API injects `<budget:token_budget>200000</budget:token_budget>` and, after tool calls, `<system_warning>Token usage: 35000/200000; 165000 remaining</system_warning>`. Opus 4.7+ and the other newer models "don't receive these injected tags", and instead "you can give the model an explicit budget with task budgets, which are in beta." — [Context windows (official)](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- Anthropic: "As token count grows, accuracy and recall degrade, a phenomenon known as *context rot*." Compaction is "the primary strategy for context management." — [Context windows (official)](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- Anthropic: on Opus 4.5+ / Sonnet 4.6+ / Haiku 5.5, "The API keeps previous thinking blocks by default … where those blocks count toward the context window like any other input tokens". — [Context windows (official)](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- OpenAI: "It's important to ensure there's enough space in the context window for reasoning tokens when creating responses." — [Reasoning guide (official)](https://developers.openai.com/api/docs/guides/reasoning)
- Gemini 4: "Input, thinking, and output tokens share a single 1M-token context window (`1,048,576` tokens)." The usage `totalTokenCount` is "prompt + tool-use prompt + thoughts + response candidates". — [Thinking guide (official)](https://aistudio.google.com/docs/thinking); [generateContent API reference (official)](https://aistudio.google.com/api-reference/generate-content)

### Inferences
- A simple global input rule: input budget = model context window − chosen output cap − a small margin. Count tokens with the provider's tokenizer or endpoint, because tokenizers differ between model generations (Anthropic warns explicitly).

### Gaps
- OpenAI and Gemini token-counting endpoints (`countTokens`, OpenAI input token counting) were not fetched in this pass.
- No OpenRouter token-counting endpoint was looked up.
