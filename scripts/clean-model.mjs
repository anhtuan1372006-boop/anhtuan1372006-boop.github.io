import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const file=path.join(root,'public/assets/crate.glb'),source=fs.readFileSync(file);
const jsonLength=source.readUInt32LE(12),json=JSON.parse(source.subarray(20,20+jsonLength).toString().trim());
// Keep the licensed scanned geometry; replace the original orange textures with a clean brand material.
json.materials=[{name:'BOXANH green',pbrMetallicRoughness:{baseColorFactor:[.2,.5,.18,1],metallicFactor:0,roughnessFactor:.5}}];
delete json.images;delete json.textures;delete json.samplers;
for(const key of ['extensionsUsed','extensionsRequired'])if(json[key])json[key]=json[key].filter(x=>x!=='EXT_texture_webp');
const raw=Buffer.from(JSON.stringify(json)),padded=Buffer.alloc(Math.ceil(raw.length/4)*4,32);raw.copy(padded);
const rest=source.subarray(20+jsonLength),out=Buffer.alloc(20+padded.length+rest.length);out.writeUInt32LE(0x46546c67,0);out.writeUInt32LE(2,4);out.writeUInt32LE(out.length,8);out.writeUInt32LE(padded.length,12);out.writeUInt32LE(0x4e4f534a,16);padded.copy(out,20);rest.copy(out,20+padded.length);fs.writeFileSync(file,out);
console.log('Prepared green model without unused photo textures.');
