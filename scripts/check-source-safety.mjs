import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
const files=execFileSync('git',['ls-files','-z'],{encoding:'utf8'}).split('\0').filter(Boolean);
const failures=[];
for(const file of files){
 if(/(^|\/)(\.runtime|work|_site|node_modules)(\/|$)/.test(file)||/^data\/(?!\.gitkeep$)/.test(file)||/(^|\/)\.env(?!\.example$)/.test(file)||/\.(db|db-shm|db-wal|pid|log)$/.test(file))failures.push(file+': private/generated file');
 if(/\.(png|jpg|jpeg|webp|woff2?|mp4|mp3|wav|glb)$/.test(file))continue;
 const text=readFileSync(file,'utf8');
 if(/(?:ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|(?<![A-Za-z0-9_-])sk-(?:proj-)?[A-Za-z0-9_-]{40,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----)/.test(text))failures.push(file+': possible live credential');
}
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log('Reviewed '+files.length+' tracked files; no private data directories or live credential patterns found.');
