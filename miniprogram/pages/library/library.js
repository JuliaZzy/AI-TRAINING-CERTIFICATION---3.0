const { meta } = require('../../utils/questions.js');

Page({
  data: {
    meta,
    search: '',
    types: [],
    dailyQuest: {
      title: '人工智能训练师三级',
      desc: '940 题全覆盖练习',
      progress: 0
    }
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 });
    }

    const solved = wx.getStorageSync('questmind_solved_count') || 0;
    const progress = Math.min(100, Math.round((solved / meta.counts.total) * 100));

    const typeOrder = ['judge', 'single', 'multiple', 'operation'];
    const types = typeOrder
      .map((key) => meta.types.find((item) => item.key === key))
      .filter(Boolean)
      .map((item) => ({
        ...item,
        count: meta.counts[item.key]
      }));

    this.setData({
      types,
      dailyQuest: {
        title: '人工智能训练师三级',
        desc: meta.counts.total + ' 题全覆盖练习',
        progress
      }
    });
  },

  onSearchInput(e) {
    this.setData({ search: e.detail.value });
  },

  startType(e) {
    const type = e.currentTarget.dataset.type;
    if (type === 'operation') {
      wx.navigateTo({ url: '/pages/operation/operation?index=0' });
      return;
    }
    wx.navigateTo({
      url: '/pages/quiz/quiz?type=' + type + '&index=0'
    });
  },

  onDownloadTap() {
    wx.showToast({
      title: '资料下载即将上线',
      icon: 'none'
    });
  }
});
