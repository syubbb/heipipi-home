const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const setup=fs.readFileSync(path.join(__dirname,'walking-npcs.cjs'),'utf8').split('assert.equal(e.newActors.length,2)')[0]+';this.engine=e;this.source=s;';
const host={require,console,__dirname};vm.createContext(host);vm.runInContext(setup,host);const e=host.engine,s=host.source;
let layout='desktop';e.document={documentElement:{getAttribute:()=>layout}};e.FT=215;
const graphics={Math,Date,Intl};vm.createContext(graphics);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),graphics);e.WindowScene=graphics.WindowScene;
vm.runInContext('EX0=-1000;EW=2600;GX0=-958;GX1=1558;COLS=Math.floor((GX1-GX0)/CELL)+1;N=COLS*ROWS;grid=new Uint8Array(N);for(let i=0;i<N;i++)grid[i]=blockedPt(gx(i),gy(i))?1:0;',e);
for(const a of [e.cat,e.npc,e.bunny,...e.newActors])Object.assign(a,{x:100,y:790,state:'wait',path:[],facilityCare:null});
const furniture=[[-790,350],[-300,220],[1200,270],[1400,330],[1480,380]];
for(const [x,y] of furniture){assert(e.panoramaFurnitureBlocked(x,y),'Furniture collision follows new straight cabinet base');assert(e.blockedPt(x,y),`Player must not enter background furniture at ${x},${y}`);for(const a of [e.npc,e.bunny,...e.newActors])assert(e.yeBlocked(x,y,false,a),`${a.id||a.name} must avoid background furniture`);const goal=e.freePoint(x,y);assert(!e.blockedPt(goal.x,goal.y),'Clicking furniture chooses free floor');}
for(const a of [e.cat,e.npc,e.bunny,...e.newActors]){
 Object.assign(a,{x:-930,y:470});
 const target={x:-470,y:280},route=a===e.cat?e.findPath(a.x,a.y,target.x,target.y):e.yeFindPath(a.x,a.y,target.x,target.y,a);
 assert(route.length,`${a.id||'player'} can route around the left cabinet`);let from={x:a.x,y:a.y};
 for(const to of route){const n=Math.ceil(Math.hypot(to.x-from.x,to.y-from.y)/2);for(let i=1;i<=n;i++){const p={x:from.x+(to.x-from.x)*i/n,y:from.y+(to.y-from.y)*i/n};assert(!e.panoramaFurnitureBlocked(p.x,p.y),'Every route segment clears furniture');}from=to;}
 assert(Math.hypot(from.x-target.x,from.y-target.y)<20,'Route reaches the open floor');
 assert(!e.panoramaFurnitureStepClear({x:-790,y:470},{x:-790,y:220}),'No tunnelling into a cabinet');
 assert(!e.catCanStep({x:-790,y:470},{x:-790,y:220}),'Player cannot tunnel into a cabinet');
 assert(!e.yeCanStep({x:-790,y:470},{x:-790,y:220},a),'NPC cannot tunnel into a cabinet');
}
Object.assign(e,{cv:{addEventListener(){}},setTimeout(){return 1},clearTimeout(){},releaseGestureInteractions(){},ptr:null,pet:{on:false}});
vm.runInContext(s.slice(s.indexOf('/* Lift controls */'),s.indexOf('/* End lift controls */')),e);
for(const a of [e.cat,e.npc,e.bunny,...e.newActors]){Object.assign(a,{x:300,y:780});e.beginLift(a,{x:a.x,y:a.y},1);e.moveLift({x:-790,y:220});e.endLift();assert(!e.yeBlocked(a.x,a.y,true,a),'Dropping on a cabinet lands on nearby free floor');}
e.bg={};e.BGS=1.4;e.EH=2100;e.EY0=-320;e.paintRoom=()=>{};Object.assign(e.cat,{x:-790,y:220});
vm.runInContext(s.slice(s.indexOf('function roomBaseScale('),s.indexOf('function measure(){')),e);
e.resizeRoomBounds(1300,600);assert(!e.panoramaFurnitureBlocked(e.cat.x,e.cat.y),'Resizing moves a cat out of a newly active cabinet');
layout='phone';assert(!e.blockedPt(-600,310),'Desktop furniture does not affect phone room');
console.log('Desktop furniture: all five actors blocked, paths detour, no tunnelling, safe drops, phone unchanged');
