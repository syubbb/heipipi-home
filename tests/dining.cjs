const fs=require('fs'),vm=require('vm'),assert=require('assert');const s=require(__dirname+'/source.cjs')();const e={Math,W:600,H:820,EX0:-100,EW:800,cat:{x:80,y:780,state:'idle',path:[],time:0,phase:0,speed:100},IMG:{},toys:[],VIDEO_WALK:{duration:2.64},videoWalkTime:0,WSTRIDE:100,KW3:.5,refreshCameraOptions(){},bump(){},say(){},puff(){},advanceVideoWalk:(t,d)=>t+d,lerp:(a,b,t)=>a+(b-a)*t};e.NEW_COMPANION_ASSETS=JSON.parse(s.match(/const NEW_COMPANION_ASSETS=(.*);/)[1]);e.rand=(a,b)=>(a+b)/2;e.pick=a=>a[0];vm.createContext(e);
vm.runInContext(s.slice(s.indexOf('const BOX='),s.indexOf('/* ---------- static room')),e);
vm.runInContext(s.slice(s.indexOf('const YE_ANIMATION='),s.indexOf('/* ---------- camera:')),e);
vm.runInContext(s.slice(s.indexOf('/* ---------- rabbit NPC ---------- */'),s.indexOf('/* Ground feedback'))+';this.npc=ye;this.bunny=rabbit;this.clock=facilityClock;this.reservations=facilityReservations;',e);
for(const kind of ['eat','drink']){
 e.reservations.clear();for(const a of [e.cat,e.npc,e.bunny])Object.assign(a,{facilityCare:null,feedingIntent:null,trafficYield:null,yieldResume:null,path:[],state:'wait',time:0,facilityDue:{eat:1e9,drink:1e9},facilityHistory:{eat:0,drink:0,litter:0}});
 Object.assign(e.cat,{x:50,y:780});Object.assign(e.npc,{x:500,y:780});Object.assign(e.bunny,{x:500,y:400});
 assert(!e.beginFacility(e.bunny,kind),'Rabbit cannot eat/drink near bowls');
 assert(e.beginFacility(e.npc,kind),'NPC can reserve');assert(e.beginFacility(e.cat,kind),'Player can join');assert(e.npc.facilityCare,'Player must not evict NPC');
 assert.notEqual(e.cat.facilityCare.slot.index,e.npc.facilityCare.slot.index);
 assert.notEqual(e.cat.facilityCare.slot.face,e.npc.facilityCare.slot.face);
 let both=false;for(let i=0;i<1600;i++){e.clock.time+=.05;e.resolveTraffic();for(const a of [e.cat,e.npc]){if(a.facilityCare?.phase==='use')a.facilityCare.timer=99;e.advanceFacility(a,.05);}if([e.cat,e.npc].every(a=>a.facilityCare?.phase==='use')){both=true;break;}}
 assert(both,'Both reach same '+kind+' basin');
 for(const a of [e.cat,e.npc]){const c=a.facilityCare.slot.contact,base=e.feedingContact(kind);assert(((c.x-base.x)/22)**2+((c.y-base.y)/6.5)**2<1,'Mouth inside basin opening');}
 console.log(kind+': simultaneous opposite sides, stable mouth contacts inside basin');
}
Object.assign(e.bunny,{x:180,y:715,state:'rest',path:[]});e.updateNpcFacilities(e.bunny,.05);assert.equal(e.bunny.state,'walk');
for(const m of s.matchAll(/<script[^>]*>([^]*?)<\/script>/g))new vm.Script(m[1]);console.log('Rabbit walks away; scripts compile');
// Gather exercises actual routes, not only target assignment.
e.Image=class{};e.mode='hand';e.cv={addEventListener(){}};e.setTimeout=(fn)=>{e.holdFn=fn;return 1;};e.clearTimeout=()=>{e.holdFn=null;};e.releaseGestureInteractions=()=>{};e.ptr=null;e.pet={on:false};
vm.runInContext(s.slice(s.indexOf('/* Lift controls */'),s.indexOf('/* End lift controls */'))+';this.liftState=lift;',e);
e.interrupt=()=>{};e.setMode=()=>{};
vm.runInContext(s.slice(s.indexOf('function gatherFootprint('),s.indexOf('/* ---------- toolbar ---------- */'))+';this.gatherState=gather;',e);
for(let trial=0;trial<6;trial++){
 e.startGather();const order=e.gatherState.lastOrder;
 for(let i=0;i<1000;i++){e.clock.time+=.05;e.resolveTraffic();for(const a of [e.cat,e.npc,e.bunny])e.updateGather(a,.05);if([e.cat,e.npc,e.bunny].every(a=>a.state==='gatherSit'))break;}
 assert([e.cat,e.npc,e.bunny].every(a=>a.state==='gatherSit'),'All gather: '+JSON.stringify([e.cat,e.npc,e.bunny].map(a=>({x:a.x,y:a.y,state:a.state,goal:a.gatherSlot}))));
 assert.equal(e.cat.y,e.npc.y);assert.equal(e.cat.y,e.bunny.y);const row=[e.cat,e.npc,e.bunny].sort((a,b)=>a.x-b.x);const left=row[0].x+e.gatherFootprint(row[0]).left,right=row[2].x+e.gatherFootprint(row[2]).right;assert(Math.abs((left+right)/2-300)<.01);for(let j=1;j<3;j++)assert(Math.abs(row[j].x+e.gatherFootprint(row[j]).left-(row[j-1].x+e.gatherFootprint(row[j-1]).right)+3)<.01,'Bodies touch without gap');if(trial)assert.notEqual(order,e.lastOrder);e.lastOrder=order;
}
e.stopGather();assert(!e.gatherState.active);
console.log('Gather: six randomized orders, all arrive in centered row, release succeeds');
vm.runInContext(s.slice(s.indexOf('function diningDepth('),s.indexOf('function render(){')),e);
for(const kind of ['eat','drink']){const a=e.npc;e.cancelFacility(a);a.facilityCare={kind,phase:'use'};a.y=690;assert(e.diningDepth(a)>720);a.facilityCare=null;}
Object.assign(e.cat,{x:350,y:632,face:-1,facilityCare:{kind:'litter',phase:'enter',from:{x:350,y:632},t:0,slot:{x:350,y:632}},inside:null});
e.advanceFacility(e.cat,.1);assert(e.cat.x>350);assert.equal(e.cat.face,1);assert.equal(e.cat.pose,'pounce');e.cancelFacility(e.cat);
Object.assign(e.npc,{facilityCare:{kind:'eat'},facilityHistory:{eat:0},facilityDue:{},x:500,y:400});const before=e.clock.time;e.finishFacility(e.npc);assert.equal(e.npc.facilityDue.eat-before,55/.8);
console.log('Foreground dining, 20% request frequency reduction, forward toilet leap: passed');

