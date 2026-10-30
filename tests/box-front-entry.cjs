const fs=require('fs'),vm=require('vm'),assert=require('assert'),make=require('./room-engine.cjs');
for(const phone of [false,true]){
 const e=make(15),s=e.source;
 vm.runInContext(s.slice(s.indexOf('/* ---------- behaviour ---------- */'),s.indexOf('const MOUTH_UP=')),e);
 const graphics={Math,Date,Intl};vm.createContext(graphics);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),graphics);
 Object.assign(e,{WindowScene:graphics.WindowScene,document:{documentElement:{getAttribute:()=>phone?'phone':'desktop'}},FT:215,needs:{energy:50,hunger:100,thirst:100,potty:100,love:100,play:100},DECAY:{},pet:{on:false},sfx:{breath(){},thud(){}},purrG:null,updateBellyAnimation(){},updateToastRest(){},popMeow(){}});
 const start=s.indexOf('function updateCat(dt){');vm.runInContext(s.slice(start,s.indexOf('function updateToys(dt){',start)),e);
 for(const [i,a]of e.actors.entries())Object.assign(a,{x:70+i*95,y:700,state:'wait',path:[],facilityCare:null,trafficYield:null,gatherSlot:null,time:0,walkTime:0});
 const toy={id:'ele',name:'大象寶寶',fav:true,size:56,x:276,y:352,carried:true};e.toys.push(toy);Object.assign(e.cat,{x:300,y:500,z:0,pose:'walk',carry:toy,state:'idle',phase:0,time:0});
 e.goSleep(null,false);let jumped=false;
 for(let i=0;i<1200&&e.cat.act!=='sleep';i++){
  e.clock.time+=.05;e.resolveTraffic();e.updateCat(.05);e.updateYe(.05);e.updateRabbit(.05);e.newActors.forEach(a=>e.updateWalkingNpc(a,.05));
  if(e.cat.state==='hop'){
   const h=e.cat.hop;assert(h.y0>360,'Box entry starts in front of box, never at right side');assert(Math.abs(h.x0-h.x1)<2,'Jump remains centered in front opening');assert(Math.abs(e.cat.x-134)<2,'No side-panel crossing');jumped=true;
  }
 }
 assert(jumped);assert.equal(e.cat.act,'sleep');assert(toy.inBox);assert.equal(e.cat.y,305);
 e.moveTo(300,500,72,()=>{});assert.equal(e.cat.state,'hop');assert(e.cat.hop.y1>360,'Exit also clears front panel');assert(Math.abs(e.cat.hop.x1-e.cat.hop.x0)<2);
}
console.log('Desktop and phone: centered front box entry/exit, carried toy, complete sleep without crossing side panels');
