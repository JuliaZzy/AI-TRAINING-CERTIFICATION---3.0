const { getQuestions, getQuestionById } = require('../../utils/questions.js');
const { addRecord } = require('../../utils/wrongbook.js');
const { gradeQuestion } = require('../../utils/score.js');

function buildOptionList(question) {
  if (!question.options) return [];
  return Object.keys(question.options).map((key) => ({
    key,
    label: question.options[key]
  }));
}

Page({
  data: {
    type: 'single',
    questions: [],
    currentIndex: 0,
    current: null,
    optionList: [],
    selected: '',
    selectedList: [],
    selectedMap: {},
    progress: 0,
    progressText: '',
    hintVisible: false,
    submitted: false,
    feedback: null,
    showModal: false
  },

  onLoad(options) {
    const type = options.type || 'single';
    const questions = getQuestions(type);
    let currentIndex = parseInt(options.index || '0', 10);

    if (options.id) {
      const idx = questions.findIndex((q) => q.id === options.id);
      if (idx >= 0) currentIndex = idx;
    }

    this.setData({
      type,
      questions,
      currentIndex: Math.min(Math.max(currentIndex, 0), Math.max(questions.length - 1, 0))
    }, () => this.loadCurrent());
  },

  loadCurrent() {
    const { questions, currentIndex } = this.data;
    const current = questions[currentIndex];
    if (!current) return;

    const saved = wx.getStorageSync('questmind_answers_' + current.id) || {};

    this.setData({
      current,
      optionList: buildOptionList(current),
      selected: saved.selected || '',
      selectedList: saved.selectedList || [],
      selectedMap: saved.selectedMap || {},
      progress: questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0,
      progressText: 'Question ' + (currentIndex + 1) + ' of ' + questions.length,
      canGoPrev: currentIndex > 0,
      canGoNext: currentIndex < questions.length - 1,
      hintVisible: false,
      submitted: false,
      feedback: null,
      showModal: false
    });
  },

  onBack() {
    wx.navigateBack({ delta: 1 });
  },

  onSkip() {
    this.goNext();
  },

  toggleHint() {
    this.setData({ hintVisible: !this.data.hintVisible });
  },

  onSingleSelect(e) {
    if (this.data.submitted) return;
    const value = e.currentTarget.dataset.value;
    this.setData({ selected: value });
  },

  onJudgeSelect(e) {
    if (this.data.submitted) return;
    const value = e.currentTarget.dataset.value;
    this.setData({ selected: value });
  },

  onMultipleToggle(e) {
    if (this.data.submitted) return;
    const value = e.currentTarget.dataset.value;
    const selectedList = this.data.selectedList.slice();
    const idx = selectedList.indexOf(value);
    if (idx >= 0) {
      selectedList.splice(idx, 1);
    } else {
      selectedList.push(value);
      selectedList.sort();
    }
    const selectedMap = {};
    selectedList.forEach((key) => { selectedMap[key] = true; });
    this.setData({ selectedList, selectedMap });
  },

  hasAnswer() {
    const { type, selected, selectedList } = this.data;
    if (type === 'multiple') return selectedList.length > 0;
    return !!selected;
  },

  getUserAnswer() {
    const { type, selected, selectedList } = this.data;
    if (type === 'multiple') return selectedList.slice();
    return selected;
  },

  submitAnswer() {
    if (!this.hasAnswer()) {
      wx.showToast({ title: '请先选择答案', icon: 'none' });
      return;
    }

    const { current, type } = this.data;
    const userAnswer = this.getUserAnswer();
    const question = {
      ...current,
      type: type === 'judge' ? 'judge' : current.type,
      score: 1
    };

    wx.setStorageSync('questmind_answers_' + current.id, {
      selected: this.data.selected,
      selectedList: this.data.selectedList,
      selectedMap: this.data.selectedMap
    });

    const result = gradeQuestion(question, userAnswer);
    const solved = wx.getStorageSync('questmind_solved_count') || 0;
    wx.setStorageSync('questmind_solved_count', solved + 1);

    let feedback = {
      title: '已提交',
      desc: '参考答案待更新，稍后可查看解析。',
      positive: true
    };

    if (current.answer != null) {
      if (result.correct) {
        feedback = {
          title: '太棒了!',
          desc: '你答对了这道题。',
          positive: true
        };
      } else {
        feedback = {
          title: '继续加油',
          desc: '这题已加入错题本，可稍后复习。',
          positive: false
        };
        addRecord({
          id: current.id + '_' + type,
          type,
          questionId: current.id,
          text: current.text,
          mastery: 'weak'
        });
      }
    }

    this.setData({
      submitted: true,
      feedback,
      showModal: true
    });
  },

  closeModal() {
    this.setData({ showModal: false });
    this.goNext();
  },

  goPrev() {
    if (this.data.currentIndex <= 0) return;
    this.setData({ currentIndex: this.data.currentIndex - 1 }, () => this.loadCurrent());
  },

  goNext() {
    if (this.data.currentIndex >= this.data.questions.length - 1) {
      wx.showToast({ title: '已是最后一题', icon: 'none' });
      return;
    }
    this.setData({ currentIndex: this.data.currentIndex + 1 }, () => this.loadCurrent());
  }
});
