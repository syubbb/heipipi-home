const assert=require('assert'),fs=require('fs'),vm=require('vm');
const env={Math,lerp:(a,b,t)=>a+(b-a)*t};vm.createContext(env);
vm.runInContext(fs.readFileSync('dist/room-layout.js','utf8'),env);
const plan=env.RoomLayout.createMobileV130();
env.roomPlan=plan;env.cat={x:240,y:524,z:0,face:1,state:'idle',pose:'sit',act:null,scale:1};
env.ye={id:'ye'};env.rabbit={id:'rabbit'};env.extraNPCs=[];env.catPairCanStep=()=>true;env.yeTryYield=()=>{};
const src=fs.readFileSync('dist/room.js','utf8');
vm.runInContext(src.slice(src.indexOf('function actorHop('),src.indexOf('/* End bed hops */')),env);
assert(plan.bed.spots.every(s=>s.z===plan.bedTopY),'Every rest spot uses bedTopY');
assert.equal(plan.bedTopY,160);assert.equal(plan.bed.walkway,439);
const side=plan.bed.spots.filter(s=>['S1','S2','S3'].includes(s.id)).sort((a,b)=>a.x-b.x);
for(let i=1;i<side.length;i++)assert(side[i].x-side[i-1].x>=120,'Back-row spots are at least 120 apart');
const frameBottom=plan.window.y+plan.window.height;
for(const s of plan.bed.spots)assert(s.y-110>frameBottom,s.id+' head stays below the window');
function landings(actor){
 const seen=[];
 for(let i=0;i<500&&(actor.state==='hop'||seen.length===0);i++){
  if(actor.hop){const z=actor.hop.z1;if(seen[seen.length-1]!==z)seen.push(z);}
  env.updateActorHop(actor,0.05);
  assert.equal(actor.scale,1);
 }
 return seen;
}
assert(env.startJ1(env.cat));
assert.deepEqual(landings(env.cat),[60,120,160]);
const land=plan.jumps.j1.at(-1);
assert.equal(env.cat.x,land.x);assert.equal(env.cat.y,land.y);assert.equal(env.cat.z,160);
assert.equal(land.y,plan.bed.walkway);assert.notEqual(land.y,plan.bed.spots.find(s=>s.id==='S4').y);
assert.equal(env.cat.state,'bedWalk');assert.notEqual(env.cat.bedSpot.id,'S4');
const reserved=env.cat.bedSpot.id;let leftWalkway=false;
for(let i=0;i<400&&env.cat.state==='bedWalk';i++){
 if(Math.abs(env.cat.x-env.cat.bedGoal.x)>1)assert.equal(env.cat.y,plan.bed.walkway);
 else if(env.cat.y!==plan.bed.walkway)leftWalkway=true;
 env.updateBedWalk(env.cat,0.05);assert.equal(env.cat.z,160);assert.equal(env.cat.scale,1);
}
assert.equal(env.cat.state,'bedRest');assert.equal(env.cat.bedSpot.id,reserved);
assert.equal(env.cat.pose,env.cat.bedSpot.pose);assert.equal(env.cat.x,env.cat.bedSpot.x);assert.equal(env.cat.y,env.cat.bedSpot.y);
assert(leftWalkway||env.cat.bedSpot.y===plan.bed.walkway);
env.cat.bedSpot=null;env.cat.surface=null;env.cat.x=100;env.cat.y=700;env.cat.z=0;env.cat.state='idle';
assert(env.startJ2(env.cat));
const j2=landings(env.cat);
assert.equal(j2[j2.length-1],160);assert.equal(env.cat.z,160);assert.equal(env.cat.surface,'bed');
assert.equal(env.cat.pose,env.cat.bedSpot.pose);assert.notEqual(env.cat.bedSpot.id,'S4');
function fresh(id){return {id,x:200,y:700,z:0,face:1,state:'idle',pose:'sit',scale:1};}
const cast=[fresh('cat'),fresh('ye'),fresh('rabbit'),fresh('socks'),fresh('dongdong')];
env.cat=cast[0];env.ye=cast[1];env.rabbit=cast[2];env.extraNPCs=cast.slice(3);
const taken=[];
for(const actor of cast){assert(env.requestBed(actor),actor.id+' finds a bed');assert.notEqual(actor.state,'bedQueue');taken.push(actor.bedSpot.id);if(actor.state==='hop')landings(actor);while(actor.state==='bedWalk')env.updateBedWalk(actor,0.05);assert.equal(actor.pose,actor.bedSpot.pose,actor.id+' uses the spot pose');assert.equal(actor.state,'bedRest');}
assert.equal(taken.at(-1),'S4','S4 is filled last');
assert.equal(new Set(taken).size,5);
assert.notEqual(cast.find(a=>a.id==='rabbit').bedSpot.id,'S3','A pose that does not fit moves to the next free spot');
const extra=fresh('extra');env.extraNPCs.push(extra);
assert.equal(env.requestBed(extra),false);assert.equal(extra.state,'bedQueue');
assert(extra.x<plan.petStep.x);assert(!(extra.x>plan.bed.x&&extra.x<plan.bed.x+plan.bed.w&&extra.y>plan.bed.y&&extra.y<plan.bed.front));
for(const a of cast){a.bedSpot=null;a.j1Landing=false;a.state='idle';a.x=200;a.y=700;}
extra.bedSpot=null;env.extraNPCs=[cast[3],cast[4]];
assert(env.requestBed(cast[0]));assert.equal(cast[0].j1Landing,true);
const bypass=fresh('ye');bypass.x=200;bypass.y=700;env.ye=bypass;
assert(env.requestBed(bypass));assert.equal(bypass.j1Landing,false,'A busy landing sends the next cat to J2');
assert.equal(bypass.state,'hop');
cast[0].bedSpot=null;cast[0].j1Landing=false;cast[0].state='idle';bypass.bedSpot=null;bypass.state='idle';
const resident=fresh('cat');resident.bedSpot=plan.bed.spots.find(s=>s.id==='S4');resident.state='bedRest';
env.cat=resident;env.extraNPCs=[];env.ye=fresh('ye');env.ye.x=200;env.ye.y=700;env.rabbit=fresh('rabbit');
assert(env.requestBed(env.ye));assert.equal(env.ye.j1Landing,false,'An occupied S4 sends the next cat to J2');
console.log('J1 lands on the walkway, S4 is last, and a sixth cat waits beside the step');
