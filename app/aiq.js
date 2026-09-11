/* ✨ AI question generation + storage (family GLM key).
   Pure logic (prompts, JSON extraction, sanitising) is exported for node tests;
   generate() and renderGenerator() touch the browser. */
(function (root, factory) {
  var api = factory();
  root.JSH = root.JSH || {};
  root.JSH.aiq = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof self !== 'undefined' ? self : globalThis, function () {
  'use strict';

  var KEY = 'jsh.aiQ.';
  var MAX_PER_RUN = 25;

  /* ---------- storage ---------- */
  function load(subjectId) {
    try { var a = JSON.parse(localStorage.getItem(KEY + subjectId) || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; }
  }
  function save(subjectId, items) {
    try { localStorage.setItem(KEY + subjectId, JSON.stringify(items)); } catch (e) { /* storage full: keep old set */ }
  }
  function append(subjectId, items) {
    save(subjectId, load(subjectId).concat(items));
  }
  function clear(subjectId) { try { localStorage.removeItem(KEY + subjectId); } catch (e) {} }
  function countFor(subjectId, topicId) {
    return load(subjectId).filter(function (q) { return q.topic === topicId; }).length;
  }
  function merged(subjectId, baseQuiz) { return baseQuiz.concat(load(subjectId)); }

  /* ---------- prompt building (pure) ---------- */
  function buildGenPrompt(subject, topics, type, count) {
    var typeText = type === 'mcq' ? 'MULTIPLE-CHOICE questions (schema A only)'
      : type === 'short' ? 'SHORT-ANSWER questions (schema B only)'
      : type === 'extended' ? 'EXTENDED-RESPONSE questions (schema C only)'
      : 'a MIX of the schemas (mostly A, some B, one C if at least 8 items)';
    var system = 'You are an exam-setter for a university subject. Output a STRICT JSON array and NOTHING else - no markdown fences, no commentary, no trailing commas. Each element must match one schema exactly:\n' +
      'A (mcq): { "id":"aiq-N", "topic":"<topic id from the list>", "type":"mcq", "marks":1, "question":"...", "options":["...","...","...","..."] (exactly 4, plausible distractors), "answer":<0-3>, "explanation":"1-2 sentences why" }\n' +
      'B (short): { "id":"aiq-N", "topic":"<topic id>", "type":"short", "marks":3, "question":"...", "answer":"model answer, 3-6 sentences", "explanation":"what full marks need" }\n' +
      'C (extended): { "id":"aiq-N", "topic":"<topic id>", "type":"extended", "marks":8, "question":"...", "answer":"structured model answer with the marking points", "explanation":"marking guidance" }\n' +
      'Rules: university exam level, factually accurate, self-contained questions (no unseen passages), cover the given topics with varied angles, do not repeat the same stem.';
    var user = 'Subject: ' + (subject.code ? subject.code + ' - ' : '') + subject.name + '\n' +
      'Topics (use these exact ids):\n' + topics.map(function (t) { return '- ' + t.id + ': ' + t.title; }).join('\n') + '\n' +
      'Write ' + count + ' ' + typeText + '. Number the ids aiq-1 to aiq-' + count + '.';
    return { system: system, messages: [{ role: 'user', content: user }] };
  }

  /* ---------- JSON extraction + sanitising (pure) ---------- */
  function extractJson(text) {
    var s = String(text || '').replace(/```json|```/g, '');
    var a = s.indexOf('['), b = s.lastIndexOf(']');
    if (a === -1 || b <= a) throw new Error('AI reply contained no JSON array');
    return JSON.parse(s.slice(a, b + 1));
  }

  function sanitize(items, allowedTopics, subjectId) {
    var out = [];
    var stamp = Date.now().toString(36);
    (Array.isArray(items) ? items : []).forEach(function (raw, idx) {
      if (!raw || typeof raw.question !== 'string' || raw.question.trim().length < 6) return;
      var topic = String(raw.topic || '');
      if (allowedTopics.indexOf(topic) === -1) return;
      var item = { id: subjectId + '-aiq-' + stamp + '-' + idx, topic: topic, ai: true, question: raw.question.trim() };
      if (raw.type === 'mcq') {
        var opts = Array.isArray(raw.options) ? raw.options.map(String) : [];
        if (opts.length < 3) return;
        var ans = raw.answer | 0;
        if (!(ans >= 0 && ans < opts.length)) return;
        item.type = 'mcq'; item.marks = 1; item.options = opts; item.answer = ans;
      } else if (raw.type === 'short' || raw.type === 'extended') {
        if (typeof raw.answer !== 'string' || raw.answer.trim().length < 5) return;
        item.type = raw.type;
        item.marks = Math.max(1, Math.min(10, (raw.marks | 0) || (raw.type === 'short' ? 3 : 8)));
        item.answer = raw.answer.trim();
      } else return;
      if (typeof raw.explanation === 'string' && raw.explanation.trim()) item.explanation = raw.explanation.trim();
      out.push(item);
    });
    return out;
  }

  /* ---------- generation (browser) ---------- */
  function generate(cfg, subject, topics, type, count, fetchImpl) {
    var tutor = (typeof self !== 'undefined' && self.JSH && self.JSH.tutor) || (typeof window !== 'undefined' && window.JSH && window.JSH.tutor);
    var payload = buildGenPrompt(subject, topics, type, count);
    return tutor.chat(cfg, payload, fetchImpl, { maxTokens: 12000 })
      .then(function (text) {
        var items = sanitize(extractJson(text), topics.map(function (t) { return t.id; }), subject.id);
        if (!items.length) throw new Error('AI returned no usable questions - try again');
        append(subject.id, items);
        return items;
      });
  }

  /* ---------- generator UI (browser, embedded into the Practice Quiz page) ---------- */
  function renderGenerator(main, subject, rerender) {
    var app = window.JSH.app;
    var card = app.el('section', { class: 'card' }, app.el('h2', { text: '✨ Generate AI practice questions' }));
    var existing = load(subject.id);

    var chosen = {};
    var guide = app.part(subject.id, 'guide');
    (guide ? guide.topics : []).forEach(function (t) {
      var cb = app.el('input', { type: 'checkbox', id: 'gen-' + t.id });
      cb.addEventListener('change', function () { chosen[t.id] = cb.checked; });
      card.appendChild(app.el('label', { class: 'revised-item' }, cb, app.el('span', { text: ' ' + t.title })));
    });

    var row = app.el('div', { class: 'tutor-starters' });
    var typeSel = app.el('select', { class: 'no-print' });
    [['mixed', 'Mixed'], ['mcq', 'Multiple choice'], ['short', 'Short answer'], ['extended', 'Extended']].forEach(function (p) {
      typeSel.appendChild(app.el('option', { value: p[0] }, p[1]));
    });
    var num = app.el('input', { type: 'number', min: '1', max: String(MAX_PER_RUN), value: '10', class: 'no-print', style: 'width:70px' });
    row.appendChild(app.el('label', {}, ' Type: ', typeSel, ' How many: ', num));
    card.appendChild(row);

    var status = app.el('p', { class: 'muted', text: existing.length ? existing.length + ' AI-generated questions currently in your bank for this subject.' : 'The AI writes fresh questions for the topics you tick - they join your quiz bank permanently (until removed).' });
    card.appendChild(status);

    var genBtn = app.el('button', { class: 'button', text: '✨ Generate with AI' });
    genBtn.addEventListener('click', function () {
      var cfg = window.JSH.ui.ai && window.JSH.ui.ai.getConfig ? window.JSH.ui.ai.getConfig() : null;
      if (!cfg || !cfg.key) {
        var k = prompt('The AI is not switched on on this device yet.\nPaste the family GLM key (one time only):', '');
        if (k && k.trim()) { try { localStorage.setItem('jsh.tutorKey', k.trim()); } catch (e) {} location.reload(); }
        return;
      }
      var tids = Object.keys(chosen).filter(function (t) { return chosen[t]; });
      if (!tids.length) { alert('Tick at least one topic!'); return; }
      var topics = guide.topics.filter(function (t) { return tids.indexOf(t.id) !== -1; });
      var count = Math.max(1, Math.min(MAX_PER_RUN, num.value | 0 || 10));
      genBtn.disabled = true; genBtn.textContent = '✨ Writing ' + count + ' questions…';
      status.textContent = 'This usually takes 20-60 seconds. Keep this page open.';
      generate(cfg, subject, topics, typeSel.value, count)
        .then(function (items) { status.textContent = '✓ Added ' + items.length + ' new questions to your bank.'; rerender(); })
        .catch(function (e) { status.textContent = 'Generation failed: ' + e.message + ' - try fewer questions or try again.'; })
        .then(function () { genBtn.disabled = false; genBtn.textContent = '✨ Generate with AI'; });
    });
    card.appendChild(genBtn);

    if (existing.length) {
      var rm = app.el('button', { class: 'button danger', text: '🗑 Remove all AI questions (' + existing.length + ')' });
      rm.addEventListener('click', function () {
        if (confirm('Remove all ' + existing.length + ' AI-generated questions for this subject? (Your built-in questions stay.)')) {
          clear(subject.id); rerender();
        }
      });
      card.appendChild(rm);
    }
    main.appendChild(card);
  }

  return {
    load: load, append: append, clear: clear, countFor: countFor, merged: merged,
    buildGenPrompt: buildGenPrompt, extractJson: extractJson, sanitize: sanitize,
    generate: generate, renderGenerator: renderGenerator, MAX_PER_RUN: MAX_PER_RUN
  };
});
