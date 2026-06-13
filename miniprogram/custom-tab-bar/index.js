Component({
  data: {
    selected: 0,
    list: [
      { pagePath: '/pages/library/library', text: '题库', icon: '⌂' },
      { pagePath: '/pages/wrongbook/wrongbook', text: '错题本', icon: '▤' },
      { pagePath: '/pages/profile/profile', text: '我的', icon: '◉' }
    ]
  },

  methods: {
    switchTab(e) {
      const { path, index } = e.currentTarget.dataset;
      wx.switchTab({ url: path });
      this.setData({ selected: index });
    }
  }
});
