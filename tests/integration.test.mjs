import {test,before,after} from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtempSync,rmSync,mkdirSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';

test('detail pages start in their own scene and hide the homepage hub before JavaScript',async()=>{
 const home=await (await fetch(origin+'/')).text();
 assert.match(home,/data-service-masthead>/);
 const scenes={'chuyen-tro':'v10-moving','don-phong':'v10-cleaning','ban-giao':'v10-handover','hop-tai-su-dung':'v10-boxes','song-xanh':'v10-green','huong-dan':'v10-guide-intro','uoc-tinh':'v10-quote-intro'};
 for(const [route,scene] of Object.entries(scenes)){
  const html=await (await fetch(origin+'/'+route)).text();
  assert.match(html,/data-service-masthead hidden>/);
  assert.ok(html.includes('data-route="/'+route+'"'));
  const main=html.match(/<main id="main"[^>]*>([\s\S]*?)<\/main>/)[1];
  assert.ok(main.includes(scene));
  assert.ok(!main.includes('n7-home-hero')&&!main.includes('boxanh-ambassador.png'));
 }
});

test('GitHub Pages can call public APIs while other origins and cross-site admin writes stay blocked',async()=>{
 const allowed='https://anhtuan1372006-boop.github.io';
 const preflight=await fetch(origin+'/api/quote',{method:'OPTIONS',headers:{Origin:allowed,'Access-Control-Request-Method':'POST'}});
 assert.equal(preflight.status,204);assert.equal(preflight.headers.get('access-control-allow-origin'),allowed);
 assert.equal(preflight.headers.get('access-control-allow-credentials'),null);
 const publicCall=await fetch(origin+'/api/quote',{method:'POST',headers:{Origin:allowed,'Sec-Fetch-Site':'cross-site','Content-Type':'application/json'},body:JSON.stringify({service:'full',boxes:10,distance:5})});
 assert.equal(publicCall.status,200);assert.equal(publicCall.headers.get('access-control-allow-origin'),allowed);
 const unrelated=await fetch(origin+'/api/quote',{method:'POST',headers:{Origin:'https://unrelated.example','Content-Type':'application/json'},body:JSON.stringify({service:'full',boxes:10,distance:5})});
 assert.equal(unrelated.status,403);assert.equal(unrelated.headers.get('access-control-allow-origin'),null);
 const adminCall=await fetch(origin+'/api/admin/login',{method:'POST',headers:{Origin:allowed,'Content-Type':'application/json'},body:JSON.stringify({password:'NotAnAdminPassword'})});
 assert.equal(adminCall.status,403);assert.equal(adminCall.headers.get('access-control-allow-origin'),null);
});

test('Vietnamese display typography has local normal and italic font assets and avoids mixed Georgia fallback',async()=>{
 const page=await (await fetch(origin+'/uoc-tinh')).text();
 assert.match(page,/Thống nhất sau khảo sát\./);
 assert.match(page,/boxanh-serif-400-italic\.woff2/);
 const declarations=await (await fetch(origin+'/fonts.css')).text();
 for(const style of ['normal','italic']){
  const face=declarations.match(new RegExp("@font-face\\s*\\{[^}]*font-family:\\s*'BOXANH Serif';[^}]*font-style:\\s*"+style+";[^}]*\\}",'s'));
  assert.ok(face,'Explicit '+style+' face must be registered');
  assert.match(face[0],new RegExp('boxanh-serif-400-'+style+'\\.woff2'));
  const asset=await fetch(origin+'/assets/fonts/boxanh-serif-400-'+style+'.woff2');
  assert.equal(asset.status,200);assert.equal(asset.headers.get('content-type'),'font/woff2');
  const bytes=Buffer.from(await asset.arrayBuffer());assert.equal(bytes.subarray(0,4).toString(),'wOF2');
 }
 const compiled=await (await fetch(origin+'/portal/portal.css')).text();
 assert.ok(compiled.includes('BOXANH Serif'));
 assert.doesNotMatch(compiled,/Georgia|Times New Roman/);
});

