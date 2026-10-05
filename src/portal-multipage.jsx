import React, {useEffect, useRef, useState} from 'react';
import {ArrowUpRight, ArrowRight, ArrowLeft, Truck, Sparkles, KeyRound, Recycle, Package, ScanLine, Play, Check, CheckCheck, Phone, MapPin, ClipboardCheck, Volume2, Pause, BookOpen, ShieldCheck, CalendarDays, Leaf} from 'lucide-react';
import {MovingScene, CleaningScene, HandoverScene, BoxesScene, GreenScene, GuideScene, QuoteScene} from './portal-scenes-v10';

const entries = [
  {href:'/chuyen-tro',title:'Chuyển trọ',copy:'Đóng đồ. Chuyển đi. An tâm đến nơi.',icon:Truck,image:'/assets/moving.webp',className:'move',index:'01'},
  {href:'/don-phong',title:'Dọn phòng',copy:'Trả phòng sạch. Đón khởi đầu mới.',icon:Sparkles,image:'/assets/room-real.webp',className:'clean',index:'02'},
  {href:'/ban-giao',title:'Bàn giao phòng',copy:'Kiểm tra kỹ. Ghi nhận rõ ràng.',icon:KeyRound,image:'/assets/room.jpg',className:'hand',index:'03'},
];
function ArrowLink({href,children,className=''}){return <a className={'n7-link '+className} href={href}>{children}<ArrowUpRight size={19}/></a>}
function Title({eyebrow,title,children}){return <div className="n7-section-head"><div><p className="n7-eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</div>}
function Ambassador(){
  const root=useRef(null),audio=useRef(null); const [paused,setPaused]=useState(false),[speaking,setSpeaking]=useState(false);
  useEffect(()=>{const sound=audio.current;const observer=new IntersectionObserver(([entry])=>{root.current?.classList.toggle('n7-offscreen',!entry.isIntersecting);if(!entry.isIntersecting)sound?.pause();});observer.observe(root.current);return()=>{observer.disconnect();sound?.pause();};},[]);
  async function greet(){if(speaking){audio.current.pause();setSpeaking(false);return;}try{document.querySelectorAll('video').forEach(video=>video.pause());audio.current.currentTime=0;await audio.current.play();setSpeaking(true);}catch{setSpeaking(false);}}
  return <div ref={root} className={'n7-ambassador '+(paused?'n7-paused':'')}>
    <div className="n7-character-disc" aria-hidden="true"><span>CHUYỂN TRỌ · SỐNG XANH ·</span></div>
    <img className="n7-character" src="/assets/boxanh-ambassador.png" width="1024" height="1536" fetchPriority="high" alt="Nhân vật minh họa BOXANH mặc đồng phục vận chuyển xanh, mỉm cười và cầm hộp bằng hai tay"/>
    <div className="n7-speech"><span>BOXANH CHÀO BẠN</span><p>“Hãy đến và sử dụng<br/>dịch vụ của chúng tôi”</p><button type="button" onClick={greet} aria-pressed={speaking}><Volume2 size={15}/>{speaking?'Dừng lời chào':'Nghe lời chào'}</button></div>
    <span className="n7-character-note">Nhân vật minh họa thương hiệu</span>
    <button type="button" className="n7-motion-control" onClick={()=>setPaused(!paused)} aria-label={paused?'Tiếp tục chuyển động nhân vật':'Tạm dừng chuyển động nhân vật'} aria-pressed={paused}>{paused?<Play size={14}/>:<Pause size={14}/>}</button>
    <audio ref={audio} src="/assets/boxanh-loi-chao.mp3" preload="none" onEnded={()=>setSpeaking(false)} onPause={()=>setSpeaking(false)}/>
  </div>
}
function TutorialVideo(){
  const ref=useRef(null),[playing,setPlaying]=useState(false),[error,setError]=useState('');
  useEffect(()=>{const video=ref.current;return()=>video.pause();},[]);
  async function play(){try{setError('');document.querySelectorAll('audio').forEach(a=>a.pause());await ref.current.play();}catch{setError('Chưa phát được video. Bạn có thể tải về để xem.');}}
  return <div className="n7-player"><video ref={ref} controls playsInline preload="none" poster="/assets/boxanh-video-v10-poster.png" aria-label="Video hướng dẫn sử dụng website BOXANH" onPlaying={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>setPlaying(false)}><source src="/assets/boxanh-huong-dan-v10.mp4" type="video/mp4"/><track kind="captions" src="/assets/boxanh-huong-dan-v10.vtt" srcLang="vi" label="Tiếng Việt" default/>Trình duyệt của bạn chưa hỗ trợ video. <a href="/assets/boxanh-huong-dan-v10.mp4" download>Tải video hướng dẫn</a></video>{!playing&&<button className="n7-video-play" type="button" onClick={play} aria-label="Phát video hướng dẫn BOXANH"><Play size={22} fill="currentColor"/></button>}{error&&<p className="n7-video-error" role="alert">{error}</p>}</div>
}
export function Tutorial({compact=false}){return <section id="video-huong-dan" className={'n7-tutorial '+(compact?'n7-tutorial-compact':'')}><div className="n7-tutorial-copy"><p className="n7-eyebrow">HƯỚNG DẪN NHANH CHO BẠN MỚI</p><h2>Một vòng BOXANH.<br/><em>Biết ngay cách dùng.</em></h2><p>Xem cách chọn dịch vụ, gửi yêu cầu, xử lý đồ thừa và tra cứu tiến độ.</p><ArrowLink href={compact?"/huong-dan":"/dat-lich"}>{compact?"Mở trung tâm hướng dẫn":"Thử đặt dịch vụ"}</ArrowLink></div><div className="n7-video-wrap"><TutorialVideo/><div className="n7-video-caption"><span><Play size={14}/> Hướng dẫn bằng các màn hình thực tế</span><a href="/assets/boxanh-huong-dan-v10.mp4" download>Tải video <ArrowUpRight size={14}/></a></div></div></section>}
export function PortalHome({config:c}){
  return <div className="portal-home n7-home" data-portal-home>
    <section className="n7-home-hero"><div className="n7-wrap n7-hero-grid"><div className="n7-hero-copy"><p className="n7-eyebrow"><span className="n7-dot"/> KHỞI ĐẦU TẠI {c.area.toUpperCase()}</p><h1>Chuyển nơi ở.<br/><span>Nhẹ cả <em>hành trình.</em></span></h1><p className="n7-hero-description">Chuyển đồ, dọn phòng, bàn giao.<br/>Một đầu mối. Hộp dùng lại. Chi phí rõ ràng.</p><div className="n7-hero-actions"><ArrowLink href="/uoc-tinh" className="n7-primary">Ước tính & nhận báo giá</ArrowLink><a href="#dich-vu" className="n7-explore">Khám phá dịch vụ <ArrowRight size={18}/></a></div><div className="n7-hero-assurances"><span><CheckCheck size={17}/> Khảo sát trước khi chốt</span><span><Recycle size={17}/> Thu hồi hộp để dùng tiếp</span></div></div><Ambassador/></div><div className="n7-hero-bottom n7-wrap"><span>CHUYỂN TRỌ. SỐNG XANH.</span><a href="/ve-boxanh">Câu chuyện BOXANH <ArrowUpRight size={16}/></a><span className="n7-hero-location"><MapPin size={15}/> Vinh, Nghệ An</span></div></section>
    <section className="n7-wrap n7-home-services" id="dich-vu"><Title eyebrow="BẠN CẦN LÀM GÌ?" title="Chọn việc. BOXANH lo tiếp."><ArrowLink href="/dich-vu">Tất cả dịch vụ & bảng giá</ArrowLink></Title><div className="n7-service-grid">{entries.map(({icon:Icon,...entry})=><a key={entry.href} href={entry.href} className={'n7-service-card n7-'+entry.className}><div className="n7-service-image"><img src={entry.image} alt="" width="1200" height="800" loading="lazy"/><span className="n7-service-number">{entry.index}</span><span className="n7-card-arrow"><ArrowUpRight size={23}/></span></div><div className="n7-service-card-copy"><Icon size={22}/><div><h3>{entry.title}</h3><p>{entry.copy}</p></div><span className="n7-open-label">Khám phá <ArrowRight size={15}/></span></div></a>)}</div><p className="n7-click-hint"><ArrowUpRight size={15}/> Bấm vào từng thẻ để mở trang riêng · Ảnh phòng và dịch vụ mang tính tham khảo</p></section>
    <section className="n7-features-zone"><div className="n7-wrap n7-features-grid">{[[Package,'/hop-tai-su-dung','Hộp dùng lại','Giao hộp trước. Thu hồi sau.'],[Recycle,'/song-xanh','Đồ thừa, giá trị mới','Thu mua · Ký gửi · Phân loại'],[ScanLine,'/tra-cuu','Tra cứu hành trình','Mã yêu cầu + số điện thoại'],[BookOpen,'/huong-dan','Chuẩn bị thật gọn','Chuẩn bị, quy trình & giải đáp']].map(([Icon,href,title,desc])=><a className="n7-feature-link" href={href} key={href}><Icon size={26}/><h3>{title}</h3><p>{desc}</p><span>Mở chi tiết <ArrowUpRight size={17}/></span></a>)}</div></section>
    <div className="n7-wrap"><Tutorial compact/></div>
    <section className="n7-wrap n7-home-end"><div><h2>Căn phòng mới đang chờ.</h2><p>Gửi nhu cầu của bạn. Cùng thống nhất một kế hoạch phù hợp.</p></div><ArrowLink href="/dat-lich" className="n7-primary">Bắt đầu với BOXANH</ArrowLink></section>
  </div>
}
export const detailTitles={'/chuyen-tro':'Chuyển trọ','/don-phong':'Dọn phòng','/ban-giao':'Bàn giao phòng','/hop-tai-su-dung':'Hộp tái sử dụng','/song-xanh':'Đồ thừa & sống xanh','/huong-dan':'Trung tâm hướng dẫn','/uoc-tinh':'Ước tính dịch vụ'};
function Related({exclude}){return <section className="n7-wrap n7-related"><Title eyebrow="TIẾP TỤC KHÁM PHÁ" title="Cùng một hành trình."/><div>{entries.filter(e=>e.href!==exclude).map(e=><ArrowLink key={e.href} href={e.href}>{e.title}</ArrowLink>)}<ArrowLink href="/hop-tai-su-dung">Hộp tái sử dụng</ArrowLink><ArrowLink href="/song-xanh">Xử lý đồ thừa</ArrowLink></div></section>}
function Checklist(){const labels=['Chốt ngày chuyển và báo chủ trọ','Tách đồ mang đi, đồ còn giá trị và đồ hỏng','Giữ riêng giấy tờ, đồ quý và đồ dùng trong ngày','Chụp hiện trạng đồ cần lưu ý','Ghi nhóm đồ và kiểm đếm từng hộp','Sắp xếp lối đi, thang máy và điểm đỗ xe'];const [checked,setChecked]=useState([]);useEffect(()=>{try{setChecked(JSON.parse(localStorage.getItem('boxanh-preparation-v7')||'[]'));}catch{}},[]);function toggle(i){const next=checked.includes(i)?checked.filter(v=>v!==i):[...checked,i];setChecked(next);try{localStorage.setItem('boxanh-preparation-v7',JSON.stringify(next));}catch{}}return <section className="n7-checklist" id="checklist"><div><p className="n7-eyebrow">DANH SÁCH CỦA BẠN</p><h2>Chuẩn bị từng chút.<br/><em>Ngày chuyển nhẹ hơn.</em></h2><p>Đánh dấu việc đã làm trên thiết bị này.</p><span className="n7-checklist-progress" role="status">{checked.length} / {labels.length} việc đã xong</span></div><div>{labels.map((t,i)=><label key={t}><input type="checkbox" checked={checked.includes(i)} onChange={()=>toggle(i)}/><span>{t}</span></label>)}</div></section>}
export function PortalDetail({route,config:c,onQuote}){
  const root=useRef(null);useEffect(()=>{const reduced=matchMedia('(prefers-reduced-motion: reduce)');if(reduced.matches)return;const elements=[...root.current.querySelectorAll('[data-bx-reveal]')];const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('bx-visible');obs.unobserve(e.target);}}),{threshold:.06});elements.forEach(e=>{e.classList.add('bx-enter');obs.observe(e);});return()=>obs.disconnect();},[route]);
  let content;
  if(route==='/chuyen-tro')content=<MovingScene c={c} onQuote={onQuote}/>;
  if(route==='/don-phong')content=<CleaningScene/>;
  if(route==='/ban-giao')content=<HandoverScene/>;
  if(route==='/hop-tai-su-dung')content=<BoxesScene/>;
  if(route==='/song-xanh')content=<GreenScene/>;
  if(route==='/huong-dan')content=<GuideScene c={c} video={<Tutorial/>} checklist={<Checklist/>}/>;
  if(route==='/uoc-tinh')content=<QuoteScene c={c} onQuote={onQuote}/>;
  return <div ref={root} className={'portal-home n7-detail n7-route-'+route.slice(1)} data-portal-detail={route}>{content}<Related exclude={route}/></div>
}
