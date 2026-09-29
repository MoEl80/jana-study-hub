# Glycogen study pack (BIOL214, Week 4)

Glycogenesis and glycogenolysis explained in plain words, with diagrams, real photos, real-life examples and animations.

| File | What it is |
|---|---|
| `Glycogenesis-and-Glycogenolysis.pdf` | The 23-page study pack: big idea, structure, both pathways step by step, hormones and allosteric control, real-life examples (meals, fright, sprint, marathon, diabetes, diets, alcohol), glycogen storage diseases, memory tricks, a 12-question quiz with answers, a one-page summary, and photo credits. |
| `glycogen-animations.html` | Interactive animations in three scenes: glycogenesis, glycogenolysis and the hormone switch. Captions, a step list you can jump through, and slow motion. Works on a phone. |
| `glycogen-animations.mp4` | All three scenes as one captioned video (about 58 s). |
| `animation-build.gif`, `animation-break.gif`, `animation-switch.gif` | Each scene as a looping GIF. |
| `src/` | Source used to build the PDF: diagram code, photos, fonts and animation stills. |

## Rebuild the PDF

```sh
cd src
pip install playwright qrcode pillow
python3 build_pdf.py            # writes ../Glycogenesis-and-Glycogenolysis.pdf
```

The build uses a local Chromium. Set `CHROME=/path/to/chrome` if yours lives somewhere else.

## Credits

Photos come from Wikimedia Commons and the RCSB Protein Data Bank under the licences listed on the last page of the PDF. The fonts (Atkinson Hyperlegible, Bricolage Grotesque, IBM Plex Mono) are under the SIL Open Font License.
