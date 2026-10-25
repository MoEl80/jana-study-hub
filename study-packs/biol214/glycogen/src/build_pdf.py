"""Build the glycogen study-pack PDF.

    python3 build_pdf.py            # writes ../Glycogenesis-and-Glycogenolysis.pdf

Needs: playwright (Python) + Chromium, qrcode, Pillow. Fonts are the OFL
Google Fonts in ./fonts; photos (with credits on the last page) in ./photos;
animation stills in ./stills (exported from ../glycogen-animations.html).
"""
import asyncio, base64, io, os, pathlib
import qrcode
import qrcode.image.svg
from diagrams import *  # noqa: F401,F403
import diagrams as D

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE.parent / "Glycogenesis-and-Glycogenolysis.pdf"
ANIM_URL = "https://moel80.github.io/jana-study-hub/study-packs/biol214/glycogen/glycogen-animations.html"
CHROME = os.environ.get("CHROME", "/opt/pw-browsers/chromium-1194/chrome-linux/chrome")


def img(name):
    return (HERE / "photos" / name).as_uri()


def still(name):
    return (HERE / "stills" / name).as_uri()


def qr_svg(url):
    q = qrcode.QRCode(border=1, box_size=10, error_correction=qrcode.constants.ERROR_CORRECT_M)
    q.add_data(url)
    q.make(fit=True)
    m = q.get_matrix()
    n = len(m)
    rects = "".join(f'<rect x="{x}" y="{y}" width="1" height="1"/>' for y, row in enumerate(m) for x, v in enumerate(row) if v)
    return f'<svg viewBox="0 0 {n} {n}" class="qr" shape-rendering="crispEdges"><rect width="{n}" height="{n}" fill="#fff"/><g fill="#1c2230">{rects}</g></svg>'


# ---------------------------------------------------------------- mini molecules for the ladders
def mol(kind):
    b = {
        "blood": f'<rect x="8" y="8" width="104" height="36" rx="18" style="fill:var(--blood-t);stroke:var(--blood)"/>' + D.glc(40, 26, 10) + D.T(58, 30, "blood", 11, 700, "var(--blood)"),
        "glc": D.glc(60, 26, 12),
        "g6p": D.glc(60, 30, 12, p=6),
        "g1p": D.glc(54, 26, 12, p=1),
        "udpg": D.glc(44, 26, 12, udp=True),
        "chain": D.core(14, 26, 12) + D.chain(30, 26, 4, 22, 9) + D.T(104, 30, "…", 14, 700, "var(--glc)"),
        "branched": D.core(14, 34, 12) + D.chain(30, 34, 4, 20, 8) + D.line(50, 26, 50, 20) + D.chain(50, 12, 4, 20, 8),
        "gly": D.particle(60, 26, .095, 1.7, 4, 62),
    }[kind]
    return f'<svg viewBox="0 0 120 52" class="mol">{b}</svg>'


def rung(kind, name, note=""):
    return f'<div class="rung"><div class="molbox">{mol(kind)}</div><div><div class="mname">{name}</div>{f"<div class=mnote>{note}</div>" if note else ""}</div></div>'


def step(n, enzyme, col, chips, plain, exam=""):
    chips_html = "".join(f'<span class="chip {c}">{t}</span>' for c, t in chips)
    return (f'<div class="stp {col}"><div class="rail"><span class="num">{n}</span></div><div class="stxt">'
            f'<div class="enz">{enzyme} {chips_html}</div><p>{plain}</p>{f"<p class=exam><b>Exam words:</b> {exam}</p>" if exam else ""}</div></div>')


def page(body, n, section="", cls=""):
    head = f'<div class="runhead"><span>Glycogenesis &amp; glycogenolysis</span><span>{section}</span></div>' if n > 1 else ""
    foot = f'<div class="folio">BIOL214 · Jana\'s study pack · {n}</div>' if n > 1 else ""
    return f'<section class="page {cls}">{head}<div class="content">{body}</div>{foot}</section>'


def photo(src, cap, credit, cls=""):
    return f'<figure class="photo {cls}"><img src="{img(src)}" alt=""><figcaption><span>{cap}</span><span class="credit">{credit}</span></figcaption></figure>'


def fig(svg_html, cap, cls=""):
    return f'<figure class="fig {cls}">{svg_html}<figcaption>{cap}</figcaption></figure>'


def box(kind, title, html):
    return f'<div class="box {kind}"><div class="boxt">{title}</div>{html}</div>'


