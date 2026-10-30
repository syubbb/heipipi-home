const assert=require('assert'),fs=require('fs'),vm=require('vm');const e={Math,Image:class{}};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);
const actors=['cat','ye','rabbit','socks','dongdong'].map(id=>({id,x:200,y:700,state:'floorRest',pose:'sleep',time:0,path:[],walkTime:0}));let calls=0;
const tv=e.CatTV.create({actors:()=>actors,portrait:{complete:true,naturalWidth:2172},geometry:()=>({x:650,bottom:200,right:708}),blocked:()=>false,path:(a,p)=>[{...p}],canStep:()=>true,clock:()=>0,random:()=>.5,prepare(){},resume(a){a.state='wait';},eligible:()=>false,walkStep:(a,dt,speed,distance)=>{calls++;return {step:Math.min(distance,speed*dt),time:a.walkTime+dt*speed/84};},yieldTick:a=>{a.x+=1;a.pose='sleep';a.trafficYield=null;}});
tv.startAll();for(const a of actors)a.pose='sit';const from=actors.map(a=>({x:a.x,y:a.y}));tv.tick(.05);
assert.equal(calls,5,'TV travel uses native gait stepping for each cat');
for(const [i,a]of actors.entries()){assert.equal(a.pose,'walk','Moving after a pause must reset the render pose');assert.equal(a.state,'walk');assert(a.walkTime>0);assert(Math.hypot(a.x-from[i].x,a.y-from[i].y)<=55*.05+.001,'Slow walk has bounded displacement');}
actors[0].trafficYield={};tv.tick(.05);assert.equal(actors[0].pose,'walk','Actual yield movement cannot carry a seated pose');
console.log('Five slow native gait clocks, resumed walking pose and traffic-yield animation passed');
