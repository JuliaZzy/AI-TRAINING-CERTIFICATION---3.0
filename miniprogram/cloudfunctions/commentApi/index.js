const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

exports.main = async (event) => {
  const { action, questionKey, content, parentId, nickname } = event;
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;

  if (action === 'list') {
    if (!questionKey) {
      return { ok: false, message: '题目无效' };
    }

    const res = await db.collection('comments')
      .where({ questionKey })
      .orderBy('createdAt', 'asc')
      .limit(500)
      .get();

    return { ok: true, list: res.data };
  }

  if (action === 'add') {
    if (!questionKey) {
      return { ok: false, message: '题目无效' };
    }
    if (!content || !String(content).trim()) {
      return { ok: false, message: '内容不能为空' };
    }

    const data = {
      questionKey,
      content: String(content).trim().slice(0, 500),
      parentId: parentId || null,
      authorId: openid,
      authorNickname: String(nickname || '匿名用户').trim().slice(0, 20) || '匿名用户',
      createdAt: db.serverDate()
    };

    const res = await db.collection('comments').add({ data });
    return { ok: true, id: res._id };
  }

  return { ok: false, message: '未知操作' };
};
