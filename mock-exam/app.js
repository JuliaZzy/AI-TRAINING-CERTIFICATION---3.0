/* 人工智能训练师三级模拟考试 */

let theoryData = null;
let practiceData = null;
let currentExam = null;
let answers = {};
let submitted = false;
let timerInterval = null;
let remainingSeconds = 0;
let currentSectionIdx = 0;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

async function loadData() {
  const [t, p] = await Promise.all([
    fetch("data/theory.json").then((r) => r.json()),
    fetch("data/practice.json").then((r) => r.json()),
  ]);
  theoryData = t;
  practiceData = p;
}

function showView(view) {
  ["homeView", "examView", "resultView"].forEach((id) => {
    $(`#${id}`).classList.toggle("hidden", id !== view);
  });
  $("#backBtn").classList.toggle("hidden", view === "homeView");
  $("#headerMeta").classList.toggle("hidden", view === "homeView");
}

function qKey(sectionId, qId) {
  return `${sectionId}::${qId}`;
}

function normalizeFill(s) {
  return String(s || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/['"]/g, "")
    .toLowerCase();
}

function compareFill(user, expected) {
  return normalizeFill(user) === normalizeFill(expected);
}

function startTimer(minutes) {
  clearInterval(timerInterval);
  remainingSeconds = minutes * 60;
  $("#timer").classList.remove("hidden");
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    remainingSeconds--;
    updateTimerDisplay();
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(remainingSeconds / 60);
  const s = remainingSeconds % 60;
  $("#timer").textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function startExam(type) {
  currentExam = type;
  answers = {};
  submitted = false;
  currentSectionIdx = 0;

  if (type === "theory") {
    $("#pageTitle").textContent = theoryData.title;
    startTimer(theoryData.timeLimit);
  } else {
    $("#pageTitle").textContent = practiceData.title;
    $("#timer").classList.add("hidden");
    clearInterval(timerInterval);
  }

  renderExam();
  showView("examView");
}

function getSections() {
  if (currentExam === "theory") {
    return theoryData.sections;
  }
  return [{ id: "quiz", name: "实操知识点自测", type: "mixed", questions: practiceData.quiz, scorePerQuestion: null }];
}

function renderTaskInfo() {
  const panel = $("#taskInfoPanel");
  if (currentExam !== "practice") {
    panel.classList.add("hidden");
    return;
  }
  panel.classList.remove("hidden");
  panel.innerHTML = `
    <div class="task-info">
      <h3>📋 本次模拟卷包含 ${practiceData.tasks.length} 道实操题</h3>
      <p class="meta">${practiceData.description}</p>
      <p>${practiceData.tasks.map((t) => `<strong>${t.code}</strong> ${t.name}（${t.time} · ${t.score}分）`).join(" · ")}</p>
    </div>`;
}

function renderSectionNav() {
  const sections = getSections();
  const nav = $("#sectionNav");
  if (currentExam === "practice") {
    nav.innerHTML = "";
    return;
  }
  nav.innerHTML = sections
    .map(
      (s, i) =>
        `<button class="${i === currentSectionIdx ? "active" : ""}" data-idx="${i}">${s.name}</button>`
    )
    .join("");
  nav.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSectionIdx = Number(btn.dataset.idx);
      renderExam();
    });
  });
}

function renderTrueFalse(q, section, review) {
  const key = qKey(section.id, q.id);
  const userAns = answers[key];
  const isCorrect = userAns === q.answer;

  let btns = ["T", "F"].map((v) => {
    const label = v === "T" ? "√ 正确" : "× 错误";
    let cls = "tf-btn";
    if (!submitted && userAns === v) cls += " selected";
    if (submitted) {
      if (v === q.answer) cls += " correct-ans";
      else if (userAns === v) cls += " wrong-ans";
    }
    return `<button type="button" class="${cls}" data-val="${v}" ${submitted ? "disabled" : ""}>${label}</button>`;
  }).join("");

  let feedback = "";
  if (submitted) {
    feedback = `<div class="feedback ${isCorrect ? "correct" : "wrong"}">
      ${isCorrect ? "✓ 回答正确" : "✗ 回答错误"}
      <div class="ans-line">正确答案：${q.answer === "T" ? "√ 正确" : "× 错误"}</div>
    </div>`;
  }

  return `<div class="question-card ${submitted ? (isCorrect ? "correct" : userAns ? "wrong" : "") : userAns ? "answered" : ""}" data-key="${key}">
    <div class="q-header"><span class="q-num">${q.id}</span><div class="q-text">${q.text}</div></div>
    <div class="tf-options">${btns}</div>${feedback}
  </div>`;
}

