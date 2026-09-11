/* MEDI212 — Introduction to Pathophysiology (Spring 2026) — Study Guide.
   Topics follow the Subject Outline lecture program, weeks 1-13:
   pathophysiology basics → fluid/electrolyte → acid-base → anaemias → GI disorders →
   diabetes → CKD → thyroid → lipoproteins → CVD → genetics. */
(function (root) {
  root.JSH_DATA = root.JSH_DATA || {};
  root.JSH_DATA.medi212 = root.JSH_DATA.medi212 || {};
  root.JSH_DATA.medi212.guide = {
    subjectId: 'medi212',
    syllabus: 'MEDI212 Subject Outline, Spring 2026 (UOW School of Medical, Indigenous and Health Sciences)',
    topics: [
      {
        id: 'patho-basics', title: 'Pathophysiology fundamentals: homeostasis, aetiology and disease processes',
        outcomes: ['Week 1'],
        bigIdea: 'Disease = failure of homeostatic compensation. Describe it systematically: aetiology → pathogenesis → clinical manifestations → complications → treatment rationale.',
        keyKnowledge: [
          'Core vocabulary: aetiology (cause), pathogenesis (how it develops), signs (observable) vs symptoms (felt), acute vs chronic, remission vs exacerbation, prognosis.',
          'Cell injury: reversible (ATP depletion, swelling) vs irreversible (membrane damage, necrosis); apoptosis is programmed, necrosis is pathological.',
          'Inflammation is the generic response: rubor, calor, tumor, dolor, functio laesa — vascular stage then cellular (neutrophils early, macrophages/lymphocytes later).',
          'The urinalysis practical (Week 2) and case-report assessment both reward systematic description: identify the disrupted variable, the failed compensation, and the mechanism linking them.'
        ],
        keyTerms: [
          { term: 'homeostasis', definition: 'maintenance of a stable internal environment by feedback systems' },
          { term: 'pathogenesis', definition: 'the step-by-step development of a disease from its cause' },
          { term: 'necrosis vs apoptosis', definition: 'uncontrolled cell death with inflammation vs controlled programmed cell death without it' }
        ],
        examFocus: ['Define and use aetiology/pathogenesis correctly in a case description', 'Link inflammation stages to observable signs']
      },
      {
        id: 'fluid-electrolyte', title: 'Fluid and electrolyte imbalance',
        outcomes: ['Week 2'],
        bigIdea: 'Two-thirds of body water is intracellular; the extracellular third splits into interstitial and plasma. Sodium moves water; the kidney and thirst defend volume and osmolality.',
        keyKnowledge: [
          'Compartments: ICF ≈ 28 L, ECF ≈ 14 L (plasma 3 L, interstitial 11 L). Osmotic forces distribute water freely; the extracellular marker is Na+ (135-145 mmol/L).',
          'Imbalances follow two axes — volume (hypo/hypervolaemia) and tonicity (hypo/hypernatraemia): hyponatraemia most often = excess water (SIADH, heart failure), hypernatraemia = water deficit.',
          'Potassium (3.5-5.0) is the membrane ion: hypo → weakness, hyper → peaked T waves and arrhythmia; shifted by acidosis (H+ in, K+ out) and insulin (K+ in).',
          'Third-spacing, oedema forces (Starling: capillary pressure ↑, albumin ↓, lymph blockage), and the urinalysis practical linking urine composition to volume status.'
        ],
        keyTerms: [
          { term: 'osmolality', definition: 'solute concentration per kg water — drives water movement between compartments' },
          { term: 'SIADH', definition: 'excess ADH → water retention, dilutional hyponatraemia, concentrated urine' },
          { term: 'third spacing', definition: 'fluid trapped in interstitial spaces, lost from the circulating volume' }
        ],
        examFocus: ['Interpret Na+/volume scenarios (who has too much water vs too little)', 'Explain oedema formation with Starling forces']
      },
      {
        id: 'acid-base', title: 'Acid-base imbalance',
        outcomes: ['Week 3'],
        bigIdea: 'pH 7.35-7.45 is defended by buffers (minutes), ventilation (minutes-hours) and kidneys (hours-days). Name every disorder by its primary change plus any compensation.',
        keyKnowledge: [
          'Metabolic acidosis (low HCO3-): diabetic ketoacidosis, lactate, renal failure, diarrhoea — Kussmaul breathing compensates; anion gap separates causes.',
          'Metabolic alkalosis (high HCO3-): vomiting, diuretics; respiratory acidosis (high CO2): hypoventilation/COPD; respiratory alkalosis (low CO2): hyperventilation/anxiety/pain.',
          'Compensation rules: respiratory fixes metabolic (lungs adjust CO2), metabolic fixes respiratory (kidneys adjust HCO3-); compensation never fully corrects pH.',
          'ABG reading order: pH → primary (PaCO2 vs HCO3-) → compensation → cause → anion gap if acidosis.'
        ],
        keyTerms: [
          { term: 'anion gap', definition: 'Na+ − (Cl− + HCO3−): elevated gap = unmeasured acids (ketones, lactate) present' },
          { term: 'Kussmaul respiration', definition: 'deep, laboured breathing — respiratory compensation for metabolic acidosis' },
          { term: 'buffer', definition: 'a weak acid/base pair that resists pH change (bicarbonate is the dominant ECF buffer)' }
        ],
        examFocus: ['Classify an ABG fully (disorder + compensation)', 'Explain DKA as a combined fluid/electrolyte/acid-base case']
      },
      {
        id: 'anaemias', title: 'Nutrition-related anaemias',
        outcomes: ['Week 4'],
        bigIdea: 'Anaemia = reduced haemoglobin/oxygen capacity. The nutrition-related trio is iron deficiency (microcytic), B12/folate deficiency (macrocytic) and the haemolytic/nutritional overlaps.',
        keyKnowledge: [
          'Classification by MCV: microcytic (iron deficiency, thalassaemia), normocytic (acute loss, chronic disease), macrocytic (B12/folate — megaloblastic).',
          'Iron: absorbed as Fe2+ in duodenum with vitamin C, blocked by phytates/tea; stored as ferritin, transported on transferrin. Deficiency stages: stores fall (low ferritin) → transport falls (low transferrin saturation) → Hb falls.',
          'B12 needs intrinsic factor (gastric parietal cells) and terminal ileal absorption — pernicious anaemia = autoimmune IF failure; folate deficiency arises from pregnancy, alcohol, malabsorption; folate corrects the blood picture of B12 deficiency but NOT the neurology.',
          'Assessment 3 presentations tie here: nutrition-related anaemias with dietary analysis and group work.'
        ],
        keyTerms: [
          { term: 'MCV', definition: 'mean corpuscular volume — classifies anaemia as micro/normo/macrocytic' },
          { term: 'ferritin', definition: 'iron-storage protein; low ferritin = depleted iron stores (first abnormal test)' },
          { term: 'intrinsic factor', definition: 'gastric protein required for B12 absorption; autoimmune loss → pernicious anaemia' }
        ],
        examFocus: ['Interpret iron studies (ferritin, transferrin, saturation)', 'Distinguish B12 vs folate deficiency consequences']
      },
      {
        id: 'gi-disorders', title: 'Lower GI disorders, malabsorption, H. pylori and peptic ulcers',
        outcomes: ['Weeks 5-6'],
        bigIdea: 'The gut is a selective barrier: when motility, digestion, absorption or the mucosal barrier fail, malabsorption and ulceration follow.',
        keyKnowledge: [
          'Peptic ulcer disease: H. pylori (urease lets it survive acid; damages mucosa) and NSAIDs (COX-1 inhibition blocks protective prostaglandins) cause >90%; complications include bleeding and perforation.',
          'Malabsorption patterns: coeliac disease (gluten → villous atrophy → iron/folate malabsorption), pancreatic insufficiency (steatorrhoea), lactase deficiency (osmotic diarrhoea), bile salt problems (fat malabsorption).',
          'Lower GI disorders by layer of failure: IBS (motility/visceral hypersensitivity, no structural change), IBD (Crohn skip-lesions full-thickness vs ulcerative colitis continuous mucosal), diverticular disease.',
          'Diarrhoea mechanisms: osmotic (stops with fasting), secretory (continues), inflammatory (blood/mucus) — a classic discriminating set.'
        ],
        keyTerms: [
          { term: 'H. pylori', definition: 'urease-producing gastric bacterium; treat to cure ulcer disease' },
          { term: 'steatorrhoea', definition: 'fatty stools from fat malabsorption' },
          { term: 'coeliac disease', definition: 'gluten-driven autoimmune villous atrophy of the small intestine' }
        ],
        examFocus: ['Explain the two mechanisms of peptic ulcer', 'Classify a diarrhoea case as osmotic/secretory/inflammatory']
      },
      {
        id: 'diabetes', title: 'Diabetes: types, acute and chronic complications',
        outcomes: ['Week 7'],
        bigIdea: 'Diabetes is defined by hyperglycaemia from absent (T1) or inadequate/ineffective (T2) insulin; the damage is done by osmotic stress and protein glycation over years.',
        keyKnowledge: [
          'Diagnosis: fasting glucose ≥ 7.0 mmol/L, HbA1c ≥ 6.5% (48 mmol/mol), or OGTT 2-h ≥ 11.1; random ≥ 11.1 with symptoms.',
          'Type 1: autoimmune beta-cell destruction → absolute insulin lack → DKA (ketoacidosis, Kussmaul, dehydration). Type 2: insulin resistance + progressive secretory failure → often HHS (severe hyperosmolarity without significant ketones).',
          'Chronic complications from glycation (HbA1c reflects 3-month exposure) + microvascular damage: retinopathy, nephropathy, neuropathy; macrovascular: MI, stroke, PVD.',
          'Management logic: T1 insulin replacement; T2 lifestyle → metformin → agents; the Week 7 diabetes practical works through a case with glucose monitoring.'
        ],
        keyTerms: [
          { term: 'HbA1c', definition: 'glycated haemoglobin — 8-12 week average glucose exposure' },
          { term: 'DKA', definition: 'diabetic ketoacidosis: insulin lack → lipolysis → ketones → metabolic acidosis + dehydration' },
          { term: 'insulin resistance', definition: 'target tissues respond poorly to insulin; the hallmark of type 2' }
        ],
        examFocus: ['Explain DKA step by step', 'Connect chronic hyperglycaemia to each complication mechanism']
      },
      {
        id: 'ckd', title: 'Chronic kidney disease',
        outcomes: ['Week 8'],
        bigIdea: 'CKD is a staged, usually silent loss of nephron function until compensation fails — then fluid, electrolyte, acid-base, endocrine and drug handling all break together.',
        keyKnowledge: [
          'Staging by eGFR: G1 ≥90 (with damage markers) → G5 <15 (kidney failure); albuminuria grade adds prognosis.',
          'Failed functions: water/salt (oedema, hypertension), K+ and phosphate retention (with falling calcium and rising PTH — renal bone disease), metabolic acidosis, anaemia (no EPO), and uraemia.',
          'Causes: diabetes and hypertension dominate; polycystic disease, reflux nephropathy, glomerulonephritis follow.',
          'Dialysis replaces filtration, not the endocrine kidney; transplantation restores both. The emergency-department practical in this course included renal case triage.'
        ],
        keyTerms: [
          { term: 'eGFR', definition: 'estimated glomerular filtration rate — the CKD staging number' },
          { term: 'uraemia', definition: 'symptom complex of advanced renal failure (nausea, confusion, itch, pericarditis)' },
          { term: 'EPO', definition: 'erythropoietin — kidney hormone driving red-cell production; its loss causes renal anaemia' }
        ],
        examFocus: ['Explain why CKD causes anaemia + renal bone disease', 'Stage a case from eGFR + albuminuria']
      },
      {
        id: 'thyroid', title: 'Hypo- and hyperthyroidism',
        outcomes: ['Week 9'],
        bigIdea: 'Thyroid hormone sets metabolic rate. The pituitary-thyroid axis (TSH ↔ T4/T3) lets you localise the problem from blood tests alone.',
        keyKnowledge: [
          'Primary hypothyroidism (Hashimoto): high TSH, low T4 — fatigue, cold intolerance, weight gain, bradycardia, goitre. Myxoedema in extremes.',
          'Primary hyperthyroidism (Graves, TSI antibodies): low TSH, high T4/T3 — heat intolerance, weight loss, tachycardia/AF, tremor, exophthalmos (Graves-specific).',
          'Secondary (pituitary) disease flips the pattern: TSH low/normal with abnormal T4 — always read the pair.',
          'Links across the course: thyroid hormone affects lipoprotein metabolism (hypercholesterolaemia in hypothyroidism) and heart rhythm.'
        ],
        keyTerms: [
          { term: 'TSH', definition: 'pituitary stimulator of the thyroid; the first-line screening test' },
          { term: 'Graves disease', definition: 'autoimmune hyperthyroidism with stimulating antibodies (TSI) and eye signs' },
          { term: 'Hashimoto', definition: 'autoimmune thyroid destruction — the usual cause of hypothyroidism' }
        ],
        examFocus: ['Localise thyroid disease from TSH/T4 patterns', 'Match signs to metabolic-rate changes']
      },
      {
        id: 'lipoproteins-cvd', title: 'Lipoprotein metabolism, dyslipidaemia and atherosclerosis',
        outcomes: ['Weeks 10-11'],
        bigIdea: 'Atheroma is lipoprotein-driven inflammation of artery walls: trapped LDL is oxidised, engulfed by macrophages, and covered by a fibrous cap that can rupture.',
        keyKnowledge: [
          'Lipoprotein ladder by density: chylomicrons (dietary fat) → VLDL (liver TG export) → IDL → LDL (cholesterol delivery) → HDL (reverse transport to liver).',
          'Atherosclerosis pathogenesis: endothelial injury → LDL entry/oxidation → monocyte-macrophage foam cells → fatty streak → fibrous cap plaque → rupture → thrombosis (MI/stroke).',
          'Risk modifiers: smoking, hypertension, diabetes, family history; LDL is the treatment target (statins = HMG-CoA reductase inhibition), HDL is protective.',
          'Week 12 topic (TBC) is expected to consolidate case integration ahead of finals; genetics (Week 13) covers familial hypercholesterolaia and other inherited risk.'
        ],
        keyTerms: [
          { term: 'LDL vs HDL', definition: 'LDL delivers cholesterol to walls (atherogenic); HDL removes it (protective)' },
          { term: 'foam cell', definition: 'macrophage stuffed with oxidised LDL — the plaque building block' },
          { term: 'stable vs unstable plaque', definition: 'thick-cap vs thin-inflamed cap; rupture of unstable plaque causes acute events' }
        ],
        examFocus: ['Sequence atherogenesis from injury to thrombosis', 'Explain why diabetes worsens each step']
      },
      {
        id: 'genetics', title: 'Genetic basis of disease',
        outcomes: ['Week 13'],
        bigIdea: 'Mendelian patterns explain family risk; one gene-one disease thinking breaks down for common conditions, but pedigree logic always works.',
        keyKnowledge: [
          'Inheritance patterns: autosomal dominant (AD — one allele, vertical transmission, e.g. familial hypercholesterolaemia), autosomal recessive (AR — carriers, e.g. cystic fibrosis, PKU), X-linked recessive (male-heavy, e.g. G6PD, haemophilia), mitochondrial (maternal).',
          'Penetrance and expressivity explain why AD diseases look variable; multifactorial inheritance (gene + environment) covers diabetes, atherosclerosis, most common disease.',
          'Course crossover points: PKU (BIOL214 practical), G6PD, familial hypercholesterolaemia, polycystic kidney disease — reuse those cases here.',
          'Trinucleotide repeats (anticipation) and chromosomal disorders complete the classical toolkit.'
        ],
        keyTerms: [
          { term: 'penetrance', definition: 'proportion of genotype carriers showing any phenotype' },
          { term: 'multifactorial inheritance', definition: 'disease risk from many genes plus environment — the common-disease model' },
          { term: 'carrier', definition: 'heterozygote for a recessive allele: healthy but transmissible' }
        ],
        examFocus: ['Draw/read a pedigree and assign the likely inheritance', 'Give one course-relevant example per pattern']
      }
    ]
  };
})(typeof self !== 'undefined' ? self : globalThis);
