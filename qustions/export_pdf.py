import re
import subprocess
from pathlib import Path

BASE = Path(__file__).resolve().parent
SRC = BASE / 'index.html'
TMP = BASE / '_index_print.html'
OUT = BASE / 'index.pdf'
CHROME = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

PRINT_CSS = '''
    @media print {
      .sidebar, .search-box, .open-original { display: none !important; }
      .layout { display: block !important; min-height: auto !important; }
      .main { width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 12px !important; }
      body { background: #fff !important; }
      .question-card {
        display: block !important;
        page-break-inside: avoid;
        break-inside: avoid-page;
        margin: 0 0 16px 0 !important;
        box-shadow: none !important;
        border: 1px solid #ddd !important;
      }
      .card-body { overflow: visible !important; }
      .answer-content { overflow: visible !important; }
      a { color: inherit !important; text-decoration: none !important; }
    }
'''

html = SRC.read_text(encoding='utf-8')
html = html.replace('</head>', f'<style>{PRINT_CSS}</style>\n</head>', 1)
TMP.write_text(html, encoding='utf-8')

file_url = TMP.as_uri()
cmd = [
    CHROME,
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw',
    f'--print-to-pdf={OUT}',
    file_url,
]
result = subprocess.run(cmd, capture_output=True)
if result.returncode != 0:
    raise SystemExit(f'Chrome failed with code {result.returncode}')
if not OUT.exists():
    raise SystemExit('PDF was not created')

size_kb = OUT.stat().st_size / 1024
print(f'Exported: {OUT}')
print(f'Size: {size_kb:.1f} KB')
