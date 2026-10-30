const assert=require('assert'),vm=require('vm'),fs=require('fs'),make=require('./room-engine.cjs');
const e=make(3),[a,b]=e.actors;e.allowTrafficPass(a,b);assert(e.pairPassing(a,b));e.startGather();
assert(!e.pairPassing(a,b),'Starting photo assembly must revoke an old courtesy bypass');assert.equal(e.npcObstacles(a).length,4);e.stopGather();assert(!e.pairPassing(a,b),'Old bypass must not return after cancelling assembly');
vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);e.allowTrafficPass(a,b);assert(e.pairPassing(a,b));
const tv=e.CatTV.create({actors:()=>e.actors,portrait:{complete:true,naturalWidth:2172},geometry:()=>({x:650,bottom:200,right:708}),blocked:()=>false,path:(a,p)=>[{...p}],clock:()=>e.clock.time,random:()=>.5,eligible:()=>false,prepare:actor=>e.clearActorTrafficPasses(actor),resume:actor=>{actor.state='wait';}});e.tvCats=tv;tv.startAll();assert(!e.pairPassing(a,b),'TV assembly revokes old courtesy bypasses too');
console.log('Both assembly modes remove legacy courtesy bypasses and retain all actor bodies');