function renderSingle(q, section, review) {
  const key = qKey(section.id, q.id);
  const userAns = answers[key];
  const isCorrect = userAns === q.answer;

  const opts = Object.entries(q.options)
    .map(([letter, text]) => {
      let cls = "option-label";
      if (!submitted && userAns === letter) cls += " selected";
      if (submitted) {
        if (letter === q.answer) cls += " correct-ans";
        else if (userAns === letter) cls += " wrong-ans";
      }
      return `<label class="${cls}">
        <input type="radio" name="${key}" value="${letter}" ${userAns === letter ? "checked" : ""} ${submitted ? "disabled" : ""}>
        <span><strong>${letter}.</strong> ${text}</span>
      </label>`;
    })
    .join("");

  let feedback = "";
  if (submitted) {
    feedback = `<div class="feedback ${isCorrect ? "correct" : "wrong"}">
      ${isCorrect ? "✓ 回答正确" : "✗ 回答错误"}
      <div class="ans-line">正确答案：${q.answer} — ${q.options[q.answer] || ""}</div>
    </div>`;
  }

  return `<div class="question-card ${submitted ? (isCorrect ? "correct" : userAns ? "wrong" : "") : userAns ? "answered" : ""}" data-key="${key}">
    <div class="q-header"><span class="q-num">${q.id}</span><div class="q-text">${q.text}</div></div>
    <div class="options">${opts}</div>${feedback}
  </div>`;
}

function renderMultiple(q, section) {
  const key = qKey(section.id, q.id);
  const userAns = (answers[key] || []).slice().sort();
  const correct = (q.answer || []).slice().sort();
  const isCorrect = JSON.stringify(userAns) === JSON.stringify(correct);

  const opts = Object.entries(q.options)
    .map(([letter, text]) => {
      const checked = userAns.includes(letter);
      let cls = "option-label";
      if (!submitted && checked) cls += " selected";
      if (submitted) {
        if (correct.includes(letter)) cls += " correct-ans";
        else if (checked) cls += " wrong-ans";
      }
      return `<label class="${cls}">
        <input type="checkbox" name="${key}" value="${letter}" ${checked ? "checked" : ""} ${submitted ? "disabled" : ""}>
        <span><strong>${letter}.</strong> ${text}</span>
      </label>`;
    })
    .join("");

  let feedback = "";
  if (submitted) {
    const ansText = correct.map((l) => `${l}. ${q.options[l]}`).join("；");
    feedback = `<div class="feedback ${isCorrect ? "correct" : "wrong"}">
      ${isCorrect ? "✓ 回答正确" : "✗ 回答错误"}
      <div class="ans-line">正确答案：${correct.join("")} — ${ansText}</div>
    </div>`;
  }

  return `<div class="question-card ${submitted ? (isCorrect ? "correct" : userAns.length ? "wrong" : "") : userAns.length ? "answered" : ""}" data-key="${key}">
    <div class="q-header"><span class="q-num">${q.id}</span><div class="q-text">${q.text}</div></div>
    <div class="options">${opts}</div>${feedback}
  </div>`;
}

function renderFill(q, section) {
  const key = qKey(section.id, q.id);
  const userVals = answers[key] || [];
  const blanks = q.blanks || [];
  const allCorrect = blanks.every((b, i) => compareFill(userVals[i], b));

  let codeHtml = q.code;
  if (submitted) {
    let idx = 0;
    codeHtml = q.code.replace(/___/g, () => {
      const u = userVals[idx] || "";
      const c = blanks[idx] || "";
      const ok = compareFill(u, c);
      idx++;
      return `<span style="color:${ok ? "var(--success)" : "var(--error)"};font-weight:bold">[${u || "未填"}]</span>`;
    });
  } else {
    let idx = 0;
    codeHtml = q.code.replace(/___/g, () => {
      const inp = `<input type="text" data-blank="${idx}" value="${userVals[idx] || ""}" placeholder="填空${idx + 1}">`;
      idx++;
      return inp;
    });
  }

  let feedback = "";
  if (submitted) {
    feedback = `<div class="feedback ${allCorrect ? "correct" : "wrong"}">
      ${allCorrect ? "✓ 全部正确" : "✗ 存在错误"}
      <div class="ans-line">参考答案：${blanks.join(" / ")}</div>
    </div>`;
  }

  return `<div class="question-card ${submitted ? (allCorrect ? "correct" : "wrong") : userVals.some(Boolean) ? "answered" : ""}" data-key="${key}">
    ${q.taskCode ? `<span class="task-tag">试题 ${q.taskCode}</span>` : ""}
    <div class="q-header"><span class="q-num">${q.id.replace(/\D/g, "") || q.id}</span><div class="q-text">${q.text}</div></div>
    <div class="code-block">${codeHtml}</div>${feedback}
  </div>`;
}

