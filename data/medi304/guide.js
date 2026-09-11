/* MEDI304 — Research Methods and Analysis (Spring 2026) — Study Guide.
   Topics follow the Schedule of Learning: hypothesis/p-values → data & distributions →
   SPSS → parametric tests → non-parametric tests → correlation/regression → measurements →
   research design → RCTs/sample size → validity/bias → EBM → scientific communication. */
(function (root) {
  root.JSH_DATA = root.JSH_DATA || {};
  root.JSH_DATA.medi304 = root.JSH_DATA.medi304 || {};
  root.JSH_DATA.medi304.guide = {
    subjectId: 'medi304',
    syllabus: 'MEDI304 Subject Outline, Spring 2026 (UOW School of Medical, Indigenous and Health Sciences)',
    topics: [
      {
        id: 'hypotheses-pvalues', title: 'Hypotheses, p-values and Type I/II errors',
        outcomes: ['Week 1'],
        bigIdea: 'Statistics decides between hypotheses with controlled error rates: alpha (false positive), beta (false negative), and power = 1 − beta.',
        keyKnowledge: [
          'H0 = no effect/difference; H1 = the effect you claim. The p-value is the probability of data this extreme IF H0 were true — it is NOT the probability that H0 is true.',
          'Significance level alpha (usually 0.05) = tolerated Type I error rate (rejecting a true H0); beta = Type II error (missing a real effect); power = 1 − beta, classically target ≥ 0.80.',
          'Power grows with: bigger effect size, bigger n, smaller variability, one-tailed tests, paired designs.',
          'Statistical significance is NOT practical importance — always pair the test with an effect size (mean difference, Cohen d, r).',
          'CI logic: a 95% CI contains the true parameter value in 95% of repeated samples; if the CI for a difference excludes 0, the result is significant at that level.'
        ],
        keyTerms: [
          { term: 'p-value', definition: 'P(data at least this extreme | H0 true) — evidence against H0, not the probability of H0' },
          { term: 'Type I error (alpha)', definition: 'false positive: declaring an effect that does not exist' },
          { term: 'statistical power', definition: 'probability of detecting a real effect = 1 − beta' }
        ],
        examFocus: ['Classify Type I vs II errors in a scenario', 'Explain what a p-value does and does not mean', 'Interpret a CI for a mean difference']
      },
      {
        id: 'data-distributions', title: 'Data types and distributions',
        outcomes: ['Weeks 1-2'],
        bigIdea: 'The measurement scale dictates everything downstream — which graph, which summary, which test.',
        keyKnowledge: [
          'Scales: nominal (categories) → ordinal (ordered) → interval (equal steps, no true zero) → ratio (true zero). Choose tests by scale + distribution + group design.',
          'Normal distribution: symmetric, bell-shaped, mean=median=mode; described by mean ± SD. Check with histogram + Shapiro-Wilk rather than eyeballing only.',
          'Skewed data: use median + IQR; transform or use non-parametric tests. Outliers: investigate, report, pre-decide handling.',
          'Central limit theorem: sample MEANS are approximately normal even from skewed populations when n is large enough — the licence for t-tests/ANOVA on means.',
          'Standard error = SD/sqrt(n): it shrinks with bigger samples — the bridge between sample and inference.'
        ],
        keyTerms: [
          { term: 'SD vs SEM', definition: 'SD describes spread of the data; SEM describes spread of the sample mean (SD/√n)' },
          { term: 'skewness', definition: 'asymmetry of a distribution — tail right = positive skew' },
          { term: 'central limit theorem', definition: 'sample means approach normality as n grows, whatever the population shape' }
        ],
        examFocus: ['Pick the correct summary (mean±SD vs median[IQR]) for a described dataset', 'Explain when/why skewed data still permit t-tests']
      },
      {
        id: 'spss-essentials', title: 'SPSS essentials',
        outcomes: ['Weeks 2-3 practicals'],
        bigIdea: 'SPSS is a data-view + variable-view workflow: define variables properly once, then every menu run is routine.',
        keyKnowledge: [
          'Variable View: name, type, labels, values (code 1=male etc.), measurement level (Nominal/Ordinal/Scale) — getting this right makes the right tests clickable.',
          'Core workflow: enter/import data → check measurement levels → Explore for descriptives/normality → choose test → read the output tables (not the SPSS prose) → report in APA style.',
          'Reading output: for t-tests use the Levene test row to pick equal/unequal variances; report t(df), p, and mean difference with CI.',
          'The course datasets (Bipolar49, Exercise44, Muesli Bar) and three research-project files are on the home PC with the .sav data — practise runs on real data.',
          'At-home SPSS access instructions were distributed in Week 1 (see the PDF in her folder).'
        ],
        keyTerms: [
          { term: 'Levene test', definition: 'checks equality of variances before choosing the t-test row' },
          { term: 'variable view', definition: 'SPSS tab where each column variable is defined: type, label, values, measurement level' }
        ],
        examFocus: ['Given SPSS output, pick the correct statistic row and write the APA-style sentence', 'State which measurement level each variable must have for a given test']
      },
      {
        id: 'parametric-tests', title: 'Parametric tests: t-tests and the ANOVA family',
        outcomes: ['Weeks 3-4'],
        bigIdea: 'Compare MEANS of normally-distributed data: one group vs a value, two groups, or many groups — the design picks the test.',
        keyKnowledge: [
          'One-sample t: sample mean vs known value. Independent t: two separate groups (assume equal variances unless Levene says otherwise). Paired t: same units measured twice.',
          'ANOVA (one-way): 3+ group means; a significant F says AT LEAST one differs — follow with post-hoc comparisons (Tukey) to find which.',
          'Repeated-measures ANOVA: same subjects across conditions; two-way ANOVA: two factors at once, testing main effects AND interaction — an interaction means the effect of one factor depends on the level of the other.',
          'ANCOVA: ANOVA controlling for a continuous covariate (baseline adjustment).',
          'Assumptions to state: independence, normality (per group), homogeneity of variance.'
        ],
        keyTerms: [
          { term: 'independent vs paired design', definition: 'separate groups vs same units measured twice — changes both test and power' },
          { term: 'post-hoc test', definition: 'pairwise comparisons run after a significant ANOVA (e.g. Tukey)' },
          { term: 'interaction (two-way ANOVA)', definition: 'the effect of one factor differs across levels of the other' }
        ],
        examFocus: ['Choose the correct t-test/ANOVA variant from a described study', 'Interpret a significant interaction in plain English']
      },
      {
        id: 'nonparametric-tests', title: 'Non-parametric tests',
        outcomes: ['Week 4'],
        bigIdea: 'When data are ordinal or badly non-normal, rank-based tests answer the same design questions without the normality assumption.',
        keyKnowledge: [
          'Design → test mapping: independent t → Mann-Whitney U; paired t → Wilcoxon signed-rank; one-way ANOVA → Kruskal-Wallis; repeated ANOVA → Friedman.',
          'They compare DISTRIBUTIONS/ranks (medians, loosely) not means; hypotheses must be phrased accordingly.',
          'Less power than parametric equivalents when both are valid — use parametric when assumptions hold.',
          'Chi-square handles categorical counts: goodness-of-fit (one variable vs theory) and independence (association between two categorical variables); report chi2(df), p — expected counts ≥ 5 per cell.'
        ],
        keyTerms: [
          { term: 'Mann-Whitney U', definition: 'rank-based substitute for the independent t-test' },
          { term: 'chi-square test', definition: 'compares observed vs expected categorical counts' },
          { term: 'rank transformation', definition: 'converting scores to ranks — the trick behind all non-parametric tests' }
        ],
        examFocus: ['Convert any study design to its non-parametric twin', 'State when chi-square is invalid (expected < 5)']
      },
      {
        id: 'correlation-regression', title: 'Correlation and regression',
        outcomes: ['Week 5'],
        bigIdea: 'Correlation measures association (r, −1 to +1); regression fits a prediction line and quantifies each predictor effect.',
        keyKnowledge: [
          'Pearson r for linear association of two continuous variables (Spearman rho for ranks); r2 = proportion of variance shared. Correlation ≠ causation — confounders and outliers can manufacture or mask r.',
          'Simple linear regression: y = a + bx; b = change in y per unit x with its CI and p-value. Residuals should look patternless.',
          'Multiple regression: several predictors; each coefficient is the effect holding the others constant; R2 shows combined explanatory power.',
          'Extrapolating beyond the data range and ecological fallacy (group-level conclusions applied to individuals) are classic traps.'
        ],
        keyTerms: [
          { term: 'r vs r2', definition: 'r = direction/strength of association; r2 = shared variance proportion' },
          { term: 'regression coefficient b', definition: 'predicted change in outcome per one-unit rise in that predictor' },
          { term: 'residual', definition: 'observed minus predicted value; patterns in residuals mean the model is wrong' }
        ],
        examFocus: ['Interpret r, r2 and b from output', 'Name the fallacy in a correlation-causation claim']
      },
      {
        id: 'measurements', title: 'Reliability and validity of measurements',
        outcomes: ['Week 6'],
        bigIdea: 'A measurement is only as good as its reproducibility (reliability) and its truthfulness (validity).',
        keyKnowledge: [
          'Reliability types: test-retest (over time), inter-rater (between observers), internal consistency (Cronbach alpha ≥ 0.7 typical benchmark).',
          'Validity types: face, content, criterion (concurrent/predictive), construct; a measure can be reliable but INVALID (consistently wrong).',
          'Measurement error: systematic (bias — shifts everything one way) vs random (noise — scatter).',
          'Course applications: the measurement units (M1-M8) practised judging whether instruments measure what they claim in health research.'
        ],
        keyTerms: [
          { term: 'Cronbach alpha', definition: 'internal consistency of a multi-item scale (≥ 0.7 acceptable)' },
          { term: 'criterion validity', definition: 'does the measure agree with a gold standard?' },
          { term: 'systematic error', definition: 'repeatable bias in one direction — reliability does not cure it' }
        ],
        examFocus: ['Give an example of reliable-but-invalid measurement', 'Match reliability/validity types to scenarios']
      },
      {
        id: 'research-design', title: 'Research design',
        outcomes: ['Weeks 8-9'],
        bigIdea: 'Design beats analysis: the question plus the allocation of exposures determines what conclusions are possible.',
        keyKnowledge: [
          'Hierarchy of evidence (course order): case reports/series → cross-sectional → case-control → cohort → RCT → systematic review/meta-analysis.',
          'Designs: cross-sectional (snapshot, prevalence), case-control (start from outcome, look back — odds ratios, recall bias), cohort (start from exposure, follow forward — relative risk, loss to follow-up), RCT (random allocation, the causal gold standard).',
          'Experimental control elements: randomisation (known+unknown confounders), blinding (expectation effects), placebo, allocation concealment.',
          'Matching design to question: prognosis → cohort; aetiology → cohort/RCT; rare disease → case-control; frequency → cross-sectional.'
        ],
        keyTerms: [
          { term: 'odds ratio vs relative risk', definition: 'OR for case-control; RR for cohort/RCT — interpret differently' },
          { term: 'randomisation', definition: 'chance allocation balancing confounders across groups' },
          { term: 'blinding', definition: 'hiding group assignment from participants/single or assessors/double to kill expectation bias' }
        ],
        examFocus: ['Pick the design for a stated research question and justify', 'State each design signature bias']
      },
      {
        id: 'rct-samplesize', title: 'RCTs, sample size and effect size',
        outcomes: ['Weeks 9-10'],
        bigIdea: 'A good RCT is powered to detect the smallest clinically important difference — nothing less, nothing absurdly more.',
        keyKnowledge: [
          'RCT anatomy: PICO question → eligibility → randomisation → intervention vs control → outcome (primary!) → analysis by intention-to-treat.',
          'Sample size needs: alpha, power (1−beta), expected effect size, variability (SD), dropout allowance; read the week exercises (RCT1, RCT2) with this checklist.',
          'Effect size families: standardised difference (Cohen d: 0.2 small/0.5 medium/0.8 large), r, odds ratio; the statistic that separates significance from importance.',
          'Bias vs confounding vs chance: bias is systematic design/conduct error; confounding is a third variable linked to both exposure and outcome; chance is sampling luck — more n fixes only chance.'
        ],
        keyTerms: [
          { term: 'intention-to-treat', definition: 'analyse participants in the groups they were allocated to, regardless of compliance' },
          { term: 'primary outcome', definition: 'the single pre-declared outcome the trial is powered for' },
          { term: 'Cohen d', definition: 'standardised mean difference effect size (0.2/0.5/0.8 thresholds)' }
        ],
        examFocus: ['List the ingredients of a sample-size calculation', 'Critique an RCT for bias/blinding/ITT']
      },
      {
        id: 'bias-validity-ebm', title: 'Bias, confounding, internal/external validity and EBM',
        outcomes: ['Weeks 11-12'],
        bigIdea: 'Judge any study with three questions: are the results true here (internal validity), do they generalise (external validity), and does the answer change practice (EBM)?',
        keyKnowledge: [
          'Bias catalogue: selection (groups not comparable), information/measurement (misclassified data), recall, observer, publication (negative trials vanish — the file-drawer problem).',
          'Confounding control: design (randomisation, matching, restriction) or analysis (stratification, multivariable adjustment); a confounder must associate with exposure AND outcome and not sit on the causal path.',
          'Internal validity = minimised bias/confounding/chance inside the study; external validity = representativeness of the sample/setting for the population you care about. Tight inclusion criteria often trade one for the other.',
          'EBM steps (5 As): Ask (PICO) → Acquire → Appraise → Apply → Assess. Meta-analysis pools studies; heterogeneity (I2) checks whether pooling makes sense.'
        ],
        keyTerms: [
          { term: 'selection bias', definition: 'systematic difference in how groups were formed or enrolled' },
          { term: 'confounder', definition: 'third variable linked to exposure and outcome that distorts their apparent relationship' },
          { term: 'external validity', definition: 'generalisability of results beyond the study sample' }
        ],
        examFocus: ['Name the bias in a described study', 'Distinguish internal from external validity trade-offs', 'State the confounder criteria']
      },
      {
        id: 'communication', title: 'Scientific communication: papers and posters',
        outcomes: ['Weeks 10-12 practicals'],
        bigIdea: 'Research counts only when communicated: IMRaD structure, honest tables/figures, and a poster that tells the story in 90 seconds.',
        keyKnowledge: [
          'Paper anatomy (IMRaD): Introduction (why: gap + aim), Methods (reproducible detail), Results (numbers, no interpretation), Discussion (interpretation, limitations, implications).',
          'Reporting standards: mean±SD or median[IQR] by distribution; exact p-values; effect sizes with CIs; tables must not duplicate figures.',
          'The Assessment 3 research project ends in a scientific presentation/poster: title-authors-aim-methods-results-discussion, one message per slide, figures over text.',
          'The "How to write a paper" and poster-requirements files in her folder are the marking blueprint — read them before drafting.'
        ],
        keyTerms: [
          { term: 'IMRaD', definition: 'Introduction, Methods, Results and Discussion — the standard paper skeleton' },
          { term: 'poster session', definition: 'conference format: the poster must stand alone; you supply the narrative' }
        ],
        examFocus: ['Rearrange scrambled paper sections correctly', 'Draft a results sentence from a stats table']
      }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
