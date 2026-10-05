"""Build a single Latin/Vietnamese face for each style, keeping word shaping intact."""
from pathlib import Path
import hashlib, json, shutil, sys
root=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(root/'.runtime/font-audit'))
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools import subset

source=root/'.runtime/font-source'
output=root/'public/assets/fonts'
codepoints=set()
for start,end in [(0x0000,0x024f),(0x0300,0x036f),(0x1e00,0x1eff),(0x2000,0x206f),(0x2190,0x21ff)]:
    codepoints.update(range(start,end+1))
codepoints.update([0x20ab,0x20ac,0x2122,0x2212,0x2215])
proof='Thống nhất sau khảo sát. Chuyển trọ. Nhẹ cả hành trình. Khởi đầu mới. Có ghi nhận. Chuẩn bị từng chút.'
manifest=[]
for style in ['normal','italic']:
    input_file=source/f'noto-serif-{style}.ttf'
    font=TTFont(input_file)
    font=instantiateVariableFont(font,{'wght':400,'wdth':100},inplace=True)
    options=subset.Options()
    options.layout_features=['*']
    options.flavor='woff2'
    options.name_IDs=[0,1,2,3,4,5,6,13,14]
    options.name_legacy=True
    options.name_languages=['*']
    worker=subset.Subsetter(options=options)
    worker.populate(unicodes=codepoints)
    worker.subset(font)
    target=output/f'boxanh-serif-400-{style}.woff2'
    font.flavor='woff2'
    font.save(target)
    verified=TTFont(target)
    missing={c for c in proof if ord(c) not in verified.getBestCmap()}
    assert not missing, (style,missing)
    assert bool(verified['OS/2'].fsSelection & 1)==(style=='italic')
    assert 'fvar' not in verified
    manifest.append({'style':style,'weight':400,'sourceSHA256':hashlib.sha256(input_file.read_bytes()).hexdigest(),'asset':str(target.relative_to(root)).replace('\\','/'),'assetSHA256':hashlib.sha256(target.read_bytes()).hexdigest(),'bytes':target.stat().st_size,'missingProofGlyphs':[]})
    verified.close()
shutil.copyfile(source/'OFL.txt',root/'licenses/NotoSerif-OFL.txt')
report={'upstream':'https://github.com/google/fonts/tree/main/ofl/notoserif','upstreamFiles':json.loads((source/'source.json').read_text(encoding='utf-8-sig')),'faces':manifest,'method':'Static 400, width 100; Latin, Vietnamese and punctuation share one font file per style, including layout tables.'}
(root/'public/assets/fonts/boxanh-serif-manifest.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'faces':manifest},ensure_ascii=False))
