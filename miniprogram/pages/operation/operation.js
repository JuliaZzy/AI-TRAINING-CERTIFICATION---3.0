const { operationData } = require('../../utils/questions.js');
const { prepareFillSegments } = require('../../utils/score.js');
const { withBlankMeta } = require('../../utils/blankInput.js');
const { normalizeQuestionText, attachTextBlocksToSections, normalizeBullets } = require('../../utils/textFormat.js');

function expandDocSections(item, answers) {
  const sections = item.template?.sections || [];
  const refAnswers = item.docAnswer || [];
  let fieldIdx = 0;

  return sections.map((sec) => {
    if (sec.type === 'heading' || sec.type === 'subheading' || sec.type === 'group_title' || sec.type === 'note' || sec.type === 'block_title' || sec.type === 'text_line') {
      return { ...sec };
    }

    if (sec.type === 'fill_line') {
      const segments = (sec.segments || []).map((seg) => {
        if (seg.type === 'blank') {
          const idx = fieldIdx;
          fieldIdx += 1;
          const value = answers[idx] || '';
          return withBlankMeta({
            type: 'blank',
            fieldIndex: idx,
            value,
            answerText: refAnswers[idx] || ''
          }, value);
        }
        return { ...seg, value: normalizeBullets(seg.value || '') };
      });
      const firstText = segments.find((seg) => seg.type === 'text');
      const bulletMatch = firstText && (firstText.value || '').match(/^•\s*(.*)$/s);
      if (bulletMatch) {
        firstText.value = bulletMatch[1];
      }
      return { ...sec, segments, isBulletLine: !!bulletMatch };
    }

    if (sec.type === 'input') {
      const idx = fieldIdx;
      fieldIdx += 1;
      const value = answers[idx] || '';
      return withBlankMeta({
        ...sec,
        fieldIndex: idx,
        value,
        answerText: refAnswers[idx] || ''
      }, value);
    }

    if (sec.type === 'inline_row') {
      const inputs = [];
      const cellCount = sec.cells || 1;
      for (let i = 0; i < cellCount; i += 1) {
        const idx = fieldIdx;
        fieldIdx += 1;
        const value = answers[idx] || '';
        inputs.push(withBlankMeta({
          fieldIndex: idx,
          value,
          answerText: refAnswers[idx] || ''
        }, value, { minChars: 4 }));
      }
      return { ...sec, inputs };
    }

    if (sec.type === 'grid_table') {
      const colCount = Math.max((sec.headers || []).length - 1, 0);
      const rows = (sec.rowLabels || []).map((label) => {
        const cells = [];
        for (let i = 0; i < colCount; i += 1) {
          const idx = fieldIdx;
          fieldIdx += 1;
          const value = answers[idx] || '';
          cells.push(withBlankMeta({
            fieldIndex: idx,
            value,
            header: sec.headers[i + 1],
            answerText: refAnswers[idx] || ''
          }, value, { minChars: 4 }));
        }
        return { label, cells };
      });
      return { ...sec, rows };
    }

    if (sec.type === 'textarea') {
      const idx = fieldIdx;
      fieldIdx += 1;
      return {
        ...sec,
        fieldIndex: idx,
        value: answers[idx] || '',
        answerText: refAnswers[idx] || ''
      };
    }

    if (sec.type === 'table') {
      const rows = (sec.rows || []).map((row) => {
        const cells = [];
        const cellCount = row.cells || 1;
        for (let i = 0; i < cellCount; i += 1) {
          const idx = fieldIdx;
          fieldIdx += 1;
          const value = answers[idx] || '';
          cells.push(withBlankMeta({
            fieldIndex: idx,
            value,
            header: sec.headers ? sec.headers[i + 1] : null,
            answerText: refAnswers[idx] || ''
          }, value, { minChars: 4 }));
        }
        return {
          label: row.label,
          cells
        };
      });
      return {
        ...sec,
        rows
      };
    }

    return { ...sec };
  }).map((sec) => {
    if (sec.type === 'text_line' || sec.type === 'note') {
      const formatted = attachTextBlocksToSections([sec])[0];
      return formatted;
    }
    return sec;
  });
}

