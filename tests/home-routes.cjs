const assert=require('assert'),fs=require('fs'),vm=require('vm'),make=require('./room-engine.cjs');
for(const desktop of [false,true]){
 const e=make(92);vm.runInContext(fs.readFileSync('dist/room-layout.js','utf8'),e);
 e.document={documentElement:{getAttribute:()=>desktop?'desktop':'phone'}};e.H=1220;e.FT=360;e.EX0=desktop?-800:-150;e.EW=desktop?2200:900;
 assert.equal(typeof e.applyHomeLayout,'function','Furniture renderer and collision share a responsive apply step');
 e.applyHomeLayout();vm.runInContext('this.plan=roomPlan;this.targets=[SUN,BOX_OUT,{x:FAVOURITE_MAT.x,y:FAVOURITE_MAT.y+26},LIT_OUT];',e);
 for(const a of e.actors)Object.assign(a,{x:e.EX0-300,y:800,path:[],state:'wait',facilityCare:null,gatherSlot:null,trafficYield:null});
 for(const a of e.actors){
  Object.assign(a,{x:e.plan.mainAisle.x,y:900});
  for(const p of e.targets){const path=e.yeFindPath(a.x,a.y,p.x,p.y,a);assert(path.length,`${desktop?'desktop':'phone'} ${a.id||'black/ye'} must reach ${JSON.stringify(p)}`);assert(Math.hypot(path.at(-1).x-p.x,path.at(-1).y-p.y)<4,'Actual target reached');}
  a.x=e.EX0-300;
 }
 assert.equal(e.plan.bowl.y,e.plan.water.y);
}
console.log('All real cat route planners reach approved lookout, box, mat and litter approach on both layouts');
