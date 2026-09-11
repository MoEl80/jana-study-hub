/* MEDI304 — Flashcards (Spring 2026). */
(function (root) {
  root.JSH_DATA = root.JSH_DATA || {};
  root.JSH_DATA.medi304 = root.JSH_DATA.medi304 || {};
  root.JSH_DATA.medi304.flashcards = {
    subjectId: 'medi304',
    cards: [
      { id: 'm304-c-001', topic: 'hypotheses-pvalues', front: 'Define p-value in one sentence', back: 'P(data at least this extreme | H0 true) — evidence against H0.' },
      { id: 'm304-c-002', topic: 'hypotheses-pvalues', front: 'Type I vs Type II error', back: 'I = false positive (alpha, declaring a phantom effect); II = false negative (beta, missing a real one).' },
      { id: 'm304-c-003', topic: 'hypotheses-pvalues', front: 'Power = ? and what increases it', back: '1 − beta. Up with: bigger n, bigger effect, less variability, higher alpha.' },
      { id: 'm304-c-004', topic: 'data-distributions', front: 'Scales of measurement, weakest → strongest', back: 'Nominal → ordinal → interval → ratio (ratio has a true zero).' },
      { id: 'm304-c-005', topic: 'data-distributions', front: 'SD vs SEM', back: 'SD = spread of the data; SEM = SD/√n = precision of the sample mean.' },
      { id: 'm304-c-006', topic: 'spss-essentials', front: 'What does the Levene test decide?', back: 'Equal variances? — picks which independent t-test row to read in SPSS output.' },
      { id: 'm304-c-007', topic: 'spss-essentials', front: 'APA-style t-test sentence skeleton', back: 't(df) = value, p = value; mean difference = X, 95% CI [a, b].' },
      { id: 'm304-c-008', topic: 'parametric-tests', front: 'Design → t-test mapping', back: 'One group vs value = one-sample; two groups = independent; same units twice = paired.' },
      { id: 'm304-c-009', topic: 'parametric-tests', front: 'Significant ANOVA, then what?', back: 'Post-hoc pairwise comparisons (e.g. Tukey) — F only says "somewhere there is a difference".' },
      { id: 'm304-c-010', topic: 'parametric-tests', front: 'Two-way ANOVA interaction, plain English', back: 'The effect of one factor changes depending on the level of the other.' },
      { id: 'm304-c-011', topic: 'nonparametric-tests', front: 'Non-parametric twins', back: 'Independent t → Mann-Whitney U; paired t → Wilcoxon; ANOVA → Kruskal-Wallis; repeated ANOVA → Friedman.' },
      { id: 'm304-c-012', topic: 'nonparametric-tests', front: 'When is chi-square invalid?', back: 'Any expected cell count < 5 — merge categories or use Fisher exact test.' },
      { id: 'm304-c-013', topic: 'correlation-regression', front: 'r = −0.85: strength, direction, variance shared', back: 'Strong inverse; r2 = 0.72 → 72% shared variance. NOT causation.' },
      { id: 'm304-c-014', topic: 'correlation-regression', front: 'Meaning of slope b in y = a + bx', back: 'Predicted change in y for each one-unit rise in x (with CI and p).' },
      { id: 'm304-c-015', topic: 'measurements', front: 'Reliable but invalid — quick example', back: 'A scale always 3 kg heavy: consistent (reliable), wrong (invalid).' },
      { id: 'm304-c-016', topic: 'measurements', front: 'Cronbach alpha threshold + what it measures', back: '≥ 0.7; internal consistency of a multi-item scale.' },
      { id: 'm304-c-017', topic: 'research-design', front: 'Evidence hierarchy, low → high', back: 'Case reports → cross-sectional → case-control → cohort → RCT → systematic review/meta-analysis.' },
      { id: 'm304-c-018', topic: 'research-design', front: 'OR vs RR — which design uses which?', back: 'Odds ratio = case-control; relative risk = cohort/RCT.' },
      { id: 'm304-c-019', topic: 'rct-samplesize', front: 'Four inputs to a sample-size calculation', back: 'Alpha, power (1−beta), expected effect size, outcome variability (+ dropout margin).' },
      { id: 'm304-c-020', topic: 'rct-samplesize', front: 'Cohen d benchmarks', back: '0.2 small, 0.5 medium, 0.8 large.' },
      { id: 'm304-c-021', topic: 'rct-samplesize', front: 'Intention-to-treat means…', back: 'Analyse in the group ALLOCATED, regardless of compliance — protects randomisation.' },
      { id: 'm304-c-022', topic: 'bias-validity-ebm', front: 'Bias vs confounding vs chance', back: 'Bias = systematic design/conduct error; confounding = third-variable distortion; chance = sampling luck (only chance shrinks with n).' },
      { id: 'm304-c-023', topic: 'bias-validity-ebm', front: 'Internal vs external validity', back: 'True within the study (bias-controlled) vs generalisable beyond it (representative).' },
      { id: 'm304-c-024', topic: 'bias-validity-ebm', front: 'Confounder criteria (2)', back: 'Associated with exposure AND outcome, and not on the causal pathway.' },
      { id: 'm304-c-025', topic: 'communication', front: 'IMRaD sections + rule for each', back: 'Introduction (why/aim), Methods (reproducible), Results (numbers only), Discussion (interpret + limits).' },
      { id: 'm304-c-026', topic: 'communication', front: 'Poster cardinal sin', back: 'Walls of text — a poster is a visual argument: one message per panel, figures carry the story.' }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
