const assert=require('assert'),fs=require('fs'),vm=require('vm'),make=require('./room-engine.cjs');let scenarios=0;
for(const desktop of [false,true])for(let seed=1;seed<=24;seed++){
 const e=make(seed);e.EX0=desktop?-1000:-150;e.EW=desktop?2600:900;e.FT=215;const graphics={Math,Date,Intl};vm.createContext(graphics);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),graphics);e.WindowScene=graphics.WindowScene;e.document={documentElement:{getAttribute:()=>desktop?'desktop':'phone'}};
 vm.runInContext(`GX0=${desktop?-958:-108};GX1=${desktop?1558:708};SUN.x=${desktop?450:386};COLS=Math.floor((GX1-GX0)/CELL)+1;N=COLS*ROWS;grid=new Uint8Array(N);`,e);
 const chosen=[];for(const actor of e.actors){let p;for(let i=0;i<1000;i++){p={x:e.rand(desktop?-800:-40,desktop?1400:640),y:e.rand(360,790)};if(!e.yeBlocked(p.x,p.y,false,actor)&&chosen.every(q=>e.pairDistance(p,q)>1.7))break;}chosen.push(p);Object.assign(actor,p,{state:'wait',path:[],time:0,goal:{x:70,y:380},walkGoal:null,facilityCare:null,trafficYield:null});}
 e.startGather();let done=false;
 for(let tick=0;tick<2200;tick++){
  e.clock.time+=.05;const before=e.actors.map(a=>({x:a.x,y:a.y,walkTime:a.walkTime}));e.resolveTraffic();
  e.actors.forEach((a,i)=>{e.updateGather(a,.05);e.finishLocomotionTick(a,before[i],.05);assert.equal(e.npcObstacles(a).length,4,'Final photo alignment retains collision bodies instead of ignoring neighbors');});
  if(e.actors.every(a=>a.state==='gatherSit')){done=true;break;}
 }
 assert(done,`No crowd deadlock: ${desktop?'desktop':'phone'} seed ${seed}`);scenarios++;
}
console.log(scenarios+' seeded phone/desktop photo assemblies route around real bodies and all arrive');
