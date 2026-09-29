"""SVG diagrams for the glycogen study pack.

Every colour comes from the CSS tokens in the pack's stylesheet, so the
diagrams, the animation page and the PDF share one visual language:
magenta = glucose/glycogen (the PAS-stain colour), teal = build (fed, insulin),
amber = break (fasting, glucagon/adrenaline), violet = phosphate, blue = UDP/UTP.
"""
import math

GLC, BUILD, BREAK, PHOS, UDP, BLOOD = "var(--glc)", "var(--build)", "var(--break)", "var(--phos)", "var(--udp)", "var(--blood)"
INK, MUTED, LINE, PANEL = "var(--ink)", "var(--muted)", "var(--line)", "var(--panel)"


def f(n):
    return f"{n:.1f}"


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def svg(w, h, body, label, cls=""):
    return f'<svg viewBox="0 0 {w} {h}" class="dg {cls}" role="img" aria-label="{esc(label)}">{body}</svg>'


def hexagon(x, y, r=11, cls="hex", style=""):
    pts = " ".join(f"{f(x + r * math.cos(math.radians(60 * i - 30)))},{f(y + r * math.sin(math.radians(60 * i - 30)))}" for i in range(6))
    return f'<polygon points="{pts}" class="{cls}" style="{style}"/>'


def phos(x, y, r=7):
    return (f'<circle cx="{f(x)}" cy="{f(y)}" r="{f(r)}" style="fill:{PHOS}"/>'
            f'<text x="{f(x)}" y="{f(y)}" class="glyph" style="font-size:{f(r * 1.3)}px;fill:#fff">P</text>')


def udp_tag(x, y, k=1, label="UDP"):
    return (f'<rect x="{f(x)}" y="{f(y - 7 * k)}" width="{f(30 * k)}" height="{f(14 * k)}" rx="{f(7 * k)}" style="fill:var(--udp-t);stroke:{UDP};stroke-width:1.4"/>'
            f'<text x="{f(x + 15 * k)}" y="{f(y)}" class="glyph" style="font-size:{f(9 * k)}px;fill:{UDP}">{label}</text>')


def glc(x, y, r=11, p=None, udp=False, cls="hex"):
    k = r / 11
    s = hexagon(x, y, r, cls)
    if p == 6:
        s += phos(x - 10 * k, y - 15 * k, 7 * k)
    if p == 1:
        s += phos(x + 15 * k, y + 3 * k, 7 * k)
    if udp:
        s += udp_tag(x + 11 * k, y + 3 * k, k)
    return s


def T(x, y, s, size=12, w=400, fill=MUTED, anchor="start", fam="var(--body)", extra=""):
    return f'<text x="{f(x)}" y="{f(y)}" text-anchor="{anchor}" style="font:{w} {size}px {fam};fill:{fill}" {extra}>{esc(s)}</text>'


def TL(x, y, lines, size=12, w=400, fill=MUTED, anchor="start", lh=None, fam="var(--body)"):
    lh = lh or size * 1.3
    return "".join(T(x, y + i * lh, l, size, w, fill, anchor, fam) for i, l in enumerate(lines))


def line(x1, y1, x2, y2, col=GLC, w=2.2, dash=None, cap="round"):
    d = f"stroke-dasharray:{dash};" if dash else ""
    return f'<line x1="{f(x1)}" y1="{f(y1)}" x2="{f(x2)}" y2="{f(y2)}" style="stroke:{col};stroke-width:{w};stroke-linecap:{cap};{d}"/>'


def arrow(x1, y1, x2, y2, col=MUTED, w=2, dash=None, head=8):
    a = math.atan2(y2 - y1, x2 - x1)
    hx, hy = x2 - head * math.cos(a), y2 - head * math.sin(a)
    s = line(x1, y1, hx, hy, col, w, dash, "butt")
    s += (f'<polygon points="{f(x2)},{f(y2)} {f(hx - head * .55 * math.sin(a))},{f(hy + head * .55 * math.cos(a))} '
          f'{f(hx + head * .55 * math.sin(a))},{f(hy - head * .55 * math.cos(a))}" style="fill:{col}"/>')
    return s


def curve(x1, y1, cx, cy, x2, y2, col=MUTED, w=2, head=8, dash=None):
    a = math.atan2(y2 - cy, x2 - cx)
    hx, hy = x2 - head * math.cos(a), y2 - head * math.sin(a)
    d = f"stroke-dasharray:{dash};" if dash else ""
    return (f'<path d="M{f(x1)} {f(y1)} Q{f(cx)} {f(cy)} {f(hx)} {f(hy)}" style="fill:none;stroke:{col};stroke-width:{w};{d}"/>'
            f'<polygon points="{f(x2)},{f(y2)} {f(hx - head * .55 * math.sin(a))},{f(hy + head * .55 * math.cos(a))} '
            f'{f(hx + head * .55 * math.sin(a))},{f(hy - head * .55 * math.cos(a))}" style="fill:{col}"/>')


def pill(x, y, text, col, on=True, fs=12, badge=None, w=None):
    lines = text.split("\n")
    w = w or max(len(l) for l in lines) * fs * .56 + 20
    h = len(lines) * fs * 1.3 + 10
    tint = col.replace(")", "-t)")
    s = (f'<rect x="{f(x - w / 2)}" y="{f(y - h / 2)}" width="{f(w)}" height="{f(h)}" rx="{f(min(10, h / 2))}" '
         f'style="fill:{tint if on else PANEL};stroke:{col if on else LINE};stroke-width:1.5"/>')
    for i, l in enumerate(lines):
        s += T(x, y - (len(lines) - 1) * fs * .65 + i * fs * 1.3 + fs * .36, l, fs, 700, col if on else MUTED, "middle")
    if badge:
        s += f'<circle cx="{f(x - w / 2)}" cy="{f(y - h / 2)}" r="9" style="fill:{col}"/>' + T(x - w / 2, y - h / 2 + 3.8, badge, 10.5, 700, PANEL, "middle", "var(--mono)")
    return s


