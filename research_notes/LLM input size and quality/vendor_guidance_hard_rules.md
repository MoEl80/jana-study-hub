# Vendor guidance on context-window fill and hard rules when input + max output > window

Research date: 2026-11-13. All "official" items are from vendor docs I fetched this session. Quotes come from WebFetch, which returns page text through a summarizing model. Quotes marked (verbatim) were checked against the raw page text. The others are the tool's quotations and should be spot-checked before publication. "Community" = forum or third-party material.

## Q1. Does any vendor say how full to fill the window, give a safety margin, or warn about long-context quality?

### Takeaway
No vendor publishes a numeric fill ratio or safety margin (such as "use at most X% of the window"). Several vendors do warn officially that quality drops as context grows. Anthropic calls this "context rot" and says "more context isn't automatically better". OpenAI says GPT-4.1 degrades when many items must be retrieved. Google says multi-needle accuracy drops. The shared advice is to curate and minimize input, put long documents first and the query/instructions last (or at both ends for OpenAI), and to use caching or compaction rather than filling the window.

### Cited Findings
**Anthropic (official)**
- (verbatim) "A larger context window allows the model to handle more complex and lengthy prompts, but more context isn't automatically better. As token count grows, accuracy and recall degrade, a phenomenon known as *context rot*. This makes curating what's in context just as important as how much space is available." — [Anthropic, Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- (verbatim) "If your conversations regularly approach context window limits, use server-side compaction. Compaction automatically summarizes earlier parts of the conversation on the server, so the conversation can continue past the context window limit. It is available in beta for Claude 4.6 and later models". Context editing offers "Tool result clearing" and "Thinking block clearing". — [Anthropic, Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- (verbatim) "To stay within context window limits, use the token counting API to estimate token usage before sending messages to Claude." — [Anthropic, Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- Context awareness (verbatim): Sonnet 5, Sonnet 4.6, Sonnet 4.5 and Haiku 4.5 "track their remaining context window (their 'token budget') throughout a conversation". The API injects `<budget:token_budget>` and, after each tool call, `<system_warning>Token usage: 35000/200000; 165000 remaining</system_warning>`. Opus 4.7+, Sonnet 5.5 and Haiku 5.5 do not receive these tags and use "task budgets" (beta) instead. — [Anthropic, Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- Long-context prompting (verbatim): "When working with large documents or data-rich inputs (20k+ tokens), structure your prompt carefully… **Put long-form data at the top:** Place your long documents and inputs near the top of your prompt, above your query, instructions, and examples. This improves performance across all models." The page also says: "Queries at the end can improve response quality by up to 30 percent in tests, especially with complex, multidocument inputs." It further recommends wrapping documents in `<document>` XML tags and asking Claude to "quote relevant parts of the documents first". — [Anthropic, Prompting best practices (long-context tips URL redirects here)](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- Engineering blog "Effective context engineering for AI agents", published September 29, 2025. As context grows, "the model's ability to accurately recall information from that context decreases". LLMs have an "attention budget" and "Every new token introduced depletes this budget by some amount". Transformers produce "n² pairwise relationships for n tokens". The guiding principle is "finding the smallest possible set of high-signal tokens that maximize the likelihood of some desired outcome." The factors "create a performance gradient rather than a hard cliff." — [Anthropic Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

**OpenAI (official)**
- GPT-4.1 prompting guide: "GPT-4.1 has a performant 1M token input context window." Also: "We observe very good performance on needle-in-a-haystack evaluations up to our full 1M token context." However, "long context performance can degrade as more items are required to be retrieved", as well as for "complex reasoning that requires knowledge of the state of the entire context." On instruction placement, putting instructions at both the beginning and end performs "better than only above or below". If instructions appear only once, "above the provided context works better than below." — [OpenAI Cookbook, GPT-4.1 Prompting Guide](https://developers.openai.com/cookbook/examples/gpt4-1_prompting_guide)
- Conversation state guide: "The context window is the maximum number of tokens that can be used in a single request. This max tokens number includes input, output, and reasoning tokens." The guide points to server-side compaction (`context_management`, `compact_threshold`) for long conversations. — [OpenAI, Conversation state](https://developers.openai.com/api/docs/guides/conversation-state)
- Note: OpenAI's placement advice differs from Anthropic's. OpenAI prefers instructions at both ends, or above the context if only once. Anthropic says the query goes at the end.

**Google Gemini (official)**
- Long context doc: "the model's performance will be better if you put your query / question at the end of the prompt". For multiple "needles", "the model does not perform with the same accuracy". "Performance can vary to a wide degree depending on the context." Also: "The primary optimization when working with long context and the Gemini models is to use context caching". — [Gemini API, Long context](https://aistudio.google.com/docs/long-context) (ai.google.dev now redirects here)

**DeepSeek, Moonshot Kimi, Zhipu GLM, Alibaba Qwen, OpenRouter, Synthetic**
- Not found: none of the pages I read (DeepSeek error codes and pricing, Kimi chat API, z.ai chat completion, Qwen pricing, OpenRouter parameters, Synthetic chat completions) contains guidance on how full to fill the window or on long-context quality. z.ai only notes that `clear_thinking` can "reduce context length and cost". — [z.ai Chat Completion](https://docs.z.ai/api-reference/llm/chat-completion)

### Inferences
- No vendor gives a numeric fill target, so any global input rule (for example "at most N% of the window" or "at most K tokens") is a design choice, not vendor policy. It can be justified by the context-rot and degradation statements above. Anthropic's "performance gradient rather than a hard cliff" argues against expecting a magic threshold.
- Every vendor agrees on layout: long material first, the question or instructions last (OpenAI: also at the top).

### Gaps
- Qwen YaRN / "static YaRN" guidance, Qwen-Long docs, and Kimi, GLM and DeepSeek long-context quality notes were not read in this session (tool-call budget). These need to be checked on Qwen model cards on Hugging Face or GitHub.
- The OpenAI GPT-5 prompting guide and Codex docs were not read.

## Q2. Hard rules when input + max_output > context window

### Takeaway
Behavior splits into three groups:
- **Accept and stop at the window.** Anthropic (Claude 4.5+) stops with `model_context_window_exceeded`. GLM documents the same finish_reason.
- **Auto-shrink the output cap.** Kimi lowers the generation limit; Gemini (per its long-context page) caps max output.
- **Reject with a 400.** OpenAI Chat Completions behaves this way per community-reported errors; the official OpenAI docs only speak of truncation. Older Claude models also return a validation error.

On every vendor that documents the case, input alone exceeding the window is an error. OpenRouter defines the valid max_tokens range as up to context minus prompt.

### Cited Findings
- **Anthropic (official, verbatim):** "If the input alone already exceeds the model's context window, the API returns a 400 `invalid_request_error` ('prompt is too long') on every model. On Claude 4.5 models and newer, if input tokens plus `max_tokens` exceeds the context window size, the API accepts the request. If generation then reaches the context window limit, it stops with `stop_reason: "model_context_window_exceeded"`. On earlier models, the API returns a validation error instead. To opt in to the `model_context_window_exceeded` behavior on those models, use the `model-context-window-exceeded-2025-08-26` beta header." The same page lists current windows: 1M on Opus 4.6+, Sonnet 4.6+, Haiku 5.5 and others, and "A single request to any of them can generate up to 128k output tokens". — [Anthropic, Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- **OpenAI (official):** The docs mention truncation, not rejection: exceeding the window "might result in truncated outputs" and "Tokens generated in excess of the context window limit may be truncated in API responses." — [OpenAI, Conversation state](https://developers.openai.com/api/docs/guides/conversation-state)
- **OpenAI (community):** Users report a 400 error when input + max output exceeds the window, for example: "400 This model's maximum context length is 1048576 tokens. However, you requested 1049647 tokens (985647 in the messages, 64000 in the completion)." (quoted via a search summary; the forum thread itself was not opened). — [OpenAI community forum: GPT-4o context length issue](https://community.openai.com/t/gpt-4o-context-length-issue-input-tokens-within-limit-but-exceeds-maximum/1109543); see also [Annoying error if max_completion_tokens is "too high"](https://community.openai.com/t/annoying-error-if-max-completion-tokens-is-too-high/1111015). Official docs and community reports differ here: the docs say "truncated", while users report 400s (at least on Chat Completions). Treat OpenAI as possibly rejecting.
- **Google Gemini (official):** "If your input tokens plus max_output_tokens exceed 1,048,576 tokens, the API automatically caps the output limit to the remaining space in the context window" (as quoted by the fetch tool; check against the raw page). — [Gemini API, Long context](https://aistudio.google.com/docs/long-context)
- **Moonshot Kimi (official):** `max_tokens` is "Deprecated, please refer to max_completion_tokens". If "the sum of the input token count (`prompt_tokens`) and `max_completion_tokens` exceeds the model context window", the API lowers the generation limit for that request to fit, then processes it. "The input token count itself must be less than the model context window size." The `finish_reason` is "length" when the limit is hit. K3-series default is 131072, settable to 1048576. — [Kimi API, Chat](https://platform.kimi.ai/docs/api/chat) (platform.moonshot.ai redirects here)
- **Zhipu / z.ai GLM (official):** max_tokens range is 1–131072. "the GLM-5.3, GLM-5.2, GLM-5.1, GLM-5, GLM-4.7, GLM-4.6 series supports 128K maximum output." `finish_reason` values include "`model_context_window_exceeded`". The docs do not say when it fires or whether over-window requests are rejected. — [z.ai Chat Completion](https://docs.z.ai/api-reference/llm/chat-completion)
- **DeepSeek (official):** The error code page has no context-length-specific error. The closest are "400 - Invalid Format" and "422 - Invalid Parameters: Your request contains invalid parameters." The pricing page lists context "1M" and max output "MAXIMUM: 384K", and does not say what happens on overflow. — [DeepSeek Error Codes](https://api-docs.deepseek.com/quick_start/error_codes); [DeepSeek Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing)
- **OpenRouter (official):** max_tokens is "1 or above". "This sets the upper limit for the number of tokens the model can generate in response. It won't produce more than this limit. The maximum value is the context length minus the prompt length." — [OpenRouter API Parameters](https://openrouter.ai/docs/api/reference/parameters)
- **Synthetic.new (official):** `max_completion_tokens` is "Maximum tokens for completion (including reasoning tokens)" and `max_tokens` is "Maximum number of tokens to generate". There are no defaults and no mention of context-window overflow. A `finish_reason` of `"length"` appears in the example. — [Synthetic, Chat Completions](https://dev.synthetic.new/docs/openai/chat-completions)
- **Alibaba Qwen (official):** The pricing page "does not state a maximum output length" or overflow behavior. — [Model Studio pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing)

### Inferences
- A global rule of `input ≤ context_window − min(65,536, model_max_output)` is safe on every vendor. It avoids OpenAI-style 400s, the error on older Claude models and OpenRouter's range rule, and it guarantees the full output budget on the auto-capping vendors (Gemini, Kimi, Claude 4.5+), which would otherwise silently shrink output.
- Given the context-rot guidance, an additional margin below that ceiling is reasonable, but no vendor states a number.

### Gaps
- DeepSeek, Qwen (DashScope) and Synthetic behavior on prompt + max_tokens > window is not documented in the pages read. It would need an empirical test or a different doc page (DeepSeek "Token & Token Usage"; Qwen per-model reference).
- No official OpenAI page with the exact 400 error text was found; the evidence is community only. Responses API behavior (incomplete vs. 400) is unverified.

## Q3. Tiered pricing above a length threshold (cost reason for input limits)

### Takeaway
Yes. Gemini Pro models charge more above 200K-token prompts. Qwen Plus/Flash tiers jump at 32K, 128K or 256K depending on model and region, and a tier applies to all tokens in the request. Anthropic now bills 1M context at standard rates except Haiku 5.5 above 100K. DeepSeek has no length tiers.

### Cited Findings
- **Gemini (official):** Gemini 3.1 Pro Preview standard input is "$4.00, prompts > 200k tokens" and output "$18.00, prompts > 200k". Gemini 2.5 Pro input is "$2.50, prompts > 200k tokens" and output "$15.00, prompts > 200k". The higher context-caching rate also applies above 200K. — [Gemini API Pricing](https://aistudio.google.com/docs/pricing)
- **Anthropic (official, verbatim):** "For every model with a 1M-token context window, 1M is the default: you don't need a beta header, and long-context requests are billed at standard pricing, except on Claude Haiku 5.5, where prompts over 100,000 tokens cost more." — [Anthropic, Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- **Qwen (official):** "The unit price is determined by the total number of input tokens in a single request." "All tokens in the request are billed at the unit price of the corresponding tier." Example prices per 1M tokens:
  - qwen-plus (Singapore): $0.4 in / $1.2 out up to 256K; $1.2 / $3.6 from 256K to 1M (3x).
  - qwen3.7-flash (Singapore): tiers at 32K ($0.03), 256K ($0.10) and 1M ($0.20 input).
  - qwen-plus and qwen-flash (Beijing): tiers at 128K, 256K and 1M.
  - qwen3.8-max, qwen3.7-max and qwen-max: "No tiered pricing".
  — [Model Studio pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing)
- **DeepSeek (official):** No length-based tiers; prices vary by cache hit/miss and peak/off-peak hours. — [DeepSeek Pricing](https://api-docs.deepseek.com/quick_start/pricing)

### Inferences
- If the global input limit is ≤128K, it avoids every length surcharge found (Gemini 200K, Haiku 5.5 100K, Qwen Beijing 128K), except qwen3.7-flash's 32K tier.

### Gaps
- OpenAI, Kimi, GLM, OpenRouter and Synthetic length-tier pricing was not checked in this session. OpenRouter passes through each upstream provider's pricing.
