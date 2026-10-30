const assert=require('assert'),vm=require('vm'),fs=require('fs'),make=require('./room-engine.cjs');
const e=make(25);e.EX0=-1000;e.EW=2600;e.FT=215;const graphics={Math,Date,Intl};vm.createContext(graphics);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),graphics);e.WindowScene=graphics.WindowScene;e.document={documentElement:{getAttribute:()=> 'desktop'}};
vm.runInContext('GX0=-958;GX1=1558;SUN.x=450;COLS=Math.floor((GX1-GX0)/CELL)+1;N=COLS*ROWS;grid=new Uint8Array(N);',e);
vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);
for(const [i,a]of e.actors.entries())Object.assign(a,{x:[800,920,1040,1160,1280][i],y:[460,650,680,760,780][i],state:'wait',facilityCare:null,gatherSlot:null,trafficYield:null,path:[],time:0});
const tv=e.CatTV.create({actors:()=>e.actors,portrait:{complete:true,naturalWidth:2172},geometry:()=>({x:1187,bottom:261,right:1558}),blocked:(p,a)=>e.yeBlocked(p.x,p.y,false,a),path:(a,p)=>e.yeFindPath(a.x,a.y,p.x,p.y,a),canStep:(a,p)=>e.yeCanStep(a,p,a)&&e.yeLineClear(a,p,a),clock:()=>e.clock.time,random:()=>.5,eligible:()=>false,prepare(){},resume(a){a.state='wait';}});e.tvCats=tv;
assert.equal(tv.startAll(),5,'All five obtain reachable seats in actual desktop room');
let done=false;for(let i=0;i<750;i++){e.clock.time+=.05;tv.tick(.05);if(e.actors.every(a=>a.state==='watchTV')){done=true;break;}}
assert(done,'Five real collision-aware routes reach the TV seats');
for(const a of e.actors){assert(!e.panoramaFurnitureBlocked(a.x,a.y),'No TV cabinet penetration');assert(a.y-127>261,'Rear-facing viewers do not block the television screen');}
console.log('Actual desktop room: five reserved seats reached, cabinet and screen clear');
