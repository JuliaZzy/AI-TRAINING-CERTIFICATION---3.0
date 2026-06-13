function normalizeFill(value) {
  return String(value || '')
    .trim()
    .replace(/\s+/g, '')
    .replace(/['"]/g, '')
    .toLowerCase();
}

function compareFill(user, expected) {
  return normalizeFill(user) === normalizeFill(expected);
}

function prepareFillSegments(code, blanks, userAnswers, submitted) {
  const parts = code.split('___');
  const segments = [];
  const answers = userAnswers || [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i]) {
      segments.push({ type: 'text', value: parts[i] });
    }
    if (i < parts.length - 1) {
      const expected = blanks[i] || '';
      const user = answers[i] || '';
      segments.push({
        type: 'blank',
        index: i,
        value: user,
        expected,
        correct: submitted ? compareFill(user, expected) : null
      });
    }
  }

  return segments;
}

function isFillCorrect(question, userAnswers) {
  const blanks = question.blanks || [];
  return blanks.every((blank, index) => compareFill(userAnswers[index], blank));
}

function gradeQuestion(question, userAnswer) {
  if (question.type === 'single') {
    const correct = userAnswer === question.answer;
    return {
      correct,
      score: correct ? question.score : 0,
      unanswered: !userAnswer
    };
  }

  if (question.type === 'multiple') {
    const expected = (question.answer || []).slice().sort().join(',');
    const actual = (userAnswer || []).slice().sort().join(',');
    const correct = expected === actual && expected.length > 0;
    return {
      correct,
      score: correct ? question.score : 0,
      unanswered: !(userAnswer && userAnswer.length)
    };
  }

  if (question.type === 'fill') {
    const values = userAnswer || [];
    const unanswered = !values.some(Boolean);
    const correct = isFillCorrect(question, values);
    return {
      correct,
      score: correct ? question.score : 0,
      unanswered
    };
  }

  return { correct: false, score: 0, unanswered: true };
}

function gradeExam(questions, answers) {
  let totalScore = 0;
  let maxScore = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;
  const details = [];

  questions.forEach((question) => {
    maxScore += question.score;
    const userAnswer = answers[question.id];
    const result = gradeQuestion(question, userAnswer);

    totalScore += result.score;
    if (result.unanswered) {
      unansweredCount += 1;
    } else if (result.correct) {
      correctCount += 1;
    } else {
      wrongCount += 1;
    }

    details.push({
      id: question.id,
      taskCode: question.taskCode,
      text: question.text,
      type: question.type,
      score: question.score,
      earned: result.score,
      correct: result.correct,
      unanswered: result.unanswered,
      userAnswer,
      expected: question.type === 'fill'
        ? question.blanks
        : question.answer
    });
  });

  return {
    totalScore,
    maxScore,
    correctCount,
    wrongCount,
    unansweredCount,
    totalCount: questions.length,
    details
  };
}

function getChapters(practiceData) {
  const map = {};

  practiceData.quiz.forEach((question) => {
    const code = question.taskCode || '其他';
    if (!map[code]) {
      const task = (practiceData.tasks || []).find((item) => item.code === code);
      map[code] = {
        code,
        name: task ? task.name : code,
        count: 0,
        score: 0
      };
    }
    map[code].count += 1;
    map[code].score += question.score;
  });

  return Object.values(map).sort((a, b) => a.code.localeCompare(b.code));
}

module.exports = {
  normalizeFill,
  compareFill,
  prepareFillSegments,
  isFillCorrect,
  gradeQuestion,
  gradeExam,
  getChapters
};
