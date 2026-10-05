// GitHub Pages hosts the UI; authenticated administration stays on the Node server.
function publicAPIBase(){
  if(typeof document==='undefined')return '';
  try{const config=JSON.parse(document.getElementById('site-config')?.textContent||'{}');
    if(!config.apiBase)return '';
    const url=new URL(config.apiBase);
    if(url.protocol!=='https:'&&!(url.protocol==='http:'&&['127.0.0.1','localhost'].includes(url.hostname)))return '';
    return url.origin;
  }catch{return '';}
}
export function apiAsset(value){return typeof value==='string'&&value.startsWith('/api/')?publicAPIBase()+value:value;}
export function installPublicAPIClient(){
  const origin=publicAPIBase();if(!origin||origin===location.origin)return;
  const nativeFetch=window.fetch.bind(window);
  window.fetch=(input,options={})=>{
    if(typeof input==='string'&&input.startsWith('/api/')){
      if(input.startsWith('/api/admin/'))return Promise.reject(new Error('Cổng vận hành chỉ mở tại máy chủ BOXANH.'));
      return nativeFetch(origin+input,{...options,credentials:'omit'}).catch(error=>{
        if(error.name==='AbortError')throw error;
        throw new Error('Chưa kết nối được bộ phận tiếp nhận. Thông tin vẫn được giữ trên biểu mẫu; bạn có thể thử lại hoặc gọi BOXANH.');
      });
    }
    return nativeFetch(input,options);
  };
}
