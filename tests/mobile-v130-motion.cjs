const assert=require('assert'),fs=require('fs'),vm=require('vm'),make=require('./room-engine.cjs');
const source=fs.readFileSync('dist/room.js','utf8');
const drawWalk=source.slice(source.indexOf('function drawWalk('),source.indexOf('function drawCat('));
assert(drawWalk.includes('WALK_FIXED_SCALE'),'Walk sprites use one fixed scale');
assert(!/scale\([^)]*\by\b/.test(drawWalk),'Walk scale does not depend on floor depth');
const hop=source.slice(source.indexOf('function hopTo('),source.indexOf('function enterBox('));
assert(!hop.includes('scale'),'A hop changes position, not sprite scale');
const e=make(3);
e.H=1220;e.FT=360;e.EX0=-150;e.EW=900;e.document={documentElement:{getAttribute:()=>'phone'}};
e.cv={addEventListener(){}};e.setTimeout=()=>1;e.clearTimeout=()=>{};e.releaseGestureInteractions=()=>{};e.ptr=null;e.pet={on:false};
vm.runInContext(fs.readFileSync('dist/room-layout.js','utf8'),e);e.applyHomeLayout();
vm.runInContext('this.plan=roomPlan;this.GX0=GX0;this.GX1=GX1;this.GY0=GY0;this.GY1=GY1;',e);
vm.runInContext(e.source.slice(e.source.indexOf('/* Lift controls */'),e.source.indexOf('/* End lift controls */')),e);
const actors=e.actors;
for(const [i,a] of actors.entries())Object.assign(a,{x:[-40,80,200,400,520][i],y:[500,640,720,680,760][i],time:0,timer:.1,state:'wait',path:[],trafficYield:null,facilityCare:null,gatherSlot:null,walkTime:0});
e.cat.state='idle';
const dt=.05,traveled=actors.map(()=>0),still=actors.map(()=>0),maxStill=actors.map(()=>0);
for(let t=0;t<20;t+=dt){
 const before=actors.map(a=>({x:a.x,y:a.y}));
 e.clock.time+=dt;e.updatePuddles(dt);e.resolveTraffic();e.cat.time+=dt;
 if(!e.updateGather(e.cat,dt)&&e.cat.facilityCare)e.advanceFacility(e.cat,dt);
 e.updateYe(dt);e.updateRabbit(dt);for(const a of e.newActors)e.updateWalkingNpc(a,dt);
 for(const [i,a] of actors.entries()){
  const distance=Math.hypot(a.x-before[i].x,a.y-before[i].y);
  e.finishLocomotionTick(a,before[i],dt);traveled[i]+=distance;
  if(a.state==='walk'&&!a.trafficYield&&!a.facilityCare&&!a.gatherSlot&&distance<.01)still[i]+=dt;else still[i]=0;
  maxStill[i]=Math.max(maxStill[i],still[i]);
  assert(a.x>=e.GX0-1&&a.x<=e.GX1+1&&a.y>=e.GY0-1&&a.y<=e.GY1+1,'Inside the mobile floor');
  const bed=e.plan.bed,step=e.plan.petStep;
  assert(!(a.x>bed.x&&a.x<bed.x+bed.w&&a.y>bed.y&&a.y<bed.front),'Outside the bed keep-out');
  assert(!(a.x>step.x&&a.x<step.x+step.w&&a.y>step.y&&a.y<step.front),'Outside the step keep-out');
  if(distance>0&&a.state==='walk'&&!a.facilityCare&&!a.gatherSlot)assert(distance<=Math.max(125,a.speed||0)*dt+1,'Steps stay continuous');
 }
}
assert(traveled.slice(1).every(d=>d>400),'NPCs keep moving on the v130 floor: '+JSON.stringify(traveled.map(Math.round)));
assert(maxStill.every(d=>d<7),'No roaming freeze: '+JSON.stringify(maxStill));
console.log('Mobile sprites keep a fixed scale, and a 20s v130 roam stays inside the keep-out zones');
