#!/usr/bin/env python3
"""从 AI-QUESTIONS 目录下的题目 HTML 生成汇总 index.html"""

import re
from pathlib import Path

import markdown

QUESTIONS_DIR = Path(__file__).parent
ROOT_DIR = QUESTIONS_DIR.parent


def extract_between_tags(html: str, tag: str, class_name: str | None = None) -> str:
    if class_name:
        pattern = rf'<{tag}[^>]*class="{class_name}"[^>]*>(.*?)</{tag}>'
    else:
        pattern = rf'<{tag}[^>]*>(.*?)</{tag}>'
    match = re.search(pattern, html, re.DOTALL | re.IGNORECASE)
    return match.group(1).strip() if match else ""


def extract_title(html: str) -> str:
    match = re.search(r"<title>(.*?)</title>", html, re.DOTALL | re.IGNORECASE)
    return match.group(1).strip() if match else ""


def extract_sections(html: str) -> dict[str, str]:
    parts = re.split(r"<h3>", html)
    sections: dict[str, str] = {}
    for part in parts[1:]:
        match = re.match(r"([^<]+)</h3>\s*(.*)", part, re.DOTALL)
        if match:
            sections[match.group(1).strip()] = match.group(2).strip()
    return sections


def strip_outer_p(text: str) -> str:
    text = text.strip()
    match = re.fullmatch(r"<p>(.*)</p>", text, re.DOTALL | re.IGNORECASE)
    return match.group(1).strip() if match else text


def extract_field(sections: dict[str, str], label: str) -> str:
    return sections.get(label, "")


def load_answer_html(q_id: str) -> str:
    if q_id.startswith("1.1."):
        return ""
    md_path = ROOT_DIR / q_id / f"{q_id}.md"
    if not md_path.exists():
        return ""
    md_text = md_path.read_text(encoding="utf-8")
    return markdown.markdown(
        md_text,
        extensions=["tables", "fenced_code", "sane_lists"],
    )


def parse_question_file(path: Path) -> dict:
    html = path.read_text(encoding="utf-8")
    left = extract_between_tags(html, "div", "left-column")
    right = extract_between_tags(html, "div", "right-column")

    left_sections = extract_sections(left)
    right_sections = extract_sections(right)

    code = extract_field(left_sections, "试题代码")
    if not code:
        code = path.stem.split("_")[0]

    q_id = path.stem.split("_")[0]

    return {
        "id": q_id,
        "filename": path.name,
        "title": extract_title(html),
        "code": code,
        "name": strip_outer_p(extract_field(left_sections, "试题名称")),
        "equipment": extract_field(left_sections, "场地设备要求"),
        "time": strip_outer_p(extract_field(left_sections, "考核时间")),
        "tasks": extract_field(left_sections, "工作任务"),
        "skills": extract_field(left_sections, "技能要求"),
        "quality": extract_field(left_sections, "质量指标"),
        "notes": extract_field(right_sections, "注意事项"),
        "uploads": extract_uploads(right),
        "answer": load_answer_html(q_id),
    }


def extract_uploads(right_html: str) -> list[str]:
    rows = re.findall(
        r"<tr[^>]*>\s*<td>(\d+)</td>\s*<td>(.*?)</td>",
        right_html,
        re.DOTALL | re.IGNORECASE,
    )
    return [req.strip() for _, req in rows]


def sort_key(q: dict) -> tuple:
    parts = q["id"].split(".")
    return tuple(int(p) for p in parts)


def chapter_label(chapter: str) -> str:
    labels = {
        "1": "模块一 · 业务分析与方案设计",
        "2": "模块二 · 智能系统部署与运维",
        "3": "模块三 · 智能产品测试与优化",
        "4": "模块四 · 培训与指导",
    }
    return labels.get(chapter, f"模块 {chapter}")