def core(x, y, s=16):
    return f'<rect x="{f(x - s / 2)}" y="{f(y - s / 2)}" width="{s}" height="{s}" rx="3.5" style="fill:var(--udp-t);stroke:{UDP};stroke-width:1.5"/>'


def chain(x0, y, n, dx=26, r=11, cls="hex", first_bond=True):
    s = ""
    for i in range(n - 1):
        s += line(x0 + i * dx, y, x0 + (i + 1) * dx, y)
    for i in range(n):
        s += hexagon(x0 + i * dx, y, r, cls)
    return s


def pacman(x, y, r=13, col=BREAK):
    a = math.radians(32)
    return (f'<path d="M{f(x)} {f(y)} L{f(x - r * math.cos(a))} {f(y - r * math.sin(a))} A{r} {r} 0 1 1 {f(x - r * math.cos(a))} {f(y + r * math.sin(a))} Z" style="fill:{col}"/>'
            f'<circle cx="{f(x + 2)}" cy="{f(y - r * .5)}" r="1.8" style="fill:{PANEL}"/>')


# ---------------------------------------------------------------- particle
def particle_units(tiers=4, first=3, per=4, R=52):
    """Radial glycogen particle: each chain splits in two at its end."""
    leaves = first * 2 ** (tiers - 1)
    chains = []  # (tier, angle, parent_end_xy)

    def build(tier, lo, hi, start):
        ang = (lo + hi) / 2
        end = (R * tier * math.cos(ang), R * tier * math.sin(ang))
        pts = []
        for i in range(1, per + 1):
            u = i / per
            pts.append((start[0] + (end[0] - start[0]) * u, start[1] + (end[1] - start[1]) * u))
        chains.append((tier, start, pts))
        if tier < tiers:
            mid = (lo + hi) / 2
            build(tier + 1, lo, mid, end)
            build(tier + 1, mid, hi, end)

    span = 2 * math.pi / first
    for k in range(first):
        build(1, k * span - math.pi / 2, (k + 1) * span - math.pi / 2, (0, 0))
    return chains


def particle(cx, cy, scale=1.0, r=5.2, tiers=4, R=52, ends=False):
    s = ""
    ch = particle_units(tiers=tiers, R=R)
    for tier, start, pts in ch:
        prev = start
        for p in pts:
            s += line(cx + prev[0] * scale, cy + prev[1] * scale, cx + p[0] * scale, cy + p[1] * scale, GLC, 1.6)
            prev = p
    for tier, start, pts in ch:
        for i, p in enumerate(pts):
            cls = "hex hl" if ends and tier == tiers and i == len(pts) - 1 else "hex"
            s += hexagon(cx + p[0] * scale, cy + p[1] * scale, r, cls)
    s += core(cx, cy, 12 * max(scale, .8))
    return s


# ---------------------------------------------------------------- figures
def cover_art():
    b = particle(300, 300, 1.0, 6.2, 4, 62)
    return svg(600, 600, b, "A glycogen particle: branched chains of glucose around a glycogenin core", "cover-art")


def big_picture():
    b = ""
    b += f'<rect x="150" y="18" width="380" height="64" rx="32" style="fill:var(--blood-t);stroke:{BLOOD};stroke-width:1.5"/>'
    b += T(340, 46, "BLOOD GLUCOSE", 14, 700, BLOOD, "middle", "var(--mono)")
    b += T(340, 66, "kept around 4–6 mmol/L", 12.5, 400, INK, "middle")
    b += particle(340, 236, .3, 3.4, 4, 62)
    b += T(340, 334, "GLYCOGEN STORES  ·  liver + muscle", 12, 700, GLC, "middle", "var(--mono)")
    b += curve(210, 84, 150, 200, 258, 236, BUILD, 3.2, 12)
    b += curve(422, 236, 530, 200, 470, 84, BREAK, 3.2, 12)
    b += TL(20, 150, ["GLYCOGENESIS", "store glucose"], 14, 800, BUILD, "start", 18, "var(--display)")
    b += TL(20, 190, ["after a meal", "hormone: insulin", "like a deposit"], 12, 400, INK, "start", 16)
    b += TL(660, 150, ["GLYCOGENOLYSIS", "release glucose"], 14, 800, BREAK, "end", 18, "var(--display)")
    b += TL(660, 190, ["fasting, exercise, stress", "hormones: glucagon, adrenaline", "like a withdrawal"], 12, 400, INK, "end", 16)
    return svg(680, 345, b, "Blood glucose is stored as glycogen after meals and released during fasting")


