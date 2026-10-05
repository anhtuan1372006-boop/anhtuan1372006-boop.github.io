import React,{useEffect,useRef,useState} from 'react';
import {Dialog as DialogPrimitive} from 'radix-ui';
import {ArrowUpRight,ArrowLeft,ArrowRight,Send,Square,Plus,Phone,Check,Copy,CalendarDays,Sparkles,BookOpen,ChevronDown,ChevronUp,Package,Recycle,ShieldCheck,X} from 'lucide-react';
import {guideTopics,guideReply,serviceNames,moneyVND} from '../public/assistant-knowledge.js';
import {conversationStarters,openingGreeting,suggestedPrompts,buildConversationHistory,replyBlocks} from '../public/assistant-conversation.js';
import './assistant.css';

const session={messages:[],consent:false,consentDestination:''};
const starterIcons={moving:Package,quote:Sparkles,cleaning:Sparkles,handover:Check,boxes:Package,surplus:Recycle,booking:CalendarDays,tracking:BookOpen,support:ShieldCheck,guide:BookOpen};
const uid=()=>crypto.randomUUID();

export function BoRobot({mini=false,paused=false}){
 const id=React.useId().replaceAll(':','');
 return <span className={'bo-robot '+(mini?'bo-mini ':'')+(paused?'bo-paused':'')} aria-hidden="true"><svg viewBox="0 0 220 235" fill="none"><defs><linearGradient id={'body'+id} x1="54" y1="95" x2="163" y2="196" gradientUnits="userSpaceOnUse"><stop stopColor="#b29aff"/><stop offset=".55" stopColor="#8258e7"/><stop offset="1" stopColor="#4d2c96"/></linearGradient><linearGradient id={'head'+id} x1="39" y1="42" x2="171" y2="130" gradientUnits="userSpaceOnUse"><stop stopColor="#cdb7ff"/><stop offset=".5" stopColor="#9572ee"/><stop offset="1" stopColor="#6641b7"/></linearGradient><linearGradient id={'face'+id} x1="63" y1="50" x2="169" y2="110" gradientUnits="userSpaceOnUse"><stop stopColor="#312553"/><stop offset="1" stopColor="#171a30"/></linearGradient></defs><ellipse cx="110" cy="218" rx="57" ry="8" fill="#3d206c" opacity=".12"/><g className="bo-floating"><path d="M105 32v-9" stroke="#7351bd" strokeWidth="7" strokeLinecap="round"/><circle cx="105" cy="16" r="9" fill="#ffad68"/><circle cx="102" cy="13" r="3" fill="#fff0d9"/><path d="M62 169v29c0 7 11 11 18 3l12-18M148 169v29c0 7-11 11-18 3l-12-18" stroke="#7d58c6" strokeWidth="15" strokeLinecap="round"/><path d="M76 116c-10 14-17 43-6 62 11 20 63 22 78 1 10-15 1-51-7-63" fill={'url(#body'+id+')'} /><rect x="83" y="137" width="43" height="30" rx="12" fill="#fcd3a2"/><path d="M93 153h23M105 145v16" stroke="#4b3279" strokeWidth="4" strokeLinecap="round"/><path d="M59 131c-15 9-22 24-12 39" stroke="#a586ef" strokeWidth="17" strokeLinecap="round"/><circle cx="48" cy="169" r="10" fill="#ffc17e"/><g className="bo-wave"><path d="M146 130c26-4 30-23 27-35" stroke="#a586ef" strokeWidth="17" strokeLinecap="round"/><path d="M169 99c-9-8-8-16-1-19l1-9c0-5 7-5 7 0l1 7c8-6 14-1 11 8l-6 13" fill="#ffc17e"/><path d="M167 85l7 6" stroke="#e68f54" strokeWidth="3" strokeLinecap="round"/></g><rect x="31" y="59" width="14" height="30" rx="7" fill="#6d4cab"/><rect x="163" y="59" width="14" height="30" rx="7" fill="#6d4cab"/><rect x="40" y="34" width="128" height="91" rx="32" fill={'url(#head'+id+')'}/><path d="M55 52c13-13 73-16 92-1" stroke="#e2d4ff" strokeWidth="4" strokeLinecap="round" opacity=".65"/><rect x="54" y="51" width="102" height="58" rx="21" fill={'url(#face'+id+')'}/><g className="bo-eyes"><path d="M72 76c0-8 12-8 12 0M124 76c0-8 12-8 12 0" stroke="#f8efd9" strokeWidth="6" strokeLinecap="round"/></g><path d="M91 86c7 8 19 8 26 0" stroke="#ffbd7e" strokeWidth="4" strokeLinecap="round"/><ellipse cx="72" cy="88" rx="7" ry="3" fill="#ec8faa" opacity=".7"/><ellipse cx="137" cy="88" rx="7" ry="3" fill="#ec8faa" opacity=".7"/></g><g className="bo-spark"><path d="M190 29v12m-6-6h12M25 123v10m-5-5h10" stroke="#ed9350" strokeWidth="3" strokeLinecap="round"/></g></svg></span>;
}
export function AIHomeInvite(){const [paused,setPaused]=useState(false),[visible,setVisible]=useState(true),root=useRef(null);useEffect(()=>{const observer=new IntersectionObserver(entries=>setVisible(entries[0].isIntersecting));observer.observe(root.current);return()=>observer.disconnect();},[]);return <div ref={root} className={'bo-home-invite '+(paused||!visible?'bo-paused':'')} data-ai-invite><div className="bo-invite-inner"><a href="/tro-ly-ai" className="bo-invite-link" aria-label="Gặp Bơ, mở trang trò chuyện với trợ lý BOXANH"><BoRobot mini paused={paused||!visible}/><div><span className="bo-invite-label"><Sparkles size={13}/> TRỢ LÝ BOXANH</span><strong>Chào bạn, mình là Bơ!</strong><p>Chọn dịch vụ, hiểu chi phí, chuẩn bị đặt lịch. Cứ hỏi mình nhé.</p></div><span className="bo-invite-cta">Trò chuyện cùng Bơ <ArrowUpRight size={19}/></span></a><button type="button" className="bo-invite-pause" aria-label={paused?'Tiếp tục chuyển động robot':'Tạm dừng chuyển động robot'} onClick={()=>setPaused(!paused)}>{paused?<Sparkles size={15}/>:<Square size={12}/>}</button></div></div>;}

