const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const s=require('./source.cjs')();
assert(s.includes('function goKnead('),'Black cat needs a random kneading action');
let setup=fs.readFileSync(path.join(__dirname,'dining.cjs'),'utf8').split("for(const kind of ['eat','drink']){")[0]+';this.engine=e;';
const h={require,console,__dirname};vm.createContext(h);vm.runInContext(setup,h);const e=h.engine;
Object.assign(e,{KP:.31,FT:215,BLACK_RANDOM_CLIPS:JSON.parse(fs.readFileSync(path.join(__dirname,'../dist/assets/black-random/clips.json'))),gather:{active:false},needs:{potty:100,thirst:100,energy:100,hunger:100,love:100,play:100},pet:{on:false},cancelLiftHold(){},endLift(){},stopGather(){},say(){},popMeow(){},bowl:{food:1},sfx:{thud(){}}});
vm.runInContext(s.slice(s.indexOf('/* ---------- behaviour ---------- */'),s.indexOf('const MOUTH_UP='))+';this.actionMode=()=>mode;',e);
vm.runInContext('this.toastCenter=TOAST_CENTER;this.lift=lift;',e);
for(const a of [e.npc,e.bunny])Object.assign(a,{x:580,y:780,facilityCare:null,gatherSlot:null,trafficYield:null});
Object.assign(e.cat,{x:180,y:550,time:0,z:0,pose:'sit',state:'idle',path:[],carry:null,inside:null});
assert(e.goKnead(),'Can start walking to toast');assert.equal(e.cat.state,'walk');
for(let i=0;i<1800&&e.cat.state==='walk';i++){e.cat.time+=.05;e.resolveTraffic();if(e.followPath(.05)){const f=e.cat.then;e.cat.then=null;f?.();}}
assert.equal(e.cat.act,'knead','Kneads only after reaching cushion');
assert(Math.hypot(e.cat.x-e.toastCenter.x,e.cat.y-e.toastCenter.y-36)<3,'Paws arrive at cushion center');
const frames=new Set();for(let t=0;t<2;t+=.1)frames.add(e.blackRandomFrame('knead',t));assert(frames.size>10,'Real alternating paw frames animate');
assert.equal(e.blackRandomFrame('loafVideo',100),e.BLACK_RANDOM_CLIPS.loaf.count-1,'Loaf holds settled pose without repeatedly standing up');
e.interrupt();assert.equal(e.cat.randomAction,null,'Manual action cancels kneading');assert.equal(e.cat.then,null,'No callback can restart cancelled animation');
assert.equal(e.cat.state,'idle');
e.cat.time+=90;let seed=19;e.rand=(a,b)=>{seed=(seed*1664525+1013904223)>>>0;return a+(b-a)*seed/4294967296;};assert(e.goFloorLoaf(),'Can choose a safe random floor point');
const destination={...e.cat.walkGoal};assert(!e.blockedPt(destination.x,destination.y),'Floor loaf avoids furniture');assert(e.npcRestAllowed(destination),'Floor loaf stays away from food and water');
Object.assign(e.cat,{x:destination.x,y:destination.y});const arrive=e.cat.then;e.cat.then=null;arrive();assert.equal(e.cat.act,'loafVideo');
e.interrupt();assert.equal(e.cat.randomAction,null,'Floor loaf also obeys manual commands');
e.cat.time+=100;e.variedIdleRoll=()=>.55;e.chooseNext();assert.equal(e.cat.randomAction?.kind,'knead','Autonomous choice actually schedules kneading');e.interrupt();
e.cat.time+=100;e.variedIdleRoll=()=>.63;e.chooseNext();assert.equal(e.cat.randomAction?.kind,'loafVideo','Autonomous choice actually schedules floor loaf');e.interrupt();
e.cat.time+=100;e.variedIdleRoll=()=>.95;e.chooseNext();assert.equal(e.cat.state,'walk');
for(let i=0;i<1800&&e.cat.state==='walk';i++){e.cat.time+=.05;e.resolveTraffic();if(e.followPath(.05)){const f=e.cat.then;e.cat.then=null;if(f)f();else e.cat.state='idle';}}
assert.equal(e.cat.pose,'look','Autonomous walk ends looking toward the viewer');assert.equal(e.cat.act,'look','Arrival starts looking instead of a side-facing idle');e.interrupt();
const originalKnead=e.goKnead,originalLoaf=e.goFloorLoaf,counts={knead:0,loaf:0};e.goKnead=()=>{counts.knead++;return true;};e.goFloorLoaf=()=>{counts.loaf++;return true;};
for(let i=0;i<200;i++){e.variedIdleRoll=()=>.52+(i+.5)/1000;e.chooseNext();}
assert.equal(counts.knead,100,'Kneading has a ten-percent choice range');assert.equal(counts.loaf,100,'Loaf has the same ten-percent choice range');e.goKnead=originalKnead;e.goFloorLoaf=originalLoaf;
// Important needs still override optional activities.
e.needs.potty=0;e.goLitter=()=>{e.urgent='litter';};e.chooseNext();assert.equal(e.urgent,'litter');
const metadata=JSON.parse(fs.readFileSync(path.join(__dirname,'../dist/assets/black-random/clips.json')));for(const kind of ['knead','loaf'])for(let i=0;i<metadata[kind].count;i++)assert(fs.existsSync(path.join(__dirname,'../dist',(metadata[kind].path||'assets/black-random/'+kind+'-')+String(i).padStart(3,'0')+'.webp')));
console.log('Black cat random actions: real paw animation, toast arrival, safe floor loaf, settled hold, manual cancellation and urgent needs passed');