def body_map():
    b = ""
    sk = f"fill:var(--bg-2);stroke:{LINE};stroke-width:1.5"
    b += f'<circle cx="120" cy="44" r="26" style="{sk}"/>'
    b += f'<rect x="78" y="78" width="84" height="150" rx="30" style="{sk}"/>'
    for x, a in [(62, 8), (178, -8)]:
        b += f'<rect x="{x - 12}" y="86" width="24" height="130" rx="12" transform="rotate({a} {x} 86)" style="{sk}"/>'
    for x in (100, 140):
        b += f'<rect x="{x - 16}" y="212" width="32" height="170" rx="15" style="{sk}"/>'
    musc = f"fill:var(--glc-t);stroke:{GLC};stroke-width:1.4"
    for x in (100, 140):
        b += f'<rect x="{x - 12}" y="226" width="24" height="80" rx="11" style="{musc}"/>'
        b += f'<rect x="{x - 10}" y="318" width="20" height="46" rx="9" style="{musc}"/>'
    for x, a in [(62, 8), (178, -8)]:
        b += f'<rect x="{x - 9}" y="96" width="18" height="60" rx="9" transform="rotate({a} {x} 86)" style="{musc}"/>'
    b += f'<path d="M84 120 C 96 104, 150 106, 156 116 C 158 128, 132 146, 106 148 C 90 148, 82 136, 84 120 Z" style="fill:{GLC};opacity:.85"/>'
    b += line(150, 124, 214, 110, INK, 1)
    b += T(220, 108, "LIVER", 17, 700, INK) + T(220, 128, "≈ 100 g", 17, 400, GLC)
    b += line(152, 262, 214, 262, INK, 1)
    b += T(220, 258, "MUSCLE", 17, 700, INK) + T(220, 278, "≈ 400 g", 17, 400, GLC)
    return svg(320, 390, b, "Body map: liver and skeletal muscle store glycogen")


def scale_squares():
    b = ""
    base = 232
    items = [("All the glucose in your blood", "≈ 4–5 g (a teaspoon)", 4.5, BLOOD, "var(--blood-t)", 30),
             ("Liver glycogen", "≈ 100 g", 100, GLC, "var(--glc-t)", 290),
             ("Muscle glycogen", "≈ 400 g", 400, GLC, "var(--glc-t)", 460)]
    for name, val, g, col, tint, x in items:
        side = math.sqrt(g) * 8.6
        b += f'<rect x="{f(x)}" y="{f(base - side)}" width="{f(side)}" height="{f(side)}" rx="3" style="fill:{tint};stroke:{col};stroke-width:1.6"/>'
        ty = base - max(side, 30) - 26
        b += T(x, ty, name, 12.5, 700, INK) + T(x, ty + 15, val, 12.5, 400, MUTED)
    b += line(20, base, 660, base, LINE, 1.2)
    b += T(20, 254, "Drawn to scale: the area of each square is the grams of glucose it holds.", 11.5, 400, MUTED)
    return svg(680, 262, b, "To-scale squares comparing glucose in blood with liver and muscle glycogen")


def glucose_ring():
    b = ""
    cx, cy, r = 100, 118, 48
    pts = [(cx + r * math.cos(math.radians(60 * i - 30)), cy + r * math.sin(math.radians(60 * i - 30))) for i in range(6)]
    b += hexagon(cx, cy, r, "hex")
    names = ["O", "C1", "C2", "C3", "C4", "C5"]
    order = [0, 1, 2, 3, 4, 5]
    offs = [(12, -6), (12, 12), (0, 22), (-14, 12), (-16, -4), (0, -12)]
    for (px, py), n, (ox, oy) in zip(pts, names, offs):
        b += f'<circle cx="{f(px)}" cy="{f(py)}" r="4" style="fill:{GLC if n != "O" else "var(--break)"}"/>'
        b += T(px + ox, py + oy, n, 13, 700, INK if n != "O" else BREAK, "middle", "var(--mono)")
    top = pts[5]
    b += line(top[0], top[1], top[0] - 26, top[1] - 34, GLC, 2)
    b += T(top[0] - 30, top[1] - 38, "C6", 13, 700, INK, "middle", "var(--mono)")
    b += T(cx, 205, "one glucose = one hexagon", 12, 400, MUTED, "middle")
    return b


def structure_fig():
    b = glucose_ring()
    x0, y0 = 250, 160
    b += chain(x0, y0, 6, 30, 12)
    b += line(x0 + 60, y0 - 12, x0 + 60, y0 - 46)
    b += chain(x0 + 60, y0 - 58, 4, 30, 12)
    b += line(x0 + 60, y0 - 30, x0 + 50, y0 - 30, MUTED, 1)
    b += T(x0 + 46, y0 - 42, "α-1,6 bond", 12.5, 700, GLC, "end")
    b += T(x0 + 46, y0 - 27, "C1 → C6: a branch", 11.5, 400, MUTED, "end")
    b += T(x0 + 45, y0 + 34, "α-1,4 bond", 12.5, 700, GLC, "middle")
    b += T(x0 + 45, y0 + 50, "C1 → C4: makes the chain", 11.5, 400, MUTED, "middle")
    b += line(x0 + 45, y0 + 22, x0 + 45, y0 + 4, MUTED, 1)
    b += particle(590, 104, .31, 3.2, 4, 62, ends=True)
    b += T(590, 206, "whole particle (β-particle)", 12, 700, INK, "middle")
    b += T(590, 222, "~21 nm across · up to ~55,000 glucose", 11.5, 400, MUTED, "middle")
    b += T(590, 238, "outlined ends = where enzymes work", 11.5, 400, BUILD, "middle")
    return svg(700, 246, b, "Glucose ring numbering, alpha-1,4 and alpha-1,6 bonds, and a whole glycogen particle")


