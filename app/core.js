/* Pure logic shared by quiz, flashcards and exam mode. No DOM here. */
(function (root, factory) {
  var api = factory();
  root.JSH = root.JSH || {};
  Object.assign(root.JSH, api);
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof self !== 'undefined' ? self : globalThis, function () {
  'use strict';

  function gradeQuiz(questions, answers) {
    answers = answers || {};
    var earned = 0, total = 0, per = [];
    (questions || []).forEach(function (q) {
      total += q.marks;
      var a = answers[q.id] || {};
      var correct = false, awarded = 0;
      if (q.type === 'mcq') {
        correct = a.selected === q.answer;
        awarded = correct ? q.marks : 0;
      } else {
        awarded = Math.max(0, Math.min(q.marks, a.awarded | 0));
        correct = awarded === q.marks;
      }
      earned += awarded;
      per.push({ id: q.id, awarded: awarded, max: q.marks, correct: correct });
    });
    return { earned: earned, total: total, pct: total ? Math.round((100 * earned) / total) : 0, per: per };
  }

  function shuffle(arr, rng) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor((rng ? rng() : Math.random()) * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var SECTION_META = {
    mcq: { name: 'Section I — Multiple Choice', instructions: 'Choose the best answer for each question.' },
    short: { name: 'Section II — Short Answer', instructions: 'Answer in the spaces provided. Show your working. Marks are indicated.' },
    extended: { name: 'Section III — Extended Response', instructions: 'Answer in full sentences. Marks are indicated for each part.' }
  };

  function buildPaper(bank, options, rng) {
    options = options || {};
    var wanted = { mcq: options.mcq | 0, short: options.short | 0, extended: options.extended | 0 };
    var pool = (bank || []).slice();
    if (options.topics && options.topics.length) {
      pool = pool.filter(function (q) { return options.topics.indexOf(q.topic) !== -1; });
    }
    var sections = [];
    ['mcq', 'short', 'extended'].forEach(function (type) {
      if (!wanted[type]) return;
      var picked = shuffle(pool.filter(function (q) { return q.type === type; }), rng).slice(0, wanted[type]);
      if (!picked.length) return;
      var marks = picked.reduce(function (s, q) { return s + q.marks; }, 0);
      sections.push({
        name: SECTION_META[type].name,
        marks: marks,
        instructions: SECTION_META[type].instructions,
        questions: picked
      });
    });
    var totalMarks = sections.reduce(function (s, sec) { return s + sec.marks; }, 0);
    return { sections: sections, totalMarks: totalMarks };
  }

  var DAY = 24 * 60 * 60 * 1000;
  var leitner = {
    intervalsDays: [0, 2, 7],
    move: function (box, knewIt) {
      if (knewIt) return Math.min(3, (box || 0) + 1);
      return 1;
    },
    nextDue: function (box, now) {
      return now + this.intervalsDays[box - 1] * DAY;
    },
    isDue: function (entry, now) {
      return !entry || !entry.nextDue || entry.nextDue <= now;
    }
  };

  return { gradeQuiz: gradeQuiz, buildPaper: buildPaper, leitner: leitner };
});
