const assert=require('assert'),fs=require('fs'),vm=require('vm');const e={Math,Image:class{}};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);
const a={x:500,y:500,state:'wait',time:0,path:[]};let clock=0;const tv=e.CatTV.create({actors:()=>[a],portrait:{complete:true,naturalWidth:2172},geometry:()=>({x:650,bottom:200,right:708}),blocked:()=>false,path:(a,p)=>[{...p}],canStep:()=>true,clock:()=>clock,random:()=>.5,prepare(){},resume(a){a.state='wait';},eligible:()=>false,yieldTick:a=>{a.x-=15;a.trafficYield=null;}});
tv.startAll();for(let i=0;i<450;i++){clock+=.1;tv.tick(.1);}assert.equal(a.state,'watchTV');assert(a.tvVisit.left>10);
a.trafficYield={};tv.tick(.05);tv.tick(.05);assert(tv.has(a),'A brief yield after long seated viewing must not consume movement timeout');
for(let i=0;i<30&&a.state!=='watchTV';i++)tv.tick(.05);assert.equal(a.state,'watchTV','Viewer returns to original seat after yielding');
console.log('Long seated viewing does not consume a later traffic-yield return travel budget');