def why_branched():
    b = ""
    b += T(20, 16, "ONE LONG CHAIN", 12, 700, INK, fam="var(--mono)")
    b += core(28, 80) + chain(52, 80, 10, 26, 10)
    b += pacman(52 + 9 * 26 + 24, 80, 11)
    b += T(20, 140, "1 end → only 1 enzyme can work at a time", 12.5, 700, MUTED)
    b += T(380, 16, "SAME GLUCOSE, BRANCHED", 12, 700, INK, fam="var(--mono)")
    cx, cy = 440, 80
    b += core(cx - 24, cy)
    b += chain(cx, cy, 3, 26, 10)
    b += line(cx + 26, cy - 10, cx + 26, cy - 28) + chain(cx + 26, cy - 38, 3, 26, 10)
    b += line(cx + 26, cy + 10, cx + 26, cy + 28) + chain(cx + 26, cy + 38, 3, 26, 10)
    b += line(cx + 52, cy, cx + 78, cy) + hexagon(cx + 78, cy, 10)
    for yy, xx in [(cy - 38, cx + 78), (cy + 38, cx + 78), (cy, cx + 78)]:
        b += pacman(xx + 24, yy, 10)
    b += T(380, 140, "3 ends → 3 enzymes work at once", 12.5, 700, BUILD)
    b += T(380, 156, "= glucose in and out much faster", 12, 400, MUTED)
    return svg(680, 164, b, "An unbranched chain has one end; a branched chain has many ends for enzymes")


def osmotic_fig():
    b = ""
    b += f'<ellipse cx="150" cy="95" rx="120" ry="72" style="fill:var(--blood-t);stroke:{BLOOD};stroke-width:2;stroke-dasharray:6 4"/>'
    import random
    rnd = random.Random(4)
    for _ in range(48):
        a, rr = rnd.uniform(0, 6.28), rnd.uniform(0, 1) ** .5
        b += hexagon(150 + math.cos(a) * rr * 100, 95 + math.sin(a) * rr * 55, 5)
    for a in range(0, 360, 45):
        x, y = 150 + math.cos(math.radians(a)) * 158, 95 + math.sin(math.radians(a)) * 100
        b += arrow(x, y, 150 + math.cos(math.radians(a)) * 128, 95 + math.sin(math.radians(a)) * 80, UDP, 1.6, None, 6)
    b += T(150, 222, "free glucose: water rushes in → cell swells", 12.5, 700, BLOOD, "middle")
    b += f'<ellipse cx="500" cy="95" rx="100" ry="66" style="fill:var(--panel);stroke:{LINE};stroke-width:2"/>'
    b += particle(500, 95, .22, 2.4, 4, 62)
    b += T(500, 222, "same glucose as ONE glycogen particle: cell is fine", 12.5, 700, BUILD, "middle")
    return svg(680, 230, b, "Storing glucose as free molecules would make cells swell; one glycogen particle does not")


def branching_fig():
    b = ""
    dx, r = 16, 7
    heads = ["1  Chain reaches ≥ 11 glucose", "2  Cut off a block of ~7", "3  Re-attach it with α-1,6"]
    for p, h in enumerate(heads):
        b += T(12 + p * 230, 20, h, 12.5, 700, INK)
    y = 110
    # panel 1
    x0 = 30
    b += core(x0 - 16, y, 12) + chain(x0, y, 11, dx, r)
    # panel 2
    x0 = 258
    b += core(x0 - 16, y, 12) + chain(x0, y, 4, dx, r)
    b += chain(x0 + 4 * dx + 18, y - 34, 7, dx, r, "hex hl")
    b += T(x0 + 3 * dx + 10, y + 26, "✂", 18, 400, BUILD, "middle")
    b += curve(x0 + 5 * dx + 10, y - 10, x0 + 5 * dx, y - 30, x0 + 4 * dx + 16, y - 36, BUILD, 1.6, 6)
    # panel 3
    x0 = 488
    b += core(x0 - 16, y, 12) + chain(x0, y, 4, dx, r)
    b += line(x0 + dx, y - r, x0 + dx, y - 34 + r)
    b += chain(x0 + dx, y - 34, 7, dx, r, "hex hl")
    b += T(x0 - 4, y - 22, "α-1,6", 11.5, 700, BUILD, "end")
    b += T(x0 + 5 * dx, y + 28, "2 ends now → faster", 12, 400, MUTED, "middle")
    b += T(12, 170, "Rule of thumb: branch points end up about 8–12 glucose apart, and a new branch is at least 4 glucose away from the nearest one.", 11.5, 400, MUTED)
    return svg(700, 180, b, "How branching enzyme makes a branch")


def glycogenin_fig():
    b = ""
    b += f'<ellipse cx="95" cy="80" rx="72" ry="46" style="fill:var(--udp-t);stroke:{UDP};stroke-width:1.6"/>'
    b += T(95, 76, "GLYCOGENIN", 13, 700, UDP, "middle", "var(--mono)")
    b += T(95, 94, "(a protein)", 11.5, 400, MUTED, "middle")
    b += T(172, 64, "Tyr", 11, 700, UDP, "start", "var(--mono)")
    b += line(166, 80, 186, 80, GLC, 2)
    b += chain(196, 80, 8, 24, 10)
    b += f'<path d="M186 108 h 176" style="stroke:{UDP};stroke-width:2"/>'
    b += T(186, 126, "1 · glycogenin adds the first ~8 glucose to itself", 12, 700, UDP)
    b += line(196 + 7 * 24 + 10, 80, 470, 80, GLC, 2, "4 4")
    b += chain(480, 80, 6, 24, 10)
    b += f'<path d="M470 108 h 140" style="stroke:{BUILD};stroke-width:2"/>'
    b += T(470, 146, "2 · then glycogen synthase takes over", 12, 700, BUILD)
    b += line(470, 108, 470, 134, BUILD, 1)
    b += TL(20, 176, ["Glycogen synthase cannot start from nothing. It needs a short primer chain, and glycogenin makes that primer.",
                      "Glycogenin stays in the centre of every particle."], 11.5, 400, MUTED, "start", 15)
    return svg(700, 200, b, "Glycogenin primes a new glycogen particle")


