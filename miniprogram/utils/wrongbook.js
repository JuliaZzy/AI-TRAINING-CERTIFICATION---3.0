const STORAGE_KEY = 'questmind_wrongbook';

function readAll() {
  return wx.getStorageSync(STORAGE_KEY) || [];
}

function writeAll(list) {
  wx.setStorageSync(STORAGE_KEY, list);
}

function addRecord(record) {
  const list = readAll();
  const index = list.findIndex((item) => item.id === record.id && item.type === record.type);
  const now = Date.now();

  if (index >= 0) {
    list[index] = {
      ...list[index],
      ...record,
      wrongCount: (list[index].wrongCount || 0) + 1,
      updatedAt: now
    };
  } else {
    list.unshift({
      wrongCount: 1,
      mastery: 'weak',
      createdAt: now,
      updatedAt: now,
      ...record
    });
  }

  writeAll(list.slice(0, 200));
}

function getStats() {
  const list = readAll();
  const stats = {
    total: list.length,
    judge: 0,
    single: 0,
    multiple: 0,
    operation: 0,
    weak: 0,
    medium: 0,
    strong: 0
  };

  list.forEach((item) => {
    if (stats[item.type] !== undefined) {
      stats[item.type] += 1;
    }
    if (item.mastery === 'weak') stats.weak += 1;
    if (item.mastery === 'medium') stats.medium += 1;
    if (item.mastery === 'strong') stats.strong += 1;
  });

  return stats;
}

function formatTime(ts) {
  if (!ts) return '刚刚';
  const diff = Date.now() - ts;
  const hour = 3600000;
  const day = 86400000;
  if (diff < hour) return Math.max(1, Math.floor(diff / 60000)) + '分钟前';
  if (diff < day) return Math.floor(diff / hour) + '小时前';
  return Math.floor(diff / day) + '天前';
}

module.exports = {
  readAll,
  addRecord,
  getStats,
  formatTime
};