function Emphasis({text}){return text.split(/(\*\*[^*\n]+\*\*)/g).map((part,i)=>part.startsWith('**')&&part.endsWith('**')?<strong key={i}>{part.slice(2,-2)}</strong>:part);}
function SafeText({text}){return <div className="bo-message-text">{replyBlocks(text).map((block,i)=>block.kind==='list'?React.createElement(block.ordered?'ol':'ul',{key:i},block.lines.map((line,j)=><li key={j}><Emphasis text={line}/></li>)):block.kind==='heading'?<h3 key={i}><Emphasis text={block.text}/></h3>:<p key={i}><Emphasis text={block.text}/></p>)}</div>;}
function SourceLinks({links}){const allowed=new Set(guideTopics.map(t=>t.href));return <div className="bo-source-links">{links.filter(l=>allowed.has(l.href)).map(l=><a key={l.href} href={l.href}>{l.title}<ArrowUpRight size={15}/></a>)}</div>;}
function BookingPlanner({open,onOpenChange,onPrepared,onQuote}){
 const [draft,setDraft]=useState({service:'small',boxes:10,distance:5,originFloor:0,destinationFloor:0,originElevator:false,destinationElevator:false,bulky:0,packing:false,date:''}),[loading,setLoading]=useState(false),[error,setError]=useState('');
 const moving=['small','full'].includes(draft.service),today=new Date(Date.now()+7*3600000).toISOString().slice(0,10),lastDay=new Date(Date.now()+366*86400000).toISOString().slice(0,10);
 const set=(key,value)=>setDraft(d=>({...d,[key]:value}));
 const clean=()=>Object.fromEntries(Object.entries(draft).filter(([k,v])=>k!=='date'||v));
 async function prepare(e){e.preventDefault();setLoading(true);setError('');try{const response=await fetch('/api/quote',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(clean()),signal:AbortSignal.timeout(10000)});const result=await response.json();if(!response.ok)throw Error(result.error||'Chưa nhận được báo giá.');onPrepared({type:'draft',draft:clean(),quote:result,assumptions:[],bookingCreated:false});onOpenChange(false);}catch{setError('Chưa kết nối được bộ tính giá. Bạn vẫn có thể mở biểu mẫu để điền nhu cầu.');}finally{setLoading(false);}}
 return <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}><DialogPrimitive.Portal><DialogPrimitive.Overlay className="bo-modal-overlay"/><DialogPrimitive.Content className="bo-planner-dialog"><DialogPrimitive.Close className="bo-close-reset" aria-label="Đóng kế hoạch"><X size={19}/></DialogPrimitive.Close><DialogPrimitive.Title>Chuẩn bị lịch cùng Bơ</DialogPrimitive.Title><DialogPrimitive.Description>Chọn nhu cầu và ngày mong muốn. Đây là bản nháp; lịch và giá cần BOXANH xác nhận.</DialogPrimitive.Description><form onSubmit={prepare}><label className="bo-planner-service">Dịch vụ<select value={draft.service} onChange={e=>set('service',e.target.value)}>{Object.entries(serviceNames).map(([v,label])=><option key={v} value={v}>{label}</option>)}</select></label><div className="bo-planner-fields">{!['cleaning','handover'].includes(draft.service)&&<><label>Số hộp<input type="number" min="1" max="60" required value={draft.boxes} onChange={e=>set('boxes',e.target.value===''?'':Number(e.target.value))}/></label>{moving&&<><label>Quãng đường (km)<input type="number" min="1" max="80" required value={draft.distance} onChange={e=>set('distance',e.target.value===''?'':Number(e.target.value))}/></label><label>Tầng nơi đi<input type="number" min="0" max="15" required value={draft.originFloor} onChange={e=>set('originFloor',e.target.value===''?'':Number(e.target.value))}/></label><label>Tầng nơi đến<input type="number" min="0" max="15" required value={draft.destinationFloor} onChange={e=>set('destinationFloor',e.target.value===''?'':Number(e.target.value))}/></label><label>Đồ cồng kềnh (món)<input type="number" min="0" max="30" required value={draft.bulky} onChange={e=>set('bulky',e.target.value===''?'':Number(e.target.value))}/></label></>}</>}<label>Ngày mong muốn (tùy chọn)<input type="date" min={today} max={lastDay} value={draft.date} onChange={e=>set('date',e.target.value)}/></label></div>{moving&&<div className="bo-planner-checks">{[['originElevator','Nơi đi có thang máy'],['destinationElevator','Nơi đến có thang máy'],...(draft.service==='small'?[['packing','Cần hỗ trợ đóng gói']]:[])].map(([key,label])=><label key={key}><input type="checkbox" checked={draft[key]} onChange={e=>set(key,e.target.checked)}/>{label}</label>)}</div>}{error&&<p className="bo-composer-error" role="alert">{error}</p>}<button className="bo-planner-submit" type="submit" disabled={loading}>{loading?'Đang lấy ước tính…':'Xem bản nháp & chi phí'}<ArrowRight size={17}/></button><button type="button" className="bo-planner-skip" onClick={()=>onQuote(clean())}>Mở biểu mẫu đặt lịch <ArrowUpRight size={14}/></button></form></DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root>;
}
function DraftCard({action,onQuote,config:c}){return <section className="bo-draft-card"><div className="bo-draft-head"><CalendarDays size={20}/><strong>{action.type==='draft'?'Kế hoạch bạn vừa chuẩn bị':'Ước tính cho nhu cầu của bạn'}</strong><span>Bản nháp</span></div><h3>{serviceNames[action.draft.service]}</h3><div className="bo-draft-data">{!action.quote.needsSurvey&&<><span>{action.draft.boxes??10} hộp</span>{action.draft.service!=='boxes'&&<span>{action.draft.distance??5} km</span>}</>}{action.draft.date&&<span>{new Date(action.draft.date+'T12:00:00').toLocaleDateString('vi-VN')}</span>}</div><strong className="bo-draft-price">{action.quote.needsSurvey?'Báo giá sau khảo sát':moneyVND(action.quote.total)}<small>{action.quote.needsSurvey?'Cần kiểm tra hiện trạng phòng':'Dự kiến · chưa phải giá chốt'}</small></strong>{action.quote.lines?.length>0&&<details><summary>Xem cách tính <ChevronDown size={15}/></summary>{action.quote.lines.map(l=><p key={l.label}><span>{l.label}</span><b>{moneyVND(l.amount)}</b></p>)}</details>}{action.assumptions?.length>0&&<p className="bo-assumptions">Đang tạm tính: {action.assumptions.join(', ')}. Bạn có thể chỉnh lại trên biểu mẫu.</p>}<button type="button" onClick={()=>onQuote(action.draft)}>Kiểm tra & tiếp tục đặt lịch <ArrowRight size={17}/></button><p className="bo-draft-note">Chưa gửi yêu cầu, chưa giữ lịch. BOXANH xác nhận sau khảo sát và trao đổi.</p>{c.bookingEnabled===false&&<p role="status">BOXANH đang tạm ngừng nhận đơn mới. Bạn có thể gọi để trao đổi.</p>}</section>;}
function Message({message,onQuote,config}){const [copied,setCopied]=useState(false);async function copy(){try{await navigator.clipboard.writeText(message.text);setCopied(true);setTimeout(()=>setCopied(false),1800);}catch{setCopied(false);}}return <article className={'bo-message bo-from-'+message.role} aria-label={message.role==='user'?'Tin nhắn của bạn':'Câu trả lời của Bơ'}>{message.role==='assistant'&&<div className="bo-message-identity"><BoRobot mini paused/><strong>Bơ</strong><span>{message.mode==='guide'?'Từ cẩm nang BOXANH':'Trợ lý AI'}</span></div>}<div className="bo-bubble"><SafeText text={message.text}/>{message.pending&&<span className="bo-typing" aria-label="Bơ đang trả lời"><i/><i/><i/></span>}{message.error&&<p className="bo-message-error" role="alert">{message.error}</p>}{message.links&&<SourceLinks links={message.links}/>}<div className="bo-action-stack">{message.actions?.filter(a=>['draft','quote'].includes(a.type)).map((a,i)=><DraftCard key={i} action={a} onQuote={onQuote} config={config}/>)}{message.actions?.filter(a=>a.type==='links').map((a,i)=><SourceLinks key={'l'+i} links={a.links||[]}/>)}</div></div>{message.role==='assistant'&&message.text&&!message.pending&&<button className="bo-copy" type="button" onClick={copy}>{copied?<Check size={13}/>:<Copy size={13}/>} {copied?'Đã sao chép':'Sao chép'}</button>}</article>;}