def debranch_fig():
    b = ""
    dx, r = 17, 7.5
    heads = ["1  Phosphorylase stops at 4", "2  Transferase moves 3", "3  Glucosidase frees the last 1"]
    for p, h in enumerate(heads):
        b += T(12 + p * 230, 20, h, 12.5, 700, INK)
    for p in range(3):
        x0, y = 30 + p * 230, 120
        n_main = 5 if p == 0 else 5
        b += core(x0 - 16, y, 12) + chain(x0, y, n_main, dx, r)
        bx = x0 + dx
        if p == 0:
            b += line(bx, y - r, bx, y - 34 + r) + chain(bx, y - 34, 4, dx, r, "hex hl")
            b += pacman(bx + 3 * dx + 22, y - 34, 11)
            b += T(bx + 1.5 * dx, y - 56, "limit branch", 11, 700, BREAK, "middle")
        if p == 1:
            b += line(bx, y - r, bx, y - 34 + r) + hexagon(bx, y - 34, r, "hex hl")
            b += chain(x0 + 5 * dx, y, 3, dx, r, "hex hl")
            b += line(x0 + 4 * dx, y, x0 + 5 * dx, y)
            b += curve(bx + 2 * dx, y - 44, x0 + 5 * dx, y - 70, x0 + 6 * dx, y - 14, BREAK, 1.6, 6, "4 3")
        if p == 2:
            b += chain(x0 + 5 * dx, y, 3, dx, r)
            b += line(x0 + 4 * dx, y, x0 + 5 * dx, y)
            b += hexagon(bx + 22, y - 58, r + 1, "hex free")
            b += arrow(bx + 2, y - 16, bx + 16, y - 46, BREAK, 1.5, None, 6)
            b += T(bx + 36, y - 54, "FREE glucose", 11.5, 700, BREAK)
            b += T(bx + 36, y - 40, "(no phosphate)", 11, 400, MUTED)
    b += T(12, 170, "Memory hook: 4 = 3 + 1. Of the 4 glucose left on the stub, 3 are moved and 1 is set free. About 1 in 10 glucose leaves glycogen this way.", 11.5, 400, MUTED)
    return svg(700, 180, b, "How debranching enzyme removes a branch in two steps")


def roads_fig():
    b = ""
    b += glc(90, 110, 16, p=1) + T(90, 150, "glucose-1-phosphate", 12.5, 700, INK, "middle")
    b += particle(600, 110, .26, 2.8, 4, 62) + T(600, 200, "glycogen", 12.5, 700, INK, "middle")
    b += curve(130, 90, 340, 10, 520, 80, BUILD, 3, 11)
    b += T(335, 36, "BUILD ROAD: UTP → UDP-glucose → glycogen synthase", 12.5, 700, BUILD, "middle")
    b += curve(520, 140, 340, 214, 130, 132, BREAK, 3, 11)
    b += T(335, 196, "BREAK ROAD: Pi + glycogen phosphorylase", 12.5, 700, BREAK, "middle")
    return svg(680, 214, b, "Glycogen is made and broken down by two separate one-way roads")


def atp_bars():
    b = ""
    b += T(0, 16, "Net ATP from glycolysis, per glucose", 14, 700, INK)
    rows = [("from blood glucose", 2, MUTED, "hexokinase spends 1 ATP first"), ("from glycogen", 3, BREAK, "already has its phosphate: 1 ATP saved")]
    for i, (lab, v, col, note) in enumerate(rows):
        y = 42 + i * 56
        b += T(0, y + 14, lab, 13.5, 700, INK)
        b += f'<rect x="150" y="{y}" width="{v * 50}" height="20" rx="4" style="fill:{col}"/>'
        b += T(150 + v * 50 + 8, y + 15, f"{v} ATP", 14, 700, INK, "start", "var(--mono)")
        b += T(150, y + 38, note, 12.5, 400, MUTED)
    return svg(360, 150, b, "Bar chart: 2 ATP from blood glucose versus 3 ATP from glycogen glucose")


def cascade_fig():
    b = ""
    b += T(165, 20, "FED · INSULIN", 14, 800, BUILD, "middle", "var(--display)")
    b += T(515, 20, "FASTING / STRESS · GLUCAGON, ADRENALINE", 14, 800, BREAK, "middle", "var(--display)")
    b += T(697, 38, "signal multiplied at each step (illustrative)", 10.5, 400, MUTED, "end")
    left = ["Insulin", "Insulin receptor\n(tyrosine kinase)", "IRS-1 → PI3K", "PKB (Akt)", "GSK3 switched OFF\nPP1 switched ON"]
    right = ["Glucagon (liver) · Adrenaline (both)", "GPCR receptor → Gs protein", "Adenylyl cyclase → cAMP", "PKA", "Phosphorylase kinase"]
    ys = [60, 118, 176, 232, 292]
    for i, (a, y) in enumerate(zip(left, ys)):
        b += pill(165, y, a, BUILD, True, 12.5, w=230)
        if i:
            b += arrow(165, ys[i - 1] + (22 if "\n" in left[i - 1] else 14), 165, y - (22 if "\n" in a else 14), BUILD, 2, None, 7)
    for i, (a, y) in enumerate(zip(right, ys)):
        b += pill(505, y, a, BREAK, True, 12.5, w=270)
        if i:
            b += arrow(505, ys[i - 1] + 14, 505, y - 14, BREAK, 2, None, 7)
        n = [1, 10, 100, 1000, 10000][i]
        b += T(697, y + 4, f"×{n:,}" if i else "1", 11, 700, BREAK, "end", "var(--mono)")
    b += f'<rect x="60" y="360" width="250" height="66" rx="12" style="fill:var(--build-t);stroke:{BUILD};stroke-width:1.6"/>'
    b += T(185, 384, "Glycogen synthase", 13.5, 700, INK, "middle") + T(185, 404, "P removed → ON", 12.5, 700, BUILD, "middle", "var(--mono)")
    b += T(185, 418, "phosphorylase: P removed → OFF", 11, 400, MUTED, "middle")
    b += f'<rect x="370" y="360" width="290" height="66" rx="12" style="fill:var(--break-t);stroke:{BREAK};stroke-width:1.6"/>'
    b += T(515, 384, "Glycogen phosphorylase", 13.5, 700, INK, "middle") + T(515, 404, "P added → ON", 12.5, 700, BREAK, "middle", "var(--mono)")
    b += T(515, 418, "synthase: P added (PKA, GSK3) → OFF", 11, 400, MUTED, "middle")
    b += arrow(165, 314, 180, 356, BUILD, 2, None, 7) + arrow(505, 306, 505, 356, BREAK, 2, None, 7)
    b += curve(370, 232, 320, 290, 300, 356, BREAK, 1.5, 6, "4 3")
    b += T(340, 300, "PKA", 10.5, 700, BREAK, "start", "var(--mono)")
    return svg(700, 432, b, "Insulin and glucagon or adrenaline signalling pathways that switch glycogen enzymes")


