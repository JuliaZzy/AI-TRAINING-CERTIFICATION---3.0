const judgeData = require('../data/judge.js');
const singleData = require('../data/single.js');
const multipleData = require('../data/multiple.js');
const operationData = require('../data/operation.js');
const meta = require('../data/meta.js');

const TYPE_MAP = {
  judge: judgeData,
  single: singleData,
  multiple: multipleData,
  operation: operationData
};

const TYPE_LABELS = {
  judge: '判断题',
  single: '单选题',
  multiple: '多选题',
  operation: '操作题'
};

function getQuestions(type) {
  return TYPE_MAP[type] || [];
}

function getTypeLabel(type) {
  return TYPE_LABELS[type] || type;
}

function getQuestionById(type, id) {
  return getQuestions(type).find((item) => item.id === id);
}

function getOperationById(id) {
  return operationData.find((item) => item.id === id);
}

module.exports = {
  meta,
  judgeData,
  singleData,
  multipleData,
  operationData,
  getQuestions,
  getTypeLabel,
  getQuestionById,
  getOperationById
};
