const assert=require('assert'),vm=require('vm'),make=require('./home-engine.js');
for(const desktop of [false,true]){
 const e=make(desktop),a=e.cat;Object.assign(a,{x:e.plan.mainAisle.x,y:850});e.beginFacility(a,'litter');
 for(let i=0;i<1600&&a.facilityCare?.phase!=='use';i++){e.clock.time+=.05;e.advanceFacility(a,.05);}assert.equal(a.facilityCare?.phase,'use');
 e.pet={on:false};e.dropCarry=()=>{};let hops=0;e.hopTo=()=>{hops++;};
 vm.runInContext(e.source.slice(e.source.indexOf('function interrupt(){'),e.source.indexOf('function randFloor(){')),e);
 vm.runInContext(e.source.slice(e.source.indexOf('function moveTo('),e.source.indexOf('function hopTo(')),e);
 e.interrupt();e.moveTo(e.plan.mainAisle.x,710,65,()=>{});
 assert.equal(hops,0,'A new action must not use legacy hop out of a solid tray');assert(a.facilityCare?.door,'Exit reservation survives interruption');
 let crossed=false;for(let i=0;i<1600&&a.facilityCare;i++){const y=a.y;e.clock.time+=.05;e.advanceFacility(a,.05);if(y<e.litter.front&&a.y>=e.litter.front){crossed=true;assert(Math.abs(a.x-e.litter.x)<2);}}
 assert(crossed);assert(!a.facilityCare);assert.equal(a.state,'walk','Latest command starts after safe exit');assert.equal(a.walkGoal.y,710);
}
console.log('Interruptions walk out through the same entrance, release safely, then run the latest action');
