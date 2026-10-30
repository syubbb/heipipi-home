const assert=require('assert'),fs=require('fs'),vm=require('vm'),make=require('./room-engine.cjs');
const e=make(25);vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);let urgent=false;
const actor=e.npc;Object.assign(actor,{x:420,y:480,state:'wait',facilityCare:null,path:[],time:0});
const tv=e.CatTV.create({actors:()=>[actor],portrait:{complete:true,naturalWidth:2172},geometry:()=>({x:650,bottom:200,right:708}),blocked:()=>false,path:(a,p)=>[{...p}],canStep:()=>true,clock:()=>e.clock.time,random:()=>.5,prepare(){},resume(a){a.state='wait';},eligible:()=>false,excluded:a=>!!a.facilityCare,urgent:()=>urgent});e.tvCats=tv;
tv.startAll();urgent=true;tv.tick(.05);assert(tv.isGroupActive(),'Urgent viewer has a queued return');
assert(e.beginFacility(actor,'drink'));assert(tv.isGroupActive(),'Actual beginFacility must preserve the queued automatic return');
e.cancelFacility(actor);urgent=false;tv.tick(.05);assert(tv.has(actor),'Cat rejoins after safe care completion');
tv.cancel(actor);tv.tick(.05);assert(!tv.has(actor)&&!tv.isGroupActive(),'Explicit cancel still removes queued return');
console.log('Automatic care preserves manual TV group intent, while manual cancellation stays final');
