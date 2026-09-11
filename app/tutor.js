/* Ask Me Anything: ONE AI zone for all subjects (subject inferred from the question).
   Family-only: key comes from data/tutor-key.js (home PC) or localStorage (any device, family choice).
   Chat history is saved on this device only (jsh.aiChat, last 40 messages) — questions alone go to GLM. */
(function () {
  'use strict';

  var HISTORY_KEY = 'jsh.aiChat';
  var HISTORY_MAX = 40;

  function config() {
    var fileCfg = window.JSH_TUTOR_KEY || {};
    var key = fileCfg.key || localStorage.getItem('jsh.tutorKey') || '';
    // kind defaults to 'anthropic' inside tutor-core (GLM Coding Plan subscription)
    return { key: key, kind: fileCfg.kind, model: fileCfg.model, endpoint: fileCfg.endpoint };
  }

  function loadHistory() {
    try {
      var h = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
      return Array.isArray(h) ? h : [];
    } catch (e) { return []; }
  }

  function saveHistory(history) {
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(-HISTORY_MAX))); } catch (e) { /* storage unavailable: chat just won't persist */ }
  }

  function render(main) {
    var app = window.JSH.app;
    var tutor = window.JSH.tutor;
    main.appendChild(app.el('h1', { text: '🤖 Ask Me Anything' }));
    var cfg = config();
    if (!cfg.key) return renderSetup(main, app);

    var course = app.subjects().map(function (s) {
      return { id: s.id, name: s.name, teacher: s.teacher, guide: app.part(s.id, 'guide') };
    });
    var history = loadHistory();
    var panel = app.el('section', { class: 'card' });
    var log = app.el('div', { class: 'tutor-log' });
    var pending = false;

    function bubble(role, text) {
      var cls = role === 'user' ? 'tutor-me' : 'tutor-ai';
      var b = app.el('div', { class: 'bubble ' + cls });
      b.appendChild(app.el('div', { html: app.fmtBody(text) }));
      log.appendChild(b);
      log.scrollTop = log.scrollHeight;
    }

    function greet() {
      bubble('assistant', 'Hi Jana! 👋 I\'m your study AI — ask me anything about **BIOL214 Biochemistry, MEDI212 Pathophysiology, MEDI304 Research Methods or CRLP200 Career-Ready Learning**: explain a topic, quiz me, mark my answers, or build me a practice exam.');
    }

    function send() {
      if (pending) return;
      var ta = document.getElementById('tutor-input');
      var q = ta.value.trim();
      if (!q) return;
      ta.value = '';
      bubble('user', q);
      pending = true;
      var btn = document.getElementById('tutor-ask');
      btn.disabled = true;
      btn.textContent = 'Thinking…';
      tutor.chat(cfg, tutor.buildMessages(course, history, q))
        .then(function (answer) {
          history.push({ role: 'user', content: q }, { role: 'assistant', content: answer });
          saveHistory(history);
          bubble('assistant', answer);
        })
        .catch(function (e) {
          bubble('assistant', '**Could not reach the tutor:** ' + e.message + '\n\nCheck the key in data/tutor-key.js (or tell Pi the error).');
        })
        .then(function () {
          pending = false;
          btn.disabled = false;
          btn.textContent = 'Ask';
        });
    }

    if (history.length) history.forEach(function (m) { bubble(m.role, m.content); });
    else greet();
    panel.appendChild(log);

    var starters = app.el('div', { class: 'tutor-starters' });
    [['quiz', '🎯 Quiz me'], ['mix', '🎲 Mixed practice']].forEach(function (pair) {
      var b = app.el('button', { class: 'button', text: pair[1] });
      b.addEventListener('click', function () {
        var ta = document.getElementById('tutor-input');
        ta.value = tutor.STARTERS[pair[0]];
        ta.focus();
      });
      starters.appendChild(b);
    });
    var clearBtn = app.el('button', { class: 'button danger', text: '🗑 Clear chat' });
    clearBtn.addEventListener('click', function () {
      if (!confirm('Clear the whole conversation on this device?')) return;
      history = [];
      try { localStorage.removeItem(HISTORY_KEY); } catch (e) {}
      log.textContent = '';
      greet();
    });
    starters.appendChild(clearBtn);
    var keyBtn = app.el('button', { class: 'button', text: '🔑 Key' });
    keyBtn.addEventListener('click', function () {
      var k = prompt('GLM API key (type or paste it exactly):', '');
      if (k && k.trim()) {
        try { localStorage.setItem('jsh.tutorKey', k.trim()); } catch (e) {}
        location.reload();
      }
    });
    starters.appendChild(keyBtn);
    panel.appendChild(starters);

    var ta = app.el('textarea', { id: 'tutor-input', class: 'answer', placeholder: 'Type your question… (Enter to send, Shift+Enter for a new line)' });
    ta.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); send(); }
    });
    var ask = app.el('button', { id: 'tutor-ask', class: 'button', text: 'Ask' });
    ask.addEventListener('click', send);
    panel.appendChild(ta);
    panel.appendChild(ask);
    main.appendChild(panel);
    ta.focus();
  }

  function renderSetup(main, app) {
    var w = app.el('div', { class: 'warning' },
      app.el('strong', { text: 'The AI is not switched on yet.' }));
    w.appendChild(app.el('div', { text: 'It needs a GLM API key (a free one works) and then answers questions on every subject. One-time setup:' }));
    w.appendChild(app.el('div', { text: '1. Ask Pi to set up the tutor key — see TUTOR-SETUP.md next to this app.' }));
    w.appendChild(app.el('div', { text: '2. Or paste the family key here to use the AI on this device:' }));
    var input = app.el('input', { type: 'text', class: 'tutor-key', placeholder: 'GLM API key (type or paste it exactly)', autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false' });
    var save = app.el('button', { class: 'button', text: 'Save' });
    save.addEventListener('click', function () {
      if (!input.value.trim()) return;
      localStorage.setItem('jsh.tutorKey', input.value.trim());
      location.reload();
    });
    w.appendChild(app.el('div', {}, input, save));
    w.appendChild(app.el('div', { class: 'muted', text: 'The key stays on this device only. Anyone with it can use the family GLM credits — do not share it.' }));
    main.appendChild(w);
  }

  window.JSH.ui = window.JSH.ui || {};
  window.JSH.ui.ai = { render: render };
})();
