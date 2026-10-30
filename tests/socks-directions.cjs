const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
let setup=fs.readFileSync(path.join(__dirname,'walking-npcs.cjs'),'utf8').split('assert.equal(e.newActors.length,2)')[0];setup+=';this.engine=e;';const host={require,console,__dirname};vm.createContext(host);vm.runInContext(setup,host);const e=host.engine,a=e.newActors[0];
for(const other of [e.cat,e.npc,e.bunny,...e.newActors])Object.assign(other,{x:-40,y:780,path:[],trafficYield:null});
function checkRoute(start,target){Object.assign(a,start);const route=e.yeFindPath(start.x,start.y,target.x,target.y,a);assert(route.length,'Route exists');let prev=start;for(const p of route){const dx=Math.abs(p.x-prev.x),dy=Math.abs(p.y-prev.y);assert(dy<.01||dx>=dy*.6-1e-6,'Socks route cannot move vertically: '+JSON.stringify({prev,p}));assert(e.yeLineClear(prev,p,a),'Route still avoids objects');prev=p;}assert(Math.hypot(prev.x-target.x,prev.y-target.y)<3,'Reaches exact destination');return route;}
checkRoute({x:80,y:390},{x:80,y:530});checkRoute({x:80,y:530},{x:80,y:390});checkRoute({x:100,y:390},{x:190,y:390});checkRoute({x:100,y:390},{x:170,y:470});
console.log('Socks uses horizontal/diagonal obstacle-safe routes, including aligned destinations');

for(const mode of ['roam','gather','yield']){
 // Yielding has a 3.5s safety deadline, so test a nearby passing place rather than a room crossing.
 const target={x:80,y:mode==='yield'?450:530};
 e.stopGather();Object.assign(a,{x:80,y:390,state:'walk',walkTime:0,wait:0,repath:1,time:0,restDue:1e9,peeDue:1e9,scratchDue:1e9,trafficYield:null,gatherSlot:null,speed:33,goal:target});a.path=checkRoute(a,a.goal);
 if(mode==='gather'){e.startGather();Object.assign(a,{x:80,y:390,gatherSlot:target,path:e.yeFindPath(80,390,target.x,target.y,a),gatherRepath:1});}
 if(mode==='yield')a.trafficYield={blocker:e.cat,corridor:target,target,path:a.path,repath:1,holdUntil:1e9};
 for(let i=0;i<1200;i++){const before={x:a.x,y:a.y};e.clock.time+=.05;if(mode==='gather')e.updateGather(a,.05);else if(mode==='yield')e.updateTrafficYield(a,.05);else e.updateWalkingNpc(a,.05);const dx=Math.abs(a.x-before.x),dy=Math.abs(a.y-before.y);if(a.state!=='gatherSit')assert(dy<1e-6||dx+1e-6>=dy*.6,mode+': each actual movement stays horizontal/diagonal');if(Math.hypot(a.x-target.x,a.y-target.y)<3)break;}
 assert(Math.hypot(a.x-target.x,a.y-target.y)<3,mode+': reaches aligned destination without getting stuck');
}
console.log('Actual roaming, gathering and yielding steps remain horizontal/diagonal');
