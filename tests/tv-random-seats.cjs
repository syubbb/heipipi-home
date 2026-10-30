const assert=require('assert'),fs=require('fs'),vm=require('vm');let seed=81;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
const e={Math,Image:class{}};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);
const actors=Array.from({length:5},(_,i)=>({id:'cat'+i,x:i*110,y:800,state:'wait',path:[]}));
const seats=Array.from({length:8},(_,i)=>({x:i*120,y:500+Math.floor(i/3)*150,slot:i}));
const tv=e.CatTV.create({actors:()=>actors,portrait:{complete:true,naturalWidth:1},geometry:()=>({x:100,bottom:200,right:700,seats}),blocked:()=>false,path:(a,p)=>[p],clock:()=>0,random,prepare(){},resume(a){a.state='wait';}});
const arrangements=new Set();for(let t=0;t<12;t++){tv.cancelAll();tv.startAll();assert.equal(new Set(actors.map(a=>a.tvVisit.slot)).size,5);arrangements.add(actors.map(a=>a.tvVisit.slot).join(','));}
assert(arrangements.size>=6,'Repeated TV gatherings must have varied cat-to-seat assignments');
assert(actors.every(a=>seats.some(p=>p.x===a.tvVisit.target.x&&p.y===a.tvVisit.target.y)),'New room reserved TV coordinates are authoritative');
console.log('Randomized TV seat assignments retain exclusive real layout seats');
