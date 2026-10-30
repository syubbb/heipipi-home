const assert=require('assert'),roomEngine=require('./room-engine.cjs'),e=roomEngine(24),a=e.newActors[0];
// The replacement 115-frame clip keeps stepping during head turns. Deliberate sitting/resting
// remains stationary; only blocked footfalls freeze the source clock.
function prepare(frame=0){
 e.stopGather();for(const other of e.actors)Object.assign(other,{x:60,y:790,path:[],trafficYield:null,gatherSlot:null});
 Object.assign(a,{x:100,y:390,walkTime:frame/a.animation.fps,time:0,state:'walk',goal:{x:450,y:390},path:[{x:450,y:390}],speed:33,wait:0,repath:1,trafficYield:null,gatherSlot:null,restDue:1e9,peeDue:1e9,scratchDue:1e9});
}
function setup(mode,frame){
 prepare(frame);
 if(mode==='gather'){e.startGather();Object.assign(a,{walkTime:frame/a.animation.fps,gatherSlot:{x:450,y:390},path:[{x:450,y:390}],gatherRepath:1});}
 if(mode==='yield')a.trafficYield={blocker:e.cat,corridor:{x:500,y:390},path:[{x:450,y:390}],target:{x:450,y:390},repath:1,holdUntil:99};
}
const modes={roam:()=>e.updateWalkingNpc(a,.05),gather:()=>e.updateGather(a,.05),yield:()=>e.updateTrafficYield(a,.05)};
for(const [mode,run]of Object.entries(modes)){
 for(let frame=0;frame<a.animation.count;frame++){
  setup(mode,frame);const before=a.walkTime;run();assert(a.x>100,mode+': current clip keeps stepping at frame '+frame);assert(a.walkTime>before);assert(Math.abs((a.x-100)/(a.walkTime-before)-84)<.001,'Source stride stays matched');
 }
 setup(mode,27);Object.assign(e.npc,{x:170,y:390});const before=a.walkTime;run();assert.equal(a.x,100,mode+': real nearby body prevents movement');assert.equal(a.walkTime,before,mode+': collision freezes walking clock');
}
for(const state of ['wait','floorRest']){prepare(27);Object.assign(a,{state,timer:2,restTime:0});const before=a.walkTime;e.updateWalkingNpc(a,.05);assert.equal(a.x,100);assert.equal(a.walkTime,before,'Natural '+state+' does not slide');}
console.log('Current head-turn frames keep footfalls matched; real collision, sitting and floor rests stay still');
