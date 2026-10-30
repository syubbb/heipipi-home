const assert=require('assert'),fs=require('fs'),vm=require('vm'),make=require('./room-engine.cjs');
for(const desktop of [false,true])for(const seed of [5,31,84,109]){
 const e=make(seed);e.H=1220;e.FT=360;e.EX0=desktop?-800:-150;e.EW=desktop?2200:900;e.document={documentElement:{getAttribute:()=>desktop?'desktop':'phone'}};
 vm.runInContext(fs.readFileSync('dist/room-layout.js','utf8'),e);e.applyHomeLayout();vm.runInContext('this.plan=roomPlan;',e);
 for(const [i,a]of e.actors.entries())Object.assign(a,{x:e.plan.mainAisle.x+(i%2?80:-80),y:870+i*55,state:'wait',path:[],time:0,facilityCare:null,gatherSlot:null,trafficYield:null});
 vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);
 const tv=e.CatTV.create({actors:()=>e.actors,portrait:{complete:true,naturalWidth:1},geometry:()=>({x:e.plan.television.screen[0][0]+100,bottom:e.plan.television.bottom,seats:e.plan.tvSeats}),random:e.Math.random,clock:()=>e.clock.time,blocked:(p,a)=>e.yeBlocked(p.x,p.y,false,a),path:(a,p)=>e.yeFindPath(a.x,a.y,p.x,p.y,a),canStep:(a,p)=>e.yeCanStep(a,p,a)&&e.yeLineClear(a,p,a),yieldTick:(a,dt)=>e.updateTrafficYield(a,dt),eligible:()=>false,prepare(a){a.path=[];},resume(a){a.state='wait';a.act=null;}});e.tvCats=tv;tv.startAll();
 let done=false;for(let tick=0;tick<1800;tick++){
  e.clock.time+=.05;e.resolveTraffic();tv.tick(.05);
  for(let i=0;i<e.actors.length;i++)for(let j=0;j<i;j++)assert(e.pairDistance(e.actors[i],e.actors[j])>=1-1e-5,`Solid cats overlap ${desktop}/${seed}/${tick}`);
  if(e.actors.every(a=>a.state==='watchTV')){done=true;break;}
 }
 assert(e.actors.filter(a=>a.tvVisit).every(a=>a.tvVisit.slot<5),'Manual cinema assembly stays in the two-plus-three seats');
 assert(done,`All five reach random TV seats with physical yielding ${desktop}/${seed}: ${e.actors.map(a=>(a.id||'black/ye')+':'+a.state+':'+Math.round(a.x)+','+Math.round(a.y)).join(' ')}`);
}
console.log('Eight seeded real desktop/phone TV gatherings finish with random seats, yielding and no body crossings');
