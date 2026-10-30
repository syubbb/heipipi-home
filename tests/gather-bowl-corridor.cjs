const assert=require('assert'),vm=require('vm'),e=require('./room-engine.cjs')(47);vm.runInContext('gather.active=true;',e);
const positions=[[398.85966430958456,730.6725500556968,360.983125],[424.973125,447,424.973125],[181.656875,447,181.656875],[303.065625,447,303.065625],[432.45728516757015,706,250.140875]];
e.actors.forEach((a,i)=>Object.assign(a,{x:positions[i][0],y:positions[i][1],gatherSlot:{x:positions[i][2],y:447},gatherSide:1,state:i===0||i===4?'walk':'gatherSit',facilityCare:null,path:[],goal:{x:positions[i][2],y:447}}));
assert(e.yeLineClear({x:390,y:730},{x:402,y:742},e.cat),'A real diagonal corridor exists between water basin and another cat');
const target={x:e.cat.gatherSlot.x,y:478},path=e.yeFindPath(e.cat.x,e.cat.y,target.x,target.y,e.cat);
assert(path.length,'Grid search must accept a collision-clear diagonal even when its axis neighbors are occupied');
let from=e.cat;for(const to of path){assert(e.yeLineClear(from,to,e.cat));from=to;}assert(Math.hypot(from.x-target.x,from.y-target.y)<3);
console.log('Gathering can escape the bowl/cat diagonal corridor without cutting through either obstacle');
