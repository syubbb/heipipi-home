const fs=require('fs'),vm=require('vm'),assert=require('assert'),make=require('./room-engine.cjs');
const e=make(47),graphics={Math,Date,Intl};vm.createContext(graphics);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),graphics);
e.document={documentElement:{getAttribute:()=> 'phone'}};e.WindowScene=graphics.WindowScene;e.FT=215;
Object.assign(e,{cv:{addEventListener(){}},setTimeout(){return 1},clearTimeout(){},releaseGestureInteractions(){},ptr:null,pet:{on:false}});
vm.runInContext(e.source.slice(e.source.indexOf('/* Lift controls */'),e.source.indexOf('/* End lift controls */')),e);
for(const [i,a]of e.actors.entries())Object.assign(a,{x:[110,230,350,460,300][i],y:i===4?425:390,time:0,timer:.1,state:'wait',path:[],trafficYield:null,facilityCare:null,gatherSlot:null,walkTime:0,wait:0});e.cat.state='idle';
const goals=[{x:480,y:390},{x:100,y:610},{x:420,y:780},{x:90,y:390}];let commands=0,arrivals=0,next=0,collisions=0;
for(let i=0;i<1800;i++){
 const t=i*.05;if(t>=next){const p=goals[commands++%goals.length];Object.assign(e.cat,{state:'walk',pose:'walk',walkGoal:p,path:e.findPath(e.cat.x,e.cat.y,p.x,p.y),speed:100,then:null});next=t+15;}
 const before=e.actors.map(a=>({x:a.x,y:a.y,walkTime:a.walkTime}));e.clock.time+=.05;e.updatePuddles(.05);e.resolveTraffic();e.cat.time+=.05;
 if(e.cat.state==='walk'&&e.followPath(.05)){e.cat.state='idle';arrivals++;}e.updateYe(.05);e.updateRabbit(.05);e.newActors.forEach(a=>e.updateWalkingNpc(a,.05));
 e.actors.forEach((a,j)=>{e.finishLocomotionTick(a,before[j],.05);if(e.panoramaFurnitureBlocked(a.x,a.y))collisions++;assert(Number.isFinite(a.x)&&Number.isFinite(a.y));});
}
assert.equal(collisions,0,'All five cats stay clear of the physical phone TV');assert(arrivals>=4,'Phone commands finish with new television and relocated scratch boards');
console.log('90-second phone TV flow: 5 cats, zero furniture penetration, '+arrivals+' player arrivals');
