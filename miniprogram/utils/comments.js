const STORAGE_PREFIX = 'questmind_comments_';
const PROFILE_KEY = 'questmind_profile';
const LOCAL_AUTHOR = 'local_user';

function buildQuestionKey(type, id) {
  return type + ':' + id;
}

function getNickname() {
  const profile = wx.getStorageSync(PROFILE_KEY) || {};
  return profile.nickname || '学海拾贝者';
}

function formatTime(ts) {
  if (!ts) return '刚刚';
  const time = typeof ts === 'object' && ts.$date ? new Date(ts.$date).getTime() : new Date(ts).getTime();
  if (Number.isNaN(time)) return '刚刚';
  const diff = Date.now() - time;
  const minute = 60000;
  const hour = 3600000;
  const day = 86400000;
  if (diff < minute) return '刚刚';
  if (diff < hour) return Math.max(1, Math.floor(diff / minute)) + '分钟前';
  if (diff < day) return Math.floor(diff / hour) + '小时前';
  if (diff < day * 30) return Math.floor(diff / day) + '天前';
  const date = new Date(time);
  return (date.getMonth() + 1) + '/' + date.getDate();
}

function avatarText(name) {
  const text = (name || '匿').trim();
  return text.slice(0, 1);
}

function normalizeComment(item) {
  const id = item._id || item.id;
  return {
    id,
    questionKey: item.questionKey,
    parentId: item.parentId || null,
    content: item.content || '',
    authorId: item.authorId || '',
    authorNickname: item.authorNickname || '匿名用户',
    createdAt: item.createdAt,
    timeText: formatTime(item.createdAt),
    avatarText: avatarText(item.authorNickname)
  };
}

function buildThread(list) {
  const nodes = list.map(normalizeComment);
  const map = {};
  nodes.forEach((node) => {
    map[node.id] = { ...node, replies: [] };
  });

  const roots = [];
  nodes.forEach((node) => {
    const current = map[node.id];
    if (node.parentId && map[node.parentId]) {
      map[node.parentId].replies.push(current);
      return;
    }
    if (!node.parentId) {
      roots.push(current);
    }
  });

  return roots;
}

function countComments(list) {
  return list.length;
}

function cloudEnabled() {
  return typeof wx.cloud !== 'undefined' && typeof wx.cloud.callFunction === 'function';
}

function readLocal(questionKey) {
  return wx.getStorageSync(STORAGE_PREFIX + questionKey) || [];
}

function writeLocal(questionKey, list) {
  wx.setStorageSync(STORAGE_PREFIX + questionKey, list.slice(0, 500));
}

function listLocal(questionKey) {
  return Promise.resolve(readLocal(questionKey));
}

function addLocal(questionKey, content, parentId) {
  const list = readLocal(questionKey);
  const comment = {
    id: 'local_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
    questionKey,
    parentId: parentId || null,
    content: content.trim(),
    authorId: LOCAL_AUTHOR,
    authorNickname: getNickname(),
    createdAt: Date.now()
  };
  list.push(comment);
  writeLocal(questionKey, list);
  return Promise.resolve({ ok: true, id: comment.id });
}

function listCloud(questionKey) {
  return wx.cloud.callFunction({
    name: 'commentApi',
    data: {
      action: 'list',
      questionKey
    }
  }).then((res) => {
    const result = res.result || {};
    if (!result.ok) {
      throw new Error(result.message || '加载评论失败');
    }
    return result.list || [];
  });
}

function addCloud(questionKey, content, parentId) {
  return wx.cloud.callFunction({
    name: 'commentApi',
    data: {
      action: 'add',
      questionKey,
      content,
      parentId: parentId || null,
      nickname: getNickname()
    }
  }).then((res) => {
    const result = res.result || {};
    if (!result.ok) {
      throw new Error(result.message || '发表评论失败');
    }
    return result;
  });
}

function listComments(questionKey) {
  if (cloudEnabled()) {
    return listCloud(questionKey).catch(() => listLocal(questionKey));
  }
  return listLocal(questionKey);
}

function addComment(questionKey, content, parentId) {
  const text = (content || '').trim();
  if (!text) {
    return Promise.reject(new Error('请输入评论内容'));
  }
  if (text.length > 500) {
    return Promise.reject(new Error('评论不能超过 500 字'));
  }

  if (cloudEnabled()) {
    return addCloud(questionKey, text, parentId).catch(() => addLocal(questionKey, text, parentId));
  }
  return addLocal(questionKey, text, parentId);
}

module.exports = {
  buildQuestionKey,
  buildThread,
  countComments,
  listComments,
  addComment,
  formatTime,
  cloudEnabled
};
