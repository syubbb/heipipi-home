const assert=require('assert'),vm=require('vm'),make=require('./home-engine.js');
for(const desktop of [false,true]){
 const e=make(desktop),a=e.newActors.find(a=>a.id==='dongdong'),black=e.cat;
 Object.assign(e,{updateBellyAnimation(){},updateToastRest(){},DECAY:{},purrG:null,chooseNext(){black.timer=1000;black.resumed=true;}});
 vm.runInContext(e.source.slice(e.source.indexOf('function updateCat(dt){'),e.source.indexOf('function updateToys(dt){')),e);
 Object.assign(a,{x:e.plan.mainAisle.x,y:850});e.beginFacility(a,'litter');
 for(let i=0;i<1600&&a.facilityCare?.phase!=='use';i++){e.clock.time+=.05;e.advanceFacility(a,.05);}
 assert.equal(a.facilityCare?.phase,'use');const p=e.litterPortal().approach;
 Object.assign(black,{...p,state:'idle',pose:'sit',timer:1000});e.cancelFacility(a);
 let moved=0,walked=false;for(let i=0;i<800&&a.facilityCare;i++){
  e.clock.time+=.05;e.resolveTraffic();e.advanceFacility(a,.05);e.updateCat(.05);
  moved=Math.max(moved,Math.hypot(black.x-p.x,black.y-p.y));if(black.trafficYield&&black.pose==='walk')walked=true;
  assert(e.pairDistance(a,black)>=1-1e-7,'Exit never crosses the yielding player body');
 }
 assert(moved>35,'Ordinary player must actually walk away from the litter entrance');
 assert(walked,'Player uses walking pose while yielding');assert(!a.facilityCare,'Occupant exits and releases reservation');
 for(let i=0;i<100;i++){e.clock.time+=.05;e.updateCat(.05);}
 assert(black.resumed,'Ordinary behavior resumes after the yielding step');assert(!black.trafficYield);assert.equal(black.state,'idle','Player resumes autonomous idle instead of NPC-only wait');
}
console.log('Actual player update walks aside for litter exit and resumes ordinary behavior');
