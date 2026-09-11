/* Flashcards: flip cards with Leitner boxes (1 = due every session, 2 = every 2 days, 3 = weekly).
   Sessions auto-save — navigate away and come back, you resume the same queue where you left it. */
(function () {
  'use strict';
  var CKEY = 'jsh.cardsSession.';

  function loadSession(sid) {
    try { var s = JSON.parse(localStorage.getItem(CKEY + sid) || 'null'); return s && s.ids && s.ids.length ? s : null; } catch (e) { return null; }
  }
  function saveSession(sid, queue, i) {
    try { localStorage.setItem(CKEY + sid, JSON.stringify({ ids: queue.map(function (c) { return c.id; }), i: i, at: Date.now() })); } catch (e) {}
  }
  function clearSession(sid) { try { localStorage.removeItem(CKEY + sid); } catch (e) {} }

  function cardEntry(subjectId, cardId) {
    var app = window.JSH.app;
    var s = app.store.state.subjects[subjectId];
    return s && s.cards ? s.cards[cardId] : undefined;
  }

  function render(main, subject) {
    var app = window.JSH.app;
    var data = app.part(subject.id, 'flashcards');
    main.textContent = '';
    main.appendChild(app.el('h1', { text: '🃏 ' + subject.name + ' — Flashcards' }));
    if (!data) { main.appendChild(app.el('p', { class: 'muted', text: 'Flashcards are on their way.' })); return; }
    var tids = app.topicIds(subject.id);

    // ▶ Resume a saved run?
    var saved = loadSession(subject.id);
    if (saved && saved.i < saved.ids.length) {
      var rc = app.el('section', { class: 'card' }, app.el('h2', { text: '▶ Resume your flashcards' }));
      rc.appendChild(app.el('p', { class: 'muted', text: 'Card ' + (saved.i + 1) + ' of ' + saved.ids.length + ' still to go — continue the same run.' }));
      var res = app.el('button', { class: 'button', text: '▶ Resume' });
      res.addEventListener('click', function () {
        var queue = saved.ids.map(function (id) { return data.cards.filter(function (c) { return c.id === id; })[0]; }).filter(Boolean);
        session(main, subject, queue, saved.i);
      });
      var dis = app.el('button', { class: 'button danger', text: '✕ Discard' });
      dis.addEventListener('click', function () { clearSession(subject.id); render(main, subject); });
      rc.appendChild(res); rc.appendChild(dis);
      main.appendChild(rc);
    }

    var form = app.el('section', { class: 'card' }, app.el('h2', { text: 'Pick a topic' }));
    tids.forEach(function (tid) {
      var cards = data.cards.filter(function (c) { return c.topic === tid; });
      if (!cards.length) return;
      var due = cards.filter(function (c) { return window.JSH.leitner.isDue(cardEntry(subject.id, c.id), Date.now()); }).length;
      var b = app.el('button', { class: 'button', text: app.topicTitle(subject.id, tid) + ' (' + cards.length + ' cards, ' + due + ' due now)' });
      b.addEventListener('click', function () {
        clearSession(subject.id);
        session(main, subject, cards.slice());
      });
      form.appendChild(b);
    });
    var all = app.el('button', { class: 'button', text: 'Mix everything (' + data.cards.length + ' cards)' });
    all.addEventListener('click', function () {
      clearSession(subject.id);
      session(main, subject, data.cards.slice());
    });
    form.appendChild(all);
    main.appendChild(form);
  }

  function session(main, subject, cards, startAt) {
    var app = window.JSH.app;
    var now = Date.now();
    var due = cards.filter(function (c) { return window.JSH.leitner.isDue(cardEntry(subject.id, c.id), now); });
    var rest = cards.filter(function (c) { return !window.JSH.leitner.isDue(cardEntry(subject.id, c.id), now); });
    var queue = due.concat(rest);
    var i = startAt || 0;
    function persist() { saveSession(subject.id, queue, i); }
    persist();
    var flipped = false;
    main.textContent = '';
    main.appendChild(app.el('h1', { text: '🃏 Flashcards — card ' + Math.min(i + 1, queue.length) + ' of ' + queue.length + ' (auto-saved)' }));
    var panel = app.el('section', { class: 'card' });
    main.appendChild(panel);

    function show() {
      persist();
      flipped = false;
      panel.textContent = '';
      if (i >= queue.length) {
        clearSession(subject.id);
        panel.appendChild(app.el('h2', { text: 'Done! 🎉' }));
        panel.appendChild(app.el('a', { href: '#/s/' + subject.id + '/cards', class: 'button' }, 'Back to flashcards'));
        return;
      }
      var card = queue[i];
      var entry = cardEntry(subject.id, card.id);
      var face = app.el('div', { class: 'flashcard', text: card.front });
      face.addEventListener('click', function () {
        if (!flipped) { face.textContent = card.back; flipped = true; }
        else { face.textContent = card.front; flipped = false; }
      });
      panel.appendChild(app.el('p', { class: 'muted', text: 'Card ' + (i + 1) + ' of ' + queue.length + (entry ? ' · box ' + entry.box : ' · new card') + ' — tap the card to flip' }));
      panel.appendChild(face);
      var know = app.el('button', { class: 'button', text: '✓ I knew it' });
      know.addEventListener('click', function () { grade(card, true); });
      var again = app.el('button', { class: 'button danger', text: '↻ Show me again' });
      again.addEventListener('click', function () { grade(card, false); });
      panel.appendChild(app.el('div', {}, know, again));
    }

    function grade(card, knewIt) {
      var entry = cardEntry(subject.id, card.id) || { box: 0 };
      var wasDue = window.JSH.leitner.isDue(cardEntry(subject.id, card.id), Date.now());
      // an early "I knew it" must not inflate the interval — only due cards move up a box
      if (!knewIt || wasDue) {
        var box = window.JSH.leitner.move(entry.box, knewIt);
        var nextDue = knewIt ? window.JSH.leitner.nextDue(box, Date.now()) : Date.now();
        app.store.setCard(subject.id, card.id, box, nextDue);
      }
      if (!knewIt) queue.push(card); // surface it again later in this run
      i += 1;
      persist();
      show();
    }

    show();
  }

  window.JSH.ui = window.JSH.ui || {};
  window.JSH.ui.flashcards = { render: render };
})();
