const assert=require('assert'),make=require('./room-engine.cjs');
for(const key of ['npc','bunny','socks','dongdong']){
 const e=make(25),actor=key==='socks'||key==='dongdong'?e.newActors.find(a=>a.id===key):e[key];e.tvCats={has:a=>a===actor};
 for(const a of e.actors)Object.assign(a,{x:600,y:790,state:'wait',path:[],facilityCare:null,trafficYield:null});
 const target={x:250,y:470};Object.assign(actor,{x:200,y:470,state:'yield',walkTime:0,trafficYield:{blocker:e.cat,corridor:target,target,path:[target],repath:1,holdUntil:100}});
 e.updateTrafficYield(actor,.05);const speed=key==='socks'?38:55,denominator=key==='npc'?62:key==='bunny'?110:key==='socks'?84:80;
 assert(Math.abs(actor.x-200-speed*.05)<1e-6,'TV yield preserves slow speed for '+key);assert(Math.abs(actor.walkTime-.05*speed/denominator)<1e-6,'TV yield uses native gait for '+key);
}
console.log('Actual TV traffic-yield steps preserve Socks speed cap and each native gait clock');