# ---------------------------------------------------------------- pages
def build_pages():
    P = []
    n = lambda: len(P) + 1

    # 1 cover
    P.append(page(f"""
      <div class="cover">
        <div class="cover-top"><span>BIOL214 · Biochemistry of Energy &amp; Metabolism</span><span>Week 4 · Glycogen metabolism</span></div>
        <div class="cover-art-wrap">{D.cover_art()}</div>
        <h1 class="title"><span class="b">Glycogenesis</span> &amp; <span class="k">Glycogenolysis</span></h1>
        <p class="subtitle">How your body saves glucose, and how it spends it. Explained in plain words, with diagrams, real photos, real-life examples and animations.</p>
        <div class="cover-keys">
          <div><i class="k-sw" style="--c:var(--glc)"></i>glucose &amp; glycogen</div>
          <div><i class="k-sw" style="--c:var(--build)"></i>building (fed · insulin)</div>
          <div><i class="k-sw" style="--c:var(--break)"></i>breaking down (fasting · glucagon)</div>
          <div><i class="k-sw" style="--c:var(--phos)"></i>phosphate</div>
        </div>
        <div class="cover-foot">Study pack for Jana · University of Wollongong · Spring 2026</div>
      </div>""", n(), cls="cover-page"))

    # 2 contents
    toc = [("The big idea in one page", 3), ("Where glycogen is stored", 4), ("What glycogen looks like", 5), ("Why store glucose as glycogen?", 6),
           ("Glycogenesis, step by step", 7), ("Glycogenesis close-ups", 8), ("Glycogenolysis, step by step", 9), ("Glycogenolysis close-ups", 10),
           ("Build vs break, side by side", 11), ("Who flips the switch? Hormones", 12), ("Fine control: sensors inside the cell", 13),
           ("Real life 1: a normal day, and a fright", 14), ("Real life 2: sprinting and marathons", 15), ("Real life 3: diabetes, diets and alcohol", 16),
           ("When an enzyme is missing: glycogen storage diseases", 17), ("Memory tricks and exam traps", 18), ("The animations", 19),
           ("Test yourself", 20), ("Answers", 21), ("One-page summary", 22), ("Photo credits and sources", 23)]
    toc_html = "".join(f'<li><span>{t}</span><span class="dots"></span><span class="pn">{p}</span></li>' for t, p in toc)
    P.append(page(f"""
      <h2 class="h">Contents</h2>
      <ol class="toc">{toc_html}</ol>
      <div class="grid2 gap">
        {box("plain", "How to use this pack", "<p>Read the <b>big idea</b> page first. Then work through the two pathways with the diagrams, and watch the animations on your phone (scan the code). Finish with the <b>test yourself</b> page and the one-page summary.</p>")}
        <div class="qrbox">{qr_svg(ANIM_URL)}<div><b>Watch the animations</b><br>Scan with your phone camera. The same animations are in this folder as <span class="mono">glycogen-animations.mp4</span> and three GIFs.</div></div>
      </div>
      {box("exam", "What your subject outline asks", "<p>Glycogen synthesis: glycogen synthase adds UDP-glucose to a primer (branches made by branching enzyme). Breakdown: glycogen phosphorylase removes glucose-1-phosphate (debranching enzyme handles branches). Reciprocal regulation by insulin vs glucagon/adrenaline via the cAMP/PKA cascade. Diseases: von Gierke and McArdle. Exam focus: <i>compare hormonal control of liver vs muscle glycogen.</i></p>")}
    """, n(), "Contents"))

    # 3 big idea
    P.append(page(f"""
      <div class="eyebrow">Start here</div>
      <h2 class="h">The big idea in one page</h2>
      <p class="lead">Your brain and red blood cells need a steady supply of glucose, every minute, even while you sleep. But you only eat a few times a day. <b>Glycogen</b> is how your body solves this: it is a <b>glucose savings account</b>.</p>
      {fig(D.big_picture(), "Fig. 1 · After a meal you deposit glucose into glycogen. Between meals you withdraw it.")}
      <div class="words">
        <div class="word b"><div class="parts"><span><b>glyco</b><i>sugar</i></span><span><b>gen</b><i>make</i></span><span><b>esis</b><i>creation</i></span></div><p><b>Glycogenesis</b> = making glycogen from glucose.</p></div>
        <div class="word k"><div class="parts"><span><b>glyco</b><i>sugar</i></span><span><b>gen</b><i>make</i></span><span><b>o</b><i>&nbsp;</i></span><span><b>lysis</b><i>splitting</i></span></div><p><b>Glycogenolysis</b> = splitting glycogen back into glucose.</p></div>
      </div>
      <div class="grid2">
        {box("plain", "In plain words", "<p>Glycogen is a big, bushy tree made of thousands of glucose units joined together. Build the tree when there is extra glucose. Cut pieces off the tree when glucose runs low.</p>")}
        {box("warn", "Don't mix these up", "<p><b>Glycogenolysis</b> = breaking down glycogen.<br><b>Gluconeogenesis</b> = making <i>brand new</i> glucose from lactate, glycerol or amino acids. Different pathway (also Week 4).</p>")}
      </div>
    """, n(), "The big idea"))

    # 4 where stored
    P.append(page(f"""
      <div class="eyebrow">Location</div>
      <h2 class="h">Where glycogen is stored</h2>
      <p class="lead">Almost every cell has a little glycogen, but two places hold nearly all of it: the <b>liver</b> and the <b>skeletal muscles</b>. They store it for very different reasons.</p>
      <div class="grid-body">
        {fig(D.body_map(), "Fig. 2 · The two big glycogen stores.", "tight")}
        <table class="tbl">
          <tr><th></th><th>Liver</th><th>Muscle</th></tr>
          <tr><td>Amount</td><td>≈ 100 g</td><td>≈ 400 g (all muscles)</td></tr>
          <tr><td>Job</td><td>Keeps <b>blood</b> glucose steady for the whole body (brain!)</td><td>Fuel for the <b>muscle itself</b> when it contracts</td></tr>
          <tr><td>Can release free glucose into blood?</td><td><b>Yes</b>, has glucose-6-phosphatase</td><td><b>No</b>, lacks glucose-6-phosphatase</td></tr>
          <tr><td>Listens to glucagon?</td><td>Yes</td><td>No (no glucagon receptors)</td></tr>
          <tr><td>Listens to adrenaline?</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Lasts about</td><td>12–24 h of fasting</td><td>≈ 1.5–2 h of hard exercise</td></tr>
        </table>
      </div>
      {fig(D.scale_squares(), "Fig. 3 · Your blood holds only a few grams of glucose at any moment. The glycogen stores are what keep it topped up.")}
      {box("plain", "Easy way to remember", "<p><b>The liver is generous:</b> it shares its glucose with everyone. <b>Muscle is selfish:</b> it keeps its glycogen for its own work.</p>")}
    """, n(), "Where it is stored"))

    # 5 structure
    P.append(page(f"""
      <div class="eyebrow">Structure</div>
      <h2 class="h">What glycogen looks like</h2>
      <p class="lead">Glycogen is a <b>branched polymer of glucose</b>. Think of a tree: long chains are the branches, and every chain splits again and again.</p>
      {fig(D.structure_fig(), "Fig. 4 · Left: carbons in one glucose. Middle: α-1,4 bonds make chains; α-1,6 bonds make branches. Right: a whole particle built around one glycogenin protein.")}
      <div class="grid2">
        <ul class="facts">
          <li><b>Chains</b> use <b>α-1,4</b> glycosidic bonds (carbon 1 of one glucose to carbon 4 of the next).</li>
          <li><b>Branches</b> use <b>α-1,6</b> bonds, about every 8–12 glucose.</li>
          <li>A full particle can hold <b>up to ~55,000 glucose</b> and is about <b>21 nm</b> across. In the liver, particles clump into bigger “rosettes”.</li>
          <li>The ends of the outer chains are called <b>non-reducing ends</b>. All the building and cutting happens there.</li>
          <li>At the very centre sits <b>glycogenin</b>, the protein that started the particle.</li>
        </ul>
        {photo("glycogen-model.jpg", "A real computer model of one branched chain of glycogen, atom by atom (red = oxygen, black = carbon, white = hydrogen). You can see the side branch leaving the main chain.", "CeresVesta, Wikimedia Commons, public domain")}
      </div>
      {fig(D.why_branched(), "Fig. 5 · Why branch? More ends means more enzymes can work at the same time, so glucose goes in and out much faster. Branching also makes glycogen more soluble.")}
    """, n(), "Structure"))

    # 6 why glycogen + PAS
    P.append(page(f"""
      <div class="eyebrow">Why bother?</div>
      <h2 class="h">Why store glucose as glycogen?</h2>
      <div class="grid2">
        {box("plain", "Reason 1 · It keeps cells from swelling", "<p>Water moves toward where there are more dissolved particles (osmosis). The glucose stored in a liver cell would be about <b>0.4 mol/L</b> if it floated around free, and water would rush in until the cell swelled and burst. Packed into glycogen, the same glucose counts as only a few huge particles.</p>")}
        {box("plain", "Reason 2 · It is fast", "<p>Fat stores far more energy, but it is slow to use and <b>can't be turned into glucose</b>. Glycogen can be broken down within seconds, and muscle can burn it even without oxygen (sprinting).</p>")}
      </div>
      {fig(D.osmotic_fig(), "Fig. 6 · Same amount of glucose, two ways of storing it.")}
      <h3 class="h3">See glycogen with your own eyes: the PAS stain</h3>
      <p>Pathologists stain tissue with <b>PAS</b> (periodic acid–Schiff). It turns glycogen <b>magenta</b>, which is why glycogen is magenta in every diagram in this pack. To prove the pink stuff really is glycogen, they digest a second slice with <b>diastase</b> (an enzyme that breaks glycogen down) and stain again.</p>
      <div class="grid2">
        {photo("liver-pas.jpg", "Liver biopsy, PAS stain. The liver cells are packed with glycogen (deep magenta). This patient has a glycogen storage disorder, so there is far more than normal.", "Dept. of Pathology, Calicut Medical College, CC BY-SA 4.0")}
        {photo("liver-pas-diastase.jpg", "The same liver after diastase, then PAS. The magenta is gone: the enzyme digested the glycogen. This PAS / PAS-diastase pair is a real lab test.", "Dept. of Pathology, Calicut Medical College, CC BY-SA 4.0")}
      </div>
    """, n(), "Why glycogen?"))

    # 7 glycogenesis ladder
    P.append(page(f"""
      <div class="eyebrow b">Pathway 1 · Build</div>
      <h2 class="h">Glycogenesis, step by step</h2>
      <p class="lead">When: <b>after a meal</b>, when blood glucose and <b>insulin</b> are high. Where: the <b>cytosol</b> of liver and muscle cells.</p>
      <div class="ladder build">
        {rung("blood", "Glucose in the blood", "enters through GLUT2 (liver) or GLUT4 (muscle; insulin moves GLUT4 to the surface)")}
        {step(1, "Hexokinase <span class=sm>(glucokinase in liver)</span>", "b", [("phos", "ATP → ADP")], "Sticks a phosphate onto carbon 6. The negative charge traps glucose inside the cell.", "phosphorylation of glucose to glucose-6-phosphate (also step 1 of glycolysis).")}
        {rung("g6p", "Glucose-6-phosphate (G6P)")}
        {step(2, "Phosphoglucomutase", "b", [], "Moves the phosphate from carbon 6 to carbon 1. Nothing is added or lost; it is just rearranged.", "isomerisation G6P ⇌ G1P; reversible.")}
        {rung("g1p", "Glucose-1-phosphate (G1P)")}
        {step(3, "UDP-glucose pyrophosphorylase", "b", [("udp", "UTP in"), ("phos", "PPi → 2 Pi")], "Joins G1P to UTP to make <b>UDP-glucose</b>, the “activated” glucose that is ready to be added. The leftover pyrophosphate (PPi) is chopped into 2 phosphates, which makes the step one-way.", "G1P + UTP → UDP-glucose + PPi; PPi hydrolysed by pyrophosphatase.")}
        {rung("udpg", "UDP-glucose", "the activated donor: think of UDP as the “ticket” that lets glucose join the chain")}
        {step(4, "Glycogen synthase", "b", [("udp", "UDP out")], "Adds the glucose to the end of an existing chain with an <b>α-1,4</b> bond. This is the <b>slowest, controlled step</b> (rate-limiting). It needs a primer made by glycogenin.", "rate-limiting enzyme; regulated by phosphorylation (inactive when phosphorylated).")}
        {rung("chain", "Glycogen, one glucose longer (n + 1)")}
        {step(5, "Branching enzyme", "b", [], "Cuts a block of ~7 glucose from a long chain and re-attaches it lower down with an <b>α-1,6</b> bond.", "amylo-(1,4→1,6)-transglycosylase.")}
        {rung("branched", "Branched glycogen")}
      </div>
    """, n(), "Glycogenesis"))

    # 8 glycogenesis close-ups
    P.append(page(f"""
      <div class="eyebrow b">Pathway 1 · Close-ups</div>
      <h2 class="h">Glycogenesis close-ups</h2>
      {fig(D.glycogenin_fig(), "Fig. 7 · Every glycogen particle starts on a protein called glycogenin.")}
      <div class="grid2">
        {photo("pdb-1ll2-glycogenin.jpg", "The real 3D structure of glycogenin (two copies, green and orange) holding UDP-glucose, solved by X-ray crystallography.", "RCSB PDB, entry 1LL2 (Gibbons et al., 2002)", "sq")}
        <div class="stack">
          {box("plain", "Glycogenin in plain words", "<p>Glycogen synthase can only <i>extend</i> a chain; it cannot start one. Glycogenin is the starter: it grabs UDP-glucose and attaches about 8 glucose to itself. Then synthase takes over.</p>")}
          {box("exam", "Energy cost of storing glucose", "<p>From blood glucose to glycogen costs <b>2 high-energy phosphates per glucose</b>: 1 ATP (hexokinase) + 1 UTP (UDP-glucose). Getting it back out costs nothing, because phosphorylase uses free phosphate. Storing glucose as glycogen is therefore very efficient.</p>")}
        </div>
      </div>
      {fig(D.branching_fig(), "Fig. 8 · How branching enzyme builds the tree.")}
    """, n(), "Glycogenesis"))

    # 9 glycogenolysis ladder
    P.append(page(f"""
      <div class="eyebrow k">Pathway 2 · Break</div>
      <h2 class="h">Glycogenolysis, step by step</h2>
      <p class="lead">When: <b>between meals, overnight, during exercise or stress</b>. Triggered by <b>glucagon</b> (liver) and <b>adrenaline</b> (liver and muscle).</p>
      <div class="ladder break">
        {rung("gly", "Glycogen (n glucose)")}
        {step(1, "Glycogen phosphorylase", "k", [("phos", "Pi in"), ("", "helper: PLP (vitamin B6)")], "Snips one glucose at a time off the chain ends. It uses <b>phosphate</b>, not water, so each glucose comes off already carrying a phosphate. It stops 4 glucose away from a branch.", "phosphorolysis of α-1,4 bonds → glucose-1-phosphate; rate-limiting step.")}
        {rung("g1p", "Glucose-1-phosphate  +  glycogen (n − 1)")}
        {step(2, "Debranching enzyme", "k", [], "At each branch: moves 3 of the last 4 glucose to another chain end, then cuts the α-1,6 link to release the last one as <b>free glucose</b>.", "bifunctional: 4-α-glucanotransferase + α-1,6-glucosidase (hydrolysis).")}
        {step(3, "Phosphoglucomutase", "k", [], "Moves the phosphate back from carbon 1 to carbon 6.", "same enzyme as step 2 of glycogenesis, running the other way.")}
        {rung("g6p", "Glucose-6-phosphate")}
      </div>
      <div class="fork">
        <div class="forkcard b-liver">
          <div class="forkt">If this is a LIVER cell</div>
          <p><b>Step 4 · Glucose-6-phosphatase</b> (in the endoplasmic reticulum) takes off the phosphate. Free glucose leaves through GLUT2 and <b>raises blood glucose</b>.</p>
        </div>
        <div class="forkcard b-muscle">
          <div class="forkt">If this is a MUSCLE cell</div>
          <p>There is <b>no glucose-6-phosphatase</b>. G6P stays trapped and goes straight into <b>glycolysis → ATP</b> for contraction (and lactate when oxygen is short).</p>
        </div>
      </div>
      <div class="grid-photo">
        {photo("pdb-1gpb-phosphorylase.jpg", "Real 3D structure of glycogen phosphorylase, a pair of identical subunits (orange and green).", "RCSB PDB, entry 1GPB", "sq")}
        {box("plain", "Why a pair?", "<p>The two halves talk to each other. When one half is switched on (by a phosphate or by AMP), it pulls the other into the active shape too. This is how the enzyme flips quickly between OFF and ON.</p>")}
      </div>
    """, n(), "Glycogenolysis"))

    # 10 glycogenolysis close-ups
    P.append(page(f"""
      <div class="eyebrow k">Pathway 2 · Close-ups</div>
      <h2 class="h">Glycogenolysis close-ups</h2>
      {fig(D.debranch_fig(), "Fig. 9 · Debranching enzyme does two jobs with one protein.")}
      <div class="grid2">
        {box("plain", "Why use phosphate instead of water?", "<p>Cutting with water (hydrolysis) would give plain glucose, and the cell would then have to spend ATP to put a phosphate back on. Cutting with phosphate (<b>phosphorolysis</b>) gives glucose-1-phosphate directly. That saves ATP, and the charged sugar cannot leak out of the cell.</p>")}
        <div class="figwrap">{D.atp_bars()}<div class="figcap">Fig. 10 · Glucose from glycogen gives 1 more ATP in glycolysis.</div></div>
      </div>
      <h3 class="h3">The liver-versus-muscle fork is the key exam idea</h3>
      <table class="tbl">
        <tr><th></th><th>Liver</th><th>Muscle</th></tr>
        <tr><td>Final product</td><td>Free glucose → blood</td><td>G6P → glycolysis → ATP</td></tr>
        <tr><td>Why?</td><td>Has glucose-6-phosphatase</td><td>No glucose-6-phosphatase</td></tr>
        <tr><td>Who benefits?</td><td>Brain, red blood cells, the whole body</td><td>Only that muscle</td></tr>
        <tr><td>Main triggers</td><td>Glucagon (fasting), adrenaline (stress)</td><td>Adrenaline, Ca²⁺ and AMP from contraction</td></tr>
      </table>
      {box("warn", "Common mistake", "<p>“Glycogenolysis produces glucose-6-phosphate, which then leaves the cell.” <b>Wrong.</b> G6P can never leave a cell. Only free glucose can, and only the liver (and kidney) can make it.</p>")}
      {box("exam", "Practice exam question (4 marks)", "<p><b>Q.</b> In glycogen degradation, the last step is the change of glucose-1-phosphate to glucose-6-phosphate by phosphoglucomutase. Why is this step important?</p><p><b>Model answer.</b> Glycogen phosphorylase releases glucose-1-phosphate, but the next pathways need glucose-6-phosphate. (1) In <b>muscle</b>, G6P enters glycolysis directly to make ATP for contraction. (2) In <b>liver</b>, G6P is the substrate for glucose-6-phosphatase, which releases free glucose to keep blood glucose up during fasting. Without this step, glycogen could not be used as fuel or to supply the blood.</p>")}
    """, n(), "Glycogenolysis"))

    # 11 compare
    P.append(page(f"""
      <div class="eyebrow">Compare</div>
      <h2 class="h">Build vs break, side by side</h2>
      <p class="lead">Glycogenolysis is <b>not</b> glycogenesis run backwards. The two pathways share only phosphoglucomutase. The key steps use different enzymes, so each can be switched on or off by itself.</p>
      {fig(D.roads_fig(), "Fig. 11 · Two one-way roads. If both ran at full speed together, the cell would go round in circles and waste UTP (a “futile cycle”). Hormones make sure only one road is open.")}
      <table class="tbl cmp">
        <tr><th></th><th class="b">Glycogenesis (build)</th><th class="k">Glycogenolysis (break)</th></tr>
        <tr><td>When</td><td>Fed state, after meals</td><td>Fasting, exercise, stress</td></tr>
        <tr><td>Hormone</td><td>Insulin</td><td>Glucagon (liver), adrenaline (liver + muscle)</td></tr>
        <tr><td>Key enzyme</td><td>Glycogen synthase</td><td>Glycogen phosphorylase</td></tr>
        <tr><td>Bond handled</td><td>Makes α-1,4 (synthase) and α-1,6 (branching enzyme)</td><td>Breaks α-1,4 (phosphorylase) and α-1,6 (debranching enzyme)</td></tr>
        <tr><td>Glucose form used/made</td><td>Uses UDP-glucose</td><td>Makes glucose-1-phosphate (+ some free glucose)</td></tr>
        <tr><td>Energy</td><td>Costs ATP + UTP</td><td>Uses free Pi, costs no ATP</td></tr>
        <tr><td>Enzyme ON when</td><td>Synthase <b>dephosphorylated</b></td><td>Phosphorylase <b>phosphorylated</b></td></tr>
        <tr><td>Helper molecule</td><td>Glycogenin primer</td><td>PLP (from vitamin B6)</td></tr>
        <tr><td>Location</td><td>Cytosol</td><td>Cytosol (last step in liver: ER)</td></tr>
      </table>
    """, n(), "Compare"))

    # 12 hormones
    P.append(page(f"""
      <div class="eyebrow">Regulation 1</div>
      <h2 class="h">Who flips the switch? Hormones</h2>
      <p class="lead">Both key enzymes are controlled by <b>adding or removing a phosphate</b> (covalent modification). Hormones decide which one happens.</p>
      {fig(D.cascade_fig(), "Fig. 12 · Left: insulin removes phosphates. Right: glucagon and adrenaline add them through the cAMP → PKA cascade.")}
      <div class="rulebox"><b>The golden rule</b><span>Phosphate <b>ON</b> → breakdown <b>ON</b>, building <b>OFF</b> (glucagon, adrenaline). Phosphate <b>OFF</b> → building <b>ON</b>, breakdown <b>OFF</b> (insulin).</span></div>
      <div class="grid2">
        {box("plain", "Why a cascade?", "<p>Each enzyme in the chain switches on many copies of the next one. A handful of hormone molecules can therefore free huge amounts of glucose within seconds. That is exactly what you need when a fright hits.</p>")}
        {box("exam", "Extra detail for top marks", "<p>PKA also switches on <b>inhibitor-1</b>, which blocks PP1, so the phosphates stay on. Insulin works the other way: PKB (Akt) inactivates GSK3 and PP1 becomes active, so synthase is dephosphorylated. Insulin also moves GLUT4 to the membrane in muscle and fat.</p>")}
      </div>
    """, n(), "Hormones"))

    # 13 allosteric
    P.append(page(f"""
      <div class="eyebrow">Regulation 2</div>
      <h2 class="h">Fine control: sensors inside the cell</h2>
      <p class="lead">Besides hormones, small molecules inside the cell act as <b>allosteric</b> switches: they bind the enzyme and change its shape within milliseconds.</p>
      <table class="tbl sw">
        <tr><th>Enzyme</th><th>With phosphate</th><th>Without phosphate</th><th>Can be woken up by…</th></tr>
        <tr><td><b>Glycogen synthase</b></td><td class="off">“b” form · <b>OFF</b></td><td class="on-b">“a” form · <b>ON</b></td><td>G6P can partly switch on the b form</td></tr>
        <tr><td><b>Glycogen phosphorylase</b></td><td class="on-k">“a” form · <b>ON</b></td><td class="off">“b” form · mostly <b>OFF</b></td><td>AMP switches on the b form (muscle)</td></tr>
      </table>
      <p class="note">Tip: for both enzymes, <b>“a” = active</b>. But synthase <i>a</i> has <b>no</b> phosphate, while phosphorylase <i>a</i> <b>has</b> one.</p>
      {fig(D.allosteric_fig(), "Fig. 13 · Green (+) switches the enzyme on; red (−) switches it off.")}
      <div class="grid2">
        {box("plain", "Muscle listens to its own work", "<p>When a nerve tells a muscle to contract, <b>Ca²⁺</b> floods the cell. The same Ca²⁺ switches on phosphorylase kinase, so glycogen breakdown starts <b>at the same moment as contraction</b>, even before adrenaline arrives. Using ATP makes <b>AMP</b>, which pushes phosphorylase on even harder.</p>")}
        {box("plain", "The liver tastes the blood", "<p>After a meal, glucose flows into the liver and binds phosphorylase <i>a</i>. This helps PP1 remove its phosphate and turn it off. The freed PP1 then switches glycogen synthase on. So high blood glucose flips the liver from “release” to “store”.</p>")}
      </div>
    """, n(), "Fine control"))

    # 14 real life 1
    P.append(page(f"""
      <div class="eyebrow">Real life 1</div>
      <h2 class="h">A normal day, and a fright</h2>
      <div class="grid-photo wide">
        {photo("pasta-meal.jpg", "A plate of spaghetti has roughly 80–100 g of carbohydrate.", "Wikimedia Commons, public domain")}
        <div class="stack">
          <h3 class="h3">After lunch</h3>
          <p>The starch is digested to glucose, which enters the blood through the gut. The rise in blood glucose makes the pancreas release <b>insulin</b>. Liver and muscle take up glucose and <b>glycogen synthase</b> switches on: glycogenesis.</p>
          <h3 class="h3">Overnight</h3>
          <p>No food for 10–12 hours, but your brain still uses about <b>120 g of glucose a day</b>. <b>Glucagon</b> rises, liver glycogen phosphorylase switches on, and the liver slowly feeds glucose into the blood. By breakfast, a large part of the liver's glycogen is gone. That is one reason breakfast feels important.</p>
        </div>
      </div>
      {fig(D.day_chart(), "Fig. 14 · Liver glycogen goes up after each meal and down overnight.")}
      {box("story", "A fright: fight or flight", "<p>You step off the kerb and a car horn blasts. Within seconds your adrenal glands release <b>adrenaline</b>. In the liver it triggers the cAMP → PKA cascade and glucose pours into your blood. In your leg muscles it switches on glycogen phosphorylase so they have fuel to jump back. Your heart races, your hands shake, and your blood sugar rises, all from glycogenolysis.</p>")}
    """, n(), "Real life"))

    # 15 real life 2
    P.append(page(f"""
      <div class="eyebrow">Real life 2</div>
      <h2 class="h">Sprinting and marathons</h2>
      {photo("sprint-100m.jpg", "Usain Bolt in a 100 m heat, 2013 World Championships in Moscow. A 100 m race lasts about 10 seconds.", "Tobi 87, Wikimedia Commons, CC BY-SA 3.0", "banner")}
      <div class="grid2">
        {box("story", "The 10-second sprint", "<p>There is no time to wait for oxygen. Muscles burn stored ATP, phosphocreatine and <b>muscle glycogen</b>, turning it into lactate. The nerve signal releases <b>Ca²⁺</b> and ATP use makes <b>AMP</b>, and both switch phosphorylase on instantly. Muscle glycogen gives 3 ATP per glucose unit in glycolysis instead of 2, which is a bonus when every bit of speed counts.</p>")}
        {box("story", "The 42.2 km marathon", "<p>This race is long enough to <b>run out of glycogen</b>. When muscle glycogen is nearly gone, the runner has to rely mostly on fat, which gives energy more slowly. The pace drops and the legs feel like lead. Runners call this “<b>hitting the wall</b>”.</p>")}
      </div>
      {fig(D.marathon_chart(), "Fig. 15 · Rough numbers show why glycogen alone cannot fuel a whole marathon.")}
      <div class="grid-photo">
        {photo("marathon.jpg", "Runners at the Berlin Marathon 2015. Several are carrying drinks; sports drinks and gels supply glucose during the race.", "Denis Barthel, Wikimedia Commons, CC BY-SA 4.0", "sq")}
        {box("plain", "Carb loading, explained", "<p>For 1–2 days before a race, endurance athletes eat a lot of carbohydrate (sports guidelines suggest about 10–12 g per kg of body weight per day) and train lightly. With insulin high and the muscles resting, glycogen synthase fills the muscles well above their usual level. This is called “supercompensation”, and it can push the wall back or remove it.</p>")}
      </div>
    """, n(), "Real life"))

    # 16 real life 3
    P.append(page(f"""
      <div class="eyebrow">Real life 3</div>
      <h2 class="h">Diabetes, diets and alcohol</h2>
      <div class="grid-photo wide">
        {photo("glucagon-kit.jpg", "Glucagon emergency kits. The powder is mixed with the liquid and injected when someone with diabetes has a severe hypo.", "Mizi m, Wikimedia Commons, CC0", "sq")}
        <div class="stack">
          <h3 class="h3">The glucagon rescue injection</h3>
          <p>A person with type 1 diabetes who injects too much insulin can have a dangerous <b>hypo</b> (low blood glucose, below about 4 mmol/L) and may become confused or unconscious. A friend can inject <b>glucagon</b> (or give a nasal spray). It works by triggering <b>liver glycogenolysis</b>, so blood glucose rises within about 10–15 minutes.</p>
          {box("warn", "When it may NOT work", "<p>If the liver's glycogen is already used up, after a long fast, heavy drinking, or several hypos in a row, glucagon has nothing to release. This is a direct, real-world consequence of glycogenolysis.</p>")}
        </div>
      </div>
      <div class="grid-photo">
        {photo("glucose-meters.jpg", "Blood glucose meters. A normal reading is about 4–6 mmol/L; glycogen is a big reason it stays in that range between meals.", "Christidy, Wikimedia Commons, public domain", "sq")}
        <div class="stack">
          {box("story", "Why low-carb diets cause fast early weight loss", "<p>Each gram of glycogen is stored with roughly <b>3 g of water</b>. In the first days of a very low-carb diet, glycogen is used up and the water leaves with it, so the scale can drop 1–2 kg quickly. It is mostly water, not fat.</p>")}
          {box("story", "Alcohol and low blood sugar", "<p>While the liver is busy breaking down alcohol, it makes new glucose (gluconeogenesis) poorly. If someone drinks heavily without eating, their liver glycogen runs out and blood glucose can fall dangerously low, even in people without diabetes.</p>")}
        </div>
      </div>
    """, n(), "Real life"))

    # 17 GSD
    P.append(page(f"""
      <div class="eyebrow">Clinical link</div>
      <h2 class="h">When an enzyme is missing: glycogen storage diseases</h2>
      <p class="lead">A faulty enzyme blocks the pathway at one step. Most of these are inherited (autosomal recessive). Look at <i>where</i> the block is, and you can predict the symptoms.</p>
      {fig(D.gsd_map(), "Fig. 16 · Each red badge shows which enzyme is missing in each type.")}
      <table class="tbl gsd">
        <tr><th>Type</th><th>Name</th><th>Missing enzyme</th><th>What you see, and why</th></tr>
        <tr><td>I</td><td><b>von Gierke</b></td><td>Glucose-6-phosphatase (liver)</td><td>Severe <b>fasting hypoglycaemia</b> (the liver can't release glucose), big liver from stored glycogen, lactic acidosis. Treated with frequent feeds and uncooked cornstarch at night.</td></tr>
        <tr><td>II</td><td>Pompe</td><td>Acid α-glucosidase (lysosome)</td><td>Glycogen builds up in lysosomes of heart and muscle: floppy baby, enlarged heart. Treated with enzyme replacement.</td></tr>
        <tr><td>III</td><td>Cori</td><td>Debranching enzyme</td><td>Glycogen with short outer branches; big liver, milder hypoglycaemia.</td></tr>
        <tr><td>IV</td><td>Andersen</td><td>Branching enzyme</td><td>Long, unbranched, poorly soluble glycogen damages the liver (cirrhosis).</td></tr>
        <tr><td>V</td><td><b>McArdle</b></td><td>Glycogen phosphorylase (muscle)</td><td><b>Exercise intolerance</b>, cramps, dark urine (myoglobin) after exertion; lactate does not rise with exercise. Blood glucose is normal because the liver is fine.</td></tr>
        <tr><td>VI</td><td>Hers</td><td>Glycogen phosphorylase (liver)</td><td>Mild hypoglycaemia and a big liver.</td></tr>
      </table>
      <div class="grid3">
        {photo("cori-liver-he.jpg", "Liver biopsy (H&amp;E) in Cori disease: swollen liver cells with pale, glycogen-filled cytoplasm.", "Nephron, Wikimedia Commons, CC BY-SA 3.0")}
        {photo("pompe-muscle.jpg", "Muscle biopsy in Pompe disease: the holes (vacuoles) are lysosomes stuffed with glycogen.", "Jensflorian, Wikimedia Commons, CC BY-SA 3.0")}
        {photo("myozyme.jpg", "Myozyme (alglucosidase alfa), an enzyme replacement treatment for Pompe disease.", "Genzyme, Wikimedia Commons, public domain")}
      </div>
    """, n(), "Diseases"))

    # 18 memory
    tricks = [
        ("Synthase <b>S</b>ews, Phosphorylase <b>P</b>lucks", "Synthase stitches glucose on. Phosphorylase plucks it off, using phosphate."),
        ("<b>In</b>sulin puts glucose <b>in</b> storage", "Insulin = fed = glycogenesis."),
        ("Gluca<b>gon</b>: the glucose is <b>gone</b>", "Glucagon = fasting = liver glycogenolysis."),
        ("<b>P</b>hosphate = <b>P</b>anic mode", "Phosphate on the enzymes (glucagon, adrenaline) = breakdown on, building off."),
        ("Liver is generous, muscle is selfish", "Only the liver has glucose-6-phosphatase to release glucose."),
        ("4 = 3 + 1", "Phosphorylase stops at 4. Debranching moves 3 and frees 1."),
        ("UDP is the ticket", "Glucose must become UDP-glucose before synthase will add it."),
        ("<b>V</b>ery <b>P</b>oor <b>C</b>arbohydrate <b>M</b>etabolism", "Types I–III and V in order: von Gierke, Pompe, Cori, McArdle. Andersen (IV) sits between Cori and McArdle."),
    ]
    traps = [
        "Glycogenolysis is <b>not</b> glycogenesis in reverse: different key enzymes, and UDP-glucose appears only in synthesis.",
        "Phosphorylase uses <b>phosphate</b> (phosphorolysis). The only water-using cut is the α-1,6 step of debranching, which gives free glucose.",
        "<b>Glucagon has no effect on muscle</b> (no receptors). Adrenaline acts on both.",
        "“a” means active for both enzymes, but the phosphate is on phosphorylase <i>a</i> and <b>off</b> synthase <i>a</i>.",
        "Muscle glycogen <b>cannot</b> raise blood glucose directly.",
        "Glycogenolysis ≠ gluconeogenesis ≠ glycolysis. Say which one you mean!",
        "Glycogenin is a <b>protein</b> primer. Synthase cannot start a chain on its own.",
        "Glycogen uses α bonds; cellulose uses β-1,4 bonds, which humans cannot digest.",
    ]
    gloss = [("Non-reducing end", "the free outer end of a chain, where glucose is added or removed"),
             ("Phosphorolysis", "cutting a bond with phosphate (Pi) instead of water"),
             ("Primer", "a short starter chain that an enzyme extends"),
             ("Limit dextrin", "what is left when phosphorylase can go no further (stubs of 4 at each branch)"),
             ("Covalent modification", "switching an enzyme by adding or removing a group, here a phosphate"),
             ("Allosteric regulation", "switching an enzyme by a small molecule binding somewhere other than the active site"),
             ("PLP", "pyridoxal phosphate, the vitamin B6 helper inside glycogen phosphorylase"),
             ("Futile cycle", "two opposite pathways running at once, wasting energy")]
    P.append(page(f"""
      <div class="eyebrow">Revise</div>
      <h2 class="h">Memory tricks and exam traps</h2>
      <div class="tricks">{"".join(f'<div class="trick"><div class="tt">{a}</div><div class="td">{b}</div></div>' for a, b in tricks)}</div>
      <h3 class="h3">Exam traps</h3>
      <ol class="traps">{"".join(f"<li>{t}</li>" for t in traps)}</ol>
      <h3 class="h3">Mini glossary</h3>
      <dl class="gloss">{"".join(f"<div><dt>{a}</dt><dd>{b}</dd></div>" for a, b in gloss)}</dl>
    """, n(), "Revise"))

    # 19 animations
    stills = [("build_02.png", "1 · Build: hexokinase adds a phosphate from ATP."), ("break_02.png", "2 · Break: phosphorylase stops 4 before the branch."),
              ("switch_02.png", "3 · Fed: insulin → PP1 removes phosphates; synthase ON."), ("build_05.png", "1 · Branching enzyme makes an α-1,6 branch."),
              ("break_05.png", "2 · Liver sends glucose to blood; muscle burns G6P."), ("switch_05.png", "3 · Fasting: glucagon → cAMP → PKA; phosphorylase ON.")]
    P.append(page(f"""
      <div class="eyebrow">Watch</div>
      <h2 class="h">The animations</h2>
      <p class="lead">A PDF can't move, so the animations live next to it. Scan the code, or open <span class="mono">glycogen-animations.html</span>, <span class="mono">glycogen-animations.mp4</span> or the three GIFs in this folder. Each scene has captions and you can jump to any step.</p>
      <div class="film">{"".join(f'<figure><img src="{still(s)}" alt=""><figcaption>{c}</figcaption></figure>' for s, c in stills)}</div>
      <div class="qrbox big">{qr_svg(ANIM_URL)}<div><b>Scan to play the animations</b><br><span class="mono small">{ANIM_URL.replace("https://", "")}</span></div></div>
    """, n(), "Animations"))

    # 20 quiz
    qs = [
        ("mcq", "Which enzyme is the controlled (rate-limiting) step of glycogenesis?", ["glycogen phosphorylase", "glycogen synthase", "branching enzyme", "phosphoglucomutase"]),
        ("mcq", "Glycogen phosphorylase breaks α-1,4 bonds using:", ["water", "ATP", "inorganic phosphate (Pi)", "UTP"]),
        ("mcq", "Glucagon stimulates glycogenolysis in:", ["liver only", "muscle only", "both liver and muscle", "neither"]),
        ("mcq", "Which statement is TRUE?", ["phosphorylated glycogen synthase is active", "phosphorylated glycogen phosphorylase is active", "insulin adds phosphates to both enzymes", "PKA activates glycogen synthase"]),
        ("mcq", "Which vitamin-derived helper does glycogen phosphorylase need?", ["NAD⁺ (niacin)", "FAD (riboflavin)", "PLP (vitamin B6)", "biotin"]),
        ("short", "What is the activated glucose donor for glycogen synthase, and what happens to the PPi made alongside it?", None),
        ("short", "Why can muscle glycogen NOT be used to raise blood glucose?", None),
        ("short", "How many glucose are left on a branch when phosphorylase stops, and what does debranching enzyme do with them?", None),
        ("short", "Why does glycogen have so many branches? Give two reasons.", None),
        ("case", "A 20-year-old gets painful cramps and dark urine after sprinting. Blood glucose is normal, and blood lactate does not rise during an exercise test. Which enzyme is missing, and why doesn't lactate rise?", None),
        ("case", "A baby has a very large liver, low blood glucose after a few hours without feeding, and lactic acidosis. Name the disease and the missing enzyme.", None),
        ("long", "Compare the hormonal control of liver and muscle glycogen. (6 marks)", None),
    ]
    qhtml = ""
    for i, (t, q, opts) in enumerate(qs, 1):
        o = "".join(f"<li>{chr(97 + k)}) {x}</li>" for k, x in enumerate(opts)) if opts else ""
        lines = {"short": 1, "case": 2, "long": 4}.get(t, 0)
        qhtml += f'<div class="q"><span class="qn">{i}</span><div><p>{q}</p>{f"<ol class=opts>{o}</ol>" if o else ""}{"<div class=ans-line></div>" * lines}</div></div>'
    P.append(page(f"""
      <div class="eyebrow">Practice</div>
      <h2 class="h">Test yourself</h2>
      <div class="quiz">{qhtml}</div>
    """, n(), "Quiz"))

    # 21 answers
    ans = [
        "<b>b)</b> Glycogen synthase.",
        "<b>c)</b> Inorganic phosphate. This is phosphorolysis, and it gives glucose-1-phosphate.",
        "<b>a)</b> Liver only. Muscle has no glucagon receptors; adrenaline acts on both.",
        "<b>b)</b> Phosphorylated phosphorylase (the “a” form) is active. Phosphorylated synthase is inactive.",
        "<b>c)</b> Pyridoxal phosphate (PLP), made from vitamin B6.",
        "UDP-glucose (from glucose-1-P + UTP, by UDP-glucose pyrophosphorylase). PPi is split into 2 Pi by pyrophosphatase, which makes the reaction effectively irreversible.",
        "Muscle lacks glucose-6-phosphatase, so it cannot turn G6P into free glucose, and G6P cannot cross the cell membrane. Muscle uses its glycogen for its own glycolysis.",
        "4 glucose. The transferase activity moves 3 to the end of another chain; the α-1,6-glucosidase activity releases the last one as free glucose.",
        "(1) Many non-reducing ends, so many enzymes can add or remove glucose at once: faster storage and release. (2) Higher solubility. (Also: packs lots of glucose into few particles, so little osmotic effect.)",
        "Muscle glycogen phosphorylase: McArdle disease (GSD V). Muscle can't break down its glycogen, so there is no glucose-6-P to feed anaerobic glycolysis and no lactate is made. Liver phosphorylase is normal, so blood glucose is fine.",
        "Von Gierke disease (GSD type I): glucose-6-phosphatase deficiency. The liver can make G6P but can't release glucose, so fasting hypoglycaemia occurs; the extra G6P is pushed into glycolysis → lactate.",
        "Both: insulin (fed) activates PP1 and inactivates GSK3 via PKB, dephosphorylating synthase (ON) and phosphorylase (OFF). <b>Liver:</b> glucagon (fasting) and adrenaline (stress) act via GPCR → cAMP → PKA → phosphorylase kinase → phosphorylase a; glucose itself inhibits liver phosphorylase a (glucose sensor); the liver releases free glucose into blood. <b>Muscle:</b> no glucagon receptors, so it responds to adrenaline (same cAMP cascade) plus Ca²⁺ (contraction) and AMP (low energy); it keeps the glucose for its own glycolysis.",
    ]
    P.append(page(f"""
      <div class="eyebrow">Practice</div>
      <h2 class="h">Answers</h2>
      <ol class="answers">{"".join(f"<li>{a}</li>" for a in ans)}</ol>
      {box("plain", "How did you go?", "<p>Mark any you got wrong, then re-read that page and watch the matching animation. The Study Hub flashcards and practice quiz for BIOL214 cover the same topic (“Gluconeogenesis and glycogen metabolism”).</p>")}
    """, n(), "Answers"))

    # 22 summary
    P.append(page(f"""
      <div class="eyebrow">Summary</div>
      <h2 class="h">One-page summary</h2>
      {fig(D.master_map(), "Fig. 17 · The whole topic in one picture: build on the left, break on the right.")}
      <div class="grid3 small">
        {box("plain", "Structure", "<p>Branched glucose polymer: α-1,4 chains, α-1,6 branches every 8–12. Built on glycogenin. Liver ≈ 100 g, muscle ≈ 400 g.</p>")}
        {box("plain", "Control", "<p>Insulin → phosphate OFF → synthase ON. Glucagon/adrenaline → cAMP → PKA → phosphate ON → phosphorylase ON. Muscle: + Ca²⁺, + AMP. Liver: glucose inhibits phosphorylase.</p>")}
        {box("plain", "Clinical", "<p>von Gierke (G6Pase): fasting hypoglycaemia, big liver. McArdle (muscle phosphorylase): exercise cramps, no lactate rise. Pompe (lysosomal): heart and muscle.</p>")}
      </div>
    """, n(), "Summary"))

    # 23 credits
    credits = [
        ("Liver biopsy, PAS stain; PAS after diastase", "Department of Pathology, Calicut Medical College", "CC BY-SA 4.0", "commons.wikimedia.org/wiki/File:Glycogen_storage_disorder_(PAS_stain).jpg and …_(PAS_with_diastase).jpg"),
        ("Glycogen space-filling model", "CeresVesta (English Wikipedia)", "Public domain", "commons.wikimedia.org/wiki/File:Glycogen_spacefilling_model.jpg"),
        ("Glycogenin structure (PDB 1LL2)", "RCSB Protein Data Bank; Gibbons, Roach & Hurley (2002) J Mol Biol", "CC0 (RCSB PDB images)", "rcsb.org/structure/1LL2"),
        ("Glycogen phosphorylase b structure (PDB 1GPB)", "RCSB Protein Data Bank; Acharya et al. (1991)", "CC0 (RCSB PDB images)", "rcsb.org/structure/1GPB"),
        ("Spaghetti Bolognese", "Wikimedia Commons user Chingon", "Public domain", "commons.wikimedia.org/wiki/File:Spaghetti_Bolognese.jpg"),
        ("100 m heat, Moscow 2013", "Tobi 87", "CC BY-SA 3.0", "commons.wikimedia.org/wiki/File:Leichtathletik_WM_2013_Moskau_100_m_Vorlauf.jpg"),
        ("Berlin Marathon 2015 runners", "Denis Barthel", "CC BY-SA 4.0", "commons.wikimedia.org/wiki/File:Berlin-Marathon_2015_Runners_14.jpg"),
        ("Glucagon emergency rescue kits", "Mizi m", "CC0", "commons.wikimedia.org/wiki/File:Glucagon_emergency_rescue_kits_image.jpg"),
        ("Blood glucose meters", "Christidy (English Wikipedia)", "Public domain", "commons.wikimedia.org/wiki/File:Glucose_meters.jpg"),
        ("Cori disease liver, H&amp;E", "Nephron", "CC BY-SA 3.0", "commons.wikimedia.org/wiki/File:Glycogen_storage_disease_in_liver_-_high_mag.jpg"),
        ("Pompe disease muscle biopsy", "Jensflorian", "CC BY-SA 3.0", "commons.wikimedia.org/wiki/File:Pompe_vacuoles.jpg"),
        ("Myozyme", "Genzyme", "Public domain", "commons.wikimedia.org/wiki/File:Myozyme.jpg"),
    ]
    rows = "".join(f"<tr><td>{a}</td><td>{b}</td><td>{c}</td><td class='mono small url'>{d.replace('commons.wikimedia.org/wiki/', 'Wikimedia Commons: ')}</td></tr>" for a, b, c, d in credits)
    P.append(page(f"""
      <div class="eyebrow">Credits</div>
      <h2 class="h">Photo credits and sources</h2>
      <p>Photos are used under the licences shown. Photos were resized; nothing else was changed. All diagrams and animations were drawn for this pack.</p>
      <table class="tbl credits"><colgroup><col class="a"><col class="b"><col class="c"><col></colgroup><tr><th>Image</th><th>Author / source</th><th>Licence</th><th>Where to find it</th></tr>{rows}</table>
      <h3 class="h3">Where the facts come from</h3>
      <ul class="facts">
        <li>BIOL214 subject outline and lecture topics, Spring 2026 (Week 4: gluconeogenesis and glycogen metabolism).</li>
        <li>Nelson &amp; Cox, <i>Lehninger Principles of Biochemistry</i>, chapters on carbohydrate metabolism and its regulation.</li>
        <li>Berg, Tymoczko, Gatto &amp; Stryer, <i>Biochemistry</i>, chapter on glycogen metabolism.</li>
        <li>Sports-nutrition numbers (carb loading, running energy cost) are typical textbook values and are rounded.</li>
      </ul>
      {box("plain", "Made for Jana", "<p>Part of the Jana Study Hub. If something here doesn't match your lecture slides, <b>trust the slides</b> for the exam, and flag it so this pack can be fixed.</p>")}
    """, n(), "Credits"))
    return P


