import {guideTopics,lookupGuide,serviceNames} from './assistant-knowledge.js';

export const conversationStarters=[
 {id:'moving',title:'Mình cần chuyển trọ',prompt:'Mình muốn chuyển trọ. Bạn hỏi mình từng bước để chọn dịch vụ phù hợp nhé.',topic:'moving'},
 {id:'quote',title:'Mình muốn biết chi phí',prompt:'Giúp mình ước tính chi phí. Bạn cần những thông tin gì?',topic:'quote'},
 {id:'cleaning',title:'Dọn phòng cũ hoặc mới',prompt:'Mình cần dọn phòng. Bạn tư vấn phạm vi công việc và cách gửi khảo sát nhé.',topic:'cleaning'},
 {id:'handover',title:'Chuẩn bị trả phòng',prompt:'Mình sắp trả phòng. Cần kiểm tra những gì trước khi bàn giao?',topic:'handover'},
 {id:'surplus',title:'Xử lý đồ không mang theo',prompt:'Mình có đồ không muốn mang theo. Giúp mình chọn thu mua, ký gửi hoặc thu gom.',topic:'surplus'},
 {id:'boxes',title:'Mình chỉ cần thuê hộp',prompt:'Mình đã có xe, chỉ cần thuê hộp. Cách giao, sử dụng và thu hồi thế nào?',topic:'boxes'},
 {id:'booking',title:'Chuẩn bị đặt lịch',prompt:'Mình muốn chuẩn bị đặt lịch. Hãy hỏi thông tin còn thiếu, đừng hỏi lại những gì mình đã nói.',topic:'booking'},
 {id:'tracking',title:'Tra cứu yêu cầu đã gửi',prompt:'Mình đã gửi yêu cầu rồi. Làm sao xem tiến độ?',topic:'tracking'},
 {id:'support',title:'Mình đang gặp sự cố',prompt:'Mình gặp vấn đề với đồ đạc sau chuyển trọ. Bạn hướng dẫn mình cách báo sự cố nhé.',topic:'support'},
 {id:'guide',title:'Khám phá toàn bộ website',prompt:'Bạn có thể giúp mình những gì? Giới thiệu tất cả chức năng chính và cách bắt đầu.',topic:'guide'},
];
export function openingGreeting(area){return `Chào bạn, mình là Bơ, trợ lý của BOXANH tại ${area}. Hôm nay bạn đang cần chuyển trọ, dọn phòng, bàn giao phòng hay xử lý đồ không mang theo?\n\nBạn có thể kể tình huống của mình hoặc chọn một gợi ý bên dưới. Mình sẽ cùng bạn tìm cách bắt đầu phù hợp.`;}
const followUps={
 moving:['Mình tự đóng đồ được, nên chọn gói nào?','Nếu muốn hỗ trợ từ đóng gói đến chuyển đồ thì sao?','Cần chuẩn bị những gì trước ngày chuyển?'],
 services:['So sánh Gọn nhẹ và Trọn gói cho mình.','Mình có xe rồi, thuê hộp thế nào?','Giúp mình chuẩn bị đặt lịch.'],
 quote:['Những khoản phụ phí nào có thể phát sinh?','Mình muốn chuẩn bị bản nháp để xem chi phí.','Nếu có đồ cũ thì có được giảm phí không?'],
 fees:['Nếu có thang máy thì phí cầu thang tính thế nào?','Giá dự kiến có phải giá cuối cùng không?','Giúp mình chuẩn bị đặt lịch.'],
 cleaning:['Dọn phòng cũ và phòng mới khác nhau thế nào?','Cần gửi ảnh và diện tích phòng thế nào?','Giúp mình chuẩn bị khảo sát dọn phòng.'],
 handover:['Cho mình danh sách kiểm tra trước bàn giao.','BOXANH có quyết định tiền cọc không?','Giúp mình chuẩn bị khảo sát bàn giao.'],
 boxes:['Khi nào giao và thu hồi hộp?','Giữ hộp lâu hơn có được không?','Mình muốn chuẩn bị yêu cầu thuê hộp.'],
 surplus:['Thu mua và ký gửi khác nhau thế nào?','Đồ hỏng thì xử lý như thế nào?','Hướng dẫn gửi ảnh và hồ sơ đồ cũ.'],
 goods:['Ký gửi có được trừ phí chuyển ngay không?','Mình muốn liên kết đồ cũ với đơn chuyển trọ.','Cần ảnh và thông tin nào để thẩm định?'],
 booking:['Chưa biết số hộp thì làm thế nào?','Cần nhập thông tin liên hệ ở đâu?','Gửi yêu cầu có nghĩa là đã chốt lịch chưa?'],
 survey:['Dọn phòng có giá cố định không?','Cần ảnh và diện tích phòng thế nào?','Sau khi gửi khảo sát thì bước tiếp theo là gì?'],
 tracking:['Mình quên mã yêu cầu thì làm thế nào?','Có xem vị trí xe theo GPS không?','Mình cần đội BOXANH hỗ trợ trực tiếp.'],
 support:['Cần giữ những bằng chứng gì khi báo sự cố?','Hướng dẫn gửi hồ sơ sự cố.','Sau khi gửi, mình theo dõi phản hồi ở đâu?'],
 guide:['Chỉ cho mình cách đặt lịch.','Mở hướng dẫn chuẩn bị ngày chuyển.','Có những chức năng nào đang hoạt động?'],
};
export function suggestedPrompts(messages){
 const last=messages.at(-1);if(last?.pending||last?.error)return [];
 const supplied=last?.actions?.find(a=>a.type==='suggestions')?.prompts;
 if(supplied?.length)return supplied.slice(0,3);
 if(last?.actions?.some(a=>['draft','quote'].includes(a.type)))return ['Giải thích giúp mình các khoản trong ước tính.','Nếu mình thay đổi số hộp thì sao?','Mình cần kiểm tra gì trước khi gửi yêu cầu?'];
 const latestUser=[...messages].reverse().find(m=>m.role==='user');
 const topic=last?.links?.[0]?.id||lookupGuide(latestUser?.text||'')[0]?.id;
 return followUps[topic]||['Giúp mình chọn dịch vụ phù hợp.','Mình muốn biết chi phí dự kiến.','Hướng dẫn mình bước tiếp theo.'];
}
// Replay useful dialogue and verified draft fields; never silently drop all guide replies.
export function buildConversationHistory(messages,user){
 const history=[];let characters=0;
 for(const message of [...messages,user].filter(m=>!m.error&&!m.pending&&(m.text||m.actions?.length)).slice(-16).reverse()){
  let content=(message.text||'').slice(0,2500);
  const draft=message.actions?.filter(a=>['draft','quote'].includes(a.type)).map(a=>({draft:a.draft,quote:{total:a.quote?.total,needsSurvey:a.quote?.needsSurvey},assumptions:a.assumptions,bookingCreated:false}));
  if(draft?.length)content+='\nThông tin bản nháp đã hiển thị (cần công cụ kiểm tra lại): '+JSON.stringify(draft);
  content=content.slice(0,4000);
  if(characters+content.length>18000)break;
  characters+=content.length;history.unshift({role:message.role,content});
 }
 return history;
}
export function replyBlocks(text){
 return text.split(/\n\n+/).map(block=>{
  const lines=block.split('\n');
  if(lines.every(line=>/^\s*[-•]\s+/.test(line)))return {kind:'list',ordered:false,lines:lines.map(l=>l.replace(/^\s*[-•]\s+/,''))};
  if(lines.every(line=>/^\s*\d+[.)]\s+/.test(line)))return {kind:'list',ordered:true,lines:lines.map(l=>l.replace(/^\s*\d+[.)]\s+/,''))};
  if(/^#{1,3} /.test(block)&&lines.length===1)return {kind:'heading',text:block.replace(/^#{1,3} /,'')};
  return {kind:'paragraph',text:block};
 });
}
export function assistantCapabilities(){return conversationStarters.map(s=>({title:s.title,href:guideTopics.find(t=>t.id===s.topic).href}));}
