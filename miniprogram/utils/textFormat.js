const BULLET_PATTERN = /[\uf06c\uf0b7\uf0d8\uf0a7\uf0fc□■▪]/g;
const BULLET_LINE = /^[\uf06c\uf0b7\uf0d8\uf0a7\uf0fc□■▪•·]\s*(.*)$/;
const NUMBERED_LINE = /^[（(](\d+)[）)]\s*(.*)$/;

function normalizeBullets(text) {
  if (!text || typeof text !== 'string') return text;
  let result = text.replace(/[\uf06c\uf0b7\uf0d8\uf0a7\uf0fc□■▪]\t/g, '• ');
  result = result.replace(BULLET_PATTERN, '• ');
  while (result.includes('• • ')) {
    result = result.replace('• • ', '• ');
  }
  return result;
}

function parseTextBlocks(text) {
  if (!text || typeof text !== 'string') return [];
  const normalized = normalizeBullets(text);
  const lines = normalized.split('\n');
  const blocks = [];
  let paraBuf = [];

  function flushPara() {
    if (!paraBuf.length) return;
    const paraText = paraBuf.join('\n').trim();
    if (paraText) {
      blocks.push({ type: 'para', text: paraText });
    }
    paraBuf = [];
  }

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushPara();
      return;
    }

    const numberedMatch = trimmed.match(NUMBERED_LINE);
    if (numberedMatch) {
      flushPara();
      blocks.push({
        type: 'numbered',
        num: numberedMatch[1],
        text: numberedMatch[2]
      });
      return;
    }

    const bulletMatch = trimmed.match(BULLET_LINE);
    if (bulletMatch) {
      flushPara();
      blocks.push({ type: 'bullet', text: bulletMatch[1] });
      return;
    }

    paraBuf.push(trimmed);
  });

  flushPara();
  return blocks;
}

function withTextBlocks(text) {
  if (!text || typeof text !== 'string') {
    return { text: text || '', blocks: [] };
  }
  const normalized = normalizeBullets(text);
  const blocks = parseTextBlocks(normalized);
  return {
    text: normalized,
    blocks: blocks.length ? blocks : [{ type: 'para', text: normalized }]
  };
}

function normalizeQuestionText(question) {
  if (!question) return question;

  const tasks = withTextBlocks(question.tasks);

  return {
    ...question,
    tasks: tasks.text,
    tasksBlocks: tasks.blocks,
    items: (question.items || []).map((item) => {
      const content = withTextBlocks(item.content);
      const prompt = withTextBlocks(item.prompt);
      return {
        ...item,
        content: content.text,
        contentBlocks: content.blocks,
        prompt: prompt.text,
        promptBlocks: prompt.blocks,
        code: normalizeBullets(item.code)
      };
    })
  };
}

function attachTextBlocksToSections(sections) {
  return (sections || []).map((sec) => {
    if (sec.type === 'text_line' || sec.type === 'note') {
      const formatted = withTextBlocks(sec.text);
      return {
        ...sec,
        text: formatted.text,
        textBlocks: formatted.blocks
      };
    }
    return sec;
  });
}

module.exports = {
  normalizeBullets,
  parseTextBlocks,
  withTextBlocks,
  normalizeQuestionText,
  attachTextBlocksToSections
};
