import {spawn} from 'node:child_process';
import {cp,readFile,writeFile,mkdir,rm,mkdtemp} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'_site');
const work=path.join(root,'work');await mkdir(work,{recursive:true});
const data=await mkdtemp(path.join(work,'pages-data-'));
const apiBase=(process.env.BOXANH_API_BASE||'').trim();
if(apiBase&&!/^https:\/\/[a-z0-9.-]+(?::\d+)?\/?$/i.test(apiBase))throw new Error('BOXANH_API_BASE must be a trusted HTTPS origin.');
const port=47839,origin='http://127.0.0.1:'+port;
let readyResolve;const ready=new Promise(resolve=>readyResolve=resolve);
const child=spawn(process.execPath,['server.mjs'],{cwd:root,env:{...process.env,HOST:'127.0.0.1',PORT:String(port),DATA_DIR:data,PUBLIC_PREVIEW:'1'}});
child.stdout.on('data',data=>{if(data.toString().includes(String(port)))readyResolve();});
child.stderr.on('data',data=>{const text=data.toString();if(!text.includes('ExperimentalWarning'))process.stderr.write(text);});
child.once('exit',code=>{if(code)readyResolve();});
const routes=['/','/tro-ly-ai','/chuyen-tro','/don-phong','/ban-giao','/hop-tai-su-dung','/song-xanh','/huong-dan','/uoc-tinh','/dich-vu','/gui-do','/tra-cuu','/ve-boxanh','/chinh-sach','/ho-tro','/hop-minh-hoa','/do-cu','/dat-lich'];
try{
  await ready;
  if(path.resolve(output)!==path.join(root,'_site'))throw new Error('Unexpected export target.');
  await rm(output,{recursive:true,force:true});
  await cp(path.join(root,'public'),output,{recursive:true});
  // Keep the SSR markup and its client bundle in the same release on cached browsers.
  const digest=source=>createHash('sha256').update(source).digest('hex').slice(0,16);
  const portalVersion=digest(await readFile(path.join(output,'portal/app.js')));
  const styleVersion=digest(await readFile(path.join(output,'portal/portal.css')));
  const appSource=(await readFile(path.join(output,'app.js'),'utf8')).replace("from '/portal/app.js'","from '/portal/app.js?v="+portalVersion+"'");
  const appVersion=digest(appSource);
  await writeFile(path.join(output,'app.js'),appSource);
  for(const route of routes){
    const response=await fetch(origin+route);if(!response.ok)throw new Error('Cannot export '+route);
    let html=await response.text();
    html=html.replaceAll('href="/portal/app.js"','href="/portal/app.js?v='+portalVersion+'"')
      .replaceAll('href="/portal/portal.css"','href="/portal/portal.css?v='+styleVersion+'"')
      .replaceAll('href="/app.js"','href="/app.js?v='+appVersion+'"')
      .replaceAll('src="/app.js"','src="/app.js?v='+appVersion+'"');
    html=html.replace(/(<script type="application\/json" id="site-config">)([\s\S]*?)(<\/script>)/,(_,open,json,close)=>open+JSON.stringify({...JSON.parse(json),apiBase,publicPreview:true}).replaceAll('<','\\u003c')+close);
    const target=route==='/'?output:path.join(output,route.slice(1));await mkdir(target,{recursive:true});
    await writeFile(path.join(target,'index.html'),html);
  }
  await writeFile(path.join(output,'404.html'),await readFile(path.join(output,'index.html')));
  await writeFile(path.join(output,'.nojekyll'),'');
  console.log('Exported '+routes.length+' public pages. Private records and admin UI excluded.');
}finally{
  child.kill();await new Promise(resolve=>child.once('exit',resolve));
  if(path.resolve(data).startsWith(path.resolve(work)+path.sep))await rm(data,{recursive:true,force:true});
}
