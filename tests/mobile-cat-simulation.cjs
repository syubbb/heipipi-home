const assert=require('assert'),vm=require('vm'),roomEngine=require('./room-engine.cjs');
const results=[];
for(const [seed,dt]of [[3,1/60],[47,1/60],[137,.05]].filter(([seed])=>!process.argv[2]||seed===+process.argv[2])){
 const e=roomEngine(seed),actors=e.actors;
 Object.assign(e,{cv:{addEventListener(){}},setTimeout(){return 1;},clearTimeout(){},releaseGestureInteractions(){},ptr:null,pet:{on:false}});
 vm.runInContext(e.source.slice(e.source.indexOf('/* Lift controls */'),e.source.indexOf('/* End lift controls */')),e);
 for(const [i,a]of actors.entries())Object.assign(a,{x:[110,230,350,460,300][i],y:i===4?425:390,time:0,timer:.1,state:'wait',path:[],trafficYield:null,facilityCare:null,gatherSlot:null,walkTime:0,wait:0});
 e.cat.state='idle';let searches=0;
 for(const name of ['yeFindPath','findPath']){const fn=e[name];e[name]=(...args)=>{searches++;return fn(...args);};}
 const traveled=actors.map(()=>0),still=actors.map(()=>0),maxStill=actors.map(()=>0),seen=actors.map(()=>new Set());
 const destinations=[{x:480,y:390},{x:100,y:610},{x:420,y:780},{x:90,y:390}];let command=0,arrivals=0,gathers=0,lifts=0,meal=false,mealFinished=false,nextCommand=0,gatherStarted=-1,gatherHold=-1,nextGather=40;
 const ticks=Math.round(180/dt);
 for(let tick=0;tick<ticks;tick++){
  const time=tick*dt;
  if(time>=nextGather&&!e.gatherState.active){e.startGather();gatherStarted=time;gatherHold=-1;nextGather+=80;}
  if(e.gatherState.active){
   if(actors.every(a=>a.state==='gatherSit')){if(gatherHold<0){gathers++;gatherHold=time;}if(time-gatherHold>3){e.stopGather();nextCommand=time;}}
   else assert(time-gatherStarted<25,'All five must finish gathering, seed '+seed+': '+JSON.stringify(actors.map(a=>({id:a.id,x:a.x,y:a.y,state:a.state,path:a.path,slot:a.gatherSlot,care:a.facilityCare,traffic:a.trafficYield?.target}))));
  }else if(time>90&&!lifts){
   for(const a of actors){e.beginLift(a,{x:a.x,y:a.y-60},1);assert.equal(a.state,'lifted');e.moveLift({x:300,y:460});e.endLift();assert(!e.yeBlocked(a.x,a.y,true,a),'Safe mobile lift/drop');lifts++;}nextCommand=time;
  }else if(time>145&&!meal){
   meal=e.beginFacility(e.cat,'eat');if(meal)nextCommand=time+35;
  }else if(time>=nextCommand&&!e.cat.facilityCare){
   const target=destinations[command++%destinations.length];Object.assign(e.cat,{state:'walk',pose:'walk',walkGoal:target,path:e.findPath(e.cat.x,e.cat.y,target.x,target.y),speed:100,then:null});nextCommand=time+15;
  }
  const before=actors.map(a=>({x:a.x,y:a.y,walkTime:a.walkTime}));e.clock.time+=dt;e.updatePuddles(dt);e.resolveTraffic();
  e.cat.time+=dt;
  if(!e.updateGather(e.cat,dt)){
   if(e.cat.facilityCare)e.advanceFacility(e.cat,dt);
   else if(e.cat.state==='walk'&&e.followPath(dt)){e.cat.state='idle';e.cat.pose='sit';arrivals++;}
  }
  e.updateYe(dt);e.updateRabbit(dt);for(const a of e.newActors)e.updateWalkingNpc(a,dt);
  for(const [i,a]of actors.entries()){
   const distance=Math.hypot(a.x-before[i].x,a.y-before[i].y);e.finishLocomotionTick(a,before[i],dt);traveled[i]+=distance;seen[i].add(a.state);
   if(a.state==='walk'&&!a.trafficYield&&!a.facilityCare&&!a.gatherSlot&&distance<.01)still[i]+=dt;else still[i]=0;maxStill[i]=Math.max(maxStill[i],still[i]);
   assert(Number.isFinite(a.x)&&Number.isFinite(a.y));assert(a.x>=42&&a.x<=558&&a.y>=238&&a.y<=806,'Room bounds, seed '+seed);
   if(distance>0&&!a.facilityCare&&!a.gatherSlot&&a.state==='walk')assert(distance<=Math.max(125,a.speed||0)*dt+1,'Movement is continuous, seed '+seed);
  }
  if(meal&&!e.cat.facilityCare&&(e.cat.facilityHistory?.eat||0)>0)mealFinished=true;
 }
 assert(traveled.every(d=>d>900),'All five keep exploring, seed '+seed+': '+JSON.stringify(traveled));
 assert(maxStill.every(d=>d<7),'No indefinite roaming freeze, seed '+seed+': '+JSON.stringify(maxStill));
 assert(arrivals>=5,'Player commands finish, seed '+seed+': '+arrivals);
 assert.equal(gathers,2);assert.equal(lifts,5);assert(meal&&mealFinished,'Commanded meal completes, seed '+seed+': '+JSON.stringify({meal,history:e.cat.facilityHistory,state:e.cat.state,care:e.cat.facilityCare}));
 assert(searches<180*45,'Mobile navigation work remains bounded: '+searches);
 results.push({seed,seconds:180,hz:Math.round(1/dt),arrivals,gathers,lifts,searches,travel:traveled.map(Math.round),maxRoamStill:maxStill.map(v=>+v.toFixed(2)),states:seen.map(s=>[...s])});
}
console.log(JSON.stringify(results,null,2));
