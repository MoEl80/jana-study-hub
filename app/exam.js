/* Exam Mode: timed university-format papers. Section I auto-marked; II & III self-marked against marking guidelines. */
(function () {
  'use strict';

  function allQuestions(paperLike) {
    return paperLike.sections.reduce(function (acc, s) { return acc.concat(s.questions); }, []);
  }

  function render(main, subject) {
    var app = window.JSH.app;
    var data = app.part(subject.id, 'questions');
    main.appendChild(app.el('h1', { text: '🎓 ' + subject.name + ' — Exam Mode' }));
    if (!data) { main.appendChild(app.el('p', { class: 'muted', text: 'Practice papers are on their way.' })); return; }

    var exams = app.store.state.subjects[subject.id] ? app.store.state.subjects[subject.id].exams : [];
    if (exams.length) {
      var hist = app.el('section', { class: 'card' }, app.el('h2', { text: 'Your past exam results' }));
      exams.slice(-5).forEach(function (e) {
        hist.appendChild(app.el('p', { text: e.paperId + ' — ' + e.pct + '% (' + e.date.slice(0, 10) + ')' }));
      });
      main.appendChild(hist);
    }

    data.papers.forEach(function (p) {
      var card = app.el('section', { class: 'card' });
      var total = p.sections.reduce(function (s, sec) { return s + sec.marks; }, 0);
      card.appendChild(app.el('h2', { text: p.title }));
      card.appendChild(app.el('p', { class: 'muted', text: total + ' marks · ' + p.timeMinutes + ' minutes' }));
      var b = app.el('button', { class: 'button', text: 'Start this paper' });
      b.addEventListener('click', function () { run(main, subject, p); });
      card.appendChild(b);
      main.appendChild(card);
    });

    var gen = app.el('section', { class: 'card' }, app.el('h2', { text: 'Generate a fresh paper' }));
    var topics = {};
    app.topicIds(subject.id).forEach(function (tid) {
      if (!data.quiz.some(function (q) { return q.topic === tid; })) return;
      var cb = app.el('input', { type: 'checkbox', id: 'ex-' + tid });
      cb.addEventListener('change', function () { topics[tid] = cb.checked; });
      gen.appendChild(app.el('label', { class: 'revised-item' }, cb, app.el('span', { text: ' ' + app.topicTitle(subject.id, tid) })));
    });
    var counts = { mcq: 10, short: 5, extended: 2 };
    ['mcq', 'short', 'extended'].forEach(function (type) {
      var label = type === 'mcq' ? 'Multiple choice questions' : type === 'short' ? 'Short answer questions' : 'Extended response questions';
      var num = app.el('input', { type: 'number', min: '0', max: '20', value: String(counts[type]), class: 'no-print' });
      num.addEventListener('change', function () { counts[type] = Math.max(0, num.value | 0); });
      gen.appendChild(app.el('label', {}, ' ' + label + ': '));
      gen.appendChild(num);
    });
    var genBtn = app.el('button', { class: 'button', text: 'Generate & start' });
    genBtn.addEventListener('click', function () {
      var chosen = Object.keys(topics).filter(function (t) { return topics[t]; });
      var paper = window.JSH.buildPaper(data.quiz, { mcq: counts.mcq, short: counts.short, extended: counts.extended, topics: chosen.length ? chosen : undefined });
      if (!paper.sections.length) { alert('Not enough questions yet — tick fewer topics or lower the counts.'); return; }
      paper.id = 'generated-' + Date.now();
      paper.title = subject.name + ' — Generated Practice Paper';
      paper.timeMinutes = Math.max(20, Math.round((paper.totalMarks * 1.5) / 5) * 5);
      paper.markingGuidelines = [];
      run(main, subject, paper);
    });
    gen.appendChild(genBtn);
    main.appendChild(gen);
  }

  function run(main, subject, paper) {
    var app = window.JSH.app;
    var answers = {};
    var deadline = Date.now() + paper.timeMinutes * 60000;
    var over = false;
    main.textContent = '';
    main.appendChild(app.el('h1', { text: '🎓 ' + paper.title }));
    var timer = app.el('div', { class: 'timer no-print' });
    main.appendChild(timer);
    var overBanner = app.el('div', { class: 'warning no-print', text: "Time's up! Finish now and move to self-marking." });
    overBanner.style.display = 'none';
    main.appendChild(overBanner);

    function tickFn() {
      var left = deadline - Date.now();
      if (left <= 0) {
        clearInterval(tick);
        over = true;
        timer.textContent = "Time's up";
        timer.classList.add('over');
        overBanner.style.display = 'block';
        return;
      }
      var mins = Math.floor(left / 60000), secs = Math.floor((left % 60000) / 1000);
      timer.textContent = '⏱ ' + mins + ':' + (secs < 10 ? '0' : '') + secs + ' left';
    }
    tickFn(); // paint immediately — setInterval alone would leave the timer blank for 500 ms
    var tick = setInterval(tickFn, 500);
    function stopTimer() {
      clearInterval(tick);
      window.removeEventListener('hashchange', stopTimer);
    }
    // navigating away mid-paper must not leave the interval running on detached DOM
    window.addEventListener('hashchange', stopTimer);

    paper.sections.forEach(function (sec) {
      main.appendChild(app.el('h2', { text: sec.name + ' (' + sec.marks + ' marks)' }));
      main.appendChild(app.el('p', { class: 'muted', text: sec.instructions }));
      sec.questions.forEach(function (q, qi) {
        var box = app.el('div', { class: 'question' });
        box.appendChild(app.el('p', { html: '<b>' + (qi + 1) + '.</b> ' + app.esc(q.question) + ' <span class="marks">(' + q.marks + (q.marks === 1 ? ' mark)' : ' marks)') + '</span>' }));
        if (q.type === 'mcq') {
          q.options.forEach(function (opt, idx) {
            var label = app.el('label', { class: 'option' });
            var radio = app.el('input', { type: 'radio', name: 'ex-' + q.id });
            radio.addEventListener('change', function () { answers[q.id] = { selected: idx }; });
            label.appendChild(radio);
            label.appendChild(document.createTextNode(' ' + opt));
            box.appendChild(label);
          });
        } else {
          var ta = app.el('textarea', { class: 'answer', placeholder: 'Write your answer here…' });
          ta.addEventListener('input', function () {
            answers[q.id] = answers[q.id] || {};
            answers[q.id].text = ta.value;
          });
          box.appendChild(ta);
          box.appendChild(app.el('div', { class: 'answer-space' }));
        }
        main.appendChild(box);
      });
    });

    var finishBtn = app.el('button', { class: 'button no-print', text: 'Finish & self-mark' });
    finishBtn.addEventListener('click', function () {
      stopTimer();
      mark(main, subject, paper, answers, over);
    });
    var printBtn = app.el('button', { class: 'button no-print', text: '🖨 Print blank paper' });
    printBtn.addEventListener('click', function () {
      document.body.classList.add('print-paper');
      window.print();
      document.body.classList.remove('print-paper');
    });
    main.appendChild(app.el('div', { class: 'no-print' }, finishBtn, printBtn));
  }

  function mark(main, subject, paper, answers, timedOut) {
    var app = window.JSH.app;
    var questions = allQuestions(paper);
    var guidelines = {};
    (paper.markingGuidelines || []).forEach(function (g) { guidelines[g.questionRef] = g; });
    main.textContent = '';
    main.appendChild(app.el('h1', { text: 'Self-marking — ' + paper.title }));
    if (timedOut) main.appendChild(app.el('p', { class: 'muted', text: 'The timer ran out. Mark what you completed.' }));
    main.appendChild(app.el('p', { class: 'muted', text: 'Section I is marked automatically. For Sections II and III, compare your answer with the model and give yourself an honest mark.' }));

    var totalEl = app.el('strong');

    function updateTotal() {
      var r = window.JSH.gradeQuiz(questions, answers);
      totalEl.textContent = 'Total so far: ' + r.earned + ' / ' + r.total + ' (' + r.pct + '%)';
    }

    questions.forEach(function (q, qi) {
      var a = answers[q.id] || {};
      var box = app.el('div', { class: 'question' });
      var icon = q.type === 'mcq' ? (a.selected === q.answer ? '✅' : '❌') : '✍';
      box.appendChild(app.el('p', { html: icon + ' <b>' + (qi + 1) + '.</b> ' + app.esc(q.question) }));
      box.appendChild(app.el('p', { html: '<b>Model answer:</b> ' + app.esc(q.answer) }));
      if (q.explanation) box.appendChild(app.el('p', { class: 'muted', text: q.explanation }));
      var g = guidelines[q.id];
      if (g) {
        box.appendChild(app.el('p', { text: 'Marking guidelines:' }));
        var ul = app.el('ul');
        g.criteria.forEach(function (c) { ul.appendChild(app.el('li', { text: c })); });
        box.appendChild(ul);
      }
      if (a.text) box.appendChild(app.el('p', { html: '<b>You wrote:</b> ' + app.esc(a.text) }));
      if (q.type !== 'mcq') {
        box.appendChild(app.el('label', {}, ' Your marks (0–' + q.marks + '): '));
        var input = app.el('input', { type: 'number', min: '0', max: String(q.marks), value: '0', class: 'no-print' });
        input.addEventListener('change', function () {
          var v = Math.max(0, Math.min(q.marks, input.value | 0));
          answers[q.id] = answers[q.id] || {};
          answers[q.id].awarded = v;
          updateTotal();
        });
        box.appendChild(input);
      }
      main.appendChild(box);
    });

    var summary = app.el('section', { class: 'card no-print' });
    summary.appendChild(app.el('p', {}, totalEl));
    var save = app.el('button', { class: 'button', text: 'Save this result' });
    save.addEventListener('click', function () {
      var r = window.JSH.gradeQuiz(questions, answers);
      app.store.recordExam(subject.id, paper.id, r.pct);
      summary.appendChild(app.el('p', { text: 'Saved ✓ ' + r.pct + '%. Check your dashboard.' }));
      save.disabled = true;
    });
    summary.appendChild(save);
    summary.appendChild(app.el('a', { href: '#/dashboard', class: 'button' }, 'Dashboard'));
    main.appendChild(summary);
    updateTotal();
  }

  window.JSH.ui = window.JSH.ui || {};
  window.JSH.ui.exam = { render: render };
})();
