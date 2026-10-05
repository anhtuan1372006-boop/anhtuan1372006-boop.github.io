import test from 'node:test';
import assert from 'node:assert/strict';
import {createAssistantService} from '../server/assistant.mjs';
import {localModelOrigin,localKnowledge,localHistory,quoteInputFromMessages,priceTextIsGrounded} from '../server/assistant-local.mjs';

const config=()=>({area:'Vinh, Nghệ An',phone:'0332357455',smallBase:350000,fullBase:500000});
const estimate=draft=>({total:654000,service:draft.service,lines:[],needsSurvey:false});
const env={BOXANH_AI_PROVIDER:'local',BOXANH_LOCAL_MODEL:'test-local'};
const user=[{role:'user',content:'Mình muốn chuyển trọ, trọn gói, 15 hộp, 8 km.'}];
const tags=()=>Response.json({models:[{name:'test-local'}]});
function ndjson(events){const bytes=new TextEncoder().encode(events.map(e=>JSON.stringify(e)).join('\r\n'));let offset=0;return new Response(new ReadableStream({pull(c){if(offset===bytes.length)return c.close();c.enqueue(bytes.slice(offset,offset+7));offset=Math.min(bytes.length,offset+7);}}));}
const complete=text=>ndjson([{message:{role:'assistant',content:text},done:false},{message:{role:'assistant',content:''},done:true,done_reason:'stop'}]);

