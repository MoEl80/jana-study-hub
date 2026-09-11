# Jana Study Hub

Study hub for **Jana** — Bachelor of Medical and Health Sciences + Honours
(Dean's Scholar), University of Wollongong, **Spring 2026**.

Subjects: **BIOL214** Biochemistry of Energy and Metabolism · **MEDI212**
Introduction to Pathophysiology · **MEDI304** Research Methods and Analysis ·
**CRLP200** Career Ready Learning & Practice.

## What's inside

- 📖 **Study Guide** per subject — topic maps aligned to her 2026 outlines
- 📚 **Notes & Resources** — subject overviews + links (Moodle, handbook, home PC files)
- 🃏 **Flashcards** — Leitner-box spaced repetition
- ❓ **Practice Quiz** — auto-marked MCQ + self-marked short/extended answers
- 🎓 **Exam Mode** — timed papers + generated fresh papers
- 🤖 **Ask Me Anything** — one AI tutor (GLM 5.3) for all subjects
- 📊 **Dashboard** — readiness bars, weak-topic flags, revision checklist, backups

## Use it

- **On this PC:** double-click `Jana Study Hub.bat` (updates from GitHub, then opens)
- **Anywhere (phone/laptop):** https://moel80.github.io/jana-study-hub/
  (AI tutor needs the one-time family GLM key — see TUTOR-SETUP.md)

## Layout

```
Jana Study Hub.html   entry page (copied to index.html when deployed)
app/                  engine: core, app, quiz, flashcards, exam, progress, tutor (GLM 5.3)
data/                 per-subject guide/notes/flashcards/questions + registry
tests/                node --test suite (content integrity + core logic)
deploy-site.cmd       publish to GitHub Pages
Jana Study Hub.bat    family launcher (git pull + open)
TUTOR-SETUP.md        one-time AI key setup
```

## Update the content

Subject data lives in `data/<subject>/` as plain JavaScript — edit, run
`node --test`, then `deploy-site.cmd` to publish. Her private university files
(PDFs, Chrome profile) are git-ignored and never leave this PC.

*Same architecture as her brother's Yusuf Study Hub — family-made.*
