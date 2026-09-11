/* Tutor core: the one AI zone's prompt building + GLM chat call. Pure logic — no DOM. Testable in node.
   Supports two API styles via config.kind:
   - 'anthropic' (default): BigModel GLM Coding Plan subscription — POST {endpoint}/v1/messages
   - 'openai': standard chat/completions (open.bigmodel.cn or api.z.ai) */
(function (root, factory) {
  var api = factory();
  root.JSH = root.JSH || {};
  root.JSH.tutor = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof self !== 'undefined' ? self : globalThis, function () {
  'use strict';

  var DEFAULTS = {
    anthropic: { endpoint: 'https://open.bigmodel.cn/api/anthropic', model: 'glm-5.3' },
    openai: { endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions', model: 'glm-4-flash' }
  };

  /* One AI zone: course-wide context — all subjects, each block trimmed, total capped.
     Trimming is topic-granular: whole topics stay until the budget is spent, and every topic TITLE is
     always listed so the AI knows the full course map even when details are trimmed. */
  var PER_SUBJECT_CTX_LIMIT = 6000;
  var TOTAL_CTX_LIMIT = 32000;

  var STARTERS = {
    quiz: 'Quiz me: 5 multiple-choice questions, one at a time, from any of my subjects.',
    mix: 'Mix me a practice set: a few multiple-choice and one short-answer question from different topics.'
  };

  function subjectCtx(s, limit) {
    var topics = (s.guide && s.guide.topics) || [];
    var lines = [], used = 0, truncated = false;
    for (var i = 0; i < topics.length; i++) {
      var line = '- ' + topics[i].title + ': ' + (topics[i].keyKnowledge || []).join(' ');
      if (used + line.length > limit && i > 0) { truncated = true; break; }
      lines.push(line);
      used += line.length + 1;
    }
    var ctx = lines.join('\n');
    if (truncated) {
      var rest = topics.slice(lines.length).map(function (t) { return t.title; }).join('; ');
      ctx += '\n(Also in this subject: ' + rest + ')';
    }
    if (ctx.length > limit) ctx = ctx.slice(0, limit) + '…(truncated)';
    return ctx;
  }

  function systemPrompt(course) {
    var blocks = [];
    (course || []).forEach(function (s) {
      var ctx = subjectCtx(s, PER_SUBJECT_CTX_LIMIT);
      blocks.push('## ' + s.name + (s.code ? ' (' + s.code + ', ' + s.session + ')' : '') + (ctx ? '\n' + ctx : ''));
    });
    var courseCtx = blocks.join('\n\n');
    if (courseCtx.length > TOTAL_CTX_LIMIT) courseCtx = courseCtx.slice(0, TOTAL_CTX_LIMIT) + '\n…(truncated)';
    return 'You are Jana\'s study AI — a friendly, patient university tutor. Jana is a Bachelor of Medical and Health Sciences (Dean\'s Scholar) student at the University of Wollongong, Australia, in her Spring 2026 session. ' +
      'You help with ALL of her subjects and anything else about her university work.\n' +
      'Rules:\n' +
      '- Keep answers focused (under 250 words) and clear; university-level depth without waffle.\n' +
      '- Teach, do not write her assignments: guide with steps, reasoning and questions. Never produce text she could submit as her own work — help her build it.\n' +
      '- Stay aligned to her subject topics listed below when relevant. If she asks about material you have not been given (lecture notes, outlines), say so honestly instead of inventing.\n' +
      '- When she asks to be quizzed or wants practice questions: ask ONE item at a time (multiple choice as A/B/C/D unless she asks otherwise), wait for her answer, mark it, explain in one or two sentences, and give a score at the end. She may change anything mid-session — number of questions, type (multiple choice / short answer / extended response), topic, difficulty — or ask you to explain a topic in depth first: adapt naturally.\n' +
      '- End normal explanations with one quick check question so she proves she understood.\n' +
      '- If she asks who you are: you are her study AI, and you know her four university subjects.\n' +
      (courseCtx ? '\nHer subjects and course topics:\n' + courseCtx : '');
  }

  /* Returns { system, messages } for the one AI zone — history trimmed to last 8, question appended. */
  function buildMessages(course, history, question) {
    var msgs = [];
    (history || []).slice(-8).forEach(function (m) { msgs.push({ role: m.role, content: m.content }); });
    msgs.push({ role: 'user', content: String(question || '') });
    return { system: systemPrompt(course), messages: msgs };
  }

  /* Per-question AI marking: strict but encouraging university marker.
     Reply format is parseable: first line 'MARK: n/max', then short feedback. */
  function buildMarkingPrompt(item, studentAnswer) {
    var system = 'You are a fair but strict university marker for a Medical & Health Sciences student. ' +
      'You are given ONE assessment item, its model answer and the student response. ' +
      'Reply in EXACTLY this format:\nMARK: <awarded>/<max>\n' +
      'Then 2-4 sentences: what earned marks, what was missing or wrong, and the single most useful fix. ' +
      'Award partial credit against the model answer; never exceed the maximum; mark the science strictly.';
    var q = 'Question (' + item.marks + ' marks): ' + item.question + '\n';
    if (item.options && item.options.length) {
      q += 'Options: ' + item.options.map(function (o, i) { return String.fromCharCode(65 + i) + ') ' + o; }).join('  ') + '\n';
      q += 'Correct option: ' + String.fromCharCode(65 + item.answer) + '\n';
    } else {
      q += 'Model answer: ' + item.answer + '\n';
    }
    q += '\nStudent response:\n' + (String(studentAnswer || '').trim() || '(no answer written)');
    return { system: system, messages: [{ role: 'user', content: q }] };
  }

  /* Per-question teach-me: she is stuck and asked for help. */
  function buildExplainPrompt(item, studentNote) {
    var system = 'You are a university study AI for a Medical & Health Sciences student who is stuck on ONE practice item. ' +
      'In under 160 words: (1) state the correct answer plainly, (2) explain the underlying concept in clear numbered steps, ' +
      '(3) finish with one quick check question. Stay on this item — no broad lectures.';
    var q = 'Item: ' + item.question + '\n';
    if (item.options && item.options.length) {
      q += 'Options: ' + item.options.map(function (o, i) { return String.fromCharCode(65 + i) + ') ' + o; }).join('  ') + '\n';
      q += 'Correct option: ' + String.fromCharCode(65 + item.answer) + '\n';
    } else {
      q += 'Model answer: ' + item.answer + '\n';
    }
    if (item.explanation) q += 'Course hint: ' + item.explanation + '\n';
    if (studentNote) q += 'Her current attempt or choice: ' + studentNote + '\n';
    return { system: system, messages: [{ role: 'user', content: q }] };
  }

  /* Parse the first 'MARK: n/max' line of an AI marking reply -> awarded number, or null. */
  function parseMark(text, max) {
    var m = String(text || '').match(/MARK:\s*(\d+)\s*(?:\/\s*(\d+))?/i);
    if (!m) return null;
    var awarded = parseInt(m[1], 10);
    var cap = m[2] ? parseInt(m[2], 10) : (typeof max === 'number' ? max : undefined);
    if (typeof cap === 'number' && awarded > cap) awarded = cap;
    if (awarded < 0) awarded = 0;
    return awarded;
  }

  function extractError(data, status) {
    var msg = data && data.error && (data.error.message || data.error.msg);
    if (!msg) msg = 'HTTP ' + status;
    return new Error(msg);
  }

  /* config: { key, kind?, model?, endpoint? }; payload from buildMessages; fetchImpl injectable for tests. */
  function chat(config, payload, fetchImpl) {
    var f = fetchImpl || (typeof fetch !== 'undefined' ? fetch : null);
    if (!f) return Promise.reject(new Error('fetch not available'));
    if (!config || !config.key) return Promise.reject(new Error('No API key configured'));
    var kind = config.kind === 'openai' ? 'openai' : 'anthropic';
    var dflt = DEFAULTS[kind];
    var endpoint = config.endpoint || dflt.endpoint;
    var model = config.model || dflt.model;
    var req;

    if (kind === 'anthropic') {
      req = f(endpoint + '/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': config.key, 'anthropic-version': '2023-06-01' },
        // max effort: thinking enabled with a generous budget — smarter marking and explanations (verified live 2026-09-09)
        body: JSON.stringify({ model: model, max_tokens: 4000, thinking: { type: 'enabled', effort: 'high', budget_tokens: 3000 }, system: payload.system, messages: payload.messages })
      }).then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw extractError(data, res.status);
          var text = ((data && data.content) || [])
            .filter(function (b) { return b.type === 'text'; })
            .map(function (b) { return b.text; }).join('');
          if (!text) throw new Error('Empty reply from GLM');
          return text;
        });
      });
    } else {
      var msgs = [{ role: 'system', content: payload.system }].concat(payload.messages);
      req = f(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + config.key },
        body: JSON.stringify({ model: model, messages: msgs, temperature: 0.6, max_tokens: 600 })
      }).then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw extractError(data, res.status);
          var text = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
          if (!text) throw new Error('Empty reply from GLM');
          return text;
        });
      });
    }
    return req;
  }

  return {
    buildMessages: buildMessages,
    buildMarkingPrompt: buildMarkingPrompt,
    buildExplainPrompt: buildExplainPrompt,
    parseMark: parseMark,
    chat: chat,
    systemPrompt: systemPrompt,
    STARTERS: STARTERS,
    DEFAULTS: DEFAULTS
  };
});
