/**
 * 微信小程序自定义导航栏（官方推荐算法）
 * 状态栏留白 + 导航内容区与胶囊按钮同高对齐，内容靠左不居中
 */

function getNavLayout() {
  const sys = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
  const menu = wx.getMenuButtonBoundingClientRect();

  const statusBarHeight = sys.statusBarHeight || 20;
  const navContentHeight = menu.height + (menu.top - statusBarHeight) * 2;
  const navBarTotalHeight = statusBarHeight + navContentHeight;
  const capsulePadding = sys.windowWidth - menu.left;

  return {
    statusBarHeight,
    navContentHeight,
    navBarTotalHeight,
    capsulePadding,
    menuButtonHeight: menu.height,
    navWrapStyle: `height:${navBarTotalHeight}px`,
    statusBarStyle: `height:${statusBarHeight}px`,
    navBarStyle: `height:${navContentHeight}px;padding-right:${capsulePadding}px`,
    navBtnStyle: `width:${menu.height}px;height:${menu.height}px`
  };
}

module.exports = {
  getNavLayout
};