function groupSegmentsIntoLines(segments) {
  const lines = [{ lineIndex: 0, segments: [] }];
  let lineIdx = 0;

  (segments || []).forEach((seg) => {
    if (seg.type === 'blank') {
      lines[lineIdx].segments.push(seg);
      return;
    }

    const parts = String(seg.value || '').split('\n');
    parts.forEach((part, partIdx) => {
      if (partIdx > 0) {
        lineIdx += 1;
        lines.push({ lineIndex: lineIdx, segments: [] });
      }
      lines[lineIdx].segments.push({
        type: 'text',
        value: part,
        segKey: `${seg.segKey || 't'}-l${lineIdx}-p${partIdx}`
      });
    });
  });

  return lines;
}

function enrichItems(items, saved, submitted) {
  const codeAnswers = saved.codeAnswers || {};
  const docAnswers = saved.docAnswers || {};

  return (items || []).map((item) => {
    if (item.type === 'code') {
      const answers = codeAnswers[item.id] || [];
      const expected = (item.blanks || []).map(() => '');
      const segments = prepareFillSegments(item.code, expected, answers, submitted);
      let blankIdx = 0;
      segments.forEach((seg, segIdx) => {
        if (seg.type === 'blank') {
          const meta = item.blanks[blankIdx] || {};
          seg.score = meta.score || 0;
          seg.desc = meta.desc || '';
          seg.rubricId = meta.rubricId || '';
          const styled = withBlankMeta(seg, seg.value || '', {
            minChars: 4,
            minWidth: 96,
            charWidth: 22,
            disableFullLine: true
          });
          Object.assign(seg, styled);
          seg.segKey = item.id + '-b' + blankIdx;
          blankIdx += 1;
          return;
        }
        seg.segKey = item.id + '-t' + segIdx;
      });
      return { ...item, segments, codeLines: groupSegmentsIntoLines(segments) };
    }

    if (item.type === 'doc') {
      const answers = docAnswers[item.id] || [];

      if (item.template?.sections?.length) {
        const renderSections = expandDocSections(item, answers);
        return { ...item, renderSections };
      }

      const fields = (item.template?.fields || []).map((field, fi) => ({
        ...field,
        value: answers[fi] || '',
        answerText: (item.docAnswer || [])[fi] || ''
      }));
      return { ...item, fields, renderSections: [] };
    }

    return item;
  });
}