CSS = """
@font-face{font-family:'Atkinson Hyperlegible';src:url(fonts/f2.ttf);font-weight:400}
@font-face{font-family:'Atkinson Hyperlegible';src:url(fonts/f3.ttf);font-weight:700}
@font-face{font-family:'Atkinson Hyperlegible';src:url(fonts/f1.ttf);font-style:italic}
@font-face{font-family:'Bricolage Grotesque';src:url(fonts/f4.ttf);font-weight:600}
@font-face{font-family:'Bricolage Grotesque';src:url(fonts/f5.ttf);font-weight:700}
@font-face{font-family:'Bricolage Grotesque';src:url(fonts/f6.ttf);font-weight:800}
@font-face{font-family:'IBM Plex Mono';src:url(fonts/f7.ttf);font-weight:400 500}
@font-face{font-family:'IBM Plex Mono';src:url(fonts/f8.ttf);font-weight:600 700}
/* Layout: fixed A4 pages; a running head, a content column, a folio. Colours match the animation page. */
:root{--bg:#ffffff;--bg-2:#f1f2f6;--panel:#ffffff;--ink:#1c2230;--muted:#596175;--line:#d7dbe4;
 --glc:#b8316e;--glc-t:#f7dce8;--build:#0c7a78;--build-t:#d6efed;--break:#b8620c;--break-t:#fbe8d3;
 --phos:#6448b8;--phos-t:#e6e0f6;--udp:#2d68ad;--udp-t:#dbe7f5;--blood:#c03a3a;--blood-t:#f8e0e0;
 --display:"Bricolage Grotesque",sans-serif;--body:"Atkinson Hyperlegible",sans-serif;--mono:"IBM Plex Mono",monospace}
@page{size:A4;margin:0}
*{box-sizing:border-box}
html,body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--body);font-size:10.4pt;line-height:1.45;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{width:210mm;height:297mm;padding:13mm 15mm 12mm;position:relative;overflow:hidden;page-break-after:always;display:flex;flex-direction:column}
.content{flex:1;display:flex;flex-direction:column;gap:3.4mm;min-height:0}
.runhead{display:flex;justify-content:space-between;font:500 7.5pt var(--mono);color:var(--muted);letter-spacing:.06em;text-transform:uppercase;border-bottom:1px solid var(--line);padding-bottom:2mm;margin-bottom:4mm}
.folio{font:500 7.5pt var(--mono);color:var(--muted);text-align:right;padding-top:2mm;letter-spacing:.04em}
p{margin:0}
.eyebrow{font:600 8pt var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--glc)}
.eyebrow.b{color:var(--build)} .eyebrow.k{color:var(--break)}
.h{font:800 22pt/1.05 var(--display);margin:-1mm 0 0;letter-spacing:-.01em;text-wrap:balance}
.h3{font:700 12.5pt/1.2 var(--display);margin:1mm 0 0}
.lead{font-size:11.2pt;max-width:170mm}
.mono{font-family:var(--mono);font-size:.88em} .small{font-size:7.6pt}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:4mm;align-items:start}
.grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:3.5mm;align-items:start}
.grid-body{display:grid;grid-template-columns:58mm 1fr;gap:5mm;align-items:center}
.grid-photo{display:grid;grid-template-columns:62mm 1fr;gap:5mm;align-items:start}
.grid-photo.wide{grid-template-columns:82mm 1fr}
.stack{display:flex;flex-direction:column;gap:2.6mm}
.gap{margin:2mm 0}
svg.dg{width:100%;height:auto;display:block;font-family:var(--body)}
.glyph{font-family:var(--mono);font-weight:700;text-anchor:middle;dominant-baseline:central}
.hex{fill:var(--glc-t);stroke:var(--glc);stroke-width:2}
.hex.hl{stroke:var(--build);stroke-width:3}
.hex.free{fill:#fff;stroke-width:2.4}
.fig{margin:0;display:flex;flex-direction:column;gap:1.2mm}
.fig figcaption,.figcap{font-size:8.4pt;color:var(--muted)}
.fig.tight svg{max-height:100mm}
.photo{margin:0;display:flex;flex-direction:column;gap:1.2mm}
.photo img{width:100%;height:46mm;object-fit:cover;border-radius:3mm;display:block}
.photo.sq img{height:52mm;object-fit:contain;background:#fff;border:1px solid var(--line)}
.photo.banner img{height:44mm}
.grid3 .photo img{height:33mm}
.photo figcaption{font-size:8.3pt;color:var(--ink);display:flex;flex-direction:column;gap:.6mm}
.photo .credit{font:500 6.6pt var(--mono);color:var(--muted)}
.box{border-radius:3mm;padding:3mm 3.6mm;display:flex;flex-direction:column;gap:1.4mm;font-size:9.8pt}
.boxt{font:700 10.4pt var(--display)}
.box.plain{background:var(--bg-2)}
.box.exam{background:var(--udp-t)} .box.exam .boxt{color:var(--udp)}
.box.warn{background:var(--blood-t)} .box.warn .boxt{color:var(--blood)}
.box.story{background:var(--break-t)} .box.story .boxt{color:var(--break)}
.rulebox{display:flex;gap:4mm;align-items:center;border:2px solid var(--ink);border-radius:3mm;padding:3mm 4mm;font-size:10.6pt}
.rulebox b:first-child{font:800 12pt var(--display);white-space:nowrap}
.note{font-size:9.4pt;color:var(--muted)}
.tbl{width:100%;border-collapse:collapse;font-size:9pt}
.tbl th{font:700 9pt var(--display);text-align:left;border-bottom:2px solid var(--ink);padding:1.4mm 2mm}
.tbl td{border-bottom:1px solid var(--line);padding:1.3mm 2mm;vertical-align:top}
.tbl td:first-child{color:var(--muted);font-weight:700}
.tbl.cmp th.b{color:var(--build)} .tbl.cmp th.k{color:var(--break)}
.tbl.sw td.on-b{background:var(--build-t);color:var(--build)} .tbl.sw td.on-k{background:var(--break-t);color:var(--break)} .tbl.sw td.off{color:var(--muted)}
.tbl.gsd{font-size:8.3pt} .tbl.gsd td{padding:1mm 1.6mm} .tbl.gsd td:first-child{font-family:var(--mono);color:var(--blood)}
.tbl.credits{font-size:8pt;table-layout:fixed} .tbl.credits td:first-child{color:var(--ink)} .tbl.credits col.a{width:40mm} .tbl.credits col.b{width:46mm} .tbl.credits col.c{width:24mm} .tbl.credits td.url{word-break:break-all}
.facts{margin:0;padding-left:4.5mm;display:flex;flex-direction:column;gap:1.3mm;font-size:9.6pt}
.words{display:grid;grid-template-columns:1fr 1fr;gap:4mm}
.word{display:flex;flex-direction:column;gap:1mm}
.word .parts{display:flex;gap:1mm}
.word .parts span{display:flex;flex-direction:column;align-items:center;gap:.4mm}
.word .parts b{font:800 17pt var(--display);padding:0 1.4mm;border-radius:1.5mm;background:var(--bg-2)}
.word .parts i{font:500 7.4pt var(--mono);font-style:normal;color:var(--muted)}
.word.b .parts span:last-child b{background:var(--build-t);color:var(--build)}
.word.k .parts span:last-child b{background:var(--break-t);color:var(--break)}
/* ladders */
.ladder{display:flex;flex-direction:column}
.rung{display:grid;grid-template-columns:30mm 1fr;align-items:center;gap:3mm}
.molbox svg{width:30mm;height:13mm;display:block}
.mname{font:700 10.6pt var(--display)} .mnote{font-size:8.6pt;color:var(--muted)}
.stp{display:grid;grid-template-columns:30mm 1fr;gap:3mm;margin:0}
.rail{position:relative;display:flex;justify-content:center;align-items:center}
.rail:before{content:"";position:absolute;top:0;bottom:0;left:50%;width:2.4px;margin-left:-1.2px;background:var(--c)}
.rail:after{content:"";position:absolute;bottom:-1mm;left:50%;margin-left:-1.6mm;border:1.6mm solid transparent;border-top:2.2mm solid var(--c)}
.stp.b{--c:var(--build);--ct:var(--build-t)} .stp.k{--c:var(--break);--ct:var(--break-t)}
.rail .num{position:relative;z-index:1;width:6.6mm;height:6.6mm;border-radius:50%;background:var(--c);color:#fff;font:700 9pt var(--mono);display:grid;place-items:center}
.stxt{border-left:3px solid var(--c);background:var(--ct);border-radius:0 2.5mm 2.5mm 0;padding:2mm 3mm;margin:1.2mm 0;display:flex;flex-direction:column;gap:.8mm;font-size:9.4pt}
.enz{font:700 10.6pt var(--display);color:var(--c);display:flex;flex-wrap:wrap;gap:1.6mm;align-items:center}
.enz .sm{font:400 9pt var(--body);color:var(--muted)}
.chip{font:600 7.4pt var(--mono);padding:.4mm 1.6mm;border-radius:10mm;background:#fff;color:var(--muted);border:1px solid var(--line)}
.chip.phos{color:var(--phos);border-color:var(--phos)} .chip.udp{color:var(--udp);border-color:var(--udp)}
.exam{font-size:8.6pt;color:var(--udp)}
.fork{display:grid;grid-template-columns:1fr 1fr;gap:4mm}
.forkcard{border:2px solid var(--break);border-radius:3mm;padding:2.6mm 3.4mm;font-size:9.4pt;display:flex;flex-direction:column;gap:1mm}
.forkcard.b-muscle{border-style:dashed}
.forkt{font:800 10.4pt var(--display);color:var(--break)}
.figwrap{display:flex;flex-direction:column;gap:1.2mm}
/* cover */
.cover-page{padding:14mm 16mm}
.cover{display:flex;flex-direction:column;height:100%;gap:5mm}
.cover-top{display:flex;justify-content:space-between;font:600 8pt var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.cover-art-wrap{flex:1;display:flex;justify-content:center;align-items:center;min-height:0}
.cover-art-wrap svg{height:128mm;width:auto}
.title{font:800 38pt/1 var(--display);margin:0;letter-spacing:-.02em}
.title .b{color:var(--build)} .title .k{color:var(--break)}
.subtitle{font-size:13pt;max-width:160mm;color:var(--ink)}
.cover-keys{display:flex;flex-wrap:wrap;gap:2mm 6mm;font-size:9.4pt;color:var(--muted)}
.cover-keys div{display:flex;align-items:center;gap:1.6mm}
.k-sw{width:3.4mm;height:3.4mm;border-radius:1mm;background:var(--c);display:inline-block}
.cover-foot{border-top:1px solid var(--line);padding-top:3mm;font:500 8pt var(--mono);color:var(--muted)}
/* toc */
.toc{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1.3mm;font-size:10.6pt;columns:1}
.toc li{display:flex;gap:2mm;align-items:baseline}
.toc .dots{flex:1;border-bottom:1.5px dotted var(--line)}
.toc .pn{font:600 9pt var(--mono);color:var(--muted)}
.qrbox{display:flex;gap:4mm;align-items:center;font-size:9.4pt;border:1px solid var(--line);border-radius:3mm;padding:3mm}
.qrbox .qr{width:28mm;height:28mm;flex:none}
.qrbox.big .qr{width:38mm;height:38mm}
/* tricks */
.tricks{display:grid;grid-template-columns:1fr 1fr;gap:3mm}
.trick{border:1.5px solid var(--line);border-radius:3mm;padding:2.6mm 3.4mm}
.tt{font:700 11.4pt var(--display);color:var(--glc)} .td{font-size:9.2pt;color:var(--ink)}
.gloss{margin:0;display:grid;grid-template-columns:1fr 1fr;gap:1.6mm 5mm;font-size:9.2pt} .gloss dt{font-weight:700} .gloss dd{margin:0;color:var(--muted)}
.traps{margin:0;padding-left:5mm;display:flex;flex-direction:column;gap:1.6mm;font-size:9.8pt}
/* film */
.film{display:grid;grid-template-columns:1fr 1fr 1fr;gap:3mm}
.film figure{margin:0;display:flex;flex-direction:column;gap:1mm}
.film img{width:100%;border:1px solid var(--line);border-radius:2mm;display:block}
.film figcaption{font-size:8.4pt;color:var(--muted)}
/* quiz */
.quiz{display:flex;flex-direction:column;gap:2.4mm;font-size:9.8pt}
.q{display:grid;grid-template-columns:7mm 1fr;gap:2mm}
.qn{width:6mm;height:6mm;border-radius:50%;background:var(--ink);color:#fff;font:700 8.4pt var(--mono);display:grid;place-items:center}
.opts{list-style:none;margin:.8mm 0 0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:.4mm 4mm;color:var(--ink)}
.ans-line{border-bottom:1px solid var(--line);height:5.6mm}
.answers{margin:0;padding-left:5mm;display:flex;flex-direction:column;gap:2mm;font-size:9.8pt}
"""


