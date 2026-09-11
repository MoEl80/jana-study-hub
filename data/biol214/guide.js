/* BIOL214 — The Biochemistry of Energy and Metabolism (Spring 2026) — Study Guide.
   Topics mirror the 2026 Schedule of Learning and Moodle lecture/lectorial sequence
   (cellular respiration → gluconeogenesis → PPP → photosynthesis → protein & lipid
   metabolism → energy flow, plus the annotated-bibliography research skill).
   Recommended texts: Berg/Tymoczko/Stryer, Biochemistry (library 574.192/49). */
(function (root) {
  root.JSH_DATA = root.JSH_DATA || {};
  root.JSH_DATA.biol214 = root.JSH_DATA.biol214 || {};
  root.JSH_DATA.biol214.guide = {
    subjectId: 'biol214',
    syllabus: 'BIOL214 Subject Outline, Spring 2026 (UOW School of Science)',
    topics: [
      {
        id: 'respiration', title: 'Cellular respiration: glycolysis, TCA cycle & oxidative phosphorylation',
        outcomes: ['Weeks 2-3'],
        bigIdea: 'Cells harvest energy stepwise, never all at once: glycolysis splits glucose, the TCA cycle oxidises acetyl-CoA to NADH/FADH2, and the electron transport chain converts that reducing power into ATP.',
        keyKnowledge: [
          'Glycolysis (cytosol): glucose (6C) → 2 pyruvate (3C); net 2 ATP + 2 NADH. Invests 2 ATP, pays back 4. Rate-limiting enzyme: phosphofructokinase (PFK), activated by AMP, inhibited by ATP and citrate.',
          'Pyruvate dehydrogenase links glycolysis to the TCA cycle: pyruvate + CoA → acetyl-CoA + CO2 (irreversible; NADH made).',
          'TCA cycle (mitochondrial matrix): per acetyl-CoA → 3 NADH, 1 FADH2, 1 GTP, 2 CO2. The carbons entering as acetyl-CoA are NOT the carbons released in the same turn. Key control points: citrate synthase, isocitrate dehydrogenase, alpha-ketoglutarate dehydrogenase.',
          'Oxidative phosphorylation: NADH donates at Complex I (≈2.5 ATP), FADH2 at Complex II (≈1.5 ATP); protons pumped to the intermembrane space power ATP synthase as they return through it (chemiosmotic coupling).',
          'Inhibitors are exam favourites: cyanide/CO block Complex IV; oligomycin blocks ATP synthase; uncouplers (DNP) leak protons — electron transport races, no ATP made, heat released.',
          'Total aerobic yield ≈ 30-32 ATP per glucose; anaerobic fermentation regenerates NAD+ giving only the 2 ATP of glycolysis (lactate in muscle, ethanol in yeast).'
        ],
        keyTerms: [
          { term: 'substrate-level phosphorylation', definition: 'ATP made by transferring a phosphate directly from a substrate (glycolysis, TCA GTP step)' },
          { term: 'chemiosmosis', definition: 'energy stored in a proton gradient across a membrane driving ATP synthesis' },
          { term: 'PFK', definition: 'phosphofructokinase — the main regulated, rate-limiting enzyme of glycolysis' },
          { term: 'acetyl-CoA', definition: 'the 2-carbon fuel unit feeding the TCA cycle; central crossroads of metabolism' }
        ],
        examFocus: [
          'Trace a labelled carbon or count ATP/NADH produced at each stage',
          'Predict the effect of an ETC inhibitor or uncoupler on O2 use and ATP output',
          'Explain the TCA practical result: measuring isocitrate dehydrogenase activity'
        ]
      },
      {
        id: 'gluconeogenesis-glycogen', title: 'Gluconeogenesis and glycogen metabolism',
        outcomes: ['Week 4'],
        bigIdea: 'Blood glucose is defended in two ways: build it when fasting (gluconeogenesis) and store/release it when fed (glycogen synthesis and breakdown, controlled by insulin and glucagon).',
        keyKnowledge: [
          'Gluconeogenesis is NOT glycolysis in reverse: three irreversible glycolysis steps are bypassed by dedicated enzymes — pyruvate carboxylase, PEP carboxykinase, fructose-1,6-bisphosphatase, glucose-6-phosphatase (liver/kidney only).',
          'Main substrates: lactate (Cori cycle), glycerol, glucogenic amino acids (NOT acetyl-CoA or fatty acids — animals cannot convert fat to glucose).',
          'Glycogen synthesis: glycogen synthase adds UDP-glucose to a glycogen primer (branches made by branching enzyme). Breakdown: glycogen phosphorylase removes glucose-1-P (debranching enzyme handles branches).',
          'Reciprocal regulation: insulin (fed) → glycogen synthase ON, phosphorylase OFF; glucagon/adrenaline (fasting/fight-or-flight) → phosphorylase ON via cAMP/PKA cascade.',
          'Metabolic diseases of note: von Gierke (glucose-6-phosphatase deficiency → hepatomegaly, hypoglycaemia), McArdle (muscle phosphorylase → exercise intolerance).'
        ],
        keyTerms: [
          { term: 'Cori cycle', definition: 'muscle lactate shipped to liver, rebuilt to glucose, returned to muscle' },
          { term: 'glycogen phosphorylase', definition: 'enzyme releasing glucose-1-phosphate from glycogen; activated by phosphorylation' },
          { term: 'UDP-glucose', definition: 'activated glucose donor for glycogen synthesis' }
        ],
        examFocus: [
          'Explain why fatty acids cannot become glucose in humans',
          'Compare hormonal control of liver vs muscle glycogen'
        ]
      },
      {
        id: 'ppp', title: 'Pentose phosphate pathway & its diseases',
        outcomes: ['Week 5'],
        bigIdea: 'The PPP trades glucose-6-phosphate for NADPH (reducing power for biosynthesis and antioxidant defence) and ribose-5-phosphate (nucleotide backbones).',
        keyKnowledge: [
          'Oxidative phase: glucose-6-phosphate dehydrogenase (G6PD) makes NADPH + CO2 — the committed, regulated step.',
          'Non-oxidative phase: interconverts sugars, making ribose-5-P for DNA/RNA or recycling carbons back to glycolysis.',
          'NADPH uses: fatty-acid and steroid synthesis, phagocyte respiratory burst, glutathione recycling that protects red cells from oxidative damage.',
          'G6PD deficiency: most common enzyme defect in humans; X-linked; haemolytic anaemia triggered by oxidants (fava beans, primaquine, sulfa drugs).',
          'Favism and neonatal jaundice link the biochemistry straight to clinical presentation.'
        ],
        keyTerms: [
          { term: 'NADPH', definition: 'reducing power for building molecules and fighting oxidants (not for ATP)' },
          { term: 'G6PD', definition: 'glucose-6-phosphate dehydrogenase — first and controlling PPP enzyme' },
          { term: 'glutathione', definition: 'cellular antioxidant kept reduced by NADPH; protects RBC membranes' }
        ],
        examFocus: [
          'Explain why G6PD-deficient red cells lyse under oxidative stress',
          'Distinguish NADH (energy) from NADPH (biosynthesis/defence) roles'
        ]
      },
      {
        id: 'photosynthesis', title: 'Photosynthesis: light and dark reactions',
        outcomes: ['Weeks 6-7'],
        bigIdea: 'Photosynthesis reverses respiration: light energy makes ATP + NADPH (light reactions) that power the Calvin cycle to fix CO2 into sugar.',
        keyKnowledge: [
          'Light reactions (thylakoid): photosystem II splits water (O2 released, electrons replaced), electron flow through plastoquinone → cytochrome b6f → plastocyanin → photosystem I builds a proton gradient; ATP synthase makes ATP (photophosphorylation). NADP+ is the final electron acceptor → NADPH.',
          'Cyclic vs non-cyclic flow: cyclic (PSI only) makes extra ATP when the Calvin cycle needs more ATP than NADPH.',
          'Calvin cycle (stroma): RuBisCO fixes CO2 onto ribulose-1,5-bisphosphate; 3 turns → 1 glyceraldehyde-3-P; phases = carboxylation, reduction, regeneration.',
          'Photorespiration problem: RuBisCO can bind O2 instead of CO2 (wasteful, worse when hot/dry with closed stomata). C4 plants (maize) pre-concentrate CO2 in bundle-sheath cells; CAM plants (succulents) fix CO2 at night.',
          'Herbicide tie-in: atrazine blocks PSII electron transport; the practical measured Hill-reaction electron flow with DCPIP.'
        ],
        keyTerms: [
          { term: 'RuBisCO', definition: 'the CO2-fixing enzyme of the Calvin cycle — most abundant enzyme on Earth' },
          { term: 'photophosphorylation', definition: 'ATP synthesis powered by the light-driven proton gradient' },
          { term: 'C4/CAM', definition: 'CO2-concentrating adaptations that beat photorespiration in hot, dry climates' }
        ],
        examFocus: [
          'Label electron flow through PSII → PSI with products at each step',
          'Explain why C4 photosynthesis beats C3 in hot dry conditions'
        ]
      },
      {
        id: 'nitrogen-metabolism', title: 'Protein metabolism, the nitrogen web & urea cycle',
        outcomes: ['Weeks 8-10'],
        bigIdea: 'Amino acids feed energy metabolism after their nitrogen is removed — transamination, then either build molecules or detoxify ammonia to urea.',
        keyKnowledge: [
          'Transamination: aminotransferases (ALT, AST) swap amino groups onto alpha-ketoglutarate → glutamate; PLP (vitamin B6) is the cofactor.',
          'Oxidative deamination of glutamate releases NH4+ for the urea cycle; the remaining carbon skeletons enter metabolism at pyruvate, acetyl-CoA, or TCA intermediates (glucogenic vs ketogenic).',
          'Urea cycle (liver): 2 nitrogens (free NH4+ + aspartate) + CO2 → urea; rate-limiting enzyme carbamoyl phosphate synthetase I, activated by N-acetylglutamate. 4 ATP per urea.',
          'Clinical links: PKU (phenylalanine hydroxylase deficiency → must limit phenylalanine, as in the PKU practical), maple syrup urine disease, hyperammonaemia, and urea-cycle intermediates excreted in defects (argininosuccinic aciduria).',
          'Nitrogen web: protein turnover, amino acid pools, and the balance between synthesis, degradation and excretion.'
        ],
        keyTerms: [
          { term: 'transamination', definition: 'moving an amino group from an amino acid to a keto acid without releasing free ammonia' },
          { term: 'urea cycle', definition: 'liver pathway converting toxic ammonia to excretable urea' },
          { term: 'PKU', definition: 'phenylketonuria — inherited loss of phenylalanine hydroxylase; untreated causes intellectual disability' },
          { term: 'glucogenic vs ketogenic', definition: 'whether an amino-acid carbon skeleton can feed glucose synthesis or only ketone/fat pathways' }
        ],
        examFocus: [
          'Map an amino acid to its entry point into metabolism',
          'Explain the biochemical basis and dietary treatment of PKU (her practical)',
          'Count ATP/nitrogen flows through one turn of the urea cycle'
        ]
      },
      {
        id: 'lipid-metabolism', title: 'Lipid metabolism',
        outcomes: ['Weeks 11-12'],
        bigIdea: 'Fats are the densest energy store: mobilised as fatty acids, oxidised by beta-oxidation to acetyl-CoA, limited only by the need to keep ketones in check.',
        keyKnowledge: [
          'Lipolysis: hormone-sensitive lipase (adrenaline/glucagon-activated) releases fatty acids + glycerol from triacylglycerol stores; insulin shuts it off.',
          'Activation & transport: fatty acyl-CoA is shuttled into mitochondria by the carnitine shuttle — CPT-I is the rate-limiting step, inhibited by malonyl-CoA when synthesising fat.',
          'Beta-oxidation spiral: each cycle removes 2 carbons → 1 acetyl-CoA + 1 FADH2 + 1 NADH; a 16-C palmitate yields 7 cycles, 8 acetyl-CoA, ~106 ATP total.',
          'Odd-chain fatty acids end at propionyl-CoA → (via B12-dependent methylmalonyl-CoA mutase) succinyl-CoA — a TCA intermediate, so odd-chain fat IS glucogenic.',
          'Ketogenesis (liver, fasting): acetyl-CoA → ketone bodies for brain/muscle; unchecked in untreated type 1 diabetes → ketoacidosis.'
        ],
        keyTerms: [
          { term: 'beta-oxidation', definition: 'mitochondrial spiral chopping 2 carbons at a time off fatty acyl-CoA' },
          { term: 'carnitine shuttle', definition: 'CPT-I/II system moving fatty acids into mitochondria' },
          { term: 'ketone bodies', definition: 'acetoacetate, beta-hydroxybutyrate, acetone — fuel made by the liver in fasting' }
        ],
        examFocus: [
          'Calculate ATP yield from a given fatty acid',
          'Explain why the brain cannot burn fatty acids directly but can use ketones'
        ]
      },
      {
        id: 'energy-flow', title: 'Biochemistry of energy flow: cells to organisms',
        outcomes: ['Weeks 11-12 tutorial'],
        bigIdea: 'Metabolic pathways are a network, not a list: fed vs fasting states flip whole-organ flux through the same enzymes using hormonal signals.',
        keyKnowledge: [
          'Fed state: insulin drives glucose uptake, glycogen + fat synthesis; fasting: glucagon drives glycogenolysis, gluconeogenesis, lipolysis, ketogenesis.',
          'Organ specialisation: liver (glucostat, can make and burn everything), brain (glucose/ketones only, no fuel stores), muscle (stores its own glycogen, cannot release glucose — no G6Pase), adipose (fat store).',
          'AMPK and mTOR sense energy vs nutrient status and switch catabolism/anabolism.',
          'Energy flow from sun → photosynthesis → food webs → human metabolism ties the course together (her 2026 tutorial theme).'
        ],
        keyTerms: [
          { term: 'metabolic flux', definition: 'the rate of molecules flowing through a pathway, set by hormones and energy status' },
          { term: 'AMPK', definition: 'cellular fuel gauge activated by AMP — turns on catabolism when energy is low' }
        ],
        examFocus: [
          'Predict organ-level fuel use in fed vs fasting vs prolonged starvation',
          'Integrate pathways around acetyl-CoA as the central hub'
        ]
      },
      {
        id: 'scientific-writing', title: 'Scientific writing & the annotated bibliography',
        outcomes: ['Weeks 1, 7 assessment skill'],
        bigIdea: 'The assessment is a research skill: find primary literature, judge quality, summarise purpose-method-findings-value, and write tight scientific prose.',
        keyKnowledge: [
          'Annotated bibliography = reference + structured annotation: aim, method, key result, and a critical evaluation (strengths, limitations, relevance to your topic) — not a summary blurb.',
          'Use primary peer-reviewed literature (research articles), not reviews or web pages, unless justified; check journal quality and recency.',
          'Scientific writing: past tense for methods/results, present for principles; precise verbs (demonstrated, observed, suggests); every claim needs a citation.',
          'The rubric rewards: correct reference formatting, genuinely critical annotations, and clarity — see the marking rubric file in the subject folder.'
        ],
        keyTerms: [
          { term: 'primary literature', definition: 'a research article reporting original data — the required source type for the bibliography' },
          { term: 'annotation', definition: 'structured critical note on a reference: aim, method, finding, evaluation' }
        ],
        examFocus: [
          'Write a rubric-scoring annotation for a given abstract',
          'Spot vague or unsupported sentences in a results paragraph'
        ]
      }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
