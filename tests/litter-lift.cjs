const assert=require('assert'),vm=require('vm'),make=require('./home-engine.js');
for(const desktop of [false,true])for(const who of ['black','dongdong']){
 const e=make(desktop),a=who==='black'?e.cat:e.newActors.find(a=>a.id===who);
 Object.assign(e,{cancelTVVisit(){},cancelLiftHold(){},releaseGestureInteractions(){},pet:{on:false},ptr:null});
 vm.runInContext(e.source.slice(e.source.indexOf('function beginLift('),e.source.indexOf("cv.addEventListener('pointerdown'")),e);
 Object.assign(a,{x:e.plan.mainAisle.x,y:850});e.beginFacility(a,'litter');
 for(let i=0;i<1600&&a.facilityCare?.phase!=='use';i++){e.clock.time+=.05;e.advanceFacility(a,.05);}
 assert.equal(a.facilityCare?.phase,'use');e.beginLift(a,{x:a.x,y:a.y},7);
 assert(!e.liftState.actor,'An interior user must exit safely before being lifted');
 e.moveLift({x:e.plan.mainAisle.x,y:800});e.endLift();
 let crossed=false;for(let i=0;i<1200&&a.facilityCare;i++){const y=a.y;e.clock.time+=.05;e.resolveTraffic();e.advanceFacility(a,.05);if(y<e.litter.front&&a.y>=e.litter.front){crossed=true;assert(Math.abs(a.x-e.litter.x)<2);}}
 assert(crossed);assert(!a.facilityCare);assert.equal(e.reservations.size,0);
 e.beginLift(a,{x:a.x,y:a.y},8);assert.equal(e.liftState.actor,a,'Normal lift remains available once the cat clears the doorway');
 e.endLift();
}
console.log('Black and Dongdong finish the same-door exit before accepting lift, with no stale reservation');
