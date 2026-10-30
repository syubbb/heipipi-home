const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
let setup=fs.readFileSync(path.join(__dirname,'walking-npcs.cjs'),'utf8').split('assert.equal(e.newActors.length,2)')[0];
setup+=';this.engine=e;';const host={require,console,__dirname};vm.createContext(host);vm.runInContext(setup,host);const e=host.engine,a=e.newActors[0];
// Isolate locomotion from scheduling, while exercising each production movement path.
e.updateCompanionMood=()=>{};e.yeCanStep=()=>true;e.yeLineClear=()=>true;
function prepare(){e.stopGather();Object.assign(a,{x:100,y:750,walkTime:0,time:0,state:'walk',goal:{x:400,y:750},path:[{x:400,y:750}],speed:80,wait:0,repath:1,trafficYield:null,gatherSlot:null});}
function check(label,run,maxSpeed){prepare();const x=a.x,t=a.walkTime;run();const distance=Math.hypot(a.x-x,a.y-750),seconds=a.walkTime-t;assert(distance>0,label+' moves');assert(distance/.1<=maxSpeed+.0001,label+' must use relaxed walking speed, got '+distance/.1);assert(Math.abs(distance/seconds-84)<.01,label+' displacement must follow measured 84 world units per source second; got '+distance/seconds);console.log(label+': '+(distance/.1).toFixed(1)+' units/s, stride matched');}
check('roaming',()=>e.updateWalkingNpc(a,.1),40);
check('gather',()=>{e.startGather();a.x=100;a.y=750;a.walkTime=0;a.gatherSlot={x:400,y:750};a.path=[a.gatherSlot];a.gatherRepath=1;e.updateGather(a,.1);},44);
check('yield',()=>{a.trafficYield={blocker:e.cat,corridor:{x:500,y:750},path:[{x:400,y:750}],target:{x:400,y:750},repath:1,holdUntil:99};e.updateTrafficYield(a,.1);},48);
prepare();a.path=[{x:101,y:750}];e.updateWalkingNpc(a,.1);assert(Math.abs(a.walkTime-1/84)<.0001,'Short final waypoint uses actual distance, not full frame time');
prepare();e.yeCanStep=()=>false;e.updateWalkingNpc(a,.1);assert.equal(a.walkTime,0,'Blocked cat does not animate walking');
console.log('Short waypoint and blocked animation: passed');
