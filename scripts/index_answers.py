"""从 qustions/index.html 解析操作题简答题参考答案。"""



from __future__ import annotations



import html as html_lib

import re

from pathlib import Path



from doc_templates import DOC_TEMPLATES



ROOT = Path(__file__).resolve().parents[1]

INDEX_HTML = ROOT / "qustions" / "index.html"



TARGET_QIDS = (

    [f"1.2.{i}" for i in range(1, 6)]

    + [f"2.1.{i}" for i in range(1, 6)]

    + [f"2.2.{i}" for i in range(1, 6)]

    + [f"3.2.{i}" for i in range(1, 5)]  # 3.2.5 无 doc 简答

    + [f"4.1.{i}" for i in range(1, 6)]

    + [f"4.2.{i}" for i in range(1, 6)]

)





def html_block_to_text(block: str) -> str:

    text = block or ""

    text = re.sub(r"<br\s*/?>", "\n", text, flags=re.I)

    text = re.sub(r"</p>", "\n\n", text, flags=re.I)

    text = re.sub(r"</li>", "\n", text, flags=re.I)

    text = re.sub(r"<li[^>]*>", "• ", text, flags=re.I)

    text = re.sub(r"</h[1-6]>", "\n\n", text, flags=re.I)

    text = re.sub(r"<hr\s*/?>", "\n---\n", text, flags=re.I)

    text = re.sub(r"<[^>]+>", "", text)

    text = html_lib.unescape(text)

    text = text.replace("\r\n", "\n").replace("\r", "\n")

    text = re.sub(r"[ \t]+\n", "\n", text)

    text = re.sub(r"\n{3,}", "\n\n", text)

    return text.strip()





def extract_answer_html(index_text: str, qid: str) -> str:

    pattern = rf'<section class="question-card" id="q-{re.escape(qid)}">.*?<div class="answer-content">(.*?)</div></div>\s*</div>\s*</section>'

    match = re.search(pattern, index_text, re.S)

    if not match:

        return ""

    return match.group(1)





def parse_two_part_h2(content: str, qid: str) -> list[str]:

    parts = re.split(rf"<h2>题号\s*{re.escape(qid)}-\d+[^<]*</h2>", content, flags=re.I)

    answers = [html_block_to_text(part) for part in parts[1:] if part.strip()]

    return answers[:2]





def parse_two_part_h3(content: str) -> list[str]:

    clean = re.sub(r"<h2>简答题参考答案[^<]*</h2>", "", content, flags=re.I)

    m1 = re.search(r"<h3>一、数据清洗规范</h3>(.*?)(?=<h3>二、|$)", clean, re.S | re.I)

    m2 = re.search(r"<h3>二、[^<]+</h3>(.*)", clean, re.S | re.I)

    return [

        html_block_to_text(m1.group(1)) if m1 else "",

        html_block_to_text(m2.group(1)) if m2 else "",

    ]





def parse_hci_answer(content: str) -> list[str]:

    """3.2.x 人机交互简答：整段参考答案作为单个 textarea 答案。"""

    body = re.sub(r"<h1>[^<]*</h1>", "", content, count=1, flags=re.I)

    text = html_block_to_text(body)

    return [text] if text else []





def parse_outline_answers_by_section(content: str) -> dict[str, str]:

    """4.1.x 培训大纲：按章节标题提取「学习目标」填空答案。"""

    result: dict[str, str] = {}

    chunks = re.split(r"<hr\s*/?>", content, flags=re.I)

    for chunk in chunks:

        h2 = re.search(r"<h2>([^<]+)</h2>", chunk, re.I)

        if not h2:

            continue

        title = html_block_to_text(h2.group(1)).strip()

        goal = re.search(

            r"学习目标[：:]\s*</strong>\s*(.+?)</p>",

            chunk,

            re.S | re.I,

        )

        if not goal:

            goal = re.search(r"学习目标[：:]\s*(.+?)</p>", chunk, re.S | re.I)

        if goal:

            result[title] = html_block_to_text(goal.group(1))

    return result





def parse_sequential_blanks(content: str) -> list[str]:

    """4.2.x 指导方案：按顺序提取各空白处 blockquote 答案。"""

    answers: list[str] = []

    for bq in re.finditer(r"<blockquote>\s*<p>(.*?)</p>\s*</blockquote>", content, re.S | re.I):

        text = html_block_to_text(bq.group(1))

        if not text or text.startswith("说明："):

            continue

        answers.append(text)

    return answers





def extract_table_maps(content: str) -> tuple[dict[str, str], dict[str, list[str]]]:

    """返回 (label->value, label->[values])，后者用于多列指标表。"""

    kv: dict[str, str] = {}

    multi: dict[str, list[str]] = {}



    table_html = re.search(r"<table>.*?</table>", content, re.S | re.I)

    if not table_html:

        return kv, multi



    for tr in re.finditer(r"<tr>(.*?)</tr>", table_html.group(0), re.S | re.I):

        row = tr.group(1)

        if "<th>" in row:

            continue

        cells = [html_block_to_text(td) for td in re.findall(r"<td[^>]*>(.*?)</td>", row, re.S | re.I)]

        cells = [c for c in cells if c]

        if len(cells) < 2:

            continue

        label = cells[0]

        if len(cells) == 2:

            kv[label] = cells[1]

        else:

            multi[label] = cells[1:]



    return kv, multi





