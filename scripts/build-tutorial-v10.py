"""Render the video using current UI captures and the website's own font families."""
from pathlib import Path
import json, sys, subprocess, wave, shutil
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
sys.path[:0]=[str(root/'.runtime/video-tools'),str(root/'.runtime/font-audit')]
import imageio_ffmpeg
from fontTools.ttLib import TTFont
ffmpeg=imageio_ffmpeg.get_ffmpeg_exe()
work=root/'work/tutorial-v10'
story=json.loads((root/'public/assets/boxanh-tutorial-v10.json').read_text(encoding='utf-8'))
chapters=story['chapters']
serif=TTFont(root/'public/assets/fonts/boxanh-serif-400-italic.woff2')
serif.flavor=None;serif.save(work/'boxanh-serif-italic.ttf');serif.close()
regular=root/'.runtime/font-source/BeVietnamPro-Regular.ttf'
bold=root/'.runtime/font-source/BeVietnamPro-SemiBold.ttf'
proof=''.join(c['title']+c['caption']+c['speech'] for c in chapters)
for file in (regular,bold,work/'boxanh-serif-italic.ttf'):
    font=TTFont(file);missing={c for c in proof if c.isalpha() and ord(c) not in font.getBestCmap()};assert not missing,(file,missing);font.close()
def face(size,b=False,italic=False):return ImageFont.truetype(str(work/'boxanh-serif-italic.ttf' if italic else bold if b else regular),size)
def lines(draw,text,width,font):
    out=[];line=''
    for word in text.split():
        trial=(line+' '+word).strip()
        if line and draw.textlength(trial,font=font)>width:out.append(line);line=word
        else:line=trial
    if line:out.append(line)
    return out
def paragraph(draw,text,x,y,width,font,color,leading):
    for line in lines(draw,text,width,font):draw.text((x,y),line,font=font,fill=color);y+=leading
    return y
def timestamp(value):
    ms=round(value*1000);return f'{ms//3600000:02}:{ms//60000%60:02}:{ms//1000%60:02}.{ms%1000:03}'
offset=0;captions=['WEBVTT',''];segments=[]
for i,ch in enumerate(chapters):
    frame=Image.new('RGB',(1920,1080),'#f7f8f1');d=ImageDraw.Draw(frame)
    d.text((48,28),'BOXANH',font=face(34,True),fill='#143f32')
    d.text((255,43),'CHUYỂN TRỌ. SỐNG XANH.',font=face(15),fill='#6f8469')
    d.text((1510,40),'HƯỚNG DẪN WEBSITE',font=face(16,True),fill='#5b7458')
    d.line((48,98,1872,98),fill='#cbd7bd',width=2)
    screen=Image.open(work/(ch['file']+'.png')).convert('RGB')
    screen.thumbnail((1356,744),Image.Resampling.LANCZOS)
    d.rectangle((44,130,1410,884),fill='#fff',outline='#ced9c3',width=2)
    frame.paste(screen,(49+(1356-screen.width)//2,135+(744-screen.height)//2))
    d.text((1453,131),f'{i+1:02}',font=face(78,True),fill='#b0c497')
    d.text((1650,178),f'/ {len(chapters):02}',font=face(25),fill='#83966e')
    title_end=paragraph(d,ch['title'],1452,278,409,face(47,italic=True),'#254e36',62)
    d.line((1453,title_end+28,1872,title_end+28),fill='#cbd7bd',width=2)
    paragraph(d,ch['caption'],1453,title_end+56,400,face(25),'#6b805d',41)
    d.text((1453,806),'VINH, NGHỆ AN',font=face(14,True),fill='#789067')
    d.text((1453,835),'0332 357 455',font=face(22,True),fill='#294e37')
    d.rectangle((48,928,1872,1034),fill='#173f30')
    paragraph(d,ch['caption'],76,950,1760,face(29,True),'#f4f8ed',44)
    still=work/(ch['file']+'-frame.png');frame.save(still)
    if i==0:shutil.copyfile(still,root/'public/assets/boxanh-video-v10-poster.png')
    with wave.open(str(work/(ch['file']+'.wav')),'rb') as wav:duration=wav.getnframes()/wav.getframerate()+.8
    segment=work/(ch['file']+'.mp4')
    subprocess.run([ffmpeg,'-y','-hide_banner','-loglevel','error','-loop','1','-framerate','20','-i',str(still),'-i',str(work/(ch['file']+'.wav')),'-t',str(duration),'-vf','fade=t=in:st=0:d=0.2,fade=t=out:st='+str(max(0,duration-.2))+':d=0.2','-af','apad','-c:v','libx264','-preset','fast','-crf','23','-pix_fmt','yuv420p','-r','20','-c:a','aac','-b:a','96k','-ar','44100',str(segment)],check=True)
    segments.append(segment)
    speechlines=lines(d,ch['speech'],1200,face(29));groups=[' '.join(speechlines[n:n+2]) for n in range(0,len(speechlines),2)];total=sum(len(g.split()) for g in groups);cue=offset
    for group in groups:
        length=(duration-.8)*len(group.split())/total;captions.extend([f'{timestamp(cue)} --> {timestamp(cue+length)}',group,'']);cue+=length
    ch['duration']=round(duration,3);offset+=duration
    print(f'{i+1}/{len(chapters)} ready',flush=True)
concat=work/'segments.txt';concat.write_text('\n'.join("file '"+str(s).replace('\\','/')+"'" for s in segments),encoding='utf-8')
out=root/'public/assets/boxanh-huong-dan-v10.mp4'
subprocess.run([ffmpeg,'-y','-hide_banner','-loglevel','error','-f','concat','-safe','0','-i',str(concat),'-c','copy','-movflags','+faststart',str(out)],check=True)
(root/'public/assets/boxanh-huong-dan-v10.vtt').write_text('\n'.join(captions),encoding='utf-8')
story.update(duration=round(offset,3),resolution='1920x1080',narration='Microsoft An / Vietnamese',fps=20)
(root/'public/assets/boxanh-tutorial-v10.json').write_text(json.dumps(story,ensure_ascii=False,indent=2),encoding='utf-8')
print(f'Updated tutorial: {offset:.1f}s; {out.stat().st_size/1024/1024:.1f} MB; fonts verified.')
