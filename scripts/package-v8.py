"""Package BOXANH v8 without local runtimes, credentials or customer records."""
from pathlib import Path
import os, zipfile
root=Path(__file__).resolve().parents[1]
out=root.parent/'BOXANH-v8-ma-nguon.zip'
excluded={'node_modules','.runtime','data','.git','work','.cache','__pycache__'}
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as archive:
    for folder,dirs,files in os.walk(root):
        dirs[:]=[d for d in dirs if d not in excluded]
        for name in files:
            if (name.startswith('.env') and name!='.env.example') or name.endswith(('.log','.pid','.db','.db-shm','.db-wal')):continue
            file=Path(folder)/name
            archive.write(file,'boxanh/'+file.relative_to(root).as_posix())
with zipfile.ZipFile(out) as archive:
    names=archive.namelist()
    assert not any('/data/' in n or '/.runtime/' in n or n.endswith('/.env') for n in names)
    assert 'boxanh/public/assets/boxanh-huong-dan.mp4' in names
    assert 'boxanh/src/masthead-v8.css' in names
    assert 'boxanh/QA-v8.md' in names
    print(f'Packaged {len(names)} files; {out.stat().st_size/1024/1024:.1f} MB; private data excluded.')
