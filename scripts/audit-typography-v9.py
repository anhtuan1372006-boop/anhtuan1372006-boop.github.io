"""Check actual rendered Vietnamese text, including both serif styles.

Optional release QA: requires fontTools/Brotli and work/qa-v9/report.json.
The normal npm test suite checks the served font assets and CSS separately.
"""
from pathlib import Path
import hashlib, json, sys, unicodedata

root = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(root / '.runtime/font-audit'))
from fontTools.ttLib import TTFont

pages = json.loads((root / 'work/qa-v9/report.json').read_text(encoding='utf-8'))
assert len(pages) == 80
assert {p['size'] for p in pages} == {320, 390, 768, 1265}
text = '\n'.join(p['text'] for p in pages)
letters = {ord(c) for c in text if c.isalpha() and 'LATIN' in unicodedata.name(c, '')}
assert '\ufffd' not in text
assert unicodedata.normalize('NFC', text) == text
assert not any(p['scrollWidth'] > p['viewport'] for p in pages)
assert not any(h['clientWidth'] and h['scrollWidth'] > h['clientWidth'] + 1
               for p in pages for h in p['headings'])
results = []
for weight in (400, 500, 600, 700, 800):
    files = sorted((root / 'public/assets/fonts').glob(f'be-vietnam-pro-*-{weight}-normal.woff2'))
    codes = set()
    for file in files:
        font = TTFont(file)
        codes.update(font.getBestCmap())
        font.close()
    missing = sorted(letters - codes)
    assert len(files) == 3 and not missing, (weight, missing)
    results.append({'family': 'Be Vietnam Pro', 'weight': weight, 'style': 'normal', 'missing': []})

manifest = json.loads((root / 'public/assets/fonts/boxanh-serif-manifest.json').read_text(encoding='utf-8'))
for style in ('normal', 'italic'):
    file = root / f'public/assets/fonts/boxanh-serif-400-{style}.woff2'
    font = TTFont(file)
    # Check every Latin/Vietnamese letter on the site, not just the reported phrase.
    missing = sorted(letters - set(font.getBestCmap()))
    assert not missing, (style, [chr(c) for c in missing])
    assert bool(font['OS/2'].fsSelection & 1) == (style == 'italic')
    assert 'fvar' not in font, 'The shipped face must be a static, predictable font.'
    font.close()
    expected = next(face for face in manifest['faces'] if face['style'] == style)
    assert hashlib.sha256(file.read_bytes()).hexdigest() == expected['assetSHA256']
    actual = [s for p in pages for s in p['serif'] if s['style'] == style]
    assert actual, f'No actual rendered {style} sample was collected.'
    assert all('BOXANH Serif' in s['family'] and s['weight'] == '400'
               and s['spacing'] in ('normal', '0px') for s in actual)
    results.append({'family': 'BOXANH Serif', 'weight': 400, 'style': style,
                    'renderedSamples': len(actual), 'missing': []})

report = {'pagesChecked': len(pages), 'widths': [320, 390, 768, 1265],
          'latinLettersChecked': len(letters), 'replacementCharacters': 0,
          'normalization': 'NFC', 'horizontalOverflow': 0, 'headingOverflow': 0,
          'faces': results}
(root / 'work/qa-v9/font-audit.json').write_text(
    json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(report, ensure_ascii=False))
