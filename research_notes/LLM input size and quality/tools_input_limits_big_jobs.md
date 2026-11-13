# How real tools limit input size, and what they do when files don't fit

Scope: (A) input limits and compaction thresholds in coding/review tools, and whether any of them refuse instead of truncating. (B) strategies for jobs that don't fit, and the evidence on which one keeps accuracy best.

Method: source files were read from `raw.githubusercontent.com/<repo>/HEAD/...` on 2026-11-13, so they reflect each default branch on that date. The GitHub API was blocked in this session, so I have no commit SHAs. "Official" means the tool vendor's own repo or docs; "community" means anything else.

## (A) Input limit or compaction threshold per tool: percent of window, fixed reserve, or refuse?

### Takeaway
- Nearly every agent CLI uses the same pattern: when the conversation grows, it compacts or summarizes; it never hard-limits the conversation.
- The triggers fall into two families:
  - **A percent of the window:** Codex 90% (with 95% counted as usable), Gemini CLI 50%, Goose 80%, Qwen Code 85%, Kimi 85%.
  - **The window minus a fixed reserve:** Qwen Code and Claude Code use 13k plus 20k; Kimi 50k; PAL 50k.
  - Several tools use **min(percent, window − reserve)**, which suits both small and large windows.
- Only a few tools truly **refuse a single over-large request**:
  - PAL/zen-mcp `check_total_file_size`: "STRICT REJECTION … No partial inclusion".
  - PAL's MCP prompt-size check returns `resend_prompt`.
  - Gemini CLI's `ContextWindowWillOverflow` event.
  - Aider's `check_tokens`, which asks for confirmation; it does not hard-refuse.
  - LiteLLM `enable_pre_call_checks`, which raises `ContextWindowExceededError` or routes to a larger model.
  - SWE-agent exits with `exit_context`.

### Cited Findings