def extract_report_texts(content: str) -> tuple[str, str]:

    err = re.search(r"<h3>2、错误分析</h3>(.*?)(?=<h3>3、|$)", content, re.S | re.I)

    imp = re.search(r"<h3>3、改进建议</h3>(.*?)(?=<hr|</div>|$)", content, re.S | re.I)

    acc = re.search(r"<p>准确率[^<]*<strong>([^<]+)</strong>", content, re.I)



    err_text = html_block_to_text(err.group(1)) if err else ""

    if acc:

        prefix = f"准确率 accuracy = {acc.group(1).strip()}"

        err_text = f"{prefix}\n\n{err_text}".strip() if err_text else prefix



    imp_text = html_block_to_text(imp.group(1)) if imp else ""

    return err_text, imp_text





def count_input_fields(sections: list[dict]) -> int:

    total = 0

    for sec in sections:

        stype = sec.get("type")

        if stype in {"heading", "subheading", "group_title", "note", "block_title", "text_line"}:

            continue

        if stype == "fill_line":

            total += len([s for s in sec.get("segments", []) if s.get("type") == "blank"])

        elif stype == "input":

            total += 1

        elif stype == "inline_row":

            total += sec.get("cells", 1)

        elif stype == "textarea":

            total += 1

        elif stype == "grid_table":

            col_count = max(len(sec.get("headers", [])) - 1, 0)

            total += col_count * len(sec.get("rowLabels", []))

        elif stype == "table":

            for row in sec.get("rows", []):

                total += row.get("cells", 1)

    return total





def build_fill_blank_answer_array(template: dict, blanks: list[str]) -> list[str]:

    answers: list[str] = []

    idx = 0

    for sec in template.get("sections", []):

        if sec.get("type") != "fill_line":

            continue

        for seg in sec.get("segments", []):

            if seg.get("type") == "blank":

                answers.append(blanks[idx] if idx < len(blanks) else "")

                idx += 1

    return answers





def build_outline_answer_array(template: dict, content: str) -> list[str]:

    section_answers = parse_outline_answers_by_section(content)

    answers: list[str] = []

    current_block: str | None = None



    for sec in template.get("sections", []):

        stype = sec.get("type")

        if stype == "block_title":

            current_block = sec.get("text", "")

        elif stype == "fill_line" and current_block:

            for seg in sec.get("segments", []):

                if seg.get("type") == "blank":

                    answers.append(section_answers.get(current_block, ""))

    return answers





def build_doc_answer_array(qid: str, template: dict, content: str) -> list[str]:

    sections = template.get("sections", [])

    kv, multi = extract_table_maps(content)

    err_text, imp_text = extract_report_texts(content)



    answers: list[str] = []

    for sec in sections:

        stype = sec.get("type")

        if stype in {"heading", "subheading", "group_title", "note", "block_title", "text_line"}:

            continue



        if stype == "table":

            for row in sec.get("rows", []):

                label = row.get("label", "")

                cell_count = row.get("cells", 1)

                if label in multi:

                    values = multi[label]

                    for i in range(cell_count):

                        answers.append(values[i] if i < len(values) else "")

                elif cell_count > 1:

                    for i in range(cell_count):

                        answers.append(kv.get(label, ""))

                else:

                    answers.append(kv.get(label, ""))

            continue



        if stype == "textarea":

            label = sec.get("label", "")

            if "错误" in label:

                answers.append(err_text)

            else:

                answers.append(imp_text)

            continue



    return answers





def parse_doc_answers_for_qid(qid: str, content: str) -> list[str]:

    if qid.startswith("1.2."):

        return parse_two_part_h2(content, qid)

    if qid.startswith("2.1."):

        return parse_two_part_h3(content)

    if qid.startswith("2.2.") and qid in DOC_TEMPLATES:

        return build_doc_answer_array(qid, DOC_TEMPLATES[qid], content)

    if qid.startswith("3.2.") and qid in DOC_TEMPLATES:

        return parse_hci_answer(content)

    if qid.startswith("4.1.") and qid in DOC_TEMPLATES:

        return build_outline_answer_array(DOC_TEMPLATES[qid], content)

    if qid.startswith("4.2.") and qid in DOC_TEMPLATES:

        blanks = parse_sequential_blanks(content)

        return build_fill_blank_answer_array(DOC_TEMPLATES[qid], blanks)



    return []





def load_index_answers(index_path: Path | None = None) -> dict[str, list[str]]:

    path = index_path or INDEX_HTML

    text = path.read_text(encoding="utf-8")

    result: dict[str, list[str]] = {}



    for qid in TARGET_QIDS:

        content = extract_answer_html(text, qid)

        if not content:

            continue

        answers = parse_doc_answers_for_qid(qid, content)

        if answers:

            result[qid] = answers



    return result





_ANSWER_CACHE: dict[str, list[str]] | None = None





def get_index_answers() -> dict[str, list[str]]:

    global _ANSWER_CACHE

    if _ANSWER_CACHE is None:

        _ANSWER_CACHE = load_index_answers()

    return _ANSWER_CACHE





if __name__ == "__main__":

    data = load_index_answers()

    for qid in TARGET_QIDS:

        ans = data.get(qid, [])

        template = DOC_TEMPLATES.get(qid, {})

        expected = count_input_fields(template.get("sections", [])) if template else len(ans)

        status = "OK" if len(ans) == expected else "MISMATCH"

        print(f"{qid}: parsed={len(ans)} expected={expected} [{status}]")


