const assert=require('assert'),vm=require('vm'),make=require('./home-engine.js');
for(const desktop of [false,true]){
 for(const kind of ['eat','drink'])for(const key of ['cat','npc']){
  const e=make(desktop),a=e[key];Object.assign(a,{x:e.plan.mainAisle.x,y:850});assert(e.beginFacility(a,kind));
  for(let i=0;i<1500&&a.facilityCare?.phase!=='use';i++){e.clock.time+=.05;e.advanceFacility(a,.05);}
  assert.equal(a.facilityCare?.phase,'use',`${desktop}/${kind}/${key} reaches actual relocated bowl`);
 }
 for(const id of ['rabbit','socks','dongdong']){
  const e=make(desktop),a=id==='rabbit'?e.bunny:e.newActors.find(a=>a.id===id);Object.assign(a,{x:e.plan.mainAisle.x,y:850});assert(e.beginScratchVisit(a));assert(e.scratchBoardLayout().some(p=>p.id===a.scratchBoard));
  const path=a.path;assert(path.length&&Math.hypot(path.at(-1).x-a.scratchGoal.x,path.at(-1).y-a.scratchGoal.y)<4,'New scratch pad approach is reachable');
 }
}
const e=make(false);let layout='desktop';e.document.documentElement.getAttribute=()=>layout;e.EY0=-320;e.EH=2100;e.BGS=1.4;e.bg={};e.paintRoom=()=>{};
vm.runInContext('cat.x=BOX_IN.x;cat.y=BOX_IN.y;cat.inside="box";cat.state="stay";',e);
vm.runInContext(e.source.slice(e.source.indexOf('function roomBaseScale('),e.source.indexOf('function measure(){')),e);
e.resizeRoomBounds(1440,760);assert(!e.cat.inside);assert(!e.yeBlocked(e.cat.x,e.cat.y,false,e.cat),'Resize relocates old occupied box safely');
layout='phone';e.resizeRoomBounds(390,531);assert(!e.yeBlocked(e.cat.x,e.cat.y,false,e.cat));
console.log('Relocated dining and each scratch visitor route work; phone/desktop resize clears obsolete geometry safely');
