const practiceData = require('../../data/practice.js');
const { prepareFillSegments, gradeExam } = require('../../utils/score.js');

function buildOptionList(question) {
  return Object.keys(question.options || {}).map((key) => ({
    key,
    label: question.options[key]
  }));
}

function enrichQuestion(question, answers, submitted) {
  const userAnswer = answers[question.id];
  const item = {
    ...question,
    optionList: buildOptionList(question)
  };

  if (question.type === 'fill') {
    item.segments = prepareFillSegments(
      question.code,
      question.blanks,
      userAnswer || [],
      submitted
    );
  }

  if (question.type === 'multiple') {
    item.selectedMap = {};
    (userAnswer || []).forEach((key) => {
      item.selectedMap[key] = true;
    });
  }

  return item;
}

Page({
  data: {
    title: '',
    mode: 'all',
    chapterCode: '',
    submitted: false,
    questions: [],
    answers: {},
    progressText: '',
    answeredCount: 0
  },

  onLoad(options) {
    const mode = options.mode || 'all';
    const chapterCode = options.code || '';
    const title = decodeURIComponent(options.title || '练习');

    wx.setNavigationBarTitle({ title });

    let questions = practiceData.quiz.slice();
    if (mode === 'chapter' && chapterCode) {
      questions = questions.filter((q) => q.taskCode === chapterCode);
    }

    this.setData({
      title,
      mode,
      chapterCode,
      questions: questions.map((q) => enrichQuestion(q, {}, false)),
      progressText: '0 / ' + questions.length
    });
  },

  refreshQuestions(submitted) {
    const { questions, answers } = this.data;
    const answeredCount = questions.filter((q) => this.hasAnswer(q, answers[q.id])).length;

    this.setData({
      submitted,
      questions: questions.map((q) => enrichQuestion(q, answers, submitted)),
      answeredCount,
      progressText: answeredCount + ' / ' + questions.length
    });
  },

  hasAnswer(question, userAnswer) {
    if (question.type === 'fill') {
      return (userAnswer || []).some(Boolean);
    }
    if (question.type === 'multiple') {
      return !!(userAnswer && userAnswer.length);
    }
    return !!userAnswer;
  },

  onFillInput(e) {
    if (this.data.submitted) return;

    const { qid, index } = e.currentTarget.dataset;
    const value = e.detail.value;
    const answers = { ...this.data.answers };
    const current = (answers[qid] || []).slice();
    current[index] = value;
    answers[qid] = current;

    this.setData({ answers }, () => this.refreshQuestions(false));
  },

  onSingleSelect(e) {
    if (this.data.submitted) return;

    const { qid, value } = e.currentTarget.dataset;
    const answers = { ...this.data.answers, [qid]: value };
    this.setData({ answers }, () => this.refreshQuestions(false));
  },

  onMultipleToggle(e) {
    if (this.data.submitted) return;

    const { qid, value } = e.currentTarget.dataset;
    const answers = { ...this.data.answers };
    const current = (answers[qid] || []).slice();
    const idx = current.indexOf(value);

    if (idx >= 0) {
      current.splice(idx, 1);
    } else {
      current.push(value);
      current.sort();
    }

    answers[qid] = current;
    this.setData({ answers }, () => this.refreshQuestions(false));
  },

  submitQuiz() {
    const { questions, answers, submitted } = this.data;
    if (submitted) return;

    const unanswered = questions.filter((q) => !this.hasAnswer(q, answers[q.id])).length;
    const doSubmit = () => {
      const result = gradeExam(questions, answers);
      wx.setStorageSync('last_quiz_result', {
        title: this.data.title,
        mode: this.data.mode,
        chapterCode: this.data.chapterCode,
        result,
        answers
      });
      this.refreshQuestions(true);
      wx.navigateTo({ url: '/pages/result/result' });
    };

    if (unanswered > 0) {
      wx.showModal({
        title: '还有未作答题目',
        content: '还有 ' + unanswered + ' 题未填写，确定提交吗？',
        success: (res) => {
          if (res.confirm) doSubmit();
        }
      });
      return;
    }

    doSubmit();
  },

  retryQuiz() {
    this.setData({ answers: {}, submitted: false }, () => this.refreshQuestions(false));
  }
});