def allosteric_fig():
    b = ""

    def box(x, y, w, title, col):
        return (f'<rect x="{x}" y="{y}" width="{w}" height="44" rx="10" style="fill:var(--panel);stroke:{col};stroke-width:1.6"/>'
                + T(x + w / 2, y + 27, title, 13.5, 700, INK, "middle"))

    def reg(x, y, ty, lab, plus, note):
        col = BUILD if plus else BLOOD
        s = arrow(x, y + (12 if y < ty else -12), x, ty, col, 1.8, None if plus else "4 3", 7)
        s += f'<circle cx="{f(x)}" cy="{f(y)}" r="11" style="fill:{col}"/>' + T(x, y + 4.5, "+" if plus else "−", 15, 700, PANEL, "middle", "var(--mono)")
        s += T(x + 17, y - 1, lab, 13, 700, INK) + T(x + 17, y + 14, note, 11.5, 400, MUTED)
        return s

    b += T(180, 18, "IN MUSCLE", 13, 700, INK, "middle", "var(--mono)")
    b += box(60, 128, 240, "Glycogen phosphorylase", BREAK)
    b += reg(80, 62, 126, "AMP", True, "energy running low")
    b += reg(230, 62, 126, "Ca2+", True, "muscle contracting")
    b += reg(80, 238, 174, "ATP", False, "plenty of energy")
    b += reg(230, 238, 174, "G6P", False, "plenty of fuel")
    b += T(530, 18, "IN LIVER", 13, 700, INK, "middle", "var(--mono)")
    b += box(410, 128, 240, "Glycogen phosphorylase", BREAK)
    b += reg(440, 238, 174, "glucose", False, "blood sugar is high")
    b += TL(410, 62, ["The liver enzyme is a glucose sensor:", "glucose binds phosphorylase a and", "helps PP1 switch it off."], 11.5, 400, MUTED, "start", 15)
    b += line(10, 276, 690, 276, LINE, 1)
    b += T(350, 298, "In both tissues, G6P also switches ON glycogen synthase (lots of glucose inside → store it).", 12, 700, BUILD, "middle")
    return svg(700, 308, b, "Allosteric activators and inhibitors of glycogen phosphorylase in muscle and liver")


def day_chart():
    """Schematic (not measured) liver glycogen over 24 h."""
    W, H, L, R, TOP, BOT = 680, 250, 52, 16, 22, 196
    hrs = [(7, 55), (7.5, 55), (9.5, 78), (12.5, 70), (14.5, 92), (18.5, 78), (19, 78), (21, 104), (23, 96), (31, 55)]
    xs = lambda h: L + (h - 7) / 24 * (W - L - R)
    ys = lambda g: BOT - g / 120 * (BOT - TOP)
    b = ""
    b += f'<rect x="{f(xs(23))}" y="{TOP}" width="{f(xs(31) - xs(23))}" height="{BOT - TOP}" style="fill:var(--bg-2)"/>'
    b += T((xs(23) + xs(31)) / 2, TOP + 16, "overnight fast", 11.5, 700, MUTED, "middle")
    for g in (0, 40, 80, 120):
        b += line(L, ys(g), W - R, ys(g), LINE, 1) + T(L - 8, ys(g) + 4, str(g), 11, 400, MUTED, "end", "var(--mono)")
    b += T(12, TOP - 6, "grams of liver glycogen", 11, 400, MUTED)
    for h, lab in [(7, "7 am"), (13, "1 pm"), (19, "7 pm"), (25, "1 am"), (31, "7 am")]:
        b += T(xs(h), BOT + 18, lab, 11, 400, MUTED, "middle", "var(--mono)")
    pts = [(xs(h), ys(g)) for h, g in hrs]
    d = f"M{f(pts[0][0])} {f(pts[0][1])}"
    for i in range(1, len(pts)):
        (x0, y0), (x1, y1) = pts[i - 1], pts[i]
        mx = (x0 + x1) / 2
        d += f" C{f(mx)} {f(y0)} {f(mx)} {f(y1)} {f(x1)} {f(y1)}"
    b += f'<path d="{d} L{f(pts[-1][0])} {BOT} L{f(pts[0][0])} {BOT} Z" style="fill:var(--glc-t);opacity:.7"/>'
    b += f'<path d="{d}" style="fill:none;stroke:{GLC};stroke-width:2.4"/>'
    for h, lab in [(7.5, "breakfast"), (12.5, "lunch"), (19, "dinner")]:
        b += line(xs(h), BOT, xs(h), TOP + 6, BUILD, 1.2, "3 3")
        b += T(xs(h) + 5, BOT - 8, lab, 11.5, 700, BUILD)
    b += f'<circle cx="{f(pts[-1][0])}" cy="{f(pts[-1][1])}" r="4.5" style="fill:{GLC}"/>'
    b += T(pts[-1][0] - 8, pts[-1][1] - 10, "about half used", 11.5, 700, INK, "end")
    b += T(L, H - 4, "Schematic: the usual pattern described in textbooks, not one person's measured data.", 11, 400, MUTED)
    return svg(W, H, b, "Schematic line chart of liver glycogen rising after meals and falling overnight")


