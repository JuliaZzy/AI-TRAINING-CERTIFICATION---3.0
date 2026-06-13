App({
  onLaunch() {
    if (wx.cloud) {
      wx.cloud.init({
        env: wx.cloud.DYNAMIC_CURRENT_ENV,
        traceUser: true
      });
    }

    if (!wx.getStorageSync('questmind_profile')) {
      wx.setStorageSync('questmind_profile', {
        nickname: '学海拾贝者',
        streak: 0,
        solved: 0,
        level: '探险家'
      });
    }
  }
});
