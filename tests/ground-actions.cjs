const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const setup=fs.readFileSync(path.join(__dirname,'dining.cjs'),'utf8').split("for(const kind of ['eat','drink']){")[0]+';this.engine=e;this.source=s;';
const host={require,console,__dirname};vm.createContext(host);vm.runInContext(setup,host);const e=host.engine,s=host.source;
assert.equal(typeof e.spawnPuddle,'function','Socks can leave a temporary floor obstacle');
e.WALKING_NPCS=JSON.parse(s.match(/const WALKING_NPCS=(.*);/)[1]);
e.FLOOR_NPC_ANIMATIONS=JSON.parse(s.match(/const FLOOR_NPC_ANIMATIONS=(.*);/)[1]);
Object.assign(e,{Image:class{},mode:'hand',interrupt(){},setMode(){},cancelLiftHold(){}});
vm.runInContext(s.slice(s.indexOf('function gatherFootprint('),s.indexOf('/* ---------- toolbar ---------- */')),e);
vm.runInContext(s.slice(s.indexOf('/* Walking-only companions */'),s.indexOf('/* End walking-only companions */'))+';this.newActors=extraNPCs;this.puddles=floorPuddles;',e);
const socks=e.newActors[0],dongdong=e.newActors[1],all=[e.cat,e.npc,e.bunny,...e.newActors];
for(const a of all){a.trafficYield=null;a.path=[];a.x=-40;a.y=780;a.facilityCare=null;}
Object.assign(socks,{x:270,y:580,face:1,state:'wait'});
assert(e.spawnPuddle(socks),'Create behind Socks on empty floor');assert.equal(e.puddles.length,1);
const p=e.puddles[0],left={x:p.x-140,y:p.y},right={x:p.x+140,y:p.y};
for(const a of all){
 assert(e.yeBlocked(p.x,p.y,false,a),'All actors avoid urine even when cat collision disabled');
 assert(!e.yeCanStep(left,right,a),'Swept movement cannot tunnel through urine');
 assert(e.puddleStepClear(left,{x:left.x+20,y:left.y}),'Free floor remains passable');
 for(const other of all)if(other!==a)e.allowTrafficPass(a,other);
 const route=e.yeFindPath(left.x,left.y,right.x,right.y,a);assert(route.length,'Route finds a way around urine');let prev=left;for(const step of route){assert(e.puddleStepClear(prev,step),'Entire route avoids urine');prev=step;}
 const drop=e.yeFreePoint(p.x,p.y,a);assert(drop&&!e.puddleBlocked(drop.x,drop.y),'Drop finds dry floor');
}
assert(!e.catCanStep(left,right),'Player cannot cross urine');
for(let i=0;i<399;i++)e.updatePuddles(.05);assert.equal(e.puddles.length,1,'Lasts almost twenty seconds');
e.updatePuddles(.05);assert.equal(e.puddles.length,0,'Expires at twenty seconds');assert(e.puddleStepClear(left,right),'Dry floor reopens');
assert(!e.spawnPuddle(dongdong),'Only Socks marks');
for(const a of e.newActors){
 Object.assign(a,{x:90,y:410,state:'wait',timer:0,restDue:0,peeDue:1e9,trafficYield:null});
 assert(e.beginFloorRest(a),'Both cats use supplied floor movements');assert.equal(a.state,'floorRest');
 const pos={x:a.x,y:a.y};e.updateWalkingNpc(a,.3);assert.equal(a.x,pos.x);assert.equal(a.y,pos.y);assert(a.restTime>0);
 e.updateWalkingNpc(a,30);assert.notEqual(a.state,'floorRest','Returns to roaming');
}
console.log('Floor clips, Socks-only marking, twenty-second obstacle, swept collision and dry drops passed');

for(const a of e.newActors){
 Object.assign(a,{x:270,y:580,state:'wait',trafficYield:null,gatherSlot:null});assert(e.beginFloorRest(a));
 e.startGather();assert.notEqual(a.state,'floorRest');e.stopGather();
}
// Disgust must not linger for cats that never approached the puddle.
for(const a of all){a.x=500;a.y=250;a.state='walk';a.disgustUntil=0;}
e.updatePuddleReactions();assert(all.every(a=>!a.disgustUntil));
console.log('Floor rests cancel for gathering; distant cats do not show disgust');
Object.assign(e,{cv:{addEventListener(){}},setTimeout(){return 1;},clearTimeout(){},releaseGestureInteractions(){},ptr:null,pet:{on:false}});
vm.runInContext(s.slice(s.indexOf('/* Lift controls */'),s.indexOf('/* End lift controls */'))+';this.liftState=lift;',e);
e.puddles.push({x:240,y:590,rx:90,ry:31,age:0});
for(const a of all){a.z=0;e.beginLift(a,{x:a.x,y:a.y-60},1);e.moveLift({x:240,y:530});e.endLift();assert(!e.puddleBlocked(a.x,a.y),'Dropping any cat over urine chooses dry floor');assert.equal(a.z,0);}
console.log('Real lift/drop handler keeps all five cats off urine');
vm.runInContext(s.slice(s.indexOf('function updateChase(dt){'),s.indexOf('function updateCat(dt){')),e);
e.wand={x:400,y:590};e.sfx={pounce(){}};
e.puddles.length=0;e.puddles.push({x:270,y:580,rx:90,ry:31,age:0});
Object.assign(e.cat,{x:160,y:580,state:'chase',cs:'pounce',jx0:160,jy0:580,jx1:380,jy1:580,jt:0,z:0,path:[]});
e.updateChase(.21);assert(!e.puddleBlocked(e.cat.x,e.cat.y),'Wand pounce cannot cross urine');
e.puddles.length=0;for(const a of all){a.x=-40;a.y=780;}
Object.assign(socks,{x:270,y:580,face:1,state:'wait',gatherSlot:null,trafficYield:null});
Object.assign(e.cat,{x:38,y:586,state:'chase',cs:'pounce',jx0:38,jy0:586,jx1:278,jy1:586,jt:0});
assert(!e.spawnPuddle(socks),'Do not place urine across an active pounce');
console.log('Pounces avoid existing urine, and urine cannot spawn under a pounce');
