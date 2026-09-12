/* AUTO-DISTILLED content — generated automatically by _scripts/auto-distill.js
   from newly downloaded university files (GLM 5.3). Regenerated on every daily sync.
   Merges new topics into the guide, new questions into the bank, new cards into the deck. */
(function (root) {
  var UPDATES = {
    "medi304": {
      "topics": [
        {
          "id": "observational-study-designs",
          "title": "Observational study designs: case reports, case series, cross-sectional, case-control and cohort studies",
          "outcomes": [
            "auto-synced"
          ],
          "bigIdea": "Observational designs describe exposures and outcomes with increasing temporal linkage—from single case reports to longitudinal cohorts—but without experimental allocation they demonstrate association rather than causation and mainly serve to generate hypotheses.",
          "keyKnowledge": [
            "A case report describes a novel or significant observation involving a single individual case; it is descriptive only but can generate new ideas.",
            "A case series describes multiple patients with a similar diagnosis, procedure or unusual finding, following them without an experimental protocol to allocate treatment and generally with no control group, so treatment effects cannot be interpreted as causal; findings can generate hypotheses for stronger designs including randomised controlled trials.",
            "A cross-sectional study is an observational study that collects and analyses data at a specific point in time (also called a cross-sectional analysis, transversal study or prevalence study); it is neither longitudinal nor experimental.",
            "BMI is calculated as weight in kilograms divided by height in metres squared; it accounts for height because people of different heights may have different body weights without having different levels of obesity.",
            "A case-control study compares cases (participants with the disease or outcome of interest) with controls (participants without it), examining previous exposure to possible risk factors and estimating the odds of exposure among cases relative to controls, expressed as an odds ratio.",
            "Case-control studies can investigate rare diseases using relatively small samples, making them less time-consuming and less expensive than many cohort studies; they can investigate several previous exposures for one disease, whereas a cohort study can examine multiple outcomes arising from one exposure.",
            "A cohort study is longitudinal: participants initially free from the disease outcome are assessed for exposure, exposed and unexposed groups are followed over time, and the occurrence of health outcomes is recorded; cross-sectional and case-control studies identify associations, but an observed association does not necessarily mean one variable caused the other."
          ],
          "keyTerms": [
            {
              "term": "Case report",
              "definition": "A descriptive report of a novel or significant observation involving an individual case."
            },
            {
              "term": "Case series",
              "definition": "A descriptive, observational report of multiple patients with a similar diagnosis, procedure or unusual finding, without experimental treatment allocation or a control group."
            },
            {
              "term": "Cross-sectional study",
              "definition": "An observational study that collects and analyses data at a specific point in time; also called a cross-sectional analysis, transversal study or prevalence study."
            },
            {
              "term": "Case-control study",
              "definition": "An observational design comparing cases who have a disease or outcome with controls who do not, looking back at previous exposure to possible risk factors."
            },
            {
              "term": "Cohort study",
              "definition": "A longitudinal observational study that follows initially outcome-free exposed and unexposed groups over time to record subsequent health outcomes."
            },
            {
              "term": "Odds ratio",
              "definition": "The measure expressing the odds of previous exposure among cases relative to controls in a case-control study."
            }
          ],
          "examFocus": [
            "Classify study vignettes as case report, case series, cross-sectional, case-control or cohort design and justify the choice.",
            "Explain why observational findings (case series, cross-sectional, case-control) indicate association rather than causation.",
            "Compare case-control and cohort designs: rare diseases, cost and timing, multiple exposures versus multiple outcomes, and direction of inquiry."
          ],
          "ai": true
        },
        {
          "id": "spss-virtual-desktop",
          "title": "At-home access to SPSS via the UoW virtual desktop",
          "outcomes": [
            "Be able to connect to your UoW Labs Virtual Desktop (VM) from a home computer"
          ],
          "bigIdea": "SPSS can be used from home by connecting to a University-hosted virtual desktop through the VMware Horizon Client or a web browser, but work must always be saved to an external source because virtual desktops can be deleted on log off.",
          "keyKnowledge": [
            "First-time setup requires installing the VMware Horizon Client downloaded from https://vdiconnect.uow.edu.au for your operating system (Windows, MAC, iOS or Android), then clicking 'Agree & Install', 'Finish' and restarting the computer.",
            "In the installed client you click 'Add Server', enter vdiconnect.uow.edu.au, and log in with your UoW Network login and password, after which you are shown the list of VMs you have access to (e.g. UoW Labs Pool).",
            "The Horizon View Client is highly recommended over the browser because it gives a richer, smoother experience, allows USB devices to pass through, supports multiple screens and gives access to folders on the local machine.",
            "USB keys and USB hard drives must be enabled for security reasons: select 'Connect USB Device' on the top toolbar and check 'Automatically Connect at start-up' and 'Automatically Connect when Inserted'.",
            "'Disconnect' leaves the virtual desktop so that reconnecting returns you to where you left off, but pools may have policies that force log off after an idle period.",
            "Some virtual desktops are deleted as soon as you log off and a new one is created, depending on the pool and its policy, so you may not reconnect to the same desktop — always save work to an external source such as a USB drive or file share.",
            "A browser alternative exists at https://vdiconnect.uow.edu.au/portal/webclient/index.html#/ with a sidebar offering Send Ctrl-Alt-Delete, a File Transfer panel, Copy and Paste panel, Logout and other settings; support is available from the IMTS Help Desk on x3000."
          ],
          "keyTerms": [
            {
              "term": "Virtual Machine (VM) / Virtual Desktop",
              "definition": "A University-hosted desktop environment you connect to remotely, in this case accessed through the UoW Horizon View system."
            },
            {
              "term": "VMware Horizon Client",
              "definition": "The software installed on your local machine to connect to the virtual desktop; recommended over the browser client for a smoother experience, USB pass-through, multiple screens and local folder access."
            },
            {
              "term": "Connection Broker",
              "definition": "The server (vdiconnect.uow.edu.au) you add in the Horizon Client which presents you with the list of VMs you have been given access to."
            },
            {
              "term": "Pool",
              "definition": "A group of virtual desktops (e.g. UoW Labs Pool) whose policies determine behaviour such as idle timeouts and whether desktops are deleted on log off."
            },
            {
              "term": "USB pass-through",
              "definition": "A client-only feature letting USB keys and hard drives on your local machine be used inside the virtual machine; it must be explicitly enabled for security reasons."
            }
          ],
          "examFocus": [
            "Sequencing the first-time connection process (install client, restart, add server, login, select the UoW Labs Pool)",
            "Why work must always be saved to an external source (idle-timeout policies and deletion of desktops on log off)",
            "Differences between the Horizon Client and browser web client, and how USB pass-through is enabled"
          ],
          "ai": true
        },
        {
          "id": "chance-random-error",
          "title": "Chance (random error) as an alternative explanation",
          "outcomes": [
            "Explain how chance/random error produces spurious findings",
            "Describe methods to control random error"
          ],
          "bigIdea": "Chance is random error arising mainly from small, unrepresentative samples, controlled by increasing sample size and quantified with p-values and confidence intervals.",
          "keyKnowledge": [
            "Chance is random error: the observed error can be higher or lower than the truth, purely by chance.",
            "Small sample sizes are less likely to be representative of the source population.",
            "Association studies normally require around 300 samples.",
            "Random error can be reduced by increasing the sample size.",
            "Statistical control for chance is achieved using the p value and confidence intervals (CI).",
            "Illustration: the apparent relationship between daily salt intake and hypertension can appear or disappear by chance depending on the sample; plotting hypertension against an irrelevant variable like height demonstrates a chance (spurious) pattern."
          ],
          "keyTerms": [
            {
              "term": "Random error (chance)",
              "definition": "Deviation of an observed result from the truth due to chance alone, which can be in either direction."
            },
            {
              "term": "Confidence interval",
              "definition": "A range quantifying the uncertainty of an estimate; one of the tools used to assess the role of chance."
            }
          ],
          "examFocus": [
            "Distinguishing bias, confounding and chance as three alternative explanations for a study finding",
            "Why small samples are less representative and the ~300 sample rule for association studies",
            "Methods of controlling for chance: sample size, p value, CI"
          ],
          "ai": true
        },
        {
          "id": "boxplots-outliers",
          "title": "Boxplots and outliers",
          "outcomes": [
            "Produce a percentiles table in SPSS",
            "Find the interquartile range (IQR)",
            "Identify outliers and extreme values"
          ],
          "bigIdea": "Boxplots summarise groups of numerical data through their quartiles and the interquartile range, exposing variability and outliers within a distribution.",
          "keyKnowledge": [
            "Boxplots depict groups of numerical data through their quartiles.",
            "The interquartile range (IQR) is central to what a boxplot displays.",
            "Boxplots indicate variability outside the upper and lower quartiles.",
            "In SPSS, boxplots are generated via Analyse → Descriptive Statistics → Explore.",
            "In the Explore dialog, the variable of interest (e.g., weight, triglyceride, waist circumference) goes in the Dependent List, and a grouping variable (e.g., Gender) can go in the Factor List to compare groups.",
            "The Statistics options in Explore include Descriptives, Outliers and Percentiles, which produce a percentiles table and outlier identification.",
            "Values are considered outliers if they are beyond 2 standard deviations from the mean."
          ],
          "keyTerms": [
            {
              "term": "Boxplot",
              "definition": "A plot depicting groups of numerical data through their quartiles, indicating variability outside the upper and lower quartiles."
            },
            {
              "term": "Interquartile range (IQR)",
              "definition": "The range between the upper (75th percentile) and lower (25th percentile) quartiles; the span containing the middle 50% of the data, shown as the box in a boxplot."
            },
            {
              "term": "Quartile",
              "definition": "One of the three values (25th, 50th, 75th percentiles) that divide ordered data into four equal parts."
            },
            {
              "term": "Outlier",
              "definition": "A data value that lies an unusually far distance from the rest of the data; in these notes, any value beyond 2 standard deviations from the mean."
            },
            {
              "term": "Extreme value",
              "definition": "A data point lying an extreme distance from the bulk of the distribution, reported alongside outliers in the SPSS Explore output."
            },
            {
              "term": "Percentiles table",
              "definition": "An SPSS Explore output listing percentile values of a variable, used to derive quartiles and the IQR."
            }
          ],
          "examFocus": [
            "Interpreting a boxplot: locating quartiles, reading off the IQR, and identifying outliers and extreme values",
            "Applying the 2-standard-deviation rule for classifying outliers",
            "Describing the SPSS Explore workflow (Dependent List, Factor List, Statistics options) to generate boxplots, percentiles tables and outlier reports"
          ],
          "ai": true
        },
        {
          "id": "logistic-regression",
          "title": "Binary logistic regression",
          "outcomes": [
            "Know when to use simple logistic regression",
            "Understand what odds means and how to interpret it"
          ],
          "bigIdea": "Logistic regression extends linear regression to model and predict the probability of a binary (dichotomous) outcome from one or more independent variables.",
          "keyKnowledge": [
            "Logistic regression models the probability of classification issues with two possible outcomes, such as pass/fail, alive/dead or healthy/sick.",
            "It is an extension of linear regression for when the dependent variable is dichotomous (binary), and it is used to predict the odds.",
            "It is a predictive analysis between one dependent variable and one or more independent variables.",
            "Major assumptions: the dependent variable is dichotomous; there are no outliers; there are no high correlations among the predictors (checked with a correlation matrix among predictors).",
            "Worked example: 114 males (103 prefer black, 11 prefer red) and 746 females (341 prefer black, 405 prefer red); odds of preferring black for male vs female = (103/11)/(341/405) = 11.12, i.e. males have an 11 times higher chance of selecting black.",
            "Conversely, the odds of preferring red for male vs female = (11/103)/(405/341) = 0.09, so males have a 91% (1-0.09) lower odds of selecting red than females.",
            "Example reporting: participants with high CRP had greater adjusted odds of poor cognitive performance, Odds = 1.75, 95% CI (1.13-2.72), p < 0.01.",
            "Linear regression is used when the dependent variable is continuous; logistic regression is used when the dependent variable is binary with one or more predictors (categorical or continuous)."
          ],
          "keyTerms": [
            {
              "term": "Logistic regression",
              "definition": "A regression technique that models the probability of a binary outcome from one or more predictor variables."
            },
            {
              "term": "Dichotomous (binary) variable",
              "definition": "A variable with only two possible outcomes, e.g. presence vs absent, alive/dead, healthy/sick."
            },
            {
              "term": "Odds",
              "definition": "The effect of a risk factor on the likelihood that one outcome will occur; the ratio of the probability of an event to its complement."
            },
            {
              "term": "Predictor",
              "definition": "An independent variable used in regression to predict the dependent (outcome) variable."
            }
          ],
          "examFocus": [
            "Interpreting an odds value with its 95% CI and p-value (e.g. Odds = 1.75, 95% CI 1.13-2.72) after adjustment for covariates",
            "Choosing between linear and logistic regression based on whether the dependent variable is continuous or binary",
            "Stating and checking the assumptions of binary logistic regression, including no high inter-predictor correlations via a correlation matrix"
          ],
          "ai": true
        },
        {
          "id": "rct-designs",
          "title": "RCT design: randomization, blinding and trial types",
          "outcomes": [
            "Establish cause and effect relationships",
            "Determine which treatment is superior among competing treatment or control",
            "Avoid confounding effects"
          ],
          "bigIdea": "Random allocation to treatment and control groups, combined with blinding and controlled manipulation of the independent variable, allows researchers to infer cause and effect while minimizing bias, confounding and extraneous variation.",
          "keyKnowledge": [
            "RCT aims are to establish cause and effect relationships, determine which treatment is superior among competing treatments or control, avoid the confounding effect, and eliminate selection bias; subjects are allocated at random (by chance alone) and one intervention is a standard of comparison or control such as a placebo ('sugar pill') or no intervention.",
            "Randomization uses unpredictable assignment sequences: a simple coin flip, drawing lots from slips in a bowl, a random number table, or computer-generated sequences.",
            "In a double-blind RCT neither the participant nor the researcher knows which is treatment and which is placebo, nor the independent or dependent variable; a project manager manages the pills (A and B) and outcomes while doctors/researchers and patients remain unaware.",
            "A true experimental design has three essential criteria: randomization; manipulation (conscious control) of the independent variable so the researcher uses treatment to observe its effect on the dependent variable; and at least one experimental group and one control group, with control subjects similar in number and characteristics to control extraneous variables.",
            "Design types and expected statistics: post-test only control design is a two-arm parallel design with two randomly assigned groups (no pre-test) analysed with a t-test; factorial (multiple-arm) designs have multiple independent variables analysed with one-way or two-way ANOVA followed by post hoc analysis; pre-test and post-test designs (e.g., drug therapy on heart rate in diabetic patients) use mixed design one- or two-way repeated measures ANOVA.",
            "Extended-level designs add repeated measure factors (multiple observations, e.g., O1.0, O1.1, O1.2), analysed with two-way repeated measures ANOVA, post hoc analysis, or mixed design two-way repeated measures ANOVA; multi-arm trials can share a control group or have individual control groups instead of running separate trials.",
            "Crossover designs expose each subject to more than one treatment (with placebo and a washout period): as a within-subject, self-control design they give equal distribution of characteristics, reduce variation in data and are extremely powerful for detecting intervention effects, but the response in the second condition may be influenced by the first condition; they can only be used if the first intervention does not have a permanent effect.",
            "RCT advantages: good randomization reduces possible population bias and blinding is easier than in observational studies; results can be analysed with well-known statistical tools; participating populations are clearly identified; RCTs are useful with large sample sizes and clear measurable impacts. Disadvantages: expensive in time and money, and loss of subjects to follow-up attributed to treatment; RCTs are not useful for small samples, hard-to-measure or diverse results, or when a quick answer is needed."
          ],
          "keyTerms": [
            {
              "term": "Randomization",
              "definition": "Allocation of subjects to groups by chance alone using an unpredictable sequence (coin toss, drawing lots, random number table, computer generation), used to eliminate selection bias and avoid confounding."
            },
            {
              "term": "Placebo",
              "definition": "An inert intervention such as a 'sugar pill' (or no intervention at all) used as the standard of comparison or control in an RCT."
            },
            {
              "term": "Double blind RCT",
              "definition": "A trial in which both the participant and the researcher do not know which condition is treatment and which is placebo, nor the independent or dependent variables; a project manager typically manages allocation."
            },
            {
              "term": "True experimental design",
              "definition": "A design meeting three criteria: randomization, manipulation (conscious control) of the independent variable, and at least one experimental group plus one control group similar in number and characteristics."
            },
            {
              "term": "Factorial design",
              "definition": "A multiple-arm RCT that manipulates multiple independent variables, typically analysed with one-way or two-way ANOVA followed by post hoc tests."
            },
            {
              "term": "Crossover design",
              "definition": "A within-subject design in which each participant receives both treatment and placebo conditions in sequence (separated by a washout period), acting as their own control."
            }
          ],
          "examFocus": [
            "Matching each RCT design type (post-test only, factorial, pre-test/post-test, extended repeated-measure, crossover) to its expected statistical analysis (t-test, one-/two-way ANOVA, repeated measures or mixed ANOVA).",
            "The three essential criteria of a true experimental design and how randomization and double blinding control selection bias and confounding.",
            "Advantages and disadvantages of crossover versus parallel designs, and the conditions under which an RCT is or is not useful (sample size, measurability of impacts, time and cost)."
          ],
          "ai": true
        },
        {
          "id": "quasi-experimental-design",
          "title": "Quasi-experimental designs and analysis",
          "outcomes": [
            "auto-synced"
          ],
          "bigIdea": "Quasi-experimental designs retain manipulation of the independent variable to infer causality when randomization or a control group is impractical, exchanging internal validity for real-world feasibility.",
          "keyKnowledge": [
            "Quasi-experimental designs manipulate the IV to observe the DV but lack randomization or a control group.",
            "They are used to establish causality where subjects cannot be randomly assigned to groups or where no control group is possible, and are more practical/feasible, e.g., in nursing when a large sample size is unavailable.",
            "Strength: can study subjects in real-world settings and is easy to carry out; Weakness: no real equivalence of groups and no randomization.",
            "One-group pre-test/post-test design (O1 T O2): expected outcome is a difference, analysed with a paired t-test or repeated measures ANOVA.",
            "Quasi pre-test/post-test non-randomized design is the same as the true pre/post control group design except subjects are not randomized into groups; expected outcome is differences, analysed with mixed-design one-way or two-way repeated measures ANOVA followed by post hoc tests.",
            "Time series (one-way repeated measures) design measures treatment effects over a long period, normally with a small number of individuals, no parallel control group, each subject serving as their own control, one group exposed to more than one level of the IV, with test order randomly allocated per subject and each IV tested separately; analysed with one-way repeated measures ANOVA."
          ],
          "keyTerms": [
            {
              "term": "Quasi-experimental design",
              "definition": "A research design that manipulates the independent variable to observe the dependent variable but lacks randomization or a control group."
            },
            {
              "term": "One-group pre-test/post-test design",
              "definition": "A single non-randomized group measured before (O1) and after (O2) a treatment (T), analysed with a paired t-test or repeated measures ANOVA."
            },
            {
              "term": "Time series design",
              "definition": "A one-way repeated measures design tracking treatment effects over a long period with no parallel control group, where each subject serves as their own control and is exposed to more than one level of the IV."
            },
            {
              "term": "Non-randomization",
              "definition": "Assignment of subjects to conditions by a method other than chance, meaning groups may not be truly equivalent."
            }
          ],
          "examFocus": [
            "Distinguishing quasi-experimental from true experimental (RCT) designs in terms of randomization and control.",
            "Selecting the correct analysis for each quasi design: paired t-test, one-way repeated measures ANOVA, or mixed one-/two-way repeated measures ANOVA with post hoc tests.",
            "Weighing real-world feasibility against loss of internal validity from non-equivalent, non-randomized groups."
          ],
          "ai": true
        },
        {
          "id": "rat-obesity-project",
          "title": "Research Project 1: Exercise intervention in a rat obesity model",
          "outcomes": [
            "Investigate the effects of a high-fat diet on metabolic function",
            "Determine whether daily exercise can prevent the onset of obesity and related metabolic disorders"
          ],
          "bigIdea": "A three-group randomised animal experiment separates the effect of a high-fat diet from the protective effect of daily exercise on obesity and metabolic health.",
          "keyKnowledge": [
            "Thirty Sprague Dawley rats were randomly allocated into three groups (n=10 each) for a 12-week intervention: Control (low-fat diet), High-fat diet, and High-fat diet plus Exercise.",
            "The exercise group had daily access to a running wheel (Lafayette Instrument, USA) for 4 hours, while the other groups remained in their home cages throughout the study.",
            "Body weight was measured every three weeks; after 12 weeks animals were sacrificed and white adipose tissue (WAT), brown adipose tissue (BAT) and liver weights were recorded.",
            "Fasting plasma triglycerides (TG), total cholesterol (TC) and glucose were analysed using commercial enzymatic colorimetric kits (Wako Chemicals).",
            "Fasting insulin was measured with a Rat Ultra-Sensitive Insulin ELISA kit (Millipore), and insulin resistance was assessed via the homeostasis model assessment (HOMA-IR).",
            "The study addresses a major public health problem: global obesity rates have nearly tripled since 1975, with ~38% of adults (2.6 billion) overweight or obese and 14% (~988 million) obese by 2020.",
            "Exercise is already recognised as effective for managing overweight/obesity, with additional mental-health benefits, so the rat model tests whether it can prevent diet-induced obesity."
          ],
          "keyTerms": [
            {
              "term": "Sprague Dawley rat",
              "definition": "An outbred strain of laboratory rat widely used in physiology and metabolic research; the subject of this 12-week intervention."
            },
            {
              "term": "HOMA-IR",
              "definition": "Homeostasis Model Assessment of Insulin Resistance; an index calculated from fasting glucose and fasting insulin concentrations used to quantify insulin resistance."
            },
            {
              "term": "ELISA",
              "definition": "Enzyme-Linked Immunosorbent Assay; an antibody-based technique used here (Rat Ultra-Sensitive Insulin ELISA) to quantify fasting insulin concentrations."
            },
            {
              "term": "Enzymatic colorimetric assay",
              "definition": "A kit-based assay in which an enzyme-catalysed reaction produces a colour whose intensity is proportional to the analyte concentration; used for triglycerides, total cholesterol and glucose."
            },
            {
              "term": "WAT and BAT",
              "definition": "White adipose tissue (energy-storing fat) and brown adipose tissue (thermogenic fat); both were dissected and weighed as endpoint measures of adiposity."
            },
            {
              "term": "Random allocation",
              "definition": "Assigning subjects to study groups purely by chance so that known and unknown confounders are expected to balance across groups."
            }
          ],
          "examFocus": [
            "Choosing correct analyses for this design: one-way ANOVA for comparing 3 independent groups on endpoint measures, and repeated-measures/mixed ANOVA for body weight measured every 3 weeks; Kruskal-Wallis if assumptions fail.",
            "Mapping group contrasts to the study aims: Control vs High-fat diet tests the diet effect; High-fat diet vs High-fat diet + Exercise tests whether exercise prevents obesity.",
            "Describing the measurement pipeline (colorimetric kits, ELISA, HOMA-IR, tissue weights) and justifying why each outcome is relevant to metabolic function."
          ],
          "ai": true
        },
        {
          "id": "excel-pie-charts",
          "title": "Creating figures in Excel: pie charts",
          "outcomes": [
            "Using data provided to draw a pie chart in Excel",
            "Following the instructions to draw a figure",
            "Copy and paste the figure to a poster (Task 5)"
          ],
          "bigIdea": "Categorical percentage data can be turned into a clearly labelled pie chart in Excel and transferred into posters or documents for scientific presentation.",
          "keyKnowledge": [
            "Enter category labels in a 'Data name' column (e.g. Food Ingredients) and values in a 'Data' column as Percentages (%)",
            "Select both the Data names and the Data before inserting the chart",
            "Create the chart via the Insert tab, choosing Pie Charts",
            "Edit the Chart title by selecting it - e.g. change 'Percentages %' to 'Food ingredients %'",
            "Clicking the chart shows a '+' (Chart elements) button to switch on Chart title, Data label and Legend, whose locations can also be changed",
            "The Style sign changes the chart's colours and styles",
            "The finished pie chart can be copied and pasted into PowerPoint or Word files, e.g. for the poster in Task 5"
          ],
          "keyTerms": [
            {
              "term": "Pie chart",
              "definition": "A circular chart divided into slices showing each category's share of a whole, typically as percentages."
            },
            {
              "term": "Chart elements",
              "definition": "The '+' menu on a selected chart that lets you add or remove features such as the chart title, data labels and legend."
            },
            {
              "term": "Data label",
              "definition": "A label displayed on the chart showing the value (e.g. percentage) for each slice."
            },
            {
              "term": "Legend",
              "definition": "A key linking each slice's colour to its data category."
            }
          ],
          "examFocus": [
            "Justifying a pie chart as the appropriate figure for categorical percentage data",
            "The step-by-step workflow for building, titling and labelling a pie chart in Excel",
            "Preparing and transferring figures from Excel into posters, PowerPoint or Word"
          ],
          "ai": true
        },
        {
          "id": "excel-bar-graphs",
          "title": "Bar graphs with standard error bars in Excel",
          "outcomes": [
            "Use data provided to draw a bar graph in Excel",
            "Follow the instructions to draw a graph",
            "Copy and paste the figure to a poster (Task 5)"
          ],
          "bigIdea": "Summarising group data as a mean-plus-SEM bar graph in Excel produces a poster-ready figure that displays both the group effects and the precision of each mean.",
          "keyKnowledge": [
            "Set up the Excel table with three columns: Group name, Mean and SEM (standard error of mean).",
            "Select both the Group name and Mean columns, then use the Insert tab and choose Insert Column or Bar chart to draw the bar graph.",
            "Select and edit the Chart title so it reflects your study.",
            "Click the chart so a + (Chart Elements) sign appears, choose Axis Title from it, and edit the axis titles based on your study.",
            "Add Error Bars via + > Error Bars > More Options > Custom > Specify Value, selecting the SEM data from the table for both the Positive Error Value and the Negative Error Value, then click OK.",
            "Use the Style sign on the chart to change its colour or style.",
            "The finished bar graph can be copied and pasted into PowerPoint or Word files, including the poster in Task 5."
          ],
          "keyTerms": [
            {
              "term": "SEM (standard error of mean)",
              "definition": "A measure of how precisely the sample mean estimates the population mean; entered in the table and used as the error bar value for each group."
            },
            {
              "term": "Error bars",
              "definition": "Lines drawn on a graph showing the uncertainty around each plotted mean; here set to custom SEM values for positive and negative directions."
            },
            {
              "term": "Chart Elements",
              "definition": "The + sign that appears when a chart is clicked, providing options such as Axis Titles and Error Bars."
            },
            {
              "term": "Bar graph (column chart)",
              "definition": "The chart type inserted from the Insert tab to compare group means."
            }
          ],
          "examFocus": [
            "Reproducing the exact step sequence for adding custom SEM error bars in Excel.",
            "Identifying which data must be entered for both positive and negative error values (the SEM column).",
            "Understanding why means are displayed with SEM error bars on poster figures and how the figure is transferred into the poster."
          ],
          "ai": true
        }
      ],
      "questions": [
        {
          "id": "medi304-auto-mtxo7d8z-q0",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "According to the MEDI304 schedule, which topics are grouped under Learning module 3: Research outcome evaluation?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Hypotheses, p-values and Type I/II errors; parametric tests",
            "Internal and external validity, bias and confounders, chance, and evidence-based medicine (EBM)",
            "Research design, RCTs, sample size and effect size",
            "Data types, distributions and measurement reliability"
          ],
          "answer": 1,
          "explanation": "Learning module 3 (Weeks 11-12) covers internal/external validity, bias and confounders, chance, and EBM lectures. Hypotheses and parametric tests belong to Module 1, and research design/RCTs/sample size to Module 2."
        },
        {
          "id": "medi304-auto-mtxo7d8z-q1",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Which sequence correctly reflects the order of Learning module 1 (Data Analysis) lectures across Weeks 1-5 of MEDI304?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Hypotheses, p and errors, then data type and distribution, then parametric tests, then non-parametric tests",
            "Data type and distribution, then non-parametric tests, then hypotheses, then parametric tests",
            "Parametric tests, then data distributions, then hypotheses, then non-parametric tests",
            "Research design, then RCTs, then sample size, then EBM"
          ],
          "answer": 0,
          "explanation": "Week 1 covers hypotheses/p/errors, Week 2 data type and distribution, Weeks 3-4 parametric tests, and Week 5 non-parametric tests - all within Learning module 1."
        },
        {
          "id": "medi304-auto-mtxo7d8z-q2",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "Which lecture topics are scheduled in Week 10 of MEDI304, and to which learning module do they belong?",
          "type": "short",
          "marks": 3,
          "answer": "Week 10 covers RD5-RCT1 (46'), RD-RCT2 (28') and Sample size & effect size 1-3 (51'), all within Learning module 2: Research Design, following the mid-session recess (28/9-2/10).",
          "explanation": "The schedule places the RCT lectures and sample size/effect size material in Week 10, inside Learning module 2."
        },
        {
          "id": "medi304-auto-mtxo7d8z-q3",
          "topic": "research-design",
          "ai": true,
          "question": "What content is examined in the MEDI304 Practical Exam, and how long does it run?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Lectures 1-5, 1 hour",
            "Practical classes 2-7, 2 hours",
            "All lectures and computer labs, 3 hours",
            "Research design only, 30 minutes"
          ],
          "answer": 1,
          "explanation": "In the Week 8 exam week there is a 1-hour Mid-Session Exam on Lectures 1-5 and a separate 2-hour Practical Exam on practical classes 2-7."
        },
        {
          "id": "medi304-auto-mtxo7d8z-q4",
          "topic": "spss-essentials",
          "ai": true,
          "question": "According to the schedule, which computer lab/tutorial activities support the lecture content across the semester?",
          "type": "short",
          "marks": 4,
          "answer": "Introduction to SPSS; Data distribution; Correlation, Regression, T-test; One-way ANOVA, Repeated Measures ANOVA and two-way ANOVA; ANCOVA; Non-parametric tests (1) and (2); Mid-Session and Practical exams; Application of statistics into research; Presenting statistical outputs; Applying statistics into a project; Graphing and posters; and Research Design - all computer-lab sessions led by Dr Deng where specified.",
          "explanation": "The schedule pairs each lecture block with a corresponding practical computer-lab session, culminating in applied statistics and poster/graphing sessions in Weeks 11-13."
        },
        {
          "id": "medi304-auto-mtxo7d8z-q5",
          "topic": "communication",
          "ai": true,
          "question": "Name the two prescribed textbooks for MEDI304, including author and publication year.",
          "type": "short",
          "marks": 3,
          "answer": "Huang, XF (2022) Medical Research Design and Analysis (ISBN 978-0-6454760-0-2) and Huang, XF (2022) Medical Research Proposal, Paper and Thesis Writing (ISBN 978-0-6454760-2-6).",
          "explanation": "Both textbooks are by Xu-Feng Huang, 2022, and cover research design/analysis and proposal/paper/thesis writing respectively."
        },
        {
          "id": "medi304-auto-mtxo8qhj-q0",
          "topic": "parametric-tests",
          "ai": true,
          "question": "After running a one-way ANOVA on the Bipolar49 dataset, when should post hoc tests (e.g., Tukey's test) be performed and why?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Always, regardless of the ANOVA p-value, to describe the data",
            "Only if the ANOVA result is significant, to determine which specific groups differ from each other",
            "Before the ANOVA, to check the homogeneity of variances assumption",
            "Only if the ANOVA is non-significant, to rescue a Type II error"
          ],
          "answer": 1,
          "explanation": "The overall F-test only tells you a difference exists somewhere. Post hoc tests such as Tukey's are reported only when the ANOVA is significant (p < 0.05), to locate which pairwise group differences drive the effect."
        },
        {
          "id": "medi304-auto-mtxo8qhj-q1",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Which of the following is NOT an assumption of one-way ANOVA as stated in this lecture?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The dependent variable is continuous and the independent variable is categorical with three or more levels",
            "Data in each group are normally distributed",
            "There is homogeneity of variances (equal variances across groups)",
            "The same participants are measured repeatedly in each group"
          ],
          "answer": 3,
          "explanation": "One-way ANOVA assumes independent observations (between-subjects). Repeated measurement of the same participants across conditions defines a one-way repeated measures ANOVA, a within-subject design."
        },
        {
          "id": "medi304-auto-mtxo8qhj-q2",
          "topic": "parametric-tests",
          "ai": true,
          "question": "In the one-way repeated measures ANOVA of body fat percentage, why were pairwise comparisons adjusted with a Bonferroni correction?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "To increase the power of the overall F-test",
            "To control the inflated Type I error risk from performing multiple pairwise comparisons",
            "To test the homogeneity of variances assumption",
            "To convert the within-subject design into a between-subjects design"
          ],
          "answer": 1,
          "explanation": "Three pairwise comparisons (baseline vs 6 weeks, baseline vs 12 weeks, 6 vs 12 weeks) inflate the chance of a false positive; the Bonferroni adjustment (selected in EM Means > Compare main effects) keeps the familywise error rate controlled."
        },
        {
          "id": "medi304-auto-mtxo8qhj-q3",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Distinguish between a one-way ANOVA and a one-way repeated measures ANOVA, giving one example of each from the lecture.",
          "type": "short",
          "marks": 3,
          "answer": "A one-way ANOVA is a between-subjects test comparing the means of three or more separate groups on one factor - e.g., body weight across the four Bipolar49 subgroups (male/female bipolar vs male/female normal). A one-way repeated measures ANOVA is a within-subject design comparing the means of the same group measured three or more times - e.g., blood pressure or body fat percentage measured at baseline, 6 weeks and 12 weeks in the same subjects. In SPSS they use different pathways (Analyze > Compare Means > One-Way ANOVA vs GLM > Repeated Measures) and different post hoc approaches (Tukey vs Bonferroni pairwise comparisons)."
        },
        {
          "id": "medi304-auto-mtxo8qhj-q4",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A one-way ANOVA on age in the Bipolar49 subgroups is reported as F(3, 45) = 3.109, p = 0.036. Interpret this result fully, stating what the values 3 and 45 represent and what follow-up analysis is appropriate.",
          "type": "short",
          "marks": 3,
          "answer": "The 3 is the between-groups degrees of freedom (four subgroups minus 1) and 45 is the error (within-groups) degrees of freedom. Since p = 0.036 < 0.05, there is a statistically significant difference in mean age among the four subgroups. Because the ANOVA is significant, post hoc comparisons are appropriate: the Tukey HSD test showed the male bipolar group (M = 45.08, SD = 11.449) was significantly older than the female normal group (M = 32.67, SD = 4.979, p = 0.046)."
        },
        {
          "id": "medi304-auto-mtxo8qhj-q5",
          "topic": "parametric-tests",
          "ai": true,
          "question": "In the two-way ANOVA of waist circumference (gender × disease status), the results were: gender F(1, 45) = 13.04, p < 0.001; disease status F(1, 45) = 12.33, p = 0.001; interaction F(1, 45) = 0.635, p = 0.430. Interpret these findings and describe how the post hoc analysis should be reported.",
          "type": "short",
          "marks": 4,
          "answer": "There were significant main effects of gender (males had higher waist circumference than females, mean difference = 9.08 cm, SE 2.51, 95% CI [4.02, 14.14], p < 0.001) and of disease status (bipolar participants had higher waist circumference than controls, mean difference = 8.83 cm, 95% CI [3.77, 13.89], p < 0.001). The gender × disease interaction was not significant (p = 0.430), meaning the effect of disease status did not depend on gender (and vice versa). Because there was no interaction, post hoc analysis focused on the main effects only; had the interaction been significant, one could report, for example, that disease status had a larger effect on males than on females."
        },
        {
          "id": "medi304-auto-mtxo8qhj-q6",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Explain the purpose of ANCOVA, the role of a covariate, and how adjusting for a covariate can change conclusions. Illustrate with the exam-score/revision-time example and the Bipolar49 analysis of waist circumference by gender controlling for smoking, including the reported outcome F(1, 46) = 4.243, p = 0.045.",
          "type": "extended",
          "marks": 8,
          "answer": "ANCOVA (Analysis of Covariance) is used to examine differences between groups on a dependent variable while statistically controlling for one or more potential confounding variables (covariates). The covariate is a continuous variable that may influence the DV; by adjusting for it, the analysis estimates group differences with the covariate held constant. After adjustment, the group effect may remain significant or may disappear. Example: two classes with different average exam scores may show no difference once revision time is controlled, showing the original gap reflected study time rather than teaching method. In the Bipolar49 example, waist circumference was compared between males (102.80 ± 8.684 cm) and females (93.58 ± 10.766 cm) with smoking entered as a covariate (SPSS: Analyze > General Linear Model > Univariate; waist in Dependent Variable, Gender in Fixed Factor, smoking in Covariate; Bonferroni-adjusted main-effect comparisons requested). After controlling for smoking, the gender difference remained significant, F(1, 46) = 4.243, p = 0.045, with males and females showing adjusted means. A strong answer notes that adjusted means, not raw means, are compared, that a non-significant adjusted effect would imply the original difference was attributable to the covariate, and that the same logic applies to the Exercise44 task comparing week-12 leg press scores between genders adjusting for baseline leg press scores."
        },
        {
          "id": "medi304-auto-mtxo8qhj-q7",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A researcher investigates how diet type (protein vs fat) and exercise intensity (low vs high) affect weight loss (kg) over 12 weeks, with participants randomly allocated to each combination. (a) Name the appropriate analysis and state the three effects it tests, defining an interaction effect. (b) How would the analysis change if instead the same participants were measured at baseline, 6 weeks and 12 weeks? (c) How could the researcher control for a potential confounder such as baseline body weight?",
          "type": "extended",
          "marks": 10,
          "answer": "(a) A two-way ANOVA is appropriate: it determines differences in the dependent variable (weight loss) across groups defined by two independent variables (diet, 2 levels; exercise, 2 levels). It tests (1) the main effect of diet - does weight loss differ between diet types regardless of exercise intensity; (2) the main effect of exercise - does weight loss differ between intensities regardless of diet; and (3) the interaction effect - whether the effect of diet on weight loss depends on exercise intensity. An interaction means the effect of one factor differs across levels of the other; in SPSS (GLM > Univariate, both factors in Fixed Factors) it is read from the Tests of Between-Subjects Effects table and can be visualised with an interaction plot (e.g., one factor on the horizontal axis, the other in separate lines); if significant, simple main effects are examined, whereas non-significant interaction means post hoc focuses on main effects. (b) If the same participants were measured three times, a one-way repeated measures ANOVA (within-subject design) would be used: define a within-subject factor (e.g., 'Times' with 3 levels) in GLM > Repeated Measures, read F from the Tests of Within-Subjects Effects table, and follow up a significant result with Bonferroni-adjusted pairwise comparisons (e.g., baseline vs 6 weeks vs 12 weeks, as done for body fat percentage in Exercise44). (c) The confounder could be handled with ANCOVA by entering baseline body weight as a covariate alongside the fixed factors; the group effects are then tested after statistical adjustment, and they may remain significant or become non-significant, indicating the unadjusted difference was due to the covariate."
        },
        {
          "id": "medi304-auto-mtxo9a1b-q0",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "What is the primary purpose of a randomised controlled trial (RCT)?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "To describe the natural history of a disease",
            "To establish whether an intervention causes a particular outcome and which treatment is superior",
            "To measure the prevalence of a condition in a population",
            "To examine associations between two naturally occurring variables"
          ],
          "answer": 1,
          "explanation": "An RCT is designed to establish whether an intervention causes a particular outcome and to determine which treatment is superior."
        },
        {
          "id": "medi304-auto-mtxo9a1b-q1",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "How does randomisation strengthen an RCT?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "It ensures the sample size is large enough for adequate power",
            "It guarantees that participants adhere to the protocol",
            "It assigns participants to groups by chance, reducing selection bias and potential confounding",
            "It blinds participants to their treatment allocation"
          ],
          "answer": 2,
          "explanation": "Randomisation assigns participants to different groups by chance, which helps reduce selection bias and potential confounding effects."
        },
        {
          "id": "medi304-auto-mtxo9a1b-q2",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "In a double-blind RCT, whose bias is reduced by the blinding?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Only the participants'",
            "Only the researchers'",
            "Both participants and researchers, as both are unaware of treatment allocation",
            "Neither, since blinding only affects data recording"
          ],
          "answer": 2,
          "explanation": "In a double-blind RCT, both participants and researchers are unaware of treatment allocation, helping reduce participant and researcher bias."
        },
        {
          "id": "medi304-auto-mtxo9a1b-q3",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "Outline the correct sequence of steps in conducting an RCT, from identifying patients to treatment allocation.",
          "type": "short",
          "marks": 3,
          "answer": "First, eligible patients are identified according to inclusion criteria. Informed consent is then obtained from those patients. Participants are subsequently randomised and allocated to either the treatment or control group.",
          "explanation": "The trial proceeds: identify eligible patients, obtain informed consent, randomise, then allocate to treatment or control groups."
        },
        {
          "id": "medi304-auto-mtxo9a1b-q4",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "Explain the difference between intention-to-treat and per-protocol analysis, and why baseline comparison of characteristics such as age and BMI is reported in an RCT.",
          "type": "short",
          "marks": 4,
          "answer": "Intention-to-treat analysis includes every participant in the group to which they were randomised, regardless of adherence, preserving the benefits of randomisation. Per-protocol analysis includes only participants who adhered to the study protocol. Baseline comparisons of characteristics such as age and BMI demonstrate whether randomisation successfully created comparable groups, supporting the internal validity of the trial.",
          "explanation": "ITT analyses participants as randomised; per-protocol analyses only adherent participants. Baseline characteristic comparisons show whether randomisation produced comparable groups."
        },
        {
          "id": "medi304-auto-mtxo9a1b-q5",
          "topic": "research-design",
          "ai": true,
          "question": "Which of the following is required for a TRUE experimental design?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Randomisation, deliberate manipulation of the independent variable, and at least one experimental group and one control group",
            "Random sampling from the population and a large sample size",
            "Blinding of all assessors and use of a placebo",
            "A repeated-measures design with a washout period"
          ],
          "answer": 0,
          "explanation": "A true experimental design requires randomisation, deliberate manipulation of the independent variable, and at least one experimental group and one control group."
        },
        {
          "id": "medi304-auto-mtxo9a1b-q6",
          "topic": "research-design",
          "ai": true,
          "question": "Compare a factorial design with a two-arm post-test-only design, and explain what a washout period achieves in a crossover study.",
          "type": "short",
          "marks": 4,
          "answer": "A factorial design examines two or more independent variables (factors) within the same study, allowing researchers to test the main effect of each factor and whether the factors interact. A two-arm post-test-only design usually compares two groups after one intervention or exposure. In a crossover study, a washout period helps reduce the carryover effect, where the effect of the first intervention persists into the second condition; this is particularly useful when the first intervention has no permanent effect.",
          "explanation": "Factorial designs test main effects and interactions of multiple factors; post-test-only designs compare groups after one exposure. Washout periods minimise carryover between conditions in crossover designs."
        },
        {
          "id": "medi304-auto-mtxo9a1b-q7",
          "topic": "research-design",
          "ai": true,
          "question": "A researcher wants to evaluate a new exercise programme but cannot randomly assign participants and cannot include a control group. Discuss whether a quasi-experimental design is appropriate, its defining features, and its practical advantages.",
          "type": "extended",
          "marks": 8,
          "answer": "A quasi-experimental design would be appropriate here. A quasi-experimental study manipulates an independent variable to examine its effect on a dependent variable, but lacks randomisation, a control group, or both, exactly matching the researcher's constraints. Quasi-experimental designs are more practical when participants cannot be randomly assigned or when including a control group is not feasible. They are relatively practical and can be conducted in real-world settings, including situations involving small samples. However, because the design lacks randomisation, the researcher should be cautious about causal claims, since selection bias and confounding cannot be ruled out as readily as in a true experiment.",
          "explanation": "Quasi-experimental designs manipulate the IV but lack randomisation and/or a control group; they suit real-world settings, small samples, and situations where random assignment or control groups are infeasible."
        },
        {
          "id": "medi304-auto-mtxo9a1b-q8",
          "topic": "parametric-tests",
          "ai": true,
          "question": "The same participants are measured before and after a treatment. Which test is appropriate for examining the difference between the two measurements?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Independent samples t-test",
            "Chi-square test",
            "Paired t-test",
            "One-way ANOVA"
          ],
          "answer": 2,
          "explanation": "Because the same participants provide two related measurements (before and after treatment), a paired t-test can be used to examine the difference between them."
        },
        {
          "id": "medi304-auto-mtxoagzw-q0",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Which of the following best describes a confounding variable?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "A variable caused by the exposure that transmits its effect to the outcome",
            "A variable associated with both the exposure and the outcome, but not caused by the exposure",
            "A natural change in participants over the course of a study",
            "A variable that makes the remaining sample less representative of the original population"
          ],
          "answer": 1,
          "explanation": "A confounder is associated with both the exposure and the outcome, making their relationship potentially misleading, and it is not caused by the exposure. Common examples include age, income, gender and ethnic background."
        },
        {
          "id": "medi304-auto-mtxoagzw-q1",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "A new fitness programme runs over 12 months and teenage participants improve. A reviewer argues the improvement may simply reflect normal growth and development. Which threat to internal validity is being described?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "History",
            "Maturation",
            "Attrition",
            "Measurement bias"
          ],
          "answer": 1,
          "explanation": "Maturation occurs when participants naturally change over time, making it difficult to separate the intervention effect from normal development. History, by contrast, refers to external events during the study that are not part of the intervention."
        },
        {
          "id": "medi304-auto-mtxoagzw-q2",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Which design feature specifically creates comparable groups and thereby reduces selection bias and confounding?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Blinding the outcome assessors",
            "Increasing the sample size",
            "Random assignment of participants",
            "Reporting all measured outcomes"
          ],
          "answer": 2,
          "explanation": "Random assignment helps create comparable groups and reduces selection bias and confounding. Blinding and an appropriate control group can also improve internal validity, while increasing sample size reduces random error rather than bias."
        },
        {
          "id": "medi304-auto-mtxoagzw-q3",
          "topic": "measurements",
          "ai": true,
          "question": "A questionnaire intended to measure anxiety in fact captures depressive symptoms more strongly than anxious ones. In measurement terms, this questionnaire lacks:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Internal validity",
            "Construct validity",
            "External validity",
            "Reliability"
          ],
          "answer": 1,
          "explanation": "Construct validity assesses whether a test accurately measures its intended theoretical concept rather than a different or closely related construct."
        },
        {
          "id": "medi304-auto-mtxoagzw-q4",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Distinguish between internal validity and external validity, and give one strategy that strengthens each.",
          "type": "short",
          "marks": 4,
          "answer": "Internal validity concerns whether a study provides a credible cause-and-effect conclusion within the population studied; it is high when alternative explanations such as bias, confounding and systematic measurement error are adequately controlled. It is strengthened by random assignment, blinding and an appropriate control group. External validity concerns the extent to which findings can be applied to other people, populations, settings or conditions (generalisability). It is strengthened by representative sampling, appropriate inclusion and exclusion criteria, and replication across different populations and settings.",
          "explanation": "Directly tests the internal vs external validity distinction drawn in the quiz."
        },
        {
          "id": "medi304-auto-mtxoagzw-q5",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Explain how participant attrition (loss to follow-up) can threaten a study's conclusions.",
          "type": "short",
          "marks": 4,
          "answer": "Participants who leave a study may have different characteristics or experiences from those who continue. The remaining sample is therefore less representative of the original group or target population, which threatens external validity/generalisability and can distort the observed effect if drop-out is systematically related to the intervention or outcome.",
          "explanation": "Attrition undermines representativeness of the analysed sample, primarily threatening generalisability."
        },
        {
          "id": "medi304-auto-mtxoagzw-q6",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Explain why subjective outcome measures may exaggerate an observed treatment effect, and state how this relates to measurement bias.",
          "type": "short",
          "marks": 4,
          "answer": "Measurement bias can occur when assessments lack objectivity. Subjective outcome measures are open to influence in scoring, so they may exaggerate the observed effect, making it difficult to attribute the effect to the intervention itself. Using more objective assessments and blinding the assessor reduce this threat and improve internal validity.",
          "explanation": "Links the quiz points on measurement bias, objectivity and exaggeration of effect."
        },
        {
          "id": "medi304-auto-mtxoagzw-q7",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "An uncontrolled pre-post study evaluates a new teaching intervention across one academic year. Learning is scored subjectively by the tutors who deliver the intervention, and 20% of students leave the course before follow-up. (a) Identify and explain three threats to the internal validity of this study. (b) Describe design features that would address each threat. (c) Discuss what evidence would be needed before the findings could be generalised to other institutions.",
          "type": "extended",
          "marks": 10,
          "answer": "(a) History: external events during the year (e.g. curriculum or policy changes) are not part of the intervention but may influence the outcome. Maturation: students naturally develop over the academic year, so normal change is hard to separate from any intervention effect. Measurement bias: subjective assessments lacking objectivity, especially by unblinded deliverers, may exaggerate the observed effect. Attrition compounds the problem because those who leave may differ from those who remain. (b) Random assignment to a comparable control group reduces selection bias and confounding; an appropriate control group accounts for history and maturation; blinding of outcome assessors and/or objective outcome measures reduce measurement bias; reporting all outcomes prevents outcome-reporting bias. (c) External validity concerns whether findings apply to other people, populations, settings or conditions; it would be supported by representative sampling, appropriate inclusion and exclusion criteria, and replication of the findings across different populations and settings, noting that non-representative completers after attrition weaken generalisability.",
          "explanation": "Synthesis question requiring candidates to apply history, maturation, measurement bias, attrition, random assignment, blinding, control groups and external validity concepts from the quiz to a scenario."
        },
        {
          "id": "medi304-auto-mtxobbaf-q0",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Which of the following best describes the three essential components integrated in evidence-based medicine?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Best available research evidence, the clinician's expertise and the individual patient's values",
            "Clinical experience, institutional protocols and cost-effectiveness analyses",
            "Systematic reviews, meta-analyses and randomised controlled trials",
            "Patient preference, mechanistic plausibility and expert consensus"
          ],
          "answer": 0,
          "explanation": "EBM integrates the best available research evidence, the clinician's expertise and the individual patient's values; none of these alone is sufficient."
        },
        {
          "id": "medi304-auto-mtxobbaf-q1",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "When assessing the effects of a treatment, which of the following study types are generally LEAST likely to mislead?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Case-control and cross-sectional studies",
            "Case reports and expert opinion",
            "Cohort and mechanistic studies",
            "Systematic reviews, meta-analyses and RCTs"
          ],
          "answer": 3,
          "explanation": "Systematic reviews, meta-analyses and RCTs are generally less likely to mislead for treatment effects, although EBM may also consider cohort, case-control and cross-sectional designs."
        },
        {
          "id": "medi304-auto-mtxobbaf-q2",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "List the five steps of practising evidence-based medicine in the correct order.",
          "type": "short",
          "marks": 3,
          "answer": "1) Assess the problem; 2) Ask the question; 3) Acquire the evidence; 4) Appraise the evidence; 5) Apply the evidence in practice.",
          "explanation": "The five-step model moves from identifying the clinical problem, through formulating a focused question, finding and critically appraising evidence, to applying it in practice."
        },
        {
          "id": "medi304-auto-mtxobbaf-q3",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "In the PICO framework for formulating clinical questions, what do the letters stand for?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Population, Intervention, Cohort, Observation",
            "Patient, Intervention, Comparison, Outcome",
            "Problem, Investigation, Cause, Outcome",
            "Prevalence, Incidence, Comparison, Observation"
          ],
          "answer": 1,
          "explanation": "PICO stands for Patient, Intervention, Comparison and Outcome, and provides a structure for formulating a focused and testable clinical question."
        },
        {
          "id": "medi304-auto-mtxobbaf-q4",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "When appraising a piece of evidence, which three aspects should be examined?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Statistical significance, p-value and confidence level",
            "Funding source, journal impact factor and sample size",
            "Whether the study is valid, the size of the observed effect and the precision of the estimate",
            "Study duration, dropout rate and ethical approval"
          ],
          "answer": 2,
          "explanation": "Evidence appraisal examines validity (is the study trustworthy?), the size of the observed effect, and the precision of the estimate."
        },
        {
          "id": "medi304-auto-mtxobbaf-q5",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "What is meant by the precision of an effect estimate, and which two factors influence it?",
          "type": "short",
          "marks": 3,
          "answer": "Precision concerns how accurately an effect has been estimated. It is influenced by sample size and measurement accuracy — larger samples and more accurate measurements give more precise estimates.",
          "explanation": "Precision reflects the accuracy of the effect estimate; it improves with larger sample sizes and better measurement accuracy."
        },
        {
          "id": "medi304-auto-mtxobbaf-q6",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "A colleague argues that a drug must be effective because laboratory studies show a clear biological mechanism. Explain why mechanistic findings alone are insufficient to conclude clinical effectiveness.",
          "type": "short",
          "marks": 3,
          "answer": "Mechanistic findings may support further research, but they do not by themselves demonstrate that an intervention is effective in clinical practice. Demonstrating effectiveness requires valid clinical evidence, such as RCTs or systematic reviews, appraised for validity, effect size and precision.",
          "explanation": "Biological plausibility is hypothesis-generating; clinical effectiveness must be demonstrated with appropriate study designs rather than mechanism alone."
        },
        {
          "id": "medi304-auto-mtxobbaf-q7",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "'An experienced clinician does not need research evidence to make sound treatment decisions.' Critically discuss this statement using the principles of evidence-based medicine.",
          "type": "extended",
          "marks": 8,
          "answer": "The statement is inconsistent with EBM, which holds that clinical experience alone is insufficient and must be integrated with valid research evidence and the individual patient's values. Clinical judgement accumulated through experience is vulnerable to bias, rare outcome misjudgement and changing evidence, so decisions should be tested against the best available evidence. Ideally this comes from systematic reviews, meta-analyses and RCTs, which are generally less likely to mislead when assessing treatment effects, though cohort, case-control and cross-sectional studies may also contribute. The clinician should follow the five-step process: assess the problem, ask a focused PICO question, acquire the evidence, appraise it for validity, effect size and precision (the latter influenced by sample size and measurement accuracy), and then apply it while incorporating patient values. Mechanistic plausibility alone cannot justify effectiveness claims. Thus experience remains essential for interpreting and contextualising evidence, but sound decisions require the integration of all three EBM components.",
          "explanation": "A strong answer states the three EBM components, rejects experience-only practice, cites the evidence hierarchy, the five steps, PICO, and the appraisal criteria of validity, effect size and precision."
        },
        {
          "id": "medi304-auto-mtxocn9h-q0",
          "topic": "observational-study-designs",
          "ai": true,
          "question": "A clinician reports five patients who developed an unusual rash after receiving the same new medication. No treatment was allocated by protocol and there was no control group. What study design is this?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Case report",
            "Case series",
            "Cross-sectional study",
            "Cohort study"
          ],
          "answer": 1,
          "explanation": "A case series describes multiple patients with a similar diagnosis, procedure or unusual finding; it is descriptive and observational, with no experimental allocation."
        },
        {
          "id": "medi304-auto-mtxocn9h-q1",
          "topic": "observational-study-designs",
          "ai": true,
          "question": "Researchers measure the weight and height of a sample of adults on a single day to estimate the prevalence of obesity. What type of study is this?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Cohort study",
            "Cross-sectional study",
            "Case-control study",
            "Randomised controlled trial"
          ],
          "answer": 1,
          "explanation": "A cross-sectional study collects and analyses data at a specific point in time; it is neither longitudinal nor experimental."
        },
        {
          "id": "medi304-auto-mtxocn9h-q2",
          "topic": "observational-study-designs",
          "ai": true,
          "question": "In a case-control study of a rare cancer, which statistic expresses the odds of previous exposure among cases relative to controls?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Odds ratio",
            "Correlation coefficient (r)",
            "Mean difference",
            "Number needed to treat"
          ],
          "answer": 0,
          "explanation": "Case-control studies are designed to estimate the odds of previous exposure among cases relative to controls, commonly expressed as an odds ratio."
        },
        {
          "id": "medi304-auto-mtxocn9h-q3",
          "topic": "observational-study-designs",
          "ai": true,
          "question": "Why is BMI used rather than body weight alone when classifying obesity?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "It directly measures body-fat percentage",
            "It adjusts body weight for height",
            "It measures weight change over time",
            "It compares cases with controls"
          ],
          "answer": 1,
          "explanation": "People of different heights may have different body weights without different levels of obesity; BMI considers both weight and height (weight in kg divided by height in metres squared)."
        },
        {
          "id": "medi304-auto-mtxocn9h-q4",
          "topic": "observational-study-designs",
          "ai": true,
          "question": "Explain why treatment effects observed in a case series cannot be interpreted as causal.",
          "type": "short",
          "marks": 3,
          "answer": "In a case series, treatment is not assigned using an experimental protocol and there is generally no control group, so there is no adequate comparison against which to judge the treatment's effect. The design is purely descriptive and observational. Case-series findings can generate new hypotheses, but these must be investigated using stronger research designs, including randomised controlled trials, before causal claims can be made.",
          "explanation": "Key points: no experimental allocation, generally no control group, descriptive only, hypothesis-generating role."
        },
        {
          "id": "medi304-auto-mtxocn9h-q5",
          "topic": "observational-study-designs",
          "ai": true,
          "question": "Give two reasons why case-control studies are well suited to studying rare diseases.",
          "type": "short",
          "marks": 3,
          "answer": "First, case-control studies can investigate rare diseases using relatively small samples, since cases are selected on the basis of already having the outcome. Second, because participants are not followed forward over time, they are less time-consuming and less expensive than many cohort studies.",
          "explanation": "Both advantages—small samples and reduced time/cost relative to cohort studies—are stated in the quiz explanations."
        },
        {
          "id": "medi304-auto-mtxocn9h-q6",
          "topic": "observational-study-designs",
          "ai": true,
          "question": "Contrast what a case-control study and a cohort study can each investigate in terms of exposures and outcomes.",
          "type": "short",
          "marks": 4,
          "answer": "A case-control study starts from a single disease or outcome and looks backwards, so it can investigate several possible previous exposures associated with that one disease. A cohort study starts from an exposure and follows participants forward over time, so it can examine multiple outcomes arising from that exposure. In other words, case-control studies suit 'many exposures, one outcome' questions, while cohort studies suit 'one exposure, many outcomes' questions.",
          "explanation": "The contrast is one of direction of inquiry: backwards from outcome vs forwards from exposure."
        },
        {
          "id": "medi304-auto-mtxocn9h-q7",
          "topic": "observational-study-designs",
          "ai": true,
          "question": "Describe the key features of a cohort study design and explain what it can and cannot establish compared with a case-control study.",
          "type": "extended",
          "marks": 9,
          "answer": "A cohort study is longitudinal and observational. Participants are initially free from the disease outcome under study. Researchers first assess exposure to a possible risk factor, then follow exposed and unexposed groups over time, recording the occurrence of the disease or other health outcomes. This forward direction means a cohort study can examine multiple outcomes arising from one exposure, and the temporal sequence of exposure before outcome can be observed. In contrast, a case-control study starts with cases who have the disease and controls who do not, looks back at previous exposure, and estimates the odds of exposure among cases relative to controls as an odds ratio; it can investigate several previous exposures for one disease and can study rare diseases using relatively small, quicker, cheaper samples. However, cohort and case-control studies are both observational, and an observed association between exposure and outcome does not necessarily mean that one caused the other; establishing causation requires stronger designs such as randomised controlled trials.",
          "explanation": "Marks for: longitudinal/outcome-free start (2), exposure assessment and follow-up of exposed vs unexposed (2), multiple outcomes per exposure (1), contrast with case-control direction and odds ratio (2), association vs causation caveat (2)."
        },
        {
          "id": "medi304-auto-mtxodivb-q0",
          "topic": "communication",
          "ai": true,
          "question": "Which complete set of sections is required in the MEDI304 research poster?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Abstract, Methods, Results only",
            "Title, Introduction, Aims, Methods, Results, Discussion, Conclusion",
            "Introduction, Data, Analysis, References",
            "Hypothesis, Statistics, Limitations, Acknowledgements"
          ],
          "answer": 1,
          "explanation": "The brief explicitly requires Title, Introduction, Aims, Methods, Results, Discussion and Conclusion, with references listed."
        },
        {
          "id": "medi304-auto-mtxodivb-q1",
          "topic": "communication",
          "ai": true,
          "question": "According to the poster guidelines, how should the results section be presented?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "As text only, to keep the poster uncluttered",
            "As graphs and tables only, with no text",
            "As clear, concise text plus graphs and/or tables, with statistical outcomes clearly marked",
            "As raw SPSS output pasted directly onto the poster"
          ],
          "answer": 2,
          "explanation": "The brief states results should be presented in not only text but also graphs and tables, with statistical analysis outcomes presented and marked clearly."
        },
        {
          "id": "medi304-auto-mtxodivb-q2",
          "topic": "communication",
          "ai": true,
          "question": "Which citation style does the brief specify for references cited in the poster?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Harvard author-date system",
            "Numbered reference system",
            "Footnotes at the bottom of the poster",
            "No referencing is required on the poster"
          ],
          "answer": 1,
          "explanation": "The instructions state references should be cited and listed using the number reference system in the poster."
        },
        {
          "id": "medi304-auto-mtxodivb-q3",
          "topic": "communication",
          "ai": true,
          "question": "State three features that the introduction of a scientific research poster should contain according to the brief.",
          "type": "short",
          "marks": 3,
          "answer": "The introduction should (1) provide background to the study, (2) give a clear rationale for the research, and (3) reference appropriate scholarly literature.",
          "explanation": "These three requirements are stated explicitly in the poster requirements."
        },
        {
          "id": "medi304-auto-mtxodivb-q4",
          "topic": "communication",
          "ai": true,
          "question": "Explain the distinct roles of the discussion and conclusion sections of the research poster.",
          "type": "short",
          "marks": 4,
          "answer": "The discussion interprets the results in line with the current literature, connecting the group's statistical findings to published scholarly work. The conclusion must be concise and correct, briefly summarising what the analysis showed and what it means. A strong conclusion does not introduce new data or overstate findings beyond what the results support.",
          "explanation": "The brief requires results to be interpreted and discussed against current literature, with a concise and correct conclusion."
        },
        {
          "id": "medi304-auto-mtxodivb-q5",
          "topic": "communication",
          "ai": true,
          "question": "Why might a flow chart be an appropriate addition to the methods section of a research poster?",
          "type": "short",
          "marks": 3,
          "answer": "The methods must be clearly and succinctly described, and a flow chart is an efficient way to convey the study design, participant flow or analytical steps visually. On a poster, where space and reader attention are limited, a flow chart communicates procedure faster than dense text.",
          "explanation": "The brief notes methods should be clearly and succinctly described and that a flow chart may be appropriate."
        },
        {
          "id": "medi304-auto-mtxodivb-q6",
          "topic": "communication",
          "ai": true,
          "question": "Describe the expected structure, timing and participation requirements of the Week 13 oral presentation.",
          "type": "short",
          "marks": 3,
          "answer": "Each group has 10 minutes in total: 6-8 minutes of student presentation followed by 2 minutes of question time. All students in the group are expected to present a part of the presentation, not just one nominated speaker.",
          "explanation": "These logistics are specified in the oral presentation section of the brief."
        },
        {
          "id": "medi304-auto-mtxodivb-q7",
          "topic": "communication",
          "ai": true,
          "question": "Your group has completed analysis of your chosen MEDI304 dataset. Outline how you would construct your A0 research poster, covering the required sections, presentation of statistical results, referencing, and layout/readability considerations.",
          "type": "extended",
          "marks": 8,
          "answer": "The poster must be A0 size (84.1 x 118.9 cm, landscape or portrait) and include: Title, Introduction, Aims, Methods, Results, Discussion, Conclusion and References. The Introduction should give background and a clear rationale supported by scholarly literature, leading to specific aims. The Methods should be clear and succinct; a flow chart may be used to convey the study design and analysis steps. The Results must go beyond text alone: key statistical outcomes should be presented and clearly marked using graphs and/or tables (e.g., labelled figures with test statistics, p-values and effect measures). In the Discussion, results should be interpreted in line with current literature, acknowledging how findings compare with published work, and the Conclusion should be concise and correct. References should be cited and listed using the numbered reference system. Layout must be clear and easy to read, avoiding technical jargon and excessive abbreviations so viewers can follow the story at a glance. Finally, the poster is submitted as a single PDF via Moodle by the deadline (27/10/2025, 11:59 pm), with only one group member uploading.",
          "explanation": "A strong answer integrates all poster requirements: structure, visual presentation of results, scholarly interpretation, numbered referencing, readability principles and submission logistics."
        },
        {
          "id": "medi304-auto-mtxoejam-q0",
          "topic": "spss-virtual-desktop",
          "ai": true,
          "question": "Which URL do you use to download the VMware Horizon Client and to connect to the UoW virtual desktop?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "https://uowlabs.uow.edu.au",
            "https://vdiconnect.uow.edu.au",
            "https://spss.uow.edu.au",
            "https://horizon.uow.edu.au/downloads"
          ],
          "answer": 1,
          "explanation": "The document states that https://vdiconnect.uow.edu.au is used both to download/install the Horizon Client and as the browser-based web client address."
        },
        {
          "id": "medi304-auto-mtxoejam-q1",
          "topic": "spss-virtual-desktop",
          "ai": true,
          "question": "Why might you not be connected to the same virtual desktop when you reconnect after logging off?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The system randomly assigns desktops each session for fairness",
            "Your profile is deleted every time you disconnect",
            "Some virtual desktops are deleted as soon as you log off and a new one is created, depending on the pool's policy",
            "You must re-install the Horizon Client after every log off"
          ],
          "answer": 2,
          "explanation": "The document notes that some virtual desktops get deleted as soon as you log off and a new one gets created, depending on the pool and the policy applied to it — hence always save your work externally."
        },
        {
          "id": "medi304-auto-mtxoejam-q2",
          "topic": "spss-virtual-desktop",
          "ai": true,
          "question": "Why can the very first launch of your virtual desktop take a while to load?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The software needs to be installed each time you connect",
            "It needs to create a profile for you; once created, launching is a lot quicker",
            "The UoW Labs Pool is limited to one user at a time",
            "USB pass-through must be enabled before the desktop can load"
          ],
          "answer": 1,
          "explanation": "The guide states the first load may take a while because a profile needs to be created for you; subsequent launches will be much quicker."
        },
        {
          "id": "medi304-auto-mtxoejam-q3",
          "topic": "spss-virtual-desktop",
          "ai": true,
          "question": "Where should you go for help if you have questions about connecting to the virtual desktop?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The SPSS manufacturer's website",
            "Your course coordinator's email",
            "The IMTS Help Desk on x3000",
            "The UoW Labs Pool settings menu"
          ],
          "answer": 2,
          "explanation": "The final page of the document directs any questions or support needs to the IMTS Help Desk on extension x3000."
        },
        {
          "id": "medi304-auto-mtxoejam-q4",
          "topic": "spss-virtual-desktop",
          "ai": true,
          "question": "Explain the difference between 'Disconnect' and 'Disconnect & Log Off' when ending a virtual desktop session, and state one implication for saving your work.",
          "type": "short",
          "marks": 3,
          "answer": "Disconnect leaves the virtual desktop session in place so that when you reconnect you return to where you left off; Disconnect & Log Off ends the session. However, pools can have policies that force you to log off after an idle period, and some desktops are deleted on log off with a new one created, so you may not return to the same desktop. Therefore you should always save your work, preferably to an external source such as a USB drive or file share.",
          "explanation": "Draws directly on the 'Things to Know' section of the document."
        },
        {
          "id": "medi304-auto-mtxoejam-q5",
          "topic": "spss-virtual-desktop",
          "ai": true,
          "question": "State two advantages of using the VMware Horizon Client rather than a web browser to access your virtual desktop, and describe how USB devices are enabled.",
          "type": "short",
          "marks": 3,
          "answer": "The Horizon View Client gives a rich, smoother experience and allows USB devices to pass through, along with multiple screens and access to folders on the local machine. To enable USB keys/hard drives, select 'Connect USB Device' on the top toolbar and check 'Automatically Connect at start-up' and 'Automatically Connect when Inserted' — USB pass-through is not enabled by default for security reasons.",
          "explanation": "The client-only benefits and the USB enablement steps are both stated explicitly in the document."
        },
        {
          "id": "medi304-auto-mtxoejam-q6",
          "topic": "spss-virtual-desktop",
          "ai": true,
          "question": "A classmate wants to use SPSS at home on their Windows laptop and has never connected before. Describe the full first-time process for connecting to the UoW Labs Virtual Desktop, including two cautions they should be aware of.",
          "type": "extended",
          "marks": 8,
          "answer": "First-time process: (1) Open a browser (e.g. Chrome or Internet Explorer) and go to https://vdiconnect.uow.edu.au; (2) Select 'Install VMware Horizon Client', choose the correct operating system (Windows) and click 'Go to Downloads', then 'Download', noting the download folder and path; (3) Save the file, run it when complete, click 'Yes' to install, then 'Agree & Install', 'Finish', and 'Restart Now' to complete the installation; (4) After restarting, double-click the Horizon desktop icon, click 'Add Server' and enter vdiconnect.uow.edu.au, then 'Connect'; (5) Log in with the UoW Network login and password; (6) Select the VM from the list (e.g. UoW Labs Pool) and double-click to launch — the first load may take a while because a profile must be created, after which launches are much quicker. Cautions: (a) Always save work to an external source such as a USB drive or file share, because pool policies can force log off after idle periods and some virtual desktops are deleted on log off, so you may not reconnect to the same desktop; (b) USB pass-through is disabled for security and must be enabled via 'Connect USB Device' (checking automatic connection options), and help is available from the IMTS Help Desk on x3000.",
          "explanation": "A full-sequencing answer covering installation, server connection, login, VM selection and the save-work/policy cautions from the document."
        },
        {
          "id": "medi304-auto-mtxog2ob-q0",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Which of the following best describes the Hawthorne effect?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "An observer's expectation about a subject leads them to give the subject more encouragement",
            "Participants improve because they expect a treatment (e.g. a pill or sham surgery) to work",
            "Participants change their behaviour because they are aware of being observed",
            "A researcher allocates participants to groups based on willingness to join"
          ],
          "answer": 2,
          "explanation": "The Hawthorne effect is a combined observer + participant effect: behaviour changes in response to awareness of being observed (from the Hawthorne plant of the Western Electric Company, Chicago)."
        },
        {
          "id": "medi304-auto-mtxog2ob-q1",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "In a clinical trial, the true effectiveness of a treatment is best estimated as:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The absolute improvement seen in the experimental group",
            "The difference between what is observed in the experimental group and the placebo group",
            "The improvement seen in the placebo group",
            "The average improvement across both groups"
          ],
          "answer": 1,
          "explanation": "Because the placebo group improves through expectation, the true treatment effect is the experimental group result minus the placebo group result; today an 'old drug' is often preferred as the comparator."
        },
        {
          "id": "medi304-auto-mtxog2ob-q2",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Publication bias is best defined as:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Only publishing studies with negative results",
            "A tendency to publish findings that trend in the direction of the preferred result, usually a positive one",
            "Citing articles with significant findings more often than others",
            "Selectively reporting some outcomes but not others depending on the direction of results"
          ],
          "answer": 1,
          "explanation": "Positive results are more likely to be published. Option C describes citation bias and option D describes outcome reporting bias, both forms of reporting bias."
        },
        {
          "id": "medi304-auto-mtxog2ob-q3",
          "topic": "chance-random-error",
          "ai": true,
          "question": "According to the lecture, association studies normally require approximately how many samples to limit random error?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "30",
            "100",
            "300",
            "3000"
          ],
          "answer": 2,
          "explanation": "Small samples are less likely to be representative; association studies normally require around 300 samples, and random error is further controlled with p values and confidence intervals."
        },
        {
          "id": "medi304-auto-mtxog2ob-q4",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Name three forms of selection bias described in the lecture and state the single method that solves them.",
          "type": "short",
          "marks": 3,
          "answer": "Allocation bias (researcher allocates participants to groups based on willingness, causing differences in baseline characteristics); self-selection bias (participants choose which group to enrol in); and inclusion/exclusion criteria bias. All are solved by randomised allocation.",
          "explanation": "Randomisation removes the systematic allocation of participants to groups and balances baseline characteristics."
        },
        {
          "id": "medi304-auto-mtxog2ob-q5",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Using the causal map from the lecture, state the three criteria for a factor to be a confounder, and give three common confounding factors.",
          "type": "short",
          "marks": 3,
          "answer": "A confounder is (1) associated with the exposure, (2) associated with the outcome, and (3) not caused by the exposure (not on the causal pathway). Common confounding factors include age, income, gender and ethnic background.",
          "explanation": "The confounder acts by being associated with both the outcome and the risk factor in a way that makes the two seem related."
        },
        {
          "id": "medi304-auto-mtxog2ob-q6",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "A cohort study compares bottle-fed and breast-fed babies and finds a lower recorded incidence of gastroenteritis in breast-fed babies, concluding that breast-feeding protects against gastroenteritis. (a) Explain how maternal social class and hygiene could make this conclusion unsafe. (b) Explain how differences in medical record completeness could affect the conclusion. (c) State which of these is confounding and which is bias, and justify your answer using the definitions given in the lecture.",
          "type": "extended",
          "marks": 10,
          "answer": "(a) If mothers of breast-fed babies are of higher social class, their babies have better hygiene, which itself protects against gastroenteritis. Hygiene is associated with the exposure (feeding type) and the outcome (gastroenteritis) and is not caused by feeding type, so it is a confounder. The observed association is real but the explanation is wrong: the effect is mistakenly attributed to breast-feeding when it is due to hygiene. (b) If bottle-fed babies see doctors less often, their medical records are less complete, so fewer episodes of gastroenteritis are recorded for them; the measurement itself is flawed. This is an observational error, i.e. information (measurement) bias. (c) Hygiene is confounding: confounding describes an association that is true but potentially misleading, because the confounder makes exposure and outcome seem directly related. Incomplete records are bias: bias creates an association that is not true, distorting the measurement itself. Both bias and confounding can contribute to Type 1 or Type 2 error, so the conclusion that breast-feeding causes fewer gastroenteritis episodes is not appropriate without controlling hygiene and ensuring equivalent outcome ascertainment.",
          "explanation": "The key examinable distinction: bias creates an association that is not true; confounding describes an association that is true but potentially misleading."
        },
        {
          "id": "medi304-auto-mtxog2ob-q7",
          "topic": "chance-random-error",
          "ai": true,
          "question": "Explain why a small sample size makes a study vulnerable to chance findings, and describe two statistical approaches, given in the lecture, for controlling random error.",
          "type": "short",
          "marks": 4,
          "answer": "With a small sample, the sample is less likely to be representative of the population, so the observed result can be higher or lower than the truth purely by random error (e.g. an apparent salt intake-hypertension relationship, or a spurious pattern between height and hypertension). Random error is controlled by increasing the sample size (association studies normally require ~300 samples), and statistically assessed using the p value and confidence intervals (CI).",
          "explanation": "Chance error is bidirectional (higher or lower than the truth), unlike systematic bias, and shrinks as sample size grows."
        },
        {
          "id": "medi304-auto-mtxoh58e-q0",
          "topic": "boxplots-outliers",
          "ai": true,
          "question": "Which statement best describes what a boxplot shows?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "A depiction of groups of numerical data through their quartiles",
            "A plot of the mean and confidence interval for a single group",
            "A chart of frequencies of categories in a categorical variable",
            "A plot of the relationship between two continuous variables"
          ],
          "answer": 0,
          "explanation": "The notes define boxplots as depicting groups of numerical data through their quartiles, indicating variability outside the upper and lower quartiles via the IQR."
        },
        {
          "id": "medi304-auto-mtxoh58e-q1",
          "topic": "boxplots-outliers",
          "ai": true,
          "question": "In SPSS, which menu sequence produces a boxplot together with a percentiles table and outlier report?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Analyse → Descriptive Statistics → Explore",
            "Transform → Compute Variable",
            "Analyze → Nonparametric Tests → Independent Samples",
            "Data → Split File"
          ],
          "answer": 0,
          "explanation": "The practical tasks use Analyse → Descriptive Statistics → Explore, where Descriptives, Outliers and Percentiles are requested under Statistics."
        },
        {
          "id": "medi304-auto-mtxoh58e-q2",
          "topic": "boxplots-outliers",
          "ai": true,
          "question": "According to the standard-deviation criterion in the notes, a value is considered an outlier when it is:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "beyond 2 standard deviations from the mean",
            "below the median",
            "between the upper and lower quartiles",
            "within 1 standard deviation of the mean"
          ],
          "answer": 0,
          "explanation": "Values are considered outliers if they lie beyond 2 standard deviations from the mean."
        },
        {
          "id": "medi304-auto-mtxoh58e-q3",
          "topic": "boxplots-outliers",
          "ai": true,
          "question": "Define the interquartile range (IQR) and explain what it represents on a boxplot.",
          "type": "short",
          "marks": 3,
          "answer": "The IQR is the range between the upper quartile (75th percentile) and the lower quartile (25th percentile). On a boxplot it is represented by the length of the box and captures the middle 50% of the data. The plot also indicates variability outside the upper and lower quartiles through the whiskers, with points beyond these shown as outliers/extreme values.",
          "explanation": "A correct answer names the quartiles (25th–75th percentile), links the IQR to the box of the plot, and notes that boxplots indicate variability outside the upper and lower quartiles."
        },
        {
          "id": "medi304-auto-mtxoh58e-q4",
          "topic": "boxplots-outliers",
          "ai": true,
          "question": "A student must produce boxplots of triglycerides for males and females in the 'Bipolar49' dataset and identify outliers and extreme values. Describe the SPSS steps and outputs required.",
          "type": "short",
          "marks": 4,
          "answer": "Open Bipolar49, then go to Analyse → Descriptive Statistics → Explore. Put 'triglyceride' in the Dependent List and 'Gender' in the Factor List so that separate boxplots are produced for males and females. Under Statistics, tick Descriptives, Outliers and Percentiles. From the percentiles table the IQR is obtained (75th percentile minus 25th percentile), and the outlier output and boxplots are used to identify outliers and extreme values.",
          "explanation": "Key steps: correct menu path, correct use of Dependent and Factor Lists, selecting Descriptives/Outliers/Percentiles, and using the percentiles table to find the IQR and identify outliers/extreme values."
        },
        {
          "id": "medi304-auto-mtxoh58e-q5",
          "topic": "boxplots-outliers",
          "ai": true,
          "question": "Using body weight from the Bipolar49 dataset as an example, explain (i) how a boxplot summarises the distribution of a numerical variable, and (ii) how outliers can be identified both from the boxplot output and using the standard-deviation criterion. Include the SPSS workflow needed to produce the percentiles table.",
          "type": "extended",
          "marks": 8,
          "answer": "(i) A boxplot depicts a numerical variable such as body weight through its quartiles: the box spans the interquartile range from the lower (25th percentile) to the upper (75th percentile) quartile, and the plot indicates variability outside the upper and lower quartiles via the whiskers, with individual points beyond these shown as outliers or extreme values. (ii) To produce this in SPSS: open Bipolar49 and go to Analyse → Descriptive Statistics → Explore, placing 'weight' in the Dependent List (Gender could be added to the Factor List for group comparison). Under Statistics, request Descriptives, Outliers and Percentiles; this produces a percentiles table from which the IQR is calculated (75th minus 25th percentile), and the Outliers table lists the largest and smallest extreme cases with their case numbers. Additionally, values can be considered outliers if they lie beyond 2 standard deviations from the mean; the Descriptives output provides the mean and standard deviation needed to apply this rule to the weight data.",
          "explanation": "Full-credit answers cover: quartile-based construction of the boxplot and IQR; variability shown outside the upper/lower quartiles; the Explore menu path with Dependent (and optionally Factor) Lists; the Descriptives/Outliers/Percentiles statistics options; derivation of the IQR from the percentiles table; and the 2-standard-deviation outlier criterion."
        },
        {
          "id": "medi304-auto-mtxoi8j7-q0",
          "topic": "correlation-regression",
          "ai": true,
          "question": "Which combination of variable types and data conditions is required for Pearson's correlation coefficient?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Two quantitative, continuous, normally distributed variables",
            "Two categorical, ordinal variables",
            "One categorical and one continuous variable",
            "Any two variables regardless of their distribution"
          ],
          "answer": 0,
          "explanation": "Pearson's r is used to examine the relationship between two quantitative, continuous variables with normally distributed data, e.g., body weight and waist size."
        },
        {
          "id": "medi304-auto-mtxoi8j7-q1",
          "topic": "correlation-regression",
          "ai": true,
          "question": "In the regression of waist circumference on body weight in Bipolar49, R² = 0.405. What does this mean?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Weight increases waist circumference by 40.5% on average",
            "The correlation between weight and waist circumference is strong",
            "The regression model is statistically non-significant",
            "40.5% of the variation in waist circumference is explained by weight"
          ],
          "answer": 3,
          "explanation": "R² expresses the proportion of variation in the dependent variable (waist circumference) explained by the independent variable (weight)."
        },
        {
          "id": "medi304-auto-mtxoi8j7-q2",
          "topic": "correlation-regression",
          "ai": true,
          "question": "A correlation has an absolute r value of 0.75. How would its strength be classified?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Weak",
            "Moderate",
            "Strong",
            "Perfect"
          ],
          "answer": 2,
          "explanation": "By the conventions in the file, |r| of 0.1–0.3 is weak, 0.4–0.6 is moderate and 0.7–1.0 is strong."
        },
        {
          "id": "medi304-auto-mtxoi8j7-q3",
          "topic": "correlation-regression",
          "ai": true,
          "question": "Before running the Pearson correlation in SPSS, how was normality checked for Body weight and Waist size, and what were the results?",
          "type": "short",
          "marks": 3,
          "answer": "Normality was checked using Analyze → Descriptive Statistics → Explore. The normality test p-values were 0.746 for waist size and 0.311 for body weight. Since both p-values are greater than 0.05, both variables are normally distributed, so the assumption for Pearson correlation is satisfied.",
          "explanation": "Pearson correlation assumes normally distributed continuous variables, so this check must precede the analysis."
        },
        {
          "id": "medi304-auto-mtxoi8j7-q4",
          "topic": "correlation-regression",
          "ai": true,
          "question": "Body weight and waist size in Bipolar49 show r = 0.636 with p < 0.001. Fully interpret this result.",
          "type": "short",
          "marks": 4,
          "answer": "The correlation is positive, meaning that as body weight increases, waist size increases. Its strength is moderate, since |r| = 0.6 falls in the 0.4–0.6 range. The correlation is statistically significant at the 0.05 level because p < 0.001. Conclusion: there is a statistically significant, positive, moderate relationship between body weight and waist size in this dataset.",
          "explanation": "A full interpretation of r covers direction (positive/negative), strength (weak/moderate/strong) and statistical significance."
        },
        {
          "id": "medi304-auto-mtxoi8j7-q5",
          "topic": "correlation-regression",
          "ai": true,
          "question": "In the simple linear regression predicting waist circumference from weight, B = 0.583 with p < 0.001. Interpret this coefficient.",
          "type": "short",
          "marks": 4,
          "answer": "B = 0.583 is the slope of the regression line: every 1 kg increase in weight is associated with a 0.583 cm increase in waist circumference. The p-value < 0.001 indicates this coefficient is statistically significant at the 0.05 level, so weight is a significant predictor of waist circumference.",
          "explanation": "The unstandardised B coefficient gives the change in the dependent variable per one-unit increase in the independent variable."
        },
        {
          "id": "medi304-auto-mtxoi8j7-q6",
          "topic": "correlation-regression",
          "ai": true,
          "question": "Using the regression equation y = 51.58 + 0.583x for waist circumference (y) based on weight (x), predict the waist circumference of a participant weighing 80 kg. Show your working.",
          "type": "short",
          "marks": 3,
          "answer": "Substituting x = 80: y = 51.584 + (0.583 × 80) = 51.584 + 46.64 = 98.224 cm. The predicted waist circumference is approximately 98.2 cm.",
          "explanation": "One purpose of simple linear regression is to predict the value of Y based on a given value of X using the fitted equation."
        },
        {
          "id": "medi304-auto-mtxoi8j7-q7",
          "topic": "correlation-regression",
          "ai": true,
          "question": "Describe the purposes of simple linear regression and outline how you would perform and report it in SPSS for the question 'Can body weight predict waist circumference?', including model formulation via scatterplot and reporting of R², B and a prediction.",
          "type": "extended",
          "marks": 10,
          "answer": "Purposes: simple linear regression examines and quantifies the relationship between one independent variable (X) and one dependent variable (Y); predicts Y from a given X; determines how much variation in Y is explained by X using R²; and assesses whether the relationship is statistically significant — in summary, modelling and predicting an outcome from one predictor assuming a straight-line relationship. SPSS procedure: Analyze → Regression → Linear; put waist circumference in Dependent and weight in Independent; under Statistics select Estimates, Model fit, R squared, descriptives and part/partial correlations; under Plots put *ZRESID in Y and *ZPRED in X and select Histogram and Normal probability. Model formulation via scatterplot: Graphs → Scatter → Simple Scatter → Define; put weight on the X axis, waist circumference on the Y axis and gender in Set Marks by; double-click the scatterplot and add a total fit line — this visualises the relationship, checks linearity, shows direction and strength, and shows how well the line fits the observed points. Reporting: R² = 0.405, meaning 40.5% of the variation in waist circumference is explained by weight; the relationship is significant (p < 0.001); B = 0.583 (p < 0.001), meaning each 1 kg increase in weight is associated with a 0.583 cm increase in waist circumference; the regression equation is y = 51.58 + 0.583x, so an 80 kg participant has a predicted waist circumference of 51.584 + (0.583 × 80) = 98.224 cm.",
          "explanation": "A complete answer covers the four purposes, the correct SPSS menus, scatterplot-based model formulation with fit line, and correct interpretation of R², B, significance and prediction."
        },
        {
          "id": "medi304-auto-mtyf6m2n-q0",
          "topic": "data-distributions",
          "ai": true,
          "question": "For the dataset 10, 20, 30, 40, 40, which statement is correct?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Mean = 28, median = 35, mode = 40",
            "Mean = 28, median = 30, mode = 40",
            "Mean = 30, median = 28, mode = 40",
            "Mean = 28, median = 30, mode = 30"
          ],
          "answer": 1,
          "explanation": "Sum = 140/5 = 28 for the mean; with 5 sorted values the middle value (30) is the median; 40 occurs twice so it is the mode."
        },
        {
          "id": "medi304-auto-mtyf6m2n-q1",
          "topic": "data-distributions",
          "ai": true,
          "question": "A dataset has a skewness value of 0.8. How should this be interpreted?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Approximately normal distribution",
            "Moderately skewed distribution",
            "Highly skewed distribution",
            "Too flat (platykurtic) distribution"
          ],
          "answer": 1,
          "explanation": "Skewness between 0.5 and 1 indicates moderate skew; values greater than 1 indicate high skew; 0 indicates normality."
        },
        {
          "id": "medi304-auto-mtyf6m2n-q2",
          "topic": "data-distributions",
          "ai": true,
          "question": "A distribution has a kurtosis value of -1.5. What does this indicate?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Too peaked, with more extreme outliers than a normal distribution",
            "Too flat, with fewer extreme outliers than a normal distribution",
            "A perfectly normal distribution",
            "A bimodal distribution"
          ],
          "answer": 1,
          "explanation": "Kurtosis < -1 indicates a distribution that is too flat with less extreme outliers than normal; > +1 indicates too peaked with more extreme outliers."
        },
        {
          "id": "medi304-auto-mtyf6m2n-q3",
          "topic": "data-distributions",
          "ai": true,
          "question": "The Kolmogorov-Smirnov (K-S) test is used to:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Compare means between two groups",
            "Assess the normality of a data distribution",
            "Measure the correlation between two variables",
            "Calculate the mode of a dataset"
          ],
          "answer": 1,
          "explanation": "The K-S test is listed in the lecture as the method for evaluating whether data follow a normal distribution."
        },
        {
          "id": "medi304-auto-mtyf6m2n-q4",
          "topic": "data-distributions",
          "ai": true,
          "question": "Define skewness and state how skewness values are interpreted.",
          "type": "short",
          "marks": 3,
          "answer": "Skewness is asymmetry in a data distribution, i.e. a departure from the normal distribution. A value of 0 indicates normal distribution; values between 0.5 and 1 indicate moderately skewed data; values greater than 1 indicate highly skewed data. The same thresholds apply in the negative direction: between -0.5 and -1 is moderately skewed and below -1 is highly skewed."
        },
        {
          "id": "medi304-auto-mtyf6m2n-q5",
          "topic": "data-distributions",
          "ai": true,
          "question": "Body weights from ages 30 to 34 were 70, 70, 70, 70 and 200 kg. Calculate the mean, median and mode, and state which measure best represents the central tendency and why.",
          "type": "short",
          "marks": 4,
          "answer": "Mean = 480/5 = 96 kg; median = 70 kg; mode = 70 kg. The mode is the most representative measure here because four of the five values are 70 kg. The mean (96 kg) is inflated by the single 200 kg outlier; the median is less affected by skewness than the mean, which is why mean and median diverge in this skewed dataset."
        },
        {
          "id": "medi304-auto-mtyf6m2n-q6",
          "topic": "data-distributions",
          "ai": true,
          "question": "Describe a U-shaped distribution and give the vitamin example from the lecture.",
          "type": "short",
          "marks": 3,
          "answer": "A U-shaped distribution is a frequency or probability distribution shaped like the letter U, with high values at the extremes and low values in the middle. Vitamins are essential for life: a lack of vitamins causes adverse responses, and an excess of vitamins also causes adverse responses, giving rise to a U-shaped dose-dependence curve when dose is plotted against adverse response."
        },
        {
          "id": "medi304-auto-mtyf6m2n-q7",
          "topic": "data-distributions",
          "ai": true,
          "question": "Discuss the three measures of central tendency, the factors that determine which is the best measure for a dataset, and how distribution shape (normality, skewness, kurtosis, bimodal and U-shaped distributions) informs this choice.",
          "type": "extended",
          "marks": 8,
          "answer": "The three measures of central tendency are the mean (arithmetic average, e.g. 10+20+30+40+40 = 140/5 = 28), the median (middle value of ordered data, e.g. 35 for 10, 20, 30, 40, 50, 60) and the mode (most frequent value, e.g. 40 in 10, 20, 30, 40, 40). The choice depends on the distribution shape. In a bell-shaped (normal) distribution the mean is appropriate, with skewness = 0 and kurtosis = 0. With skewed data the mean is distorted by extreme values: for weights 70, 70, 70, 70, 200 kg the mean is 96 kg while median and mode are both 70 kg, so the mode is more representative and the median is less affected by skewness than the mean. Skewness between 0.5-1 (or -0.5 to -1) indicates moderate skew and beyond 1 (or -1) high skew. Kurtosis describes 'pointyness': kurtosis > +1 means too peaked with more extreme outliers than normal, and < -1 means too flat with fewer extreme outliers. The Kolmogorov-Smirnov test can assess normality. Bimodal distributions (e.g. Hodgkin lymphoma incidence by age, US 2000-2005) have two peaks, so a single central measure can be misleading, and U-shaped distributions (e.g. vitamin dose-response, where both deficiency and excess cause adverse responses) have low frequency in the middle, making central tendency measures unrepresentative. Therefore the distribution must be evaluated before selecting the measure of central tendency."
        },
        {
          "id": "medi304-auto-mtyf7j60-q0",
          "topic": "data-distributions",
          "ai": true,
          "question": "Patients rate their satisfaction as 'very satisfied, satisfied, unsatisfied, very unsatisfied'. Which measurement scale does this variable use?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Nominal",
            "Ordinal",
            "Interval",
            "Ratio"
          ],
          "answer": 1,
          "explanation": "The categories can be rank-ordered but the differences between adjacent categories are not known or equal, which defines an ordinal scale."
        },
        {
          "id": "medi304-auto-mtyf7j60-q1",
          "topic": "data-distributions",
          "ai": true,
          "question": "Which statement about the ratio scale is correct?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "It has equal intervals but no meaningful zero",
            "Its zero represents the complete absence of the quantity, so it has no negative values",
            "It can only be rank-ordered",
            "It is a numeric scale where zero is an arbitrary reference point"
          ],
          "answer": 1,
          "explanation": "A ratio scale is an interval scale with a true (rational) zero meaning complete absence, so negative values do not occur; weight and age are examples given in the text."
        },
        {
          "id": "medi304-auto-mtyf7j60-q2",
          "topic": "data-distributions",
          "ai": true,
          "question": "In SPSS, a Kolmogorov-Smirnov test returns df(100) = 0.102, p = 0.012 and Shapiro-Wilk returns df(100) = 0.961, p = 0.005. What do you conclude about the distribution of the data, and why?",
          "type": "short",
          "marks": 3,
          "answer": "Both tests compare the sample scores to a normally distributed set with the same mean and SD. Since both p-values are below 0.05, the null hypothesis of normality is rejected, so the data are not normally distributed. This means parametric tests assuming normality may be inappropriate and non-parametric alternatives should be considered.",
          "explanation": "The file's worked example shows both K-S and Shapiro-Wilk significant at p<0.05, leading to the conclusion that the data are not normally distributed."
        },
        {
          "id": "medi304-auto-mtyf7j60-q3",
          "topic": "data-distributions",
          "ai": true,
          "question": "What does Levene's test assess, what is its null hypothesis, and what should a researcher do if it returns p < 0.05?",
          "type": "short",
          "marks": 4,
          "answer": "Levene's test is an inferential statistic used to assess the equality of variances of a variable calculated for two or more groups. Its null hypothesis is that the variances of the populations from which the different samples are drawn are equal. It is used before a comparison of means. If p < 0.05, the null hypothesis of equal variances is rejected, concluding the variances differ, and one should switch to more generalized tests such as non-parametric tests.",
          "explanation": "Levene's test is an assumption check for mean comparisons; a significant result signals unequal variances requiring a different analytic approach."
        },
        {
          "id": "medi304-auto-mtyf7j60-q4",
          "topic": "research-design",
          "ai": true,
          "question": "Explain what stratified random sampling involves and why a researcher might choose it over simple random sampling.",
          "type": "short",
          "marks": 3,
          "answer": "Stratified random sampling involves subdividing the population into strata or layers (e.g., age groups such as 35-44, 45-54, 55-64, 65-75) and randomly sampling from each stratum. It is chosen so that the sample mirrors the population's composition (e.g., 40%, 30%, 20%, 10% in each age band), ensuring key subgroups are represented rather than left to chance.",
          "explanation": "The file illustrates stratification with age proportions matched exactly between population and sample."
        },
        {
          "id": "medi304-auto-mtyf7j60-q5",
          "topic": "research-design",
          "ai": true,
          "question": "Which of the following is a requirement of random sampling described in the text?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Subjects choose which group they join to increase engagement",
            "Each member of the population has an equal chance of being chosen",
            "Only volunteers from the population are included",
            "Sampling is restricted to one geographic location"
          ],
          "answer": 1,
          "explanation": "Random sampling requires defining the sample, ensuring each population member has an equal chance of selection, and randomizing via random number tables or computer programs; letting subjects select their own group introduces selection bias."
        },
        {
          "id": "medi304-auto-mtyf7j60-q6",
          "topic": "data-distributions",
          "ai": true,
          "question": "Describe the four measurement scales (nominal, ordinal, interval, ratio), giving an example of each, and explain which summary measures and arithmetic operations are appropriate for each scale according to the summary table in the text.",
          "type": "extended",
          "marks": 8,
          "answer": "Nominal data are just names or categories with no quantitative value or order, e.g., gender (dichotomous: male/female), hair colour, or state of residence; only the frequency of distribution and mode are appropriate. Ordinal data can be rank-ordered, e.g., satisfaction ratings or education level coded 1 to 4, but differences between values are unknown; the median and mode (plus frequency) are appropriate. Interval data are numeric scales with exact, consistent, measurable differences between values, e.g., Celsius temperature or percentage of body weight gain; values are quantifiable and can be added or subtracted, and the mean, median and mode all apply. Ratio scales are interval scales with a rational (true) zero denoting complete absence of the quantity, with no negative numbers, e.g., age, weight, height; in addition to the interval properties, values can be multiplied and divided. Thus the scale type determines whether mode only, median, or mean and ratio-based operations are meaningful.",
          "explanation": "A strong answer names each scale, gives a valid example from the text, and links scale properties (order, equal intervals, true zero) to permissible operations (frequency/mode/median/mean; add-subtract; multiply-divide)."
        },
        {
          "id": "medi304-auto-mtyf7j60-q7",
          "topic": "data-distributions",
          "ai": true,
          "question": "Sketch or describe the key components of a boxplot and state what the 'box' and 'whiskers' represent.",
          "type": "short",
          "marks": 3,
          "answer": "A boxplot displays the minimum, first quartile (25%), median (50%), third quartile (75%), and maximum. The box spans the first to third quartile (the middle 50% of data) with a line at the median; the whiskers extend to the minimum and maximum. Data points lying beyond these limits are plotted as outliers.",
          "explanation": "Boxplots are listed in the file as a graphical method for assessing distribution and spotting outliers."
        },
        {
          "id": "medi304-auto-mtyf8onl-q0",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "According to Sackett et al. (BMJ 1996), evidence-based medicine is best defined as:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The integration of best research evidence with clinical expertise and patient values",
            "The application of pathophysiological principles derived from laboratory research to patient care",
            "Clinical decision-making based on the accumulated experience and opinion of senior clinicians",
            "The exclusive use of randomised controlled trials in all treatment decisions"
          ],
          "answer": 0,
          "explanation": "EBM explicitly requires all three components: best research evidence, clinical expertise and patient values. It is not restricted to RCTs, and experience, opinion or bench science alone do not constitute EBM."
        },
        {
          "id": "medi304-auto-mtyf8onl-q1",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Which of the following is NOT one of the five 'A' steps of the evidence-based medicine process?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Assess the problem",
            "Ask the question",
            "Analyse the mechanism",
            "Appraise the evidence"
          ],
          "answer": 2,
          "explanation": "The five A's are Assess, Ask, Acquire, Appraise and Apply. 'Analyse the mechanism' reflects pre-EBM pathophysiological reasoning rather than a step in the EBM process."
        },
        {
          "id": "medi304-auto-mtyf8onl-q2",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Sackett et al. describe which of the following as the 'gold standard' for judging whether a treatment does more good than harm, because they are least likely to mislead?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Expert opinion and consensus guidelines",
            "Cohort and case-control studies",
            "Cross-sectional surveys of clinical practice",
            "Systematic reviews, meta-analyses and randomised controlled trials"
          ],
          "answer": 3,
          "explanation": "Systematic reviews, meta-analyses and RCTs are much less likely to mislead and have become the gold standard; however, EBM is not restricted to these designs and also considers cohort, case-control and cross-sectional studies."
        },
        {
          "id": "medi304-auto-mtyf8onl-q3",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "List the three essential components of evidence-based medicine and explain why evidence alone is insufficient.",
          "type": "short",
          "marks": 3,
          "answer": "The three components are: (1) best research evidence; (2) clinical expertise; and (3) patient values. Evidence alone is insufficient because the clinician must judge where the information came from and whether it is valid, and must also consider the patient's values, so that evidence is integrated into decisions about the individual patient's situation.",
          "explanation": "Each component earns one mark; the file stresses EBM is not only evidence but also validity of the source and patient values."
        },
        {
          "id": "medi304-auto-mtyf8onl-q4",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "What does the acronym PICO stand for, and how does it help in the 'Ask' step of the EBM process? Illustrate with an example.",
          "type": "short",
          "marks": 3,
          "answer": "PICO stands for Patient, Intervention, Comparison and Outcome. It is used when asking the question to plan the methods of the study by stating a testable/measurable hypothesis in a structured way. Example: 'Does diet or exercise have a greater impact on reducing blood cholesterol level?' with the hypothesis 'Diet has a greater effect on blood cholesterol than exercise' framed as patient (e.g. adults with high cholesterol), intervention (diet), comparison (exercise) and outcome (blood cholesterol level).",
          "explanation": "Marks for the four components, the purpose (structuring a testable question/hypothesis and study methods) and a valid example from the text."
        },
        {
          "id": "medi304-auto-mtyf8onl-q5",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Name and briefly describe the three key points to consider when appraising evidence.",
          "type": "short",
          "marks": 4,
          "answer": "(1) Validity: assess whether the result (positive or negative) may be due to chance, whether the study was biased, and whether it is internally and externally valid, so results can be contextualised for practice. (2) Effect size: how much difference exists between the testing and control groups. (3) Precision: what the sample size is and how accurate the measurement is.",
          "explanation": "One mark per component named and described, with the fourth mark for detail such as internal vs external validity or chance/bias under validity."
        },
        {
          "id": "medi304-auto-mtyf8onl-q6",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Give two examples of 'pre-evidence-based medicine' practice from the file and explain why they do not qualify as EBM.",
          "type": "short",
          "marks": 3,
          "answer": "Examples include: (1) unsystematic clinical experience, e.g. a doctor recommending sleep for headache based only on his/her own experience; (2) applying basic mechanism/pathophysiology to practice, e.g. a cell-culture paper showing melatonin reduces inflammatory cytokines in brain inflammatory cells; (3) common sense for new treatments; (4) guidelines based on clinical experience; (5) clinical decisions based on opinion. These are not EBM because they lack systematic, valid research evidence, and they frequently lead to false positive conclusions about efficacy (e.g. non-experimental approaches alone).",
          "explanation": "One mark for each valid example (max 2) and one mark for the explanation that EBM requires integration of valid, systematic evidence with expertise and patient values."
        },
        {
          "id": "medi304-auto-mtyf8onl-q7",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "A clinician wants to determine whether diet or exercise has a greater impact on reducing blood cholesterol. Using the five 'A' steps of evidence-based medicine, outline how they should proceed, referring to PICO and the appraisal criteria.",
          "type": "extended",
          "marks": 8,
          "answer": "1. Assess the problem: state a testable problem, e.g. obesity/high cholesterol is associated with health outcomes such as cardiovascular disease and hypertension. 2. Ask the question: state the problem (does diet or exercise have a greater impact on reducing blood cholesterol?), state a testable/measurable hypothesis (diet has a greater effect on blood cholesterol than exercise), and plan the methods using PICO - Patient, Intervention, Comparison, Outcome. 3. Acquire the evidence: search efficiently to find the best available evidence, prioritising designs least likely to mislead (systematic reviews, meta-analyses, RCTs), while recognising EBM is not restricted to these and may include cohort, case-control and cross-sectional studies. 4. Appraise the evidence: evaluate validity (is the result due to chance, is the study biased, internal vs external validity), effect size (how much difference between testing and control groups) and precision (sample size and measurement accuracy). 5. Apply the evidence in practice: determine effectiveness/efficacy - whether the intervention has the intended outcome - and judge the relevance of the evidence to this particular patient's situation, integrating it with clinical expertise and patient values. Two marks per step applied correctly to the scenario.",
          "explanation": "Award marks for correctly sequencing and applying each 'A' step, correct use of PICO, and linking appraisal to validity, effect size and precision."
        },
        {
          "id": "medi304-auto-mtylabwg-q0",
          "topic": "correlation-regression",
          "ai": true,
          "question": "A researcher asks: 'Do heights predict body weight based on 100 participants in my study?' Both variables are quantitative. Which analysis and reported values are most appropriate?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Pearson correlation, reporting only r",
            "Simple linear regression, reporting r2 for association and B for prediction",
            "Independent samples t-test, reporting t and p",
            "Chi-square test, reporting chi-square and p"
          ],
          "answer": 1,
          "explanation": "A predictive question with one quantitative IV (height) and one quantitative DV (weight) calls for simple linear regression, reporting r2 for strength of association and the B coefficient for prediction."
        },
        {
          "id": "medi304-auto-mtylabwg-q1",
          "topic": "correlation-regression",
          "ai": true,
          "question": "In the Bipolar49 dataset, simple linear regression of waist circumference (DV) on body weight (IV) in 49 schizophrenia patients gave F(1, 47) = 31.94, p < 0.001, r2 = 0.405, with the equation: predicted waist size = 51.584 + 0.583 x weight. Interpret these results.",
          "type": "short",
          "marks": 4,
          "answer": "A significant regression equation was found (F(1,47) = 31.94, p < 0.001), so body weight significantly predicts waist size. The r2 of 0.405 means 40.5% of the variance in waist circumference is explained by body weight. For every 1 kg increase in body weight, waist size increases by 0.583-0.584 cm on average. The model can be used to predict an individual's waist circumference from their weight using predicted waist = 51.584 + 0.583 x weight (kg).",
          "explanation": "Full interpretation requires the F-test significance, r2 as proportion of variance explained, and the unstandardized B coefficient as the per-unit change in the DV."
        },
        {
          "id": "medi304-auto-mtylabwg-q2",
          "topic": "correlation-regression",
          "ai": true,
          "question": "When developing a multiple linear regression model, two candidate independent variables are found to have r2 = 0.75 with each other. What should be done according to the file?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Include both variables to improve prediction",
            "Use only one of the two variables in the regression model",
            "Exclude both variables from the model",
            "Convert both variables into a single dichotomous variable"
          ],
          "answer": 1,
          "explanation": "If two independent variables are too highly correlated (r2 > ~0.6), only one of them should be used in the regression model."
        },
        {
          "id": "medi304-auto-mtylabwg-q3",
          "topic": "correlation-regression",
          "ai": true,
          "question": "List the assumptions of multiple linear regression stated in the file, and state one difference between simple and multiple linear regression.",
          "type": "short",
          "marks": 4,
          "answer": "Assumptions: (1) normality - the data follows a normal distribution; (2) homogeneity of variance; (3) independence of observations / no hidden relationships among variables; (4) linearity - the line of best fit through the data points is a straight line. In addition, independent variables should be checked for high inter-correlation before modelling. The difference between simple and multiple linear regression is the number of independent variables: simple is one-to-one (one IV predicting one DV) while multiple is many-to-one (two or more IVs predicting one DV); neither addresses causes.",
          "explanation": "The assumptions and the one-to-one vs many-to-one distinction are stated directly in the file; both types model linear relationships and do not establish causation."
        },
        {
          "id": "medi304-auto-mtylabwg-q4",
          "topic": "logistic-regression",
          "ai": true,
          "question": "A study asks: 'Do body weight, calorie intake, fat intake and age have an influence on the probability of having a heart attack (yes vs no)?' Which analysis is most appropriate?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Simple linear regression",
            "Multiple linear regression",
            "Binary logistic regression",
            "One-way ANOVA"
          ],
          "answer": 2,
          "explanation": "The dependent variable (heart attack: yes/no) is dichotomous and there are multiple predictors, so binary logistic regression is the appropriate predictive analysis."
        },
        {
          "id": "medi304-auto-mtylabwg-q5",
          "topic": "logistic-regression",
          "ai": true,
          "question": "In a colour preference study, 114 males included 103 who preferred black and 11 who preferred red, while 746 females included 341 who preferred black and 405 who preferred red. Calculate and interpret the odds of preferring black for males versus females.",
          "type": "short",
          "marks": 3,
          "answer": "Odds = (103/11) / (341/405) = 11.12. Males have approximately an 11 times higher chance (odds) of selecting black than females. Correspondingly, the odds of preferring red for males vs females = (11/103)/(405/341) = 0.09, meaning males have a 91% lower odds of selecting red than females.",
          "explanation": "Odds are calculated as the ratio of the odds of the outcome in each group; values above 1 indicate higher odds in the first group."
        },
        {
          "id": "medi304-auto-mtylabwg-q6",
          "topic": "logistic-regression",
          "ai": true,
          "question": "A cross-sectional analysis of 328 participants examined cognitive performance (scored 1-10, or classified normal/abnormal) against an inflammatory biomarker (CRP), with age, gender, diabetes and dyslipidaemia as covariates. Two findings are reported: (a) 'High CRP levels significantly predicted cognitive scores (B = -0.135, p = 0.01, even after adjusting for covariates)'; (b) 'Participants with high CRP had greater adjusted odds of poor performance: Odds = 1.75, 95% CI (1.13-2.72), p < 0.01'. Explain which regression technique produced each finding, interpret both results, and justify why the ",
          "type": "extended",
          "marks": 8,
          "answer": "Finding (a) comes from (multiple) linear regression because the dependent variable, cognitive score, is continuous. The B value measures how strongly each predictor influences the dependent variable; B = -0.135 means each unit increase in CRP predicts a 0.135-point decrease in cognitive score, significant at p = 0.01 and remaining significant after adjusting for covariates (age, gender, diabetes, dyslipidaemia). Finding (b) comes from logistic regression because the dependent variable, poor performance (yes/no), is binary. The odds expresses the effect of the risk factor on the likelihood of the outcome: high CRP is associated with 1.75 times greater odds of poor cognitive performance; the 95% CI (1.13-2.72) excludes 1 and p < 0.01, so this is statistically significant after adjustment. A B value can also be calculated for prediction in logistic regression. The choice of analysis depends on the question and the nature of the dependent variable: continuous outcomes require linear/multiple linear regression, while binary outcomes require logistic regression; both are predictive and neither establishes causation.",
          "explanation": "The key discriminator is the scale of the DV: continuous vs dichotomous. Beta (B) quantifies the per-unit influence on a continuous outcome, while odds quantify the change in likelihood of a binary outcome."
        },
        {
          "id": "medi304-auto-mtylabwg-q7",
          "topic": "logistic-regression",
          "ai": true,
          "question": "Which of the following is NOT an assumption of binary logistic regression listed in the file?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The dependent variable should be dichotomous in nature",
            "There should be no outliers in the data",
            "There should be no high correlations among the predictors (assessed by a correlation matrix)",
            "The dependent variable should be normally distributed"
          ],
          "answer": 3,
          "explanation": "Normality of the dependent variable is an assumption of multiple linear regression, not of binary logistic regression, whose dependent variable is dichotomous."
        },
        {
          "id": "medi304-auto-mtylbai9-q0",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Which statistical test is used to check the assumption of homogeneity of variance in ANOVA?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Shapiro-Wilk test",
            "Levene's test",
            "Tukey's HSD test",
            "Bonferroni correction"
          ],
          "answer": 1,
          "explanation": "Levene's test assesses homogeneity of variance; the Shapiro-Wilk test is used to check normality of the dependent variable."
        },
        {
          "id": "medi304-auto-mtylbai9-q1",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A psychiatrist wants to compare mean body weights across four unrelated subgroups (male bipolar, male normal, female bipolar, female normal). Which test is appropriate?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Paired t-test",
            "Independent t-test",
            "One-way ANOVA",
            "One-way repeated measures ANOVA"
          ],
          "answer": 2,
          "explanation": "One-way ANOVA compares means of 2 or more unrelated groups on one continuous dependent variable."
        },
        {
          "id": "medi304-auto-mtylbai9-q2",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A one-way ANOVA shows significant group differences. Levene's test is non-significant (equal variances), but group sizes are very different (e.g., n=100 vs n=70). Which post-hoc test is most appropriate?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Games-Howell",
            "Hochberg's GT2",
            "Dunnett's test",
            "Fisher's LSD"
          ],
          "answer": 1,
          "explanation": "With equal variances but very different sample sizes, Hochberg's GT2 is recommended; if sample sizes are only slightly different, Gabriel's test is used."
        },
        {
          "id": "medi304-auto-mtylbai9-q3",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Which post-hoc test compares a control condition against each of the other conditions, rather than comparing experimental conditions with each other?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Tukey's HSD",
            "REGWQ",
            "Dunnett's test",
            "Games-Howell"
          ],
          "answer": 2,
          "explanation": "Dunnett's test compares the control condition against all other conditions; experimental conditions are not compared with each other."
        },
        {
          "id": "medi304-auto-mtylbai9-q4",
          "topic": "parametric-tests",
          "ai": true,
          "question": "State the assumptions of one-way ANOVA regarding the independent variable and the dependent variable.",
          "type": "short",
          "marks": 3,
          "answer": "Independent variable: independent/unrelated groups with no relationship between them (participants cannot join more than one group). Dependent variable: continuous data, absence of outliers, normal distribution (checked with the Shapiro-Wilk test), and homogeneity of variance (checked with Levene's test).",
          "explanation": "These assumptions must be verified before interpreting ANOVA results."
        },
        {
          "id": "medi304-auto-mtylbai9-q5",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A significant one-way ANOVA is found (F(3,45)=20.594, p<0.001). What must be done next, and what values should be reported?",
          "type": "short",
          "marks": 3,
          "answer": "A post-hoc analysis (e.g., Tukey HSD) must be carried out to identify exactly where the differences lie, because the ANOVA only detects an overall difference. Report the ANOVA values (F, df, p), post-hoc values, means and SD or SEM, and p values. If the ANOVA is not significant, no post-hoc analysis is performed.",
          "explanation": "The F test only indicates an overall difference among groups; post-hoc tests locate the specific pairwise differences."
        },
        {
          "id": "medi304-auto-mtylbai9-q6",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Explain how the choice of post-hoc test depends on the research question, using Bonferroni as an example.",
          "type": "short",
          "marks": 4,
          "answer": "The choice depends on the research question and sample size. If the outcome is life or death, a conservative test may be needed to stringently control Type I error; however, with a small sample, a conservative test penalises power. The Bonferroni correction is conservative and stringent in controlling Type I error but is less powerful. One should not simply choose the most liberal test; equal variances (Levene's test) and equality of group sizes also guide test selection (e.g., Games-Howell for unequal variances, Tukey's HSD or REGWQ for equal ns, Gabriel for slightly different ns, Hochberg's GT2 for very different ns).",
          "explanation": "Post-hoc selection balances Type I error control against statistical power, variance equality and sample size equality."
        },
        {
          "id": "medi304-auto-mtylbai9-q7",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Researchers measure IQ in the same subjects at baseline, after 1 month of training and after 2 months of training. Name the appropriate statistical test, justify your choice, describe the checks required, state what analysis follows a significant F ratio, and outline the advantages of this design.",
          "type": "extended",
          "marks": 8,
          "answer": "The appropriate test is a one-way repeated measures ANOVA. Justification: it compares means across repeated observations on the same subjects (within-subject design), with one categorical independent variable (time: baseline, 1 month, 2 months) and one continuous dependent variable (IQ score); it is the equivalent of the t-test or one-way ANOVA but for related/repeated observations. Checks: normality of the dependent variable (Shapiro-Wilk test) and homogeneity of variance (Levene's test); adequate statistical power should also be considered (e.g., >0.85). If the F ratio is significant, post-hoc tests are conducted to identify where the differences lie. Advantages: it controls for individual differences among participants, reducing variation; it is economical, requiring fewer subjects; and it allows the study of change across time.",
          "explanation": "Repeated measures ANOVA exploits the within-subject correlation, reducing error variance and subject numbers needed."
        },
        {
          "id": "medi304-auto-mtylcu19-q0",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A researcher compares blood glucose levels (continuous) between males and females across three age groups (50, 60 and 70 years). Which test is most appropriate?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Independent t-test",
            "One-way ANOVA",
            "Two-way ANOVA",
            "ANCOVA"
          ],
          "answer": 2,
          "explanation": "Two categorical independent variables (age and gender) acting on one continuous dependent variable require two-way (factorial) ANOVA."
        },
        {
          "id": "medi304-auto-mtylcu19-q1",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A two-way ANOVA reports: no statistically significant interaction between gender and education level on cognition, F(2, 91) = 0.239, p = 0.788. What follows?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Post-hoc tests must be performed immediately",
            "No post-hoc tests are required for this interaction",
            "Main effects cannot be assessed",
            "The analysis must be repeated as a one-way ANOVA"
          ],
          "answer": 1,
          "explanation": "Post-hoc analyses are only performed when there is statistical significance; with a non-significant interaction (p > 0.05), no post-hoc is done."
        },
        {
          "id": "medi304-auto-mtylcu19-q2",
          "topic": "parametric-tests",
          "ai": true,
          "question": "ANCOVA is most useful when the potential confounding factor is:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Linearly related to the outcome but not conceptually related to the factors",
            "Normally distributed in every group",
            "Categorical and measured once",
            "Unrelated to the dependent variable"
          ],
          "answer": 0,
          "explanation": "The text states ANCOVA is most useful when the confounding factor is linearly related to the outcomes but is not conceptually related to the factors; an association matrix analysis can first search for possible covariates."
        },
        {
          "id": "medi304-auto-mtylcu19-q3",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Which of the following is an assumption of one-way ANCOVA?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The dependent variable is continuous",
            "The independent variable consists of two or more categorical groups",
            "Residuals are approximately normally distributed for each independent variable",
            "All of the above, including no significant outliers and homogeneity of variances"
          ],
          "answer": 3,
          "explanation": "One-way ANCOVA assumes a continuous DV, categorical IV groups, no significant outliers, approximately normal residuals per IV, and homogeneity of variances."
        },
        {
          "id": "medi304-auto-mtylcu19-q4",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Using the example where the effect of 10 mg drug is 20 for men and 30 for women, and 100 mg gives 30 for men and 25 for women, explain what an interaction means in two-way ANOVA and how it is judged.",
          "type": "short",
          "marks": 3,
          "answer": "An interaction means both independent variables (dose and gender) affect the dependent variable, and the effect of one IV differs across levels of the other - here the drug effect is not consistent between men and women. The interaction is judged statistically significant if p < 0.05. If the interaction is significant, further analysis (simple main effects/post-hoc) determines where the main impact lies.",
          "explanation": "This tests understanding that interaction is a joint effect of both factors, evaluated via the interaction p-value in the two-way ANOVA."
        },
        {
          "id": "medi304-auto-mtylcu19-q5",
          "topic": "parametric-tests",
          "ai": true,
          "question": "In the quinolinic acid/butyrate experiment, explain why a one-way ANOVA design cannot determine the effect of butyrate and what design is required instead.",
          "type": "short",
          "marks": 3,
          "answer": "In the one-way design (quinolinic acid -/+ crossed only with butyrate -/+ but without a nil-butyrate control comparison structured across both factors), you cannot tell the effect of butyrate because there is no nil butyrate control. A full factorial design for two categories of independent variable - analysed with two-way ANOVA - is required so that both main effects and their interaction can be assessed.",
          "explanation": "A full two-factor design is needed; collapsing to one factor loses the ability to isolate the second factor's effect."
        },
        {
          "id": "medi304-auto-mtylcu19-q6",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Define the two-way repeated-measures ANOVA and illustrate with the swimming/running body weight study.",
          "type": "short",
          "marks": 4,
          "answer": "It is also called mixed between-within subjects ANOVA. It examines the dependent variables of two groups over two or more time points, with two categorical factors (e.g., different treatments and different conditions). Repeated measures means the DV is measured more than once - an extension of the paired t-test to compare means over three or more levels - and the purpose is to test whether there is a statistically significant interaction between the two independent variables. Example: body weight (DV) of swimming and running groups (IV) measured at baseline and every 4 weeks for 24 weeks (0, 4, 8, 12, 24 weeks).",
          "explanation": "Combines definition, purpose and the concrete design from the text."
        },
        {
          "id": "medi304-auto-mtylcu19-q7",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Sixty participants (n = 20 per group) undergo low-, moderate- or high-intensity exercise, all burning the same calories, with systolic blood pressure (SBP) measured before and after. Baseline SBP varies between participants. (a) Name the appropriate analysis and justify it. (b) Identify the IV, DV and covariate. (c) Outline the analysis steps. (d) Describe how this would be written in a Method section.",
          "type": "extended",
          "marks": 10,
          "answer": "(a) One-way ANCOVA, because it extends one-way ANOVA to incorporate a covariate, testing differences between independent groups on a DV adjusted for that covariate - here accounting for baseline SBP variations. (b) IV: the three exercise interventions; DV: post-intervention systolic blood pressure; covariate: baseline systolic blood pressure. (c) Step 1: determine whether there is a significant difference between interventions (ANOVA); Step 2: run one-way ANCOVA with a post hoc test to determine which specific exercise interventions differed in their effect on SBP. (d) When a significant difference is found among the three groups by ANOVA, the effects of baseline, gender, age and education are tested by adding these variables to the covariate analysis model; ANCOVA models are constructed with exercise as the independent variable and SBP as the dependent variable, considering baseline, sex, age and education as covariates. Data are presented as adjusted mean and standard deviation, with all p-values two-tailed and significance set at 0.05. Note ANCOVA looks for differences in adjusted means (adjusted for the covariate), whereas ANOVA looks for differences in group means.",
          "explanation": "This mirrors the worked ANCOVA example, including covariate justification, stepwise analysis and method-section reporting conventions from the file."
        },
        {
          "id": "medi304-auto-mtyleu8t-q0",
          "topic": "rct-designs",
          "ai": true,
          "question": "Which of the following is NOT one of the stated aims of a randomised controlled trial?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "To establish cause and effect relationships",
            "To determine which treatment is superior among competing treatments or control",
            "To avoid the confounding effect",
            "To guarantee that the study sample is representative of the entire general population"
          ],
          "answer": 3,
          "explanation": "The stated aims are establishing cause and effect, determining superior treatment, avoiding confounding and eliminating selection bias; representativeness of the general population is not a stated aim."
        },
        {
          "id": "medi304-auto-mtyleu8t-q1",
          "topic": "rct-designs",
          "ai": true,
          "question": "In the double-blind RCT structure described in the lecture, who is aware of which patients receive pill A versus pill B?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Both the participants and the doctor/researcher",
            "The participants only",
            "Only the project manager, while the doctor/researcher and patients remain unaware",
            "Nobody at all, including the project manager"
          ],
          "answer": 2,
          "explanation": "In a double-blind RCT neither participant nor researcher knows which is treatment or placebo, nor the independent/dependent variables; the project manager manages the pills and outcome allocation."
        },
        {
          "id": "medi304-auto-mtyleu8t-q2",
          "topic": "rct-designs",
          "ai": true,
          "question": "A study randomly assigns diabetic patients to drug or control, records heart rate before treatment, then again after treatment in both groups. What is the expected statistical analysis?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "A single independent-samples t-test of the post-test scores only",
            "Mixed design one- or two-way repeated measures ANOVA",
            "Pearson correlation between the two groups",
            "Chi-square test of group differences"
          ],
          "answer": 1,
          "explanation": "This is a pre-test and post-test RCT design (the lecture's example of drug therapy on heart rate in diabetic patients), for which mixed design one- or two-way repeated measures ANOVA is expected."
        },
        {
          "id": "medi304-auto-mtyleu8t-q3",
          "topic": "rct-designs",
          "ai": true,
          "question": "In which situation is an RCT LEAST suitable according to the lecture?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "A large sample with clear, measurable impacts",
            "A comparison of a new drug against a placebo with feasible blinding",
            "A small sample with hard-to-measure, diverse results where a quick answer is needed",
            "A multi-arm trial where results can be analysed with well-known statistical tools"
          ],
          "answer": 2,
          "explanation": "RCTs are not useful with small sample sizes, hard-to-measure or diverse results, or when a quick answer is needed, because they are expensive in time and money."
        },
        {
          "id": "medi304-auto-mtyleu8t-q4",
          "topic": "rct-designs",
          "ai": true,
          "question": "List the three essential criteria of a true experimental design.",
          "type": "short",
          "marks": 3,
          "answer": "1) Randomization. 2) Manipulation of the independent variable, i.e., conscious control of the independent variable so the researcher uses treatment to observe its effect on the dependent variable. 3) At least one experimental group and one control group, with control subjects similar in number and characteristics, to control the effects of extraneous variables on the dependent variable.",
          "explanation": "All three criteria are required for a design to be considered truly experimental."
        },
        {
          "id": "medi304-auto-mtyleu8t-q5",
          "topic": "rct-designs",
          "ai": true,
          "question": "A researcher plans a crossover trial of two antihypertensive drugs. Explain one advantage and one disadvantage of this design, and state the condition under which a crossover design can be used.",
          "type": "short",
          "marks": 4,
          "answer": "Advantage: because it is a within-subject design in which subjects are exposed to more than one treatment and act as their own control, it gives equal distribution of characteristics, reduces variation in the data, and is an extremely powerful design for detecting the intervention effect. Disadvantage: the subject's response in the second condition may be influenced by the first condition (carryover effect). Condition: a crossover design can only be used if the first intervention does not have a permanent effect, and a washout period is included between conditions.",
          "explanation": "Crossover designs trade power for the risk of carryover between conditions."
        },
        {
          "id": "medi304-auto-mtyleu8t-q6",
          "topic": "rct-designs",
          "ai": true,
          "question": "Name three methods of generating an unpredictable randomization sequence described in the lecture, and state two purposes randomization serves in an RCT.",
          "type": "short",
          "marks": 3,
          "answer": "Methods: flip of a coin for each subject; drawing lots (names on slips placed in a bowl); random number table; or computer-generated sequences (any three). Purposes: randomization allocates subjects by chance alone so that selection bias is eliminated and the confounding effect is avoided.",
          "explanation": "An unpredictable sequence prevents anyone from foreseeing group assignment, protecting the trial's validity."
        },
        {
          "id": "medi304-auto-mtyleu8t-q7",
          "topic": "rct-designs",
          "ai": true,
          "question": "Compare the post-test only control design, the factorial design and the pre-test and post-test design of RCTs. For each, describe the structure (randomization, groups, timing of observations) and the expected outcomes and statistics.",
          "type": "extended",
          "marks": 10,
          "answer": "Post-test only control design (two-arm trial): a parallel design in which a population is randomized into two groups, experimental (T) and control (C); neither group is pretested, and a post-test observation (OT and OC) is carried out on both groups after implementation to assess the effect of the manipulation. Expected statistics: differences between groups analysed with a t-test. Factorial design (multiple-arm trial): a population is randomized across multiple conditions (e.g., T1, T2 and control C) with multiple independent variables; outcomes (O1, O2, O3) are observed after treatment. Expected statistics: differences analysed with one-way or two-way ANOVA followed by post hoc analysis. Pre-test and post-test design: a population is randomly assigned to experimental or control groups; the dependent variable is recorded before treatment (pre-test: O1.0, O2.0) in both groups, treatment is applied to the experimental group only, and the outcome is observed again in both groups (post-test: O1.1, O2.1), e.g., assessing a drug therapy's effect on heart rate in diabetic patients. Expected statistics: mixed design one- or two-way repeated measures ANOVA. All three designs embed the core RCT features of randomization and a control group, but they differ in the number of independent variables (factorial) and whether baseline (pre-test) measurement is included, which determines the statistical test used.",
          "explanation": "Strong answers should link the timing and number of observations/conditions to the appropriate test: t-test for two-arm post-test only, ANOVA for factorial, and repeated-measures (mixed) ANOVA when pre- and post-test measures exist."
        },
        {
          "id": "medi304-auto-mtylgeog-q0",
          "topic": "quasi-experimental-design",
          "ai": true,
          "question": "Which feature best distinguishes a quasi-experimental design from a true experimental design?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Manipulation of the independent variable to observe the dependent variable",
            "Absence of random assignment of subjects to groups and/or absence of a control group",
            "Use of a placebo condition",
            "Measurement of the outcome at multiple time points"
          ],
          "answer": 1,
          "explanation": "Both designs manipulate the IV; the defining feature of quasi-experimental designs is the lack of randomization or a control group."
        },
        {
          "id": "medi304-auto-mtylgeog-q1",
          "topic": "quasi-experimental-design",
          "ai": true,
          "question": "A researcher measures a single group before and after an intervention (O1 T O2). Which statistical approach is appropriate?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Independent samples t-test",
            "Paired t-test or repeated measures ANOVA",
            "Chi-square test",
            "Mann-Whitney U-test"
          ],
          "answer": 1,
          "explanation": "The one-group pre-test/post-test design expects a difference between paired measurements, so a paired t-test or repeated measures ANOVA is used."
        },
        {
          "id": "medi304-auto-mtylgeog-q2",
          "topic": "quasi-experimental-design",
          "ai": true,
          "question": "In a one-way repeated measures (time series) design, explain what is meant by 'each subject serves as their own control' and why the order of tests should be randomly allocated.",
          "type": "short",
          "marks": 3,
          "answer": "There is no parallel control group; instead, each participant is measured under multiple conditions or levels of the IV, so comparisons are made within the same subject over time (T1 O1, T2 O2, T3 O3). The order of tests is randomly allocated for each subject to control for order/carryover effects, and each IV is tested separately. The design typically runs over a long period with a small number of individuals and is analysed with one-way repeated measures ANOVA."
        },
        {
          "id": "medi304-auto-mtylgeog-q3",
          "topic": "quasi-experimental-design",
          "ai": true,
          "question": "State one strength and one weakness of quasi-experimental designs, giving a situation in which they are preferred.",
          "type": "short",
          "marks": 3,
          "answer": "Strength: they can be used to study subjects in real-world settings and are easy to carry out, making them more practical and feasible - e.g., in nursing when a large sample size is not available. Weakness: there is no randomization, so there is no real equivalence between groups (weak control). They are preferred when it is not possible to randomly assign subjects to groups or when no control group exists but causality still needs to be established."
        },
        {
          "id": "medi304-auto-mtylgeog-q4",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "In an intention-to-treat (ITT) analysis, which participants are included?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Only those who adhered to the exact study protocol",
            "Every participant who was randomized",
            "Only those who received the treatment condition",
            "Only those who completed the outcome assessment"
          ],
          "answer": 1,
          "explanation": "ITT analyses everyone who was randomized, regardless of adherence or drop-out, whereas per-protocol analysis includes only those who stayed on the exact protocol."
        },
        {
          "id": "medi304-auto-mtylgeog-q5",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "Distinguish between intention-to-treat and per-protocol analyses, and explain why an RCT report should compare groups on baseline characteristics.",
          "type": "short",
          "marks": 4,
          "answer": "Intention-to-treat (ITT) analysis includes every participant who was randomized, regardless of adherence or drop-out, preserving the benefits of randomization. Per-protocol (PP) analysis includes only participants who stayed on the exact protocol as specified. Baseline characteristics (e.g., age, BMI) should be compared between treatment and control groups at baseline to demonstrate comparability - that is, to show that randomization worked."
        },
        {
          "id": "medi304-auto-mtylgeog-q6",
          "topic": "research-design",
          "ai": true,
          "question": "According to the summary of clinical research design, cohort, case-control and cross-sectional studies are classified as:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Descriptive (qualitative) studies",
            "Analytical observational studies",
            "Experimental RCTs",
            "Case series"
          ],
          "answer": 1,
          "explanation": "Clinical research splits into descriptive (surveys, case reports, case series), analytical observational (cohort, case-control, cross-sectional) and experimental designs (RCTs: parallel, cross-over, factorial)."
        },
        {
          "id": "medi304-auto-mtylgeog-q7",
          "topic": "quasi-experimental-design",
          "ai": true,
          "question": "A nursing unit wishes to evaluate a new patient-education program but cannot randomize patients to groups and can only recruit a small sample. Propose a suitable quasi-experimental design, state the expected outcomes and appropriate statistics, and discuss one strength and one weakness of your chosen design.",
          "type": "extended",
          "marks": 8,
          "answer": "A suitable option is the one-group pre-test/post-test design (O1 T O2): patients are measured before the program, receive the education intervention, and are measured again afterwards; the expected outcome is a difference, analysed with a paired t-test or repeated measures ANOVA. Alternatively, a quasi pre-test/post-test non-randomized design could compare a treatment group (O1.0 T O1.1) with a non-randomized control group (O2.0 C O2.1), analysed with mixed-design one-way or two-way repeated measures ANOVA followed by post hoc tests. A third option for tracking longer-term effects is a time series design (T1 O1, T2 O2, T3 O3) with one-way repeated measures ANOVA, in which each subject serves as their own control and test order is randomly allocated. Strength: quasi designs are practical and feasible in real-world settings such as nursing with small samples. Weakness: without randomization there is no real equivalence of groups, weakening causal inference."
        },
        {
          "id": "medi304-auto-mtylhdrt-q0",
          "topic": "research-design",
          "ai": true,
          "question": "Which statement best describes a case series study?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "An experimental study in which patients are randomly allocated to treatment or control groups",
            "A descriptive observational study following a group of patients with a similar diagnosis or undergoing the same procedure over a period of time",
            "A longitudinal study that follows participants across multiple time points with an experimental protocol",
            "An analytical study comparing outcomes between exposed and unexposed groups to estimate causal effects"
          ],
          "answer": 1,
          "explanation": "A case series is descriptive and observational: there is no experimental protocol and no control over allocation of patients to treatment, so surgeons decide whether treatment is given."
        },
        {
          "id": "medi304-auto-mtylhdrt-q1",
          "topic": "research-design",
          "ai": true,
          "question": "Explain why no causal inferences about treatment efficacy can be drawn from a case series, and what its results are useful for instead.",
          "type": "short",
          "marks": 3,
          "answer": "Because there is no experimental protocol and no control over allocation of patients to treatment (surgeons decide who is treated), there is no control group and confounding cannot be ruled out, so the study is descriptive only. Instead, case series results can generate new hypotheses that are useful in designing further studies, including randomized controlled trials."
        },
        {
          "id": "medi304-auto-mtylhdrt-q2",
          "topic": "research-design",
          "ai": true,
          "question": "Which of the following is NOT a characteristic of a cross-sectional study?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Data are collected at one specific point in time",
            "It analyses data from a representative subset or population",
            "It follows participants longitudinally over time under an experimental protocol",
            "It can be descriptive or analytical"
          ],
          "answer": 2,
          "explanation": "A cross-sectional study (also called a cross-sectional analysis, transversal study or prevalence study) is observational, conducted at one point in time, and is neither longitudinal nor experimental."
        },
        {
          "id": "medi304-auto-mtylhdrt-q3",
          "topic": "research-design",
          "ai": true,
          "question": "Name three types of biostatistical analysis the text lists as commonly used in cross-sectional studies.",
          "type": "short",
          "marks": 3,
          "answer": "Any three of: tests of difference (t-test, Z-score, T-score); correlation (association); one-way ANOVA; linear regression; odds ratio."
        },
        {
          "id": "medi304-auto-mtylhdrt-q4",
          "topic": "research-design",
          "ai": true,
          "question": "Which statistical procedures does the text list for descriptive/summary analysis in SPSS for a case series?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Descriptives, frequencies and the Kolmogorov-Smirnov test",
            "Chi-square and Fisher's exact test",
            "Post-hoc tests and repeated-measures ANOVA",
            "Survival analysis and Bland-Altman plots"
          ],
          "answer": 0,
          "explanation": "The SPSS analysis for descriptive data listed in the file is descriptives, frequencies and the Kolmogorov-Smirnov test."
        },
        {
          "id": "medi304-auto-mtylhdrt-q5",
          "topic": "data-distributions",
          "ai": true,
          "question": "In the descriptive statistics described for a case series, which of the following is a measure of central tendency?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Range including maximum and minimum values",
            "Mean",
            "Measurement of variation about the average",
            "Sample size"
          ],
          "answer": 1,
          "explanation": "Measures of central tendency are the mean, median and mode; the range (maximum and minimum values) and variation about the average are measures of dispersion/variation."
        },
        {
          "id": "medi304-auto-mtylhdrt-q6",
          "topic": "data-distributions",
          "ai": true,
          "question": "A small qualitative case series has 40 subjects each completing 200 questionnaires. How many raw data points arise, and what is the aim of descriptive statistics in handling such data?",
          "type": "short",
          "marks": 3,
          "answer": "40 x 200 = 8,000 raw data points. Because qualitative research may generate a large amount of data, the aim of descriptive (summary) statistics is to describe or summarise the data so that the reader can construct an idea from it, using measures of central tendency (mean, median, mode) and dispersion (e.g. range with maximum and minimum values) together with the sample size."
        },
        {
          "id": "medi304-auto-mtylhdrt-q7",
          "topic": "correlation-regression",
          "ai": true,
          "question": "A researcher asks whether body weight alone can be used as a diagnostic criterion for obesity. Explain why weight is unsuitable, justify an alternative measure, and design a cross-sectional study to validate it against percentage body fat, stating the data collected, the statistics to calculate, and how an r² of 0.658 would be interpreted.",
          "type": "extended",
          "marks": 10,
          "answer": "Obesity is about the amount of fat in the body, not body weight alone, and height affects body weight, so weight cannot be a valid criterion. The appropriate measure combines weight and height: body mass index (BMI = weight in kg / height in m²). A cross-sectional study can be designed to identify the association based on clinical data: collect all data relevant to obesity (body weight, height, BMI, waist circumference, etc.) from a representative sample at one point in time. The expected outcome is to show how strong the correlation between BMI and % body fat is, by calculating the mean, SD or SEM, and r or r². An r² of 0.658 means a 65% correlation, i.e. about 65% of the variation in body fat % is associated with BMI - a strong correlation - so a biomarker or measurement with a strong correlation like this can be used as a diagnostic criterion. The literature review should focus on clinical and human association studies to justify the study."
        },
        {
          "id": "medi304-auto-mtyljhbh-q0",
          "topic": "research-design",
          "ai": true,
          "question": "A researcher assembles 100 patients with bladder cancer and 100 patients without it, then interviews both groups about past chemical exposures. What design is this and what measure is it designed to estimate?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Cohort study; relative risk",
            "Case-control study; odds ratio",
            "Randomised controlled trial; absolute risk reduction",
            "Cross-sectional study; prevalence"
          ],
          "answer": 1,
          "explanation": "Starting from known disease status and looking backwards at exposure is a case-control study; these studies are specifically designed to estimate odds."
        },
        {
          "id": "medi304-auto-mtyljhbh-q1",
          "topic": "research-design",
          "ai": true,
          "question": "Which of the following is a stated advantage of case-control studies over cohort studies?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "They establish causal effects",
            "They are efficient, inexpensive and can be based on smaller samples for rare diseases",
            "They eliminate recall bias",
            "They measure the incidence of multiple outcomes over time"
          ],
          "answer": 1,
          "explanation": "Case-control studies save time and money, suit rare diseases with smaller sample sizes, and allow multiple risk factors to be examined simultaneously; but they only establish association, not causation."
        },
        {
          "id": "medi304-auto-mtyljhbh-q2",
          "topic": "research-design",
          "ai": true,
          "question": "The Framingham Heart Study, begun in 1948 with 5,209 adults and now in its third generation of participants, is best described as:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "A general population cohort study",
            "A case-control study",
            "A cross-sectional survey",
            "A retrospective case series"
          ],
          "answer": 0,
          "explanation": "Framingham is a long-term, ongoing cardiovascular cohort study of residents of Framingham, Massachusetts, using a general population cohort to improve generalizability of results."
        },
        {
          "id": "medi304-auto-mtyljhbh-q3",
          "topic": "research-design",
          "ai": true,
          "question": "Which statement about participants at the beginning of a cohort study is correct?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "They must already have the disease of interest",
            "They are randomly allocated to exposure groups",
            "They are at risk and free of the disease at enrolment",
            "They are selected on the basis of recall of past symptoms"
          ],
          "answer": 2,
          "explanation": "A cohort study enrolls subjects at risk who have no disease at the beginning, measures exposure, then follows them over time to monitor and record health outcomes."
        },
        {
          "id": "medi304-auto-mtyljhbh-q4",
          "topic": "research-design",
          "ai": true,
          "question": "List three advantages of case-control studies.",
          "type": "short",
          "marks": 3,
          "answer": "Any three of: (1) efficient - saves time and money; (2) for rare diseases it can be based on smaller sample sizes; (3) allows simultaneous examination of multiple risk factors; (4) serves as an initial study to establish an association and generate hypotheses.",
          "explanation": "These are the stated advantages, but note they come at the cost of susceptibility to bias and weak (non-causal) evidence."
        },
        {
          "id": "medi304-auto-mtyljhbh-q5",
          "topic": "research-design",
          "ai": true,
          "question": "Explain why case-control studies provide only weak evidence and cannot establish causation.",
          "type": "short",
          "marks": 4,
          "answer": "No intervention is attempted and no attempt is made to alter the course of the disease, so they are observational. Exposure is determined retrospectively and often relies on what participants can recall or report, making the study susceptible to bias. Because it is not a predesigned study, it is prone to methodological errors, and suitable control groups can be difficult to find. It therefore only establishes association between a risk factor and disease, not a causal effect.",
          "explanation": "In contrast, cohort studies and RCTs address causal effects because exposure precedes and predicts outcome."
        },
        {
          "id": "medi304-auto-mtyljhbh-q6",
          "topic": "research-design",
          "ai": true,
          "question": "Compare case-control and cohort studies with respect to direction, starting point, strength of evidence, and typical use.",
          "type": "short",
          "marks": 4,
          "answer": "A case-control study is retrospective: it starts from known disease and studies association with a risk factor, giving weak evidence; it suits rare diseases and multiple exposures, and is less time-consuming and inexpensive. A cohort study is prospective or retrospective: it starts from a known risk factor and determines its causal role in disease, giving strong evidence; it suits rare exposures and multiple outcomes, but is time-consuming and expensive.",
          "explanation": "Case-control estimates an odds ratio; cohort studies yield probabilities/relative risk."
        },
        {
          "id": "medi304-auto-mtyljhbh-q7",
          "topic": "research-design",
          "ai": true,
          "question": "Design a case-control study to test the hypothesis that zinc oxide used by lifeguards is more effective than lotion sunscreen at preventing sunburns and therefore skin cancer. Address case/control selection, exposure assessment, comparability, analysis and limitations.",
          "type": "extended",
          "marks": 10,
          "answer": "Cases: former lifeguards who developed skin cancer on the cheeks and noses. Controls: a comparison group of lifeguards without this type of cancer. Exposure assessment: take histories from both groups, asking them to recall which type of sunscreen (zinc oxide vs absorbent lotion) they used and how often. Comparability/confounding: controls must be comparable - same average age, a similar number of seasons worked and amount of time per season. Analysis: descriptive analysis of both groups, comparison of exposure rates (e.g. difference tests), and estimation of the odds ratio for skin cancer given zinc oxide vs lotion use. Limitations: reliance on recall of past sunscreen use introduces bias; the study is observational and not causal; it is not predesigned so methodological errors are possible; suitable controls may be hard to find; it can only establish an association and generate hypotheses for later cohort or RCT testing.",
          "explanation": "This mirrors the worked example in the file, including the need to control comparability (age, seasons, time per season) when assessing prior exposure."
        },
        {
          "id": "medi304-auto-mtyllqui-q0",
          "topic": "rat-obesity-project",
          "ai": true,
          "question": "Which group comparison most directly tests whether exercise prevents diet-induced obesity?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Control vs High-fat diet",
            "High-fat diet vs High-fat diet + Exercise",
            "Control vs High-fat diet + Exercise",
            "Week 0 vs Week 12 within the Control group"
          ],
          "answer": 1,
          "explanation": "Both intervention groups receive the high-fat diet, so any difference between them (e.g. in body weight, WAT or HOMA-IR) is attributable to the exercise intervention. Control vs High-fat diet instead tests the effect of diet."
        },
        {
          "id": "medi304-auto-mtyllqui-q1",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Thirty rats are randomly allocated to three equal groups. Which test is most appropriate for comparing mean fasting glucose across the three groups at week 12?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Paired-samples t-test",
            "One-way ANOVA",
            "Chi-square test",
            "Pearson correlation"
          ],
          "answer": 1,
          "explanation": "There is one between-subjects factor (group) with three independent levels and a continuous outcome, so a one-way ANOVA (with post-hoc tests) is the correct choice."
        },
        {
          "id": "medi304-auto-mtyllqui-q2",
          "topic": "nonparametric-tests",
          "ai": true,
          "question": "If WAT weight is strongly skewed and normality assumptions fail, the appropriate non-parametric alternative to the one-way ANOVA is:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Kruskal-Wallis test",
            "Mann-Whitney U test",
            "Wilcoxon signed-rank test",
            "Friedman test"
          ],
          "answer": 0,
          "explanation": "The Kruskal-Wallis test compares three or more independent groups. Mann-Whitney U handles only two independent groups, Wilcoxon signed-rank handles two related samples, and Friedman is for repeated measures on the same subjects."
        },
        {
          "id": "medi304-auto-mtyllqui-q3",
          "topic": "rat-obesity-project",
          "ai": true,
          "question": "State the two aims of Research Project 1 as given in the handout.",
          "type": "short",
          "marks": 3,
          "answer": "(1) To investigate the effects of a high-fat diet on metabolic function; (2) to determine whether daily exercise can prevent the onset of obesity and related metabolic disorders.",
          "explanation": "These aims map onto the two key contrasts: Control vs High-fat diet (aim 1) and High-fat diet vs High-fat diet + Exercise (aim 2)."
        },
        {
          "id": "medi304-auto-mtyllqui-q4",
          "topic": "research-design",
          "ai": true,
          "question": "Describe the design of Research Project 1, including the sample, groups, group sizes, duration and the exercise protocol.",
          "type": "short",
          "marks": 4,
          "answer": "A randomised, controlled animal experiment: 30 Sprague Dawley rats were randomly allocated to three groups of 10 for 12 weeks — (1) Control on a low-fat diet, (2) High-fat diet, and (3) High-fat diet plus Exercise. The exercise group had daily access to a running wheel for 4 hours, while the other two groups remained in their home cages throughout the study.",
          "explanation": "Full-credit answers should mention random allocation, all three groups with n=10, the 12-week duration, and the 4-hour daily wheel access with non-exercise groups kept in home cages."
        },
        {
          "id": "medi304-auto-mtyllqui-q5",
          "topic": "measurements",
          "ai": true,
          "question": "How were fasting triglycerides, total cholesterol, glucose and insulin measured in this study, and how was insulin resistance quantified? Why is this index preferable to insulin alone?",
          "type": "short",
          "marks": 4,
          "answer": "Fasting plasma triglycerides, total cholesterol and glucose were measured with commercial enzymatic colorimetric kits (Wako Chemicals); fasting insulin was measured with a Rat Ultra-Sensitive Insulin ELISA kit (Millipore). Insulin resistance was quantified with HOMA-IR, the homeostasis model assessment, which combines fasting insulin and fasting glucose. It is preferable to insulin alone because it captures the joint picture of hyperinsulinaemia and elevated glucose that defines insulin resistance, rather than either measure in isolation.",
          "explanation": "HOMA-IR reflects the physiological definition of insulin resistance (insulin failing to normalise glucose), so a high value indicates compensatory hyperinsulinaemia with impaired glucose control."
        },
        {
          "id": "medi304-auto-mtyllqui-q6",
          "topic": "research-design",
          "ai": true,
          "question": "Give two design features of this study that strengthen causal inference, and briefly note one limitation on external validity.",
          "type": "short",
          "marks": 3,
          "answer": "Causal inference is strengthened by (1) random allocation of rats to the three groups, which balances confounders, and (2) a concurrent control group with a standardised low-fat diet and identical housing (home cages), isolating the effects of diet and exercise. External validity is limited because results from a Sprague Dawley rat model of obesity, with a 4-hour daily wheel-access protocol, may not generalise directly to free-living humans.",
          "explanation": "Randomisation plus control of the contrasted conditions (diet, wheel access) supports internal validity; species/strain and protocol constraints are standard external-validity caveats for animal models."
        },
        {
          "id": "medi304-auto-mtyllqui-q7",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Body weight was measured every three weeks for 12 weeks in three independent groups of rats. Describe how you would analyse these data, naming the test, its factors, the assumptions you would check, and the follow-up analyses you would perform if a significant effect was found.",
          "type": "extended",
          "marks": 10,
          "answer": "Use a mixed (repeated-measures) ANOVA with one between-subjects factor, Group (Control, High-fat, High-fat+Exercise), and one within-subjects factor, Time (baseline, week 3, 6, 9, 12). The key result is the Group x Time interaction: a significant interaction indicates that the trajectories of weight gain differ between groups. Check assumptions: normality of residuals (e.g. Shapiro-Wilk/Q-Q plots), homogeneity of variances (Levene's test), and sphericity of the repeated factor (Mauchly's test), applying Greenhouse-Geisser or Huynh-Feldt correction if sphericity is violated; also check for outliers. If the interaction is significant, run simple-effects analyses — one-way ANOVA between groups at each time point (with Tukey post-hoc tests to localise group differences) or repeated-measures comparisons within each group — adjusting for multiple comparisons (e.g. Bonferroni). Report group means and 95% CIs, the F statistics, degrees of freedom, p-values and effect sizes (e.g. partial eta squared). If normality is badly violated and cannot be fixed by transformation, the non-parametric Friedman test per group or a Kruskal-Wallis test at each time point could be used as an alternative.",
          "explanation": "Serial weight measurements on the same rats require a repeated-measures approach; the Group x Time interaction is what demonstrates diverging weight-gain trajectories, and post-hoc/simple-effects tests localise where and between which groups differences emerge."
        },
        {
          "id": "medi304-auto-mtylneaw-q0",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Assuming normality and homogeneity of variance, which test is most appropriate for comparing mean body weight gain across the control, risperidone and co-treatment groups?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Paired-samples t-test",
            "One-way ANOVA",
            "Independent-samples t-test",
            "Chi-square test"
          ],
          "answer": 1,
          "explanation": "Three independent group means are compared, so a one-way ANOVA is required; t-tests compare only two groups, and chi-square is for categorical data."
        },
        {
          "id": "medi304-auto-mtylneaw-q2",
          "topic": "nonparametric-tests",
          "ai": true,
          "question": "If active ghrelin levels prove severely non-normally distributed across the three groups, the appropriate non-parametric alternative to one-way ANOVA is:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Mann-Whitney U test",
            "Wilcoxon signed-rank test",
            "Kruskal-Wallis test",
            "Friedman test"
          ],
          "answer": 2,
          "explanation": "The Kruskal-Wallis test compares three or more independent groups; Mann-Whitney handles two independent groups, Wilcoxon two paired groups, and Friedman repeated measures."
        },
        {
          "id": "medi304-auto-mtylneaw-q3",
          "topic": "research-design",
          "ai": true,
          "question": "Identify the experimental design used in this study and state the independent variable(s) and dependent variables.",
          "type": "short",
          "marks": 3,
          "answer": "It is a randomised, controlled parallel-group animal experiment. The independent variable is drug treatment with three levels: cookie dough vehicle only, risperidone 2 mg/kg/day, and risperidone 2 mg/kg/day plus betahistine 20 mg/kg/day. Dependent variables include body weight gain, food intake, WAT/BAT/liver weights, fasting plasma triglycerides and total cholesterol, and active ghrelin."
        },
        {
          "id": "medi304-auto-mtylneaw-q4",
          "topic": "research-design",
          "ai": true,
          "question": "Why did all groups, including controls, receive cookie dough pellets, and what threat to validity does this address?",
          "type": "short",
          "marks": 3,
          "answer": "Because drugs were administered orally mixed into cookie dough, giving the control group cookie dough alone controls for the vehicle/diet itself (extra calories, palatability) and handling. This removes confounding by the cookie dough, so any metabolic differences can be attributed to the drugs rather than the delivery method."
        },
        {
          "id": "medi304-auto-mtylneaw-q6",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "With only 10 rats per group, what limitation does this place on the study's conclusions, and which statistical concept describes it?",
          "type": "short",
          "marks": 3,
          "answer": "Small per-group samples limit statistical power, meaning true differences between groups may fail to reach significance (a Type II error). Findings should therefore be treated as preliminary and interpreted cautiously, ideally with effect sizes reported alongside p-values."
        },
        {
          "id": "medi304-auto-mtylneaw-q7",
          "topic": "research-design",
          "ai": true,
          "question": "Discuss how the design of this study allows the researchers to isolate the metabolic effects of chronic risperidone and to test whether betahistine prevents them. Refer to randomisation, the control condition, outcome measures and any limitations.",
          "type": "extended",
          "marks": 8,
          "answer": "Random assignment of 30 female Sprague Dawley rats to three groups distributes individual variation and confounders (e.g., baseline weight) evenly across groups. Comparing the risperidone group with the cookie-dough control isolates the effect of 9 weeks of chronic risperidone (2 mg/kg/day) on metabolic outcomes, since both groups receive the same vehicle. Comparing the co-treatment group (risperidone plus betahistine 20 mg/kg/day) with the risperidone group isolates the added effect of betahistine, testing the preventive hypothesis. The outcome battery is comprehensive and triangulates metabolic impact: continuous monitoring of body weight gain and food intake; terminal WAT, BAT and liver weights for fat accretion and organ effects; fasting plasma triglycerides and total cholesterol for dyslipidemia; and active ghrelin by ELISA to probe appetite-regulatory mechanisms. Limitations include the modest sample size (n=10/group, low power), use of only female rats limiting generalisability, no mention of blinding of outcome assessment, and no a priori sample size calculation reported, so negative findings should be interpreted cautiously."
        },
        {
          "id": "medi304-auto-mtylp2t9-q1",
          "topic": "research-design",
          "ai": true,
          "question": "Why were all control participants combined into a single 'Control-obesity' group for the final analysis?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Only 5 controls with Class II/III obesity remained after withdrawals, making that subgroup too small to analyse separately",
            "To blind the assessors to BMI status",
            "Because BMI was not recorded for control participants",
            "To equalise the size of the exercise groups"
          ],
          "answer": 0,
          "explanation": "After 14 withdrawals, the Control-Class II/III subgroup contained only n=5, so all control subjects were merged into one group (n=15)."
        },
        {
          "id": "medi304-auto-mtylp2t9-q2",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "With final group sizes of 15, 12 and 9 after 14 withdrawals, which consequence for the study's statistical conclusions is most concerning?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Increased risk of a Type II error (failing to detect a real effect) due to reduced power",
            "Increased risk of a Type I error due to large samples",
            "Inability to compute p-values entirely",
            "Automatic violation of normality in all variables"
          ],
          "answer": 0,
          "explanation": "Small, unequal groups after dropout reduce statistical power, raising the probability of a Type II error (false negative)."
        },
        {
          "id": "medi304-auto-mtylp2t9-q3",
          "topic": "parametric-tests",
          "ai": true,
          "question": "The researchers want to compare daily step counts across the three groups (Control-obesity, Exercise-Class I, Exercise-Class II/III) at all three visits (baseline, end of program, 12-week follow-up). Name a suitable parametric test, justify your choice, and state one assumption it requires.",
          "type": "short",
          "marks": 4,
          "answer": "A two-way mixed (repeated-measures) ANOVA with one between-subjects factor (group, 3 levels) and one within-subjects factor (time, 3 levels). This tests main effects of group and time and, crucially, the group x time interaction, which would indicate whether the change in step counts over the three visits differs between exercise and control groups. Assumptions include approximately normally distributed residuals (or outcome within each cell), homogeneity of variances between groups, sphericity of the repeated measurements (or use of a Greenhouse-Geisser correction), and independence of subjects. Given small groups (n=9-15), a non-parametric alternative (e.g., Friedman test within groups) could be considered if assumptions fail.",
          "explanation": "One between factor (3 groups) plus one within factor (3 time points) with a continuous outcome points to mixed repeated-measures ANOVA."
        },
        {
          "id": "medi304-auto-mtylp2t9-q4",
          "topic": "data-distributions",
          "ai": true,
          "question": "Classify the data types of the following variables collected in this study: (a) age, (b) obesity class (I vs II/III), (c) number of bouts of moderate/vigorous activity lasting >=10 minutes.",
          "type": "short",
          "marks": 3,
          "answer": "(a) Age is a continuous, ratio variable (equal intervals and a true zero). (b) Obesity class is an ordinal (ordered categorical) variable, since classes reflect increasing severity of obesity. (c) Number of MVPA bouts is a quantitative discrete (count) variable, typically treated as ratio-level; with small counts it may be skewed, which can guide choice between parametric and non-parametric methods.",
          "explanation": "Recognising continuous vs ordinal vs count variables determines which summary statistics and tests are appropriate."
        },
        {
          "id": "medi304-auto-mtylp2t9-q5",
          "topic": "measurements",
          "ai": true,
          "question": "Identify the two accelerometer-derived metrics used to quantify physical activity in this study, and give one reason an objective device like an accelerometer may be preferred over self-reported activity.",
          "type": "short",
          "marks": 3,
          "answer": "The two metrics were (1) daily step count and (2) the number of bouts of moderate or vigorous activity lasting at least 10 minutes. An accelerometer is preferred because it provides an objective, quantified record of movement that is not subject to recall error or social-desirability bias inherent in self-report questionnaires.",
          "explanation": "Objective measurement reduces misclassification of the physical activity outcome, improving measurement validity."
        },
        {
          "id": "medi304-auto-mtylp2t9-q6",
          "topic": "hypotheses-pvalues",
          "ai": true,
          "question": "Suppose the study finds no statistically significant difference in BMI change between exercise and control groups (p=0.21), but the true effect of exercise is real. Name the error that has occurred, define it, and explain how the study's dropout relates to its probability.",
          "type": "short",
          "marks": 3,
          "answer": "This is a Type II error (false negative): failing to reject the null hypothesis when the alternative (a real effect) is true. Its probability (beta) increases as statistical power decreases. The 14 withdrawals from 50 participants shrank group sizes to 9-15, reducing power and thereby increasing the chance of a Type II error, so a non-significant p-value here does not prove exercise has no effect.",
          "explanation": "Links the scenario's small final n to power and Type II error risk."
        },
        {
          "id": "medi304-auto-mtylp2t9-q7",
          "topic": "research-design",
          "ai": true,
          "question": "Outline a statistical analysis plan for this project's two aims: (1) the effect of the supervised exercise program on physical activity, BMI, body fat percentage and daily caloric intake, and (2) whether high physical activity levels are maintained. Address baseline comparability, the main analysis, and one strength and one limitation of the final design.",
          "type": "extended",
          "marks": 10,
          "answer": "Baseline comparability: compare the three final groups (Control-obesity n=15, Exercise-Class I n=12, Exercise-Class II/III n=9) on age, height, BMI, body fat percentage, caloric intake and accelerometer activity using one-way ANOVA for continuous variables (or Kruskal-Wallis if non-normal) and chi-square/Fisher's exact for categorical variables; report means, SDs and p-values in a baseline table. Main analysis (aim 1): for each continuous outcome (BMI, body fat %, caloric intake, steps, MVPA bouts), use a two-way mixed repeated-measures ANOVA with group (between) and visit (baseline, end of program, follow-up; within), focusing on the group x time interaction; use post-hoc pairwise comparisons with adjustment (e.g., Bonferroni) if significant, and non-parametric equivalents (e.g., Friedman with Dunn's test) if assumptions are violated. Aim 2 (maintenance): compare follow-up versus end-of-program values within each exercise group using paired t-tests (or Wilcoxon signed-rank), and test whether follow-up activity remains above baseline; describe the proportion of exercisers sustaining activity rather than relying solely on p-values, and report effect sizes (e.g., partial eta-squared, Cohen's d) given the small samples. Strength: objective accelerometer measurement of the primary outcome and a follow-up visit enabling assessment of maintenance beyond the intervention period. Limitation: 14 withdrawals left small, unequal groups and forced the control Class II/III subgroup (n=5) to be merged with Class I controls, reducing power, preventing clean BMI-class comparisons in controls, and risking attrition bias if dropout was related to outcome; these are best acknowledged as limitations when interpreting non-significant findings.",
          "explanation": "A strong answer covers baseline table, mixed ANOVA with interaction, maintenance analysis, effect sizes, and design critique of dropout/merged groups."
        },
        {
          "id": "medi304-auto-mtylq9zc-q0",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "Which of the following best defines statistical power?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The probability of rejecting the null hypothesis assuming the null hypothesis is true",
            "The probability that a test correctly rejects the null hypothesis when the alternative hypothesis is true",
            "The probability of accepting the null hypothesis when it is false",
            "The probability of making a Type I error"
          ],
          "answer": 1,
          "explanation": "Power is the probability of correctly rejecting H0 when HA is true; a study with 80% power has an 80% chance of obtaining significant results. Option A describes the alpha value / Type I error."
        },
        {
          "id": "medi304-auto-mtylq9zc-q1",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "According to Cohen's conventions, which Cohen's d value represents a LARGE effect size?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "0.1",
            "0.2",
            "0.5",
            "0.8"
          ],
          "answer": 3,
          "explanation": "Cohen's d of 0.2 is a small effect, 0.5 is a moderate/medium effect, and 0.8 or greater is a large effect (0 indicates no difference)."
        },
        {
          "id": "medi304-auto-mtylq9zc-q2",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "A researcher tightens the alpha level from 0.05 to 0.01 (two-tailed) while keeping power at 80%. What happens to the required sample size and why?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "It decreases, because a smaller alpha makes the test more efficient",
            "It stays the same, because alpha and sample size are independent",
            "It increases, because power is contributed by sample size and greater confidence is needed",
            "It cannot be determined without knowing the standard deviation"
          ],
          "answer": 2,
          "explanation": "Reducing alpha from 0.05 to 0.01 requires a larger sample size: statistical power is contributed by sample size, so increasing the sample increases the confidence of meeting the more stringent threshold."
        },
        {
          "id": "medi304-auto-mtylq9zc-q3",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "A mean rises from 16.5 to 19.7. Using the magnitude of effect calculation, what is the percentage change?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "3.2%",
            "16.5%",
            "19.4%",
            "21.2%"
          ],
          "answer": 2,
          "explanation": "% change = (M2 - M1)/M1 x 100 = (19.7 - 16.5)/16.5 x 100 = 19.4%."
        },
        {
          "id": "medi304-auto-mtylq9zc-q4",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "A treatment group has mean 13 (SD 3) and a control group has mean 9 (SD 3). Calculate Cohen's d and interpret the result.",
          "type": "short",
          "marks": 4,
          "answer": "SDpooled = sqrt((3^2 + 3^2)/2) = sqrt(9) = 3. Cohen's d = (13 - 9)/3 = 4/3 = 1.33. Since d = 1.33 is greater than 0.8, this represents a LARGE effect size.",
          "explanation": "Cohen's d is the standardized difference between means: d = (Mtest - Mcon)/SDpooled, where SDpooled = sqrt((st^2 + sc^2)/2)."
        },
        {
          "id": "medi304-auto-mtylq9zc-q5",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "When designing a new study, what are the three bases on which the expected effect size can be determined?",
          "type": "short",
          "marks": 3,
          "answer": "The effect size can be estimated based on: (1) estimation from pilot data; (2) estimation from previous research; or (3) an educated guess.",
          "explanation": "These are the three sources stated in the lecture for estimating expected effect size at the design stage."
        },
        {
          "id": "medi304-auto-mtylq9zc-q6",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "A researcher wants to test whether hyperuricaemia is associated with metabolic syndrome in bipolar disorder patients, but the only previous table provides patient data with no control group. How should the researcher proceed to estimate the required sample size?",
          "type": "short",
          "marks": 4,
          "answer": "The researcher should obtain general population data for comparison - e.g., it was found that metabolic syndrome affects about 20% of adults in Australia. Using this population figure alongside the patient data, a sample size calculator such as clincalc.com/stats/SampleSize.aspx can be used, specifying alpha (e.g., 0.05) and power (e.g., 80%), to determine the number of participants required.",
          "explanation": "When no control group data exist, general population figures provide the comparison values needed for the sample size calculation."
        },
        {
          "id": "medi304-auto-mtylq9zc-q7",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "Describe how you would write the sample size section in the Methods of a research report, including all key components that must be stated and justified.",
          "type": "extended",
          "marks": 8,
          "answer": "To ensure the study had adequate power, state the basis of the calculation and its components: (1) the source of the estimates - e.g., a previous study (referenced) providing mean 1, mean 2 and the common standard deviation, or a specified effect size (e.g., 0.5, or ranging from 1.4 to 2.0); (2) the statistical power, normally set at 80%; and (3) the type I error (alpha) level, e.g., 0.05, two-tailed (p<0.05). Then state the resulting numbers, e.g., 'our sample size (345 cases and 396 controls) was deemed suitable for this pilot study on the association between the variables.' Justification should reflect the key factors affecting sample size: alpha value (one- or two-sided), power, effect size between groups, standard deviation (from a similar/pilot study, general population, or study population), and the type of sampling and analysis (number of groups). Note that sample size can be manipulated to increase statistical power.",
          "explanation": "A strong answer names power (80%), alpha (0.05, two-sided), effect size or means/SD from previous work, the reference source, the final sample numbers, and shows understanding that these factors jointly determine the required sample."
        },
        {
          "id": "medi304-auto-mtylr6me-q0",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A researcher wants to test whether the mean fasting glucose of a sample of bipolar patients differs from an assumed population mean of 4 mmol/L. Which test is appropriate?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Independent-samples t-test",
            "One-sample t-test",
            "Paired-samples t-test",
            "One-way ANOVA"
          ],
          "answer": 1,
          "explanation": "A one-sample t-test compares a single sample mean against a known or assumed population value."
        },
        {
          "id": "medi304-auto-mtylr6me-q1",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Which of the following is NOT an assumption of the independent-samples t-test as stated in the material?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The data are continuous",
            "The data are normally distributed within each group",
            "Variances between groups are approximately equal",
            "The two groups must consist of the same participants"
          ],
          "answer": 3,
          "explanation": "The independent-samples t-test compares two separate groups; using the same participants in both conditions is the defining feature of a paired-samples t-test."
        },
        {
          "id": "medi304-auto-mtylr6me-q2",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A paired-samples t-test on body fat percentage before and after 12 weeks of exercise reports t(29) = 5.56. How many participants were in the study?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "29",
            "30",
            "31",
            "Cannot be determined"
          ],
          "answer": 1,
          "explanation": "The paired t-test uses degrees of freedom n − 1, so t(29) implies 30 matched pairs (participants measured twice)."
        },
        {
          "id": "medi304-auto-mtylr6me-q3",
          "topic": "parametric-tests",
          "ai": true,
          "question": "In the leg press example, the reported statistic is t(29) = −8.29, yet the conclusion is a significant INCREASE in leg press. Why is the t-value negative?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The baseline minus week-12 difference is negative because the week-12 mean (98.96) is higher than baseline (86.10)",
            "Leg press strength actually decreased significantly",
            "The test was one-tailed rather than two-tailed",
            "The variances between groups were unequal"
          ],
          "answer": 0,
          "explanation": "The sign of t reflects the direction of the mean difference as computed (baseline − week 12); the large magnitude with p < 0.001 indicates a significant increase from baseline to week 12."
        },
        {
          "id": "medi304-auto-mtylr6me-q4",
          "topic": "parametric-tests",
          "ai": true,
          "question": "State the three assumptions of the independent-samples t-test described in this material.",
          "type": "short",
          "marks": 3,
          "answer": "(1) The data are continuous; (2) the data are normally distributed within each group; (3) the variances between the two groups are approximately equal.",
          "explanation": "These assumptions must be checked (e.g., normality via Explore-Plots with normality tests) before interpreting the independent t-test."
        },
        {
          "id": "medi304-auto-mtylr6me-q5",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Using the reported results (M = 5.667, SD = 1.122, p < 0.001), write a one-sentence report of the one-sample t-test comparing Bipolar49 patients' fasting glucose to the population mean of 4 mmol/L.",
          "type": "short",
          "marks": 3,
          "answer": "The mean fasting glucose level for the sample (M = 5.667, SD = 1.122) was significantly higher than the assumed population mean of 4 mmol/L, p < 0.001.",
          "explanation": "A complete t-test report states the sample mean and SD, the comparison value, the direction of the difference, and the p-value."
        },
        {
          "id": "medi304-auto-mtylr6me-q6",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Explain when a paired-samples t-test should be used instead of an independent-samples t-test, giving one example of each from the material.",
          "type": "short",
          "marks": 3,
          "answer": "A paired-samples t-test is used when the two measurements are related — from the same subjects (e.g., fasting glucose before and after a dietary intervention, or body fat % before and after 12 weeks of exercise) or from matched pairs. An independent-samples t-test is used when comparing two separate groups, e.g., fasting glucose or BMI in patients versus controls.",
          "explanation": "The key distinction is whether the two sets of observations are linked (paired) or come from distinct, unrelated groups."
        },
        {
          "id": "medi304-auto-mtylr6me-q7",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A researcher measures leg press strength in 30 participants at baseline and after a 12-week exercise programme (baseline M = 86.10, SD = 21.06; week 12 M = 98.96, SD = 22.59; paired t-test t(29) = −8.29, p < 0.001, two-tailed; data assumed normal). (a) Name and justify the correct statistical test. (b) State its assumptions. (c) Write a full results report. (d) State the conclusion.",
          "type": "extended",
          "marks": 8,
          "answer": "(a) A paired-samples t-test, because the same subjects were measured twice (before and after the intervention), so the observations are related. (b) Assumptions: the data are continuous and the differences are normally distributed (the material states data are assumed normally distributed). (c) Report: The mean leg press at baseline was 86.10 ± 21.06, and after 12 weeks it was 98.96 ± 22.59. A paired-samples t-test showed that the increase was statistically significant, t(29) = −8.29, p < 0.001 (two-tailed). (d) Conclusion: 12 weeks of exercise led to a significant increase in leg press strength.",
          "explanation": "Full-credit answers justify the test choice by the repeated-measures design, acknowledge the normality assumption, report means ± SD with t(df), exact p and test type, and interpret direction correctly despite the negative t."
        },
        {
          "id": "medi304-auto-mtyls3ol-q0",
          "topic": "communication",
          "ai": true,
          "question": "What poster size and orientation are permitted for the MEDI304 Assessment 3 poster?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "A1 portrait orientation only",
            "A0 (84.1cm x 118.9cm), landscape or portrait orientation",
            "A0 portrait orientation only",
            "A3 landscape or portrait orientation"
          ],
          "answer": 1,
          "explanation": "The requirements specify an A0 poster (84.1cm x 118.9cm) which may be in landscape or portrait orientation."
        },
        {
          "id": "medi304-auto-mtyls3ol-q1",
          "topic": "communication",
          "ai": true,
          "question": "Which component of the poster carries the largest weighting in the marking guidelines (15 marks total)?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Overall format (10%)",
            "Introduction and Aims (20%)",
            "Methods (data analysis) and results presentation (40%)",
            "Discussion and Conclusion (20%)"
          ],
          "answer": 2,
          "explanation": "Methods (data analysis) and results presentation account for 40% of the marks, reflecting the emphasis on correct statistical methods and clear presentation of results."
        },
        {
          "id": "medi304-auto-mtyls3ol-q2",
          "topic": "communication",
          "ai": true,
          "question": "Approximately how much poster space does the file suggest dedicating to the Results section?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "About one quarter of the poster",
            "At least half of the poster space",
            "No more than one third of the poster",
            "An equal share with every other section"
          ],
          "answer": 1,
          "explanation": "The Results section is described as the main part of the poster and should use at least half of the poster space, focusing on significant findings and results important to the research aims."
        },
        {
          "id": "medi304-auto-mtyls3ol-q3",
          "topic": "communication",
          "ai": true,
          "question": "List the minimum set of tables and graphs that must be included in the Assessment 3 poster, and state the approximate number of references expected.",
          "type": "short",
          "marks": 3,
          "answer": "At least 1 table, 1 bar graph, 1 line graph, and 1 correlation graph must be included. Approximately 10 references are expected (combining those provided and those found through literature searching).",
          "explanation": "These minimum requirements ensure students demonstrate the full range of data presentation skills; results with significant differences should be prioritised."
        },
        {
          "id": "medi304-auto-mtyls3ol-q4",
          "topic": "communication",
          "ai": true,
          "question": "What font sizes (based on Times New Roman) are suggested for the poster title, section subtitles, main section text, and the Methods/References sections?",
          "type": "short",
          "marks": 3,
          "answer": "Title: ~60 or above; section subtitles: ~40 or above; text in Introduction, Aims, Results, Discussion and Conclusion: ~20 (smaller fonts may be used for tables and figure notes); Methods and References: smaller font such as ~14-16. Different font styles/sizes are acceptable provided the poster remains clearly presented.",
          "explanation": "Because a poster must be readable at a distance, relatively large fonts are required, with the hierarchy of size reflecting the importance of each element."
        },
        {
          "id": "medi304-auto-mtyls3ol-q5",
          "topic": "communication",
          "ai": true,
          "question": "According to the file, how should statistical methods be described in the poster's Methods section?",
          "type": "short",
          "marks": 3,
          "answer": "Statistical methods should be described briefly in your own words: state that SPSS was used and which statistical analysis was applied to which data. You should NOT go into excessive detail such as the actual steps in SPSS or which buttons to click.",
          "explanation": "The Methods section should be clear and succinct; a flow chart may be appropriate, but procedural SPSS detail is unnecessary."
        },
        {
          "id": "medi304-auto-mtyls3ol-q6",
          "topic": "communication",
          "ai": true,
          "question": "Describe the five components of the poster marking guidelines with their weightings, and explain two specific things a student could do under each of the two highest-weighted categories to maximise marks.",
          "type": "extended",
          "marks": 8,
          "answer": "The marking guidelines (15 marks total) are: (1) Overall format - 10%: title, subheadings, introduction, methods, results, conclusion clearly presented; well-located graphs and tables; easy to read with logical flow, correct spelling, appropriate abbreviations and section lengths. (2) Introduction and Aims - 20%: brief literature review providing background and clearly presented research aims. (3) Methods (data analysis) and results presentation - 40%: correct statistical methods used; statistical outputs presented and clearly marked; results presented correctly and concisely; tables and figures correctly presented. (4) Discussion and Conclusion - 20%: results correctly discussed (not simply restated) and a concise, correct conclusion. (5) Referencing - 10%: relevant literature cited especially in the introduction and discussion, with consistent, accurate citation and listing in the numbered reference system. To maximise marks in Methods/Results (40%): use correct statistical tests appropriate to the data type and present outputs clearly labelled, dedicating at least half the poster to Results with the required minimum of one table, one bar graph, one line graph and one correlation graph, focusing on significant differences. To maximise marks in Introduction/Aims (20%): conduct a reference search beyond provided material to write an original background with a clear rationale, and state research aims explicitly and succinctly.",
          "explanation": "This question tests knowledge of the rubric structure and the ability to translate marking criteria into concrete actions."
        },
        {
          "id": "medi304-auto-mtyls3ol-q7",
          "topic": "spss-essentials",
          "ai": true,
          "question": "Outline the steps described in Week 10 Practical Task 3 for transferring data from Excel into SPSS and obtaining descriptive statistics.",
          "type": "short",
          "marks": 3,
          "answer": "Download the Excel data set of the selected project from the Moodle site; open SPSS and select 'New Files: New Dataset'; input the data from Excel into SPSS; set up parameters for all factors and variables in the 'Variable View' page; then conduct descriptive statistical analysis on all measurements (variables) to obtain the Mean, standard deviation (SD) and/or standard error of mean (SEM).",
          "explanation": "This workflow builds the SPSS data file that is then used in Task 4 to construct a scientific table of descriptive statistics."
        },
        {
          "id": "medi304-auto-mtyltb8n-q0",
          "topic": "spss-essentials",
          "ai": true,
          "question": "In Variable View, why is the 'Group' variable's type changed from 'String' to 'Numeric'?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "So the group codes (1, 2, 3) are stored as numbers, allowing SPSS to use them in analysis and pair them with value labels like 'Control'",
            "Because Excel files cannot contain text",
            "To increase the number of decimal places displayed",
            "To rename the variable to 'Group'"
          ],
          "answer": 0,
          "explanation": "Coding groups numerically (with labels such as 1. Control; 2. Olanzapine; 3. Olanzapine+Exercise) lets SPSS treat group as a factor in statistical procedures."
        },
        {
          "id": "medi304-auto-mtyltb8n-q1",
          "topic": "spss-essentials",
          "ai": true,
          "question": "Which descriptive statistics does the task instruct you to obtain for all measurements (variables)?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Mean, standard deviation (SD) and/or standard error of mean (SEM)",
            "Median and interquartile range",
            "p-values and confidence intervals",
            "Correlation coefficients"
          ],
          "answer": 0,
          "explanation": "The task specifies descriptive analysis via Analyze to obtain Mean, SD and/or SEM for each variable."
        },
        {
          "id": "medi304-auto-mtyltb8n-q2",
          "topic": "spss-essentials",
          "ai": true,
          "question": "What is the key difference between 'Variable View' and 'Data View' in SPSS?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Variable View defines the properties of each variable (name, type, decimals, labels); Data View displays the actual entered data rows",
            "Variable View runs the statistical tests; Data View writes the results",
            "Variable View is for qualitative data; Data View is for quantitative data",
            "There is no difference; they are two names for the same sheet"
          ],
          "answer": 0,
          "explanation": "The task sets parameters in Variable View, then selects Data View to work with the entered data."
        },
        {
          "id": "medi304-auto-mtyltb8n-q3",
          "topic": "spss-essentials",
          "ai": true,
          "question": "After setting up parameters for all factors and variables, which view would you select to see the data rows?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Data View",
            "Variable View",
            "Output View",
            "Syntax View"
          ],
          "answer": 0,
          "explanation": "The task ends by selecting 'Data View', where the entered observations for each variable are displayed."
        },
        {
          "id": "medi304-auto-mtyltb8n-q4",
          "topic": "spss-essentials",
          "ai": true,
          "question": "Outline the steps for inputting the project's Excel data into SPSS, starting from downloading the file.",
          "type": "short",
          "marks": 3,
          "answer": "1) Download the Excel dataset of the selected project from the Moodle site; 2) Open the SPSS software; 3) Open 'New Files: New Dataset'; 4) Input the data from Excel into SPSS; 5) In the Variable View page, set up parameters for all factors and variables (e.g., name, type, decimals, labels); 6) Return to Data View and run descriptive analysis via Analyze to obtain Mean, SD and/or SEM for all variables.",
          "explanation": "This follows the exact workflow in the practical task sheet."
        },
        {
          "id": "medi304-auto-mtyltb8n-q5",
          "topic": "spss-essentials",
          "ai": true,
          "question": "Describe three parameters that must be set for the 'Group' variable in Variable View, according to the practical task.",
          "type": "short",
          "marks": 4,
          "answer": "1) Change the variable type from 'String' to 'Numeric' so group codes can be analysed; 2) Change Decimals from the default (e.g., 15) to 3 for appropriate display precision; 3) Attach value labels identifying the groups, e.g., 1 = Control, 2 = Olanzapine, 3 = Olanzapine+Exercise. The variable is also named 'Group' in its row.",
          "explanation": "These three changes (type, decimals, labels) are exactly the steps shown for the Group variable in the task."
        },
        {
          "id": "medi304-auto-mtyltb8n-q6",
          "topic": "spss-essentials",
          "ai": true,
          "question": "The task asks for both standard deviation (SD) and standard error of the mean (SEM) as possible outputs. Briefly distinguish between them.",
          "type": "short",
          "marks": 3,
          "answer": "The SD describes the spread/variability of individual observations around the mean in the sample. The SEM describes the precision of the sample mean as an estimate of the population mean and is calculated as SD divided by the square root of the sample size; it decreases as n increases. SD summarises the data, whereas SEM quantifies uncertainty in the mean.",
          "explanation": "Both statistics are requested in the task's descriptive analysis; understanding what each represents is expected at this level."
        },
        {
          "id": "medi304-auto-mtyltb8n-q7",
          "topic": "spss-essentials",
          "ai": true,
          "question": "You have an Excel dataset from a study with three groups (1. Control; 2. Olanzapine; 3. Olanzapine+Exercise) and several measured outcome variables. Describe, step by step, how you would set this dataset up in SPSS and conduct descriptive statistical analysis of all measurements.",
          "type": "extended",
          "marks": 8,
          "answer": "First, download the Excel dataset from the Moodle site and open SPSS, selecting 'New Files: New Dataset'. Input the data from Excel into SPSS. Switch to the Variable View page and set up parameters for every factor and variable: give each variable a name; for the Group variable, change the type from String to Numeric, set Decimals from the default (e.g., 15) to 3, and define value labels (1 = Control, 2 = Olanzapine, 3 = Olanzapine+Exercise); apply appropriate types, decimals and labels to all outcome variables as well. Select Data View to confirm the data rows are correctly entered, with one row per subject and numeric group codes. Then use the Analyze menu to run descriptive statistics on all measurements, obtaining the Mean, standard deviation (SD) and/or standard error of mean (SEM) for each variable, and check the output for sensible values before proceeding to further analysis.",
          "explanation": "A full-credit answer covers: creating a new dataset, importing from Excel, configuring Variable View (type, decimals, value labels), verifying in Data View, and running Analyze-based descriptives (Mean, SD, SEM)."
        },
        {
          "id": "medi304-auto-mtylu5kw-q0",
          "topic": "communication",
          "ai": true,
          "question": "According to the task, which elements must be included when making a scientific table to present descriptive statistics?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Title, group (treatment) information, sample size, variables, and mean with SD/SEM",
            "Only the mean values of each variable",
            "A figure legend, axis labels and error bars",
            "p-values and confidence intervals only"
          ],
          "answer": 0,
          "explanation": "The task specifies the table should include a title, group (treatment) information, sample size, measurements (variables), mean, and SD or SEM."
        },
        {
          "id": "medi304-auto-mtylu5kw-q1",
          "topic": "communication",
          "ai": true,
          "question": "Describe the difference between the standard deviation (SD) and the standard error of the mean (SEM), and state what each is used to describe.",
          "type": "short",
          "marks": 3,
          "answer": "The SD describes the spread of individual data points around the sample mean, characterising the variability of the data. The SEM describes the precision of the sample mean as an estimate of the population mean (SEM = SD/√n). SD is therefore used to summarise data variability, while SEM indicates the uncertainty of the mean estimate.",
          "explanation": "Both statistics appear in the task; SD characterises dispersion of observations, whereas SEM characterises the reliability of the sample mean."
        },
        {
          "id": "medi304-auto-mtylu5kw-q2",
          "topic": "spss-essentials",
          "ai": true,
          "question": "In this practical task, where do the Mean, SD and/or SEM values for the table come from?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "They are typed in manually by hand",
            "The statistical outputs obtained in Week 10 Practical Task 3",
            "The Week 9 practical slides",
            "A published journal article"
          ],
          "answer": 1,
          "explanation": "Task 4 uses the statistical outputs (Mean, SD and/or SEM of all variables) generated in Week 10 Practical Task 3, while the Practical Task 2 file is the source SPSS data file."
        },
        {
          "id": "medi304-auto-mtylu5kw-q3",
          "topic": "communication",
          "ai": true,
          "question": "Why is it important to report sample size (n) alongside the mean and SD/SEM in a scientific table?",
          "type": "short",
          "marks": 3,
          "answer": "Sample size shows how much data underlies each summary statistic, allowing readers to judge the precision and reliability of the estimates (SEM depends on n). It also lets readers appraise or reproduce the analysis, and group sizes may differ between treatment groups.",
          "explanation": "Reporting n is a required component of the table and provides essential context for interpreting the descriptive statistics."
        },
        {
          "id": "medi304-auto-mtylu5kw-q4",
          "topic": "communication",
          "ai": true,
          "question": "According to the task, where should students look for guidance on how to make a scientific table?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Week 9 practical slides",
            "Week 10 Practical Task 1 instructions",
            "The SPSS help manual",
            "The course reading list"
          ],
          "answer": 0,
          "explanation": "The task explicitly refers students to the Week 9 practical slides for information on how to make a scientific table."
        },
        {
          "id": "medi304-auto-mtylu5kw-q5",
          "topic": "communication",
          "ai": true,
          "question": "What does the task suggest can be added to the scientific table at a later stage?",
          "type": "short",
          "marks": 3,
          "answer": "The outputs of statistical analysis (e.g., inferential test results) can be added into the table later.",
          "explanation": "The table first presents descriptive statistics (mean, SD/SEM); results of statistical analysis may be incorporated at a later stage."
        },
        {
          "id": "medi304-auto-mtylvuaf-q0",
          "topic": "research-design",
          "ai": true,
          "question": "Which combination contains the three essential criteria of a true experimental design?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Observation, interviews and a case series",
            "Randomisation, manipulation of the independent variable, and experimental and control groups",
            "Retrospective recall, matching and an odds ratio",
            "Prevalence measurement, correlation and regression"
          ],
          "answer": 1,
          "explanation": "A true experiment requires random allocation of participants, active manipulation of the independent variable, and comparison between experimental and control groups."
        },
        {
          "id": "medi304-auto-mtylvuaf-q1",
          "topic": "research-design",
          "ai": true,
          "question": "What feature distinguishes a factorial design from a two-arm post-test-only design?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "It does not use randomisation",
            "It examines two or more independent variables and their possible interaction",
            "It includes only one participant group",
            "It cannot include a control group"
          ],
          "answer": 1,
          "explanation": "A factorial design manipulates two or more independent variables simultaneously, allowing the estimation of both their main effects and any interaction between them."
        },
        {
          "id": "medi304-auto-mtylvuaf-q2",
          "topic": "research-design",
          "ai": true,
          "question": "In a double-blind randomised controlled trial, who is aware of the treatment allocation?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Participants only",
            "Researchers only",
            "Neither the participants nor the researchers",
            "Everyone involved in the trial"
          ],
          "answer": 2,
          "explanation": "Double blinding means neither participants nor researchers know who receives the active treatment or the placebo, reducing expectation and observer bias."
        },
        {
          "id": "medi304-auto-mtylvuaf-q3",
          "topic": "research-design",
          "ai": true,
          "question": "What is the purpose of a washout period in a crossover design?",
          "type": "short",
          "marks": 3,
          "answer": "A washout period is included to reduce the influence (carry-over effect) of the first intervention on the subsequent condition, so that the effect of the second treatment can be assessed without contamination from the first. It allows participants' responses to return to baseline before they cross over to the other treatment.",
          "explanation": "Without an adequate washout, residual effects of the first intervention would bias measurement of the second intervention's effect."
        },
        {
          "id": "medi304-auto-mtylvuaf-q4",
          "topic": "research-design",
          "ai": true,
          "question": "Explain how a quasi-experimental study differs from a true experimental study, when it might be preferred, and one strength and one limitation of the approach.",
          "type": "short",
          "marks": 4,
          "answer": "A quasi-experimental design differs because it lacks randomisation, a control group, or both, while still manipulating an independent variable. It is particularly useful when random assignment is not possible (e.g. for practical or ethical reasons) or when a control group cannot be used. A strength is that it can be easily conducted in a real-world setting. A limitation is that it does not always produce equivalent groups and cannot completely eliminate selection bias, weakening causal inference.",
          "explanation": "Quasi-experiments retain manipulation of the independent variable but sacrifice full experimental control, trading internal validity for feasibility."
        },
        {
          "id": "medi304-auto-mtylvuaf-q5",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A researcher measures a continuous outcome pre-test and post-test in a one-group quasi-experimental design. Which statistical test is appropriate for comparing the two measurements, and why?",
          "type": "short",
          "marks": 3,
          "answer": "A paired t-test is appropriate because the same participants are measured twice (pre-test and post-test), producing two related/paired samples. The paired t-test compares the means of these matched measurements, accounting for within-person correlation. An independent-samples t-test would be incorrect since the groups are not independent, and Mann-Whitney U or chi-square do not suit paired continuous data.",
          "explanation": "Related measurements on the same individuals require a paired/related-samples test rather than an independent-samples test."
        },
        {
          "id": "medi304-auto-mtylvuaf-q6",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "Explain the difference between intention-to-treat and per-protocol analyses in an RCT, and why baseline characteristics of the groups should be compared.",
          "type": "short",
          "marks": 4,
          "answer": "Intention-to-treat (ITT) analysis includes every participant who was randomised, analysed in the group to which they were allocated regardless of whether they adhered to the treatment; per-protocol analysis includes only those participants who followed the protocol as planned. Baseline characteristics are compared to determine whether randomisation produced comparable (balanced) groups, since imbalance could confound the treatment comparison. ITT is generally preferred because it preserves the benefits of randomisation and reflects real-world adherence.",
          "explanation": "Together these checks address group comparability and the handling of non-adherence, both critical to valid RCT conclusions."
        },
        {
          "id": "medi304-auto-mtylvuaf-q7",
          "topic": "rct-samplesize",
          "ai": true,
          "question": "Describe the key procedural and methodological features of a randomised controlled trial, from recruitment through to analysis.",
          "type": "extended",
          "marks": 10,
          "answer": "The primary aim of an RCT is to establish a cause-and-effect relationship between an intervention and an outcome. Eligible participants give informed consent, which normally occurs immediately before randomisation. Participants are then allocated to groups at random, by chance alone, which guards against selection bias and produces groups expected to be comparable. Double blinding is typically used so that neither participants nor researchers know who receives the treatment or placebo, reducing performance and measurement bias. Because the design manipulates the independent variable and includes experimental and control groups, it meets the criteria of a true experimental design. After allocation, baseline characteristics of the groups are compared to check that randomisation produced comparable groups. At analysis, intention-to-treat analysis includes all randomised participants in their allocated groups, whereas per-protocol analysis includes only those who followed the protocol; both approaches should be considered when interpreting effectiveness.",
          "explanation": "A strong answer links each procedural step (consent, randomisation, blinding, baseline comparison) to the bias it controls, and contrasts ITT with per-protocol analysis."
        },
        {
          "id": "medi304-auto-mtylxcqk-q0",
          "topic": "data-distributions",
          "ai": true,
          "question": "According to the slides, which test do some researchers consider better for assessing normality when the sample size is less than 50?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Kolmogorov-Smirnov goodness-of-fit test",
            "Shapiro-Wilk test",
            "Independent t-test",
            "Chi-square test"
          ],
          "answer": 1,
          "explanation": "The slides state that some researchers think the Shapiro-Wilk test is better when n < 50; the Kolmogorov-Smirnov goodness-of-fit test is the alternative."
        },
        {
          "id": "medi304-auto-mtylxcqk-q1",
          "topic": "data-distributions",
          "ai": true,
          "question": "When testing the distribution of a measurement for normality, how should the data be selected?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Divide subjects into their groups and test each group separately",
            "Use data from all subjects for each measurement, testing each measurement individually",
            "Use only the subjects in the largest group",
            "Pool all different measurements into a single test"
          ],
          "answer": 1,
          "explanation": "The slides explicitly instruct: select data from all subjects, do not divide by groups, and test all measurements individually."
        },
        {
          "id": "medi304-auto-mtylxcqk-q2",
          "topic": "nonparametric-tests",
          "ai": true,
          "question": "A dataset contains several measurements and one of them is found not to be normally distributed. What should the researcher do?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Use parametric tests for every measurement anyway",
            "Use non-parametric tests for that measurement, while data with a normal distribution can still be analysed with parametric tests",
            "Discard the non-normal measurement from the study",
            "Apply post-hoc tests to correct the distribution"
          ],
          "answer": 1,
          "explanation": "The slides state: if data of one measurement is not normally distributed, non-parametric tests should be used; for other data with a normal distribution, parametric tests should still be used."
        },
        {
          "id": "medi304-auto-mtylxcqk-q3",
          "topic": "data-distributions",
          "ai": true,
          "question": "A Shapiro-Wilk test on a measurement returns p > 0.05. What is the appropriate conclusion?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The data are significantly non-normal, so non-parametric tests must be used",
            "The data are not significantly different from a normal distribution, supporting the parametric assumption",
            "Normality has been definitively proven",
            "The test must be rerun separately for each group"
          ],
          "answer": 1,
          "explanation": "These tests assess whether a distribution is not significantly different from the hypothesised normal distribution; a non-significant result is consistent with normality, supporting parametric analysis."
        },
        {
          "id": "medi304-auto-mtylxcqk-q4",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Explain why the assumption of normality matters for parametric tests, and what caution the slides advise when normality is simply assumed rather than tested, particularly for small samples.",
          "type": "short",
          "marks": 4,
          "answer": "Many common parametric statistical tests assume that measurements and/or means of measurements are normally distributed, so the validity of these tests depends on this assumption holding. Often, normality is assumed rather than tested, particularly for small samples. However, this assumption may or may not be justified. The slides therefore advise that whether the assumption is reasonable should be a consideration in the interpretation of such results.",
          "explanation": "Draws directly on the slides: the parametric assumption, its frequent assumption in small samples, and the interpretive caution this requires."
        },
        {
          "id": "medi304-auto-mtylxcqk-q5",
          "topic": "data-distributions",
          "ai": true,
          "question": "Describe the procedure a researcher should follow when checking a dataset of several measurements for normality.",
          "type": "short",
          "marks": 3,
          "answer": "Select one measurement at a time. For each measurement, use the data from all subjects (do not divide subjects by group). Each measurement should be tested individually using the Kolmogorov-Smirnov goodness-of-fit test or the Shapiro-Wilk test.",
          "explanation": "The slides stress testing each measurement individually, using all subjects' data, without entering a grouping variable."
        },
        {
          "id": "medi304-auto-mtylxcqk-q6",
          "topic": "nonparametric-tests",
          "ai": true,
          "question": "A study collected five outcome measurements. Normality testing shows four are normally distributed and one is not. Outline how test selection should proceed for each outcome and justify your reasoning.",
          "type": "short",
          "marks": 4,
          "answer": "For the one measurement that is not normally distributed, a non-parametric test should be used, because parametric tests assume normally distributed measurements and this assumption is violated. For the four measurements that are normally distributed, parametric tests should still be used, since the parametric assumption is supported. The normality results justify a measurement-by-measurement choice of test rather than applying one test family to all outcomes.",
          "explanation": "Applies the slides' rule: non-normal data require non-parametric tests; normally distributed data can still be analysed with parametric tests."
        },
        {
          "id": "medi304-auto-mtylxcqk-q7",
          "topic": "data-distributions",
          "ai": true,
          "question": "Discuss the role of normality testing in selecting between parametric and non-parametric statistical tests. Include the specific tests used, sample size considerations, correct testing procedure, and the implications for interpretation when normality is assumed but not tested.",
          "type": "extended",
          "marks": 8,
          "answer": "Many common parametric statistical tests assume that measurements and/or means of measurements are normally distributed; the choice between parametric and non-parametric tests therefore hinges on whether this assumption holds. Formal assessment uses the Kolmogorov-Smirnov goodness-of-fit test or the Shapiro-Wilk test, which test whether a given distribution is not significantly different from the hypothesised normal distribution; some researchers consider the Shapiro-Wilk test preferable when n < 50. Procedurally, the distribution of each measurement should be tested individually, selecting data from all subjects and not dividing subjects by groups. If a measurement's data are not normally distributed, non-parametric tests should be used for that measurement, whereas measurements with a normal distribution should still be analysed with parametric tests. Finally, normality is often simply assumed, particularly for small samples; this may or may not be justified, and whether the assumption is reasonable should be a consideration when interpreting results, since unjustified assumptions may undermine the validity of parametric analyses.",
          "explanation": "A full-credit answer covers: the parametric assumption, K-S and Shapiro-Wilk (with the n < 50 preference for Shapiro-Wilk), the all-subjects/each-measurement-individually procedure, the parametric vs non-parametric decision rule, and the caution about assumed normality."
        },
        {
          "id": "medi304-auto-mtylzgpt-q0",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "What does internal validity primarily assess?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Whether results can be generalised to other populations",
            "Whether the observed effect can be attributed to the exposure or intervention rather than bias, confounding or other factors",
            "Whether the study has a large sample",
            "Whether findings have been published"
          ],
          "answer": 1,
          "explanation": "Internal validity concerns causal attribution of the observed effect to the intervention; generalisability is external validity, and sample size or publication status are separate issues."
        },
        {
          "id": "medi304-auto-mtylzgpt-q1",
          "topic": "measurements",
          "ai": true,
          "question": "A depression test measures symptoms of depression rather than symptoms of bipolar disorder or schizophrenia. Which type of validity does this demonstrate?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Ecological validity",
            "Construct validity",
            "Concurrent validity",
            "Population validity"
          ],
          "answer": 1,
          "explanation": "Construct validity means the instrument measures the theoretical construct it is intended to measure, distinguishing it from related but distinct constructs."
        },
        {
          "id": "medi304-auto-mtylzgpt-q2",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Which approach is most likely to improve external validity?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Recruiting a small and highly selected sample",
            "Conducting the study in only one specialised group",
            "Replicating the study using different samples and settings",
            "Allowing researchers to allocate participants to groups"
          ],
          "answer": 2,
          "explanation": "External validity is strengthened by replication across diverse samples and settings; narrow, highly selected samples and researcher allocation do not aid generalisability."
        },
        {
          "id": "medi304-auto-mtylzgpt-q3",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Which condition must be present for a variable to act as a confounder?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "It must be associated with both the exposure and the outcome",
            "It must be caused by the exposure",
            "It must be the dependent variable",
            "It must occur after the outcome"
          ],
          "answer": 0,
          "explanation": "A confounder is associated with both the exposure and the outcome, distorting the exposure-outcome relationship; a variable caused by the exposure lies on the causal pathway instead."
        },
        {
          "id": "medi304-auto-mtylzgpt-q4",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "During a study of an exercise programme, some participants join another physical-activity study. Name the threat to internal validity this represents and explain why it undermines causal inference.",
          "type": "short",
          "marks": 3,
          "answer": "This is history: an external event or experience concurrent with the study (joining another physical-activity programme) that could influence the outcome. Because the effect of the external programme cannot be separated from the intervention under study, any observed change cannot be confidently attributed to the exercise programme itself.",
          "explanation": "History refers to outside events during the study period, distinct from maturation, which is natural change within participants."
        },
        {
          "id": "medi304-auto-mtylzgpt-q5",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Explain why a high dropout rate can introduce bias into a study.",
          "type": "short",
          "marks": 3,
          "answer": "Participants who withdraw may differ systematically from those who remain (e.g., in motivation, severity or response to treatment). If dropout is differential between groups, the final comparison no longer reflects the originally randomised groups, so the observed effect may be distorted rather than being a true treatment effect.",
          "explanation": "This is experimental mortality (attrition bias); randomisation cannot protect against bias introduced after allocation when dropout is related to outcome."
        },
        {
          "id": "medi304-auto-mtylzgpt-q6",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Define outcome-reporting bias and citation bias, and briefly explain how each distorts the overall evidence base.",
          "type": "short",
          "marks": 4,
          "answer": "Outcome-reporting bias is the selective reporting of outcomes according to the nature or direction of their results, so non-significant or unwanted findings are omitted. Citation bias is the tendency for articles with significant findings to be cited more frequently than other articles. Both inflate the apparent strength and consistency of evidence: readers of the published literature see a favourable and more prominent set of results than actually exists.",
          "explanation": "Both are dissemination-related biases that affect the literature available for reviews and evidence-based decisions."
        },
        {
          "id": "medi304-auto-mtylzgpt-q7",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "A researcher runs a 12-month exercise intervention in children to improve fitness. (i) Describe three threats to internal validity relevant to this study, with examples. (ii) Explain how random assignment and standardised, blinded assessment help control threats to internal validity. (iii) Discuss the trade-off between internal and external validity, including one strategy to improve external validity and how random error can be assessed or reduced.",
          "type": "extended",
          "marks": 10,
          "answer": "(i) Maturation: children's height and body weight naturally change over a long-term study, which could mimic an intervention effect. History: external events during the study, such as participants joining another physical-activity study. Experimental mortality: children dropping out over 12 months; withdrawers may differ from completers, biasing the final comparison. (ii) Random assignment creates comparable treatment and control groups, balancing both known and unknown confounders and preventing self-selection. Standardised measurement procedures applied identically to both groups, with blinding of the assessor, prevent subjective researcher judgement from exaggerating the intervention effect (measurement bias). (iii) Tight control and selected samples improve internal validity but can limit generalisability; a small, highly selected single-centre sample has poor external validity. Replicating the study in different samples and settings improves external validity. Random error is reduced by using a larger sample and assessed using p-values and confidence intervals, which quantify the precision and uncertainty of the estimate.",
          "explanation": "A strong answer names specific threats, links each control measure to the threat it addresses, and shows understanding of the internal/external validity trade-off and the role of sample size, p-values and confidence intervals."
        },
        {
          "id": "medi304-auto-mtym1ibp-q0",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Which statement best defines evidence-based medicine?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The use of research evidence alone",
            "The use of clinical experience without research",
            "The integration of best research evidence, clinical expertise and patient values",
            "The application of basic biological mechanisms to every patient"
          ],
          "answer": 2,
          "explanation": "EBM explicitly integrates three elements: the best available research evidence, the clinician's expertise, and the individual patient's values. Evidence alone, experience alone, or pathophysiological reasoning alone are each insufficient."
        },
        {
          "id": "medi304-auto-mtym1ibp-q1",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "What is the correct order of the five 'A' steps of evidence-based medicine as taught in the lecture?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Ask, assess, apply, acquire, appraise",
            "Assess, ask, acquire, appraise, apply",
            "Acquire, assess, appraise, ask, apply",
            "Assess, acquire, apply, ask, appraise"
          ],
          "answer": 1,
          "explanation": "The cycle begins with assessing the patient/problem, then asking a focused question, acquiring the evidence, appraising it, and applying it to the patient. This is the only option that preserves the logical ask-acquire-appraise sequence."
        },
        {
          "id": "medi304-auto-mtym1ibp-q2",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "In the PICO framework, what does the letter 'C' represent?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Cause",
            "Clinical expertise",
            "Comparison",
            "Conclusion"
          ],
          "answer": 2,
          "explanation": "PICO stands for Patient/Population, Intervention, Comparison and Outcome. The C (comparison) specifies the alternative against which the intervention is judged, such as placebo or standard care."
        },
        {
          "id": "medi304-auto-mtym1ibp-q3",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "What are the three key considerations when appraising evidence?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Cost, convenience and popularity",
            "Validity, effect size and precision",
            "Patient age, treatment duration and journal ranking",
            "Clinical experience, common sense and expert opinion"
          ],
          "answer": 1,
          "explanation": "Appraisal asks three questions: Are the results valid (methodologically sound)? How large is the effect? How precise is the estimate of that effect?"
        },
        {
          "id": "medi304-auto-mtym1ibp-q4",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Which factor is directly related to the precision of study findings?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The researcher's personal opinion",
            "The sample size and accuracy of measurement",
            "The popularity of the intervention",
            "The number of authors on the paper"
          ],
          "answer": 1,
          "explanation": "Precision reflects how tightly the estimate is determined: larger samples and more accurate measurement reduce random error and yield more precise findings."
        },
        {
          "id": "medi304-auto-mtym1ibp-q5",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "Which types of evidence are described as the 'gold standard' for evaluating whether a treatment does more good than harm?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Expert opinion and case reports",
            "Laboratory studies and clinical experience",
            "Systematic reviews, meta-analyses and randomised controlled trials",
            "Cross-sectional studies only"
          ],
          "answer": 2,
          "explanation": "Systematic reviews, meta-analyses and randomised controlled trials sit at the top of the evidence hierarchy for questions of treatment effect because they systematically minimise bias when estimating benefit versus harm."
        },
        {
          "id": "medi304-auto-mtym1ibp-q6",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "A doctor recommends sleep as a treatment for headache based on personal experience. Explain why this recommendation is not evidence-based medicine.",
          "type": "short",
          "marks": 3,
          "answer": "The recommendation rests only on unsystematic clinical experience, which is prone to bias and cannot reliably establish treatment effects (1 mark). Evidence-based medicine requires the integration of the best research evidence with clinical expertise and patient values (1 mark), and here no systematic research evidence has been consulted or appraised (1 mark).",
          "explanation": "Unsystematic experience is one of the classic pitfalls EBM is designed to counter; personal observation lacks controls and systematic outcome assessment."
        },
        {
          "id": "medi304-auto-mtym1ibp-q7",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "A laboratory study finds that melatonin reduces inflammatory cytokine production in cultured brain cells. Why is this finding insufficient for evidence-based clinical practice?",
          "type": "short",
          "marks": 4,
          "answer": "Basic mechanisms or pathophysiological principles alone do not establish clinical effectiveness (1 mark). Findings in cultured cells may not translate to effects in whole patients, and the study measures a surrogate (cytokines) rather than clinical outcomes (1-2 marks). Evidence-based practice requires evidence of clinically meaningful benefit and harm in humans, ideally from randomised controlled trials, systematic reviews and meta-analyses, which are the gold standard for judging whether a treatment does more good than harm (1-2 marks).",
          "explanation": "A biologically plausible mechanism is a starting hypothesis, not proof of effectiveness; only well-designed clinical studies can demonstrate that benefits outweigh harms in real patients."
        },
        {
          "id": "medi304-auto-mtym1ibp-q8",
          "topic": "bias-validity-ebm",
          "ai": true,
          "question": "A senior colleague prescribes a herbal supplement for migraine, citing twenty years of personal experience and a laboratory study showing the supplement reduces inflammatory markers in cultured cells. (a) Explain why this recommendation does not constitute evidence-based medicine. (b) Construct an answerable clinical question using the PICO framework. (c) Describe what evidence you would seek and how you would work through the five 'A' steps. (d) Outline the three key considerations you would use to appraise that evidence.",
          "type": "extended",
          "marks": 8,
          "answer": "(a) The recommendation relies on unsystematic clinical experience and a pathophysiological rationale from a cell-culture study; neither establishes clinical effectiveness, and EBM requires integrating the best research evidence with clinical expertise and patient values (2 marks). (b) PICO: Population - adults with migraine; Intervention - the herbal supplement; Comparison - placebo or standard preventive therapy; Outcome - migraine frequency, severity and functional impact (2 marks). (c) Seek systematic reviews, meta-analyses and randomised controlled trials - the gold standard for determining whether a treatment does more good than harm; work through the five A's: assess the patient's problem, ask the focused question, acquire the evidence, appraise it, and apply it while integrating the patient's values and preferences (2-3 marks). (d) Appraise for validity (are the methods sound?), effect size (how large is the benefit?) and precision (how certain is the estimate, which depends on sample size and accuracy of measurement?) (1-2 marks).",
          "explanation": "This integrates the quiz's core themes: the definition of EBM, the pitfalls of unsystematic experience and mechanistic reasoning, PICO, the five-A cycle and the appraisal triad."
        },
        {
          "id": "medi304-auto-mtym3u8z-q0",
          "topic": "data-distributions",
          "ai": true,
          "question": "In SPSS, to test whether a variable such as Age is normally distributed, which command sequence is correct?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Analyse → Descriptive Statistics → Explore; Plots → Normality plots with tests",
            "Analyse → Descriptive Statistics → Descriptive; Options → Mean, Std, Kurtosis, Skewness",
            "Analyse → Compare Means → One-Sample T Test with Age as the test variable",
            "Data → Sort Cases → Sort by Age → Ascending"
          ],
          "answer": 0,
          "explanation": "The Explore dialog with 'Normality plots with tests' produces formal normality tests; adding a grouping variable (e.g., Gender) to the Factor List tests subgroup normality. The Descriptive dialog only reports skewness and kurtosis values."
        },
        {
          "id": "medi304-auto-mtym3u8z-q1",
          "topic": "correlation-regression",
          "ai": true,
          "question": "When checking a simple linear regression in SPSS using the Plots dialog, which assignment of variables is correct?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "*ZRESID in Y and *ZPRED in X",
            "*ZPRED in Y and *ZRESID in X",
            "Histogram in Y and Normal probability plot in X",
            "Weight in Y and waist circumference in X"
          ],
          "answer": 0,
          "explanation": "Standardised residuals (*ZRESID) are plotted on the Y axis against standardised predicted values (*ZPRED) on the X axis, with Histogram and Normal probability plot options also selected to check assumptions."
        },
        {
          "id": "medi304-auto-mtym3u8z-q2",
          "topic": "nonparametric-tests",
          "ai": true,
          "question": "Which SPSS command path runs a Mann-Whitney U test comparing triglycerides between Disease groups coded 1 and 2?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Analyze → Nonparametric Tests → Legacy Dialogs → 2 Independent Samples",
            "Analyze → Nonparametric Tests → Legacy Dialogs → 2 Related Samples",
            "Analyze → Nonparametric Tests → Legacy Dialogs → K Independent Samples",
            "Analyze → Correlate → Bivariate"
          ],
          "answer": 0,
          "explanation": "Mann-Whitney U uses '2 Independent Samples' with the test variable (e.g., triglyceride) and a grouping variable with groups defined as 1 and 2. '2 Related Samples' is the Wilcoxon signed-rank test and 'K Independent Samples' is Kruskal-Wallis."
        },
        {
          "id": "medi304-auto-mtym3u8z-q3",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A two-way ANOVA of waist circumference with Gender and Disease as factors is performed in SPSS via:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Analyze → General Linear Model → Univariate, with Gender and Disease in Fixed Factor(s)",
            "Analyze → Compare Means → One-Way ANOVA, with Gender and Disease in the Factor box",
            "Analyze → General Linear Model → Repeated Measures, with Gender as a within-subject factor",
            "Analyze → Descriptive Statistics → Crosstabs, with Gender in rows and Disease in columns"
          ],
          "answer": 0,
          "explanation": "Two-way ANOVA uses the Univariate GLM dialog with both categorical variables as Fixed Factors; EM Means can display Gender, Disease and Gender*Disease means, with homogeneity tests and estimates of effect size, and a profile plot with Gender in Separate Lines and Disease on the Horizontal Axis."
        },
        {
          "id": "medi304-auto-mtym3u8z-q4",
          "topic": "data-distributions",
          "ai": true,
          "question": "Outline the SPSS commands needed to test the homogeneity of variance of Age across Gender groups.",
          "type": "short",
          "marks": 3,
          "answer": "Go to Analyze → Descriptive Statistics → Explore; place Age in the Dependent List and Gender in the Factor List (1 mark). Under Statistics select Descriptive (1 mark). Under Plots select Histogram and Normality plots with tests, and select Power estimation, then Continue → OK (1 mark).",
          "explanation": "The Explore procedure with a factor variable supplies the variance homogeneity check; the power estimation option is selected from the Plots dialog as specified in the commend sheet."
        },
        {
          "id": "medi304-auto-mtym3u8z-q5",
          "topic": "parametric-tests",
          "ai": true,
          "question": "Describe how to run a one-sample t-test in SPSS to compare the mean FastingGlucose of a selected group against a population value of 4 mmol/L.",
          "type": "short",
          "marks": 4,
          "answer": "If only a subgroup is needed, first restrict the analysis using Data → Select Cases → If condition is satisfied (e.g., Disease = 1) → OK (1 mark). Then go to Analyse → Compare Means → One-Sample T Test (1 mark). Bring FastingGlucose into the Test Variable(s) box (1 mark). Enter the population value 4 in the Test Value box and click OK; output compares the sample mean to 4 mmol/L (1 mark).",
          "explanation": "The one-sample t-test requires a single test variable and a population reference value entered as the Test Value."
        },
        {
          "id": "medi304-auto-mtym3u8z-q6",
          "topic": "parametric-tests",
          "ai": true,
          "question": "A researcher measures body fat percentage at baseline, week 6 and week 12 and wants to run a one-way repeated measures ANOVA in SPSS. Describe the full sequence of commands and options, and state what each key option contributes to the output.",
          "type": "extended",
          "marks": 8,
          "answer": "If restricting to one sex, use Data → Select Cases → If condition is satisfied (e.g., sex = 1) (1 mark). Go to Analyse → General Linear Model → Repeated Measures (1 mark). Type 'Times' as the Within-Subject Factor Name and enter the number of levels (3), then Add → Define (1 mark). Place bodyfp0, bodyfp6 and bodyfp12 into the Within-Subjects Variables slots in the correct time order (1 mark). Under Options select Descriptive Statistics and Homogeneity (1 mark). Under EM Means put Time in Display Means for, select Compare main effects and choose Bonferroni as the confidence interval adjustment, giving adjusted pairwise comparisons between time points (1-2 marks). Under Plots put Time on the Horizontal Axis and Add, producing a profile plot of means over time (1-2 marks).",
          "explanation": "Full credit requires the within-subject factor definition, correct placement of the three time-point variables, descriptive/homogeneity options, Bonferroni-adjusted main-effect comparisons and the means plot."
        },
        {
          "id": "medi304-auto-mtym3u8z-q7",
          "topic": "nonparametric-tests",
          "ai": true,
          "question": "Give the SPSS commands for running a chi-square test of the association between Disease and Smoking, including the cell outputs that should be requested.",
          "type": "short",
          "marks": 3,
          "answer": "Go to Analyze → Descriptive Statistics → Crosstabs; put Disease in the row (target) list and Smoking in the column list (1 mark). Click Statistics and tick Chi-square (1 mark). Click Cells and select Observed, Expected, Row, Column and Total, then Continue → OK (1 mark).",
          "explanation": "The Crosstabs procedure produces the chi-square statistic, and the Cells options display observed and expected counts with row, column and total percentages for interpreting the association."
        },
        {
          "id": "medi304-auto-mtym50ng-q0",
          "topic": "excel-pie-charts",
          "ai": true,
          "question": "In Excel, which tab do you use to insert a pie chart once your data are selected?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Home",
            "Insert",
            "Formulas",
            "Review"
          ],
          "answer": 1,
          "explanation": "After selecting the Data names and Data, click the Insert tab and choose Pie Charts to draw the pie chart."
        },
        {
          "id": "medi304-auto-mtym50ng-q1",
          "topic": "excel-pie-charts",
          "ai": true,
          "question": "Before inserting the pie chart in this practical, what must you select?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Only the Data (Percentages %) column",
            "Only the Data names column",
            "Both the Data names and the Data",
            "The empty chart area"
          ],
          "answer": 2,
          "explanation": "Both the Data names and the Data (percentages) must be selected so Excel knows the categories and their values."
        },
        {
          "id": "medi304-auto-mtym50ng-q2",
          "topic": "excel-pie-charts",
          "ai": true,
          "question": "What does clicking the '+' (Chart elements) button on a selected chart allow you to do?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Convert the pie chart into a bar chart",
            "Switch on Chart title, Data label and Legend and change their location",
            "Recalculate the percentages automatically",
            "Link the chart to SPSS"
          ],
          "answer": 1,
          "explanation": "The Chart elements menu lets you add the Chart title, Data labels and Legend, and their locations can also be changed."
        },
        {
          "id": "medi304-auto-mtym50ng-q3",
          "topic": "excel-pie-charts",
          "ai": true,
          "question": "In the worked example, the default chart title 'Percentages %' was edited to:",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Food ingredients %",
            "Data name %",
            "Pie chart of data",
            "Excel figure 1"
          ],
          "answer": 0,
          "explanation": "You select the Chart title and change 'Percentages %' to 'Food ingredients %' so the title describes the data."
        },
        {
          "id": "medi304-auto-mtym50ng-q4",
          "topic": "excel-pie-charts",
          "ai": true,
          "question": "Name the three chart elements switched on via the '+' (Chart elements) button in this practical and state how each improves the readability of the figure.",
          "type": "short",
          "marks": 3,
          "answer": "Chart title - tells the reader what the chart shows (e.g. 'Food ingredients %'); Data label - shows the percentage for each slice so exact values can be read; Legend - links each slice's colour to its food ingredient category. (1 mark per element with a valid justification.)",
          "explanation": "All three elements were explicitly toggled on via the Chart elements menu in the task instructions."
        },
        {
          "id": "medi304-auto-mtym50ng-q5",
          "topic": "excel-pie-charts",
          "ai": true,
          "question": "Describe, in order, the steps needed to produce a pie chart of food ingredient percentages in Excel from a table of data.",
          "type": "short",
          "marks": 4,
          "answer": "1) Input the category labels under 'Data name' (Food Ingredients) and the values under 'Data' (Percentages %). 2) Select both the Data names and the Data. 3) Click the Insert tab and choose Pie Charts to draw the chart. 4) Select the Chart title and edit it (e.g. to 'Food ingredients %'). 5) Use the '+' Chart elements button to add the Chart title, Data labels and Legend, and adjust colour/style if desired. (1 mark per correct step, max 4.)",
          "explanation": "The workflow follows the practical: data entry, selection, insertion, titling, then labelling and styling."
        },
        {
          "id": "medi304-auto-mtym50ng-q6",
          "topic": "communication",
          "ai": true,
          "question": "How would you transfer a finished Excel pie chart into your poster (Task 5), and what should you check about the figure before doing so?",
          "type": "short",
          "marks": 3,
          "answer": "Copy the chart in Excel and paste it into the PowerPoint or Word file used for the poster. Before pasting, check the chart has an appropriate, descriptive title (e.g. 'Food ingredients %'), data labels showing the percentages, a legend identifying each slice, and a clear style/colour scheme so it remains readable on the poster.",
          "explanation": "The task states the pie chart can be copied and pasted to PowerPoint or Word files for the poster, and lists title, data labels and legend as the elements to include."
        },
        {
          "id": "medi304-auto-mtym50ng-q7",
          "topic": "excel-pie-charts",
          "ai": true,
          "question": "You have a table of food ingredient percentages that must appear as a figure on a scientific poster. Describe how you would create the figure in Excel and prepare it for the poster, justifying your choice of chart type and the labelling you would add.",
          "type": "extended",
          "marks": 8,
          "answer": "A pie chart is appropriate because the data are categorical values expressed as percentages of a whole, so relative proportions of each food ingredient can be compared at a glance (2 marks). Data entry: type the ingredient names under 'Data name' and the percentages under 'Data' (1 mark). Select both columns, then use Insert then Pie Charts to generate the chart (1 mark). Click and edit the Chart title to a descriptive title such as 'Food ingredients %' rather than the default 'Percentages %' (1 mark). Use the '+' (Chart elements) button to switch on the Chart title, Data labels and Legend, and reposition them where they are clearest, since data labels let readers read exact percentages and the legend maps colours to ingredients (2 marks). Finally, use the Style sign to choose clear colours/styles, then copy and paste the chart into the PowerPoint or Word poster file, checking it is legible at poster size (1 mark).",
          "explanation": "A full answer integrates the practical steps (data entry, selection, Insert > Pie Charts, titling, chart elements, styling) with communication principles for poster figures."
        },
        {
          "id": "medi304-auto-mtym7ml7-q0",
          "topic": "excel-bar-graphs",
          "ai": true,
          "question": "In Excel, which ribbon tab contains the option used to insert the bar graph?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Insert",
            "Home",
            "Review",
            "Formulas"
          ],
          "answer": 0,
          "explanation": "After selecting the Group name and Mean columns, the Insert tab and its Insert Column or Bar chart option create the bar graph."
        },
        {
          "id": "medi304-auto-mtym7ml7-q1",
          "topic": "excel-bar-graphs",
          "ai": true,
          "question": "When specifying custom error bars, which data must be selected for both the Positive Error Value and the Negative Error Value?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "The group names",
            "The mean values",
            "The SEM data from the Excel table",
            "The sample sizes"
          ],
          "answer": 2,
          "explanation": "Under Error Bars > More Options > Custom > Specify Value, the SEM column is selected from the Excel table for both positive and negative error values."
        },
        {
          "id": "medi304-auto-mtym7ml7-q2",
          "topic": "communication",
          "ai": true,
          "question": "In this practical task, the completed bar graph is ultimately copied and pasted into which product?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "An SPSS output file",
            "A poster (Task 5)",
            "A statistical formula sheet",
            "An ethics application"
          ],
          "answer": 1,
          "explanation": "The task states the figure should be copied and pasted to a poster, which is Task 5, though it can also go into PowerPoint or Word files."
        },
        {
          "id": "medi304-auto-mtym7ml7-q3",
          "topic": "excel-bar-graphs",
          "ai": true,
          "question": "What three columns of data must be entered into the Excel table before drawing the graph?",
          "type": "short",
          "marks": 3,
          "answer": "Group name, Mean, and SEM (standard error of mean). These supply the bar categories, the bar heights, and the error bar lengths respectively.",
          "explanation": "The instructions specify inputting exactly these three column headers before creating the chart."
        },
        {
          "id": "medi304-auto-mtym7ml7-q4",
          "topic": "excel-bar-graphs",
          "ai": true,
          "question": "Describe the steps for adding custom SEM error bars to the bar graph in Excel.",
          "type": "short",
          "marks": 4,
          "answer": "Click the chart so the + (Chart Elements) sign appears; click + and choose Error Bars, then More Options; select Custom and click Specify Value; select the SEM data from the Excel table for both the Positive Error Value and the Negative Error Value; click OK.",
          "explanation": "Custom error bars must have the SEM range specified explicitly for both directions, otherwise Excel inserts default error bar values."
        },
        {
          "id": "medi304-auto-mtym7ml7-q5",
          "topic": "excel-bar-graphs",
          "ai": true,
          "question": "Which two kinds of titles on the chart should be edited, and how are axis titles added?",
          "type": "short",
          "marks": 3,
          "answer": "The chart title and the axis titles, both edited to reflect the study. Axis titles are added by clicking the chart, clicking the + Chart Elements sign, choosing Axis Title, then editing it.",
          "explanation": "Default placeholder titles must be replaced with study-specific labels before the figure is poster-ready."
        },
        {
          "id": "medi304-auto-mtym7ml7-q6",
          "topic": "excel-bar-graphs",
          "ai": true,
          "question": "Why are SEM error bars displayed on each bar rather than plotting the group means alone?",
          "type": "short",
          "marks": 3,
          "answer": "The SEM error bars show the precision of each group mean, so a reader can judge how reliably the sample mean estimates the true mean, rather than seeing only the magnitude of the group means.",
          "explanation": "Error bars turn a simple mean comparison into an honest display of uncertainty, which is expected on scientific posters."
        },
        {
          "id": "medi304-auto-mtym7ml7-q7",
          "topic": "excel-bar-graphs",
          "ai": true,
          "question": "A colleague has a table of group names, means and SEMs. Describe step by step how they would produce a poster-ready bar graph with standard error bars in Excel, and explain how the finished figure is used in the poster task.",
          "type": "extended",
          "marks": 8,
          "answer": "First, enter the data into Excel with three columns: Group name, Mean and SEM. Select the Group name and Mean columns, then use the Insert tab and choose Insert Column or Bar chart to create the bar graph. Edit the chart title so it describes the study. Click the chart so the + Chart Elements sign appears, choose Axis Title, and edit the axis titles based on the study. Click + again, choose Error Bars > More Options > Custom > Specify Value, and select the SEM data for both the Positive and Negative Error Values, then click OK, so each bar carries standard error bars. Use the Style sign to adjust colour or style for clarity and presentation. Finally, copy the finished bar graph and paste it into the poster (Task 5); the same figure can also be pasted into PowerPoint or Word files. Marks are awarded for the correct data setup, chart creation, titling, correct custom SEM error bar specification, styling, and transfer to the poster.",
          "explanation": "This tests recall of the complete workflow from the practical, including the commonly fumbled custom error bar dialogue."
        },
        {
          "id": "medi304-auto-mtym8tnh-q5",
          "topic": "communication",
          "ai": true,
          "question": "List the chart elements that must be added or edited, according to the task, before the line graph is ready to paste onto the Task 5 poster.",
          "type": "short",
          "marks": 3,
          "answer": "A chart title based on the study; axis titles (added via Chart Elements and edited based on the study); horizontal axis labels changed to the Time Data; custom error bars showing the SEM values; and optionally colour/style adjusted via the Style sign. The completed graph is then copied and pasted into the poster.",
          "explanation": "A self-contained, fully labelled figure with error bars is expected for scientific poster presentation."
        },
        {
          "id": "medi304-auto-mtym9v6g-q0",
          "topic": "correlation-regression",
          "ai": true,
          "question": "In Excel, which chart type should be used to display the correlation between food intake and weight gain?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Scatter graph",
            "Pie chart",
            "Clustered bar chart",
            "Histogram"
          ],
          "answer": 0,
          "explanation": "A scatter graph plots each subject's paired X (food intake) and Y (weight gain) values, which is the correct way to visualise a correlation between two continuous variables."
        },
        {
          "id": "medi304-auto-mtym9v6g-q1",
          "topic": "correlation-regression",
          "ai": true,
          "question": "Which chart element is added through the '+' (Chart Elements) menu to show the line of best fit on the correlation graph?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Trendline (Linear)",
            "Error bars",
            "Data table",
            "Legend"
          ],
          "answer": 0,
          "explanation": "The instructions specify clicking '+', selecting Trendline, then Linear, which draws the straight line of best fit summarising the direction of the relationship."
        },
        {
          "id": "medi304-auto-mtym9v6g-q2",
          "topic": "correlation-regression",
          "ai": true,
          "question": "According to the task, what information should be typed into the text box placed on the finished correlation graph?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "r = xxx, p = xxx",
            "Mean and standard deviation of both variables",
            "The study hypothesis",
            "The number of subjects only"
          ],
          "answer": 0,
          "explanation": "The graph should report the correlation coefficient (r) and its p-value so readers can judge both the strength and the statistical significance of the association."
        },
        {
          "id": "medi304-auto-mtym9v6g-q3",
          "topic": "correlation-regression",
          "ai": true,
          "question": "When plotting food intake against weight gain in this practical, on which axis should food intake be placed?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "X-axis (horizontal)",
            "Y-axis (vertical)",
            "Either axis, it makes no difference",
            "In the chart title only"
          ],
          "answer": 0,
          "explanation": "The task lists food intake for the X-axis (the predictor variable) and weight gain for the Y-axis (the outcome variable)."
        },
        {
          "id": "medi304-auto-mtym9v6g-q4",
          "topic": "correlation-regression",
          "ai": true,
          "question": "Outline the steps required in Excel to turn a table of food intake and weight gain data into a completed correlation graph ready for a poster.",
          "type": "short",
          "marks": 4,
          "answer": "Select the food intake (X-axis) and weight gain (Y-axis) columns for all subjects; use the Insert tab and choose Insert Scatter to draw the scatter graph; edit the default chart title to reflect the study; click the '+' (Chart Elements) sign to add and edit Axis titles for both axes; select Trendline then Linear; insert a text box reporting 'r = xxx, p = xxx'; optionally change colour or style, then copy and paste the figure into the PowerPoint or Word poster file."
        },
        {
          "id": "medi304-auto-mtym9v6g-q5",
          "topic": "correlation-regression",
          "ai": true,
          "question": "Why is it important that the finished correlation graph includes both the r and p values rather than the trendline alone?",
          "type": "short",
          "marks": 3,
          "answer": "The trendline only shows the visual direction and general pattern of the association. Reporting r quantifies the strength and direction of the correlation, while p indicates whether the association is statistically significant. Together they allow the reader to interpret the result objectively rather than from visual impression alone."
        },
        {
          "id": "medi304-auto-mtym9v6g-q6",
          "topic": "communication",
          "ai": true,
          "question": "Explain why the chart title and axis titles must be edited before the correlation figure is pasted onto a scientific poster.",
          "type": "short",
          "marks": 3,
          "answer": "A poster figure must be self-contained and understandable without extra explanation: the chart title tells readers what the figure shows in the context of the study, and axis titles identify the variables plotted (food intake and weight gain). Leaving the Excel placeholders ('Chart title', 'Axis title') conveys no information and would make the figure uninterpretable, undermining effective scientific communication."
        },
        {
          "id": "medi304-auto-mtym9v6g-q7",
          "topic": "communication",
          "ai": true,
          "question": "Describe how you would produce and present a correlation figure in Excel for a research poster, justifying each element you include.",
          "type": "extended",
          "marks": 8,
          "answer": "Data would be entered with food intake as the X variable and weight gain as the Y variable for every subject, then the two columns selected before choosing Insert > Insert Scatter, since a scatter plot is the correct display for the relationship between two continuous variables. The default chart title would be edited to describe the actual study, and axis titles for both axes would be added via the Chart Elements '+' menu so the figure is fully labelled and self-explanatory. A Linear trendline would be inserted to show the line of best fit and the overall direction of the association. A text box reporting 'r = xxx, p = xxx' would be added so the strength of the correlation and its statistical significance are stated explicitly rather than left to visual judgement. Colour or style could be adjusted for clarity and readability on the poster. Finally, the finished graph would be copied and pasted into the poster file (e.g., PowerPoint or Word for Task 5), ensuring the figure, its statistics and its labelling integrate cleanly into the overall presentation."
        },
        {
          "id": "medi304-auto-mtymat1a-q0",
          "topic": "research-design",
          "ai": true,
          "question": "What is an important purpose of a case report?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "To establish a causal relationship",
            "To report a novel and significant finding",
            "To compare treatment and control groups",
            "To estimate disease prevalence"
          ],
          "answer": 1,
          "explanation": "A case report describes a novel and significant finding, usually in a single patient; it cannot establish causation or prevalence."
        },
        {
          "id": "medi304-auto-mtymat1a-q1",
          "topic": "research-design",
          "ai": true,
          "question": "Which statistical measure is particularly relevant to a case-control study?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Relative risk",
            "Odds ratio",
            "Population mean only",
            "Coefficient of variation only"
          ],
          "answer": 1,
          "explanation": "Because case-control studies sample on outcome and look back at exposure, the odds ratio is the appropriate measure of association."
        },
        {
          "id": "medi304-auto-mtymat1a-q2",
          "topic": "research-design",
          "ai": true,
          "question": "A cross-sectional study is also commonly known as which type of study?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Cohort study",
            "Prevalence study",
            "Randomised controlled trial",
            "Laboratory experiment"
          ],
          "answer": 1,
          "explanation": "Cross-sectional studies examine data at one specific point in time and are commonly called prevalence studies."
        },
        {
          "id": "medi304-auto-mtymat1a-q3",
          "topic": "research-design",
          "ai": true,
          "question": "According to the lecture notes, which comparison between case-control and cohort studies is correct?",
          "type": "mcq",
          "marks": 1,
          "options": [
            "Case-control studies examine rare exposures, while cohort studies examine rare diseases",
            "Case-control studies are usually more expensive than cohort studies",
            "Case-control studies can examine multiple exposures, while cohort studies can examine multiple outcomes",
            "Both designs must be prospective"
          ],
          "answer": 2,
          "explanation": "Case-control designs efficiently study rare diseases and multiple exposures; cohort designs typically study rare exposures and multiple outcomes."
        },
        {
          "id": "medi304-auto-mtymat1a-q4",
          "topic": "research-design",
          "ai": true,
          "question": "Explain why causal conclusions about treatment efficacy should not be drawn from a case series.",
          "type": "short",
          "marks": 3,
          "answer": "A case series is a descriptive observational study that lacks experimental allocation of participants and lacks an appropriate control group. Without randomisation or controls, observed outcomes cannot be confidently attributed to the treatment because confounders and natural disease course are uncontrolled. Its proper role is to generate hypotheses for further studies, not to prove effectiveness.",
          "explanation": "The quiz emphasises that case series findings are used for hypothesis generation, not for proving treatment efficacy."
        },
        {
          "id": "medi304-auto-mtymat1a-q5",
          "topic": "research-design",
          "ai": true,
          "question": "Describe the correct basic sequence of a cohort study and state what is required of participants at enrolment.",
          "type": "short",
          "marks": 3,
          "answer": "At the beginning of a typical cohort study, enrolled participants should be free from the disease outcome being investigated. The sequence is: measure exposure, follow participants over time (examining them at intervals), and record outcomes as they occur. It is therefore a longitudinal, usually prospective design rather than starting from existing disease or measuring exposure after outcomes.",
          "explanation": "This contrasts with case-control studies, which begin with the outcome and look back at exposure."
        },
        {
          "id": "medi304-auto-mtymat1a-q6",
          "topic": "research-design",
          "ai": true,
          "question": "Compare case-control and cohort studies with respect to direction of inquiry, suitability for rare diseases or rare exposures, and the number of exposures or outcomes each can examine.",
          "type": "short",
          "marks": 4,
          "answer": "A case-control study compares people with an outcome (cases) to people without it (controls) and looks retrospectively at how frequently previous risk-factor exposure occurred in each group; it is efficient for studying rare diseases and can examine multiple exposures. A cohort study is longitudinal, measuring exposure first in disease-free participants and following them forward to record outcomes; it suits studying rare exposures and can examine multiple outcomes. The odds ratio is the key measure for case-control studies.",
          "explanation": "The quiz highlights complementary strengths: case-control = rare disease, multiple exposures, retrospective; cohort = rare exposure, multiple outcomes, prospective follow-up."
        },
        {
          "id": "medi304-auto-mtymat1a-q7",
          "topic": "research-design",
          "ai": true,
          "question": "Using the obesity example from the lecture, describe the design of a cross-sectional study comparing BMI and body-fat percentage. Explain why body weight alone is not an appropriate criterion for diagnosing obesity, state the expected main outcome of the study, and discuss what such a study can and cannot establish.",
          "type": "extended",
          "marks": 8,
          "answer": "A cross-sectional study examines data at one specific point in time and is commonly known as a prevalence study; it does not follow participants over years and involves no random allocation of treatments. In the obesity example, BMI and body-fat percentage would be measured simultaneously in a sample to determine the strength of the association between the two measures. Body weight alone is inappropriate because height can influence body weight and body composition matters, which is why a height-adjusted index such as BMI is used. The study can establish an association and estimate how common obesity is at that time point, but it cannot demonstrate that BMI causes obesity, cannot compare treatments, and cannot show changes over time. Like case-control studies, cross-sectional designs are primarily used to establish association rather than causation.",
          "explanation": "The quiz stresses that cross-sectional designs measure at one time point, suit association/prevalence questions, and cannot support causal or treatment-efficacy claims."
        }
      ],
      "cards": [
        {
          "id": "medi304-auto-mtxo7d8z-c0",
          "topic": "research-design",
          "front": "What are the three learning modules of MEDI304?",
          "back": "Module 1: Data Analysis; Module 2: Research Design; Module 3: Research outcome evaluation.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo7d8z-c1",
          "topic": "hypotheses-pvalues",
          "front": "What content does the MEDI304 Mid-Session Exam cover, and when is it held?",
          "back": "Lectures 1-5 (hypotheses/p/errors, data distributions, parametric tests, non-parametric tests). It is a 1-hour exam in Week 8, which has no lecture.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo7d8z-c2",
          "topic": "spss-essentials",
          "front": "What does the MEDI304 Practical Exam cover and how long is it?",
          "back": "Practical classes 2-7, examined in a 2-hour practical exam during Week 8.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo7d8z-c3",
          "topic": "spss-essentials",
          "front": "Which computer-lab activities run alongside the MEDI304 lectures?",
          "back": "Introduction to SPSS, data distribution, correlation/regression/t-test, one-way/repeated-measures/two-way ANOVA, ANCOVA, non-parametric tests, applying statistics to a project, presenting statistical outputs, graphing and posters, and research design labs with Dr Deng.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo7d8z-c4",
          "topic": "communication",
          "front": "Which textbooks are prescribed for MEDI304?",
          "back": "Huang, XF (2022) Medical Research Design and Analysis and Huang, XF (2022) Medical Research Proposal, Paper and Thesis Writing.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo7d8z-c5",
          "topic": "research-design",
          "front": "When do the mid-session recess, study recess and UOW exams occur?",
          "back": "Mid-session recess is 28/9-2/10, study recess is 2/11-6/11, and UOW exams run 7/11-14/11.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo8qhj-c0",
          "topic": "parametric-tests",
          "front": "What does a one-way ANOVA test?",
          "back": "Whether there is a significant difference in the means of three or more separate groups based on one factor (e.g., weight loss on Diet A, B and C). If significant (p < 0.05), post hoc tests such as Tukey's identify which specific groups differ.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo8qhj-c1",
          "topic": "parametric-tests",
          "front": "State the assumptions of one-way ANOVA.",
          "back": "The dependent variable is continuous; the independent variable is categorical with three or more levels; data in each group are normally distributed; homogeneity of variances (equal variances across groups); and observations are independent.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo8qhj-c2",
          "topic": "parametric-tests",
          "front": "Why use Tukey's test after a one-way ANOVA, and when?",
          "back": "Only when the ANOVA is significant. Tukey's post hoc test determines which specific group pairs differ (e.g., male bipolar vs male control weight in Bipolar49). Do not report post hoc results if the overall ANOVA is non-significant.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo8qhj-c3",
          "topic": "parametric-tests",
          "front": "What is a one-way repeated measures ANOVA?",
          "back": "A within-subject design comparing the means of the same group measured three or more times (e.g., blood pressure before, 6 weeks and 12 weeks after starting treatment). The F statistic is read from the 'Tests of Within-Subjects Effects' table.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo8qhj-c4",
          "topic": "parametric-tests",
          "front": "Why are Bonferroni-adjusted pairwise comparisons used in repeated measures ANOVA?",
          "back": "Follow-up pairwise comparisons (e.g., baseline vs 6 weeks, baseline vs 12 weeks, 6 vs 12 weeks) involve multiple tests, so the Bonferroni correction adjusts the p-values to control the inflated Type I error risk.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo8qhj-c5",
          "topic": "parametric-tests",
          "front": "What does a two-way ANOVA determine?",
          "back": "Differences in the means of a dependent variable across groups defined by two independent variables (factors A and B). It tests two main effects plus the interaction effect between the factors (e.g., diet × exercise on weight loss; gender × disease status on waist circumference).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo8qhj-c6",
          "topic": "parametric-tests",
          "front": "What is an interaction effect in two-way ANOVA, and what does a non-significant interaction imply?",
          "back": "An interaction means the effect of one factor depends on the level of the other (e.g., 'disease status had a larger effect on males than females'). A non-significant interaction (e.g., gender × disease F(1,45) = 0.635, p = 0.430) means post hoc analysis should focus on the main effects instead.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo8qhj-c7",
          "topic": "parametric-tests",
          "front": "What is ANCOVA and why is it used?",
          "back": "Analysis of Covariance examines differences between groups while statistically controlling for one or more potential confounding variables (covariates). After adjusting for the covariate, the group difference may remain significant or disappear - e.g., a class exam-score gap vanishing once revision time is controlled, or waist circumference still differing by gender after adjusting for smoking (F(1,46) = 4.243, p = 0",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo9a1b-c0",
          "topic": "rct-samplesize",
          "front": "What is the purpose of an RCT?",
          "back": "To establish whether an intervention causes a particular outcome and to determine which treatment is superior.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo9a1b-c1",
          "topic": "rct-samplesize",
          "front": "What does randomisation achieve in an RCT?",
          "back": "It assigns participants to different groups by chance, helping reduce selection bias and potential confounding effects.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo9a1b-c2",
          "topic": "rct-samplesize",
          "front": "What is a double-blind RCT?",
          "back": "A trial in which both participants and researchers are unaware of treatment allocation, reducing participant and researcher bias.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo9a1b-c3",
          "topic": "rct-samplesize",
          "front": "Intention-to-treat vs per-protocol analysis?",
          "back": "Intention-to-treat includes every participant in the group to which they were randomised; per-protocol includes only participants who adhered to the study protocol.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo9a1b-c4",
          "topic": "research-design",
          "front": "What are the requirements of a true experimental design?",
          "back": "Randomisation, deliberate manipulation of the independent variable, and at least one experimental group and one control group.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo9a1b-c5",
          "topic": "research-design",
          "front": "What is a factorial design?",
          "back": "A design examining two or more independent variables (factors) in the same study, allowing tests of each factor's main effect and whether the factors interact.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo9a1b-c6",
          "topic": "research-design",
          "front": "What is the purpose of a washout period in a crossover design?",
          "back": "It helps reduce the carryover effect, where the effect of the first intervention persists into the second condition, particularly when the first intervention has no permanent effect.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo9a1b-c7",
          "topic": "research-design",
          "front": "What defines a quasi-experimental study?",
          "back": "It manipulates an independent variable to examine its effect on a dependent variable, but lacks randomisation, a control group, or both. It is practical for real-world settings and small samples.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxo9a1b-c8",
          "topic": "parametric-tests",
          "front": "When is a paired t-test appropriate?",
          "back": "When the same participants are measured before and after treatment, producing two related measurements whose difference can be tested.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoagzw-c0",
          "topic": "bias-validity-ebm",
          "front": "What is internal validity?",
          "back": "Whether a study provides a credible cause-and-effect conclusion within the population studied. High internal validity means alternative explanations such as bias, confounding and systematic measurement error have been adequately controlled.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoagzw-c1",
          "topic": "bias-validity-ebm",
          "front": "What is external validity (generalisability)?",
          "back": "The extent to which study findings can be applied to other people, populations, settings or conditions. It is improved by representative sampling, appropriate inclusion and exclusion criteria, and replication across different populations and settings.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoagzw-c2",
          "topic": "measurements",
          "front": "What is construct validity?",
          "back": "It assesses whether a test accurately measures its intended theoretical concept rather than a different or closely related construct.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoagzw-c3",
          "topic": "bias-validity-ebm",
          "front": "History vs maturation: what is the difference?",
          "back": "History refers to external events occurring during a study that are not part of the intervention but may influence the outcome. Maturation refers to participants naturally changing over time, making it hard to separate the intervention effect from normal development.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoagzw-c4",
          "topic": "bias-validity-ebm",
          "front": "What defines a confounder, and what are common examples?",
          "back": "A variable associated with both the exposure and the outcome, but not caused by the exposure, making the exposure-outcome relationship potentially misleading. Common confounding factors include age, income, gender and ethnic background.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoagzw-c5",
          "topic": "bias-validity-ebm",
          "front": "How does attrition threaten a study?",
          "back": "Participants who leave may have different characteristics or experiences from those who continue, making the remaining sample less representative of the original population.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoagzw-c6",
          "topic": "bias-validity-ebm",
          "front": "What is outcome-reporting bias?",
          "back": "Reporting some outcomes while omitting others, often because certain findings are more favourable or statistically significant. Citation bias is related: significant findings receive more citations than less favourable ones.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoagzw-c7",
          "topic": "bias-validity-ebm",
          "front": "How does measurement bias arise, and what does increasing sample size actually fix?",
          "back": "Measurement bias occurs when assessments lack objectivity; subjective outcome measures may exaggerate the observed effect. Increasing sample size reduces random error rather than bias, and p-values and confidence intervals help assess whether findings are due to chance.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxobbaf-c0",
          "topic": "bias-validity-ebm",
          "front": "What are the three essential components of evidence-based medicine?",
          "back": "The best available research evidence, the clinician's expertise, and the individual patient's values. All three must be integrated — none is sufficient alone.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxobbaf-c1",
          "topic": "bias-validity-ebm",
          "front": "What are the five steps of practising evidence-based medicine?",
          "back": "Assess the problem, ask the question, acquire the evidence, appraise the evidence, and apply the evidence in practice.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxobbaf-c2",
          "topic": "bias-validity-ebm",
          "front": "What does PICO stand for?",
          "back": "Patient, Intervention, Comparison and Outcome — a structure for formulating a focused and testable clinical question.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxobbaf-c3",
          "topic": "bias-validity-ebm",
          "front": "What three things does appraisal of evidence examine?",
          "back": "Whether the study is valid, the size of the observed effect, and the precision of the estimate.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxobbaf-c4",
          "topic": "bias-validity-ebm",
          "front": "What is precision of an effect estimate and what influences it?",
          "back": "Precision concerns how accurately an effect has been estimated. It is influenced by sample size and measurement accuracy.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxobbaf-c5",
          "topic": "bias-validity-ebm",
          "front": "Which study designs are generally least likely to mislead when assessing treatment effects?",
          "back": "Systematic reviews, meta-analyses and RCTs — although EBM may also consider cohort, case-control and cross-sectional studies.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxobbaf-c6",
          "topic": "bias-validity-ebm",
          "front": "Why are mechanistic findings insufficient to claim an intervention works?",
          "back": "They may support further research, but they do not by themselves demonstrate that an intervention is effective in clinical practice.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxocn9h-c0",
          "topic": "observational-study-designs",
          "front": "How does a case report differ from a case series?",
          "back": "A case report describes a novel or significant observation in a single individual, while a case series describes multiple patients with a similar diagnosis, procedure or unusual finding. Both are descriptive only.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxocn9h-c1",
          "topic": "observational-study-designs",
          "front": "What defines a cross-sectional study and what is it also called?",
          "back": "An observational study that collects and analyses data at one specific point in time. It is also called a cross-sectional analysis, transversal study or prevalence study, and is neither longitudinal nor experimental.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxocn9h-c2",
          "topic": "observational-study-designs",
          "front": "Why can't treatment effects in a case series be interpreted as causal?",
          "back": "Treatment is not assigned using an experimental protocol and there is generally no control group. The design is descriptive and observational, so findings can only generate hypotheses for stronger designs such as RCTs.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxocn9h-c3",
          "topic": "observational-study-designs",
          "front": "What does a case-control study compare, and how is the result expressed?",
          "back": "It compares cases who have the disease or outcome of interest with controls who do not, examining previous exposure to possible risk factors. The odds of previous exposure among cases relative to controls is expressed as an odds ratio.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxocn9h-c4",
          "topic": "observational-study-designs",
          "front": "Outline the sequence of a cohort study.",
          "back": "Recruit participants initially free from the disease outcome, assess their exposure to the risk factor, then follow exposed and unexposed groups over time and record which health outcomes develop.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxocn9h-c5",
          "topic": "observational-study-designs",
          "front": "Why are case-control studies well suited to rare diseases?",
          "back": "They can investigate rare diseases using relatively small samples, making them less time-consuming and less expensive than many cohort studies.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxocn9h-c6",
          "topic": "observational-study-designs",
          "front": "Which design can study several exposures for one disease, and which can study several outcomes of one exposure?",
          "back": "A case-control study can investigate several possible previous exposures associated with one disease; a cohort study can examine multiple outcomes arising from a single exposure.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxocn9h-c7",
          "topic": "observational-study-designs",
          "front": "How is BMI calculated and why is it preferred over body weight alone?",
          "back": "BMI is weight in kilograms divided by height in metres squared. It accounts for height, since people of different heights may have different body weights without having different levels of obesity.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxodivb-c0",
          "topic": "communication",
          "front": "What sections must the MEDI304 research poster include?",
          "back": "Title, Introduction, Aims, Methods, Results, Discussion and Conclusion, plus a list of cited references.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxodivb-c1",
          "topic": "communication",
          "front": "What poster size and submission format is required?",
          "back": "A0 size (84.1 cm x 118.9 cm), landscape or portrait, uploaded as a PDF to Moodle by 27/10/2025 at 11:59 pm. Only one group member needs to upload.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxodivb-c2",
          "topic": "communication",
          "front": "How should results be presented on a research poster?",
          "back": "As clear, concise text supported by graphs and/or tables, with statistical analysis outcomes presented and clearly marked.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxodivb-c3",
          "topic": "communication",
          "front": "What should the introduction of a scientific poster contain?",
          "back": "Background to the study and a clear rationale, supported by appropriate scholarly literature references.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxodivb-c4",
          "topic": "communication",
          "front": "Which referencing system is specified for the poster?",
          "back": "The numbered reference system, with all cited references listed in the poster.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxodivb-c5",
          "topic": "communication",
          "front": "How is the Week 13 oral presentation structured?",
          "back": "10 minutes per group: 6-8 minutes of student presentation plus 2 minutes of question time, with every group member presenting a part.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxodivb-c6",
          "topic": "communication",
          "front": "Name two layout and readability tips for an effective poster.",
          "back": "Keep the layout clear so the poster is easy to read and understand, avoid technical jargon, and do not rely on too many abbreviations.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxodivb-c7",
          "topic": "communication",
          "front": "Why might a flow chart be included in the methods section?",
          "back": "Methods should be described clearly and succinctly, and a flow chart is an efficient visual way to convey the study design or analysis process.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoejam-c0",
          "topic": "spss-virtual-desktop",
          "front": "What URL is used to connect to the UoW virtual desktop (both for downloading the client and for the browser web client)?",
          "back": "https://vdiconnect.uow.edu.au. The browser web client is at https://vdiconnect.uow.edu.au/portal/webclient/index.html#/.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoejam-c1",
          "topic": "spss-virtual-desktop",
          "front": "Why should you always save your work to an external source when using the virtual desktop?",
          "back": "Pool policies may force log off after idle periods, and some virtual desktops are deleted on log off with a new one created. You may not reconnect to the same desktop, so save to a USB drive or file share.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoejam-c2",
          "topic": "spss-virtual-desktop",
          "front": "What is the difference between Disconnect and Disconnect & Log Off?",
          "back": "Disconnect leaves your virtual desktop in place so reconnecting returns you to where you left off. Disconnect & Log Off ends the session, and depending on the pool's policy the desktop may then be deleted.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoejam-c3",
          "topic": "spss-virtual-desktop",
          "front": "How do you enable USB keys or hard drives on the virtual desktop?",
          "back": "In the Horizon Client, select 'Connect USB Device' on the top toolbar and check 'Automatically Connect at start-up' and 'Automatically Connect when Inserted'. It must be enabled for security reasons and only works with the client.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoejam-c4",
          "topic": "spss-virtual-desktop",
          "front": "Why is the VMware Horizon Client recommended over connecting via a browser?",
          "back": "It gives a richer, smoother experience and allows USB devices to pass through, plus multiple screens and access to folders on the local machine.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoejam-c5",
          "topic": "spss-virtual-desktop",
          "front": "Why is the very first launch of your virtual desktop slow, and where do you get support?",
          "back": "The first launch must create a profile for you; afterwards launches are much quicker. Support is from the IMTS Help Desk on x3000.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxog2ob-c0",
          "topic": "bias-validity-ebm",
          "front": "What is the halo effect and how can it be controlled?",
          "back": "An observer-introduced cognitive bias where the researcher's expectation about a subject leads them to give more encouragement when assessing the experimental variable. It is controlled by having others make the measurements and using a double-blinded research design.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxog2ob-c1",
          "topic": "bias-validity-ebm",
          "front": "What is the placebo effect, and why is an 'old drug' preferred as the comparator in modern clinical trials?",
          "back": "A known-expectation effect where the placebo group improves due to expectation (e.g. taking a pill or sham surgery); true effectiveness is the difference between the experimental and placebo groups. An 'old drug' is preferred over a no-drug pill because it controls the expectation of receiving active treatment.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxog2ob-c2",
          "topic": "bias-validity-ebm",
          "front": "What is the Hawthorne effect?",
          "back": "A combined observer + participant effect where participants change their behaviour in response to their awareness of being observed. It originated at the Hawthorne plant of the Western Electric Company in Chicago, where output rose under observation.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxog2ob-c3",
          "topic": "bias-validity-ebm",
          "front": "List the forms of selection bias and the recruitment/dropout biases described in the lecture.",
          "back": "Selection bias: allocation bias, self-selection bias, and inclusion/exclusion criteria bias - solved by randomised allocation. Recruitment/dropout issues: population bias (e.g. chronic lung disease patients moving out of urban areas, migration/ethnic group bias), regional bias (e.g. psychiatric patients seeking city anonymity), and high dropout rates, since dropouts differ from those who continue.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxog2ob-c4",
          "topic": "bias-validity-ebm",
          "front": "What is information bias and what are its main forms?",
          "back": "Bias arising from how data are collected: measurement/assessment bias (non-objective assessments; subjective outcome measures exaggerate effects), response bias (inaccurate participant responses), observer bias (assessor leans toward expected outcomes - solved by blinding assessors), and the Hawthorne effect (a combination of observer and participant effect).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxog2ob-c5",
          "topic": "bias-validity-ebm",
          "front": "What is the difference between bias and confounding?",
          "back": "Bias creates an association that is not true; confounding describes an association that is true but potentially misleading. Both can contribute to Type 1 or Type 2 error.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxog2ob-c6",
          "topic": "bias-validity-ebm",
          "front": "What are the criteria for a confounding factor?",
          "back": "A confounder is associated with the exposure, associated with the outcome, and not caused by the exposure (not on the causal pathway). Common confounders: age, income, gender, ethnic background - e.g. smoking confounds lung cancer and alcohol-heart disease relationships; young age and blood pressure confound the physical activity-myocardial infarction relationship.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxog2ob-c7",
          "topic": "chance-random-error",
          "front": "Why are small sample sizes vulnerable to chance, and how is random error controlled?",
          "back": "Small samples are less likely to be representative, so the result can be higher or lower than the truth purely by random error. Control it by increasing sample size (association studies normally need ~300 samples) and using p values and confidence intervals.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoh58e-c0",
          "topic": "boxplots-outliers",
          "front": "What do boxplots depict?",
          "back": "Groups of numerical data through their quartiles, indicating variability outside the upper and lower quartiles.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoh58e-c1",
          "topic": "boxplots-outliers",
          "front": "What is the interquartile range (IQR)?",
          "back": "The range between the upper quartile (75th percentile) and lower quartile (25th percentile). It spans the middle 50% of the data and is the box in a boxplot.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoh58e-c2",
          "topic": "boxplots-outliers",
          "front": "When is a value considered an outlier using the standard-deviation rule?",
          "back": "When it lies beyond 2 standard deviations from the mean.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoh58e-c3",
          "topic": "boxplots-outliers",
          "front": "Which SPSS menu path produces boxplots?",
          "back": "Analyse → Descriptive Statistics → Explore. Put the variable in the Dependent List and any grouping variable (e.g., Gender) in the Factor List.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoh58e-c4",
          "topic": "boxplots-outliers",
          "front": "In SPSS Explore, which Statistics options support outlier identification and the percentiles table?",
          "back": "Descriptives, Outliers and Percentiles. The percentiles table lets you derive the IQR, and the Outliers table lists extreme cases.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoh58e-c5",
          "topic": "boxplots-outliers",
          "front": "How would you compare boxplots of triglycerides between males and females in Bipolar49?",
          "back": "In Explore, put 'triglyceride' in the Dependent List and 'Gender' in the Factor List, then request Descriptives, Outliers and Percentiles to compare the boxplots and identify outliers and extreme values.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoh58e-c6",
          "topic": "boxplots-outliers",
          "front": "What are the three reporting tasks for the boxplot practicals in this file?",
          "back": "Produce a percentiles table, find the interquartile range (IQR), and identify outliers (and extreme values).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoi8j7-c0",
          "topic": "correlation-regression",
          "front": "What is Pearson's correlation coefficient (r) used for and what values can it take?",
          "back": "It examines the relationship between two quantitative, continuous, normally distributed variables (e.g., body weight and waist size). r ranges from −1.0 to 1.0.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoi8j7-c1",
          "topic": "correlation-regression",
          "front": "How is the strength of a correlation classified by the absolute value of r?",
          "back": "|r| of 0.1–0.3 is weak, 0.4–0.6 is moderate, and 0.7–1.0 is strong.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoi8j7-c2",
          "topic": "correlation-regression",
          "front": "What are the SPSS steps for a Pearson correlation?",
          "back": "First check normality with Analyze → Descriptive Statistics → Explore. Then Analyze → Correlate → Bivariate; move both variables into the variable box; select Pearson and Two-tailed; under Options select Means and Standard Deviations.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoi8j7-c3",
          "topic": "correlation-regression",
          "front": "What are the purposes of simple linear regression?",
          "back": "To examine and quantify the relationship between one independent variable (X) and one dependent variable (Y); predict Y from a given X; determine how much variation in Y is explained by X (R²); and assess whether the relationship is statistically significant.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoi8j7-c4",
          "topic": "correlation-regression",
          "front": "What does R² = 0.405 mean in the regression of waist circumference on weight?",
          "back": "40.5% of the variation in waist circumference is explained by body weight.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoi8j7-c5",
          "topic": "correlation-regression",
          "front": "How do you interpret a regression B (slope) of 0.583 for weight predicting waist circumference?",
          "back": "Every 1 kg increase in weight is associated with a 0.583 cm increase in waist circumference.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoi8j7-c6",
          "topic": "correlation-regression",
          "front": "What are the SPSS steps for a simple linear regression?",
          "back": "Analyze → Regression → Linear; put the outcome in Dependent and the predictor in Independent. Under Statistics select Estimates, Model fit, R squared, descriptives and part/partial correlations; under Plots put *ZRESID in Y and *ZPRED in X and select Histogram and Normal probability.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtxoi8j7-c7",
          "topic": "correlation-regression",
          "front": "State the regression equation for waist circumference from weight in Bipolar49 and the predicted waist for an 80 kg participant.",
          "back": "y = 51.58 + 0.583x. For an 80 kg participant: 51.584 + (0.583 × 80) = 98.224 cm.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf6m2n-c0",
          "topic": "data-distributions",
          "front": "What does a skewness value of 0 indicate, and what are the thresholds for moderate and high skew?",
          "back": "Skewness of 0 indicates a normal distribution. Values between 0.5 and 1 (or -0.5 and -1) indicate moderately skewed data; values greater than 1 (or less than -1) indicate highly skewed data.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf6m2n-c1",
          "topic": "data-distributions",
          "front": "What do kurtosis values above +1 and below -1 indicate?",
          "back": "Kurtosis > +1 means the distribution is too peaked, with more extreme outliers than a normal distribution; kurtosis < -1 means it is too flat, with fewer extreme outliers. Normal distribution has k = 0.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf6m2n-c2",
          "topic": "data-distributions",
          "front": "Which measure of central tendency is least affected by skewness?",
          "back": "The median is less affected by skewness than the mean. For weights 70, 70, 70, 70, 200 kg, the mean is inflated to 96 kg by the outlier while the median (70 kg) and mode (70 kg) remain representative.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf6m2n-c3",
          "topic": "data-distributions",
          "front": "What is the Kolmogorov-Smirnov (K-S) test used for?",
          "back": "It is a test used to assess whether a dataset follows a normal distribution (a normality check).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf6m2n-c4",
          "topic": "data-distributions",
          "front": "Give an example of a U-shaped distribution.",
          "back": "Vitamin dose-response: a lack of vitamins causes adverse responses and an excess of vitamins also causes adverse responses, producing a U-shaped dose-dependence curve.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf6m2n-c5",
          "topic": "data-distributions",
          "front": "What real-world example of a bimodal distribution was given in the lecture?",
          "back": "The incidence of Hodgkin lymphoma in the United States, 2000-2005, by age, which shows two peaks and illustrates how mean and median behave in a bimodal distribution.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf6m2n-c6",
          "topic": "data-distributions",
          "front": "Define the mode and give an example.",
          "back": "The mode is the most frequently occurring value in a dataset. For 10, 20, 30, 40, 40 the mode is 40 because it appears twice.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf6m2n-c7",
          "topic": "data-distributions",
          "front": "Which statistical software packages were listed, and which was associated with meta-analysis?",
          "back": "IBM SPSS (Statistical Package for the Social Sciences), SAS (Statistical Analysis System) and STATA, which was listed for meta-analysis.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf7j60-c0",
          "topic": "data-distributions",
          "front": "What is nominal data?",
          "back": "Variables that are just 'names' with no quantitative value or inherent order, e.g., gender (dichotomous), hair colour, or state of residence. Only frequency and the mode summarize it.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf7j60-c1",
          "topic": "data-distributions",
          "front": "What defines ordinal data?",
          "back": "Data that can be rank-ordered, where the order matters but the differences between values are not known, e.g., satisfaction ratings from 'very satisfied' to 'very unsatisfied'.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf7j60-c2",
          "topic": "data-distributions",
          "front": "How do interval and ratio scales differ?",
          "back": "Both are numeric scales with exact, consistent differences between values (e.g., Celsius temperature vs weight). Ratio adds a true zero meaning complete absence of the quantity, so it has no negative values and permits multiplication and division.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf7j60-c3",
          "topic": "data-distributions",
          "front": "What does Levene's test do and what does p < 0.05 mean?",
          "back": "It assesses equality of variances for a variable across two or more groups (null: population variances are equal). p < 0.05 rejects equal variances, so one should switch to more generalized tests such as non-parametric tests.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf7j60-c4",
          "topic": "data-distributions",
          "front": "What are the Shapiro-Wilk and Kolmogorov-Smirnov tests used for?",
          "back": "Normality tests that compare sample scores to a normally distributed set with the same mean and SD. A significant result (p < 0.05) indicates the data are not normally distributed.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf7j60-c5",
          "topic": "data-distributions",
          "front": "What graphical methods does the file list for checking distributions?",
          "back": "Q-Q plots and boxplots. A boxplot shows minimum, 1st quartile (25%), median (50%), 3rd quartile (75%), maximum, and outliers.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf7j60-c6",
          "topic": "research-design",
          "front": "What is stratified random sampling?",
          "back": "Subdividing the population into strata or layers (e.g., age bands) and randomly sampling from each so the sample's composition (e.g., 40/30/20/10%) mirrors the population.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf7j60-c7",
          "topic": "research-design",
          "front": "What steps reduce bias when selecting a random sample?",
          "back": "Define the sample (health, age, gender), ensure each population member has an equal chance of selection, set inclusion/exclusion criteria, prevent subjects choosing their own group (selection bias), and randomize using random number tables or computer programs.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf8onl-c0",
          "topic": "bias-validity-ebm",
          "front": "What is the definition of evidence-based medicine (Sackett et al., 1996)?",
          "back": "The integration of best research evidence with clinical expertise and patient values. It is not only evidence - the source's validity and the patient's values also matter.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf8onl-c1",
          "topic": "bias-validity-ebm",
          "front": "What are the five 'A' steps of the EBM process?",
          "back": "Assess the problem, Ask the question, Acquire the evidence, Appraise the evidence (validity and usefulness), and Apply the evidence in practice.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf8onl-c2",
          "topic": "bias-validity-ebm",
          "front": "What does PICO stand for?",
          "back": "Patient, Intervention, Comparison and Outcome - a framework used in the 'Ask' step to plan study methods and state a testable, measurable hypothesis.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf8onl-c3",
          "topic": "bias-validity-ebm",
          "front": "What are the three key points when appraising evidence?",
          "back": "Validity (chance, bias, internal vs external validity), effect size (how much difference between testing and control groups), and precision (sample size and measurement accuracy).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf8onl-c4",
          "topic": "bias-validity-ebm",
          "front": "What does 'validity' assess when appraising a study?",
          "back": "Whether the result (positive vs negative) was due to chance, whether the study was biased, and whether it is internally and externally valid - so results can be contextualised and applied to practice.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf8onl-c5",
          "topic": "bias-validity-ebm",
          "front": "Which study designs are the 'gold standard' for judging whether a treatment does more good than harm?",
          "back": "Systematic reviews, meta-analyses and RCTs - they are much less likely to mislead. However, EBM is not restricted to them; cohort, case-control and cross-sectional studies also contribute.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf8onl-c6",
          "topic": "bias-validity-ebm",
          "front": "What is meant by effectiveness or efficacy in evidence-based practice?",
          "back": "A measure used to determine whether the treatment or intervention has an intended or expected outcome.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyf8onl-c7",
          "topic": "bias-validity-ebm",
          "front": "Why is relying on non-experimental approaches alone discouraged in EBM?",
          "back": "Non-experimental approaches frequently lead to false positive conclusions about efficacy. Evidence should therefore be integrated from stronger designs and appraised for validity, effect size and precision.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylabwg-c0",
          "topic": "correlation-regression",
          "front": "What is the difference between simple and multiple linear regression?",
          "back": "The number of independent variables: simple linear regression is one-to-one (one IV predicting one DV), while multiple linear regression is many-to-one (two or more IVs predicting one DV). Neither addresses causes.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylabwg-c1",
          "topic": "correlation-regression",
          "front": "What values do you report for a simple linear regression?",
          "back": "Report r2 for the strength of association and B for prediction; also report the ANOVA F and significance (Sig), and if p < 0.05, report the unstandardized B coefficient.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylabwg-c2",
          "topic": "correlation-regression",
          "front": "What rule does the file give for highly correlated independent variables in multiple regression?",
          "back": "If two independent variables are too highly correlated (r2 > ~0.6), only one of them should be used in the regression model - check this before developing the model.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylabwg-c3",
          "topic": "correlation-regression",
          "front": "In the Bipolar49 example, what does the coefficient 0.584 mean?",
          "back": "For every 1 kg increase in body weight, the predicted waist size increases by 0.584 cm; the full model is predicted waist size = 51.584 + 0.583 x weight (kg).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylabwg-c4",
          "topic": "logistic-regression",
          "front": "When should you use logistic regression instead of linear regression?",
          "back": "Use logistic regression when the dependent variable is binary/dichotomous (two outcomes such as pass/fail); use linear regression when the dependent variable is continuous. Logistic regression predicts the odds.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylabwg-c5",
          "topic": "logistic-regression",
          "front": "What does 'odds' mean in logistic regression?",
          "back": "Odds express the effect of a risk factor on the likelihood that one outcome will occur, e.g. Odds = 1.75, 95% CI (1.13-2.72), p < 0.01 means 1.75 times greater odds of the outcome, statistically significant.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylabwg-c6",
          "topic": "logistic-regression",
          "front": "What are the major assumptions of binary logistic regression?",
          "back": "The dependent variable should be dichotomous, there should be no outliers in the data, and there should be no high correlations among the predictors (assessed using a correlation matrix).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylabwg-c7",
          "topic": "logistic-regression",
          "front": "In the colour preference example, how is the odds of preferring black for males vs females calculated?",
          "back": "Odds = (103/11) / (341/405) = 11.12, meaning males have an 11 times higher chance of selecting black than females.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylbai9-c0",
          "topic": "parametric-tests",
          "front": "What does the Shapiro-Wilk test check in ANOVA?",
          "back": "It checks whether the dependent variable is normally distributed, one of the key assumptions of ANOVA.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylbai9-c1",
          "topic": "parametric-tests",
          "front": "What does Levene's test check?",
          "back": "It tests homogeneity of variance across groups. A non-significant result indicates equal variances can be assumed.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylbai9-c2",
          "topic": "parametric-tests",
          "front": "What are the two steps of one-way ANOVA?",
          "back": "Step 1: detect if there is an overall difference among groups (F test). Step 2: if significant, conduct post-hoc analysis to identify exactly where the differences lie.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylbai9-c3",
          "topic": "parametric-tests",
          "front": "Which post-hoc test is used when variances are unequal?",
          "back": "Games-Howell. When variances are equal (Levene's non-significant), use Tukey's HSD or REGWQ for equal sample sizes, Gabriel for slightly different sizes, and Hochberg's GT2 for very different sizes.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylbai9-c4",
          "topic": "parametric-tests",
          "front": "What is Bonferroni correction?",
          "back": "A conservative adjustment applied to each test to control for multiple testing. It stringently controls Type I error but is less powerful.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylbai9-c5",
          "topic": "parametric-tests",
          "front": "What is Dunnett's test used for?",
          "back": "Comparing a control condition against each of the other conditions; experimental conditions are not compared with each other.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylbai9-c6",
          "topic": "parametric-tests",
          "front": "What is one-way repeated measures ANOVA?",
          "back": "It compares means across one or more variables based on repeated observations on the same subjects (within-subject ANOVA), with one categorical independent variable and one continuous dependent variable.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylbai9-c7",
          "topic": "parametric-tests",
          "front": "Advantages of repeated measures ANOVA?",
          "back": "Controls for individual differences among participants (reducing variation), is economical (fewer subjects required), and allows study of change across time.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylcu19-c0",
          "topic": "parametric-tests",
          "front": "What is two-way ANOVA?",
          "back": "A factorial analysis comparing two or more categorical independent variables on one continuous dependent variable. It assesses the main effect of each IV and whether there is an interaction between them.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylcu19-c1",
          "topic": "parametric-tests",
          "front": "What does an interaction mean in two-way ANOVA, and when is it significant?",
          "back": "Both independent variables affect the dependent variable, i.e., the effect of one IV depends on the level of the other (e.g., anxiety affected by a combination of physical activity and gender). The interaction is significant if p < 0.05.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylcu19-c2",
          "topic": "parametric-tests",
          "front": "When are post-hoc tests performed after a two-way ANOVA?",
          "back": "Only when results are statistically significant. If the interaction is not significant (e.g., F(2, 91) = 0.239, p = 0.788 for gender x education on cognition), no post-hoc is performed; if significant, simple main effects/post-hoc analysis identifies where the main impact lies.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylcu19-c3",
          "topic": "parametric-tests",
          "front": "What is the two-way repeated-measures (mixed) ANOVA used for?",
          "back": "Also called mixed between-within subjects ANOVA, it examines dependent variables of two groups over two or more time points. It extends the paired t-test to compare means over three or more levels and tests for a significant interaction between the two independent variables (e.g., swimming vs running groups' body weight measured every 4 weeks for 24 weeks).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylcu19-c4",
          "topic": "parametric-tests",
          "front": "What is ANCOVA?",
          "back": "Analysis of covariance examines differences in mean values of dependent variables while controlling for independent variables that are not of primary interest (covariates). It has at least one categorical IV (factor) and at least one covariate, and is essentially ANOVA controlled for potential confounding variables.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylcu19-c5",
          "topic": "parametric-tests",
          "front": "What is a covariate, and what are common examples?",
          "back": "A third variable that could confound results and is statistically controlled in ANCOVA. It is most useful when linearly related to the outcome but not conceptually related to the factors; common examples are baseline data, age, education, gender and obesity.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylcu19-c6",
          "topic": "parametric-tests",
          "front": "Key difference between ANOVA and ANCOVA?",
          "back": "ANOVA looks for differences in the group means, while ANCOVA looks for differences in adjusted means - i.e., means adjusted for the covariate - allowing you to statistically control for a confounding variable.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylcu19-c7",
          "topic": "parametric-tests",
          "front": "What is the SPSS path for two-way ANOVA and ANCOVA?",
          "back": "Analyze > General Linear Model > Univariate. For example, entering gender and education as fixed factors with cognition as the dependent variable, or adding covariates (e.g., obesity, education) for ANCOVA.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyleu8t-c0",
          "topic": "rct-designs",
          "front": "What are the four stated aims of an RCT?",
          "back": "To establish cause and effect relationships; to determine which treatment is superior among competing treatment or control; to avoid the confounding effect; and to eliminate selection bias.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyleu8t-c1",
          "topic": "rct-designs",
          "front": "What does 'double blind' mean in an RCT?",
          "back": "Both the participant and the researcher do not know which is treatment and which is placebo, nor the independent or dependent variable. A project manager typically manages the pills and outcomes.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyleu8t-c2",
          "topic": "rct-designs",
          "front": "What are the three essential criteria of a true experimental design?",
          "back": "Randomization; manipulation (conscious control) of the independent variable to observe its effect on the dependent variable; and at least one experimental group plus one control group with subjects similar in number and characteristics.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyleu8t-c3",
          "topic": "rct-designs",
          "front": "What statistics are expected for a factorial (multiple-arm) RCT design?",
          "back": "Differences analysed with one-way or two-way ANOVA followed by post hoc analysis.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyleu8t-c4",
          "topic": "rct-designs",
          "front": "When can a crossover design be used?",
          "back": "Only if the first intervention does not have a permanent effect, so each subject can receive both conditions separated by a placebo washout period.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyleu8t-c5",
          "topic": "rct-designs",
          "front": "What is the main disadvantage of a crossover design?",
          "back": "The subject's response in the second condition may be influenced by the first condition (carryover effect).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyleu8t-c6",
          "topic": "rct-designs",
          "front": "Why is a crossover design described as extremely powerful?",
          "back": "It is a within-subject design where subjects act as their own controls, giving equal distribution of characteristics and reducing variation in the data, making it very powerful for detecting intervention effects.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyleu8t-c7",
          "topic": "rct-designs",
          "front": "Name two disadvantages of RCTs and one situation where they are not useful.",
          "back": "Disadvantages: expensive in time and money, and loss of subjects to follow-up attributed to treatment. Not useful for small sample sizes, hard-to-measure or diverse results, or when a quick answer is needed.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylgeog-c0",
          "topic": "quasi-experimental-design",
          "front": "What defines a quasi-experimental design?",
          "back": "Manipulation of the IV to observe the DV, but lacking randomization and/or a control group. Used to establish causality when random assignment is not possible.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylgeog-c1",
          "topic": "quasi-experimental-design",
          "front": "Which statistics are expected for the one-group pre-test/post-test design (O1 T O2)?",
          "back": "Differences analysed with a paired t-test or repeated measures ANOVA.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylgeog-c2",
          "topic": "quasi-experimental-design",
          "front": "In a time series (one-way repeated measures) design, who serves as the control?",
          "back": "Each subject serves as their own control - there is no parallel control group. Each person is exposed to more than one level of the IV, with test order randomly allocated, analysed by one-way repeated measures ANOVA.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylgeog-c3",
          "topic": "quasi-experimental-design",
          "front": "Give one strength and one weakness of quasi-experimental designs.",
          "back": "Strength: usable in real-world settings and easy to carry out (e.g., nursing with small samples). Weakness: no randomization, so groups are not truly equivalent.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylgeog-c4",
          "topic": "rct-samplesize",
          "front": "What is intention-to-treat (ITT) analysis?",
          "back": "Analysis in which everyone who was randomized is included, regardless of adherence or drop-out. Contrasts with per-protocol analysis, which includes only those staying on the exact protocol.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylgeog-c5",
          "topic": "rct-samplesize",
          "front": "Why do RCT reports compare groups on baseline characteristics such as age and BMI?",
          "back": "To demonstrate comparability between treatment and control groups - i.e., evidence that randomization worked. Recruitment, screening and assessment procedures should also be described.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylgeog-c6",
          "topic": "rct-samplesize",
          "front": "What does the CONSORT 2010 flow diagram accompany in an RCT report?",
          "back": "A typical RCT study flow from enrollment, allocation and randomization through treatment/control, drop-outs, and analysis, supporting transparent reporting of key points such as ITT and per-protocol analyses.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylgeog-c7",
          "topic": "research-design",
          "front": "Name the three broad categories of clinical research design with examples.",
          "back": "Descriptive/qualitative (surveys, case reports, case series); analytical observational (cohort, case-control, cross-sectional); and experimental RCTs (parallel, cross-over, factorial).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylhdrt-c0",
          "topic": "research-design",
          "front": "What is a case report and what is it used for?",
          "back": "A report of a novel and significant finding. It is descriptive only but can generate new ideas.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylhdrt-c1",
          "topic": "research-design",
          "front": "Define a case series study.",
          "back": "A descriptive, observational study that follows a group of patients with a similar diagnosis or undergoing the same procedure over a certain period of time. There is no experimental protocol and no control over allocation of patients to treatment.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylhdrt-c2",
          "topic": "research-design",
          "front": "Can a case series establish the efficacy of a treatment?",
          "back": "No. No causal inferences should be made about treatment efficacy. Instead, case series results generate new hypotheses that inform further studies, including randomized controlled trials.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylhdrt-c3",
          "topic": "research-design",
          "front": "What is a cross-sectional study and what are its other names?",
          "back": "An observational study analysing data from a representative subset or population at one specific point in time; it is descriptive or analytical and neither longitudinal nor experimental. Also called a cross-sectional analysis, transversal study or prevalence study.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylhdrt-c4",
          "topic": "data-distributions",
          "front": "Which measures of central tendency and dispersion are used to summarise case series data?",
          "back": "Central tendency: mean, median and mode. Dispersion/variation: range (maximum and minimum values) and variation of the data about the average, plus the sample size.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylhdrt-c5",
          "topic": "research-design",
          "front": "Which biostatistics are commonly used in cross-sectional studies?",
          "back": "Tests of difference (t-test, Z-score, T-score), correlation (association), one-way ANOVA, linear regression, and odds ratio.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylhdrt-c6",
          "topic": "correlation-regression",
          "front": "Why is BMI preferred over body weight alone as a criterion for obesity?",
          "back": "Obesity concerns the amount of fat in the body, not weight alone, and height affects body weight. BMI (weight in kg / height in m²) accounts for both weight and height.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylhdrt-c7",
          "topic": "correlation-regression",
          "front": "What does r² = 0.658 between BMI and body fat % indicate?",
          "back": "A 65% correlation: about 65% of the variation in body fat percentage is associated with BMI. A biomarker or measurement with such a strong correlation can be used as a diagnostic criterion.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyljhbh-c0",
          "topic": "research-design",
          "front": "What is a case-control study?",
          "back": "An observational study comparing subjects with a disease or outcome (cases) to subjects without it (controls), looking retrospectively at how frequently exposure to a risk factor is present in each group to determine the relationship between the risk factor and the disease.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyljhbh-c1",
          "topic": "research-design",
          "front": "What are the key features of a case-control study?",
          "back": "No intervention is attempted and no attempt is made to alter the course of the disease. Exposure to the risk factor is determined retrospectively in cases and controls, and these studies are designed to estimate odds.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyljhbh-c2",
          "topic": "research-design",
          "front": "What is a cohort study?",
          "back": "A longitudinal study performing cross-sections at intervals through time. It enrolls at-risk subjects who are disease-free at the start, measures exposure, follows them over time to monitor health outcomes, and records outcomes to establish the link between risk factors and health outcomes.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyljhbh-c3",
          "topic": "research-design",
          "front": "Which association measure belongs to which design: cross-sectional, case-control, cohort/RCT?",
          "back": "Cross-sectional studies use correlation (A-B, r, r2); case-control studies use the odds ratio (risk/outcome association); cohort studies and RCTs use prevalence/relative risk ratio (RR) and probability.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyljhbh-c4",
          "topic": "research-design",
          "front": "Association vs causation - which designs establish which?",
          "back": "Cross-sectional and case-control studies can establish statistical association between two variables, but this does not mean a causal effect (non-causal association). Causal association means the DV arises from specific IVs and the relationship cannot be explained by another variable; cohort studies and RCTs address causal effect.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyljhbh-c5",
          "topic": "research-design",
          "front": "What is the Framingham Heart Study?",
          "back": "A long-term, ongoing cardiovascular cohort study of residents of Framingham, Massachusetts, begun in 1948 with 5,209 adults and now in its third generation. It identified risks such as cigarette smoking, obesity and elevated blood pressure increasing heart disease and stroke risk, and high HDL cholesterol reducing heart disease risk.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyljhbh-c6",
          "topic": "research-design",
          "front": "How can a cohort study be both prospective and retrospective?",
          "back": "Prospective cohorts plan in advance and follow exposure forward through future time (e.g. 2009 to 2029) to disease or non-disease outcomes. Retrospective cohorts use exposure measured at a past point (e.g. 1989 or 1999) and follow outcomes forward from there.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyljhbh-c7",
          "topic": "research-design",
          "front": "List the main disadvantages of case-control studies.",
          "back": "Susceptible to bias because they depend on what people can recall or report; prone to methodological errors because they are not predesigned; observational and not causal; only work under certain types of conditions; and suitable control groups can be difficult to find.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyllqui-c0",
          "topic": "rat-obesity-project",
          "front": "What were the three groups in Research Project 1 and their sizes?",
          "back": "30 Sprague Dawley rats, randomly allocated 10 per group for 12 weeks: Control (low-fat diet), High-fat diet, and High-fat diet plus Exercise.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyllqui-c1",
          "topic": "rat-obesity-project",
          "front": "Describe the exercise protocol used in the study.",
          "back": "The exercise group had daily access to a running wheel (Lafayette Instrument, USA) for 4 hours; the other groups remained in their home cages throughout the 12-week study.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyllqui-c2",
          "topic": "rat-obesity-project",
          "front": "Which tissue weights were recorded at the end of the study?",
          "back": "White adipose tissue (WAT), brown adipose tissue (BAT) and liver weights were recorded after the animals were sacrificed at 12 weeks.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyllqui-c3",
          "topic": "measurements",
          "front": "How were fasting TG, TC and glucose measured, and how was insulin measured?",
          "back": "Triglycerides, total cholesterol and glucose were measured using commercial enzymatic colorimetric kits (Wako Chemicals); fasting insulin was measured with a Rat Ultra-Sensitive Insulin ELISA kit (Millipore).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyllqui-c4",
          "topic": "measurements",
          "front": "What is HOMA-IR and why was it used?",
          "back": "HOMA-IR (homeostasis model assessment of insulin resistance) is an index of insulin resistance calculated from fasting insulin and fasting glucose; it quantifies metabolic dysfunction better than either measure alone.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyllqui-c5",
          "topic": "parametric-tests",
          "front": "Which statistical test suits body weight measured every 3 weeks across three groups?",
          "back": "A mixed (repeated-measures) ANOVA with between-subjects factor Group and within-subjects factor Time; the Group x Time interaction tests whether weight-gain trajectories differ.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyllqui-c6",
          "topic": "research-design",
          "front": "Which contrast tests the effect of the high-fat diet, and which tests the effect of exercise?",
          "back": "Control vs High-fat diet isolates the diet effect; High-fat diet vs High-fat diet + Exercise isolates the preventive effect of exercise, since both groups share the same diet.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyllqui-c7",
          "topic": "rat-obesity-project",
          "front": "How often was body weight measured during the 12-week intervention?",
          "back": "Every three weeks — giving serial measurements suitable for repeated-measures analysis of weight-gain trajectories.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylneaw-c5",
          "topic": "research-design",
          "front": "Why did the control group also receive cookie dough?",
          "back": "Drugs were delivered orally in cookie dough pellets, so controls received cookie dough alone. This vehicle control ensures any weight or lipid changes reflect the drugs, not the palatable food itself.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylneaw-c6",
          "topic": "rct-samplesize",
          "front": "Main limitation of n=10 per group?",
          "back": "Low statistical power, raising the risk of a Type II error (failing to detect a true treatment effect); results should be treated as preliminary.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylneaw-c7",
          "topic": "parametric-tests",
          "front": "Which test compares means across three independent rat groups?",
          "back": "One-way ANOVA (with post-hoc tests to locate specific differences); use Kruskal-Wallis as the non-parametric alternative if assumptions are violated.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylp2t9-c4",
          "topic": "parametric-tests",
          "front": "Which test suits one continuous outcome measured in 3 different groups at 3 time points?",
          "back": "A two-way mixed repeated-measures ANOVA (between factor: group; within factor: time). The group x time interaction shows whether change over time differs between groups.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylp2t9-c5",
          "topic": "rct-samplesize",
          "front": "Why is the Control-Class II/III subgroup (n=5) a sample size problem?",
          "back": "With only 5 participants the subgroup has very low statistical power and unstable estimates, so it was merged with other controls; underpowered analyses risk Type II errors.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylp2t9-c6",
          "topic": "measurements",
          "front": "What is a 'bout' of moderate/vigorous activity in this study?",
          "back": "A continuous episode of moderate or vigorous physical activity lasting at least 10 minutes, counted from accelerometer data.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylp2t9-c7",
          "topic": "hypotheses-pvalues",
          "front": "What is a Type II error and how does dropout increase its risk here?",
          "back": "A Type II error is failing to detect a real effect (false negative). The 14 withdrawals shrank groups to n=9-15, reducing power and raising the chance of missing a true exercise effect.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylq9zc-c0",
          "topic": "rct-samplesize",
          "front": "What is statistical power?",
          "back": "The probability that a test correctly rejects the null hypothesis when the alternative hypothesis is true. A study with 80% power has an 80% chance of the test having significant results.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylq9zc-c1",
          "topic": "rct-samplesize",
          "front": "What is the alpha value?",
          "back": "The probability of rejecting the null hypothesis assuming the null hypothesis is true. Typical values are 0.05 or 0.01, and it can be one-sided or two-sided.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylq9zc-c2",
          "topic": "rct-samplesize",
          "front": "Name the key factors affecting the sample size required in a study.",
          "back": "Alpha value (one- or two-sided), statistical power (normally 80%), effect size between control and testing groups, standard deviation (from a similar/pilot study or population), and the type of sampling and analysis (number of groups).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylq9zc-c3",
          "topic": "rct-samplesize",
          "front": "What are Cohen's d thresholds for effect size?",
          "back": "0 = no difference, 0.2 = small, 0.5 = medium/moderate, 0.8 or greater = large effect.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylq9zc-c4",
          "topic": "rct-samplesize",
          "front": "How do you calculate Cohen's d?",
          "back": "d = (Mtest - Mcon) / SDpooled, where SDpooled = sqrt((st^2 + sc^2)/2). It is the standardized difference between two or more means.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylq9zc-c5",
          "topic": "rct-samplesize",
          "front": "At two-tailed alpha 0.05 and 80% power, how many subjects are needed for effect sizes of 0.8 and 0.5?",
          "back": "Effect size 0.8 requires a sample size of 25; effect size 0.5 requires 60. Smaller effects require larger samples to detect.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylq9zc-c6",
          "topic": "rct-samplesize",
          "front": "How is effect size determined when there are more than two groups?",
          "back": "Use Cohen's f2 method, calculated from the partial eta squared value (e.g., F(3, 84) = 20.183, p<0.000 gave an effect size of 41.9%). In SPSS use ANOVA even for two groups, because the t-test does not provide effect size.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylq9zc-c7",
          "topic": "rct-samplesize",
          "front": "How is magnitude of effect calculated as a percentage change?",
          "back": "% change = (M2 - M1)/M1 x 100; e.g., (19.7 - 16.5)/16.5 x 100 = 19.4%.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylr6me-c0",
          "topic": "parametric-tests",
          "front": "What does a one-sample t-test do?",
          "back": "It compares a single sample mean to a known or assumed population value (e.g., fasting glucose vs 4 mmol/L), assuming the data are normally distributed.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylr6me-c1",
          "topic": "parametric-tests",
          "front": "What does an independent-samples t-test compare?",
          "back": "The means of two separate, unrelated groups (e.g., BMI in patients vs controls). It assumes continuous data, normality within each group, and approximately equal variances between groups.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylr6me-c2",
          "topic": "parametric-tests",
          "front": "Define the paired-samples t-test.",
          "back": "It compares the means of two related measurements — from the same subjects (before-and-after) or from matched pairs — to test for a significant difference.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylr6me-c3",
          "topic": "parametric-tests",
          "front": "How do you run a t-test in SPSS?",
          "back": "Analyze → Compare Means → then choose One-Sample T Test (enter a test value), Independent-Samples T Test (define grouping variable groups, e.g., 1 = patients, 2 = controls), or Paired-Samples T Test (insert Variable 1 and Variable 2).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylr6me-c4",
          "topic": "parametric-tests",
          "front": "How should t-test results be reported?",
          "back": "State the test used, group/condition means ± SD, the t-statistic with degrees of freedom (e.g., t(34.965) = 5.397), the p-value, and the direction of the effect.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylr6me-c5",
          "topic": "parametric-tests",
          "front": "What did the one-sample t-test on Bipolar49 fasting glucose show?",
          "back": "The sample mean (M = 5.667, SD = 1.122) was significantly higher than the population mean of 4 mmol/L, p < 0.001.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylr6me-c6",
          "topic": "parametric-tests",
          "front": "What did the body weight independent t-test show?",
          "back": "Body weight was significantly heavier in bipolar patients (85.09, SD 12.59) than controls (74.97, SD 8.11), t(47) = 3.33, p = 0.002.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylr6me-c7",
          "topic": "parametric-tests",
          "front": "What did the leg press paired t-test (Exercise44) show?",
          "back": "Leg press increased from 86.10 ± 21.06 at baseline to 98.96 ± 22.59 at week 12; the increase was significant, t(29) = −8.29, p < 0.001 (two-tailed), i.e., 30 participants (df = n − 1).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyls3ol-c0",
          "topic": "communication",
          "front": "What sections must the Assessment 3 poster include?",
          "back": "Title, Introduction, Aims, Methods, Results, Discussion, Conclusion, plus a numbered reference list. The poster is A0 size (84.1 x 118.9 cm) in landscape or portrait orientation.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyls3ol-c1",
          "topic": "communication",
          "front": "What are the poster marking weightings?",
          "back": "Overall format 10%; Introduction and Aims 20%; Methods (data analysis) and results presentation 40%; Discussion and Conclusion 20%; Referencing 10%.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyls3ol-c2",
          "topic": "communication",
          "front": "What is the minimum set of tables and graphs required on the poster?",
          "back": "At least 1 table, 1 bar graph, 1 line graph and 1 correlation graph. Focus on results with significant differences; non-significant results may be briefly stated in text.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyls3ol-c3",
          "topic": "communication",
          "front": "How much poster space should the Results section occupy and why?",
          "back": "At least half of the poster space, because Results is the main part of the poster. Emphasise findings with significant differences or results important to the research aims.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyls3ol-c4",
          "topic": "communication",
          "front": "What referencing system and how many references for the poster?",
          "back": "The numbered reference system, with approximately 10 references in total, combining those provided and those found through your own literature searching. References matter most in the Introduction and Discussion.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyls3ol-c5",
          "topic": "communication",
          "front": "What should the poster Discussion include?",
          "back": "Discuss your results against the background of the research topic and in the context of the literature (citing references), avoiding simply restating the results. Also discuss possible limitations and strengths of the study.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyls3ol-c6",
          "topic": "spss-essentials",
          "front": "What must a scientific table presenting group data include (Week 10 Task 4)?",
          "back": "A title, group (treatment) information, sample size, measurements (variables), and group mean with SD or SEM. Statistical analysis outputs may be added into the table later.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyls3ol-c7",
          "topic": "communication",
          "front": "What group size is required for Assessment 3 and how is the group registered?",
          "back": "Groups of 3-4 students formed from your Practical class list. Group information (class time, student names, chosen project title) is emailed to Prof Chao Deng (chao@uow.edu.au).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyltb8n-c0",
          "topic": "spss-essentials",
          "front": "What is the first step when creating a new dataset in SPSS for the Excel project data?",
          "back": "Open the SPSS software and select 'New Files: New Dataset', then input the data from the Excel file downloaded from Moodle.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyltb8n-c1",
          "topic": "spss-essentials",
          "front": "What is the difference between Variable View and Data View in SPSS?",
          "back": "Variable View is where you set up parameters for all factors and variables (name, type, decimals, labels). Data View is where the actual data rows are displayed and entered.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyltb8n-c2",
          "topic": "spss-essentials",
          "front": "How should a group variable with labels like 'Control' and 'Olanzapine' be coded in SPSS?",
          "back": "Change its type from String to Numeric and attach value labels, e.g., 1 = Control, 2 = Olanzapine, 3 = Olanzapine+Exercise.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyltb8n-c3",
          "topic": "spss-essentials",
          "front": "Why change the Decimals setting for a variable from 15 to 3 in Variable View?",
          "back": "It limits displayed values to three decimal places, keeping the data sheet readable while preserving adequate precision for the measurements.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyltb8n-c4",
          "topic": "spss-essentials",
          "front": "Which descriptive statistics does Week 10 Practical Task 3 require for all variables?",
          "back": "Mean, standard deviation (SD) and/or standard error of mean (SEM), obtained through the Analyze menu.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyltb8n-c5",
          "topic": "spss-essentials",
          "front": "What are the three example groups used in the practical task?",
          "back": "1. Control; 2. Olanzapine; 3. Olanzapine+Exercise.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyltb8n-c6",
          "topic": "spss-essentials",
          "front": "SD vs SEM: what does each describe?",
          "back": "SD describes the spread of individual observations around the sample mean. SEM (SD / √n) describes the precision of the sample mean as an estimate of the population mean.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtyltb8n-c7",
          "topic": "spss-essentials",
          "front": "In SPSS, which menu do you use to run descriptive statistical analysis?",
          "back": "The Analyze menu, which produces statistics such as Mean, SD and SEM for the selected variables.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylu5kw-c0",
          "topic": "communication",
          "front": "What elements must the scientific table include in this task?",
          "back": "A title, group (treatment) information, sample size, measurements (variables), and the mean with SD or SEM.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylu5kw-c1",
          "topic": "communication",
          "front": "What is the difference between SD and SEM?",
          "back": "SD measures the spread of individual observations around the mean, while SEM measures the precision of the sample mean as an estimate of the population mean (SEM = SD/√n).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylu5kw-c2",
          "topic": "spss-essentials",
          "front": "Which SPSS data file is used for Week 10 Practical Task 4?",
          "back": "The SPSS data file built in Week 10 Practical Task 2.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylu5kw-c3",
          "topic": "spss-essentials",
          "front": "Where do the Mean, SD and SEM values in the Task 4 table come from?",
          "back": "From the statistical outputs obtained in Week 10 Practical Task 3 for all measured variables.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylu5kw-c4",
          "topic": "communication",
          "front": "Where can guidance on making a scientific table be found?",
          "back": "In the Week 9 practical slides.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylu5kw-c5",
          "topic": "communication",
          "front": "What may be added to the scientific table later?",
          "back": "The outputs of statistical analysis (inferential results) can be added into the table at a later stage.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylvuaf-c0",
          "topic": "rct-samplesize",
          "front": "What is the primary aim of a randomised controlled trial?",
          "back": "To establish a cause-and-effect relationship between an intervention and an outcome, using random allocation and comparison with a control group.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylvuaf-c1",
          "topic": "rct-samplesize",
          "front": "What does double blinding mean in an RCT?",
          "back": "Neither the participants nor the researchers know who receives the treatment or the placebo. This reduces expectation and observer bias.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylvuaf-c2",
          "topic": "rct-samplesize",
          "front": "Intention-to-treat vs per-protocol analysis?",
          "back": "Intention-to-treat includes everyone who was randomised, analysed in their allocated group; per-protocol includes only those who followed the protocol.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylvuaf-c3",
          "topic": "rct-samplesize",
          "front": "Why compare the baseline characteristics of RCT groups?",
          "back": "To determine whether randomisation produced comparable groups. Imbalance at baseline could confound the comparison of treatment outcomes.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylvuaf-c4",
          "topic": "research-design",
          "front": "What are the three essential criteria of a true experimental design?",
          "back": "Randomisation, manipulation of the independent variable, and the presence of both experimental and control groups.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylvuaf-c5",
          "topic": "research-design",
          "front": "Why is a washout period used in a crossover design?",
          "back": "To reduce the influence (carry-over effect) of the first intervention on the subsequent condition, so the second treatment can be evaluated cleanly.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylvuaf-c6",
          "topic": "research-design",
          "front": "What distinguishes a quasi-experimental study from a true experiment?",
          "back": "It lacks randomisation, a control group, or both. It is useful when random assignment is impossible or unethical, and is easily conducted in real-world settings, but groups may not be equivalent.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylvuaf-c7",
          "topic": "research-design",
          "front": "What distinguishes a factorial design from a two-arm post-test-only design?",
          "back": "A factorial design examines two or more independent variables and their possible interaction, whereas a two-arm post-test-only design tests a single factor between two groups.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylxcqk-c0",
          "topic": "data-distributions",
          "front": "Which two formal tests can be used to check whether data are normally distributed?",
          "back": "The Kolmogorov-Smirnov goodness-of-fit test and the Shapiro-Wilk test. Both test whether a distribution is not significantly different from the hypothesised normal distribution.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylxcqk-c1",
          "topic": "data-distributions",
          "front": "Which normality test do some researchers prefer when the sample size is under 50?",
          "back": "The Shapiro-Wilk test is considered better by some researchers when n < 50.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylxcqk-c2",
          "topic": "data-distributions",
          "front": "How should data be selected when testing a measurement for normality?",
          "back": "Use data from all subjects without dividing by groups, and test each measurement individually rather than pooling measurements together.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylxcqk-c3",
          "topic": "nonparametric-tests",
          "front": "What should you do if one measurement in your dataset is not normally distributed?",
          "back": "Use non-parametric tests for that measurement; any measurements that are normally distributed can still be analysed with parametric tests.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylxcqk-c4",
          "topic": "parametric-tests",
          "front": "What distributional assumption underlies many common parametric tests?",
          "back": "That the measurements, and/or the means of the measurements, are normally distributed.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylxcqk-c5",
          "topic": "data-distributions",
          "front": "Why should you be cautious when normality is simply assumed for a small sample?",
          "back": "The assumption may or may not be justified, so whether it holds should be a consideration in your interpretation of the results.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylxcqk-c6",
          "topic": "data-distributions",
          "front": "What does a non-significant result (p > 0.05) from a normality test indicate?",
          "back": "The data are not significantly different from a normal distribution, which supports proceeding with parametric tests.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylzgpt-c0",
          "topic": "bias-validity-ebm",
          "front": "What does internal validity assess?",
          "back": "Whether the observed effect can be attributed to the exposure or intervention itself, rather than to bias, confounding or other factors.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylzgpt-c1",
          "topic": "bias-validity-ebm",
          "front": "What does external validity concern?",
          "back": "Whether study results can be generalised to other populations, settings or conditions. It is improved by replicating the study in different samples and settings.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylzgpt-c2",
          "topic": "bias-validity-ebm",
          "front": "Children's height and weight change naturally during a long-term study. Which threat to internal validity is this?",
          "back": "Maturation: natural changes within participants over time that could be mistaken for an intervention effect.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylzgpt-c3",
          "topic": "bias-validity-ebm",
          "front": "Participants in an exercise trial join another physical-activity study. Which threat is this?",
          "back": "History: an external event occurring during the study that affects the outcome and competes with the intervention as an explanation.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylzgpt-c4",
          "topic": "bias-validity-ebm",
          "front": "Why can a high dropout rate bias a study?",
          "back": "Experimental mortality (attrition): participants who withdraw may differ from those who remain, so the final groups no longer reflect the original comparison.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylzgpt-c5",
          "topic": "bias-validity-ebm",
          "front": "What two conditions must a variable meet to be a confounder?",
          "back": "It must be associated with both the exposure and the outcome. Age is identified as a common potential confounding factor.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylzgpt-c6",
          "topic": "bias-validity-ebm",
          "front": "What is outcome-reporting bias?",
          "back": "Selectively reporting outcomes according to the nature or direction of their results, e.g., omitting non-significant findings.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtylzgpt-c7",
          "topic": "bias-validity-ebm",
          "front": "Which combination can assess or reduce the influence of random error?",
          "back": "A larger sample together with p-values and confidence intervals. Small samples, subjective assessment and selective reporting worsen error and bias.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym1ibp-c0",
          "topic": "bias-validity-ebm",
          "front": "What is evidence-based medicine (EBM)?",
          "back": "The integration of the best research evidence with clinical expertise and patient values. Evidence, experience or biological mechanism alone are each insufficient.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym1ibp-c1",
          "topic": "bias-validity-ebm",
          "front": "What are the five 'A' steps of evidence-based medicine?",
          "back": "Assess, Ask, Acquire, Appraise, Apply - starting with assessing the patient's problem and ending with applying the appraised evidence to the patient.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym1ibp-c2",
          "topic": "bias-validity-ebm",
          "front": "In the PICO framework, what does 'C' stand for?",
          "back": "Comparison - the alternative against which the intervention is evaluated, such as placebo or standard care. PICO = Population, Intervention, Comparison, Outcome.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym1ibp-c3",
          "topic": "bias-validity-ebm",
          "front": "What are the three key considerations when appraising evidence?",
          "back": "Validity (are the results trustworthy?), effect size (how big is the effect?) and precision (how certain is the estimate?).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym1ibp-c4",
          "topic": "bias-validity-ebm",
          "front": "What determines the precision of study findings?",
          "back": "The sample size and the accuracy of measurement - larger samples and more accurate measurements yield more precise estimates. It is not affected by personal opinion or a paper's popularity.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym1ibp-c5",
          "topic": "bias-validity-ebm",
          "front": "What evidence is the 'gold standard' for judging whether a treatment does more good than harm?",
          "back": "Systematic reviews, meta-analyses and randomised controlled trials - not expert opinion, case reports or laboratory studies.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym1ibp-c6",
          "topic": "bias-validity-ebm",
          "front": "Why is a treatment recommended purely from personal clinical experience not evidence-based?",
          "back": "Because it uses only unsystematic clinical experience, which is prone to bias and cannot reliably establish treatment effects; EBM requires systematically appraised research evidence combined with expertise and patient values.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym1ibp-c7",
          "topic": "bias-validity-ebm",
          "front": "Why are laboratory findings (e.g. melatonin reducing cytokines in cultured brain cells) insufficient for evidence-based practice?",
          "back": "Basic mechanisms or pathophysiological principles alone do not establish clinical effectiveness; clinical benefit and harm must be demonstrated in patients, ideally via RCTs, systematic reviews and meta-analyses.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym3u8z-c0",
          "topic": "spss-essentials",
          "front": "How do you sort cases in SPSS, and how can sorting help find a data entry error?",
          "back": "Use Data → Sort Cases, choose the sort variable (e.g., disease, then gender) and Ascending. Sorting brings extreme or out-of-place values to the top or bottom of a column, making data entry errors easy to spot.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym3u8z-c1",
          "topic": "data-distributions",
          "front": "How do you test normality (overall and by subgroup) in SPSS?",
          "back": "Analyse → Descriptive Statistics → Explore; put the variable (e.g., Age) in the Dependent List and choose Plots → Normality plots with tests. For subgroup normality, add a grouping variable (e.g., Gender) to the Factor List.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym3u8z-c2",
          "topic": "data-distributions",
          "front": "Which SPSS dialog reports skewness and kurtosis, and which options are ticked?",
          "back": "Analyse → Descriptive Statistics → Descriptive; in Options select Mean, Std (standard deviation), Minimum, Maximum, Kurtosis and Skewness. To compare two groups' skewness/kurtosis, use Explore with a grouping variable in the Factor List.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym3u8z-c3",
          "topic": "correlation-regression",
          "front": "In SPSS simple linear regression, which Statistics and Plots options are selected?",
          "back": "Statistics: Estimates, Model fit, R squared, Descriptives, and Part and partial correlation. Plots: put *ZRESID in Y and *ZPRED in X, and tick Histogram and Normal probability plot to check assumptions.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym3u8z-c4",
          "topic": "parametric-tests",
          "front": "How do you set up a two-way ANOVA profile plot in SPSS?",
          "back": "In the Univariate GLM Plots dialog, put one factor (e.g., Gender) in Separate Lines and the other (e.g., Disease) on the Horizontal Axis, then click Add. This displays the interaction pattern between the two factors.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym3u8z-c5",
          "topic": "parametric-tests",
          "front": "In SPSS ANCOVA, where do the fixed factor and covariate go?",
          "back": "Analyse → General Linear Model → Univariate; put the continuous outcome in Dependent Variable, the categorical variable (e.g., Gender) in Fixed Factor, and the continuous covariate (e.g., smoking) in the Covariate box. EM Means with Compare main effects and Bonferroni gives adjusted comparisons.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym3u8z-c6",
          "topic": "nonparametric-tests",
          "front": "What is the SPSS path for Friedman's test and which variables go in?",
          "back": "Analyze → Nonparametric Tests → Legacy Dialogs → K Related Samples. Put the repeated time-point variables (e.g., body fat at baseline, week 6 and week 12) into Test Variables, tick Friedman, and request descriptive statistics.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym3u8z-c7",
          "topic": "nonparametric-tests",
          "front": "How do you run a Wilcoxon signed-rank test in SPSS?",
          "back": "Analyze → Nonparametric Tests → Legacy Dialogs → 2 Related Samples. Put the two paired time-point variables (e.g., body fat at baseline and week 12) into Test Pairs, select the Wilcoxon test, and optionally request descriptive statistics and quartiles.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym50ng-c0",
          "topic": "excel-pie-charts",
          "front": "Which Excel tab contains the option to insert a Pie Chart?",
          "back": "The Insert tab - select your data first, then Insert, then Pie Charts.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym50ng-c1",
          "topic": "excel-pie-charts",
          "front": "What must be selected in the spreadsheet before inserting a pie chart?",
          "back": "Both the 'Data names' column (e.g. Food Ingredients) and the 'Data' column (Percentages %).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym50ng-c2",
          "topic": "excel-pie-charts",
          "front": "What is the '+' button on a selected Excel chart, and what can it add?",
          "back": "It is the Chart elements menu - it toggles the Chart title, Data labels and Legend, and their locations can also be changed.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym50ng-c3",
          "topic": "excel-pie-charts",
          "front": "How do you change the colours or overall look of a pie chart in Excel?",
          "back": "Click the Style sign next to the chart to change its colour or style.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym50ng-c4",
          "topic": "communication",
          "front": "How can a finished Excel pie chart be used in a poster or presentation?",
          "back": "Copy the chart in Excel and paste it into a PowerPoint or Word file, such as the Task 5 poster, after adding a clear title, data labels and legend.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym7ml7-c0",
          "topic": "excel-bar-graphs",
          "front": "Which Excel tab is used to insert a Column or Bar chart?",
          "back": "The Insert tab. Select Group name and Mean first, then choose Insert Column or Bar chart.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym7ml7-c1",
          "topic": "excel-bar-graphs",
          "front": "What three columns must be set up in the Excel table before drawing the graph?",
          "back": "Group name, Mean, and SEM (standard error of mean).",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym7ml7-c2",
          "topic": "excel-bar-graphs",
          "front": "How do you add custom error bars in Excel?",
          "back": "Click the chart, click the + Chart Elements sign, choose Error Bars > More Options > Custom > Specify Value, then select the SEM data for both positive and negative error values and click OK.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym7ml7-c3",
          "topic": "excel-bar-graphs",
          "front": "What values go into the Positive and Negative Error Value boxes?",
          "back": "The SEM data from the Excel table, selected for both the positive and the negative error values.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym7ml7-c4",
          "topic": "excel-bar-graphs",
          "front": "How do you add and edit axis titles?",
          "back": "Click the chart, click the + Chart Elements sign, choose Axis Title, then edit the title based on your study.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym7ml7-c5",
          "topic": "excel-bar-graphs",
          "front": "What does SEM stand for and why is it plotted on the bars?",
          "back": "Standard error of the mean. It shows the precision of each group mean, so readers can judge the uncertainty around the plotted means.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym7ml7-c6",
          "topic": "excel-bar-graphs",
          "front": "Where can the finished bar graph be pasted?",
          "back": "Into PowerPoint or Word files, including the poster for Task 5.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym9v6g-c0",
          "topic": "correlation-regression",
          "front": "Which Excel chart type is used to display a correlation between two continuous variables?",
          "back": "A Scatter graph (Insert > Insert Scatter), with each subject plotted as a point using X (e.g., food intake) and Y (e.g., weight gain) values.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym9v6g-c1",
          "topic": "correlation-regression",
          "front": "Where do the X and Y variables go on the correlation graph in this task?",
          "back": "Food intake (or other data for the X-axis) goes on the horizontal X-axis; weight gain goes on the vertical Y-axis.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym9v6g-c2",
          "topic": "correlation-regression",
          "front": "How is the line of best fit added to the Excel scatter graph?",
          "back": "Click the chart, click the '+' (Chart Elements) sign, select Trendline, then choose Linear.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym9v6g-c3",
          "topic": "correlation-regression",
          "front": "What statistics should be reported in the text box on the correlation figure?",
          "back": "r = xxx, p = xxx — the correlation coefficient and its p-value.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym9v6g-c4",
          "topic": "correlation-regression",
          "front": "How are axis titles added to an Excel chart?",
          "back": "Click the chart, click the '+' (Chart Elements) sign, choose Axis title, then edit it based on your study.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym9v6g-c5",
          "topic": "communication",
          "front": "How can the finished correlation graph be used in the poster task?",
          "back": "It can be copied and pasted directly into PowerPoint or Word files, e.g., for the Task 5 poster.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtym9v6g-c6",
          "topic": "communication",
          "front": "Why should the default 'Chart title' be edited before using the figure?",
          "back": "So the title describes your actual study rather than the Excel placeholder, making the figure self-explanatory on a poster.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtymat1a-c0",
          "topic": "research-design",
          "front": "What is an important purpose of a case report?",
          "back": "To report a novel and significant finding, typically in an individual patient. It is not for establishing causation, comparing groups or estimating prevalence.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtymat1a-c1",
          "topic": "research-design",
          "front": "What distinguishes a case series from a case report?",
          "back": "A case series includes multiple cases with similar or unusual findings. It is still a descriptive observational study, not an experiment.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtymat1a-c2",
          "topic": "research-design",
          "front": "Why can't causal conclusions about treatment efficacy be drawn from a case series?",
          "back": "It lacks experimental allocation and an appropriate control group. Its findings should instead be used to generate hypotheses for further studies.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtymat1a-c3",
          "topic": "research-design",
          "front": "What is a cross-sectional study and what is it also called?",
          "back": "A study examining data at one specific point in time; it is commonly known as a prevalence study.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtymat1a-c4",
          "topic": "research-design",
          "front": "Why is body weight alone not an appropriate criterion for diagnosing obesity?",
          "back": "Height can influence body weight and body composition matters, so a height-adjusted measure like BMI is needed.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtymat1a-c5",
          "topic": "research-design",
          "front": "What is the defining feature of a case-control study and its key statistical measure?",
          "back": "It compares people with an outcome (cases) to people without it (controls), looking retrospectively at past risk-factor exposure. The odds ratio is its particularly relevant measure.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtymat1a-c6",
          "topic": "research-design",
          "front": "What is the correct basic sequence of a cohort study?",
          "back": "Measure exposure, follow participants over time, then record outcomes. Participants should be free of the disease outcome at enrolment.",
          "ai": true
        },
        {
          "id": "medi304-auto-mtymat1a-c7",
          "topic": "research-design",
          "front": "Which study designs establish association but not causation by themselves?",
          "back": "Cross-sectional and case-control studies. Both are observational and cannot by themselves demonstrate causation.",
          "ai": true
        }
      ],
      "notes": [
        {
          "id": "medi304-auto-mtxo7d8z-n0",
          "title": "MEDI304 Preface - Schedule of Learning",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This preface outlines the MEDI304 **Schedule of Learning** in three modules. **Module 1 (Data Analysis)** spans hypotheses, p-values and errors, data types and distributions, **parametric tests**, **non-parametric tests**, correlation/regression and measurements, paired with SPSS computer labs covering t-tests, **one-way/repeated-measures/two-way ANOVA**, ANCOVA and data distribution. **Module 2 (Research Design)** covers research design, RCTs, and **sample size and effect size** after the mid-session recess. **Module 3 (Research outcome evaluation)** addresses **internal/external validity**, bias and confounders, chance and **evidence-based medicine**, alongside applied labs on presenting statistical outputs, projects, graphing and posters. Assessment in Week 8 comprises a 1-hour **Mid-Session Exam** (Lectures 1-5) and a 2-hour **Practical Exam** (practical classes 2-7), with UOW exams 7/11-14/11. Prescribed textbooks are Huang (2022) *Medical Research Design and Analysis* and *Medical Research Proposal, Paper and Thesis Writing*.",
          "topics": [
            "hypotheses-pvalues",
            "data-distributions",
            "spss-essentials",
            "parametric-tests"
          ]
        },
        {
          "id": "medi304-auto-mtxo8qhj-n0",
          "title": "ANOVA Family: One-way, Repeated Measures, Two-way ANOVA and ANCOVA (MEDI304)",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This lecture covers four ANOVA-family analyses in SPSS using the Bipolar49 and Exercise44 datasets. **One-way ANOVA** tests mean differences across three or more independent groups on one factor, assuming a continuous DV, normality, homogeneity of variances and independence, with **post hoc Tukey tests** reported only when the overall F is significant. **One-way repeated measures ANOVA** is a within-subject design comparing the same participants measured three or more times (e.g., body fat percentage at baseline, 6 and 12 weeks), followed by **Bonferroni-corrected** pairwise comparisons. **Two-way ANOVA** (GLM > Univariate) assesses two main effects plus an **interaction effect** (e.g., gender × disease status on waist circumference); with no significant interaction, post hoc analysis focuses on the main effects. **ANCOVA** compares groups after statistically adjusting for covariates such as smoking or baseline scores, which can make an apparent difference disappear (e.g., exam scores adjusted for revision time) or persist (e.g., gender difference in waist circumference after controlling for smoking, F(1,46) = 4.243, p = 0.045).",
          "topics": [
            "parametric-tests"
          ]
        },
        {
          "id": "medi304-auto-mtxo9a1b-n0",
          "title": "Week 10 Self-Check Quiz: Answers and Explanations",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This quiz answer key reviews **RCTs** as designs that establish whether an intervention causes an outcome and which treatment is superior. It covers the trial sequence of identifying eligible patients, obtaining **informed consent**, and **randomisation** to treatment or control, which reduces **selection bias** and confounding; **double-blinding** additionally reduces participant and researcher bias. Design contrasts include **true experimental designs** (randomisation, IV manipulation, experimental and control groups), **factorial designs** (testing main effects and interactions of multiple factors), and **quasi-experimental designs** (IV manipulation without randomisation and/or a control group, practical for real-world settings and small samples). **Crossover designs** need a **washout period** to prevent carryover effects. Analysis points include the **paired t-test** for before-and-after measurements on the same participants, **intention-to-treat** versus **per-protocol** analysis, and baseline comparisons (e.g., age, BMI) to confirm that randomisation created comparable groups.",
          "topics": [
            "rct-samplesize",
            "research-design",
            "parametric-tests",
            "bias-validity-ebm"
          ]
        },
        {
          "id": "medi304-auto-mtxoagzw-n0",
          "title": "MEDI304 Week 11 Self-Check Quiz: Answers and Explanations",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This answer key reviews study validity and bias. **Internal validity** concerns whether a study supports a credible **cause-and-effect** conclusion within the population studied, and is protected by **random assignment**, **blinding** and an appropriate **control group**; **external validity** concerns generalisability to other people, populations, settings or conditions, supported by **representative sampling**, sensible inclusion/exclusion criteria and **replication**. Threats covered include **history**, **maturation**, **attrition**, **measurement bias** from non-objective (subjective) outcome assessment, **outcome-reporting bias** and **citation bias**. A **confounder** is associated with both exposure and outcome but is not caused by the exposure, with **age**, **income**, **gender** and **ethnic background** as common examples. Finally, increasing **sample size** reduces **random error**, while **p-values** and **confidence intervals** help assess whether findings may be due to chance.",
          "topics": [
            "bias-validity-ebm",
            "measurements"
          ]
        },
        {
          "id": "medi304-auto-mtxobbaf-n0",
          "title": "MEDI304 Week 12 Self-Check Quiz — Answers and Explanations",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This answer key consolidates the core principles of **evidence-based medicine (EBM)**: the integration of the **best available research evidence**, the **clinician's expertise** and the **individual patient's values**, none of which is sufficient alone. It reviews the five-step EBM cycle — assess the problem, ask, acquire, appraise and apply — and the **PICO** framework (Patient, Intervention, Comparison, Outcome) for formulating focused, testable clinical questions. Critical appraisal is summarised as judging **validity**, **effect size** and **precision**, with precision driven by **sample size** and **measurement accuracy**. The quiz also emphasises that **systematic reviews, meta-analyses and RCTs** are least likely to mislead for treatment effects, while **mechanistic findings** alone do not establish clinical effectiveness.",
          "topics": [
            "bias-validity-ebm"
          ]
        },
        {
          "id": "medi304-auto-mtxocn9h-n0",
          "title": "MEDI304 Week 9 Self-Check Quiz — Answers and Explanations (Observational Study Designs)",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This answer key works through the family of **observational study designs**. A **case report** describes one novel individual case, while a **case series** describes multiple similar patients without experimental treatment allocation or a control group, so treatment effects cannot be interpreted as causal—though both designs can generate hypotheses for testing in **randomised controlled trials**. A **cross-sectional study** (also called a transversal or **prevalence study**) collects data at a single point in time, whereas a **case-control study** compares **cases** with **controls** on previous exposure, expressed as an **odds ratio**, and suits **rare diseases** using small, quicker, cheaper samples. A **cohort study** is longitudinal: initially outcome-free participants are classified by exposure and followed forward, allowing multiple outcomes of one exposure to be examined. Overall, cross-sectional and case-control findings demonstrate **association**, not necessarily causation.",
          "topics": [
            "observational-study-designs"
          ]
        },
        {
          "id": "medi304-auto-mtxodivb-n0",
          "title": "MEDI304 Assessment 3 - Scientific Presentation (Poster and Oral)",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This assessment is worth 20% of the grade (15% poster, 5% oral presentation) and is completed in groups of 3-4 students who choose one of three research topics and datasets provided in Week 10. Groups apply the statistical skills from lectures and practicals to analyse their dataset, read additional scholarly literature, and produce an **A0 poster** (84.1 x 118.9 cm) containing **Title, Introduction, Aims, Methods, Results, Discussion and Conclusion** with references cited in the **numbered reference system**. The **Introduction** requires background and a clear rationale; **Methods** must be succinct (a flow chart may help); **Results** should combine concise text with **graphs and tables**, with statistical outcomes clearly marked. Results must be **interpreted in line with current literature** in the discussion, followed by a concise, correct conclusion, and the layout should be clear and readable, avoiding jargon and excessive abbreviations. The poster is submitted as a PDF via Moodle by 27/10/2025, and each group delivers a **10-minute oral presentation** in Week 13 (6-8 minutes presenting, 2 minutes questions) with all members presenting a part.",
          "topics": [
            "communication"
          ]
        },
        {
          "id": "medi304-auto-mtxoejam-n0",
          "title": "MEDI304 - At home access to SPSS (UoW Virtual Desktop)",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This guide explains how to run SPSS from home by connecting to the University's **Horizon View virtual environment**. First-time setup involves downloading the **VMware Horizon Client** from **https://vdiconnect.uow.edu.au**, installing and restarting, then using **Add Server** with the address vdiconnect.uow.edu.au and logging in with your **UoW Network login** to reach the **UoW Labs Pool**. The client is recommended over the browser web client because it supports **USB pass-through** (which must be enabled for security), multiple screens and local folder access. Crucially, use **Disconnect** rather than log off if you want to resume where you left off, and **always save work to an external source** (USB drive or file share) because idle-timeout policies may force log off and some desktops are deleted on log off. The first launch is slow because a **profile** must be created, and support is available from the **IMTS Help Desk on x3000**.",
          "topics": [
            "spss-virtual-desktop"
          ]
        },
        {
          "id": "medi304-auto-mtxog2ob-n0",
          "title": "Bias, Confounders and Chance",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This lecture presents the three threats to a study's conclusion: **bias**, **confounding** and **chance**. Bias is any process where the researcher or participant influences the results, causing **Type 1 or Type 2 error** - key forms include the **halo effect** (observer expectation, fixed by double-blinding and independent assessors), the **placebo effect** (participant expectation; true effect = experimental minus placebo), the **Hawthorne effect** (behaviour change from being observed), **selection bias** (allocation, self-selection, inclusion/exclusion criteria; solved by randomisation), recruitment/dropout biases, **information bias** (measurement, response, observer bias), **publication bias** and **reporting bias** (citation and outcome reporting bias). **Confounding** occurs when a factor associated with both exposure and outcome but not caused by the exposure makes a true association misleading (e.g. hygiene confounding the breast-feeding/gastroenteritis association), whereas bias creates an association that is not true. Finally, **chance (random error)** arises mainly from small, unrepresentative samples (association studies need ~300 samples) and is controlled by increasing sample size and assessed with **p values** and **confidence intervals**.",
          "topics": [
            "bias-validity-ebm",
            "chance-random-error"
          ]
        },
        {
          "id": "medi304-auto-mtxoh58e-n0",
          "title": "Box plot and outliers",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This file explains that **boxplots** depict groups of numerical data through their **quartiles**, with the **interquartile range (IQR)** forming the core of the plot and whiskers indicating **variability outside the upper and lower quartiles**. The SPSS practicals use the **Bipolar49** dataset and the path **Analyse → Descriptive Statistics → Explore**, placing variables such as **weight**, **triglyceride** or **waist circumference** in the Dependent List (with **Gender** in the Factor List for group comparison). Requesting the **Descriptives**, **Outliers** and **Percentiles** statistics produces a **percentiles table**, from which the IQR is derived, plus a list of **outliers and extreme values**. The file also gives a numerical rule: values are considered **outliers** if they lie beyond **2 standard deviations from the mean**.",
          "topics": [
            "boxplots-outliers"
          ]
        },
        {
          "id": "medi304-auto-mtxoi8j7-n0",
          "title": "Correlation and Regression (MEDI304)",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This file covers **Pearson's correlation coefficient (r)**, used to examine the relationship between two quantitative, continuous, **normally distributed** variables, with |r| of 0.1–0.3 classed as **weak**, 0.4–0.6 as **moderate** and 0.7–1.0 as **strong**. In the Bipolar49 dataset, body weight and waist size showed a significant, positive, **moderate correlation** (r = 0.636, p < 0.001), after normality was confirmed via Explore (p = 0.746 waist size, p = 0.311 weight). The file then introduces **simple linear regression**, which models and predicts an outcome from one predictor assuming a **straight-line relationship**: weight predicted waist circumference with **R² = 0.405** (40.5% of variation explained) and **B = 0.583** (each 1 kg of weight associated with a 0.583 cm larger waist, p < 0.001). The fitted equation **y = 51.58 + 0.583x** allows predictions such as ≈98.2 cm for an 80 kg participant, with **scatterplots and fit lines** used to visualise the relationship, check linearity and show how well the line fits the observed data.",
          "topics": [
            "correlation-regression"
          ]
        },
        {
          "id": "medi304-auto-mtyf6m2n-n0",
          "title": "Data Type and Distribution (1-3)",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This file covers **measures of central tendency** — the **mean** (arithmetic average), **median** (middle value of ordered data) and **mode** (most frequent value) — and how to choose the best one. With skewed data, such as body weights 70, 70, 70, 70, 200 kg, the **mean** is inflated by outliers while the **median** is less affected by **skewness** and the mode can be most representative. Distribution patterns covered include bell-shaped (normal) distributions, **skewness** (0 = normal; 0.5–1 moderate; >1 high), **kurtosis** or 'pointyness' (> +1 too peaked; < -1 too flat), and U-shaped distributions such as the vitamin dose-response curve where both deficiency and excess cause adverse responses. The **Kolmogorov-Smirnov test** assesses normality, and bimodal distributions were illustrated by Hodgkin lymphoma incidence by age. The file also outlines the steps of a research project (question, ethics approval, design, data collection, processing, analysis, interpretation, writing, publication) and statistical software including SPSS, SAS and STATA for meta-analysis.",
          "topics": [
            "data-distributions"
          ]
        },
        {
          "id": "medi304-auto-mtyf7j60-n0",
          "title": "Data Sampling, Data Types, Normality Testing and Terminology",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This file explains how to select a sample using **random sampling** (equal chance of selection for every population member, with inclusion/exclusion criteria to eliminate bias) and **stratified random sampling**, where the population is subdivided into **strata** (e.g., age bands) and randomly sampled so the sample mirrors population proportions. It then reviews the four **measurement scales**: **nominal** (names only, e.g., gender), **ordinal** (rank-ordered, unknown differences, e.g., satisfaction ratings), **interval** (exact consistent differences, e.g., Celsius temperature) and **ratio** (interval plus a **true zero**, e.g., weight, age). Before comparing means, **Levene's test** checks the null hypothesis of **equal variances** across groups, and a significant result (p < 0.05) prompts a switch to non-parametric tests; **normality** is assessed with the **Shapiro-Wilk** and **Kolmogorov-Smirnov** tests plus **Q-Q plots** and **boxplots**. The file closes with key terminology: a **population** is the complete set of operationally defined individuals, a **sample** is a subset of it, and **bio-statistics** covers data collection, analysis, interpretation, presentation and organization.",
          "topics": [
            "data-distributions",
            "research-design"
          ]
        },
        {
          "id": "medi304-auto-mtyf8onl-n0",
          "title": "Evidence Based Medicine (EBM) - MEDI304",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "Evidence-based medicine is the integration of **best research evidence** with **clinical expertise** and **patient values** (Sackett et al., BMJ 1996); it is not evidence alone. Practice based purely on clinical experience, pathophysiological reasoning, common sense or opinion is **pre-EBM** and frequently leads to **false positive conclusions** about efficacy. The EBM process follows five 'A' steps: **Assess** the problem, **Ask** the question (using **PICO**: Patient, Intervention, Comparison, Outcome), **Acquire** the evidence, **Appraise** it for **validity**, **effect size** and **precision**, then **Apply** it in practice. **Systematic reviews, meta-analyses and RCTs** are the gold standard because they are least likely to mislead, though EBM also considers cohort, case-control and cross-sectional studies. With 75 trials and 11 systematic reviews published a day, clinicians need skills to find evidence efficiently, appraise its quality effectively and use it systematically throughout their careers.",
          "topics": [
            "bias-validity-ebm"
          ]
        },
        {
          "id": "medi304-auto-mtylabwg-n0",
          "title": "Parametric tests PT4-6: Simple, multiple and logistic regression",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This file extends **correlation and regression** with three techniques. **Simple linear regression** models one quantitative IV against one quantitative DV with a linear line to enable prediction (e.g. predicting waist size from body weight), reporting **r2** for association and the **B coefficient** for prediction; in the Bipolar49 example, F(1,47)=31.94, p<0.001, r2=0.405, and each 1 kg of body weight predicts a 0.584 cm larger waist. **Multiple linear regression** uses two or more IVs for one continuous DV, assuming normality, homogeneity of variance, independence and linearity, and dropping one of any pair of IVs correlated at r2 > ~0.6. **Binary logistic regression** is the extension used when the DV is **dichotomous** (e.g. heart attack yes/no), assumes no outliers and no high predictor inter-correlations, and is interpreted through **odds** (e.g. Odds = 1.75, 95% CI 1.13-2.72 for poor cognition with high CRP). A key exam point is that the choice of analysis depends on the question and the DV's scale: continuous outcomes use (multiple) linear regression with B values, binary outcomes use logistic regression with odds.",
          "topics": [
            "correlation-regression",
            "logistic-regression"
          ]
        },
        {
          "id": "medi304-auto-mtylbai9-n0",
          "title": "One-way ANOVA, Post-hoc Tests and Repeated Measures ANOVA",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "**One-way ANOVA** compares means of 2 or more unrelated groups on one continuous dependent variable, requiring independence of groups, no outliers, **normality (Shapiro-Wilk)** and **homogeneity of variance (Levene's test)**. A significant F ratio only shows an overall difference, so **post-hoc analysis** (e.g., **Tukey HSD**) identifies where differences lie; no post-hoc testing is needed if ANOVA is non-significant. Post-hoc choice depends on equal variances and sample sizes: **Games-Howell** for unequal variances, **Tukey's HSD/REGWQ** for equal ns, **Gabriel** for slightly different ns, **Hochberg's GT2** for very different ns, **Bonferroni** for conservative Type I error control, and **Dunnett's** for control-versus-all comparisons. Results should report F statistics, post-hoc values, means with SD or SEM, and p values. **One-way repeated measures ANOVA** extends this to related, repeated observations on the same subjects, controlling individual differences, requiring fewer subjects and enabling study of change across time.",
          "topics": [
            "parametric-tests"
          ]
        },
        {
          "id": "medi304-auto-mtylcu19-n0",
          "title": "Parametric Tests PT9-11: Two-Way ANOVA, Mixed ANOVA and ANCOVA",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "Two-way ANOVA is a **factorial analysis** comparing two or more categorical independent variables on one continuous dependent variable (e.g., blood glucose by age group and gender), assessing both **main effects** and **interaction effects**; a significant interaction (p < 0.05) requires post-hoc or simple main effects analysis, while a non-significant one (e.g., gender x education on cognition, F(2, 91) = 0.239, p = 0.788) requires none. Full factorial designs are essential - without a nil-butyrate control, a one-way ANOVA cannot isolate butyrate's effect. The **two-way repeated-measures (mixed between-within) ANOVA** examines two groups' dependent variables over two or more time points, extending the paired t-test to three or more levels (e.g., swimming vs running body weight every 4 weeks for 24 weeks). **ANCOVA** is ANOVA controlling for a **covariate** - most useful when the confounder is linearly related to the outcome but not conceptually related to the factors - comparing **adjusted means** rather than group means, with typical covariates including baseline values, age and education. In SPSS, both are run via **Analyze > General Linear Model > Univariate**, and results are reported with adjusted mean and SD, two-tailed p-values and significance set at 0.05.",
          "topics": [
            "parametric-tests"
          ]
        },
        {
          "id": "medi304-auto-mtyleu8t-n0",
          "title": "Randomized Control Trial 1 (RCT1)",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "An **RCT** allocates subjects **at random** (coin toss, drawing lots, random number table, computer generation) to clinical interventions compared against a **placebo** or no intervention, aiming to establish **cause and effect**, find the superior treatment, avoid **confounding** and eliminate **selection bias**. In a **double blind** RCT, neither participants nor researchers know the treatment, placebo, or the **independent/dependent variables**, with a project manager handling allocation. A **true experimental design** requires **randomization**, **manipulation of the independent variable**, and at least one **experimental and control group** similar in number and characteristics. Common designs include **post-test only** (two-arm parallel, t-test), **factorial** (multiple independent variables, one-/two-way ANOVA plus post hoc), **pre-test/post-test** (mixed design repeated measures ANOVA), extended repeated-measure designs, and the within-subject **crossover design** with a **washout period**, which is powerful because subjects are their own controls but risks the second condition being influenced by the first. RCTs suit **large samples** with clear measurable impacts but are expensive, suffer **loss to follow-up**, and are unsuitable for small samples, diverse results, or quick answers.",
          "topics": [
            "rct-designs",
            "rct-samplesize",
            "research-design"
          ]
        },
        {
          "id": "medi304-auto-mtylgeog-n0",
          "title": "MEDI304 - Randomized Control Trial 2 (RCT2)",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This file introduces **quasi-experimental designs**, which manipulate the **independent variable** but lack **randomization** or a **control group**: the **one-group pre-test/post-test design** (paired t-test or repeated measures ANOVA), the non-randomized pre/post control design (mixed one- or two-way repeated measures ANOVA with post hoc tests), and the **time series design** where each subject serves as their **own control**. It then reviews the RCT workflow from proposal and **ethics approval** through inclusion/exclusion, consent, **randomization**, drop-outs and analysis, stressing reporting of **baseline characteristics**, the **CONSORT 2010** flow diagram, and **intention-to-treat** versus **per-protocol** analyses. Expected outcomes are mapped to parametric tests (t-tests, one-/two-way ANOVA, correlation/regression, **OR and RR**, repeated measures ANOVA (group x time), **ANCOVA**) and non-parametric equivalents (**Wilcoxon signed-rank**, **Mann-Whitney U**, **Kruskal-Wallis**, **Spearman rho**, **Friedman's ANOVA**). Finally, clinical research designs are summarised from descriptive studies (surveys, case reports, case series) through observational analytics (cohort, case-control, cross-sectional) to experimental RCTs (parallel, cross-over, factorial).",
          "topics": [
            "quasi-experimental-design",
            "rct-samplesize",
            "research-design",
            "parametric-tests"
          ]
        },
        {
          "id": "medi304-auto-mtylhdrt-n0",
          "title": "Research Design: Case Reports, Case Series and Cross-Sectional Studies",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This file describes observational, descriptive study designs. A **case report** documents a novel, significant finding and generates new ideas, while a **case series** follows a group of patients with a similar diagnosis or procedure over time; because there is no experimental protocol or control over treatment allocation, both are **descriptive only** and no **causal inferences** about efficacy can be made, though case series can generate hypotheses for future studies including **randomized controlled trials**. A **cross-sectional study** (also called a prevalence or transversal study) observes a representative subset of a population at **one specific point in time** and can be descriptive or analytical, supporting analyses such as t-tests, one-way ANOVA, linear regression, correlation and **odds ratio**. Descriptive analysis summarises potentially large datasets (e.g. 40 subjects x 200 questionnaires = 8,000 raw data) using **central tendency** (mean, median, mode) and **dispersion** (range, variation about the average), with SPSS descriptives, frequencies and the **Kolmogorov-Smirnov test**. The worked obesity example shows that body weight alone is invalid because height affects weight, so **BMI** (kg/m²) is validated against body fat % in a cross-sectional correlation study; an **r² = 0.658** indicates a strong (65%) correlation, supporting BMI as a diagnostic criterion.",
          "topics": [
            "research-design",
            "data-distributions",
            "correlation-regression"
          ]
        },
        {
          "id": "medi304-auto-mtyljhbh-n0",
          "title": "Research design RD3-4: Case-control and cohort studies",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "A **case-control study** compares subjects with a disease (**cases**) to those without (**controls**) and looks **retrospectively** at exposure to a risk factor; no intervention is attempted and the design estimates an **odds ratio**. Its advantages are efficiency, small samples for **rare diseases**, and examining **multiple risk factors** simultaneously, but it is susceptible to **recall bias**, methodological error, difficulty finding controls, and yields only **weak (non-causal) evidence**. A **cohort study** is a **longitudinal** design that enrolls **at-risk, disease-free** subjects, measures **exposure** (e.g. smoking vs non-smoking), and follows them over time to record outcomes, providing **strong causal evidence** suited to rare exposures and multiple outcomes, at greater time and cost - exemplified by the **Framingham Heart Study** (1948, general population) and specific cohorts like the **Nurses Health Study**. Expected biostatistics include descriptive analysis, difference tests, correlation, regression, ANOVA (repeated measures for cohorts), odds ratio (case-control) and probability/**relative risk** (cohort). Association can be **causal or non-causal**: cross-sectional and case-control designs establish association only, while **cohort studies and RCTs** address causal effect.",
          "topics": [
            "research-design"
          ]
        },
        {
          "id": "medi304-auto-mtyllqui-n0",
          "title": "Research Project 1: Exercise intervention in a rat model",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This project investigates (1) the effects of a **high-fat diet** on metabolic function and (2) whether **daily exercise** can prevent obesity, using a well-established rat model against a backdrop of near-tripled global obesity rates since 1975. Thirty **Sprague Dawley rats** were **randomly allocated** to three groups of 10 for a **12-week** intervention: low-fat Control, High-fat diet, and High-fat diet plus Exercise (daily 4-hour **running wheel** access). Outcomes include serial **body weight**, endpoint **WAT, BAT and liver** weights, fasting **triglycerides, total cholesterol and glucose** (enzymatic colorimetric kits), fasting **insulin** (ELISA) and insulin resistance via **HOMA-IR**. The data are supplied in an Excel file and should be analysed with a **one-way ANOVA** for endpoint group comparisons and a **mixed/repeated-measures ANOVA** for weight trajectories, with post-hoc tests such as **Tukey** to localise differences.",
          "topics": [
            "rat-obesity-project",
            "research-design",
            "parametric-tests",
            "measurements"
          ]
        },
        {
          "id": "medi304-auto-mtylneaw-n0",
          "title": "Research Project 2: Pharmacological intervention in a rat model",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This project tests whether **betahistine**, a histamine **H1 receptor agonist** used for **Ménière's disease**, can prevent metabolic side effects of chronic **risperidone** (an antipsychotic and potent **H1 antagonist**) linked to **obesity**, **dyslipidemia** and **insulin resistance**. Thirty female **Sprague Dawley rats** were randomly assigned to control (cookie dough), risperidone **2 mg/kg/day**, or risperidone plus betahistine **20 mg/kg/day** for **9 weeks**, with all drugs delivered orally in cookie dough pellets. Outcomes include body weight gain, food intake, **WAT/BAT and liver weights**, fasting plasma **triglycerides** and **total cholesterol**, and active **ghrelin** by ELISA. Prior work showed betahistine attenuates olanzapine-induced weight gain, but its effect with risperidone was previously unclear. The results are in a separate Excel file and would typically be analysed with **one-way ANOVA** across the three groups.",
          "topics": [
            "research-design",
            "rct-samplesize",
            "parametric-tests"
          ]
        },
        {
          "id": "medi304-auto-mtylp2t9-n0",
          "title": "Research Project 3 - Exercise intervention during pregnancy",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This project investigates a **supervised 12-week exercise program** starting at gestational week 12 in **pregnant women with obesity**, since obesity in pregnancy raises risks for mother and newborn. Fifty women were recruited (half exercise, half control) and classified by **WHO obesity classes** (Class I BMI 30.0-34.9, Class II 35.0-39.9, Class III >=40). After 14 withdrawals, small subgroup numbers forced all controls into one group, giving final groups of **Control-obesity (n=15)**, **Exercise-Class I (n=12)** and **Exercise-Class II/III (n=9)**. Outcomes (**BMI**, **body fat percentage**, **daily caloric intake**, **physical activity**) were measured at baseline, program end, and a 12-week follow-up to assess maintenance. Physical activity was captured objectively by **accelerometer** using **daily step count** and **bouts of moderate/vigorous activity lasting at least 10 minutes**, with results supplied in a dataset for analysis.",
          "topics": [
            "research-design",
            "rct-samplesize",
            "measurements",
            "parametric-tests"
          ]
        },
        {
          "id": "medi304-auto-mtylq9zc-n0",
          "title": "MEDI304 - Sample size and effect size",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This lecture explains how to determine the **sample size** - the number of observations taken from a population to make inferences about it - required for a study. The key determinants are the **alpha value** (0.05 or 0.01, one- or two-sided), **statistical power** (normally 80%), the **effect size** between groups, the **standard deviation** from a pilot/similar study or population, and the type of sampling and analysis. **Cohen's d** = (Mtest - Mcon)/SDpooled is interpreted as small (0.2), medium (0.5) and large (0.8); for more than two groups, **Cohen's f2 / partial eta squared** is used, and in SPSS ANOVA is preferred because the t-test does not output effect size. Worked examples include estimating sample size from previous studies (schizophrenia NCAM study), using general population data when no controls exist (bipolar disorder and metabolic syndrome, ~20% prevalence in Australian adults, via clincalc.com), and reducing alpha from 0.05 to 0.01, which requires a larger sample because power is contributed by sample size. The lecture also models writing the sample size justification in a Methods section and expressing **magnitude of effect** as a percentage change, e.g., 19.4%.",
          "topics": [
            "rct-samplesize"
          ]
        },
        {
          "id": "medi304-auto-mtylr6me-n0",
          "title": "MEDI304 - Three t-tests",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This file walks through the three t-tests with SPSS worked examples. A **one-sample t-test** compares a sample mean to a population value (e.g., Bipolar49 fasting glucose M = 5.667, SD = 1.122 vs 4 mmol/L, p < 0.001). An **independent-samples t-test** compares means of two separate groups (e.g., BMI or body weight in patients vs controls), assuming **continuous**, **normally distributed** data within each group and **approximately equal variances**. A **paired-samples t-test** compares two related measurements from the same subjects or matched pairs, such as body fat % or leg press before and after 12 weeks of exercise (Exercise44: leg press rose from 86.10 to 98.96, t(29) = −8.29, p < 0.001). All tests are accessed via **Analyze → Compare Means**, and results should be reported with means ± SD, t(df), p-value and direction of effect.",
          "topics": [
            "parametric-tests"
          ]
        },
        {
          "id": "medi304-auto-mtyls3ol-n0",
          "title": "Week 10 Practical - Poster Requirements for Assessment 3",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "Assessment 3 is a group **scientific poster** (15% weighting, plus 5% oral presentation) due 27/10/2025, submitted electronically via eLearning. The poster must be **A0 size** (84.1 x 118.9 cm) and include Title, Introduction, Aims, Methods, Results, Discussion and Conclusion with references in the **numbered reference system** (~10 references). The marking rubric allocates 40% to Methods (data analysis) and results presentation, 20% each to Introduction/Aims and Discussion/Conclusion, and 10% each to format and referencing; the Results section should occupy at least half the poster and include a minimum of 1 table, 1 bar graph, 1 line graph and 1 correlation graph. Suggested font sizes are ~60+ for the title, ~40+ for subtitles, ~20 for main text, and ~14-16 for Methods/References, and technical jargon and excessive abbreviations should be avoided. Week 10 practical tasks require forming groups of **3-4 students**, inputting the project Excel dataset into **SPSS**, setting up variables in **Variable View**, and running **descriptive statistics** (Mean, **SD**/**SEM**) to build a scientific table.",
          "topics": [
            "communication",
            "spss-essentials"
          ]
        },
        {
          "id": "medi304-auto-mtyltb8n-n0",
          "title": "Week 10 Practical Task 3: Input Data from Excel to SPSS and Data Analysis",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This practical covers transferring an **Excel** dataset from Moodle into a **new SPSS dataset** and preparing it for analysis. In the **Variable View** page you set parameters for every factor and variable: for the **Group** variable this means changing the type from **String** to **Numeric**, reducing **Decimals** from 15 to 3, and adding labels such as '1. Control; 2. Olanzapine; 3. Olanzapine+Exercise'. You then select **Data View** to work with the entered data. Finally, you use **Analyze** to run **descriptive statistics** on all measurements, obtaining the **Mean**, **standard deviation (SD)** and/or **standard error of mean (SEM)** for each variable.",
          "topics": [
            "spss-essentials"
          ]
        },
        {
          "id": "medi304-auto-mtylu5kw-n0",
          "title": "Week 10 Practical Task 4: Making a scientific table for Mean and SD (or SEM)",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This task uses the **SPSS data file** built in Week 10 Practical Task 2 and the **descriptive statistics** (Mean, **SD** and/or **SEM**) obtained in Week 10 Practical Task 3 for all measured variables. Students construct a **scientific table** containing a title, group (treatment) information, **sample size**, the variables measured, and the mean with SD or SEM. Guidance on how to make a scientific table is provided in the Week 9 practical slides. The table can later be extended by adding the outputs of **statistical analysis**.",
          "topics": [
            "communication",
            "spss-essentials"
          ]
        },
        {
          "id": "medi304-auto-mtylvuaf-n0",
          "title": "MEDI304 Week 10 Self-Check Quiz: Experimental Designs and RCT Procedure",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This quiz reviews the core features of the **randomised controlled trial**, whose primary aim is to establish a **cause-and-effect** relationship through **random allocation by chance alone** and **double blinding**, where neither participants nor researchers know the allocation. Procedurally, **informed consent** normally occurs immediately before randomisation, and **baseline characteristics** are compared afterwards to confirm randomisation produced comparable groups. Design variants covered include the **factorial design** (two or more independent variables plus their interaction) and the **crossover design**, which uses a **washout period** to reduce carry-over of the first intervention. **Quasi-experimental designs** lack randomisation, a control group, or both, and suit real-world settings where random assignment is impractical or unethical; a one-group pre-test/post-test version is analysed with a **paired t-test**. Finally, analysis may follow an **intention-to-treat** approach (all randomised participants included) or a **per-protocol** approach (only protocol-adherent participants included).",
          "topics": [
            "rct-samplesize",
            "research-design",
            "parametric-tests"
          ]
        },
        {
          "id": "medi304-auto-mtylxcqk-n0",
          "title": "MEDI304 Week 11 Practical - Applying Statistical Tests to Research Data",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "These practical slides outline how to apply statistical tests to research data, including presenting **mean and SEM** in tables with statistical outputs, correlation analysis, choosing between an **independent t-test** and **one-way ANOVA** with post-hoc tests, choosing between a **one-way repeated ANOVA** and **paired t-test**, and comparing groups when data are not normally distributed. The substantive content provided focuses on **normality testing**: many **parametric tests** assume that measurements and/or their means are **normally distributed**, and normality is often merely assumed for small samples, which may or may not be justified and should inform interpretation. Formal checks use the **Kolmogorov-Smirnov goodness-of-fit test** or the **Shapiro-Wilk test** (preferred by some researchers when **n < 50**), applied to each measurement individually using data from all subjects without dividing by groups. If a measurement is **not normally distributed**, **non-parametric tests** should be used for it, while normally distributed measurements can still be analysed with parametric tests.",
          "topics": [
            "data-distributions",
            "parametric-tests",
            "nonparametric-tests",
            "spss-essentials"
          ]
        },
        {
          "id": "medi304-auto-mtylzgpt-n0",
          "title": "Week 11 Self-Check Quiz - Validity, Bias and Confounding",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This quiz contrasts **internal validity** (whether the observed effect can be attributed to the intervention rather than bias, confounding or other factors) with **external validity** (whether results generalise to other populations, settings or conditions, improved by replication in diverse samples). Threats to internal validity covered include **maturation** (natural within-person change such as growth in height and weight), **history** (external events such as joining another physical-activity study), **testing** and **experimental mortality** (dropout), with **random assignment** to treatment and control groups as the key control measure. Biases tested include **measurement bias** from subjective researcher assessment that exaggerates effects, **outcome-reporting bias** (selective reporting by result direction) and **citation bias** (significant findings cited more often). A **confounder** must be associated with both the exposure and the outcome, with **age** highlighted as a common example. Random error is assessed or reduced using a **larger sample**, **p-values** and **confidence intervals**, while construct validity is illustrated by a depression test measuring depression rather than bipolar or schizophrenia symptoms.",
          "topics": [
            "bias-validity-ebm",
            "measurements"
          ]
        },
        {
          "id": "medi304-auto-mtym1ibp-n0",
          "title": "MEDI304 Week 12 Self-check Quiz: Evidence-Based Medicine",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This self-check quiz consolidates the core concepts of **evidence-based medicine (EBM)**, defined as the integration of best **research evidence**, **clinical expertise** and **patient values** - not evidence, experience or biological mechanism alone. It reviews the five-A cycle (**assess, ask, acquire, appraise, apply**) and the **PICO** framework for building answerable clinical questions, where C denotes **comparison**. Critical appraisal rests on three considerations: **validity**, **effect size** and **precision**, with precision driven by **sample size** and accuracy of measurement. Recommendations grounded only in **unsystematic clinical experience** or **pathophysiological mechanisms** from laboratory studies are insufficient for practice, and **systematic reviews**, **meta-analyses** and **randomised controlled trials** are the gold standard for evaluating whether a treatment does more good than harm.",
          "topics": [
            "bias-validity-ebm"
          ]
        },
        {
          "id": "medi304-auto-mtym3u8z-n0",
          "title": "MEDI304 Weeks 2-7 Practical Classes: SPSS Command Commend Sheet",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This sheet consolidates the SPSS menu commands used across the MEDI304 practical classes. Week 2 covers data management: **Sort Cases** (one or two variables), **Insert Variable**, and using sorting to find errors. Week 3 uses **Descriptive** statistics (mean, SD, min, max, **kurtosis, skewness**) and **Explore** for subgroup statistics, **normality plots with tests**, **homogeneity of variance** (with Power estimation) and boxplots with outliers and percentiles. Week 4 runs **Pearson correlation** (Bivariate, two-tailed), **simple linear regression** (checking *ZRESID vs *ZPRED plots, R squared, part/partial correlations) and the t-test family: **one-sample**, **independent** (Define Groups 1 = patients, 2 = controls) and **paired**. Weeks 5-6 cover **one-way ANOVA** (Tukey post hoc), **repeated measures ANOVA** (within-subject factor, Bonferroni-adjusted comparisons), **two-way ANOVA** and **ANCOVA** (covariate in the Covariate box) via General Linear Model. Weeks 6-7 give the non-parametric paths: **Spearman's rho** (Correlate → Bivariate), **Wilcoxon signed-rank** (2 Related Samples), **Mann-Whitney U** (2 Independent Samples), **Kruskal-Wallis** (K Independent Samples), **Friedman** (K Related Samples) and **chi-square** via Crosstabs with observed, expected, row, column and total cell counts.",
          "topics": [
            "spss-essentials",
            "data-distributions",
            "correlation-regression",
            "parametric-tests"
          ]
        },
        {
          "id": "medi304-auto-mtym50ng-n0",
          "title": "MEDI304 Week 9 Practical Task 1 - Drawing a pie chart in Excel",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This practical walks through building a **pie chart** in Excel from a table of **Food Ingredients** and their **Percentages (%)**. You enter the category names under **Data name** and values under **Data**, select both, then use the **Insert** tab and choose **Pie Charts**. The default chart title 'Percentages %' is edited to '**Food ingredients %**', and the '+' **Chart elements** menu is used to switch on the **Chart title**, **Data labels** and **Legend**, whose locations can be adjusted. Colours and appearance are changed via the **Style** sign. The finished figure is then copied and pasted into **PowerPoint** or **Word** for the **poster** (Task 5).",
          "topics": [
            "excel-pie-charts",
            "communication"
          ]
        },
        {
          "id": "medi304-auto-mtym7ml7-n0",
          "title": "MEDI304 Week 9 Practical Task 2 - Bar Graph with Standard Errors in Excel",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This practical builds a **bar graph** in Excel from a summary table containing **Group name**, **Mean** and **SEM** columns. After selecting the group names and means, the chart is created from the **Insert** tab using **Insert Column or Bar chart**, and the **chart title** and **axis titles** (added via the **Chart Elements** + menu) are edited to describe the study. **Error bars** are set through Error Bars > More Options > **Custom** > Specify Value by selecting the **SEM** data for both positive and negative error values. The **Style** sign changes the chart's colour or style, and the finished figure is copied and pasted into PowerPoint or Word, including the poster for **Task 5**.",
          "topics": [
            "excel-bar-graphs",
            "communication"
          ]
        },
        {
          "id": "medi304-auto-mtym8tnh-n0",
          "title": "MEDI304 Week 9 Practical Task 3 – Drawing a line graph with standard errors in Excel",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This task walks through building a **line graph** in Excel from data for **Group 1** and **Group 2**, created via the **Insert** tab's line chart option. The figure is made poster-ready by editing the **chart title**, adding **axis titles** through the **Chart Elements** (\"+\") menu, and changing the **horizontal axis** labels to the **Time Data** via right-click → data → Edit. Precision is shown by adding **custom error bars** using the **SEM** values for both positive and negative error values, deleting any unwanted **X-direction error bars**. Colour or style can be changed with the **Style sign**, and the finished graph is copied and pasted into PowerPoint or Word for the **Task 5 poster**.",
          "topics": [
            "communication"
          ]
        },
        {
          "id": "medi304-auto-mtym9v6g-n0",
          "title": "MEDI304 Week 9 Practical Task 4 - Drawing a Correlation Graph in Excel",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This practical task steps through creating a **correlation graph (scatter plot)** in Excel from a table of **food intake** (X-axis) and **weight gain** (Y-axis) for all subjects. After selecting the data, **Insert Scatter** draws the graph, and the default **chart title** and **axis titles** are edited via the **Chart Elements ('+')** menu so the figure is properly labelled. A **Linear trendline** is added to show the line of best fit, and a **text box** reports **r** and **p** for the correlation. Colour or style can be adjusted, and the finished figure is then copied and pasted into PowerPoint or Word for the **poster** (Task 5).",
          "topics": [
            "correlation-regression",
            "communication"
          ]
        },
        {
          "id": "medi304-auto-mtymat1a-n0",
          "title": "Week 9 Self-Check Quiz: Observational Study Designs",
          "source": "auto-synced from Moodle",
          "added": "2026-09-12",
          "body": "This quiz reviews the family of observational designs. A **case report** documents a novel and significant finding, while a **case series** collects multiple cases with similar or unusual findings; because neither has experimental allocation or an appropriate control group, they serve to **generate hypotheses**, not prove treatment efficacy. **Cross-sectional (prevalence) studies** examine data at one point in time - as in the obesity example testing the association between **BMI** and body-fat percentage (weight alone fails because height influences it). **Case-control studies** compare people with and without an outcome, look retrospectively at exposure, use the **odds ratio**, and are efficient for **rare diseases**. **Cohort studies** enrol disease-free participants, measure exposure, then follow them longitudinally to record outcomes, allowing multiple outcomes to be examined. Both cross-sectional and case-control designs establish association but not causation by themselves.",
          "topics": [
            "research-design"
          ]
        }
      ]
    }
  };
  var d = root.JSH_DATA = root.JSH_DATA || {};
  Object.keys(UPDATES).forEach(function (sid) {
    var u = UPDATES[sid]; var s = d[sid]; if (!s) return;
    if (s.guide && u.topics) u.topics.forEach(function (t) { if (!s.guide.topics.some(function (x) { return x.id === t.id; })) s.guide.topics.push(t); });
    if (s.questions && u.questions) s.questions.quiz = s.questions.quiz.concat(u.questions);
    if (s.flashcards && u.cards) s.flashcards.cards = s.flashcards.cards.concat(u.cards);
    if (s.notes && u.notes) s.notes.summaries = s.notes.summaries.concat(u.notes);
  });
})(typeof self !== 'undefined' ? self : globalThis);
