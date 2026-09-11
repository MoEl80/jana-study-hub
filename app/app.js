/* Jana Study Hub — boot, router, sidebar, dashboard. Zone UIs live in quiz.js/flashcards.js/exam.js. */
(function () {
  'use strict';
  var app = {
    store: null,
    el: function (tag, attrs) {
      var node = document.createElement(tag);
      attrs = attrs || {};
      Object.keys(attrs).forEach(function (k) {
        if (k === 'text') node.textContent = attrs[k];
        else if (k === 'html') node.innerHTML = attrs[k];
        else if (k.slice(0, 2) === 'on') node.addEventListener(k.slice(2), attrs[k]);
        else node.setAttribute(k, attrs[k]);
      });
      for (var i = 2; i < arguments.length; i++) {
        var c = arguments[i];
        if (c === null || c === undefined) continue;
        node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      }
      return node;
    },
    subjects: function () { return window.JSH_SUBJECTS || []; },
    part: function (subjectId, name) {
      var s = (window.JSH_DATA || {})[subjectId];
      return s ? s[name] || null : null;
    },
    topicIds: function (subjectId) {
      var g = this.part(subjectId, 'guide');
      return g && g.topics ? g.topics.map(function (t) { return t.id; }) : [];
    },
    topicTitle: function (subjectId, topicId) {
      var g = this.part(subjectId, 'guide');
      if (!g) return topicId;
      var t = g.topics.filter(function (x) { return x.id === topicId; })[0];
      return t ? t.title : topicId;
    },
    goto: function (hash) { location.hash = hash; },
    esc: function (s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },
    fmtBody: function (text) {
      return String(text).split(/\n\n+/).map(function (para) {
        var lines = app.esc(para).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').split('\n');
        var chunks = [], list = [];
        function flushList() {
          if (list.length) { chunks.push('<ul>' + list.join('') + '</ul>'); list = []; }
        }
        lines.forEach(function (line) {
          if (/^- /.test(line)) { list.push('<li>' + line.slice(2) + '</li>'); return; }
          flushList();
          chunks.push(line);
        });
        flushList();
        return '<p>' + chunks.join('<br>') + '</p>';
      }).join('');
    }
  };

  function loadWarnings() {
    var out = (window.__JSH_ERRORS || []).map(function (f) {
      return 'File failed to load: ' + f;
    });
    app.subjects().forEach(function (s) {
      ['guide', 'notes', 'flashcards', 'questions'].forEach(function (p) {
        if (!app.part(s.id, p)) out.push(s.name + ': ' + p + ' failed to load');
      });
    });
    return out;
  }

  function zoneLinks(subject, active) {
    var zones = [
      ['guide', '📖 Study Guide'], ['notes', '📚 Notes & Resources'], ['cards', '🃏 Flashcards'],
      ['quiz', '❓ Practice Quiz'], ['exam', '🎓 Exam Mode']
    ];
    return zones.map(function (z) {
      var href = '#/s/' + subject.id + '/' + z[0];
      return app.el('a', { href: href, class: 'zone-link' + (active === z[0] ? ' active' : '') }, z[1]);
    });
  }

  function renderSidebar(hash) {
    var sb = document.getElementById('sidebar');
    sb.textContent = '';
    var m = hash.match(/^#\/s\/([a-z0-9-]+)\/([a-z]+)$/);
    var isAi = /^#\/ai/.test(hash);
    sb.appendChild(app.el('a', { href: '#/dashboard', class: 'home-link' + (!m && !isAi ? ' active' : '') }, '🏠 Dashboard'));
    sb.appendChild(app.el('a', { href: '#/ai', class: 'home-link' + (isAi ? ' active' : '') }, '🤖 Ask Me Anything'));
    app.subjects().forEach(function (s) {
      var isCurrent = m && m[1] === s.id;
      var box = app.el('div', { class: 'subject-nav' });
      box.style.borderLeftColor = s.colour;
      box.appendChild(app.el('div', { class: 'subject-title' }, s.icon + ' ' + s.name));
      if (isCurrent) zoneLinks(s, m[2]).forEach(function (z) { box.appendChild(z); });
      else box.appendChild(app.el('a', { href: '#/s/' + s.id + '/guide', class: 'zone-link' }, 'Open subject →'));
      sb.appendChild(box);
    });
  }

  function bar(pct, colour) {
    return app.el('div', { class: 'bar' },
      app.el('div', { class: 'bar-fill', style: 'width:' + pct + '%;background:' + colour }, ''));
  }

  function renderDashboard(main) {
    main.appendChild(app.el('h1', { text: '🏠 Dashboard' }));
    var warns = loadWarnings();
    if (warns.length) {
      var w = app.el('div', { class: 'warning' }, app.el('strong', { text: 'Some content did not load:' }));
      warns.forEach(function (msg) { w.appendChild(app.el('div', { text: '• ' + msg })); });
      main.appendChild(w);
    }
    app.subjects().forEach(function (s) {
      var tids = app.topicIds(s.id);
      var ready = app.store.readiness(s.id, tids);
      var weak = app.store.weakTopics(s.id, tids);
      var g = app.part(s.id, 'guide');
      var q = app.part(s.id, 'questions');
      var card = app.el('section', { class: 'card' });
      card.appendChild(app.el('h2', { text: s.icon + ' ' + s.name }));
      card.appendChild(app.el('div', { class: 'muted', text: (g ? g.topics.length + ' topics' : 'study guide coming') + (q ? ' · ' + q.quiz.length + ' quiz questions · ' + q.papers.length + ' practice papers' : '') }));
      card.appendChild(bar(ready, s.colour));
      card.appendChild(app.el('div', { class: 'muted', text: 'Readiness ' + ready + '%' }));
      if (weak.length) {
        card.appendChild(app.el('div', { class: 'weak', text: '⚠ Needs work: ' + weak.map(function (t) { return app.topicTitle(s.id, t); }).join(', ') }));
      }
      if (g) {
        var rev = app.el('div', { class: 'revised-list' });
        g.topics.forEach(function (t) {
          var rec = app.store.state.subjects[s.id] && app.store.state.subjects[s.id].topics[t.id];
          var cb = app.el('input', { type: 'checkbox' });
          cb.checked = !!(rec && rec.revised);
          cb.addEventListener('change', function () { app.store.setRevised(s.id, t.id, cb.checked); });
          rev.appendChild(app.el('label', { class: 'revised-item' }, cb, app.el('span', { text: ' ' + t.title + ' — revised ✓' })));
        });
        card.appendChild(app.el('h3', { text: 'Revision checklist' }));
        card.appendChild(rev);
      }
      card.appendChild(app.el('a', { href: '#/s/' + s.id + '/guide', class: 'button' }, 'Open ' + s.name + ' →'));
      main.appendChild(card);
    });
    var tools = app.el('section', { class: 'card' }, app.el('h2', { text: 'Backup' }));
    var exportBtn = app.el('button', { class: 'button', text: '⬇ Export progress backup' });
    exportBtn.addEventListener('click', function () {
      var blob = new Blob([app.store.exportJson()], { type: 'application/json' });
      var a = app.el('a', { href: URL.createObjectURL(blob), download: 'jsh-backup-' + new Date().toISOString().slice(0, 10) + '.json' });
      document.body.appendChild(a); a.click(); a.remove();
    });
    var file = app.el('input', { type: 'file', accept: '.json', class: 'no-print' });
    file.style.display = 'none';
    var importBtn = app.el('button', { class: 'button', text: '⬆ Restore backup' });
    importBtn.addEventListener('click', function () { file.click(); });
    file.addEventListener('change', function () {
      var f = file.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          app.store.importJson(String(reader.result));
          route();
          alert('Backup restored ✓');
        } catch (e) { alert('Could not restore: ' + e.message); }
      };
      reader.readAsText(f);
    });
    var eraseBtn = app.el('button', { class: 'button danger', text: 'Erase all progress' });
    eraseBtn.addEventListener('click', function () {
      if (confirm('Erase ALL quiz scores, exam results and flashcard boxes? This cannot be undone.')) {
        app.store.erase();
        route();
      }
    });
    tools.appendChild(exportBtn); tools.appendChild(importBtn); tools.appendChild(file); tools.appendChild(eraseBtn);
    main.appendChild(tools);
  }

  function renderGuide(main, subject) {
    var g = app.part(subject.id, 'guide');
    main.appendChild(app.el('h1', { text: subject.icon + ' ' + subject.name + ' — Study Guide' }));
    if (!g) { main.appendChild(app.el('p', { class: 'muted', text: 'Study guide is on its way.' })); return; }
    main.appendChild(app.el('p', { class: 'muted', text: 'Aligned to ' + g.syllabus }));
    g.topics.forEach(function (t) {
      var card = app.el('section', { class: 'card', id: 'topic-' + t.id });
      card.appendChild(app.el('h2', { text: t.title }));
      card.appendChild(app.el('p', { class: 'muted', text: 'Outcomes: ' + t.outcomes.join(', ') }));
      card.appendChild(app.el('h3', { text: 'Key knowledge' }));
      var ul = app.el('ul');
      t.keyKnowledge.forEach(function (k) { ul.appendChild(app.el('li', { text: k })); });
      card.appendChild(ul);
      card.appendChild(app.el('h3', { text: 'Key terms' }));
      var dl = app.el('dl', { class: 'terms' });
      t.keyTerms.forEach(function (kt) {
        dl.appendChild(app.el('dt', { text: kt.term }));
        dl.appendChild(app.el('dd', { text: kt.definition }));
      });
      card.appendChild(dl);
      (t.workedExamples || []).forEach(function (w, i) {
        card.appendChild(app.el('h3', { text: 'Worked example ' + (i + 1) }));
        card.appendChild(app.el('p', { text: w.prompt }));
        var ol = app.el('ol');
        w.steps.forEach(function (st) { ol.appendChild(app.el('li', { text: st })); });
        card.appendChild(ol);
        card.appendChild(app.el('p', { html: '<b>Answer:</b> ' + app.esc(w.answer) }));
      });
      card.appendChild(app.el('h3', { text: 'What exams ask about this' }));
      var ef = app.el('ul');
      t.examFocus.forEach(function (e) { ef.appendChild(app.el('li', { text: e })); });
      card.appendChild(ef);
      main.appendChild(card);
    });
  }

  function renderNotes(main, subject) {
    var n = app.part(subject.id, 'notes');
    main.appendChild(app.el('h1', { text: subject.icon + ' ' + subject.name + ' — Notes & Resources' }));
    if (!n) { main.appendChild(app.el('p', { class: 'muted', text: 'Notes are on their way.' })); return; }
    if (!n.summaries.length && !n.links.length) {
      main.appendChild(app.el('p', { class: 'muted', text: 'No classroom material integrated yet. Drop files into the _inbox folder and they will show up here.' }));
    }
    n.summaries.forEach(function (s) {
      var card = app.el('section', { class: 'card' });
      card.appendChild(app.el('h2', { text: s.title }));
      card.appendChild(app.el('p', { class: 'muted', text: 'Source: ' + s.source + ' · added ' + s.added }));
      card.appendChild(app.el('div', { html: app.fmtBody(s.body) }));
      if (s.topics && s.topics.length) {
        card.appendChild(app.el('p', { class: 'muted', text: 'Topics: ' + s.topics.map(function (t) { return app.topicTitle(subject.id, t); }).join(', ') }));
      }
      main.appendChild(card);
    });
    if (n.links.length) {
      main.appendChild(app.el('h2', { text: 'Original files' }));
      var ul = app.el('ul');
      n.links.forEach(function (l) { ul.appendChild(app.el('li', {}, app.el('a', { href: l.href, target: '_blank', rel: 'noopener' }, l.title))); });
      main.appendChild(ul);
    }
  }

  function route() {
    var hash = location.hash || '#/dashboard';
    // One-time setup link: ...#/key/<encoded key> — save the key on this device, then strip it
    // from the address bar and history. Never sent to any server (it's a URL fragment).
    var km = hash.match(/^#\/key\/(.+)$/);
    if (km) {
      try { localStorage.setItem('jsh.tutorKey', decodeURIComponent(km[1])); } catch (e) {}
      try { history.replaceState(null, '', location.pathname + location.search + '#/ai'); hash = '#/ai'; }
      catch (e) { location.hash = '#/ai'; return; }  // fires hashchange, which re-runs route()
    }
    renderSidebar(hash);
    var main = document.getElementById('main');
    main.textContent = '';
    document.title = 'Jana Study Hub';
    if (/^#\/ai/.test(hash)) {
      document.title = 'Ask Me Anything — Jana Study Hub';
      window.JSH.ui.ai.render(main);
      window.scrollTo(0, 0);
      return;
    }
    var m = hash.match(/^#\/s\/([a-z0-9-]+)\/([a-z]+)$/);
    if (!m) { renderDashboard(main); return; }
    if (m[2] === 'tutor') { location.hash = '#/ai'; return; }
    var subject = app.subjects().filter(function (x) { return x.id === m[1]; })[0];
    if (!subject) { renderDashboard(main); return; }
    document.title = subject.name + ' — Jana Study Hub';
    if (m[2] === 'guide') renderGuide(main, subject);
    else if (m[2] === 'notes') renderNotes(main, subject);
    else if (m[2] === 'cards') window.JSH.ui.flashcards.render(main, subject);
    else if (m[2] === 'quiz') window.JSH.ui.quiz.render(main, subject);
    else if (m[2] === 'exam') window.JSH.ui.exam.render(main, subject);
    else renderDashboard(main);
    window.scrollTo(0, 0);
  }

  window.JSH.app = app;
  window.JSH.ui = window.JSH.ui || {};
  window.addEventListener('DOMContentLoaded', function () {
    app.store = window.JSH.createStore(window.localStorage);
    window.addEventListener('hashchange', route);
    route();
  });
})();
