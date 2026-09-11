/* Practice Quiz: pick topics → answer (MCQ auto-marked; short/extended self-marked against model answer) → score saved. */
(function () {
  'use strict';

  function render(main, subject) {
    var app = window.JSH.app;
    var data = app.part(subject.id, 'questions');
    main.appendChild(app.el('h1', { text: '❓ ' + subject.name + ' — Practice Quiz' }));
    if (!data) { main.appendChild(app.el('p', { class: 'muted', text: 'Quiz questions are on their way.' })); return; }
    var tids = app.topicIds(subject.id);
    var chosen = {};
    var form = app.el('section', { class: 'card' }, app.el('h2', { text: 'Pick what to practise' }));
    tids.forEach(function (tid) {
      var n = data.quiz.filter(function (q) { return q.topic === tid; }).length;
      if (!n) return;
      var cb = app.el('input', { type: 'checkbox', id: 'pick-' + tid });
      cb.addEventListener('change', function () { chosen[tid] = cb.checked; });
      form.appendChild(app.el('label', { class: 'revised-item' }, cb, app.el('span', { text: ' ' + app.topicTitle(subject.id, tid) + ' (' + n + ' questions)' })));
    });
    var start = app.el('button', { class: 'button', text: 'Start quiz' });
    start.addEventListener('click', function () {
      var topics = Object.keys(chosen).filter(function (t) { return chosen[t]; });
      if (!topics.length) { alert('Pick at least one topic!'); return; }
      run(main, subject, data.quiz.filter(function (q) { return topics.indexOf(q.topic) !== -1; }), topics);
    });
    form.appendChild(start);
    main.appendChild(form);
  }

  function run(main, subject, pool, topics) {
    var app = window.JSH.app;
    var state = { i: 0, answers: {} };
    var panel = app.el('section', { class: 'card' });
    main.textContent = '';
    main.appendChild(app.el('h1', { text: '❓ Quiz — ' + pool.length + ' questions' }));
    main.appendChild(panel);

    function show() {
      panel.textContent = '';
      if (state.i >= pool.length) return finish();
      var q = pool[state.i];
      panel.appendChild(app.el('p', { class: 'muted', text: 'Question ' + (state.i + 1) + ' of ' + pool.length + ' · ' + app.topicTitle(subject.id, q.topic) }));
      var head = app.el('h2', {}, q.question, app.el('span', { class: 'marks', text: ' (' + q.marks + (q.marks === 1 ? ' mark' : ' marks') + ')' }));
      panel.appendChild(head);
      var answerEl = null;
      if (q.type === 'mcq') {
        q.options.forEach(function (opt, idx) {
          var label = app.el('label', { class: 'option' });
          var radio = app.el('input', { type: 'radio', name: q.id });
          radio.addEventListener('change', function () {
            state.answers[q.id] = { selected: idx };
            nextBtn.disabled = false;
          });
          label.appendChild(radio);
          label.appendChild(document.createTextNode(' ' + opt));
          panel.appendChild(label);
        });
      } else {
        var ta = app.el('textarea', { class: 'answer', placeholder: 'Type your answer…' });
        answerEl = ta;
        panel.appendChild(ta);
        var reveal = app.el('button', { class: 'button', text: 'Show model answer & mark yourself' });
        reveal.addEventListener('click', function () {
          reveal.disabled = true;
          panel.appendChild(app.el('div', { html: '<b>Model answer:</b> ' + app.esc(q.answer) }));
          if (q.explanation) panel.appendChild(app.el('p', { class: 'muted', text: q.explanation }));
          panel.appendChild(app.el('p', { text: 'How many marks out of ' + q.marks + ' would a teacher give this?' }));
          for (var m = 0; m <= q.marks; m++) {
            (function (marks) {
              var b = app.el('button', { class: 'button', text: String(marks) });
              b.addEventListener('click', function () {
                state.answers[q.id] = { awarded: marks };
                nextBtn.disabled = false;
                nextBtn.click();
              });
              panel.appendChild(b);
            })(m);
          }
        });
        panel.appendChild(reveal);
      }

      // 🤖 AI assist: mark her answer, or teach her when stuck (family GLM key)
      var tutorCfg = window.JSH.ui.ai && window.JSH.ui.ai.getConfig ? window.JSH.ui.ai.getConfig() : null;
      if (tutorCfg && tutorCfg.key && window.JSH.tutor) {
        var aiBox = app.el('div', { class: 'ai-feedback', style: 'display:none' });
        var aiBusy = false;
        function askAI(payload, busyLabel, onDone) {
          if (aiBusy) return;
          aiBusy = true;
          aiBox.style.display = 'block';
          aiBox.textContent = busyLabel;
          window.JSH.tutor.chat(tutorCfg, payload)
            .then(function (text) { aiBox.innerHTML = app.fmtBody(text); if (onDone) onDone(text); })
            .catch(function (e) { aiBox.textContent = 'AI unavailable: ' + e.message; })
            .then(function () { aiBusy = false; });
        }
        var tools = app.el('div', { class: 'tutor-starters' });
        if (q.type === 'mcq') {
          var exBtn = app.el('button', { class: 'button', text: '🤖 Explain this question' });
          exBtn.addEventListener('click', function () {
            var sel = state.answers[q.id] && state.answers[q.id].selected;
            askAI(window.JSH.tutor.buildExplainPrompt(q, sel !== undefined ? 'chose ' + String.fromCharCode(65 + sel) + ' — explain why right or wrong' : 'no choice yet'), '🤖 Thinking…');
          });
          tools.appendChild(exBtn);
        } else {
          var markBtn = app.el('button', { class: 'button', text: '🤖 AI mark my answer' });
          markBtn.addEventListener('click', function () {
            var txt = answerEl ? answerEl.value : '';
            if (!txt.trim()) { aiBox.style.display = 'block'; aiBox.textContent = 'Write your answer first — or tap 💡 Teach me.'; return; }
            askAI(window.JSH.tutor.buildMarkingPrompt(q, txt), '🤖 Marking…', function (text) {
              var awarded = window.JSH.tutor.parseMark(text, q.marks);
              if (awarded !== null) {
                state.answers[q.id] = { awarded: awarded };
                nextBtn.disabled = false;
                aiBox.appendChild(app.el('p', { class: 'muted', text: '✓ ' + awarded + ' / ' + q.marks + ' marks recorded — continue below.' }));
              }
            });
          });
          tools.appendChild(markBtn);
          var teachBtn = app.el('button', { class: 'button', text: '💡 I don\'t know — teach me' });
          teachBtn.addEventListener('click', function () {
            var draft = answerEl && answerEl.value.trim() ? answerEl.value.trim() : 'no attempt yet';
            askAI(window.JSH.tutor.buildExplainPrompt(q, draft), '🤖 Teaching…');
          });
          tools.appendChild(teachBtn);
        }
        panel.appendChild(tools);
        panel.appendChild(aiBox);
      }

      var nextBtn = app.el('button', { class: 'button', text: state.i === pool.length - 1 ? 'Finish' : 'Next →', disabled: 'disabled' });
      nextBtn.addEventListener('click', function () { state.i += 1; show(); });
      panel.appendChild(app.el('div', {}, nextBtn));
    }

    function finish() {
      var result = window.JSH.gradeQuiz(pool, state.answers);
      var perTopic = {};
      pool.forEach(function (q, idx) {
        var t = perTopic[q.topic] = perTopic[q.topic] || { earned: 0, max: 0 };
        t.earned += result.per[idx].awarded;
        t.max += result.per[idx].max;
      });
      Object.keys(perTopic).forEach(function (tid) {
        var pct = perTopic[tid].max ? Math.round((100 * perTopic[tid].earned) / perTopic[tid].max) : 0;
        app.store.recordQuiz(subject.id, tid, pct);
      });
      panel.textContent = '';
      panel.appendChild(app.el('h2', { text: 'Score: ' + result.earned + ' / ' + result.total + ' (' + result.pct + '%)' }));
      result.per.forEach(function (p, idx) {
        var q = pool[idx];
        panel.appendChild(app.el('p', { text: (p.correct ? '✅' : '❌') + ' ' + q.question.slice(0, 70) + (q.question.length > 70 ? '…' : '') }));
        if (!p.correct && q.explanation) panel.appendChild(app.el('p', { class: 'muted', text: q.explanation }));
      });
      panel.appendChild(app.el('p', { class: 'muted', text: 'Saved to your dashboard ✓' }));
      panel.appendChild(app.el('a', { href: '#/dashboard', class: 'button' }, 'See dashboard'));
      var again = app.el('button', { class: 'button', text: 'Practise again' });
      again.addEventListener('click', function () { window.location.reload(); });
      panel.appendChild(again);
    }

    show();
  }

  window.JSH.ui = window.JSH.ui || {};
  window.JSH.ui.quiz = { render: render };
})();
