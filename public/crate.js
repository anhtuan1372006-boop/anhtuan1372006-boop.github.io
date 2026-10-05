import * as THREE from '/vendor/three.module.js';
import { GLTFLoader } from '/vendor/loaders/GLTFLoader.js';
import { DRACOLoader } from '/vendor/loaders/DRACOLoader.js';

// Loaded on request; animation sleeps while paused, off screen or scrolling.
export async function initCrate(host,signal,reduce) {
 let renderer;
 try {renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true,powerPreference:'low-power'});}
 catch {throw new Error('Trình duyệt chưa hỗ trợ mô hình 3D.');}
 renderer.setPixelRatio(Math.min(devicePixelRatio,matchMedia('(pointer:coarse)').matches?1:1.35));
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.5;
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(36,1,.01,100);
 camera.position.set(3.9,2.8,5.2);camera.lookAt(0,0,0);
 scene.add(new THREE.HemisphereLight(0xeaffdc,0x123e25,3.2));
 const key=new THREE.DirectionalLight(0xffffff,5);key.position.set(3,6,4);scene.add(key);
 const rim=new THREE.DirectionalLight(0xd6f59a,5);rim.position.set(-4,2,-3);scene.add(rim);
 const draco=new DRACOLoader();draco.setDecoderPath('/vendor/draco/');draco.setWorkerLimit(1);
 const loader=new GLTFLoader();loader.setDRACOLoader(draco);
 const resources=[];
 function disposeResources(){resources.forEach(r=>r.dispose());draco.dispose();renderer.dispose();renderer.forceContextLoss();}
 let gltf;try {gltf=await loader.loadAsync('/assets/crate.glb');}catch {disposeResources();throw new Error('Chưa tải được mô hình. Bạn có thể thử lại.');}
 const object=gltf.scene;
 object.traverse(node=>{if(!node.isMesh)return;resources.push(node.geometry);const old=Array.isArray(node.material)?node.material:[node.material];old.forEach(m=>{for(const v of Object.values(m))if(v?.isTexture)resources.push(v);resources.push(m);});node.material=new THREE.MeshStandardMaterial({color:0x67a33e,roughness:.44,metalness:.06});resources.push(node.material);});
 if(signal.aborted){disposeResources();return ()=>{};}
 const bounds=new THREE.Box3().setFromObject(object),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3()),scale=2.9/Math.max(size.x,size.y,size.z);
 object.position.sub(center);object.scale.setScalar(scale);object.position.multiplyScalar(scale);
 const group=new THREE.Group();group.add(object);group.rotation.set(.05,-.45,.02);scene.add(group);
 const canvas=renderer.domElement;canvas.tabIndex=0;canvas.setAttribute('aria-label','Hộp 3D: kéo chuột hoặc dùng các phím mũi tên để xoay');host.replaceChildren(canvas);
 let paused=reduce.matches,visible=false,dragging=false,scrolling=false,lastX=0,lastY=0,raf=0,paintRaf=0,lastFrame=0,resumeTimer=0,disposed=false;
 const rotate=document.querySelector('#model-rotate');
 function label(){rotate.disabled=reduce.matches;rotate.textContent=reduce.matches?'Xoay thủ công':paused?'Tự động xoay':'Dừng xoay';rotate.setAttribute('aria-pressed',String(!paused&&!reduce.matches));}
 function mayAnimate(){return !disposed&&!signal.aborted&&!paused&&!reduce.matches&&visible&&!document.hidden&&!scrolling&&!dragging;}
 function render(){if(!disposed&&!signal.aborted)renderer.render(scene,camera);}
 function frame(t){raf=0;if(!mayAnimate())return;if(!lastFrame||t-lastFrame>=1000/30-1){const dt=lastFrame?Math.min((t-lastFrame)/1000,.05):0;group.rotation.y+=dt*.19;lastFrame=t;render();}raf=requestAnimationFrame(frame);}
 function run(){cancelAnimationFrame(raf);raf=0;lastFrame=0;if(mayAnimate())raf=requestAnimationFrame(frame);}
 function requestDraw(){if(paintRaf||disposed)return;paintRaf=requestAnimationFrame(()=>{paintRaf=0;render();});}
 const resize=new ResizeObserver(()=>{if(disposed)return;const w=host.clientWidth,h=host.clientHeight;if(w&&h){renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();requestDraw();}});resize.observe(host);
 const view=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting&&entries[0].intersectionRatio>.15;run();},{threshold:[0,.15]});view.observe(host);
 document.addEventListener('visibilitychange',run,{signal});
 addEventListener('scroll',()=>{scrolling=true;run();clearTimeout(resumeTimer);resumeTimer=setTimeout(()=>{scrolling=false;run();},180);},{passive:true,signal});
 reduce.addEventListener('change',()=>{if(reduce.matches)paused=true;label();run();},{signal});
 rotate.addEventListener('click',()=>{paused=!paused;label();run();},{signal});
 document.querySelector('#model-reset').addEventListener('click',()=>{group.rotation.set(.05,-.45,.02);requestDraw();},{signal});
 canvas.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;dragging=true;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId);run();},{signal});
 canvas.addEventListener('pointermove',e=>{if(!dragging)return;group.rotation.y+=(e.clientX-lastX)*.012;group.rotation.x=THREE.MathUtils.clamp(group.rotation.x+(e.clientY-lastY)*.004,-.65,.65);lastX=e.clientX;lastY=e.clientY;requestDraw();},{signal});
 for(const event of ['pointerup','pointercancel'])canvas.addEventListener(event,()=>{dragging=false;run();},{signal});
 canvas.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();group.rotation.y+=(e.key==='ArrowLeft'?-.18:e.key==='ArrowRight'?.18:0);group.rotation.x=THREE.MathUtils.clamp(group.rotation.x+(e.key==='ArrowUp'?-.1:e.key==='ArrowDown'?.1:0),-.65,.65);requestDraw();},{signal});
 document.querySelectorAll('[data-model-turn]').forEach(button=>button.addEventListener('click',()=>{group.rotation.y+=button.dataset.modelTurn==='left'?-.3:.3;requestDraw();},{signal}));
 label();render();run();
 return ()=>{disposed=true;clearTimeout(resumeTimer);cancelAnimationFrame(raf);cancelAnimationFrame(paintRaf);resize.disconnect();view.disconnect();disposeResources();};
}
