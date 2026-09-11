/* Student progress store. Browser passes localStorage; tests pass a fake. */
(function (root, factory) {
  var api = factory();
  root.JSH = root.JSH || {};
  Object.assign(root.JSH, api);
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof self !== 'undefined' ? self : globalThis, function () {
  'use strict';

  var KEY = 'jsh.progress.v1';

  function fresh() { return { subjects: {} }; }

  function migrate(raw) {
    var s = raw && typeof raw === 'object' && raw.subjects ? raw : fresh();
    Object.keys(s.subjects).forEach(function (sid) {
      var sub = s.subjects[sid];
      sub.topics = sub.topics || {};
      sub.cards = sub.cards || {};
      sub.exams = Array.isArray(sub.exams) ? sub.exams : [];
    });
    return s;
  }

  function createStore(storage) {
    function load() {
      var raw = storage.getItem(KEY);
      if (!raw) return fresh();
      try { return migrate(JSON.parse(raw)); } catch (e) { return fresh(); }
    }
    var state = load();
    function save() { storage.setItem(KEY, JSON.stringify(state)); }
    function sub(id) {
      state.subjects[id] = state.subjects[id] || { topics: {}, cards: {}, exams: [] };
      var s = state.subjects[id];
      s.topics = s.topics || {}; s.cards = s.cards || {}; s.exams = s.exams || [];
      return s;
    }
    function topic(id, tid) {
      var s = sub(id);
      s.topics[tid] = s.topics[tid] || { quizBest: 0, attempts: 0, revised: false };
      return s.topics[tid];
    }
    return {
      state: state,
      recordQuiz: function (subjectId, topicId, pct) {
        var t = topic(subjectId, topicId);
        t.attempts += 1;
        if (pct > t.quizBest) t.quizBest = pct;
        save();
      },
      setRevised: function (subjectId, topicId, value) {
        topic(subjectId, topicId).revised = !!value;
        save();
      },
      setCard: function (subjectId, cardId, box, nextDue) {
        sub(subjectId).cards[cardId] = { box: box, nextDue: nextDue };
        save();
      },
      recordExam: function (subjectId, paperId, pct) {
        sub(subjectId).exams.push({ paperId: paperId, pct: pct, date: new Date().toISOString() });
        save();
      },
      readiness: function (subjectId, topicIds) {
        if (!topicIds || !topicIds.length) return 0;
        var sum = 0;
        topicIds.forEach(function (tid) {
          var t = state.subjects[subjectId] && state.subjects[subjectId].topics[tid];
          sum += t ? t.quizBest : 0;
        });
        return Math.round(sum / topicIds.length);
      },
      weakTopics: function (subjectId, topicIds) {
        return (topicIds || []).filter(function (tid) {
          var t = state.subjects[subjectId] && state.subjects[subjectId].topics[tid];
          return t && t.attempts > 0 && t.quizBest < 60;
        });
      },
      exportJson: function () {
        return JSON.stringify({ exportedAt: new Date().toISOString(), progress: state }, null, 2);
      },
      importJson: function (text) {
        var parsed = JSON.parse(text);
        if (!parsed || !parsed.progress || !parsed.progress.subjects) {
          throw new Error('Not a Jana Study Hub backup');
        }
        state = migrate(parsed.progress);
        this.state = state;
        save();
      },
      erase: function () {
        storage.removeItem(KEY);
        state = fresh();
        this.state = state;
      }
    };
  }

  return { createStore: createStore, KEY: KEY };
});
