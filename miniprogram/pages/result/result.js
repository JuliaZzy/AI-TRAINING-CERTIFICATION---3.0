Page({
  data: {
    title: '',
    totalScore: 0,
    maxScore: 0,
    correctCount: 0,
    wrongCount: 0,
    unansweredCount: 0,
    totalCount: 0,
    details: []
  },

  onShow() {
    const payload = wx.getStorageSync('last_quiz_result');
    if (!payload || !payload.result) {
      wx.showToast({ title: '暂无成绩', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 800);
      return;
    }

    const { title, result } = payload;
    wx.setNavigationBarTitle({ title: '练习结果' });

    this.setData({
      title,
      totalScore: result.totalScore,
      maxScore: result.maxScore,
      correctCount: result.correctCount,
      wrongCount: result.wrongCount,
      unansweredCount: result.unansweredCount,
      totalCount: result.totalCount,
      details: result.details.map((item) => ({
        ...item,
        statusText: item.unanswered ? '未作答' : item.correct ? '正确' : '错误',
        statusClass: item.unanswered ? 'pending' : item.correct ? 'ok' : 'bad',
        expectedText: Array.isArray(item.expected) ? item.expected.join(' / ') : String(item.expected || '')
      }))
    });
  },

  backHome() {
    wx.reLaunch({ url: '/pages/index/index' });
  },

  retrySame() {
    wx.navigateBack();
  }
});
