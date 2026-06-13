const { readAll, getStats, formatTime } = require('../../utils/wrongbook.js');

Page({
  data: {
    stats: {
      total: 0,
      judge: 0,
      single: 0,
      multiple: 0,
      operation: 0,
      weak: 0,
      medium: 0
    },
    records: [],
    weekNew: 0
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 });
    }
    this.refresh();
  },

  refresh() {
    const list = readAll();
    const stats = getStats();
    const weekAgo = Date.now() - 7 * 86400000;
    const weekNew = list.filter((item) => item.updatedAt >= weekAgo).length;

    this.setData({
      stats,
      weekNew,
      records: list.slice(0, 8).map((item) => ({
        ...item,
        timeText: formatTime(item.updatedAt),
        typeLabel: this.typeLabel(item.type)
      }))
    });
  },

  typeLabel(type) {
    const map = {
      judge: 'Judgment',
      single: 'Choice',
      multiple: 'Choice',
      operation: 'Operation'
    };
    return map[type] || type;
  },

  startPractice() {
    if (!this.data.records.length) {
      wx.showToast({ title: '暂无错题记录', icon: 'none' });
      return;
    }
    const first = this.data.records[0];
    if (first.type === 'operation') {
      wx.navigateTo({ url: '/pages/operation/operation?id=' + first.questionId });
    } else {
      wx.navigateTo({
        url: '/pages/quiz/quiz?type=' + first.type + '&id=' + first.questionId
      });
    }
  },

  openRecord(e) {
    const item = e.currentTarget.dataset.item;
    if (item.type === 'operation') {
      wx.navigateTo({ url: '/pages/operation/operation?id=' + item.questionId });
    } else {
      wx.navigateTo({
        url: '/pages/quiz/quiz?type=' + item.type + '&id=' + item.questionId
      });
    }
  },

  onExportTap() {
    wx.showToast({ title: '导出错题即将上线', icon: 'none' });
  }
});
