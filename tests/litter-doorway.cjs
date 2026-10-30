const assert=require('assert'),make=require('./home-engine.js');
for(const desktop of [false,true])for(const id of ['cat','dongdong']){
 const e=make(desktop),a=id==='cat'?e.cat:e.newActors.find(a=>a.id===id);Object.assign(a,{x:e.plan.mainAisle.x,y:850});
 assert.equal(typeof e.litterPortal,'function','One doorway geometry must own approach and egress');
 const portal=e.litterPortal();assert.equal(portal.entry.x,portal.inside.x);assert.equal(portal.entry.x,portal.approach.x);
 assert(e.beginFacility(a,'litter'));let inDoor=false,outDoor=false,used=false,maxStep=0;
 for(let i=0;i<2400&&a.facilityCare;i++){
  const old={x:a.x,y:a.y};e.clock.time+=.05;e.resolveTraffic();e.advanceFacility(a,.05);maxStep=Math.max(maxStep,Math.hypot(a.x-old.x,a.y-old.y));
  if(Math.abs(a.x-e.litter.x)<e.litter.width/2&&(old.y-e.litter.front)*(a.y-e.litter.front)<=0&&old.y!==a.y){assert(Math.abs(a.x-e.litter.x)<portal.halfWidth-15,'All wall crossings use central aperture');if(a.y<old.y)inDoor=true;else outDoor=true;}
  if(a.facilityCare?.phase==='use')used=true;
  if(a.facilityCare?.door&&['exitDoor','clearDoor'].includes(a.facilityCare.phase))assert(e.reservations.has(a),'Keep reservation until body clears landing');
  assert.equal(a.z||0,0,'Walk through low entrance without wall hop');
 }
 assert(inDoor&&outDoor&&used,'Complete same-door entry, use and exit');assert(maxStep<=5.1,'No entry/exit teleport');assert(!a.facilityCare);assert(!e.reservations.has(a));assert(!e.yeBlocked(a.x,a.y,false,a));
}
console.log('Black and Dongdong walk through the same front door, use inside, clear landing, never cross side walls');