def build_html(questions: list[dict]) -> str:
    chapters: dict[str, list[dict]] = {}
    for q in questions:
        chapter = q["id"].split(".")[0]
        chapters.setdefault(chapter, []).append(q)

    nav_items = []
    sections = []

    for chapter in sorted(chapters.keys(), key=int):
        label = chapter_label(chapter)
        nav_items.append(f'<div class="nav-chapter">{label}</div>')
        for q in chapters[chapter]:
            nav_items.append(
                f'<a class="nav-item" href="#q-{q["id"]}" data-id="{q["id"]}">'
                f'<span class="nav-id">{q["id"]}</span>'
                f'<span class="nav-name">{q["name"] or q["title"]}</span>'
                f"</a>"
            )

        for q in chapters[chapter]:
            uploads_html = ""
            if q["uploads"]:
                items = "".join(f"<li>{u}</li>" for u in q["uploads"])
                uploads_html = f'<div class="field"><h4>答案上传要求</h4><ul>{items}</ul></div>'

            notes_html = ""
            if q["notes"]:
                notes_html = f'<div class="field notes"><h4>注意事项</h4>{q["notes"]}</div>'

            answer_html = ""
            if q["answer"]:
                answer_html = (
                    f'<div class="field answer"><h4>参考答案</h4>'
                    f'<div class="answer-content">{q["answer"]}</div></div>'
                )

            sections.append(f"""
<section class="question-card" id="q-{q['id']}">
  <div class="card-header">
    <span class="badge">{q['id']}</span>
    <h2>{q['name'] or q['title']}</h2>
    <a class="open-original" href="{q['filename']}" target="_blank" title="在新标签页打开原始页面">↗ 原始页面</a>
  </div>
  <div class="card-meta">
    <span class="meta-item">⏱ {q['time'] or '—'}</span>
    <span class="meta-item">📄 {q['filename']}</span>
  </div>
  <div class="card-body">
    <div class="field"><h4>场地设备要求</h4>{q['equipment'] or '<p>—</p>'}</div>
    <div class="field highlight"><h4>工作任务</h4>{q['tasks'] or '<p>—</p>'}</div>
    <div class="field"><h4>技能要求</h4>{q['skills'] or '<p>—</p>'}</div>
    <div class="field"><h4>质量指标</h4>{q['quality'] or '<p>—</p>'}</div>
    {notes_html}
    {uploads_html}
    {answer_html}
  </div>
</section>""")

    total = len(questions)
    first = questions[0] if questions else {"id": "", "name": ""}

    return f"""<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>人工智能训练师三级 · 全部试题汇总</title>
  <style>
    :root {{
      --bg: #f4f6f9;
      --sidebar-bg: #1e293b;
      --sidebar-text: #cbd5e1;
      --sidebar-active: #3b82f6;
      --card-bg: #ffffff;
      --text: #1e293b;
      --text-muted: #64748b;
      --border: #e2e8f0;
      --accent: #2563eb;
      --highlight-bg: #eff6ff;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    html {{ scroll-behavior: smooth; }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }}
    .layout {{
      display: flex;
      min-height: 100vh;
    }}
    .sidebar {{
      width: 300px;
      min-width: 300px;
      background: var(--sidebar-bg);
      color: var(--sidebar-text);
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }}
    .sidebar-header {{
      padding: 20px 16px 12px;
      border-bottom: 1px solid #334155;
      flex-shrink: 0;
    }}
    .sidebar-header h1 {{
      font-size: 15px;
      color: #f1f5f9;
      line-height: 1.4;
      margin-bottom: 4px;
    }}
    .sidebar-header .count {{
      font-size: 12px;
      color: #94a3b8;
    }}
    .search-box {{
      padding: 10px 16px;
      flex-shrink: 0;
    }}
    .search-box input {{
      width: 100%;
      padding: 8px 12px;
      border: none;
      border-radius: 6px;
      background: #334155;
      color: #f1f5f9;
      font-size: 13px;
      outline: none;
    }}
    .search-box input::placeholder {{ color: #94a3b8; }}
    .search-box input:focus {{ background: #475569; }}
    .nav-list {{
      flex: 1;
      overflow-y: auto;
      padding: 8px 0 20px;
    }}
    .nav-chapter {{
      padding: 10px 16px 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
    }}
    .nav-item {{
      display: flex;
      gap: 8px;
      padding: 7px 16px;
      text-decoration: none;
      color: var(--sidebar-text);
      font-size: 13px;
      border-left: 3px solid transparent;
      transition: background 0.15s, border-color 0.15s;
    }}
    .nav-item:hover {{ background: #334155; }}
    .nav-item.active {{
      background: #1e3a5f;
      border-left-color: var(--sidebar-active);
      color: #f1f5f9;
    }}
    .nav-id {{
      flex-shrink: 0;
      font-weight: 600;
      color: #60a5fa;
      min-width: 36px;
    }}
    .nav-name {{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }}
    .main {{
      flex: 1;
      padding: 24px 32px 60px;
      max-width: 960px;
    }}
    .page-header {{
      margin-bottom: 28px;
    }}
    .page-header h1 {{
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 6px;
    }}
    .page-header p {{
      color: var(--text-muted);
      font-size: 14px;
    }}
    .question-card {{
      display: none;
      background: var(--card-bg);
      border-radius: 10px;
      border: 1px solid var(--border);
      margin-bottom: 20px;
      overflow: hidden;
      scroll-margin-top: 16px;
    }}
    .question-card.active {{
      display: block;
    }}
    .card-header {{
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      border-bottom: 1px solid var(--border);
      background: #f8fafc;
    }}
    .badge {{
      background: var(--accent);
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 20px;
      flex-shrink: 0;
    }}
    .card-header h2 {{
      font-size: 16px;
      font-weight: 600;
      flex: 1;
      line-height: 1.4;
    }}
    .open-original {{
      font-size: 12px;
      color: var(--accent);
      text-decoration: none;
      white-space: nowrap;
      padding: 4px 8px;
      border: 1px solid var(--border);
      border-radius: 5px;
      background: #fff;
    }}
    .open-original:hover {{ background: var(--highlight-bg); }}
    .card-meta {{
      display: flex;
      gap: 16px;
      padding: 8px 20px;
      background: #f8fafc;
      border-bottom: 1px solid var(--border);
      font-size: 12px;
      color: var(--text-muted);
    }}
    .card-body {{ padding: 16px 20px; }}
    .field {{ margin-bottom: 16px; }}
    .field:last-child {{ margin-bottom: 0; }}
    .field h4 {{
      font-size: 13px;
      font-weight: 600;
      color: var(--text-muted);
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }}
    .field p {{ font-size: 14px; margin-bottom: 6px; }}
    .field p:last-child {{ margin-bottom: 0; }}
    .field.highlight {{
      background: var(--highlight-bg);
      border-radius: 8px;
      padding: 12px 14px;
      border-left: 3px solid var(--accent);
    }}
    .field.notes {{
      background: #fffbeb;
      border-radius: 8px;
      padding: 12px 14px;
      border-left: 3px solid #f59e0b;
    }}
    .field.answer {{
      background: #f0fdf4;
      border-radius: 8px;
      padding: 12px 14px;
      border-left: 3px solid #22c55e;
    }}
    .field.answer .answer-content {{
      font-size: 14px;
      line-height: 1.7;
    }}
    .field.answer .answer-content h1,
    .field.answer .answer-content h2,
    .field.answer .answer-content h3,
    .field.answer .answer-content h4 {{
      font-size: 15px;
      font-weight: 600;
      color: var(--text);
      margin: 14px 0 8px;
      text-transform: none;
      letter-spacing: normal;
    }}
    .field.answer .answer-content h1 {{ font-size: 17px; }}
    .field.answer .answer-content h2 {{ font-size: 16px; }}
    .field.answer .answer-content p {{ margin-bottom: 8px; }}
    .field.answer .answer-content ul,
    .field.answer .answer-content ol {{
      padding-left: 22px;
      margin-bottom: 8px;
    }}
    .field.answer .answer-content li {{ margin-bottom: 4px; }}
    .field.answer .answer-content table {{
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
      font-size: 13px;
    }}
    .field.answer .answer-content th,
    .field.answer .answer-content td {{
      border: 1px solid var(--border);
      padding: 6px 10px;
      text-align: left;
    }}
    .field.answer .answer-content th {{
      background: #dcfce7;
      font-weight: 600;
    }}
    .field.answer .answer-content hr {{
      border: none;
      border-top: 1px solid var(--border);
      margin: 14px 0;
    }}
    .field.answer .answer-content blockquote {{
      border-left: 3px solid #86efac;
      padding-left: 12px;
      color: var(--text-muted);
      margin: 8px 0;
    }}
    .field.answer .answer-content code {{
      background: #ecfdf5;
      padding: 1px 5px;
      border-radius: 3px;
      font-size: 13px;
    }}
    .field ul {{
      padding-left: 20px;
      font-size: 14px;
    }}
    .field li {{ margin-bottom: 4px; }}
    .back-top {{
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--accent);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      font-size: 18px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(37,99,235,0.4);
      display: none;
      align-items: center;
      justify-content: center;
    }}
    .back-top.visible {{ display: flex; }}
    @media (max-width: 768px) {{
      .layout {{ flex-direction: column; }}
      .sidebar {{
        width: 100%;
        height: auto;
        position: relative;
        max-height: 40vh;
      }}
      .main {{ padding: 16px; }}
    }}
  </style>
</head>
<body>
<div class="layout">
  <aside class="sidebar">
    <div class="sidebar-header">
      <h1>人工智能训练师三级<br>试题汇总</h1>
      <div class="count">共 {total} 道题目</div>
    </div>
    <div class="search-box">
      <input type="search" id="search" placeholder="搜索题号或题目名称…" autocomplete="off">
    </div>
    <nav class="nav-list" id="nav-list">
      {''.join(nav_items)}
    </nav>
  </aside>
  <main class="main">
    <div class="page-header">
      <h1 id="page-title">{first['id']}</h1>
      <p id="page-subtitle">{first['name'] or first.get('title', '')}</p>
    </div>
    {''.join(sections)}
  </main>
</div>
<button class="back-top" id="back-top" title="回到顶部">↑</button>
<script>
  const search = document.getElementById('search');
  const navItems = document.querySelectorAll('.nav-item');
  const cards = document.querySelectorAll('.question-card');
  const pageTitle = document.getElementById('page-title');
  const pageSubtitle = document.getElementById('page-subtitle');

  function showQuestion(id) {{
    const card = document.getElementById('q-' + id);
    if (!card) return;
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    navItems.forEach(n => n.classList.toggle('active', n.dataset.id === id));
    const title = card.querySelector('.card-header h2');
    pageTitle.textContent = id;
    pageSubtitle.textContent = title ? title.textContent : '';
    history.replaceState(null, '', '#q-' + id);
    document.querySelector('.main').scrollTop = 0;
    window.scrollTo({{ top: 0, behavior: 'instant' }});
  }}

  navItems.forEach(item => {{
    item.addEventListener('click', e => {{
      e.preventDefault();
      showQuestion(item.dataset.id);
    }});
  }});

  search.addEventListener('input', () => {{
    const q = search.value.trim().toLowerCase();
    navItems.forEach(item => {{
      const text = item.textContent.toLowerCase();
      const match = !q || text.includes(q);
      item.style.display = match ? '' : 'none';
    }});
    document.querySelectorAll('.nav-chapter').forEach(ch => {{
      let next = ch.nextElementSibling;
      let anyVisible = false;
      while (next && !next.classList.contains('nav-chapter')) {{
        if (next.style.display !== 'none') anyVisible = true;
        next = next.nextElementSibling;
      }}
      ch.style.display = anyVisible ? '' : 'none';
    }});
  }});

  const hash = location.hash.replace('#q-', '');
  showQuestion(hash && document.getElementById('q-' + hash) ? hash : '1.1.1');

  const backTop = document.getElementById('back-top');
  window.addEventListener('scroll', () => {{
    backTop.classList.toggle('visible', window.scrollY > 400);
  }});
  backTop.addEventListener('click', () => window.scrollTo({{ top: 0, behavior: 'smooth' }}));
</script>
</body>
</html>"""


def main():
    files = sorted(
        [
            f
            for f in QUESTIONS_DIR.glob("*.html")
            if f.name != "index.html"
        ],
        key=lambda p: sort_key({"id": p.stem.split("_")[0]}),
    )
    questions = [parse_question_file(f) for f in files]
    output = build_html(questions)
    out_path = QUESTIONS_DIR / "index.html"
    out_path.write_text(output, encoding="utf-8")
    answer_count = sum(1 for q in questions if q["answer"])
    print(f"已生成 {out_path}，共 {len(questions)} 道题目，其中 {answer_count} 道含参考答案")


if __name__ == "__main__":
    main()
