/** 根据已填字数计算填空框宽度，保证内容完整展示 */

const DEFAULT_MIN_CHARS = 8;
const CHAR_WIDTH_RPX = 28;
const MIN_WIDTH_RPX = 160;
const FULL_LINE_CHARS = 20;

function calcBlankStyle(value, options = {}) {
  const minChars = options.minChars || DEFAULT_MIN_CHARS;
  const charWidth = options.charWidth || CHAR_WIDTH_RPX;
  const minWidth = options.minWidth || MIN_WIDTH_RPX;
  const fullLineAt = options.fullLineAt ?? FULL_LINE_CHARS;
  const text = String(value || '');
  const len = Math.max(text.length, minChars);
  const fullLine = !options.disableFullLine && text.length >= fullLineAt;

  if (fullLine) {
    return 'width:100%;min-width:100%;';
  }

  const width = Math.max(len * charWidth + 24, minWidth);
  return `width:${width}rpx;min-width:${width}rpx;max-width:none;`;
}

function withBlankMeta(field, value, options) {
  const text = String(value || '');
  const fullLineAt = options?.fullLineAt ?? FULL_LINE_CHARS;
  const fullLine = !options?.disableFullLine && text.length >= fullLineAt;
  return {
    ...field,
    blankStyle: calcBlankStyle(text, options),
    fullLine
  };
}

module.exports = {
  calcBlankStyle,
  withBlankMeta,
  DEFAULT_MIN_CHARS,
  FULL_LINE_CHARS
};
