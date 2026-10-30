const assert=require('assert'),roomEngine=require('./room-engine.cjs');

// A nearly tangent route past the meal station must be as safe at .5px as at 3px samples.
{
 const e=roomEngine(5),a=e.npc;for(const other of e.actors)Object.assign(other,{x:60,y:790,path:[],trafficYield:null});
 Object.assign(a,{x:100,y:724.001});const target={x:250,y:724.001};
 assert(!e.yeLineClear(a,target,a),'Visibility must reject a shallow food-bowl tangent');
 const route=e.yeFindPath(a.x,a.y,target.x,target.y,a);assert(route.length,'The bowl still has a safe passing route');
 let point={x:a.x,y:a.y};for(const to of route){let d=Math.hypot(to.x-point.x,to.y-point.y);while(d>.001){const step=Math.min(d,.5),next={x:point.x+(to.x-point.x)/d*step,y:point.y+(to.y-point.y)/d*step};assert(e.yeCanStep(point,next,a),'Every slow footstep clears the basin');point=next;d=Math.hypot(to.x-point.x,to.y-point.y);}}
 console.log('Exact basin tangents remain traversable at slow footstep sizes');
}

// A 3px visibility sample used to jump a toast corner that a slow real footstep then hit forever.
{
 const e=roomEngine(5),a=e.newActors[0];for(const other of e.actors)Object.assign(other,{x:60,y:790,path:[],trafficYield:null});
 Object.assign(a,{x:188.59272486435066,y:487.40727513564934});
 assert(!e.yeLineClear(a,{x:198,y:478},a),'Visibility must reject even a short crossing of the toast corner');
 const route=e.yeFindPath(a.x,a.y,293.215625,447,a);assert(route.length,'A safe route around the corner still exists');
 let point={x:a.x,y:a.y};for(const target of route){let remaining=Math.hypot(target.x-point.x,target.y-point.y);while(remaining>.001){const step=Math.min(remaining,.55),next={x:point.x+(target.x-point.x)/remaining*step,y:point.y+(target.y-point.y)/remaining*step};assert(e.yeCanStep(point,next,a),'Route is traversable at a slow mobile footstep');point=next;remaining=Math.hypot(target.x-point.x,target.y-point.y);}}
 console.log('Exact swept corners prevent slow-cat route deadlocks');
}

// Open-floor player commands should take the same cheap direct route as the companions.
{
 const e=roomEngine(2);for(const a of e.actors)Object.assign(a,{x:100,y:790,path:[],trafficYield:null});
 Object.assign(e.cat,{x:100,y:450});let probes=0;const blocked=e.catBlocked;e.catBlocked=(...args)=>{probes++;return blocked(...args);};
 const route=e.findPath(100,450,450,450);assert.equal(route.length,1);assert.equal(route[0].x,450);assert.equal(route[0].y,450);
 assert(probes<20,'Clear player route should not scan the full floor grid; probes='+probes);
 console.log('Open-floor player route avoids unnecessary grid construction');
}

// A trapped actor must wait between route searches, instead of allocating a new grid each frame.
{
 const e=roomEngine(3),a=e.newActors[0];
 Object.assign(a,{x:300,y:450,state:'walk',goal:{x:500,y:450},path:[],wait:0,repath:0,trafficYield:null,gatherSlot:null});
 for(const [i,other]of e.actors.filter(o=>o!==a).entries())Object.assign(other,[{x:225,y:450},{x:375,y:450},{x:300,y:426},{x:300,y:474}][i]);
 const route=e.yeFindPath(a.x,a.y,a.goal.x,a.goal.y,a);assert.equal(route.length,0,'Fixture is physically trapped by four real bodies');
 let calls=0;const find=e.yeFindPath;e.yeFindPath=(...args)=>{calls++;return find(...args);};
 for(let i=0;i<60;i++){e.clock.time+=1/60;e.updateWalkingNpc(a,1/60);}
 assert(calls<=4,'One second of a temporarily blocked path must not rebuild a grid every frame; searches='+calls);
 console.log('Blocked mobile roaming honors route-search cooldown: '+calls+' searches/sec');
}

for(const mode of ['facility','gather']){
 const e=roomEngine(8),a=mode==='facility'?e.npc:e.newActors[0];
 if(mode==='facility')assert(e.beginFacility(a,'eat'));else e.startGather();
 Object.assign(a,{x:300,y:450,path:[]});
 for(const [i,other]of e.actors.filter(o=>o!==a).entries())Object.assign(other,[{x:225,y:450},{x:375,y:450},{x:300,y:426},{x:300,y:474}][i]);
 if(mode==='facility')Object.assign(a.facilityCare,{path:[],repath:0});else Object.assign(a,{gatherSlot:{x:500,y:450},gatherTime:0,gatherRepath:0});
 let calls=0;const find=e.yeFindPath;e.yeFindPath=(...args)=>{calls++;return find(...args);};
 for(let i=0;i<18;i++){e.clock.time+=1/60;if(mode==='facility')e.advanceFacility(a,1/60);else e.updateGather(a,1/60);}
 assert(calls<=2,mode+': transient blockage honors route cooldown; searches='+calls);
 console.log(mode+': blocked route-search cooldown passed');
}

// A far waypoint is not a reason to wake a resting cat now; traffic considers the approaching body.
{
 const e=roomEngine(4);for(const a of e.actors)Object.assign(a,{x:90,y:790,state:'wait',path:[],trafficYield:null});
 Object.assign(e.cat,{x:95,y:390,state:'walk',walkGoal:{x:500,y:390},path:[{x:500,y:390}]});
 Object.assign(e.newActors[0],{x:480,y:390,state:'floorRest',timer:8});
 e.resolveTraffic();assert.equal(e.newActors[0].trafficYield,null,'Distant resting cat is outside immediate passing corridor');
 e.cat.x=375;e.resolveTraffic();assert(e.newActors[0].trafficYield,'Approaching player command gets priority');
 console.log('Traffic preserves distant natural rests and yields to nearby player commands');
}