function renderPracticeQuestion(q, section, idx) {
  const sec = { ...section, id: section.id, type: q.type };
  const pq = { ...q, id: q.id };
  if (q.taskCode) pq.id = idx + 1;

  switch (q.type) {
    case "single":
      return renderSingle(pq, sec);
    case "multiple":
      return renderMultiple(pq, sec);
    case "fill":
      return renderFill(pq, sec);
    default:
      return "";
  }
}

function renderExam() {
  renderTaskInfo();
  renderSectionNav();

  const sections = getSections();
  const section = sections[currentSectionIdx];
  const area = $("#questionArea");

  $("#progressText").textContent =
    currentExam === "theory"
      ? `${section.name} · 共 ${section.questions.length} 题`
      : `自测题 · 共 ${section.questions.length} 题`;

  let html = `<h2 class="section-title">${section.name}</h2>`;

  if (currentExam === "practice") {
    section.questions.forEach((q, i) => {
      html += renderPracticeQuestion(q, section, i);
    });
  } else {
    section.questions.forEach((q) => {
      switch (section.type) {
        case "truefalse":
          html += renderTrueFalse(q, section);
          break;
        case "single":
          html += renderSingle(q, section);
          break;
        case "multiple":
          html += renderMultiple(q, section);
          break;
      }
    });
  }

  area.innerHTML = html;
  bindQuestionEvents(section);
  updateNavButtons();
}

function bindQuestionEvents(section) {
  // 判断题
  $$(".tf-btn:not([disabled])").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".question-card");
      const key = card.dataset.key;
      answers[key] = btn.dataset.val;
      card.querySelectorAll(".tf-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      card.classList.add("answered");
    });
  });

  // 单选
  $$('.options input[type="radio"]:not([disabled])').forEach((inp) => {
    inp.addEventListener("change", () => {
      const key = inp.name;
      answers[key] = inp.value;
      inp.closest(".question-card").classList.add("answered");
    });
  });

  // 多选
  $$('.options input[type="checkbox"]:not([disabled])').forEach((inp) => {
    inp.addEventListener("change", () => {
      const key = inp.name;
      const checked = [...document.querySelectorAll(`input[name="${key}"]:checked`)].map(
        (c) => c.value
      );
      answers[key] = checked.sort();
      inp.closest(".question-card").classList.toggle("answered", checked.length > 0);
    });
  });

  // 填空
  $$(".code-block input[data-blank]").forEach((inp) => {
    inp.addEventListener("input", () => {
      const card = inp.closest(".question-card");
      const key = card.dataset.key;
      const inputs = card.querySelectorAll("input[data-blank]");
      answers[key] = [...inputs].map((i) => i.value);
      card.classList.toggle("answered", answers[key].some(Boolean));
    });
  });
}

function updateNavButtons() {
  const sections = getSections();
  $("#prevSectionBtn").classList.toggle("hidden", currentSectionIdx === 0 || currentExam === "practice");
  $("#nextSectionBtn").classList.toggle(
    "hidden",
    currentSectionIdx >= sections.length - 1 || currentExam === "practice"
  );
}

function gradeTheory() {
  let score = 0;
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;
  const total = 100;

  theoryData.sections.forEach((section) => {
    section.questions.forEach((q) => {
      const key = qKey(section.id, q.id);
      const user = answers[key];
      let ok = false;

      if (section.type === "truefalse" || section.type === "single") {
        if (!user) unanswered++;
        else if (user === q.answer) {
          ok = true;
          score += section.scorePerQuestion;
          correct++;
        } else wrong++;
      } else if (section.type === "multiple") {
        const u = (user || []).slice().sort();
        const c = (q.answer || []).slice().sort();
        if (!u.length) unanswered++;
        else if (JSON.stringify(u) === JSON.stringify(c)) {
          ok = true;
          score += section.scorePerQuestion;
          correct++;
        } else wrong++;
      }
    });
  });

  return { score: Math.round(score * 10) / 10, correct, wrong, unanswered, total };
}

