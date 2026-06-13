App({
  onLaunch() {
    const logs = wx.getStorageSync('quiz_logs') || [];
    this.globalData = { logs };
  },

  globalData: {
    logs: []
  }
});
