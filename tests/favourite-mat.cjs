const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const s=require('./source.cjs')();let setup=fs.readFileSync(path.join(__dirname,'dining.cjs'),'utf8').split("for(const kind of ['eat','drink']){")[0]+';this.engine=e;';const h={require,console,__dirname};vm.createContext(h);vm.runInContext(setup,h);const e=h.engine;
Object.assign(e,{KP:.31,FT:215,BLACK_RANDOM_CLIPS:JSON.parse(fs.readFileSync('dist/assets/black-random/clips.json')),gather:{active:false},needs:{potty:100,thirst:100,energy:100,hunger:100,love:100,play:100},pet:{on:false},cancelLiftHold(){},endLift(){},stopGather(){},say(){},popMeow(){},bowl:{food:1},sfx:{thud(){}}});
vm.runInContext(s.slice(s.indexOf('/* ---------- behaviour ---------- */'),s.indexOf('const MOUTH_UP=')),e);
assert.equal(typeof e.goMatSleep,'function','Black cat can travel to its favourite photo mat');
for(const a of [e.npc,e.bunny])Object.assign(a,{x:580,y:780,facilityCare:null,gatherSlot:null,trafficYield:null});
Object.assign(e.cat,{x:300,y:680,time:100,z:0,state:'idle',path:[],carry:null,inside:null});
assert(e.goMatSleep());assert.equal(e.cat.state,'walk');assert.notEqual(e.cat.act,'matSleep','Never sleep before reaching the mat');
for(let i=0;i<1600&&e.cat.state==='walk';i++){e.cat.time+=.05;e.resolveTraffic();if(e.followPath(.05)){const f=e.cat.then;e.cat.then=null;f?.();}}
assert.equal(e.cat.act,'matSleep','Walks to mat and lies down');vm.runInContext('this.mat=FAVOURITE_MAT;',e);assert(Math.hypot(e.cat.x-e.mat.x,e.cat.y-e.mat.y-26)<4);assert.equal(e.cat.pose,'sleep');assert.equal(e.cat.eyes,'closed');
e.interrupt();assert.equal(e.cat.matVisit,null);assert.equal(e.cat.then,null);assert.notEqual(e.cat.act,'matSleep');assert(!e.goMatSleep(),'Mat visits have a cooldown');

e.cat.time+=200;Object.assign(e.needs,{potty:100,thirst:100,hunger:100});assert(e.goMatSleep());const staleArrival=e.cat.then;
Object.assign(e,{DECAY:{},purrG:null,updateGather:()=>false,updateBellyAnimation(){},updateToastRest(){}});
vm.runInContext(s.slice(s.indexOf('function updateCat('),s.indexOf('function updateToys(')),e);
e.needs.potty=0;e.goLitter=()=>{e.urgent='litter';};e.updateCat(.05);assert.equal(e.urgent,'litter','Urgent need interrupts travel to mat');assert.equal(e.cat.matVisit,null);staleArrival();assert.notEqual(e.cat.act,'matSleep','Cancelled arrival cannot restart sleep');

e.cat.time+=200;e.needs.potty=0;e.goLitter=()=>e.urgent='litter';e.chooseNext();assert.equal(e.urgent,'litter','Urgent care takes precedence');
console.log('Favourite mat has real route arrival, closed-eye sleep, manual cancellation, cooldown and urgent-care priority');