Page({
  data: {
    questions: [],
    currentIndex: 0,
    current: null,
    displayItems: [],
    submitted: false,
    progressText: '',
    totalItemScore: 0
  },

  onLoad(options) {
    let currentIndex = parseInt(options.index || '0', 10);
    if (options.id) {
      const idx = operationData.findIndex((q) => q.id === options.id);
      if (idx >= 0) currentIndex = idx;
    }

    this.setData({
      questions: operationData,
      currentIndex: Math.min(Math.max(currentIndex, 0), Math.max(operationData.length - 1, 0))
    }, () => this.loadCurrent());
  },


  loadCurrent() {
    const { questions, currentIndex } = this.data;
    const current = normalizeQuestionText(questions[currentIndex]);
    if (!current) return;

    const saved = wx.getStorageSync('questmind_operation_' + current.id) || {};
    const displayItems = enrichItems(current.items, saved, !!saved.submitted);
    const totalItemScore = displayItems.reduce((sum, item) => sum + (item.score || 0), 0);

    this.setData({
      current,
      displayItems,
      submitted: !!saved.submitted,
      totalItemScore,
      progressText: '操作题 ' + (currentIndex + 1) + '/' + questions.length + ' · 满分 ' + (current.totalScore || totalItemScore) + ' 分',
      canGoPrev: currentIndex > 0,
      canGoNext: currentIndex < questions.length - 1
    });
  },

  onBack() {
    wx.navigateBack({ delta: 1 });
  },

  updateCodeBlank(itemId, blankIndex, value) {
    const { current, displayItems } = this.data;
    const saved = wx.getStorageSync('questmind_operation_' + current.id) || {};
    const codeAnswers = { ...(saved.codeAnswers || {}) };
    const currentAnswers = (codeAnswers[itemId] || []).slice();
    currentAnswers[blankIndex] = value;
    codeAnswers[itemId] = currentAnswers;

    wx.setStorageSync('questmind_operation_' + current.id, {
      ...saved,
      codeAnswers,
      submitted: false
    });

    const itemIdx = displayItems.findIndex((item) => item.id === itemId);
    if (itemIdx < 0) return;

    const segIdx = displayItems[itemIdx].segments.findIndex(
      (seg) => seg.type === 'blank' && seg.index === Number(blankIndex)
    );
    if (segIdx < 0) return;

    const styled = withBlankMeta(
      { ...displayItems[itemIdx].segments[segIdx], value },
      value,
      { minChars: 4, minWidth: 96, charWidth: 22, disableFullLine: true }
    );
    const base = `displayItems[${itemIdx}].segments[${segIdx}]`;
    const nextSegments = displayItems[itemIdx].segments.map((seg, idx) => (
      idx === segIdx
        ? { ...seg, value, blankStyle: styled.blankStyle, fullLine: styled.fullLine }
        : seg
    ));
    const codeLines = groupSegmentsIntoLines(nextSegments);

    this.setData({
      [`${base}.value`]: value,
      [`${base}.blankStyle`]: styled.blankStyle,
      [`${base}.fullLine`]: styled.fullLine,
      [`displayItems[${itemIdx}].codeLines`]: codeLines
    });
  },

  onCodeFillInput(e) {
    if (this.data.submitted) return;
    const { itemId, index } = e.currentTarget.dataset;
    this.updateCodeBlank(itemId, parseInt(index, 10), e.detail.value);
  },

  onDocFieldInput(e) {
    if (this.data.submitted) return;
    const { itemId, fieldIndex } = e.currentTarget.dataset;
    const value = e.detail.value;
    const { current } = this.data;
    const saved = wx.getStorageSync('questmind_operation_' + current.id) || {};
    const docAnswers = { ...(saved.docAnswers || {}) };
    const currentAnswers = (docAnswers[itemId] || []).slice();
    currentAnswers[fieldIndex] = value;
    docAnswers[itemId] = currentAnswers;

    wx.setStorageSync('questmind_operation_' + current.id, {
      ...saved,
      docAnswers,
      submitted: false
    });

    this.setData({
      displayItems: enrichItems(current.items, { ...saved, docAnswers }, false)
    });
  },

  submitAnswer() {
    const { current } = this.data;
    const saved = wx.getStorageSync('questmind_operation_' + current.id) || {};

    wx.setStorageSync('questmind_operation_' + current.id, {
      ...saved,
      submitted: true,
      submittedAt: Date.now()
    });

    const solved = wx.getStorageSync('questmind_solved_count') || 0;
    wx.setStorageSync('questmind_solved_count', solved + 1);

    this.setData({
      submitted: true,
      displayItems: enrichItems(current.items, saved, true)
    });

    wx.showToast({ title: '已提交，待批改', icon: 'success' });
  },

  goPrev() {
    if (this.data.currentIndex <= 0) return;
    this.setData({ currentIndex: this.data.currentIndex - 1 }, () => this.loadCurrent());
  },

  goNext() {
    if (this.data.currentIndex >= this.data.questions.length - 1) {
      wx.showToast({ title: '已是最后一题', icon: 'none' });
      return;
    }
    this.setData({ currentIndex: this.data.currentIndex + 1 }, () => this.loadCurrent());
  }
});
