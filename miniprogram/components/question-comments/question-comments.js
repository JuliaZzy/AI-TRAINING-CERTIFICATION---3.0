const {
  buildQuestionKey,
  buildThread,
  countComments,
  listComments,
  addComment,
  cloudEnabled
} = require('../../utils/comments.js');

Component({
  properties: {
    questionType: {
      type: String,
      value: ''
    },
    questionId: {
      type: String,
      value: ''
    }
  },

  data: {
    threads: [],
    totalCount: 0,
    draft: '',
    replyTargetId: '',
    replyDraft: '',
    loading: false,
    sending: false,
    replying: false,
    useCloud: false
  },

  observers: {
    'questionType, questionId': function (type, id) {
      if (type && id) {
        this.loadComments();
      }
    }
  },

  lifetimes: {
    attached() {
      this.setData({ useCloud: cloudEnabled() });
      if (this.properties.questionType && this.properties.questionId) {
        this.loadComments();
      }
    }
  },

  methods: {
    getQuestionKey() {
      return buildQuestionKey(this.properties.questionType, this.properties.questionId);
    },

    loadComments() {
      const questionKey = this.getQuestionKey();
      if (!questionKey) return;

      this.setData({ loading: true });
      listComments(questionKey)
        .then((list) => {
          this.setData({
            threads: buildThread(list),
            totalCount: countComments(list),
            loading: false
          });
        })
        .catch(() => {
          this.setData({ loading: false });
          wx.showToast({ title: '评论加载失败', icon: 'none' });
        });
    },

    onDraftInput(e) {
      this.setData({ draft: e.detail.value });
    },

    onReplyDraftInput(e) {
      this.setData({ replyDraft: e.detail.value });
    },

    startReply(e) {
      const id = e.currentTarget.dataset.id;
      this.setData({
        replyTargetId: id,
        replyDraft: ''
      });
    },

    cancelReply() {
      this.setData({
        replyTargetId: '',
        replyDraft: ''
      });
    },

    submitComment() {
      if (this.data.sending || !this.data.draft.trim()) return;
      this.sendComment(this.data.draft, null, 'draft');
    },

    submitReply() {
      if (this.data.replying || !this.data.replyDraft.trim() || !this.data.replyTargetId) return;
      this.sendComment(this.data.replyDraft, this.data.replyTargetId, 'reply');
    },

    sendComment(content, parentId, mode) {
      const questionKey = this.getQuestionKey();
      const sendingKey = mode === 'reply' ? 'replying' : 'sending';

      this.setData({ [sendingKey]: true });
      addComment(questionKey, content, parentId)
        .then(() => {
          const nextData = { [sendingKey]: false };
          if (mode === 'reply') {
            nextData.replyTargetId = '';
            nextData.replyDraft = '';
          } else {
            nextData.draft = '';
          }
          this.setData(nextData);
          this.loadComments();
          wx.showToast({ title: parentId ? '回复成功' : '发表成功', icon: 'success' });
        })
        .catch((err) => {
          this.setData({ [sendingKey]: false });
          wx.showToast({
            title: (err && err.message) || '发送失败',
            icon: 'none'
          });
        });
    }
  }
});
