#!/usr/bin/env python3
"""从 Markdown 模拟卷提取题目与答案，生成 mock-exam/data/*.json"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
OUT = Path(__file__).parent / "data"


def clean_text(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def parse_theory_md(text: str) -> dict:
    parts = text.split("人工智能训练师（三级）理论知识试卷答案")
    body, ans_body = parts[0], (parts[1] if len(parts) > 1 else "")

    # 判断题
    tf_match = re.search(r"一、判断题.*?二、单选题", body, re.DOTALL)
    tf_text = tf_match.group(0) if tf_match else ""
    tf_questions = []
    for m in re.finditer(
        r"\(\s*\)\s*(\d+)\.\s*(.+?)(?=\(\s*\)\s*\d+\.|二、单选题)",
        tf_text,
        re.DOTALL,
    ):
        tf_questions.append(
            {"id": int(m.group(1)), "text": clean_text(m.group(2))}
        )

    # 单选题
    sc_match = re.search(r"二、单选题.*?三、多选题", body, re.DOTALL)
    sc_text = sc_match.group(0) if sc_match else ""
    sc_questions = []
    for m in re.finditer(
        r"^(\d+)\.\s*(.+?)(?=^\d+\.\s|^三、多选题)",
        sc_text,
        re.DOTALL | re.MULTILINE,
    ):
        block = m.group(2).strip()
        stem_m = re.match(r"(.+?)(?=\n[（(][A-D][）)])", block, re.DOTALL)
        if not stem_m:
            continue
        stem = clean_text(stem_m.group(1))
        options = {}
        for opt in re.finditer(
            r"[（(]([A-D])[）)]\s*(.+?)(?=[（(][A-D][）)]|$)", block, re.DOTALL
        ):
            options[opt.group(1)] = clean_text(opt.group(2))
        if len(options) >= 4:
            sc_questions.append(
                {"id": int(m.group(1)), "text": stem, "options": options}
            )

    # 多选题
    mc_match = re.search(r"三、多选题.*?$", body, re.DOTALL)
    mc_text = mc_match.group(0) if mc_match else ""
    mc_questions = []
    for m in re.finditer(
        r"^(\d+)\.\s*(.+?)(?=^\d+\.\s|\Z)",
        mc_text,
        re.DOTALL | re.MULTILINE,
    ):
        block = m.group(2).strip()
        stem_m = re.match(r"(.+?)(?=\n[（(][A-E][）)])", block, re.DOTALL)
        if not stem_m:
            continue
        stem = clean_text(stem_m.group(1))
        options = {}
        for opt in re.finditer(
            r"[（(]([A-E])[）)]\s*(.+?)(?=[（(][A-E][）)]|$)", block, re.DOTALL
        ):
            options[opt.group(1)] = clean_text(opt.group(2))
        if len(options) >= 4:
            mc_questions.append(
                {"id": int(m.group(1)), "text": stem, "options": options}
            )

    # 答案
    tf_answers: dict[int, str] = {}
    tf_ans = re.search(
        r"判断题参考答案.*?1-10）(.+?)\n11-20）(.+?)\n21-30）(.+?)\n31-40）(.+?)\n",
        ans_body,
        re.DOTALL,
    )
    if tf_ans:
        idx = 1
        for g in range(1, 5):
            for sym in re.findall(r"[√×]", tf_ans.group(g)):
                tf_answers[idx] = "T" if sym == "√" else "F"
                idx += 1

    sc_answers: dict[int, str] = {}
    sc_ans = re.search(
        r"单选题参考答案.*?1-10）\s*(.+?)\n11-20）\s*(.+?)\n21-30）\s*(.+?)\n31-40）\s*(.+?)\n"
        r"41-50）\s*(.+?)\n51-60）\s*(.+?)\n61-70）\s*(.+?)\n71-80）\s*(.+?)\n81-90）\s*(.+?)\n"
        r"91-100）\s*(.+?)\n101-110）\s*(.+?)\n111-120）\s*(.+?)\n121-130）\s*(.+?)\n131-140）\s*(.+?)\n",
        ans_body,
        re.DOTALL,
    )
    if sc_ans:
        idx = 1
        for g in range(1, 15):
            letters = re.sub(r"\s+", "", sc_ans.group(g))
            for ch in letters:
                sc_answers[idx] = ch
                idx += 1

    mc_answers: dict[int, list[str]] = {}
    mc_ans_block = re.search(r"多选题参考答案.*?(\d+[）)].*)", ans_body, re.DOTALL)
    if mc_ans_block:
        for num, ans in re.findall(r"(\d+)[）)]\s*([A-E]+)", mc_ans_block.group(0)):
            mc_answers[int(num)] = sorted(list(ans))

    return {
        "title": "人工智能训练师（三级）理论知识模拟试卷",
        "timeLimit": 90,
        "totalScore": 100,
        "sections": [
            {
                "id": "tf",
                "name": "一、判断题",
                "type": "truefalse",
                "scorePerQuestion": 0.5,
                "questions": [
                    {**q, "answer": tf_answers.get(q["id"], "")} for q in tf_questions
                ],
            },
            {
                "id": "sc",
                "name": "二、单选题",
                "type": "single",
                "scorePerQuestion": 0.5,
                "questions": [
                    {**q, "answer": sc_answers.get(q["id"], "")} for q in sc_questions
                ],
            },
            {
                "id": "mc",
                "name": "三、多选题",
                "type": "multiple",
                "scorePerQuestion": 1,
                "questions": [
                    {**q, "answer": mc_answers.get(q["id"], [])} for q in mc_questions
                ],
            },
        ],
    }


def parse_task_blocks(text: str) -> list[dict]:
    """从考核通知单提取6道实操题概览"""
    notice = text.split("人工智能训练师（三级）操作技能考核\n试题单")[0]
    tasks = []
    for m in re.finditer(
        r"试题\d+\s*\n试题代码：([\d.]+)\s*\n试题名称：(.+?)\s*\n考核时间：(\d+min)\s*\n配分：(\d+)分",
        notice,
    ):
        tasks.append(
            {
                "code": m.group(1),
                "name": clean_text(m.group(2)),
                "time": m.group(3),
                "score": int(m.group(4)),
            }
        )
    return tasks


def build_practice_quiz() -> list[dict]:
    """基于参考答案构建可自动判分的实操知识点/代码填空题"""
    return [
        {
            "id": "p1",
            "taskCode": "1.1.1",
            "type": "single",
            "score": 2,
            "text": "1.1.1 题中，高风险患者的定义是住院天数超过多少天？",
            "options": {"A": "5天", "B": "7天", "C": "10天", "D": "14天"},
            "answer": "B",
        },
        {
            "id": "p2",
            "taskCode": "1.1.1",
            "type": "fill",
            "score": 2,
            "text": "补全代码：根据住院天数判断风险等级",
            "code": "data['RiskLevel'] = np.where(data['DaysInHospital'] > ___, '高风险患者', '低风险患者')",
            "blanks": ["7"],
            "hint": "住院天数阈值",
        },
        {
            "id": "p3",
            "taskCode": "1.1.1",
            "type": "fill",
            "score": 2,
            "text": "补全代码：BMI 区间划分（左闭右开）",
            "code": "data['BMIRange'] = pd.cut(data['BMI'], bins=bmi_bins, labels=bmi_labels, right=___)",
            "blanks": ["False"],
            "hint": "right 参数",
        },
        {
            "id": "p4",
            "taskCode": "2.1.1",
            "type": "fill",
            "score": 2,
            "text": "补全代码：删除缺失值",
            "code": "data = data.___()",
            "blanks": ["dropna"],
        },
        {
            "id": "p5",
            "taskCode": "2.1.1",
            "type": "fill",
            "score": 2,
            "text": "补全代码：horsepower 转数值，无法转换设为 NaN",
            "code": "data['horsepower'] = pd.to_numeric(data['horsepower'], errors='___')",
            "blanks": ["coerce"],
        },
        {
            "id": "p6",
            "taskCode": "2.1.1",
            "type": "multiple",
            "score": 3,
            "text": "2.1.1 题选择的特征包括哪些？（多选，不含目标变量 mpg）",
            "options": {
                "A": "cylinders",
                "B": "displacement",
                "C": "horsepower",
                "D": "weight",
                "E": "mpg",
            },
            "answer": ["A", "B", "C", "D"],
        },
        {
            "id": "p7",
            "taskCode": "2.2.1",
            "type": "single",
            "score": 2,
            "text": "2.2.1 题使用的分类模型是？",
            "options": {
                "A": "决策树",
                "B": "Logistic 回归",
                "C": "SVM",
                "D": "随机森林",
            },
            "answer": "B",
        },
        {
            "id": "p8",
            "taskCode": "2.2.1",
            "type": "fill",
            "score": 2,
            "text": "补全代码：处理数据不平衡",
            "code": "from imblearn.over_sampling import ___\nsmote = SMOTE(random_state=42)\nX_resampled, y_resampled = smote.fit_resample(X_train, y_train)",
            "blanks": ["SMOTE"],
        },
        {
            "id": "p9",
            "taskCode": "2.2.1",
            "type": "fill",
            "score": 2,
            "text": "补全代码：Logistic 回归最大迭代次数",
            "code": "model = LogisticRegression(max_iter=___)",
            "blanks": ["1000"],
        },
        {
            "id": "p10",
            "taskCode": "3.1.1",
            "type": "multiple",
            "score": 3,
            "text": "3.1.1 参考答案：最常被使用的功能有哪些？（多选）",
            "options": {
                "A": "调整音量",
                "B": "查询新闻",
                "C": "查天气",
                "D": "控制家居",
            },
            "answer": ["A", "B", "C"],
        },
        {
            "id": "p11",
            "taskCode": "3.1.1",
            "type": "single",
            "score": 2,
            "text": "3.1.1 参考答案：最受欢迎的功能是？",
            "options": {
                "A": "播放音乐",
                "B": "调整音量",
                "C": "查天气",
                "D": "控制家居",
            },
            "answer": "B",
        },
        {
            "id": "p12",
            "taskCode": "3.2.1",
            "type": "fill",
            "score": 2,
            "text": "补全代码：加载 ONNX 模型",
            "code": "session = ort.InferenceSession('___')",
            "blanks": ["resnet.onnx"],
        },
        {
            "id": "p13",
            "taskCode": "3.2.1",
            "type": "fill",
            "score": 2,
            "text": "补全代码：获取 Top5 类别索引",
            "code": "top5_idx = np.argsort(probabilities[0])[-5:][___]",
            "blanks": ["::-1"],
        },
        {
            "id": "p14",
            "taskCode": "3.2.1",
            "type": "single",
            "score": 2,
            "text": "3.2.1 题使用的深度学习推理框架是？",
            "options": {
                "A": "TensorFlow",
                "B": "ONNX Runtime",
                "C": "PyTorch 训练",
                "D": "OpenCV DNN",
            },
            "answer": "B",
        },
        {
            "id": "p15",
            "taskCode": "4.2.1",
            "type": "multiple",
            "score": 3,
            "text": "4.2.1 参考答案：数据采集方法包括哪些？（多选）",
            "options": {
                "A": "API 接口",
                "B": "传感器和物联网设备",
                "C": "社交媒体监听",
                "D": "仅手工抄录",
            },
            "answer": ["A", "B", "C"],
        },
        {
            "id": "p16",
            "taskCode": "4.2.1",
            "type": "multiple",
            "score": 3,
            "text": "4.2.1 参考答案：数据预处理步骤包括哪些？（多选）",
            "options": {
                "A": "清洗",
                "B": "标准化",
                "C": "整合",
                "D": "直接删除全部数据",
            },
            "answer": ["A", "B", "C"],
        },
    ]


def parse_practice_md(text: str) -> dict:
    tasks = parse_task_blocks(text)
    quiz = build_practice_quiz()
    total_score = sum(q["score"] for q in quiz)
    return {
        "title": "人工智能训练师（三级）操作技能模拟试卷",
        "description": "基于6道实操题参考答案的知识点自测与代码填空（共16题）",
        "tasks": tasks,
        "quiz": quiz,
        "totalScore": total_score,
    }


def main():
    OUT.mkdir(parents=True, exist_ok=True)

    theory_md = (ROOT / "选择题模拟.md").read_text(encoding="utf-8")
    practice_md = (ROOT / "实操题模拟.md").read_text(encoding="utf-8")

    theory = parse_theory_md(theory_md)
    practice = parse_practice_md(practice_md)

    (OUT / "theory.json").write_text(
        json.dumps(theory, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (OUT / "practice.json").write_text(
        json.dumps(practice, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    tf = len(theory["sections"][0]["questions"])
    sc = len(theory["sections"][1]["questions"])
    mc = len(theory["sections"][2]["questions"])
    print(f"理论知识: 判断{tf} 单选{sc} 多选{mc}")
    print(f"操作技能: {len(practice['tasks'])}道实操题, {len(practice['quiz'])}道自测题")


if __name__ == "__main__":
    main()