**Codex CLI (official, openai/codex).** File `codex-rs/protocol/src/openai_models.rs`:
- Usable window defaults to 95%: `const fn default_effective_context_window_percent() -> i64 { 95 }`, documented as "Percentage of the context window considered usable for inputs, after reserving headroom for system prompts, tool overhead, and model output." — [official](https://github.com/openai/codex/blob/main/codex-rs/protocol/src/openai_models.rs)
- Auto-compaction triggers at 90%: "Token threshold for automatic compaction. When omitted, core derives it from `context_window` (90%). When provided, core clamps it to 90% of the context window when available." The code is `.map(|context_window| (context_window * 9) / 10)` followed by `std::cmp::min(limit, context_limit)`. A configured limit can only lower the trigger. — same file

**Gemini CLI (official, google-gemini/gemini-cli).**
- File `packages/core/src/context/chatCompressionService.ts`:
  - `export const DEFAULT_COMPRESSION_TOKEN_THRESHOLD = 0.5;`, documented as "If the chat history exceeds this threshold, it will be compressed."
  - `const COMPRESSION_PRESERVE_THRESHOLD = 0.3;`, documented as "only the last 30% of the chat history will be kept after compression."
  - The same file has `COLLAPSE_HISTORY_BYTE_THRESHOLD = 256 * 1024`, which collapses old function responses. — [official](https://github.com/google-gemini/gemini-cli/blob/main/packages/core/src/context/chatCompressionService.ts)
- **Refuses an over-large single request.** In `packages/core/src/core/client.ts`, `remainingTokenCount = tokenLimit(model) - this.getChat().getLastPromptTokenCount()`. Then `if (estimatedRequestTokenCount > remainingTokenCount) { yield { type: GeminiEventType.ContextWindowWillOverflow, ... }; return turn; }`, so the request is not sent. — [official](https://github.com/google-gemini/gemini-cli/blob/main/packages/core/src/core/client.ts)

**Qwen Code (official, QwenLM/qwen-code, a Gemini CLI fork).** File `packages/core/src/services/chatCompressionService.ts`. It has moved away from Gemini's 50% and now explicitly copies Claude Code's constants:
- `export const DEFAULT_PCT = 0.85;`
- `export const SUMMARY_RESERVE = COMPACT_MAX_OUTPUT_TOKENS; // 20_000`
- `export const AUTOCOMPACT_BUFFER = 13_000;`, with the comment "Matches claude-code's AUTOCOMPACT_BUFFER_TOKENS (autoCompact.ts:62) — empirically chosen to leave headroom for the compaction sideQuery round-trip plus a few user-message turns before the window saturates."
- `WARN_BUFFER = 20_000`, which "Matches claude-code's WARNING_THRESHOLD_BUFFER_TOKENS".
- `HARD_BUFFER = 3_000`, which "matches claude-code's MANUAL_COMPACT_BUFFER".
- The formula is `auto = absoluteCeiling > 0 ? min(pct * window, absoluteCeiling) : pct * window`, where `absoluteCeiling = (window - 20_000) - 13_000`. The comment says: "This mirrors claude-code (autoCompact.ts), which combines its percentage override with the absolute ceiling via Math.min." — [official Qwen repo](https://github.com/QwenLM/qwen-code/blob/main/packages/core/src/services/chatCompressionService.ts)

**Claude Code (Anthropic; source not public).**
- The best structured evidence is Qwen Code's comments above. They imply Claude Code auto-compacts at roughly window − 20k output reserve − 13k buffer, about 33k below the window, which is about 83.5% of 200k. — [Qwen Code source citing autoCompact.ts](https://github.com/QwenLM/qwen-code/blob/main/packages/core/src/services/chatCompressionService.ts)
- Community guides also describe a hard-coded buffer of about 33k. — [claudefa.st, community](https://claudefa.st/blog/guide/mechanics/context-buffer-management)
- GitHub issues (some read only through mirrors):
  - #28728 asks to "trigger earlier", at 80–85%, because large reads overshoot the limit.
  - #31806 says `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` can only lower the threshold below the default of about 83%.
  - #40757 and #54056 report compaction at about 420k and about 367k on 1M-window Opus.
  — [issue #28728](https://github.com/anthropics/claude-code/issues/28728); [mirror of #31806](https://claudeissues.com/issue/31806-claude-autocompact-pct-override-cannot-raise-threshold-above-default-83); [mirror of #54056](https://claudeissues.com/issue/54056-bug-auto-compact-triggers-consistently-at-367k-tokens-on-opus-4-7-1m-in-claude-c)
- The issues imply Claude Code deliberately does not let 1M-window sessions fill up (about 37–42%). I found no official Anthropic statement explaining that cap.
- Anthropic's official compaction description: "The model preserves architectural decisions, unresolved bugs, and implementation details … The agent can then continue with this compressed context plus the five most recently accessed files." (Sep 29, 2025) — [Anthropic Engineering, official](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

**Goose (official, block/goose).**
- `pub const DEFAULT_COMPACTION_THRESHOLD: f64 = 0.8;`, in the goose context-management crate.
- `crates/goose/src/context_mgmt/mod.rs` defines `GOOSE_AUTO_COMPACT_THRESHOLD`, a cap `GOOSE_AUTO_COMPACT_TOKEN_LIMIT`, and `threshold.min(token_limit as f64 / context_limit as f64)`, meaning "`threshold` of the context, but never more than `token_limit` tokens." — [official](https://github.com/block/goose/blob/main/crates/goose/src/context_mgmt/mod.rs)

**Kimi CLI (official, MoonshotAI/kimi-cli).**
- `src/kimi_cli/config.py`: `reserved_context_size: int = Field(default=50_000, ge=1000)` and `compaction_trigger_ratio: float = Field(default=0.85, ge=0.5, le=0.99)`.
- `soul/compaction.py`: `return (token_count >= max_context_size * trigger_ratio or token_count + reserved_context_size >= max_context_size)`, i.e. "whichever fires first". — [official](https://github.com/MoonshotAI/kimi-cli/blob/main/src/kimi_cli/soul/compaction.py)

**Roo Code (official, RooCodeInc/Roo-Code).** File `src/core/context-management/index.ts`:
- `export const TOKEN_BUFFER_PERCENTAGE = 0.1`
- `const allowedTokens = contextWindow * (1 - TOKEN_BUFFER_PERCENTAGE) - reservedTokens`, where `reservedTokens = maxTokens || ANTHROPIC_DEFAULT_MAX_TOKENS`
- Condensing triggers on `contextPercent >= effectiveThreshold || prevContextTokens > allowedTokens`. The threshold `autoCondenseContextPercent` can be set per profile. The comment reads "Truncate if we're within TOKEN_BUFFER_PERCENTAGE of the context window". — [official](https://github.com/RooCodeInc/Roo-Code/blob/main/src/core/context-management/index.ts)

**Aider (official, Aider-AI/aider).** File `aider/coders/base_coder.py`:
- Pre-send check in `check_tokens`: `if max_input_tokens and input_tokens >= max_input_tokens:` it prints "Your estimated chat context of {input_tokens:,} tokens exceeds the {max_input_tokens:,} token limit for {model}!" and the remedies "/drop", "/clear", "Break your code into smaller files". It then asks `confirm_ask("Try to proceed anyway?")`, and if declined, `send_message` returns without sending.
- After a provider error (`ContextWindowExceededError`), `show_exhausted_error()` prints "Model … has hit a token limit!" with `fudge = 0.7` heuristics ("possibly exhausted context window!").
- So Aider asks to confirm or refuses; it does not truncate files. Its limit is 100% of `max_input_tokens`, with no reserve. — [official](https://github.com/Aider-AI/aider/blob/main/aider/coders/base_coder.py)

**LiteLLM (official, BerriAI/litellm).**
- `class ContextWindowExceededError(BadRequestError)` in `litellm/exceptions.py`. — [official](https://github.com/BerriAI/litellm/blob/main/litellm/exceptions.py)
- Docs say "If a request exceeds the limit, LiteLLM raises `ContextWindowExceededError`" when `router_settings: enable_pre_call_checks: true`. Without it, "requests are sent to the provider regardless of input token count."
- `model_info.max_input_tokens` overrides the limit for a deployment.
- `context_window_fallbacks: [{"model-a": ["bigger-model"]}]` reroutes to a bigger model ("A matching chain takes priority over later `order` levels and generic `fallbacks`"). — [LiteLLM reliability docs, official](https://docs.litellm.ai/docs/proxy/reliability)

**PAL MCP / zen-mcp-server (official, BeehiveInnovations/pal-mcp-server).** This is the closest existing design to "one global rule plus refuse".
- `utils/model_context.py` `calculate_token_allocation`:
  - windows `< 300_000`: `content_ratio = 0.6`, `response_ratio = 0.4`, `file_ratio = 0.3`, `history_ratio = 0.5`
  - larger windows: `0.8 / 0.2 / 0.4 / 0.4`
  - token estimate: `return len(text) // 3  # Conservative estimate`
- `utils/file_utils.py` `check_total_file_size`, whose docstring reads "IMPORTANT: This performs STRICT REJECTION at MCP boundary. No partial inclusion - either all files fit or request is rejected. This forces the CLI to make better file selection decisions."
  - Threshold by window size: `>= 1_000_000: 0.8`, `>= 500_000: 0.7`, otherwise `0.6  # Conservative`, applied to `file_tokens`.
  - On rejection it returns `"status": "code_too_large"` with "Please select fewer, more specific files … If this persists, please use a model with a larger context window".
- In contrast, `read_files(..., reserve_tokens=50_000)` silently skips files that exceed the remaining budget and appends a "--- SKIPPED FILES (TOKEN LIMIT) ---" note. Two different behaviors exist in the same codebase.
- `config.py`: `MCP_PROMPT_SIZE_LIMIT` is 60% of `MAX_MCP_OUTPUT_TOKENS` × 4 chars (default 60,000 chars, "~15k tokens input of 25k total"). An oversized prompt returns `"status": "resend_prompt"` with "MANDATORY ACTION REQUIRED: The prompt is too large for MCP's token limits … " so the caller resends the prompt as a file. — [config.py](https://github.com/BeehiveInnovations/pal-mcp-server/blob/main/config.py); [file_utils.py](https://github.com/BeehiveInnovations/pal-mcp-server/blob/main/utils/file_utils.py); [model_context.py](https://github.com/BeehiveInnovations/pal-mcp-server/blob/main/utils/model_context.py)

**SWE-agent (official).** `sweagent/agent/agents.py`: `except ContextWindowExceededError: return handle_error_with_autosubmission("exit_context", "Exit due to context window")`. The agent stops and submits; it does not truncate. — [official](https://github.com/SWE-agent/SWE-agent/blob/main/sweagent/agent/agents.py)

**OpenHands (official docs).**
- `LLMSummarizingCondenser` with `max_size` and `keep_first`; the documented example uses `max_size=10, keep_first=2`. It counts events, not tokens. — [OpenHands docs, official](https://docs.openhands.dev/sdk/guides/context-condenser)
- Blog: "up to 2x" lower per-turn cost; 54% vs 53% resolved on a SWE-bench Verified subset. — [OpenHands blog, official](https://openhands.dev/blog/openhands-context-condensensation-for-more-efficient-ai-agents)

**consult-llm-mcp (community, raine/consult-llm-mcp).** The README describes no token or size gate before sending. The only size handling described is for output: "If the response exceeds the shell tool's output limit (30k chars in Claude Code by default), the full output is saved to a file". — [README](https://github.com/raine/consult-llm-mcp)

**just-every/code (community Codex fork).** The README only mentions that "Terminal agents are compacted and archived" and that "Auto Drive … payloads now enforce bounded history". No numeric limit was found. — [README](https://github.com/just-every/code)

**PR-Agent (Qodo, official).** Default `pr_agent/settings/configuration.toml`:
- `max_model_tokens = 32000 # Limits the maximum number of tokens that can be used by any model, regardless of the model's default capabilities.`
- `large_patch_policy = "clip"  # "clip" (default) or "skip"`
- `enable_large_pr_chunking=false`, `max_number_of_calls=3`
- `[pr_description] enable_large_pr_handling=true`, `max_ai_calls=4`
- `pr_processing.py`: `OUTPUT_BUFFER_TOKENS_SOFT_THRESHOLD = 1500`, `HARD = 1000`, and "Additional modified files (insufficient token budget to process):" — [config](https://github.com/qodo-ai/pr-agent/blob/main/pr_agent/settings/configuration.toml); [pr_processing.py](https://github.com/qodo-ai/pr-agent/blob/main/pr_agent/algo/pr_processing.py)

**Not verified this session** (taken from the brief; the source paths I tried returned 404):
- OpenCode: window − max(15%, 16k)
- Cline: 27k/30k/40k reserves
- Continue: min(1000, 2%)
- CrewAI: 85%
- claude-code-router `longContextThreshold`: the README at HEAD did not contain it.

### Inferences
- The defaults converge on **80–90% of the window as the trigger, or window − 30–50k**. Gemini CLI's 50% is the outlier, and its fork Qwen Code moved to 85% / Claude Code's constants.
- For a *single-shot* review job (no conversation), the closest analogues are:
  - PAL: input ≤ 60% of the window when the window is under 300k, ≤ 80% above; whole-file rejection.
  - Codex: 95% usable.
  - Kimi: ≥ 50k reserve.
- A safe global rule that matches existing practice: **input_tokens ≤ min(0.6–0.8 × window, window − max_output − ~15–20k margin), with a conservative token estimate (PAL uses chars/3), and reject the whole job if it doesn't fit.** This is an inference, not any single tool's rule.
- Silent truncation exists in real tools: PR-Agent's `clip` default, PAL `read_files` skipping files, Roo/Cline sliding-window truncation. Even so, PR-Agent's own code comments say omissions should be made visible.

### Gaps
- There is no official, public Claude Code source or document for the exact autoCompact constants; the evidence is Qwen Code's comments plus issues.
- I found no quality rationale (as opposed to a headroom rationale) in code comments for Codex's 95/90%, Gemini's 50%, or Goose's 80%. Qwen's comment is the only stated reason: "empirically chosen to leave headroom".
- OpenCode, Cline, Continue, CrewAI and claude-code-router were not re-verified (source paths moved or were not found).

## (A2) Why those numbers: quality rationale ("context rot")

### Takeaway
- The stated reasons in code are about **headroom**: room for the summary call, output, and the next turns.
- The **quality** rationale comes from vendor blogs and research: accuracy degrades well before the window is full.

### Cited Findings
- Anthropic: "as the number of tokens in the context window increases, the model's ability to accurately recall … decreases"; "LLMs have an 'attention budget'"; "n² pairwise relationships for n tokens." — [Anthropic, official, Sep 29 2025](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- Chroma tested 18 LLMs (GPT-4.1, Claude 4, Gemini 2.5, Qwen3):
  - "performance grows increasingly unreliable as input length grows", even on simple tasks.
  - "Even a single distractor reduces performance."
  - "structural coherence consistently hurts model performance."
  — [Chroma research, Jul 14 2025 (community/vendor research)](https://www.trychroma.com/research/context-rot)
- Qwen Code's buffer constants were "empirically chosen to leave headroom for the compaction sideQuery round-trip plus a few user-message turns". — [Qwen Code](https://github.com/QwenLM/qwen-code/blob/main/packages/core/src/services/chatCompressionService.ts)
- PAL comments describe 0.6 for ~200k windows as "Conservative" and 0.8 for 1M windows as "Can be more generous". — [file_utils.py](https://github.com/BeehiveInnovations/pal-mcp-server/blob/main/utils/file_utils.py)

### Inferences
- A fraction-of-window rule should be stricter for weaker or older models (see the Databricks saturation points below). One global rule should therefore be set on the *effective* length of the weakest model in the pool, not on the advertised window.

### Gaps
- I did not locate the Gemini CLI PR that justifies 50%, Roo Code's condense-threshold discussion, or the Cline "context window issues" posts within budget.

## (B) What tools do when files don't fit, and which approach keeps accuracy best

### Takeaway
- The tools take four approaches:
  - **Refuse and ask for fewer files:** PAL, Aider, Gemini CLI.
  - **Clip or skip and list the omitted files:** PR-Agent's default.
  - **Split into chunks then merge (map-reduce):** PR-Agent's opt-in `enable_large_pr_chunking`, `max_ai_calls`.
  - **Retrieve only relevant parts:** Aider repo map; agentic grep in Claude Code and Cline; embeddings in Cursor and Augment.
- Evidence favors feeding the model *less, more relevant* input over filling long contexts. Long-context processing beats RAG only for strong models with enough budget.

### Cited Findings
- **Aider repo map (official):** "a graph ranking algorithm, computed on a graph where each source file is a node and edges connect files which have dependencies"; "`--map-tokens` … defaults to 1k tokens"; "Aider adjusts the size of the repo map dynamically." — [aider.chat/docs/repomap](https://aider.chat/docs/repomap.html)
- **Claude Code agentic search:** Anthropic describes a hybrid approach in which CLAUDE.md is loaded up front and "primitives like glob and grep allow it to navigate its environment". Sub-agents return "a condensed, distilled summary", often 1,000–2,000 tokens. — [Anthropic, official](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
  - Boris Cherny says early Claude Code used RAG with a local vector DB, and agentic search beat it "By a lot", but the evidence was "mostly vibes" plus internal benchmarks. I saw this only in secondhand reports. — [OfficeChai, community](https://officechai.com/ai/claude-researcher-explains-how-agentic-search-performed-better-than-rag-for-code-generation/); [smartscope, community](https://smartscope.blog/en/ai-development/practices/rag-debate-agentic-search-code-exploration/)
- **Cline (official blog):** "when you chunk code for embeddings, you're literally tearing apart its logic". It also cites security: embeddings are a second copy of your IP. — [Cline blog](https://cline.bot/blog/why-cline-doesnt-index-your-codebase-and-why-thats-a-good-thing)
  - Counterpoint: Zilliz argues grep-only retrieval "burns too many tokens". — [Zilliz, community/vendor](https://zilliz.com/blog/why-im-against-claude-codes-grep-only-retrieval-it-just-burns-too-many-tokens)
- **PR-Agent large PRs (official):**
  - The default prunes and clips the diff. Files that don't fit are listed under "Additional modified files (insufficient token budget to process)".
  - With chunking enabled it will "split the diff into chunks, review each chunk, and merge the per-chunk results into one review" (`max_number_of_calls=3`).
  - Code comment on unreadable files: "Omitting it would make the gap invisible: the model would report on the pull request while quietly skipping a changed file, and the result is indistinguishable from a file that is clean." — [configuration.toml](https://github.com/qodo-ai/pr-agent/blob/main/pr_agent/settings/configuration.toml); [pr_processing.py](https://github.com/qodo-ai/pr-agent/blob/main/pr_agent/algo/pr_processing.py)
- **CodeRabbit:** a third-party aggregator reports file caps of 150 (Pro) and 300 (Pro+) files per PR review, and says skipped reviews prompt narrower commands in the CLI. Unverified against the official docs. — [releases.sh, community](https://releases.sh/release/rel_wjhC6aWTGJh-PGqf6nd0B)
- **Long context vs RAG:** Li et al. (Jul 2024, rev. Oct 2024) found that "when resourced sufficiently, LC consistently outperforms RAG in terms of average performance", while RAG is much cheaper. Their Self-Route method routes between the two and "significantly reduces the computation cost while maintaining a comparable performance to LC." — [arXiv 2407.16833](https://arxiv.org/abs/2407.16833)
- **Databricks (Aug 12, 2024; 2,000+ experiments, 13 LLMs):**
  - "Llama-3.1-405b performance starts to decrease after 32k tokens"; GPT-4-0125 after 64k; gpt-4-turbo and claude-3-sonnet saturate around 16k; Mixtral around 4k; DBRX around 8k.
  - claude-3-sonnet goes from 0.668 at 32k to 0.485 at 125k.
  - "only a few models can maintain consistent long context RAG performance"; gpt-4o, claude-3.5-sonnet and gpt-4o-mini are mostly stable.
  — [Databricks blog](https://www.databricks.com/blog/long-context-rag-performance-llms)
- **LongCodeBench (COLM 2025):** Claude 3.5 Sonnet on LongSWE-Bench dropped "from 29% to 3% when increasing context length from 32K to 256K". The authors report "inability to infer performance at longer contexts from shorter ones." — [arXiv 2505.07897](https://arxiv.org/abs/2505.07897)
- **Summarization vs masking for agents:** arXiv 2508.21433 reports that a hybrid of observation masking and LLM summarization cut cost 7% vs masking and 11% vs pure LLM summarization on SWE-bench Verified. This came from a search snippet; I did not read the paper. — [alphaxiv 2508.21433](https://www.alphaxiv.org/overview/2508.21433)
  - OpenHands condenser: 54% vs 53% solve rate. — [OpenHands blog](https://openhands.dev/blog/openhands-context-condensensation-for-more-efficient-ai-agents)

### Inferences
- For review and coding jobs that must not silently drop content, the evidence supports this order:
  1. Refuse if the input exceeds a conservative per-model effective budget.
  2. Let the caller narrow the input, or split it explicitly into staged sub-jobs, each within budget, with a visible manifest of every file covered.
  3. Avoid compaction or summarization of the inputs under review, because summaries lose line-level detail.
- Advertised windows overstate the usable length. Several models degrade at 16–64k (Databricks), and coding accuracy can collapse by 256k (LongCodeBench). A global rule keyed to a fraction of the advertised window can still be too generous for weaker models. An absolute cap, e.g. min(fraction × window, a fixed ceiling), is more defensible.

### Gaps
- I found no rigorous public benchmark comparing map-reduce and single-pass code review for accuracy. PR-Agent's chunking is opt-in, with no published accuracy data.
- I did not read Sourcegraph Cody, Augment, Greptile or LongRAG sources in this session.
- CodeRabbit's official large-PR behavior is unverified.
