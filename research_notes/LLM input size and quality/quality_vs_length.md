# LLM answer quality vs. input length (academic benchmarks and papers)

Research date: 2026-11-13. Sources marked [official] = paper authors / vendor; [community] = third-party / aggregator. Only items actually read are cited; everything else is listed under Gaps. About 15 tool calls were used, so some requested benchmarks (HELMET, Michelangelo, BABILong, LongBench v2, LongCodeArena) were NOT read. See the Gaps sections.

## 1. "Lost in the Middle" (Liu et al., 2023, TACL 2024): what was measured, position effects, magnitudes

### Takeaway
Multi-document QA accuracy is U-shaped in the position of the relevant document. With only about 4K–6K tokens of input, GPT-3.5-Turbo's accuracy with the answer in the middle fell below its no-documents (closed-book) score of 56.1%. "Extended-context" variants (16K, 100K) were no better than their short-window siblings on the same inputs. So the position problem appears at a small fraction of the window and is not fixed by a larger window.

### Cited Findings
- [official] Setup: multi-document QA with 10, 20 and 30 retrieved documents, labelled in the paper's figures as "~2K tokens", "~4K tokens" and "~6K tokens"; passages are "chunks of at most 100 tokens". There is also a key-value retrieval task. — [Liu et al. arXiv 2307.03172](https://arxiv.org/abs/2307.03172) (PDF text extracted)
- [official] Models: GPT-3.5-Turbo (4K) and GPT-3.5-Turbo (16K), Claude-1.3 and Claude-1.3 (100K), MPT-30B-Instruct (8192 tokens), LongChat-13B (16K). The paper also evaluates Llama-2 variants. — [Liu et al.](https://arxiv.org/abs/2307.03172)
- [official] "performance is often highest when relevant information occurs at the beginning or end of the input context, and significantly degrades when models must access relevant information in the middle of long contexts." — [abstract](https://arxiv.org/abs/2307.03172)
- [official] "GPT-3.5-Turbo's multi-document QA performance can drop by more than 20%—in the worst case, performance in 20- and 30-document settings is lower than performance without any input documents (i.e., closed-book performance; 56.1%)." — [Liu et al.](https://arxiv.org/abs/2307.03172)
- [official] Table 1, closed-book vs. oracle (single gold document) accuracy:

  | Model | Closed-book | Oracle |
  |---|---|---|
  | LongChat-13B (16K) | 35.0% | 83.4% |
  | MPT-30B-Instruct | 31.5% | 81.9% |
  | GPT-3.5-Turbo | 56.1% | 88.3% |
  | GPT-3.5-Turbo (16K) | 56.0% | 88.6% |
  | Claude-1.3 | 48.3% | 76.1% |
  | Claude-1.3 (100K) | 48.2% | 76.4% |

  — [Liu et al.](https://arxiv.org/abs/2307.03172)
- [official] "Extended-context models are not necessarily better at using input context... the 10- and 20-document settings both fit in the context window of GPT-3.5-Turbo and GPT-3.5-Turbo (16K), and we observe that their performance as a function of position of relative information is nearly superimposed." — [Liu et al.](https://arxiv.org/abs/2307.03172)
- [official] The paper also reports that base models without instruction tuning show the U-shape, and that Llama-2 7B is "solely recency biased" while the 13B and 70B models are U-shaped. — [Liu et al.](https://arxiv.org/abs/2307.03172)

### Inferences
- The worst-case drop happened at about 4K–6K tokens. That is roughly 100–150% of GPT-3.5-Turbo's 4K window, but only about 25–37% of the 16K variant's window, and the 16K variant behaved the same. Position, not the percentage of the window used, was the driver.
- These are 2023 models. Newer frontier models score much better on simple retrieval, but item 2 (NoLiMa) shows that position and length effects persist once literal matching is removed.

### Gaps
- Exact per-position accuracies (for example GPT-3.5-Turbo at position 1 vs. position 10 of 20) appear only in Figure 5 and were not extracted as numbers.

## 2. RULER (NVIDIA, Hsieh et al., 2024): effective context length; claimed vs. effective; typical ratio

### Takeaway
RULER defines "effective length" as the longest tested length at which a model still scores at least 85.6%, which is Llama-2-7B's score at 4K. In the original 2024 table, effective length was usually 25–50% of the claimed window. For 1M-token claims it was often much less (GLM4-9B 6.4%, GradientAI Llama3-70B 1.6%). The 85.6% cut-off is a fixed absolute bar chosen by the authors, not a property derived from the models. Newer Qwen3 models (2025) reach 50–100% of their claimed 128K.

### Cited Findings
- [official] Threshold: "We use the performance of Llama2-7b model at the 4K context length as the threshold." Definition: "The effective context length is the maximum length passing this threshold." — [RULER paper arXiv 2404.06654](https://arxiv.org/html/2404.06654v3)
- [official] Of the models tested, "only half of them can maintain satisfactory performance at the length of 32K". The paper also says that "despite achieving nearly perfect accuracy in the vanilla NIAH test, almost all models exhibit large performance drops" as context length increases. — [RULER paper](https://arxiv.org/html/2404.06654v3); [RULER GitHub](https://github.com/NVIDIA/RULER)
- [official] Table 3 (paper, 2024). Scores are %. The ratio column is my calculation of effective ÷ claimed.

  | Model | Claimed | Effective | Eff/Claimed | 4K | 8K | 16K | 32K | 64K | 128K |
  |---|---|---|---|---|---|---|---|---|---|
  | Gemini-1.5-Pro | 1M | >128K | ≥12.8% (tested only to 128K) | 96.7 | 95.8 | 96.0 | 95.9 | 95.9 | 94.4 |
  | GPT-4 | 128K | 64K | 50% | 96.6 | 96.3 | 95.2 | 93.2 | 87.0 | 81.2 |
  | Llama3.1 70B | 128K | 64K | 50% | 96.5 | 95.8 | 95.4 | 94.8 | 88.4 | 66.6 |
  | Qwen2 72B | 128K | 32K | 25% | 96.9 | 96.1 | 94.9 | 94.1 | 79.8 | 53.7 |
  | Command-R-plus 104B | 128K | 32K | 25% | 95.6 | 95.2 | 94.2 | 92.0 | 84.3 | 63.1 |
  | GLM4 9B | 1M | 64K | 6.4% | 94.7 | 92.8 | 92.1 | 89.9 | 86.7 | 83.1 |
  | Llama3.1 8B | 128K | 32K | 25% | 95.5 | 93.8 | 91.6 | 87.4 | 84.7 | 77.0 |
  | GradientAI/Llama3 70B | 1M | 16K | 1.6% | 95.1 | 94.4 | 90.8 | 85.4 | 80.9 | 72.1 |
  | Mixtral-8x22B | 64K | 32K | 50% | 95.6 | 94.9 | 93.4 | 90.9 | 84.7 | 31.7 |
  | Yi 34B | 200K | 32K | 16% | 93.3 | 92.2 | 91.3 | 87.5 | 83.2 | 77.3 |
  | Phi3-medium 14B | 128K | 32K | 25% | 93.3 | 93.2 | 91.1 | 86.8 | 78.6 | 46.1 |
  | Mistral-v0.2 7B | 32K | 16K | 50% | 93.6 | 91.2 | 87.2 | 75.4 | 49.0 | 13.8 |
  | LWM 7B | 1M | <4K | <0.4% | 82.3 | 78.4 | 73.7 | 69.1 | 68.1 | 65.0 |
  | DBRX | 32K | 8K | 25% | 95.1 | 93.8 | 83.6 | 63.1 | 2.4 | 0.0 |
  | Together 7B | 32K | 4K | 12.5% | 88.2 | 81.1 | 69.4 | 63.0 | 0.0 | 0.0 |
  | LongChat 7B | 32K | <4K | <12.5% | 84.7 | 79.9 | 70.8 | 59.3 | 0.0 | 0.0 |
  | LongAlpaca 13B | 32K | <4K | <12.5% | 60.6 | 57.0 | 56.6 | 43.6 | 0.0 | 0.0 |

  — [RULER paper Table 3](https://arxiv.org/html/2404.06654v3)
- [official] Newer rows on the GitHub README (2025), scores %:

  | Model | Claimed | Effective | Eff/Claimed | 4K | 32K | 128K |
  |---|---|---|---|---|---|---|
  | Qwen2.5-14B-Instruct-1M | 1M | >128K | ≥12.8% (tested only to 128K) | 97.5 | 94.9 | 92.2 |
  | Qwen3-235B-A22B | 128K | >128K | 100% | 97.7 | 95.1 | 90.6 |
  | Qwen3-14B | 128K | >128K | 100% | 98.0 | 96.1 | 85.1 |
  | Qwen3-32B | 128K | >128K | 100% | 98.4 | 94.4 | 85.6 |
  | Qwen3-30B-A3B | 128K | 64K | 50% | 96.5 | 92.4 | 79.2 |
  | Qwen3-8B | 128K | 64K | 50% | 96.3 | 91.2 | 77.4 |
  | Qwen3-4B | 128K | 64K | 50% | 95.1 | 87.8 | 66.0 |

  — [RULER GitHub README](https://github.com/NVIDIA/RULER)

### Inferences
- Effective ÷ claimed in the original 17 models (median, my calculation): about 25%. The common values are 25% and 50%, and none above 50% among models actually tested to their full claimed length. For 1M-claim models it is usually far below 25%.
- Even models that pass the threshold lose points steadily. For example, GPT-4 drops from 96.6 to 81.2 between 4K and 128K.
- RULER is synthetic (NIAH variants, variable tracking, aggregation, QA). Its "effective length" depends on an arbitrary absolute bar. It says nothing directly about code review quality.
- 128K-window models were usually still "OK" at 50% of the window (64K). Many were not OK at 100%, and several were already below the bar at 50%. A 50% rule would have been roughly correct for the best of these models and too generous for the rest.

### Gaps
- No RULER results were found for Gemini 3.x, GPT-5.x, Kimi K2, GLM-4.6/5, DeepSeek V3/V4 or gpt-oss in the sources read.

## 3. NoLiMa (Adobe Research, ICML 2025): drop at 1K–32K, effective length definition, results

### Takeaway
When the needle cannot be found by literal word overlap with the question, most models fall below 85% of their short-context score by 1K–8K tokens. GPT-4.1 holds out longest, to 16K. Expressed as a share of the claimed window, NoLiMa effective lengths are about 0.1–6%, not 50–70%.

### Cited Findings
- [official] Definition: effective length is "the longest context where a model maintains at least 85% of its base score". The base score is accuracy at 250, 500 and 1K tokens. — [NoLiMa GitHub](https://github.com/adobe-research/NoLiMa)
- [official] "At 32K, for instance, 10 models drop below 50% of their strong short-length baselines." GPT-4o falls "from an almost-perfect baseline of 99.3% to 69.7%" at 32K. — [NoLiMa GitHub / abstract](https://github.com/adobe-research/NoLiMa)
- [official] Results table, accuracy %. The ratio column is my calculation of effective ÷ claimed.

  | Model | Claimed | Effective | Eff/Claimed | Base | 1K | 2K | 4K | 8K | 16K | 32K |
  |---|---|---|---|---|---|---|---|---|---|---|
  | GPT-4.1 | 1M | 16K | 1.6% | 97.0 | 95.6 | 95.2 | 91.7 | 87.5 | 84.9 | 79.8 |
  | GPT-4o | 128K | 8K | 6.3% | 99.3 | 98.1 | 98.0 | 95.7 | 89.2 | 81.6 | 69.7 |
  | Llama 3.3 70B | 128K | 2K | 1.6% | 97.3 | 94.2 | 87.4 | 81.5 | 72.1 | 59.5 | 42.7 |
  | Llama 3.1 405B | 128K | 2K | 1.6% | 94.7 | 89.0 | 85.0 | 74.5 | 60.1 | 48.4 | 38.0 |
  | Llama 3.1 70B | 128K | 2K | 1.6% | 94.5 | 91.0 | 81.8 | 71.2 | 62.7 | 51.8 | 43.2 |
  | Gemini 1.5 Pro | 2M | 2K | 0.1% | 92.6 | 86.4 | 82.7 | 75.4 | 63.9 | 55.5 | 48.2 |
  | Jamba 1.5 Mini | 256K | <1K | <0.4% | 92.4 | 76.3 | 74.1 | 70.8 | 62.2 | 52.7 | 43.6 |
  | Command R+ | 128K | <1K | <0.8% | 90.9 | 77.0 | 73.5 | 66.3 | 39.5 | 21.3 | 7.4 |
  | Llama 4 Maverick | 1M | 2K | 0.2% | 90.1 | 81.6 | 78.3 | 68.8 | 49.0 | 34.3 | 24.5 |
  | Gemini 2.5 Flash (no thinking) | 1M | 2K | 0.2% | 94.4 | 90.1 | 86.1 | 79.4 | 68.2 | 57.9 | 48.4 |
  | Gemini 2.0 Flash | 1M | 4K | 0.4% | 89.4 | 87.7 | 87.5 | 77.9 | 64.7 | 48.2 | 41.0 |
  | Gemma 3 27B | 128K | <1K | <0.8% | 88.6 | 73.3 | 65.6 | 48.1 | 32.7 | 20.2 | 9.5 |
  | Mistral Large 2 | 128K | 2K | 1.6% | 87.9 | 86.1 | 85.5 | 73.3 | 51.5 | 32.6 | 18.7 |
  | Claude 3.5 Sonnet | 200K | 4K | 2% | 87.6 | 85.4 | 84.0 | 77.6 | 61.7 | 45.7 | 29.8 |
  | Gemma 3 12B | 128K | 1K | 0.8% | 87.4 | 74.7 | 61.8 | 39.9 | 27.4 | 16.8 | 7.3 |
  | Gemini 1.5 Flash | 1M | <1K | <0.1% | 84.7 | 68.6 | 61.6 | 51.0 | 44.4 | 35.5 | 28.6 |
  | GPT-4o mini | 128K | <1K | <0.8% | 84.9 | 67.7 | 58.2 | 44.1 | 32.6 | 20.6 | 13.7 |
  | Llama 4 Scout | 10M | 1K | 0.01% | 81.7 | 72.3 | 61.8 | 50.8 | 35.5 | 26.9 | 21.6 |
  | GPT-4.1 Mini | 1M | <1K | <0.1% | 80.9 | 66.7 | 62.8 | 58.7 | 51.9 | 46.2 | 38.8 |
  | GPT-4.1 Nano | 1M | <1K | <0.1% | 80.7 | 60.8 | 48.2 | 36.7 | 28.8 | 19.5 | 9.4 |
  | Llama 3.1 8B | 128K | 1K | 0.8% | 76.7 | 65.7 | 54.4 | 44.1 | 31.9 | 22.6 | 14.2 |
  | Gemma 3 4B | 128K | <1K | <0.8% | 73.6 | 50.3 | 35.3 | 16.4 | 7.5 | 2.3 | 0.9 |

  — [NoLiMa GitHub](https://github.com/adobe-research/NoLiMa)
- [official] Reasoning models appear only on the harder NoLiMa-Hard subset. Gemini 2.5 Pro has a base score of 99.1 and scores 58.6 at 32K. o3 and o4-mini results were added on 2025-07-17. No GPT-5 results are present. — [NoLiMa GitHub](https://github.com/adobe-research/NoLiMa)

### Inferences
- NoLiMa is the closest synthetic proxy for "find the relevant fact when wording differs", which is common in code and design review. On that kind of task, degradation starts in the single-digit-K token range for most models tested up to mid-2025. That is far below 50% of any claimed window.
- NoLiMa's threshold is relative (85% of each model's own base score), while RULER's is absolute (85.6%). The two "effective length" numbers are not directly comparable.

### Gaps
- No NoLiMa numbers were found for GPT-5.x, Gemini 3.x, Claude 4.x, Kimi, GLM, Qwen3, DeepSeek or gpt-oss.

## 4. Does length itself hurt, or only distractors? (Du et al. 2025; Chroma "Context Rot" 2025)

### Takeaway
Both matter. Du et al. show that length alone hurts: the drop persists when the filler is whitespace or is fully masked, and when retrieval is perfect. That happens at 7.5K–30K tokens, well inside 128K windows. Chroma shows that distractors and low question–evidence similarity make the length penalty steeper, and that an approximately 113K-token conversation history scores far worse than a focused approximately 300-token version on every one of 18 models.

### Cited Findings
- [official] Du et al., "Context Length Alone Hurts LLM Performance Despite Perfect Retrieval" (arXiv 2510.05381, Oct 2025, Findings of EMNLP 2025). "even when models can perfectly retrieve all relevant information, their performance still degrades substantially (13.9%–85%) as input length increases but remains well within the models' claimed lengths." This holds "even when the irrelevant tokens are replaced with minimally distracting whitespace, and, more surprisingly, when they are all masked." — [arXiv abs](https://arxiv.org/abs/2510.05381v1); [HTML](https://arxiv.org/html/2510.05381v1)
- [official] Du et al. tested five models: GPT-4o; Claude (labelled "Claude-3.5" in tables and "Claude-3.7-Sonnet" in text); Gemini (2.0 in text); Llama-3.1-8B-Instruct (claimed 128K); and Mistral-v0.3-7B-Instruct (claimed 32K). Tasks were VarSum, GSM8K, MMLU and HumanEval. Added lengths were 0, 3.75K, 7.5K, 15K and 30K tokens. — [Du et al.](https://arxiv.org/html/2510.05381v1)
- [official] Llama-3.1-8B "is able to retrieve all evidence with exact matches for 970 of 1000 MMLU problems. However... its accuracy drops by 24.2% compared to the short-context case." — [Du et al.](https://arxiv.org/abs/2510.05381v1)
- [official] HumanEval (code) changes from the 0-token baseline, as reported in the paper:
  - GPT-4o (baseline 68.3): 0.0 at 7.5K, 0.0 at 15K, −3.1 at 30K with whitespace filler.
  - Gemini (baseline 86.0): −11.0 at 7.5K, −2.5 at 15K, −1.8 at 30K with whitespace filler.
  - Llama-3.1-8B (baseline 57.3):
    - Essay filler: −20.1 at 7.5K, −40.9 at 15K, −47.6 at 30K.
    - Whitespace filler: −10.4 at 3.75K, −12.2 at 7.5K, −12.8 at 15K, −31.7 at 30K.
    - Masked filler: −50.0 at 30K.
  - Mistral-7B (baseline 34.8):
    - Essay filler: −34.8 at 30K.
    - Whitespace filler: −11.0 at 30K.
  - Caveats: the Claude HumanEval row duplicates its VarSum row (likely a copy error), and the paper mixes absolute and relative deltas. — [Du et al.](https://arxiv.org/html/2510.05381v1)
- [official] "The closed-source models generally exhibit more robustness than the open-source ones." Mitigation called "Retrieve then Solve": the model first recites the evidence, then answers from that shorter prompt. This gave GPT-4o up to +4% on RULER. — [Du et al.](https://arxiv.org/abs/2510.05381v1)
- [official, vendor research blog] Chroma "Context Rot" (Hong, Troynikov, Huber; July 14, 2025) tested 18 models:
  - Anthropic: Claude Opus 4, Sonnet 4, Sonnet 3.7, Sonnet 3.5, Haiku 3.5.
  - OpenAI: o3, GPT-4.1, 4.1 mini, 4.1 nano, GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo.
  - Google: Gemini 2.5 Pro, 2.5 Flash, 2.0 Flash.
  - Alibaba: Qwen3-235B-A22B, Qwen3-32B, Qwen3-8B.
  - Main conclusion: "Across all experiments, model performance consistently degrades with increasing input length." — [Chroma Context Rot](https://www.trychroma.com/research/context-rot)
- [official, vendor research blog] Chroma on distractors and similarity:
  - "Even a single distractor reduces performance relative to the baseline (needle only)."
  - "the impact of distractors and their non-uniformity amplifies as input length grows across models."
  - "performance degrades more quickly in input length with lower similarity needle-question pairs."
  - Surprisingly, shuffled haystacks beat logically ordered ones for all 18 models.
  - — [Chroma](https://www.trychroma.com/research/context-rot)
- [official, vendor research blog] Chroma LongMemEval: 306 prompts; full prompts about 113K tokens vs. focused prompts about 300 tokens. "All models performed significantly better on focused prompts." Claude models showed the largest gap, largely from abstentions. — [Chroma](https://www.trychroma.com/research/context-rot)

### Inferences
- For code review, unrelated files act as distractors. They are often semantically similar to the relevant code (same identifiers, similar functions), which is the worst case in Chroma's setup. Both length and similar-looking distractors push quality down, so curating context matters more than any fixed percentage of the window.
- Du et al.'s drops occur at about 23% of Llama-3.1-8B's 128K window (30K) and already at about 3–6% (3.75K–7.5K). The penalty is roughly monotonic with tokens, not a cliff at a fixed percentage.

### Gaps
- Chroma gives curves, not a per-model token threshold. No single "drops at X%" number can be extracted from it.

## 5. Code-specific long-context results (LongCodeBench; others)

### Takeaway
On real repository bug-fixing (LongSWE-Bench), Claude 3.5 Sonnet fell from 29% resolved at 32K to 3% at 256K (claimed 200K). Gemini 2.5 Pro held 22–25% from 32K to 256K, then fell to 12% at 512K and 7% at 1M. Code QA (multiple choice) was much flatter. Code repair degrades with length much more than code comprehension does.

### Cited Findings
- [official] LongCodeBench (arXiv 2505.07897, COLM 2025) has two tasks: LongCodeQA (multiple-choice comprehension from GitHub issues) and LongSWE-Bench (patch generation). Both are evaluated at 32K, 64K, 128K, 256K, 512K and 1M. — [LongCodeBench](https://arxiv.org/html/2505.07897v3)
- [official] Abstract: "performance drops such as from 29% to 3% for Claude 3.5 Sonnet, or from 70.2% to 40% for Qwen2.5". "long-context remains a weakness for all models." — [LongCodeBench](https://arxiv.org/html/2505.07897v3)
- [official] LongSWE-Bench, % resolved:

  | Model | 32K | 64K | 128K | 256K | 512K | 1M |
  |---|---|---|---|---|---|---|
  | Gemini 2.5 Pro | 23 | 25 | 22 | 24 | 12 | 7 |
  | Claude 3.5 Sonnet | 29 | 19 | 15 | 3 | – | – |
  | Claude 3.5 Sonnet + RAG | 23 | 23 | 22 | 21 | 16 | 22 |
  | GPT-4o | 11 | 6 | 5 | – | – | – |
  | GPT-4.1 | 1 | 1 | 1 | 1 | 1 | 2 |
  | Gemini 2 Flash | 10 | 6 | 7 | 3 | 2 | 2 |
  | Qwen2.5 14B, Llama 4 Scout | 0 at all lengths | | | | | |

  — [LongCodeBench Table 3](https://arxiv.org/html/2505.07897v3)
- [official] LongCodeQA, % correct:

  | Model | 32K | 64K | 128K | 256K | 512K | 1M |
  |---|---|---|---|---|---|---|
  | GPT-4.1 | 72.6 | 73.7 | 78.3 | 72.3 | 78.7 | 80.0 |
  | Gemini 2.5 Pro | 75.2 | 71.1 | 71.7 | 67.7 | 68.1 | 69.8 |
  | Claude 3.5 Sonnet | 65.5 | 69.7 | 71.7 | 66.6 | – | – |
  | Qwen2.5-14B | 61.9 | 65.8 | 68.5 | 63.1 | 70.2 | 40.0 |
  | Jamba 1.5 Large | 69.0 | 69.7 | 72.8 | 54.2 | – | – |

  — [LongCodeBench](https://arxiv.org/html/2505.07897v3)
- [official] Du et al.'s HumanEval results with added filler (see item 4) show code generation losing 3–48 points at 30K tokens of irrelevant context, depending on the model. — [Du et al.](https://arxiv.org/html/2510.05381v1)

### Inferences
- In percentage-of-window terms, Claude 3.5 Sonnet's LongSWE-Bench score had already fallen by about a third at 64K (32% of 200K), roughly halved at 128K (64%), and nearly zeroed at 256K. Gemini 2.5 Pro was stable to 256K (25% of 1M) and halved by 512K (51%). So quality for generative code work was often lost well before 50–70% of the window.
- LongCodeBench's results are not monotonic. Some models score better at longer lengths, partly because different-length samples come from different repositories.

### Gaps
- LongCodeArena, SWE-bench long-context variants, repo-level code QA beyond LongCodeBench, HELMET, Michelangelo (Latent Structure Queries), BABILong, LongBench and LongBench v2: not read within the tool budget, so no numbers are reported for them.

## 6. Leaderboards and vendor long-context evals for current models (Fiction.LiveBench, MRCR, Graphwalks; 2025–2026)

### Takeaway
Current vendor numbers (Feb 2026) show frontier models at about 84–85% on 8-needle MRCR v2 averaged up to 128K. Gemini 3 Pro and 3.1 Pro score only 26.3% at 1M, their full claimed window. So multi-needle retrieval quality at 100% of a 1M window is poor even for the vendor whose model leads at long context. Per-length Fiction.LiveBench tables could not be retrieved.

### Cited Findings
- [official, vendor] Gemini 3.1 Pro model card (published 19 Feb 2026; "Results as of February 2026"; 1M input window, 64K output). MRCR v2 8-needle results:

  | Model | 128K (average) | 1M (pointwise) |
  |---|---|---|
  | Gemini 3.1 Pro | 84.9% | 26.3% |
  | Gemini 3 Pro | 77.0% | 26.3% |
  | Sonnet 4.6 | 84.9% | "Not supported" |
  | Opus 4.6 | 84.0% | "Not supported" |
  | GPT-5.2 (xhigh) | 83.8% | "Not supported" |

  — [Gemini 3.1 Pro model card](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
- [official, vendor, via search snippet] OpenAI's GPT-5.2 post describes it as "the first model we've seen that achieves near 100% accuracy on the 4-needle MRCR variant (out to 256k tokens)". Not fetched directly. — [OpenAI GPT-5.2](https://openai.com/en-US/index/introducing-gpt-5-2/)
- [community aggregator] GPT-5 scores 95.2% on OpenAI-MRCR 2-needle at 128K (self-reported, from the launch post), vs. GPT-5 mini 84.3% and GPT-4.1 57.2%. — [llm-stats](https://llm-stats.com/benchmarks/openai-mrcr:-2-needle-128k); [benchmarklist](https://benchmarklist.com/benchmarks/openai_mrcr_2_needle_128k/)
- [community] Fiction.LiveBench aggregators headline the 16K column only. One snapshot dated through Jan 2026 lists Kimi K2.5 as the top open model at 86.1%, and o3-pro (Jun 2025) as the top overall at 97.2%. Not verified against fiction.live itself: the page is JavaScript-rendered and returned no data. — [DataLearner](https://www.datalearner.com/en/benchmarks/fiction-livebench); [Epoch AI](https://epoch.ai/benchmarks/fictionlivebench)

### Inferences
- MRCR is a retrieval or coreference task with literal anchors, closer to RULER than to NoLiMa. Good 128K MRCR scores do not imply good reasoning over 128K of code (see Du et al.).
- Gemini 3.x drops from about 77–85% averaged to 128K down to 26.3% at 1M. This is the clearest current vendor evidence that quality at 100% of a 1M window is much lower than at about 13% of it. No vendor data points between 128K and 1M were found, so the location of the knee (for example 30% vs. 60% of the window) is unknown.

### Gaps
- Fiction.LiveBench per-length tables (0 to 1M) for GPT-5.x, Gemini 3.x, Claude 4.x, Kimi K2/K2.5, GLM-4.6/5, Qwen3, DeepSeek V3.x and gpt-oss: not retrieved.
- Graphwalks numbers for GPT-5.x, and Kimi, GLM, DeepSeek and gpt-oss vendor long-context evals: not found.
- No 2026 independent (non-vendor) long-context reasoning benchmark covering all target model families was found.

## 7. Is there a measured quality drop point expressed as % of the context window? (Synthesis)

### Takeaway
No paper read defines degradation as a percentage of the claimed window. All of them measure in absolute tokens, and the percentage values below are my calculations from their tables. Converted to percentages, the evidence does not support a single 50, 60 or 70% rule:
- RULER effective length is about 25–50% of claimed for good 128K models (median about 25% in the 2024 set) and under 13% for most 1M-claim models.
- NoLiMa effective length is about 0.1–6%.
- Code repair (LongSWE-Bench) loses much of its quality by 32–64% of the window for Claude 3.5 Sonnet.
- Degradation is gradual and starts at a few thousand tokens. It is not a cliff at a fixed fraction of the window.

### Cited Findings
- RULER: effective/claimed values (my calculations) of 50% (GPT-4, Llama3.1-70B, Mixtral, Mistral-7B), 25% (Qwen2-72B, Command-R+, Llama3.1-8B, Phi3, DBRX), 16% (Yi), 6.4% (GLM4-9B 1M), 1.6% (GradientAI 1M). Newer Qwen3 large models reach ≥100% of 128K. — [RULER paper](https://arxiv.org/html/2404.06654v3); [RULER GitHub](https://github.com/NVIDIA/RULER)
- NoLiMa: GPT-4o at 8K of 128K (6.3%), GPT-4.1 at 16K of 1M (1.6%), Claude 3.5 Sonnet at 4K of 200K (2%), Gemini 2.5 Flash at 2K of 1M (0.2%). — [NoLiMa](https://github.com/adobe-research/NoLiMa)
- Du et al.: 13.9–85% degradation "well within the models' claimed lengths" at ≤30K tokens. — [Du et al.](https://arxiv.org/abs/2510.05381v1)
- Lost in the Middle: the worst case occurs at about 4K–6K tokens, and models with 4× or 25× larger windows behave the same. — [Liu et al.](https://arxiv.org/abs/2307.03172)
- Chroma: "LLMs do not maintain consistent performance across input lengths." — [Chroma](https://www.trychroma.com/research/context-rot)
- Gemini 3.x: about 77–85% (≤128K average) vs. 26.3% at 1M. — [Gemini 3.1 Pro card](https://deepmind.google/models/model-cards/gemini-3-1-pro/)

### Inferences
- A rule of "50/60/70% of the window" is a "fitting" heuristic. It guarantees the prompt plus output fit, but it is not a quality threshold supported by evidence. Benchmarks show quality loss starting far below 50% for most models. The size of the loss depends on the task (retrieval < multi-hop or non-literal < generative code repair), on distractor similarity, and on the model.
- A rule that the evidence better supports is an absolute token budget, tuned per task, plus curation (only relevant files, relevant content placed at the start or end). Among the measurements read, frontier closed models (GPT-4.1/5.x, Gemini 2.5/3.x, Claude 4.x) are the most robust, and smaller open models degrade fastest. If a percentage rule is needed for a mixed fleet, the RULER evidence points to about 25% of the claimed window as a typical upper bound for the "still near short-context quality" zone on retrieval-style tasks. For 1M-window models it should be capped in absolute tokens (128K is the last length with strong vendor MRCR evidence). This is an inference, not a measured rule.
- Also note: the claimed windows of the target models differ a lot (about 128K for many open models vs. 1M for Gemini), so the same percentage means very different token counts. Evidence is per-token, not per-percent.

### Gaps
- No study was found that directly measures code review or design review quality against input length for Kimi, GLM, Qwen3, DeepSeek or gpt-oss.
- No study was found that reports results normalized to a percentage of the context window.
