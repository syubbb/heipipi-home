const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
let setup=fs.readFileSync(path.join(__dirname,'walking-npcs.cjs'),'utf8').split('assert.equal(e.newActors.length,2)')[0];setup+=';this.engine=e;this.source=s;';const h={require,console,__dirname};vm.createContext(h);vm.runInContext(setup,h);const e=h.engine;
vm.runInContext(h.source.slice(h.source.indexOf('function reviewRoamProgress('),h.source.indexOf('let last=performance.now()')),e);
const actors=[e.npc,e.bunny,e.newActors[1]];
for(const a of [e.cat,...e.newActors])Object.assign(a,{x:60,y:780,path:[],state:'wait',trafficYield:null});
for(const [i,a]of actors.entries())Object.assign(a,{x:90,y:436+i*32,state:'walk',goal:{x:470,y:436+i*32},path:[],timer:999,wait:0,repath:0,walkTime:0});
const reached=new Set();let mostBlocked=0;
for(let tick=0;tick<1000;tick++){
 e.clock.time+=.05;e.resolveTraffic();
 for(const [i,a]of actors.entries()){
  if(reached.has(a))continue;
  if(!a.path.length)a.path=e.yeFindPath(a.x,a.y,a.goal.x,a.goal.y,a);
  const p=a.path[0];if(!p)continue;
  const dx=p.x-a.x,dy=p.y-a.y,d=Math.hypot(dx,dy),step=Math.min(d,55*.05),b={x:a.x,y:a.y,walkTime:a.walkTime};
  const next={x:a.x+dx/(d||1)*step,y:a.y+dy/(d||1)*step};
  if(e.yeCanStep(a,next,a)){a.x=next.x;a.y=next.y;a.walkTime+=.05;if(d<=step+.01)a.path.shift();}
  e.finishLocomotionTick(a,b,.05);
  if(Math.hypot(a.x-470,a.y-(436+i*32))<8)reached.add(a);
 }
 if(reached.size===3)break;
}
assert.equal(reached.size,3,'Three cats must cross the room concurrently: '+JSON.stringify(actors.map(a=>({x:a.x,y:a.y,path:a.path}))));
const a=actors[0];Object.assign(a,{state:'walk',path:[{x:a.x+20,y:a.y}],walkTime:2,stalledFor:0});e.finishLocomotionTick(a,{x:a.x,y:a.y,walkTime:1},.05);assert(a.walkingStill);assert.equal(a.walkTime,1,'Blocked animation clock freezes');
console.log('Three simultaneous room crossings and stationary-footstep guard passed');
