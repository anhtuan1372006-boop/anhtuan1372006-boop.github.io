"""Compose a narrated tutorial from verified screenshots of the actual BOXANH UI."""
from pathlib import Path
import json, sys, subprocess, wave, math
from PIL import Image, ImageDraw, ImageFont

root=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(root/'.runtime/video-tools'))
import imageio_ffmpeg
ffmpeg=imageio_ffmpeg.get_ffmpeg_exe()
work=root/'work/tutorial-v7'
chapters=json.loads((root/'work/tutorial-v7.json').read_text(encoding='utf-8'))
font_path=Path('C:/Windows/Fonts/segoeui.ttf')
bold_path=Path('C:/Windows/Fonts/seguisb.ttf')
def font(size,bold=False): return ImageFont.truetype(str(bold_path if bold else font_path),size)
def wrapped(draw,text,width,face):
    lines=[]; line=''
    for word in text.split():
        trial=(line+' '+word).strip()
        if line and draw.textlength(trial,font=face)>width: lines.append(line);line=word
        else: line=trial
    if line: lines.append(line)
    return lines
def paragraph(draw,text,x,y,width,face,fill,line_height):
    for line in wrapped(draw,text,width,face):draw.text((x,y),line,font=face,fill=fill);y+=line_height
    return y
def timestamp(n):
    ms=round(n*1000);return f'{ms//3600000:02}:{ms//60000%60:02}:{ms//1000%60:02}.{ms%1000:03}'

offset=0;captions=['WEBVTT',''];segments=[]
for i,ch in enumerate(chapters):
    image=Image.new('RGB',(1920,1080),'#f6f7ef');d=ImageDraw.Draw(image)
    d.text((44,34),'BOXANH',font=font(33,True),fill='#123f30')
    d.text((231,47),'CHUYỂN TRỌ. SỐNG XANH.',font=font(16),fill='#7c8f70')
    d.text((1432,48),'HƯỚNG DẪN SỬ DỤNG WEBSITE',font=font(17,True),fill='#718763')
    d.line((44,104,1876,104),fill='#cbd8be',width=2)
    screen=Image.open(work/(ch['file']+'.jpg')).convert('RGB')
    screen.thumbnail((1320,743),Image.Resampling.LANCZOS)
    x=44+(1320-screen.width)//2;y=145+(743-screen.height)//2
    d.rounded_rectangle((39,140,1369,893),radius=9,fill='#ffffff',outline='#c7d3b9',width=2)
    image.paste(screen,(x,y))
    d.text((1410,151),f'{i+1:02}',font=font(82,True),fill='#a1b783')
    d.text((1550,214),'/ 09',font=font(23),fill='#7c8e70')
    paragraph(d,ch['title'],1410,280,440,font(44,True),'#214a35',57)
    d.line((1410,434,1865,434),fill='#cdd8c0',width=2)
    for j,entry in enumerate(chapters):
        yy=471+j*40
        if i==j:d.rounded_rectangle((1402,yy-5,1870,yy+32),radius=5,fill='#e2eccf')
        d.text((1418,yy),f'{j+1:02}  {entry["title"]}',font=font(21,i==j),fill='#315637' if i==j else '#8b997f')
    d.rounded_rectangle((44,936,1876,1041),radius=7,fill='#173f30')
    paragraph(d,ch['caption'],72,955,1762,font(31,True),'#f7faef',43)
    still=work/(ch['file']+'-frame.png');image.save(still)
    with wave.open(str(work/(ch['file']+'.wav')),'rb') as wav:duration=wav.getnframes()/wav.getframerate()+.8
    segment=work/(ch['file']+'.mp4')
    cmd=[ffmpeg,'-y','-hide_banner','-loglevel','error','-loop','1','-framerate','15','-i',str(still),'-i',str(work/(ch['file']+'.wav')),'-t',str(duration),'-vf','fade=t=in:st=0:d=0.25,fade=t=out:st='+str(max(0,duration-.22))+':d=0.22','-af','apad','-c:v','libx264','-preset','fast','-crf','22','-pix_fmt','yuv420p','-r','15','-c:a','aac','-b:a','96k','-ar','44100',str(segment)]
    subprocess.run(cmd,check=True)
    segments.append(segment)
    # Chunk spoken narration into readable subtitle cues; the burned-in action caption remains visible.
    speech_lines=wrapped(d,ch['speech'],1150,font(31))
    groups=[' '.join(speech_lines[n:n+2]) for n in range(0,len(speech_lines),2)]
    speech_duration=duration-.8;total_words=sum(len(g.split()) for g in groups);cue=offset
    for group in groups:
        length=speech_duration*len(group.split())/total_words
        captions += [f'{timestamp(cue)} --> {timestamp(cue+length)}',group,''];cue+=length
    ch['duration']=round(duration,2);offset+=duration
    print(f'{i+1}/9 ready: {ch["duration"]}s',flush=True)

concat=work/'segments.txt'
concat.write_text('\n'.join("file '"+str(s).replace('\\','/')+"'" for s in segments),encoding='utf-8')
out=root/'public/assets/boxanh-huong-dan.mp4'
subprocess.run([ffmpeg,'-y','-hide_banner','-loglevel','error','-f','concat','-safe','0','-i',str(concat),'-c','copy','-movflags','+faststart',str(out)],check=True)
(root/'public/assets/boxanh-huong-dan.vtt').write_text('\n'.join(captions),encoding='utf-8')
(work/'manifest.json').write_text(json.dumps({'duration':round(offset,2),'resolution':'1920x1080','narration':'Microsoft An / Vietnamese','chapters':chapters},ensure_ascii=False,indent=2),encoding='utf-8')
print(f'Tutorial ready: {offset:.1f}s, {out.stat().st_size/1024/1024:.1f} MB')