test('home and service content are present before JavaScript, with server configuration',async()=>{
 const home=await (await fetch(origin+'/')).text();
 assert.match(home,/<h1[^>]*>Chuyển nơi ở\./);assert.match(home,/Dọn phòng/);assert.match(home,/Bàn giao phòng/);assert.match(home,/CSKH/);
 const embedded=home.match(/<script type="application\/json" id="site-config">([\s\S]*?)<\/script>/);
 assert.ok(embedded);assert.equal(JSON.parse(embedded[1]).area,'Vinh, Nghệ An');
 const services=await (await fetch(origin+'/dich-vu')).text();assert.match(services,/<h1>Cả hành trình\./);assert.match(services,/id="phu-phi"/);assert.match(services,/data-checklist="5"/);assert.match(services,/Khám phá hệ thống hộp tái sử dụng/);
 assert.match(home,/data-portal-home/);assert.match(home,/\/portal\/app.js/);assert.ok(!home.includes('https://fonts.googleapis.com'));assert.ok(!home.includes('src="/crate.js"'));
});

test('static assets compress, revalidate and keep HEAD responses bodyless',async()=>{
 const compressed=await fetch(origin+'/experience.js',{headers:{'Accept-Encoding':'gzip'}});
 assert.equal(compressed.status,200);assert.equal(compressed.headers.get('content-encoding'),'gzip');
 assert.match(await compressed.text(),/initExperience/);
 const etag=compressed.headers.get('etag');assert.ok(etag);
 const cached=await fetch(origin+'/experience.js',{headers:{'Accept-Encoding':'gzip','If-None-Match':etag}});
 assert.equal(cached.status,304);assert.equal(await cached.text(),'');
 const plain=await fetch(origin+'/experience.js',{headers:{'Accept-Encoding':'gzip;q=0, identity'}});
 assert.equal(plain.headers.get('content-encoding'),null);assert.notEqual(plain.headers.get('etag'),etag);
 const head=await fetch(origin+'/experience.js',{method:'HEAD',headers:{'Accept-Encoding':'gzip'}});
 assert.equal(head.status,200);assert.equal(await head.text(),'');assert.ok(Number(head.headers.get('content-length'))>0);
 const font=await fetch(origin+'/assets/fonts/be-vietnam-pro-vietnamese-400-normal.woff2');
 assert.equal(font.headers.get('content-type'),'font/woff2');assert.match(font.headers.get('cache-control'),/max-age=300/);
});

test('the compact homepage links to complete server-rendered feature pages',async()=>{
 const home=await (await fetch(origin+'/')).text();
 const pages={'/chuyen-tro':'Đồ đạc đến nơi.','/don-phong':'Không gian sạch.','/ban-giao':'Khép lại chỗ cũ.','/hop-tai-su-dung':'Một chiếc hộp.','/song-xanh':'Bớt một món đồ.','/huong-dan':'Chuyển trọ lần đầu?','/uoc-tinh':'Ước tính trước.'};
 for(const [route,title] of Object.entries(pages)){
  const res=await fetch(origin+route);assert.equal(res.status,200,route);const html=await res.text();
  assert.ok(html.includes('data-portal-detail="'+route+'"'),route);assert.ok(html.includes(title),route);assert.ok(html.includes('id="route-back"'),route);
  assert.ok(home.includes('href="'+route+'"'),route+' has a home entry');
 }
 assert.ok(home.includes('/assets/boxanh-ambassador.png'));assert.ok(home.includes('/assets/boxanh-huong-dan-v10.mp4'));assert.ok(!home.includes('crate-viewer'));
 assert.ok(!home.includes('id="bang-gia"'));assert.ok(!home.includes('id="cau-hoi"'));
});

test('tutorial and greeting stream with byte ranges, correct types and bodyless HEAD',async()=>{
 for(const [asset,type] of [['boxanh-huong-dan-v10.mp4','video/mp4'],['boxanh-loi-chao.mp3','audio/mpeg']]){
  const route=origin+'/assets/'+asset;
  const head=await fetch(route,{method:'HEAD'});assert.equal(head.status,200);assert.equal(head.headers.get('content-type'),type);assert.equal(head.headers.get('accept-ranges'),'bytes');assert.equal(await head.text(),'');
  const part=await fetch(route,{headers:{Range:'bytes=0-31'}});assert.equal(part.status,206);assert.equal((await part.arrayBuffer()).byteLength,32);assert.match(part.headers.get('content-range'),/^bytes 0-31\/\d+$/);
  const suffix=await fetch(route,{headers:{Range:'bytes=-16'}});assert.equal(suffix.status,206);assert.equal((await suffix.arrayBuffer()).byteLength,16);
  const invalid=await fetch(route,{headers:{Range:'bytes=999999999999-'}});assert.equal(invalid.status,416);
 }
 const captions=await fetch(origin+'/assets/boxanh-huong-dan-v10.vtt');assert.equal(captions.status,200);assert.match(captions.headers.get('content-type'),/^text\/vtt/);assert.match(await captions.text(),/^WEBVTT/);
});

