const assert=require('assert'),vm=require('vm'),make=require('./home-engine.js');
for(const desktop of [false,true])for(const seed of [12,56,88]){
 const e=make(desktop,seed);for(const [i,a]of e.actors.entries())Object.assign(a,{x:e.plan.mainAisle.x+(i%2?110:-110),y:680+i*70});e.startGather();
 for(const a of e.actors)assert(a.gatherSlot.x>e.EX0+60&&a.gatherSlot.x<e.EX0+e.EW-60,'Photo formation belongs on open floor, not the relocated bed against right edge');
 let done=false;for(let i=0;i<1800;i++){e.clock.time+=.05;e.resolveTraffic();for(const a of e.actors)e.updateGather(a,.05);if(e.actors.every(a=>a.state==='gatherSit')){done=true;break;}}
 assert(done,`${desktop}/${seed}: ${e.actors.map(a=>(a.id||'black/ye')+':'+a.state+':'+Math.round(a.x)+','+Math.round(a.y)).join(' ')}`);
}
const e=make(false);vm.runInContext('roomPlan=null;GX0=-58;GX1=658;GY0=238;GY1=806;ROWS=Math.floor((GY1-GY0)/CELL)+1;COLS=Math.floor((GX1-GX0)/CELL)+1;N=COLS*ROWS;grid=new Uint8Array(N);gather.active=true;Object.assign(TOAST_CENTER,{x:300,y:522});TOAST.w=172;OBST.splice(0,OBST.length,{x0:44,y0:262,x1:216,y1:336,h:60,wall:true});',e);
e.document=undefined;vm.runInContext("Object.assign(BOWL,{x:110,y:750});Object.assign(WATER,{x:310,y:750});Object.assign(FACILITIES.eat,BOWL);Object.assign(FACILITIES.drink,WATER);",e);
const actors=[e.cat,e.npc,e.bunny];for(const [i,a]of actors.entries())Object.assign(a,{x:[297.575,242,350][i],y:[447,418,418][i],state:i?'walk':'gatherSit',gatherSlot:{x:[297.575,361.565,245.065][i],y:447},gatherTime:0,gatherRepath:0,gatherBlocked:0,gatherSide:-1,path:[],trafficYield:null});
for(let i=0;i<1200&&!actors.every(a=>a.state==='gatherSit');i++){e.clock.time+=.05;for(const a of actors)e.updateGather(a,.05);}
assert(actors.every(a=>a.state==='gatherSit'),'Opposite arrival directions need separate staging lanes instead of deadlocking above the seated row');
console.log('Six approved-layout photo gatherings and the opposed-arrival deadlock regression passed');