test('local model is restricted to loopback and unavailable models stay in guide mode',async()=>{
 assert.equal(localModelOrigin(),'http://127.0.0.1:11434');
 for(const url of ['https://external.example','http://0.0.0.0:11434','http://localhost:11434/private','http://user:password@localhost:11434','http://localhost:11434/?x=1'])assert.throws(()=>localModelOrigin(url));
 let calls=0;const service=createAssistantService({config,estimate,env,fetchImpl:async()=>{calls++;return Response.json({models:[]});}});
 assert.equal((await service.status()).ready,false);assert.equal((await service.status()).dataDestination,'boxanh');assert.equal(calls,1);
 await assert.rejects(service.stream(user,{onEvent:()=>{}}),e=>e.status===503);assert.equal(calls,1);
 const disabled=createAssistantService({config,estimate,env:{...env,BOXANH_AI_ENABLED:'0'},fetchImpl:()=>assert.fail('disabled model made request')});assert.equal((await disabled.status()).ready,false);
});
test('local instructions retrieve relevant website knowledge and bound recent dialogue',()=>{
 const prompt=localKnowledge([{role:'user',content:'Mình cần dọn phòng.'},{role:'assistant',content:'Bạn cần khảo sát.'},{role:'user',content:'còn giá bao nhiêu?'}],config());
 assert.match(prompt,/Dọn phòng/);assert.match(prompt,/khảo sát/);assert.match(prompt,/get_service_quote/);assert.match(prompt,/không giữ lịch/);assert.match(prompt,/MỤC LỤC/);
 const history=localHistory(Array.from({length:16},(_,i)=>({role:i%2?'user':'assistant',content:String(i)+'x'.repeat(2800)})));
 assert.ok(history.length<=8);assert.ok(history.reduce((n,m)=>n+m.content.length,0)<=8500);assert.ok(history.at(-1).content.startsWith('15'));
});
test('real model protocol streams Unicode and never contacts OpenAI or sends a key',async()=>{
 const requests=[],events=[];const service=createAssistantService({config,estimate,env,fetchImpl:async(url,options)=>{
  assert.ok(url.startsWith('http://127.0.0.1:11434/api/'));
  if(url.endsWith('/tags'))return tags();const body=JSON.parse(options.body);requests.push(body);assert.ok(!options.headers.Authorization);return complete('Chào bạn, mình là Bơ. 🌱');
 }});
 assert.equal((await service.status()).ready,true);const result=await service.stream(user,{onEvent:e=>events.push(e)});
 assert.equal(result.text,'Chào bạn, mình là Bơ. 🌱');assert.equal(events.at(-1).type,'done');assert.equal(requests[0].think,false);assert.equal(requests[0].options.num_ctx,8192);assert.equal(requests[0].messages.at(-1).content,user[0].content);
});
test('native tool loop uses the BOXANH calculator and never submits an order',async()=>{
 let rounds=0;const requests=[],events=[];const service=createAssistantService({config,estimate,env,fetchImpl:async(url,options)=>{
  if(url.endsWith('/tags'))return tags();requests.push(JSON.parse(options.body));
  return ++rounds===1?ndjson([{message:{role:'assistant',content:'',tool_calls:[{function:{name:'get_service_quote',arguments:{service:'full',boxes:15,distance:8,originFloor:2}}}]},done:true,done_reason:'stop'}]):complete('Bạn xem ước tính dự kiến bên dưới nhé.');
 }});
 const result=await service.stream(user,{onEvent:e=>events.push(e)});assert.equal(rounds,2);assert.equal(result.actions[0].quote.total,654000);assert.equal(result.actions[0].bookingCreated,false);
 const tool=requests[1].messages.find(m=>m.role==='tool');assert.equal(tool.tool_name,'get_service_quote');assert.equal(JSON.parse(tool.content).quote.total,654000);assert.equal(JSON.parse(tool.content).bookingCreated,false);
 assert.ok(events.some(e=>e.type==='action'));assert.equal(events.at(-1).type,'done');
});
test('incomplete or truncated local answers are not marked complete and private errors stay private',async()=>{
 for(const response of [new Response('private-model-detail',{status:500}),ndjson([{message:{role:'assistant',content:'Chào'},done:false}]),ndjson([{message:{role:'assistant',content:'Chào'},done:true,done_reason:'length'}])]){
  const events=[],service=createAssistantService({config,estimate,env,fetchImpl:async url=>url.endsWith('/tags')?tags():response});
  await assert.rejects(service.stream(user,{onEvent:e=>events.push(e)}),e=>e.status===503&&!e.message.includes('private-model-detail'));assert.ok(!events.some(e=>e.type==='done'));
 }
});
test('local cancellation and daily limit prevent unnecessary generation',async()=>{
 let generations=0;const service=createAssistantService({config,estimate,env:{...env,BOXANH_AI_DAILY_LIMIT:'1'},fetchImpl:async(url,options)=>{if(url.endsWith('/tags'))return tags();options.signal.throwIfAborted();generations++;return complete('Mình có thể hỗ trợ bạn.');}});
 await service.stream(user,{onEvent:()=>{}});await assert.rejects(service.stream(user,{onEvent:()=>{}}),e=>e.status===429);assert.equal(generations,1);
 const controller=new AbortController();controller.abort();const cancelled=createAssistantService({config,estimate,env,fetchImpl:async url=>{if(url.endsWith('/tags'))return tags();assert.fail('cancelled generation');}});await assert.rejects(cancelled.stream(user,{signal:controller.signal,onEvent:()=>{}}),e=>e.name==='AbortError');
});
test('changed quote uses current user facts and the calculator without a model inventing money',async()=>{
 const dialogue=[{role:'user',content:'Mình chọn Trọn gói, 15 hộp, đi 8 km, nơi đi tầng 2 không có thang máy, nơi đến tầng trệt. Hãy tính phí dự kiến.'},{role:'assistant',content:'Ước tính cũ.'},{role:'user',content:'Giữ nguyên gói và tầng, đổi thành 12 hộp và đi 6 km. Tính lại giúp mình.'}];
 assert.deepEqual(quoteInputFromMessages(dialogue),{service:'full',boxes:12,distance:6,originFloor:2,originElevator:false,destinationFloor:0});
 let captured;const service=createAssistantService({config,env,estimate:draft=>{captured=draft;return {total:588000,lines:[{label:'Gói',amount:500000},{label:'Hộp',amount:20000},{label:'Quãng đường',amount:18000},{label:'Cầu thang',amount:50000}]};},fetchImpl:async url=>{assert.ok(url.endsWith('/tags'));return tags();}});
 const result=await service.stream(dialogue,{onEvent:()=>{}});assert.equal(captured.distance,6);assert.equal(captured.boxes,12);assert.equal(result.actions[0].quote.total,588000);assert.match(result.text,/588/);assert.equal(result.actions[0].bookingCreated,false);
 assert.equal(quoteInputFromMessages([{role:'user',content:'So sánh giá Gọn nhẹ và Trọn gói.'}]),null);
 assert.equal(quoteInputFromMessages([...dialogue,{role:'user',content:'Ký gửi có được trừ chi phí ngay không?'}]),null);
 assert.equal(quoteInputFromMessages([...dialogue,{role:'user',content:'So sánh giá đi 5 km và 10 km.'}]),null);
 assert.equal(quoteInputFromMessages([{role:'user',content:'Giá Trọn gói -12 hộp đi 5 km?'}]).boxes,-12);
 assert.equal(priceTextIsGrounded('Tổng 588.000 VNĐ',result.actions,config()),true);assert.equal(priceTextIsGrounded('Tổng 606.000VNĐ',result.actions,config()),false);
});
test('unverified local price claims are blocked before any answer text is shown',async()=>{
 const events=[],service=createAssistantService({config,estimate,env,fetchImpl:async url=>url.endsWith('/tags')?tags():complete('Giá cụ thể là 606.000 VNĐ.')});
 await assert.rejects(service.stream([{role:'user',content:'Giúp mình tính giá vận chuyển.'}],{onEvent:e=>events.push(e)}),e=>e.status===422);assert.ok(!events.some(e=>['delta','done'].includes(e.type)));
});
