const assert=require('assert'),make=require('./room-engine.cjs');
const e=make(3);for(const [i,a]of e.actors.entries())Object.assign(a,{x:[90,220,340,470,110][i],y:[460,650,680,760,780][i],state:'wait',path:[],time:0,goal:{x:70+i*20,y:380},walkGoal:null,facilityCare:null,trafficYield:null});e.startGather();
for(const a of e.actors){assert.deepEqual(a.goal,a.gatherSlot,'Shared traffic must use the new photo slot, never an old roaming goal');assert.deepEqual(a.walkGoal,a.gatherSlot);}
let done=false;const progress=e.actors.map(a=>({best:Math.hypot(a.x-a.gatherSlot.x,a.y-a.gatherSlot.y),elapsed:0,max:0}));
for(let tick=0;tick<1400;tick++){
 e.clock.time+=.05;const before=e.actors.map(a=>({x:a.x,y:a.y,walkTime:a.walkTime}));e.resolveTraffic();
 for(let i=0;i<5;i++){const a=e.actors[i];e.updateGather(a,.05);e.finishLocomotionTick(a,before[i],.05);const p=progress[i],d=Math.hypot(a.x-a.gatherSlot.x,a.y-a.gatherSlot.y);if(d<p.best-12){p.best=d;p.elapsed=0;}else if(a.state!=='gatherSit'){p.elapsed+=.05;p.max=Math.max(p.max,p.elapsed);}
  if(Math.hypot(a.x-a.gatherSlot.x,a.y-a.gatherSlot.y)>32)for(const b of e.actors)if(b!==a)assert(!e.pairPassing(a,b),'Detour around other cats instead of bypassing their bodies during travel');
 }
 if(e.actors.every(a=>a.state==='gatherSit')){done=true;break;}
}
assert(done,'All five reach their photo slots under real shared traffic');assert(Math.max(...progress.map(p=>p.max))<8,'No sustained no-progress loop: '+JSON.stringify(progress));
assert(e.actors.every(a=>!a.trafficYield),'No lingering yield command after assembly');
console.log('Photo gathering uses current destinations, safe detours and stable arrival under shared traffic');
