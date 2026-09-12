/* AUTO-DISTILLED content — generated automatically by _scripts/auto-distill.js
   from newly downloaded university files (GLM 5.3). Regenerated on every daily sync.
   Merges new topics into the guide, new questions into the bank, new cards into the deck. */
(function (root) {
  var UPDATES = {
    "crlp200": {
      "topics": [],
      "questions": [],
      "cards": [],
      "notes": []
    }
  };
  var d = root.JSH_DATA = root.JSH_DATA || {};
  Object.keys(UPDATES).forEach(function (sid) {
    var u = UPDATES[sid]; var s = d[sid]; if (!s) return;
    if (s.guide && u.topics) u.topics.forEach(function (t) { if (!s.guide.topics.some(function (x) { return x.id === t.id; })) s.guide.topics.push(t); });
    if (s.questions && u.questions) s.questions.quiz = s.questions.quiz.concat(u.questions);
    if (s.flashcards && u.cards) s.flashcards.cards = s.flashcards.cards.concat(u.cards);
    if (s.notes && u.notes) s.notes.summaries = s.notes.summaries.concat(u.notes);
  });
})(typeof self !== 'undefined' ? self : globalThis);
