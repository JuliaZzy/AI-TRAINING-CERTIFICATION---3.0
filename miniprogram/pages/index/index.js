const practiceData = require('../../data/practice.js');
const { getChapters } = require('../../utils/score.js');

Page({
  data: {
    title: practiceData.title,
    description: practiceData.description,
    totalQuestions: practiceData.quiz.length,
    totalScore: practiceData.quiz.reduce((sum, q) => sum + q.score, 0),
    chapters: []
  },

  onLoad() {
    this.setData({
      chapters: getChapters(practiceData)
    });
  },

  startAll() {
    wx.navigateTo({
      url: '/pages/quiz/quiz?mode=all&title=' + encodeURIComponent('全部练习')
    });
  },

  startChapter(e) {
    const code = e.currentTarget.dataset.code;
    const chapter = this.data.chapters.find((item) => item.code === code);
    wx.navigateTo({
      url: '/pages/quiz/quiz?mode=chapter&code=' + code + '&title=' + encodeURIComponent(chapter.name)
    });
  }
});
