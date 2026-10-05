"""Verify local font glyph coverage against actual rendered text from browser QA."""
from pathlib import Path
import json, re, sys, unicodedata
root = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(root / '.runtime/font-audit'))
from fontTools.ttLib import TTFont
pages = json.loads((root/'work/layout-audit-v8-final.json').read_text(encoding='utf-8'))
text = '\n'.join(p['text'] for p in pages)
vietnamese = {ord(c) for c in text if c.isalpha() and 'LATIN' in unicodedata.name(c, '')}
results = []
for weight in (400,500,600,700,800):
    fonts = list((root/'public/assets/fonts').glob(f'*-{weight}-normal.woff2'))
    codes = set()
    for font in fonts:
        face = TTFont(font)
        codes.update(face.getBestCmap())
        face.close()
    missing = sorted(vietnamese-codes)
    results.append({'weight':weight,'files':len(fonts),'missing':[chr(c) for c in missing]})
    assert len(fonts)==3 and not missing, (weight, missing)
assert '\ufffd' not in text
assert unicodedata.normalize('NFC',text)==text
report={'weights':results,'latinLettersChecked':len(vietnamese),'replacementCharacters':0,'normalization':'NFC'}
(root/'work/font-audit-v8.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False))