const root=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const work=path.resolve(process.env.BOXANH_TEST_DIR||path.join(root,'work'));mkdirSync(work,{recursive:true});
const data=mkdtempSync(path.join(work,'boxanh-test-'));
const password='Boxanh-test-only-strong-password';
let processHandle,origin,cookie,booking,goods;
const tinyImage='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jD0cAAAAASUVORK5CYII=';
async function call(route,payload,auth=false,headers={}){const response=await fetch(origin+route,{method:payload===undefined?'GET':'POST',headers:{...(payload===undefined?{}:{'Content-Type':'application/json'}),...(auth?{Cookie:cookie}:{}),...headers},body:payload===undefined?undefined:JSON.stringify(payload)});const value=await response.json();return {status:response.status,value,response};}
async function dashboard(){const r=await call('/api/admin/dashboard',undefined,true);assert.equal(r.status,200);return r.value;}
before(async()=>{processHandle=spawn(process.execPath,['server.mjs'],{cwd:root,env:{...process.env,DATA_DIR:data,PORT:'0',ADMIN_PASSWORD:password,NODE_ENV:'test',PUBLIC_CLIENT_ORIGIN:'https://anhtuan1372006-boop.github.io'},stdio:['ignore','pipe','pipe']});origin=await new Promise((resolve,reject)=>{let text='';const timer=setTimeout(()=>reject(new Error('Server startup timed out')),15000);processHandle.stdout.on('data',chunk=>{text+=chunk;const m=text.match(/BOXANH ready at (http:\/\/[^\s]+)/);if(m){clearTimeout(timer);resolve(m[1]);}});processHandle.on('exit',code=>{clearTimeout(timer);reject(new Error('Server exited '+code));});processHandle.stderr.on('data',chunk=>{if(chunk.toString().includes('Error:'))reject(new Error(chunk.toString()));});});});
after(async()=>{if(processHandle&&!processHandle.killed){processHandle.kill();await new Promise(resolve=>processHandle.once('exit',resolve));}const resolved=path.resolve(data);assert.ok(resolved.startsWith(work+path.sep)&&path.basename(resolved).startsWith('boxanh-test-'));rmSync(resolved,{recursive:true,force:true});});

