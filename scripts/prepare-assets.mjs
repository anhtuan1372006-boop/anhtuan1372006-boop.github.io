import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),three=path.join(root,'node_modules/three'),vendor=path.join(root,'public/vendor');
fs.mkdirSync(vendor,{recursive:true});
for(const name of ['three.module.js','three.core.js'])fs.copyFileSync(path.join(three,'build',name),path.join(vendor,name));
for(const name of ['GLTFLoader.js','DRACOLoader.js']){fs.mkdirSync(path.join(vendor,'loaders'),{recursive:true});fs.writeFileSync(path.join(vendor,'loaders',name),fs.readFileSync(path.join(three,'examples/jsm/loaders',name),'utf8').replaceAll("from 'three'","from '/vendor/three.module.js'"));}
fs.mkdirSync(path.join(vendor,'utils'),{recursive:true});fs.writeFileSync(path.join(vendor,'utils/BufferGeometryUtils.js'),fs.readFileSync(path.join(three,'examples/jsm/utils/BufferGeometryUtils.js'),'utf8').replaceAll("from 'three'","from '/vendor/three.module.js'"));
fs.cpSync(path.join(three,'examples/jsm/libs/draco/gltf'),path.join(vendor,'draco'),{recursive:true});
fs.copyFileSync(path.join(three,'LICENSE'),path.join(vendor,'THREE-LICENSE.txt'));
console.log('Prepared local Three.js and Draco assets.');