def marathon_chart():
    W, L, R = 680, 20, 24
    km = lambda k: L + k / 42.2 * (W - L - R)
    b = ""
    y = 66
    b += T(L, 20, "Energy check for a 70 kg runner", 13, 700, INK)
    b += T(L, 38, "Running costs about 1 kcal per kg per km → 70 × 42.2 ≈ 2,950 kcal for a marathon.", 11.5, 400, MUTED)
    b += f'<rect x="{f(km(0))}" y="{y}" width="{f(km(42.2) - km(0))}" height="26" rx="5" style="fill:var(--bg-2);stroke:{LINE}"/>'
    b += f'<rect x="{f(km(0))}" y="{y}" width="{f(km(28.6) - km(0))}" height="26" rx="5" style="fill:{GLC}"/>'
    b += T(km(14.3), y + 17.5, "glycogen alone: ~500 g × 4 kcal/g ≈ 2,000 kcal", 12, 700, PANEL, "middle")
    b += f'<rect x="{f(km(30))}" y="{y - 6}" width="{f(km(35) - km(30))}" height="38" rx="4" style="fill:none;stroke:{BLOOD};stroke-width:2;stroke-dasharray:4 3"/>'
    b += T(km(32.5), y + 52, "“the wall”", 12.5, 700, BLOOD, "middle")
    b += T(km(32.5), y + 67, "often 30–35 km", 11, 400, MUTED, "middle")
    for k in (0, 10, 20, 42.2):
        b += line(km(k), y + 30, km(k), y + 36, MUTED, 1) + T(km(k), y + 50, f"{k:g} km", 11, 400, MUTED, "end" if k > 40 else "middle" if k else "start", "var(--mono)")
    b += T(km(28.6) - 4, y - 8, "empty at ≈ 28.6 km", 11.5, 700, GLC, "end")
    b += T(L, y + 92, "Fat supplies part of the energy, which pushes the wall later. Carb loading and sports gels top up glycogen.", 11.5, 400, MUTED)
    return svg(W, 166, b, "Bar showing glycogen energy would run out at about 28.6 km of a 42.2 km marathon")


def gsd_map():
    b = ""
    col = 130
    ys = {"blood": 30, "glc": 96, "g6p": 162, "g1p": 228, "udpg": 294}
    b += T(col, ys["blood"] + 4, "blood glucose", 13, 700, BLOOD, "middle")
    b += glc(col, ys["glc"], 12) + T(col + 50, ys["glc"] + 4, "glucose", 12, 700, INK)
    b += glc(col, ys["g6p"], 12, p=6) + T(col + 50, ys["g6p"] + 4, "glucose-6-P", 12, 700, INK)
    b += glc(col, ys["g1p"], 12, p=1) + T(col + 50, ys["g1p"] + 4, "glucose-1-P", 12, 700, INK)
    b += glc(col - 10, ys["udpg"], 12, udp=True) + T(col + 50, ys["udpg"] + 4, "UDP-glucose", 12, 700, INK)
    b += arrow(col - 24, ys["blood"] + 12, col - 24, ys["glc"] - 16, BUILD) + arrow(col + 24, ys["glc"] - 16, col + 24, ys["blood"] + 12, BREAK)
    b += arrow(col - 24, ys["glc"] + 14, col - 24, ys["g6p"] - 18, BUILD) + arrow(col + 24, ys["g6p"] - 18, col + 24, ys["glc"] + 14, BREAK)
    b += arrow(col - 24, ys["g6p"] + 16, col - 24, ys["g1p"] - 16, BUILD) + arrow(col + 30, ys["g1p"] - 16, col + 30, ys["g6p"] + 14, BREAK)
    b += arrow(col - 24, ys["g1p"] + 16, col - 24, ys["udpg"] - 16, BUILD)
    px, py = 390, 190
    b += particle(px, py, .34, 3.2, 4, 62)
    b += T(px, py + 104, "glycogen", 12.5, 700, GLC, "middle")
    b += curve(col + 130, ys["udpg"] - 4, 270, 270, px - 84, py + 34, BUILD, 2)
    b += curve(px - 80, py - 40, 290, 190, col + 130, ys["g1p"] - 8, BREAK, 2)
    b += f'<rect x="520" y="16" width="170" height="80" rx="14" style="fill:var(--panel);stroke:{LINE};stroke-width:1.5"/>'
    b += T(605, 36, "LYSOSOME", 11.5, 700, MUTED, "middle", "var(--mono)")
    b += T(605, 84, "glycogen → glucose", 12, 700, INK, "middle")
    b += arrow(px + 60, py - 70, 530, 90, MUTED, 1.6, "4 3")

    def badge(x, y, num):
        return f'<circle cx="{f(x)}" cy="{f(y)}" r="12" style="fill:{BLOOD};stroke:{PANEL};stroke-width:2"/>' + T(x, y + 4.2, num, 10.5, 700, PANEL, "middle", "var(--mono)")
    b += badge(col + 24, (ys["g6p"] + ys["glc"]) / 2, "I")
    b += badge(263, 283, "0") + badge(px - 90, py + 44, "IV")
    b += badge(263, 205, "V") + badge(236, 208, "VI") + badge(px - 64, py - 58, "III")
    b += badge(496, 100, "II")
    legend = [("0", "glycogen synthase (liver)"), ("I", "glucose-6-phosphatase (liver)"), ("II", "acid α-glucosidase (lysosome)"),
              ("III", "debranching enzyme"), ("IV", "branching enzyme"), ("V", "muscle phosphorylase"), ("VI", "liver phosphorylase")]
    for i, (num, lab) in enumerate(legend):
        y = 136 + i * 26
        b += badge(512, y, num) + T(530, y + 4.5, lab, 11.5, 700, INK)
    return svg(700, 320, b, "Map of glycogen storage disease types placed on the pathway where each enzyme is missing")