test('public routes and images load; configuration identifies Vinh',async()=>{for(const route of ['/','/dich-vu','/dat-lich','/gui-do','/do-cu','/tra-cuu','/quan-tri','/assets/apartment.jpg','/assets/moving.jpg','/assets/room-real.jpg','/assets/crate-poster.jpg','/robots.txt']){const r=await fetch(origin+route);assert.equal(r.status,200,route);}const c=await call('/api/config');assert.equal(c.value.area,'Vinh, Nghệ An');assert.equal(c.value.phone,'0332357455');assert.equal((await call('/api/products')).value.length,0);});
test('quotes use server prices and reject false-shaped booleans',async()=>{const r=await call('/api/quote',{service:'full',boxes:10,distance:8,originFloor:2,destinationFloor:1,originElevator:false,destinationElevator:true,bulky:1,packing:false});assert.equal(r.status,200);assert.equal(r.value.total,654000);assert.equal((await call('/api/quote',{service:'full',originElevator:'false'})).status,400);assert.equal((await call('/api/quote',{service:'small',boxes:61})).status,400);});
test('admin auth and cross-site writes are protected',async()=>{assert.equal((await call('/api/admin/dashboard')).status,401);assert.equal((await call('/api/admin/login',{password:'wrong-password'})).status,401);const r=await call('/api/admin/login',{password});assert.equal(r.status,200);cookie=r.response.headers.get('set-cookie').split(';')[0];assert.match(r.response.headers.get('set-cookie'),/HttpOnly/);assert.equal((await call('/api/admin/inventory',{total:100,cleaning:0,retired:0},true,{Origin:'https://unrelated.example'})).status,403);});
test('booking saves linked goods and private photos, and prevents duplicate retries',async()=>{const payload={requestId:randomUUID(),service:'full',boxes:10,distance:5,originFloor:0,destinationFloor:0,originElevator:false,destinationElevator:false,bulky:0,packing:false,name:'Khách kiểm thử',phone:'0900000000',origin:'Địa chỉ thử nghiệm A, Vinh',destination:'Địa chỉ thử nghiệm B, Vinh',date:new Date(Date.now()+2*86400000).toISOString().slice(0,10),slot:'morning',surplusMode:'buyback',surplusDescription:'Quạt cần thẩm định',photos:[{data:tinyImage}],consent:true};assert.equal((await call('/api/bookings',{...payload,consent:false})).status,400);const r=await call('/api/bookings',payload);assert.equal(r.status,201);booking=r.value;const repeat=await call('/api/bookings',payload);assert.equal(repeat.value.code,booking.code);const d=await dashboard();assert.equal(d.bookings.length,1);assert.equal(d.goods.length,1);goods=d.goods[0];assert.equal(goods.booking_code,booking.code);const photo=d.bookings[0].photos[0];assert.equal((await fetch(origin+photo.url)).status,401);assert.equal((await fetch(origin+photo.url,{headers:{Cookie:cookie}})).status,200);});
test('tracking verifies phone and exposes neither addresses nor photo urls',async()=>{assert.equal((await call('/api/track',{code:booking.code,phone:'0911111111'})).status,404);const r=await call('/api/track',{code:booking.code,phone:'0900000000'});assert.equal(r.status,200);assert.equal(r.value.status,'requested');assert.equal(r.value.origin,undefined);assert.equal(r.value.photos,undefined);assert.equal(r.value.phone,undefined);});
test('state changes require actual service steps, reserve stock and count partial returns',async()=>{let d=await dashboard();const id=d.bookings[0].id;const update=(status,extra={})=>call('/api/admin/bookings/'+id,{status,finalQuote:500000,note:'Kiểm thử nội bộ',...extra},true);assert.equal((await update('completed')).status,409);for(const status of ['surveyed','quoted'])assert.equal((await update(status)).status,200);assert.equal((await update('confirmed')).status,409);assert.equal((await call('/api/admin/inventory',{total:10,cleaning:0,retired:0},true)).status,200);assert.equal((await update('confirmed')).status,200);d=await dashboard();assert.equal(d.inventory.reserved,10);assert.equal(d.inventory.available,0);assert.equal((await update('boxes_delivered')).status,200);assert.equal((await update('moving')).status,200);assert.equal((await update('arrived')).status,200);assert.equal((await update('arrived',{goodReturn:6})).status,200);d=await dashboard();assert.equal(d.inventory.allocated,4);assert.equal(d.inventory.cleaning,6);assert.equal((await update('boxes_collected')).status,409);assert.equal((await update('boxes_collected',{goodReturn:3,damagedReturn:1})).status,200);d=await dashboard();assert.equal(d.inventory.allocated,0);assert.equal(d.inventory.cleaning,9);assert.equal(d.inventory.retired,1);assert.equal((await update('completed')).status,200);});
test('buyback allocates valuation between fee credit and cash without double benefit',async()=>{const update=(status,credit=0,payout=null)=>call('/api/admin/goods/'+goods.id,{status,valuation:250000,credit,payout,note:'Giá được đồng ý trong kiểm thử'},true);assert.equal((await update('paid',150000,100000)).status,409);for(const status of ['reviewing','offered','accepted'])assert.equal((await update(status)).status,200);assert.equal((await call('/api/admin/goods/'+goods.id,{status:'collected',valuation:1000000,credit:1000000,payout:0,note:'Kiểm thử phân bổ vượt phí'},true)).status,400);assert.equal((await update('collected',150000,200000)).status,400);assert.equal((await update('collected',150000,100000)).status,200);let d=await dashboard();assert.equal(d.bookings[0].buyback_credit,150000);assert.equal((await update('paid',150000,100000)).status,200);assert.equal((await update('reviewing')).status,409);const track=await call('/api/track',{code:booking.code,phone:'0900000000'});assert.equal(track.value.finalQuote-track.value.credit,350000);});
test('consignment must sell before payout; public product images are separate from private intake',async()=>{const r=await call('/api/goods',{requestId:randomUUID(),phone:'0900000000',name:'Khách kiểm thử',category:'books',mode:'consign',description:'Sách kiểm thử',condition:'good',consent:true});assert.equal(r.status,201);let d=await dashboard();const g=d.goods.find(x=>x.code===r.value.code);const update=(status,payout=null)=>call('/api/admin/goods/'+g.id,{status,valuation:100000,payout,credit:0,note:'Thỏa thuận kiểm thử'},true);assert.equal((await update('paid',80000)).status,409);for(const status of ['reviewing','offered','accepted','collected'])assert.equal((await update(status)).status,200);const p=await call('/api/admin/products',{name:'Sách kiểm thử',category:'books',price:100000,description:'Món đồ trong dữ liệu kiểm thử',condition:'Đã kiểm tra',goodsId:g.id,photos:[{data:tinyImage}]},true);assert.equal(p.status,200);const list=await call('/api/products');assert.equal(list.value.length,1);assert.match(list.value[0].image,/^\/api\/product-photos\//);assert.equal((await fetch(origin+list.value[0].image)).status,200);assert.equal((await update('sold')).status,200);assert.equal((await call('/api/products')).value.length,0);assert.equal((await update('paid',80000)).status,200);assert.equal((await call('/api/admin/products/'+list.value[0].id,{available:true},true)).status,409);});

test('cleaning and handover request quotes after survey and finish without box stock',async()=>{
 for(const service of ['cleaning','handover']){
  const estimate=await call('/api/quote',{service});assert.equal(estimate.status,200);assert.equal(estimate.value.needsSurvey,true);assert.deepEqual(estimate.value.lines,[]);
  const payload={requestId:randomUUID(),service,roomArea:20,name:'Khách kiểm thử',phone:'0900000000',origin:'Phòng kiểm thử',destination:'Phòng kiểm thử',date:new Date(Date.now()+86400000).toISOString().slice(0,10),slot:'morning',consent:true};
  assert.equal((await call('/api/bookings',{...payload,roomArea:0})).status,400);
  const r=await call('/api/bookings',payload);assert.equal(r.status,201);let d=await dashboard();const record=d.bookings.find(b=>b.code===r.value.code),before=d.inventory;
  assert.equal(record.payload.roomArea,20);assert.equal(record.payload.boxes,0);assert.ok(!record.steps.includes('boxes_delivered'));
  for(const status of ['surveyed','quoted','confirmed','servicing','checked','completed']){const result=await call('/api/admin/bookings/'+record.id,{status,finalQuote:200000,note:'Phạm vi và chi phí được thống nhất trong kiểm thử'},true);assert.equal(result.status,200,status);}
  d=await dashboard();assert.deepEqual(d.inventory,before);assert.equal(d.bookings.find(b=>b.id===record.id).allocation,null);
 }
});
test('CSKH verifies booking identity, protects photos, prevents retries and requires a recorded result',async()=>{
 const payload={requestId:randomUUID(),code:booking.code,phone:'0900000000',type:'seal',boxId:'BX-000128',sealId:'SEAL-TEST',description:'Seal có dấu hiệu bất thường trong kiểm thử',photos:[{data:tinyImage}],consent:true};
 assert.equal((await call('/api/issues',{...payload,phone:'0911111111'})).status,404);assert.equal((await call('/api/issues',{...payload,consent:false})).status,400);
 const r=await call('/api/issues',payload);assert.equal(r.status,201);assert.equal((await call('/api/issues',payload)).value.code,r.value.code);
 const d=await dashboard(),issue=d.issues.find(i=>i.code===r.value.code);assert.ok(issue);assert.equal(d.issues.length,1);
 assert.equal((await fetch(origin+issue.photos[0].url)).status,401);assert.equal((await fetch(origin+issue.photos[0].url,{headers:{Cookie:cookie}})).status,200);
 assert.equal((await call('/api/admin/issues/'+issue.id,{status:'resolved',note:'Kết quả thử'},true)).status,409);
 assert.equal((await call('/api/admin/issues/'+issue.id,{status:'reviewing',note:'Đang đối chiếu'},true)).status,200);
 assert.equal((await call('/api/admin/issues/'+issue.id,{status:'resolved',note:''},true)).status,400);
 assert.equal((await call('/api/admin/issues/'+issue.id,{status:'resolved',note:'Đã đối chiếu hồ sơ trong kiểm thử'},true)).status,200);
 assert.equal((await call('/api/track',{code:r.value.code,phone:'0911111111'})).status,404);
 const track=await call('/api/track',{code:r.value.code,phone:'0900000000'});assert.equal(track.value.kind,'issue');assert.equal(track.value.status,'resolved');assert.equal(track.value.photos,undefined);assert.equal(track.value.phone,undefined);
});
test('box rental tracking omits transport, logout revokes session',async()=>{const r=await call('/api/bookings',{requestId:randomUUID(),service:'boxes',boxes:5,name:'Khách kiểm thử',phone:'0900000000',origin:'Điểm thử nghiệm A',destination:'Điểm thử nghiệm B',date:new Date(Date.now()+86400000).toISOString().slice(0,10),slot:'morning',consent:true});assert.equal(r.status,201);const track=await call('/api/track',{code:r.value.code,phone:'0900000000'});assert.ok(!track.value.steps.some(s=>s.status==='moving'));assert.equal((await call('/api/admin/logout',{},true)).status,200);assert.equal((await call('/api/admin/dashboard',undefined,true)).status,401);});
