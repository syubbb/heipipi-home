const assert=require('assert'),fs=require('fs'),vm=require('vm'),e=require('./room-engine.cjs')(19);
vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);e.pet={on:false};e.dropCarry=()=>{};
const tv=e.CatTV.create({actors:()=>e.actors,portrait:{complete:true,naturalWidth:1},geometry:()=>({x:400,bottom:200,right:700}),blocked:()=>false,path:(a,p)=>[p],clock:()=>e.clock.time,prepare(){},resume(a){a.state='wait';a.act=null;},random:()=>.5,eligible:()=>false});e.tvCats=tv;
tv.startAll();assert(tv.isGroupActive());
vm.runInContext(e.source.slice(e.source.indexOf('function interrupt(){'),e.source.indexOf('function randFloor(){')),e);
e.interrupt();assert(!tv.isGroupActive(),'Alternate player action must dissolve every remaining TV group member');
assert(e.actors.every(a=>!a.tvVisit),'No frozen seated or travelling viewer remains');tv.tick(.05);assert(e.actors.every(a=>!a.tvVisit),'No pending group member silently rejoins');
console.log('Player interruption dissolves the entire TV gathering and pending queue');
