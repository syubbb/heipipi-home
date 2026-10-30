const assert=require('assert'),e=require('./room-engine.cjs')(47),a=e.newActors.find(a=>a.id==='socks');
for(const b of e.actors)Object.assign(b,{x:90,y:760});
const pad=e.scratchBoardLayout()[0];Object.assign(a,{x:pad.x+65.367,y:pad.y+10.88,scratchBoard:null});
const path=e.yeFindPath(a.x,a.y,165.7,447,a);assert(path.length,'An interrupted right-side scratch visit has a route out to gathering');
let from={x:a.x,y:a.y};for(const to of path){assert(e.companionRouteClear(from,to,a),'Every exit segment respects Socks walking directions and pad collisions');from=to;}
console.log('Narrow-room scratch interruption leaves a usable route to gathering');
