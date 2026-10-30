const assert=require('assert'),make=require('./room-engine.cjs');
const e=make(63),a=e.npc,b=e.cat;
for(const x of e.actors)Object.assign(x,{x:570,y:790,state:'wait',path:[],trafficYield:null,facilityCare:null,gatherSlot:null});
Object.assign(b,{x:160,y:460,state:'walk',path:[{x:430,y:460}],walkGoal:{x:430,y:460},tvVisit:{target:{x:430,y:460}}});
Object.assign(a,{x:240,y:460,state:'watchTV',tvVisit:{target:{x:240,y:460}},path:[]});
assert(e.requestNpcYield(a,b,{x:430,y:460}),'Seated viewer blocking an arriving cat must actively yield');
const start={x:a.x,y:a.y};for(let i=0;i<80;i++){e.clock.time+=.05;e.updateTrafficYield(a,.05);}
assert(Math.hypot(a.x-start.x,a.y-start.y)>35,'Yield means actually walking aside, not remaining frozen');
assert(a.tvVisit,'TV target survives temporary walk-aside');
console.log('A seated viewer walks aside for an arriving cat and retains its viewing target');
