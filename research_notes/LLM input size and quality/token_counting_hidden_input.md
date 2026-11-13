# Token counting accuracy (chars/4) and hidden input added by coding agents and bridges

Research date: 2026-11-13. Labels: [OFFICIAL] = vendor docs; [COMMUNITY] = blog, issue, benchmark, or paper by third parties; [PAPER] = arXiv or NeurIPS paper.

## A1. Official rules of thumb (OpenAI, Anthropic, Gemini) and their caveats

### Takeaway
"About 4 characters per token" is an English-prose rule from vendors. Gemini states it outright. Anthropic now gives no chars/token rule. Instead it warns that Claude 4.7+ tokenizers produce about 30% more tokens for the same text and tells users to recount per model.

### Cited Findings
- [OFFICIAL] Gemini: "For Gemini models, a token is equivalent to about 4 characters. 100 tokens is equal to about 60-80 English words." System instructions and tools are "counted as part of the input tokens" ("Tools (functions, code execution, Google Search) are also counted"). — [Google AI Studio docs: tokens](https://aistudio.google.com/docs/tokens) (ai.google.dev/gemini-api/docs/tokens now redirects there)
- [OFFICIAL] Anthropic: "Claude 4.7 and later models and Claude Mythos Preview use a newer tokenizer. The same input text produces approximately 30 percent more tokens than on earlier models. The exact increase depends on the content and workload shape. Recount prompts against the model you plan to use rather than reusing counts measured against earlier models." Fable 5.x and Mythos 5.x "share the tokenizer introduced with Claude Opus 4.7 ... roughly 30 percent higher than on models before Claude Opus 4.7." — [Anthropic token counting docs](https://platform.claude.com/docs/en/build-with-claude/token-counting)
- [OFFICIAL, via search summary] Anthropic's Opus 4.7 migration guide: "This new tokenizer may use roughly 1x to 1.35x as many tokens when processing text compared to previous models (up to ~35% more, varying by content)." Quoted in search results; the original page was not fetched. — [search result summary; see e.g. OpenRouter analysis](https://openrouter.ai/blog/insights/opus-47-tokenizer-analysis/)
- [OFFICIAL] OpenAI help article "What are tokens and how to count them": the fetch returned HTTP 403, so its exact "1 token ≈ 4 characters / ¾ word" wording could not be verified here. [PAPER] Roberts et al. cite the common rule "one token is roughly 4 characters or 0.75 words" and attribute it to the OpenAI tokenizer tool and Google's docs. — [Roberts, Han, Albanie, arXiv:2601.11518 (Jan 2026)](https://arxiv.org/html/2601.11518v1)

### Inferences
- chars/4 is calibrated on English prose for older BPE vocabularies. For Claude 4.7+/Fable/Mythos it undercounts English prose by about 25% (see A2: about 3.33 chars/token).

### Gaps
- Exact current OpenAI help-center wording was not read (403).
- No official chars/token statements were found for Qwen, GLM, Kimi, or DeepSeek.

## A2. Measured chars-per-token by content type and tokenizer

### Takeaway
chars/4 holds only for English prose on o200k, old Claude, and Gemini. Code runs about 2.2–4.2 chars/token, depending on language and tokenizer. New Claude tokenizers are about 2.2–2.5 on code and about 3.3 on prose. CJK text is about 0.9–1.5 chars/token, and the multilingual "token tax" can reach 15x. Using chars/4 for code on new Claude undercounts by about 40–80%.

### Cited Findings
- [COMMUNITY, measured] PlayCode compared identical files. Anthropic counts came from the official count_tokens endpoint, OpenAI from tiktoken o200k (checked against live API usage), and Gemini/Grok from their count endpoints. 16 fixtures; updated 2026-09-02. Chars/token below were derived from its token counts (old Claude → new Claude 4.7+ tokenizer):
  - English prose (2,115 chars): 4.44 → 3.33
  - HTML: 2.83 → 2.45
  - JavaScript: 2.93 → 2.43
  - Python: 2.71 → 2.20
  - TypeScript: 3.22 → 2.45
  - Rust: 2.87 → 2.23
  - JSON tool schema (9,948 chars): 3.78 → 3.01
  - Agent system prompt (42,661 chars): 3.96 → 2.85
  - Chinese prose (379 chars): 0.87 → 0.88
  - o200k (GPT), stated: TypeScript ≈ 4.24, Rust ≈ 3.51 chars/token; Chinese ≈ 1.26
  - Gemini: TypeScript ≈ 3.66, tool schema ≈ 3.91, Chinese ≈ 1.48
  - "DeepSeek and GLM were left out ... only rough four-characters-per-token estimates exist for them."
  — [PlayCode: real price of frontier models](https://playcode.io/blog/real-price-of-frontier-models)
- [COMMUNITY, measured at scale] OpenRouter, using >1M requests and a "QuadChars" baseline (4 printable chars = 1 token), found Opus 4.7 vs 4.6 native-token inflation of about 45% for prompts under 2K, about 42% for 2K–10K, about 34% for 10K–25K, and about 32–33% for 25K and above. Median native/QuadChars ratio for Opus 4.7 was 1.41x–1.73x, meaning Claude 4.7 counts 41–73% more tokens than chars/4 on real traffic. Opus 4.6 was 1.00x–1.30x. Effective cost rose 12–27% for prompts above 2K. Published 2026-04-27, updated 2026-06-24. — [OpenRouter: Opus 4.7 tokenizer analysis](https://openrouter.ai/blog/insights/opus-47-tokenizer-analysis/)
- [COMMUNITY] Simon Willison (cited by OpenRouter and search summaries) measured a system prompt at 1.46x more tokens on Opus 4.7 vs 4.6 and a text-heavy PDF at about 1.08x. Images in one test were about 3.01x. — [OpenRouter analysis](https://openrouter.ai/blog/insights/opus-47-tokenizer-analysis/)
- [PAPER] Roberts, Han, Albanie (arXiv:2601.11518, 2026-01-16):
  - "we find the heuristic of 0.75 words/token to be an oversimplification"
  - "assuming near-consistent tokenization rates across domains and models is an oversimplification"
  - Compression ratios "vary by nearly a factor of ten" between emojis and code/essays
  - Essays compress about 25% better than technical text
  - Across tokenizers, the same domain differs about 20–50% (about 100% for emojis and numbers)
  — [arXiv:2601.11518](https://arxiv.org/html/2601.11518v1)
- [PAPER] Petrov, La Malfa, Torr, Bibi, "Language Model Tokenizers Introduce Unfairness Between Languages" (NeurIPS 2023): tokenization lengths for some languages are "more than 15 times longer than English"; disparities "persist across the 17 tokenizers we evaluate"; byte/char-level models show "over 4 times" differences. Per-language figures (including Arabic) live in the interactive tool and were not extracted. — [Project page](https://aleksandarpetrov.github.io/tokenization-fairness); [arXiv:2305.15425](https://arxiv.org/abs/2305.15425)
- [PAPER] Arabic medical-task study: Arabic is about 2.4 tokens/word vs 1.5–1.6 for English across model-native tokenizers. This comes from the search snippet; the PDF was not read in full. — [arXiv:2602.05374](https://arxiv.org/pdf/2602.05374)
- [COMMUNITY] Agent-library code comments found via search: "flat chars/4 ... undercounts CJK", and code runs "roughly 2.5 characters per token". Found via search results only. — [OpenCode compaction docs search results](https://v2.opencode.ai/docs/compaction)

### Inferences
- Estimated multipliers to apply to chars/4 for safety, based on PlayCode:
  - English prose: 1.0x for o200k/Gemini; about 1.2x for old Claude; about 1.35x for new Claude
  - Python/TS: about 1.0–1.5x for o200k/Gemini; about 1.6–1.8x for new Claude
  - JSON: about 1.05x for Gemini; about 1.33x for new Claude
  - Arabic: likely 1.5–3x+ (word-level evidence only)

### Gaps
- No verified chars/token numbers were found for Qwen, GLM, Kimi, DeepSeek, or Llama tokenizers on code, JSON, or Arabic. The Arcee Trinity report (arXiv:2602.17004) reportedly has a bytes-per-token table for DeepSeek R1, Qwen3, Llama 3, and GPT-OSS, but the PDF could not be parsed. Tokka-Bench (Kimi K2, Qwen3, gpt-oss; 100 languages) was not read.
- Petrov's exact Arabic premium for cl100k was not extracted.

## A3. Free token-counting endpoints

### Takeaway
Anthropic (free, rate-limited), Gemini (countTokens), and Kimi (estimate-token-count) offer server-side counters. OpenAI's o200k is available offline via tiktoken. Official GLM/Qwen/DeepSeek counting endpoints were not verified.

### Cited Findings
- [OFFICIAL] Anthropic `POST /v1/messages/count_tokens`:
  - "Token counting is **free to use** but subject to requests per minute rate limits". RPM is 5,000 (Start), 10,000 (Build), and 20,000 (Scale). The limits are "separate and independent" from message creation.
  - The count "is an **estimate**". It "might include tokens added automatically by Anthropic for system optimizations. You are not billed for system-added tokens."
  - It accepts system, tools, images, and PDFs. It errors on server tools, the MCP connector, and url/file sources.
  - The example: one `get_weather` tool plus a short question = 403 input tokens.
  — [Anthropic token counting](https://platform.claude.com/docs/en/build-with-claude/token-counting)
- [OFFICIAL] Gemini `count_tokens` returns "the total number of tokens in the input only". Pricing and rate limits were not stated on the page read. — [Gemini tokens docs](https://aistudio.google.com/docs/tokens)
- [OFFICIAL, via search] Kimi/Moonshot `POST /v1/tokenizers/estimate-token-count` (api.moonshot.ai / api.moonshot.cn) takes a chat-completion-shaped body and returns `data.total_tokens`. The official docs require a Bearer API key. Pricing was not confirmed. — [Kimi estimate docs](https://platform.kimi.ai/docs/api/estimate)
- [COMMUNITY] PlayCode notes that OpenAI counts were made offline with tiktoken o200k_base and matched live usage. — [PlayCode](https://playcode.io/blog/real-price-of-frontier-models)

### Gaps
- No OpenAI server-side input-token-count endpoint for the Responses API was verified in this pass.
- GLM (Z.ai), Qwen (DashScope), and DeepSeek tokenizer APIs and offline tokenizers were not verified (DeepSeek/Qwen publish HF tokenizers per common knowledge, but this was not read).

## A4. Safety margins used by tools

### Takeaway
Agents use chars/4 plus a fixed buffer rather than a percentage. OpenCode v2 reserves a 20,000-token buffer.

### Cited Findings
- [OFFICIAL OpenCode docs, via search] OpenCode v2 serializes the request to JSON and counts 4 chars/token. Compaction triggers when the estimate exceeds the context limit minus max(output allowance, buffer). The default buffer is 20,000 tokens (e.g. about 108K trigger on a 128K window). — [OpenCode compaction docs](https://v2.opencode.ai/docs/compaction); [dev.to code analysis](https://dev.to/antonio_zhu_e726fd856cd86/opencode-v2-compaction-internals-2a5d)
- [COMMUNITY] Coinversa MCP (encountered in tooling) estimates "conservatively as serialized characters / 2". This is an example of a 2x-conservative heuristic; it comes from that server's own instructions in this session, not a web source.

### Gaps
- The "OpenCode 15% margin" was not found. Only the 20K buffer was found.
- Cline/Roo, Aider, Continue, and LiteLLM token_counter fallback margins were not researched (tool budget).

## B. Measured hidden input tokens added by coding agents and bridges

### Takeaway
On a trivial first prompt, agents add about 2K (Aider, Pi) to about 31–34K (Claude Code, Kiro) hidden input tokens. MCP servers can add 4K–67K more. A bridge adding about 27K to a 650-token prompt is typical of a Claude-Code-class harness.

### Cited Findings
- [COMMUNITY, measured] TestDino "Harness Overhead Benchmark" ran 2026-10-08 with a one-word "OK" prompt, median of 3, clean repo with no MCP/skills, using each CLI's own JSON usage output. First-call input tokens:
  - Kiro CLI 2.28.0: 31,798
  - Claude Code 2.1.293 (Opus 5.5): 31,480; 34,161 with a real profile (CLAUDE.md, memory, 3 MCP servers)
  - Copilot CLI 1.0.93: 17,059
  - Codex CLI 0.161.0: 14,768 (14,851 with 2 plugins)
  - Qwen Code 0.25.0: 13,677
  - OpenCode 1.18.35: 13,437
  - Cursor CLI: 13,174
  - Gemini CLI 0.59.0: 9,290, plus an 828-token routing call
  - Cline CLI 2.11.0: 5,382
  - Aider 0.86.2: about 2,500 (605 in "whole" edit format)
  - Pi 0.73.1: 1,894
  - Kimi, Roo, and GLM/Z Code were not covered. Counts use different tokenizers.
  — [TestDino benchmark](https://testdino.com/blog/harness-overhead-benchmark)
- [COMMUNITY, proxy-measured] Lars de Ridder ran Context Lens proxy traces on Sonnet 4.6 with an Express.js bug task, posted 2026-03-05.
  - Tool definitions and system prompt in chars: Claude Code 62.6K + 15.6K, about 16K tokens for its tools; OpenCode 22.1K + 1.6K; Cline 13.5K + 11.1K; pi 2.2K + 4.2K; Aider 0 + 1.3K.
  - Peak context: Claude Code 31,966; OpenCode 34,506; Cline 33,981; Aider 13,808.
  — [dev.to: Five CLIs walk into a context window](https://dev.to/larsderidder/five-clis-walk-into-a-context-window-1c5a)
- [COMMUNITY] Codex CLI v0.114.0: about 8,497 input tokens for a minimal session (Alex Fazio, as cited). Another setup measured 25,450. Codex's system prompt is often cited at about 5,000. These are secondary sources. — [Daniel Vaughan Codex blog](https://codex.danielvaughan.com/2026/04/08/codex-cli-performance-optimization/)
- [COMMUNITY] Claude Code `/context` reports: "System tools" 13.7K–17.6K tokens across versions; "System prompt" 2.5K–8.3K. Issues claim `/context` over-reports MCP by about 3x (#16466) and System tools by about 25x with deferred tools (#82333). These are unconfirmed user reports. — [claudeissues #82333](https://claudeissues.com/issue/82333-context-over-reports-system-tools-by-25x-and-under-reports-messages-wire-measure); [#16466](https://claudeissues.com/issue/16466-bug-context-command-over-reports-mcp-server-token-usage-by-3x); [/context explainer](https://dannywillems.github.io/2026/01/16/claude-code-context-command.html)
- [COMMUNITY] A Claude Code v2.1.111 + Opus 4.7 bug report says it "consumes ~1.7–2x more context tokens than v2.1.110 on a fresh session". This shows tokenizer and harness changes compound. — [claudeissues #49356](https://claudeissues.com/issue/49356-bug-v2-1-111-with-opus-4-7-consumes-1-7-2x-more-context-tokens-than-v2-1-110-on)
- [COMMUNITY] claude-code issue #11364 (filed 2025-11-10): 7 MCP servers used 67,300 tokens of tool definitions (33.7% of 200K). The GitHub server alone was about 18K. 3 servers (filesystem, git, mcp-gateway) used 42.6K. Claude Code now defers MCP definitions by default (tool search). — [claudeissues #11364 mirror](https://claudeissues.com/issue/11364-lazy-load-mcp-tool-definitions-to-reduce-context-usage); [MCP context bloat 2026](https://mcp.directory/blog/mcp-context-bloat-fix-2026-tool-search-code-mode-progressive-disclosure)
- [COMMUNITY] MCP schema sizes (labelled "Est."): GitHub MCP 26 tools ≈ 4,242 tokens; GitHub full 93 tools ≈ 55,000; Google Maps 7 tools ≈ 704; one Gmail tool 820. — [dev.to kenimo49](https://dev.to/kenimo49/your-mcp-server-eats-55000-tokens-before-your-agent-says-a-word-i-measured-the-real-cost-19l8)
- [OFFICIAL Z.ai, via search] GLM Coding Plan quota "varies depending on the cache hit rate". There is a peak-hour weighting, and off-peak is charged at 50%. No published Z Code system-prompt size was found. A third-party estimate says one "prompt" is about 15–20 model calls. — [Z.ai devpack docs](https://docs.z.ai/devpack/overview); [ZCode deep dive](https://flaviocopes.com/zcode/)

### Inferences
- The user's ~27,000 hidden tokens on a 650-token prompt through Z Code matches the Claude Code / Kiro class (about 31K first call). Because it is resent on each agent-loop call, real input can be N × 27K unless it is cached.
- For one-shot batch jobs, calling provider APIs directly (no harness) avoids 2K–34K tokens of overhead per call. Budget = chars/4 × content multiplier (A2) + harness overhead (B) + margin.
- Cached prefix tokens still occupy the context window, even though they are billed at a discount.

### Gaps
- No direct measurement of Z Code's, Kimi Code/Kimi CLI's, Roo Code's, or claude-code-router's system prompt or tool overhead was found.
- The earlier figure "~32,800 Claude Code vs ~6,900 OpenCode" was not re-located in this pass. TestDino's later data shows OpenCode at 13,437, so OpenCode's overhead varies by version and model.