export function AssistantPage({config:c,onQuote}){
 const [messages,setMessages]=useState(()=>session.messages.map(m=>m.pending?{...m,pending:false,error:'Câu trả lời trước đã dừng khi bạn rời trang.'}:m));
 const [input,setInput]=useState(''),[status,setStatus]=useState({ready:false,loading:true}),[consent,setConsent]=useState(session.consent);
 const [busy,setBusy]=useState(false),[open,setOpen]=useState(false),[error,setError]=useState(''),[resetOpen,setResetOpen]=useState(false),[plannerOpen,setPlannerOpen]=useState(false);
 const scroll=useRef(null),abort=useRef(null),inputRef=useRef(null),stick=useRef(true);
 useEffect(()=>{
  const controller=new AbortController();
  fetch('/api/assistant/status',{signal:AbortSignal.any([controller.signal,AbortSignal.timeout(5000)])})
   .then(r=>{if(!r.ok)throw Error();return r.json();}).then(s=>{setStatus({...s,loading:false});if(s.ready&&session.consentDestination!==(s.dataDestination||'openai')){session.consent=false;setConsent(false);}})
   .catch(()=>{if(!controller.signal.aborted)setStatus({ready:false,loading:false,offline:true});});
  return()=>{controller.abort();abort.current?.abort();};
 },[]);
 useEffect(()=>{session.messages=messages;if(stick.current&&scroll.current)scroll.current.scrollTop=messages.length?scroll.current.scrollHeight:0;},[messages,busy]);
 function update(id,change){setMessages(m=>m.map(x=>x.id===id?{...x,...(typeof change==='function'?change(x):change)}:x));}
 function showTopic(topic){
  stick.current=true;setOpen(false);
  setMessages(m=>[...m,{id:uid(),role:'assistant',mode:'guide',text:topic.title+'\n\n'+topic.text,links:[topic]}]);
 }
 async function send(text,previous=messages){
  const content=text.trim();if(busy||!content)return;
  if(content.length>1800){setError('Mỗi tin nhắn tối đa 1.800 ký tự.');return;}
  if(status.loading){setInput(content);setError('Bơ đang kiểm tra kết nối. Câu hỏi của bạn vẫn ở đây.');return;}
  if(status.ready&&!consent){setInput(content);setError('Vui lòng đồng ý gửi nội dung đến AI trước khi trò chuyện. Câu hỏi của bạn đã được giữ lại.');inputRef.current?.focus();return;}
  setError('');setInput('');setOpen(false);stick.current=true;
  const user={id:uid(),role:'user',text:content},replyId=uid();
  if(!status.ready){const reply=guideReply(content,c,previous);setMessages([...previous,user,{id:replyId,role:'assistant',mode:'guide',text:reply.text,links:reply.links}]);return;}
  setMessages([...previous,user,{id:replyId,role:'assistant',mode:'ai',text:'',pending:true,actions:[]}]);setBusy(true);
  const controller=new AbortController();abort.current=controller;
  try{
   const response=await fetch('/api/assistant/chat',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/x-ndjson'},body:JSON.stringify({messages:buildConversationHistory(previous,user),consent:true}),signal:controller.signal});
   if(!response.ok){const body=await response.json();throw Error(body.error||'Chưa kết nối được Bơ.');}
   if(!response.body)throw Error('Chưa nhận được câu trả lời.');
   const reader=response.body.getReader(),decoder=new TextDecoder(),ndjson=response.headers.get('content-type')?.includes('application/x-ndjson');let buffer='',finished=false;
   try{while(true){
    const {value,done}=await reader.read();if(done)break;
    buffer=(buffer+decoder.decode(value,{stream:true})).replace(/\r\n/g,'\n');let position;
    while((position=buffer.indexOf(ndjson?'\n':'\n\n'))>=0){
     const frame=buffer.slice(0,position);buffer=buffer.slice(position+(ndjson?1:2));
     const data=ndjson?frame.trim():frame.split('\n').filter(line=>line.startsWith('data:')).map(line=>line.slice(5).trimStart()).join('\n');
     if(!data)continue;const event=JSON.parse(data);
     if(event.type==='delta')update(replyId,m=>({text:m.text+event.text}));
     else if(event.type==='action')update(replyId,m=>({actions:[...m.actions,event.action]}));
     else if(event.type==='done'){finished=true;update(replyId,{text:event.text,pending:false,actions:event.actions});}
     else if(event.type==='error')throw Error(event.message);
    }
   }}finally{reader.releaseLock();}
   if(!finished)throw Error('Câu trả lời bị gián đoạn. Bạn có thể thử lại.');
  }catch(e){update(replyId,{pending:false,error:e.name==='AbortError'?'Đã dừng câu trả lời.':e.message});}
  finally{setBusy(false);abort.current=null;}
 }
 function retry(){
  const index=messages.findLastIndex(m=>m.role==='user');
  if(index>=0)send(messages[index].text,messages.slice(0,index));
 }
 function prepared(action){stick.current=true;setOpen(false);setMessages(m=>[...m,{id:uid(),role:'assistant',mode:'guide',text:'Mình đã chuẩn bị bản nháp bên dưới. Bạn kiểm tra thông tin và chi phí, rồi tiếp tục trên biểu mẫu khi sẵn sàng.',actions:[action]}]);}
 function newChat(){abort.current?.abort();setMessages([]);session.messages=[];setInput('');setError('');setResetOpen(false);stick.current=true;}
 const prompts=messages.length?suggestedPrompts(messages):[];
 return <div className="bo-chat-page" data-assistant-page>
  <header className="bo-chat-header">
   <a className="bo-chat-back" href="/" aria-label="Về trang chủ BOXANH"><ArrowLeft size={18}/><span>BOXANH</span></a>
   <div className="bo-chat-brand"><span className="bo-brand-star"><Sparkles size={16}/></span><strong>Bơ</strong><span>Phòng trò chuyện</span></div>
   <a className="bo-header-call" href={'tel:'+c.phone}><Phone size={16}/><span>Gặp đội BOXANH</span></a>
  </header>
  <div className="bo-chat-layout">
   <aside className={'bo-sidebar '+(open?'bo-sidebar-open':'')}>
    <button type="button" className="bo-sidebar-toggle" onClick={()=>setOpen(!open)} aria-expanded={open}><BookOpen size={17}/> Lối tắt & cẩm nang {open?<ChevronUp size={17}/>:<ChevronDown size={17}/>}</button>
    <div className="bo-sidebar-content">
     <div className="bo-sidebar-title"><span>NGƯỜI BẠN CHUYỂN TRỌ</span><h2>Kể mình nghe.<br/>Cùng tìm cách nhé.</h2><p>Bạn có thể viết tự nhiên, hỏi tiếp hoặc thay đổi nhu cầu trong cuộc trò chuyện.</p></div>
     <button type="button" className="bo-new-chat" onClick={()=>messages.length?setResetOpen(true):newChat()} disabled={busy}><Plus size={17}/> Cuộc trò chuyện mới</button>
     <button type="button" className="bo-sidebar-plan" onClick={()=>{setPlannerOpen(true);setOpen(false);}}><CalendarDays size={17}/> Chuẩn bị đặt lịch <ArrowUpRight size={16}/></button>
     <span className="bo-sidebar-label">BẠN ĐANG CẦN GÌ?</span>
     <nav aria-label="Nhu cầu tư vấn">{conversationStarters.map(starter=><button type="button" disabled={busy} onClick={()=>send(starter.prompt)} key={starter.id}><span>{starter.title}</span><ArrowRight size={15}/></button>)}</nav>
     <details className="bo-all-topics"><summary>Toàn bộ cẩm nang <ChevronDown size={15}/></summary>{guideTopics.map(topic=><button type="button" key={topic.id} onClick={()=>showTopic(topic)} disabled={busy}>{topic.title}<ArrowUpRight size={14}/></button>)}</details>
     <div className="bo-human-card"><span><ShieldCheck size={18}/> Cần người hỗ trợ?</span><p>Đội BOXANH xác nhận giá, lịch và xử lý các tình huống cần đối chiếu.</p><a href={'tel:'+c.phone}>{c.phone.replace(/(\d{4})(\d{3})(\d{3})/,'$1 $2 $3')} <ArrowUpRight size={16}/></a></div>
    </div>
   </aside>
   <section className="bo-conversation" aria-label="Trò chuyện với trợ lý BOXANH">
    <div className="bo-conversation-status"><span className={status.ready?'bo-status-ready':'bo-status-guide'}><i/>{status.loading?'Đang kiểm tra kết nối':status.ready?(status.dataDestination==='boxanh'?'AI trên máy BOXANH sẵn sàng':'AI sẵn sàng hỗ trợ'):'Đang dùng cẩm nang · AI chưa bật'}</span><span className="bo-status-area">{c.area}</span></div>
    <div ref={scroll} className="bo-chat-scroll" onScroll={()=>{const el=scroll.current;stick.current=el.scrollHeight-el.scrollTop-el.clientHeight<100;}}>
     {!messages.length?<div className="bo-welcome bo-welcome-v12">
      <div className="bo-opening-head"><BoRobot/><div><p className="bo-kicker">MÌNH LÀ BƠ, TRỢ LÝ BOXANH</p><h1>Hôm nay, bạn cần<br/><em>mình giúp gì?</em></h1></div></div>
      <div className="bo-opening-message" aria-label="Lời chào và câu hỏi của Bơ"><SafeText text={openingGreeting(c.area)}/></div>
      <p className="bo-start-label">CHỌN MỘT ĐIỀU BẠN CẦN, HOẶC NHẮN MÌNH BÊN DƯỚI</p>
      <div className="bo-prompt-grid">{conversationStarters.map(starter=>{const Icon=starterIcons[starter.id];return <button type="button" key={starter.id} onClick={()=>send(starter.prompt)} disabled={status.loading}><Icon size={19}/><strong>{starter.title}</strong><ArrowRight size={15}/></button>;})}</div>
      <details className="bo-capabilities"><summary>Khám phá mọi chức năng BOXANH <ChevronDown size={16}/></summary><div>{guideTopics.map(topic=><button type="button" key={topic.id} onClick={()=>showTopic(topic)}>{topic.title}<ArrowUpRight size={14}/></button>)}</div></details>
     </div>:<div className="bo-messages" role="log" aria-label="Lịch sử hội thoại" aria-relevant="additions">
      <p className="bo-session-label">CÙNG BƠ TÌM CÁCH PHÙ HỢP</p>
      {messages.map(message=><Message key={message.id} message={message} onQuote={onQuote} config={c}/>)}
      {messages.at(-1)?.error&&<button type="button" className="bo-retry" onClick={retry} disabled={busy}><ArrowRight size={15}/> Thử lại câu hỏi</button>}
      {!!prompts.length&&<div className="bo-followups" aria-label="Gợi ý tiếp tục cuộc trò chuyện"><span>BẠN MUỐN TÌM HIỂU TIẾP?</span>{prompts.map(prompt=><button type="button" key={prompt} disabled={busy} onClick={()=>send(prompt)}>{prompt}<ArrowRight size={14}/></button>)}</div>}
     </div>}
    </div>
    <div className="bo-composer-area">
     {!status.loading&&!status.ready&&<div className="bo-mode-note"><BookOpen size={16}/><p><strong>AI hội thoại đang chờ kích hoạt.</strong> {status.offline?'Chưa kết nối được máy chủ. ':''}Bơ hiện hướng dẫn từ cẩm nang, chưa thể trò chuyện tự do như ChatGPT.</p></div>}
     {status.ready&&<label className="bo-ai-consent"><input type="checkbox" checked={consent} onChange={e=>{setConsent(e.target.checked);session.consent=e.target.checked;session.consentDestination=status.dataDestination||'openai';setError('');}}/><span>{status.dataDestination==='boxanh'?'Tôi đồng ý xử lý nội dung trò chuyện bằng AI trên máy chủ BOXANH. Không gửi nội dung tới OpenAI.':'Tôi đồng ý gửi nội dung trò chuyện tới OpenAI để nhận tư vấn AI.'} Không nhập mật khẩu, OTP hoặc thông tin thanh toán. <a href="/chinh-sach#bao-mat">Quyền riêng tư</a></span></label>}
     <form className="bo-composer" onSubmit={e=>{e.preventDefault();send(input);}}><label className="sr-only" htmlFor="bo-chat-input">Câu hỏi dành cho Bơ</label><textarea ref={inputRef} id="bo-chat-input" placeholder="Kể Bơ nghe tình huống của bạn, hoặc hỏi tiếp điều vừa trao đổi…" value={input} maxLength={1800} rows={2} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();send(input);}}}/>{busy?<button type="button" className="bo-send" aria-label="Dừng câu trả lời" onClick={()=>abort.current?.abort()}><Square size={16}/></button>:<button type="submit" className="bo-send" aria-label="Gửi câu hỏi" disabled={!input.trim()||status.loading}><Send size={19}/></button>}</form>
     {error&&<p className="bo-composer-error" role="alert">{error}</p>}
     <div className="bo-composer-footer"><button type="button" onClick={()=>setPlannerOpen(true)}><CalendarDays size={13}/> Chuẩn bị đặt lịch</button><span>Giá & lịch do BOXANH xác nhận.</span><span>{input.length?input.length+'/1.800':'Enter để gửi · Shift + Enter xuống dòng'}</span></div>
    </div>
   </section>
  </div>
  <BookingPlanner open={plannerOpen} onOpenChange={setPlannerOpen} onPrepared={prepared} onQuote={onQuote}/>
  <DialogPrimitive.Root open={resetOpen} onOpenChange={setResetOpen}><DialogPrimitive.Portal><DialogPrimitive.Overlay className="bo-modal-overlay"/><DialogPrimitive.Content className="bo-reset-dialog"><DialogPrimitive.Close className="bo-close-reset" aria-label="Đóng xác nhận"><X size={18}/></DialogPrimitive.Close><DialogPrimitive.Title>Bắt đầu câu chuyện mới?</DialogPrimitive.Title><DialogPrimitive.Description>Hội thoại hiện tại sẽ được bỏ khỏi phiên này. Các yêu cầu dịch vụ bạn đã gửi vẫn được giữ nguyên.</DialogPrimitive.Description><div><button type="button" onClick={()=>setResetOpen(false)}>Giữ hội thoại</button><button type="button" onClick={newChat}>Bắt đầu mới</button></div></DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root>
 </div>;
}
