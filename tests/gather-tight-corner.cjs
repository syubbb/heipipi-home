const assert=require('assert'),e=require('./room-engine.cjs')(3);
e.startGather();for(const a of e.actors)Object.assign(a,{x:a.gatherSlot.x,y:a.gatherSlot.y,state:'gatherSit',path:[],facilityCare:null});
const socks=e.newActors.find(a=>a.id==='socks');Object.assign(socks,{x:205.1402764412059,y:472.93148761921043,state:'walk'});
e.updateGather(socks,.05);const path=socks.path;
assert(path.length,'Approach from the reachable side of the seated row instead of repeatedly selecting a blocked opposite-side cell');
let from=socks;for(const to of path){assert(e.companionRouteClear(from,to,socks),'Every chosen edge must clear the actual body footprints');from=to;}
console.log('Tight gathering corner produces a body-clear detour instead of an invalid grid shortcut');