for(const a of [e.cat,e.npc,e.bunny]){e.cancelFacility(a);a.z=0;a.state='walk';a.path=[{x:500,y:500}];const p={x:a.x,y:a.y-60};e.beginLift(a,p,1);assert.equal(e.liftState.actor,a);assert.equal(a.z,58);assert.equal(a.state,'lifted');assert(!e.npcObstacles(a===e.cat?e.npc:e.cat).includes(a),'Lifted cat does not block others');e.moveLift({x:130,y:250});e.endLift();assert.equal(a.z,0);assert(!e.yeBlocked(a.x,a.y,true,a),'Drop avoids objects and cats');assert.equal(a.facilityCare,null);}
Object.assign(e.cat,{x:520,y:638,face:-1,facilityCare:{kind:'litter',phase:'exit',from:{x:520,y:638},t:0,slot:{x:350,y:632}},inside:'litter'});e.advanceFacility(e.cat,.1);assert(e.cat.x>520,'Toilet exit moves right');assert.equal(e.cat.face,1);
console.log('Lift all three actors, drop into blocked furniture safely, right toilet exit: passed');

vm.runInContext(s.slice(s.indexOf('function drawWater(c){'),s.indexOf('function litterBack(c){')),e);
let strokes=0,pinkTongues=0;const canvas={save(){},restore(){},beginPath(){},moveTo(){},lineTo(){},quadraticCurveTo(){},fill(){},stroke(){strokes++;},ellipse(){if(this.fillStyle==='#e8798a')pinkTongues++;},translate(){},scale(){},drawImage(){}};
e.drawWater(canvas);assert.equal(strokes,0,'Water surface has no ripple strokes');
e.drawYeMoodIcon=()=>{};e.npc.state='drink';e.npc.time=.1;e.npc.facilityCare=null;e.IMG.ye_eat_0={complete:true,naturalWidth:480};e.drawNpcFeeding(canvas,e.npc);assert.equal(strokes,0,'Drinking NPC has no ripple strokes');assert(pinkTongues>0,'NPC drinking uses a visible tongue');
console.log('Still water surface and NPC tongue without ripple strokes: passed');
for(const actor of [e.cat,e.npc]){const slots=e.facilitySlots('eat',actor),center=e.feedingContact('eat');for(const slot of slots){assert.equal(slot.contact.x,center.x,'All eating mouths centered horizontally');assert.equal(slot.contact.y,center.y,'All eating mouths centered vertically');}}
console.log('Every food slot pins the mouth to the exact basin center: passed');
for(const actor of [e.cat,e.npc])for(const slot of e.facilitySlots('drink',actor)){const center=e.feedingContact('drink');assert.equal(slot.contact.x,center.x,'Drinking mouths at water center');assert.equal(slot.contact.y,center.y,'Drinking mouths at water center');}
vm.runInContext('this.waterSurfaceY=WATER.y-30;',e);assert.equal(e.feedingContact('drink').y,e.waterSurfaceY,'Exact center of relocated water ellipse');
console.log('Drinking contact at water surface center: passed');
vm.runInContext(s.slice(s.indexOf('const catMealFrames='),s.indexOf('function drawCat(c){')),e);
const earA=e.catMealPoint(450,140,0),earB=e.catMealPoint(450,140,4);assert(Math.hypot(earA.x-earB.x,earA.y-earB.y)>5,'Eating head visibly nods');for(let phase=0;phase<16;phase++){const mouth=e.catMealPoint(429,234,phase);assert.equal(mouth.x,429);assert.equal(mouth.y,234);}
const jawA=e.catMealPoint(415,214,0),jawB=e.catMealPoint(415,214,2);assert(Math.abs(jawA.y-jawB.y)>.3,'Jaw chews');
for(const kind of ['eat','drink']){e.cat.facilityCare={kind,phase:'use'};e.npc.facilityCare={kind,phase:'use'};e.cat.y=700;e.npc.y=730;assert(e.diningDepth(e.cat)>e.diningDepth(e.npc),'Black cat always above other diners');}
console.log('Animated head and jaw with stable muzzle; black cat above all NPC diners: passed');
for(const kind of ['eat','drink']){
 e.cat.facilityCare={kind,phase:'use',slot:e.facilitySlots(kind,e.cat)[0]};e.npc.facilityCare={kind,phase:'use',slot:e.facilitySlots(kind,e.npc)[1]};
 for(let n=0;n<80;n++){e.sharedMealContact(e.cat,.05);e.sharedMealContact(e.npc,.05);}
 const center=e.feedingContact(kind),left=e.npc.facilityCare.slot.contact,right=e.cat.facilityCare.slot.contact;
 assert(left.x<center.x-11&&right.x>center.x+11,'Shared mouths split to left/right contents');
 for(const c of [left,right])assert(((c.x-center.x)/21)**2+((c.y-center.y)/5)**2<1,'Muzzle stays within food/water, not rim');
 e.npc.facilityCare=null;for(let n=0;n<80;n++)e.sharedMealContact(e.cat,.05);assert(Math.abs(e.cat.facilityCare.slot.contact.x-center.x)<.01,'Solo diner returns to center');
}
console.log('Two diners use opposite inner food/water edges without touching basin rim: passed');