def render_html():
    body = "".join(build_pages())
    return f'<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Glycogenesis and Glycogenolysis</title><style>{CSS}</style></head><body>{body}</body></html>'


async def to_pdf(html_path, pdf_path, shots=None):
    from playwright.async_api import async_playwright
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path=CHROME)
        pg = await b.new_page(viewport={"width": 794, "height": 1123})
        await pg.goto(html_path.as_uri())
        await pg.evaluate("document.fonts.ready")
        await pg.wait_for_load_state("networkidle")
        over = await pg.evaluate("""[...document.querySelectorAll('.content')].map((c,i)=>[i+1,c.scrollHeight-c.clientHeight]).filter(x=>x[1]>1)""")
        if over:
            print("OVERFLOW (page, px):", over)
        await pg.pdf(path=str(pdf_path), format="A4", print_background=True, prefer_css_page_size=True)
        if shots:
            await pg.emulate_media(media="print")
            n = await pg.evaluate("document.querySelectorAll('.page').length")
            for i in range(n):
                await pg.locator(".page").nth(i).screenshot(path=f"{shots}/p{i + 1:02d}.png")
        await b.close()


if __name__ == "__main__":
    import sys
    html = HERE / "glycogen-pack.html"
    html.write_text(render_html(), encoding="utf-8")
    asyncio.run(to_pdf(html, OUT, sys.argv[1] if len(sys.argv) > 1 else None))
    print("wrote", OUT)
