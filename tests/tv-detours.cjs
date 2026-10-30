const assert=require('assert'),fs=require('fs'),vm=require('vm'),make=require('./room-engine.cjs');
const lib=fs.readFileSync('dist/tv-cats.js','utf8'),test={Math,Image:class{}};vm.createContext(test);vm.runInContext(lib,test);
const a={x:100,y:740,state:'wait',path:[],time:0};let clock=0,plans=0,blocked=false;
const controller=test.CatTV.create({actors:()=>[a],portrait:{complete:true,naturalWidth:2172},geometry:()=>({x:650,bottom:200,right:708}),blocked:()=>false,path:(a,p)=>{plans++;return [{x:220,y:650},{...p}];},canStep:()=>!blocked,clock:()=>clock,random:()=>.5,eligible:()=>false,prepare(){},resume(){}});
controller.startAll();for(let i=0;i<40;i++){clock+=.05;controller.tick(.05);}assert.equal(plans,1,'Keep a valid detour instead of periodically choosing a different side');
blocked=true;for(let i=0;i<24;i++){clock+=.05;controller.tick(.05);}assert(plans>1,'A genuinely blocked path must be replanned');

for(const desktop of [false,true]){
 const e=make(25);e.EX0=desktop?-1000:-150;e.EW=desktop?2600:900;e.FT=215;const graphics={Math,Date,Intl};vm.createContext(graphics);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),graphics);e.WindowScene=graphics.WindowScene;e.document={documentElement:{getAttribute:()=>desktop?'desktop':'phone'}};
 vm.runInContext(`GX0=${desktop?-958:-108};GX1=${desktop?1558:708};SUN.x=${desktop?450:386};COLS=Math.floor((GX1-GX0)/CELL)+1;N=COLS*ROWS;grid=new Uint8Array(N);`,e);vm.runInContext(lib,e);
 for(const [i,actor]of e.actors.entries())Object.assign(actor,{x:(desktop?[800,920,1040,1160,1280]:[90,220,340,470,100])[i],y:[460,650,680,760,780][i],state:'wait',facilityCare:null,gatherSlot:null,trafficYield:null,path:[],time:0});
 const tv=e.CatTV.create({actors:()=>e.actors,portrait:{complete:true,naturalWidth:2172},geometry:()=>({x:desktop?1187:656,bottom:desktop?261:194,right:desktop?1558:708}),blocked:(p,a)=>e.yeBlocked(p.x,p.y,false,a),path:(a,p)=>e.yeFindPath(a.x,a.y,p.x,p.y,a),canStep:(a,p)=>e.yeCanStep(a,p,a)&&e.yeLineClear(a,p,a),clock:()=>e.clock.time,random:()=>.5,eligible:()=>false,prepare(){},resume(a){a.state='wait';},yieldTick:(a,dt)=>e.updateTrafficYield(a,dt)});e.tvCats=tv;assert.equal(tv.startAll(),5);
 const held=e.actors.slice(0,2);for(const actor of held)Object.assign(actor,{x:actor.tvVisit.target.x,y:actor.tvVisit.target.y,state:'watchTV',pose:'tvBack',path:[]});
 let done=false;const progress=e.actors.map(a=>({best:Math.hypot(a.x-a.tvVisit.target.x,a.y-a.tvVisit.target.y),elapsed:0,max:0}));
 for(let tick=0;tick<1600;tick++){
  e.clock.time+=.05;const before=e.actors.map(a=>({x:a.x,y:a.y,walkTime:a.walkTime}));e.resolveTraffic();tv.tick(.05);
  e.actors.forEach((a,i)=>{e.finishLocomotionTick(a,before[i],.05);if(a.state==='walk'&&!a.trafficYield){const p=progress[i],d=Math.hypot(a.x-a.tvVisit.target.x,a.y-a.tvVisit.target.y);if(d<p.best-12){p.best=d;p.elapsed=0;}else{p.elapsed+=.05;p.max=Math.max(p.max,p.elapsed);}}for(const b of e.actors)if(b!==a)assert(!e.pairPassing(a,b),'TV assembly routes never bypass cat bodies');});
  for(const actor of held)assert(actor.tvVisit,'A seated cat keeps its target even if it briefly yields');
  if(e.actors.every(a=>a.state==='watchTV')){done=true;break;}
 }
 assert(done,'Crowded '+(desktop?'desktop':'phone')+' TV assembly completes with shared traffic');assert(Math.max(...progress.map(p=>p.max))<8,'No repeated no-progress reversal loop: '+progress.map(p=>p.max));
}
console.log('TV keeps valid detours, replans actual obstructions and routes around seated cats on both layouts');
