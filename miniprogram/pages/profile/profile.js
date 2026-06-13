const { meta } = require('../../utils/questions.js');

const FAV_META = {
  judge: { title: '判断题专项', icon: '✓' },
  single: { title: '单选题专项', icon: '◉' },
  multiple: { title: '多选题专项', icon: '☑' },
  operation: { title: '操作题实战', icon: '✎' }
};

Page({
  data: {
    profile: {
      nickname: '学海拾贝者',
      id: '88481234',
      streak: 128,
      solved: 0,
      level: '探险家'
    },
    favorites: [],
    darkMode: false
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 });
    }

    const profile = wx.getStorageSync('questmind_profile') || this.data.profile;
    const solved = wx.getStorageSync('questmind_solved_count') || 0;
    const typeOrder = ['judge', 'single', 'multiple', 'operation'];
    const favorites = typeOrder.map((key) => ({
      key,
      title: FAV_META[key].title,
      icon: FAV_META[key].icon,
      count: meta.counts[key]
    }));

    this.setData({
      profile: { ...profile, solved },
      favorites
    });
  },

  startFavorite(e) {
    const type = e.currentTarget.dataset.type;
    if (type === 'operation') {
      wx.navigateTo({ url: '/pages/operation/operation?index=0' });
      return;
    }
    wx.navigateTo({
      url: '/pages/quiz/quiz?type=' + type + '&index=0'
    });
  },
  toggleDarkMode(e) {
    this.setData({ darkMode: e.detail.value });
    wx.showToast({ title: '深色模式即将上线', icon: 'none' });
  },

  onMenuTap(e) {
    const key = e.currentTarget.dataset.key;
    wx.showToast({ title: key + ' 即将上线', icon: 'none' });
  }
});