function gradePractice() {
  let score = 0;
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;
  const section = { id: "quiz" };

  practiceData.quiz.forEach((q, idx) => {
    const key = qKey(section.id, q.id);
    const user = answers[key];
    let ok = false;

    if (q.type === "single") {
      if (!user) unanswered++;
      else if (user === q.answer) {
        ok = true;
        score += q.score;
        correct++;
      } else wrong++;
    } else if (q.type === "multiple") {
      const u = (user || []).slice().sort();
      const c = (q.answer || []).slice().sort();
      if (!u.length) unanswered++;
      else if (JSON.stringify(u) === JSON.stringify(c)) {
        ok = true;
        score += q.score;
        correct++;
      } else wrong++;
    } else if (q.type === "fill") {
      const vals = user || [];
      if (!vals.some(Boolean)) unanswered++;
      else if ((q.blanks || []).every((b, i) => compareFill(vals[i], b))) {
        ok = true;
        score += q.score;
        correct++;
      } else wrong++;
    }
  });

  return {
    score,
    correct,
    wrong,
    unanswered,
    total: practiceData.totalScore,
  };
}

function submitExam() {
  if (submitted) return;
  submitted = true;
  clearInterval(timerInterval);

  const result = currentExam === "theory" ? gradeTheory() : gradePractice();
  const pct = Math.round((result.score / result.total) * 100);
  let level = "需加强";
  if (pct >= 90) level = "优秀";
  else if (pct >= 80) level = "良好";
  else if (pct >= 60) level = "及格";

  $("#resultPanel").innerHTML = `
    <div class="score-circle">
      <span class="score-num">${result.score}</span>
      <span class="score-label">/ ${result.total} 分</span>
    </div>
    <h2>${level} · 得分率 ${pct}%</h2>
    <div class="result-stats">
      <div class="stat-item"><div class="val ok">${result.correct}</div><div class="lbl">答对</div></div>
      <div class="stat-item"><div class="val bad">${result.wrong}</div><div class="lbl">答错</div></div>
      <div class="stat-item"><div class="val">${result.unanswered}</div><div class="lbl">未答</div></div>
    </div>`;

  showView("resultView");
  currentSectionIdx = 0;
  renderExam();
  $("#reviewArea").innerHTML = `<h2 class="section-title" style="margin-top:1rem">答题详情（绿色=正确，红色=错误）</h2>`;
  document.querySelectorAll("#questionArea .question-card").forEach((card) => {
    $("#reviewArea").appendChild(card.cloneNode(true));
  });
  $("#questionArea").innerHTML = "";
  document.querySelector("#examView .actions-bar").classList.add("hidden");
}

function resetToHome() {
  submitted = false;
  answers = {};
  currentSectionIdx = 0;
  clearInterval(timerInterval);
  showView("homeView");
  $("#pageTitle").textContent = "人工智能训练师（三级）模拟考试";
  $("#timer").classList.add("hidden");
  document.querySelector("#examView .actions-bar").classList.remove("hidden");
}

function init() {
  loadData().then(() => {
    $$(".exam-card").forEach((card) => {
      card.addEventListener("click", () => startExam(card.dataset.exam));
    });

    $("#backBtn").addEventListener("click", resetToHome);
    $("#homeBtn").addEventListener("click", resetToHome);
    $("#retryBtn").addEventListener("click", () => {
      submitted = false;
      answers = {};
      currentSectionIdx = 0;
      document.querySelector("#examView .actions-bar").classList.remove("hidden");
      startExam(currentExam);
    });

    $("#submitBtn").addEventListener("click", () => {
      const sections = getSections();
      let totalQ = 0;
      let answeredQ = 0;
      sections.forEach((s) => {
        s.questions.forEach((q) => {
          totalQ++;
          const key = qKey(s.id, q.id);
          const a = answers[key];
          if (Array.isArray(a) ? a.some(Boolean) : a) answeredQ++;
        });
      });
      if (answeredQ < totalQ) {
        if (!confirm(`还有 ${totalQ - answeredQ} 题未作答，确定提交吗？`)) return;
      }
      submitExam();
    });

    $("#prevSectionBtn").addEventListener("click", () => {
      if (currentSectionIdx > 0) {
        currentSectionIdx--;
        renderExam();
        window.scrollTo(0, 0);
      }
    });

    $("#nextSectionBtn").addEventListener("click", () => {
      const sections = getSections();
      if (currentSectionIdx < sections.length - 1) {
        currentSectionIdx++;
        renderExam();
        window.scrollTo(0, 0);
      }
    });
  });
}

init();
