const assert=require('assert'),make=require('./home-engine.js');
for(const desktop of [false,true]){
 const e=make(desktop),occupant=e.newActors.find(a=>a.id==='dongdong'),next=e.cat;
 Object.assign(occupant,{x:e.plan.mainAisle.x,y:850});assert(e.beginFacility(occupant,'litter'));
 for(let i=0;i<1600&&occupant.facilityCare?.phase!=='use';i++){e.clock.time+=.05;e.advanceFacility(occupant,.05);}
 assert.equal(occupant.facilityCare?.phase,'use');const before={x:occupant.x,y:occupant.y};
 Object.assign(next,{x:e.plan.mainAisle.x,y:930});assert(e.beginFacility(next,'litter'),'Queued request is retained');
 assert(occupant.facilityCare,'Player cannot eject the current user');assert.equal(occupant.x,before.x);assert.equal(occupant.y,before.y);assert.equal(next.facilityCare.phase,'queue');
 let nextUsed=false;for(let i=0;i<2800&&(occupant.facilityCare||next.facilityCare);i++){
  e.clock.time+=.05;e.resolveTraffic();if(occupant.facilityCare)e.advanceFacility(occupant,.05);else e.updateTrafficYield(occupant,.05);if(next.facilityCare)e.advanceFacility(next,.05);
  if(next.facilityCare?.phase==='use')nextUsed=true;assert(e.pairDistance(occupant,next)>=1-1e-7,'Waiting and departing cats remain separate');
 }
 assert(nextUsed,'Queued cat enters after occupant clears');assert(!next.facilityCare&&!occupant.facilityCare,JSON.stringify({desktop,next:[next.x,next.y,next.facilityCare?.phase],old:[occupant.x,occupant.y,!!occupant.trafficYield]}));
}
console.log('Queued litter user waits off entrance and never preempts/teleports the occupant');