def master_map():
    b = ""
    cx = 350
    ys = {"gly": 64, "udpg": 150, "g1p": 240, "g6p": 330, "glc": 420, "blood": 500}
    b += particle(cx, ys["gly"], .16, 2.2, 4, 62) + T(cx, ys["gly"] + 54, "GLYCOGEN", 12, 700, GLC, "middle", "var(--mono)")
    b += glc(cx - 12, ys["udpg"], 13, udp=True) + T(cx, ys["udpg"] + 30, "UDP-glucose", 12, 700, INK, "middle")
    b += glc(cx, ys["g1p"], 13, p=1) + T(cx, ys["g1p"] + 30, "glucose-1-P", 12, 700, INK, "middle")
    b += glc(cx, ys["g6p"], 13, p=6) + T(cx, ys["g6p"] + 30, "glucose-6-P", 12, 700, INK, "middle")
    b += glc(cx, ys["glc"], 13) + T(cx, ys["glc"] + 30, "glucose (in cell)", 12, 700, INK, "middle")
    b += f'<rect x="{cx - 80}" y="{ys["blood"] - 16}" width="160" height="32" rx="16" style="fill:var(--blood-t);stroke:{BLOOD}"/>' + T(cx, ys["blood"] + 5, "BLOOD GLUCOSE", 12, 700, BLOOD, "middle", "var(--mono)")
    L, R = cx - 56, cx + 56

    def up(y1, y2, name, note):
        return arrow(L, y1, L, y2, BUILD, 2.6, None, 9) + T(L - 14, (y1 + y2) / 2 - 2, name, 12.5, 700, BUILD, "end") + T(L - 14, (y1 + y2) / 2 + 13, note, 11, 400, MUTED, "end")

    def down(y1, y2, name, note):
        return arrow(R, y1, R, y2, BREAK, 2.6, None, 9) + T(R + 14, (y1 + y2) / 2 - 2, name, 12.5, 700, BREAK) + T(R + 14, (y1 + y2) / 2 + 13, note, 11, 400, MUTED)
    b += up(ys["blood"] - 18, ys["glc"] + 36, "GLUT2 / GLUT4", "into the cell")
    b += up(ys["glc"] - 16, ys["g6p"] + 36, "1 · hexokinase / glucokinase", "ATP → ADP")
    b += up(ys["g6p"] - 16, ys["g1p"] + 36, "2 · phosphoglucomutase", "moves P from C6 to C1")
    b += up(ys["g1p"] - 16, ys["udpg"] + 36, "3 · UDP-glucose pyrophosphorylase", "UTP in, PPi → 2 Pi")
    b += up(ys["udpg"] - 16, ys["gly"] + 40, "4 · glycogen synthase + 5 · branching", "α-1,4 then α-1,6 · on a glycogenin primer")
    b += down(ys["gly"] + 40, ys["g1p"] - 18, "1 · glycogen phosphorylase", "Pi in (PLP helper) · stops 4 from branch")
    b += T(R + 14, (ys["gly"] + ys["g1p"]) / 2 + 44, "2 · debranching enzyme", 12.5, 700, BREAK) + T(R + 14, (ys["gly"] + ys["g1p"]) / 2 + 59, "moves 3, frees 1 glucose", 11, 400, MUTED)
    b += down(ys["g1p"] + 36, ys["g6p"] - 18, "3 · phosphoglucomutase", "moves P from C1 to C6")
    b += T(R + 14, ys["g6p"] + 2, "MUSCLE stops here: G6P → glycolysis → ATP", 11.5, 700, BREAK, "start", "var(--body)", 'font-style="italic"')
    b += down(ys["g6p"] + 36, ys["glc"] - 18, "4 · glucose-6-phosphatase", "LIVER only (in the ER)")
    b += down(ys["glc"] + 36, ys["blood"] - 18, "out through GLUT2", "raises blood glucose")
    b += T(20, 22, "BUILD ↑  glycogenesis", 15, 800, BUILD, "start", "var(--display)") + T(20, 40, "fed state · insulin", 12, 400, MUTED)
    b += T(680, 22, "BREAK ↓  glycogenolysis", 15, 800, BREAK, "end", "var(--display)") + T(680, 40, "fasting, exercise, stress · glucagon, adrenaline", 12, 400, MUTED, "end")
    return svg(700, 530, b, "Master map of glycogenesis and glycogenolysis side by side")
