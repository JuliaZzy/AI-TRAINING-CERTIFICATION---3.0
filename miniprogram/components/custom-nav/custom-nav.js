const { getNavLayout } = require('../../utils/navBar.js');

Component({
  options: {
    styleIsolation: 'apply-shared'
  },

  properties: {
    mode: {
      type: String,
      value: 'brand'
    },
    title: {
      type: String,
      value: 'QuestMind'
    },
    showAction: {
      type: Boolean,
      value: true
    }
  },

  data: {
    navWrapStyle: '',
    statusBarStyle: '',
    navBarStyle: '',
    navBtnStyle: ''
  },

  lifetimes: {
    attached() {
      this.refreshNav();
    },
    ready() {
      this.refreshNav();
    }
  },

  pageLifetimes: {
    show() {
      this.refreshNav();
    }
  },

  methods: {
    refreshNav() {
      const nav = getNavLayout();
      this.setData({
        navWrapStyle: nav.navWrapStyle,
        statusBarStyle: nav.statusBarStyle,
        navBarStyle: nav.navBarStyle,
        navBtnStyle: nav.navBtnStyle
      });
    },

    onBack() {
      this.triggerEvent('back');
    }
  }
});
