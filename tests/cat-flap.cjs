const assert=require('assert'),fs=require('fs'),vm=require('vm');
const env={Math};vm.createContext(env);
vm.runInContext(fs.readFileSync('dist/room-layout.js','utf8'),env);
vm.runInContext(fs.readFileSync('dist/cat-flap.js','utf8'),env);
const v130=env.RoomLayout.createMobileV130();
const desk=env.RoomLayout.create({desktop:true,left:-800,width:2200});
const old=env.RoomLayout.createMobileV129();
assert.equal(desk.catFlap,undefined);assert.equal(old.catFlap,undefined);
assert.equal(env.CatFlap.enabled(desk),false);assert.equal(env.CatFlap.enabled(old),false);assert.equal(env.CatFlap.enabled(v130),true);
assert.equal(env.CatFlap.begin({},{id:'ele'},desk),false);
assert.deepEqual([v130.catFlap.inner.w,v130.catFlap.inner.h],[52,55]);
for(const [w,h] of [[375,667],[390,844],[412,915]]){
 const scale=Math.min(w/900,h/1150),css=env.CatFlap.hitCss(v130,scale);
 assert(css.w>=44&&css.h>=44,w+'x'+h+' hit is '+css.w.toFixed(1)+'px');
}
const store=new Map();
env.localStorage={getItem:k=>store.has(k)?store.get(k):null,setItem:(k,v)=>store.set(k,String(v)),removeItem:k=>store.delete(k)};
const other={id:'ye',x:400,y:700,pose:'sit'};
function elephant(){return {id:'ele',x:230,y:720,z:0,carried:false,hidden:false,size:72};}
function catAt(){return {id:'cat',x:300,y:760,z:0,face:1,state:'idle',pose:'sit',carry:null,hidden:false,scale:1};}
const cat=catAt(),toy=elephant();
assert(env.CatFlap.begin(cat,toy,v130,{hold:.3}));
assert.equal(other.x,400,'other cats are not moved when the trip starts');
const seen=[];let guard=0,done=false;
while(!done&&guard++<800){
 const phase=cat.flapTrip&&cat.flapTrip.phase;
 if(phase&&seen[seen.length-1]!==phase)seen.push(phase);
 if(phase==='toDoor'){assert.equal(cat.pose,'flapDuck');assert.equal(cat.carry,toy);assert.equal(toy.flapClip,false);assert.equal(cat.scale,1);}
 if(phase==='push'){assert.equal(cat.pose,'flapPush');assert.equal(cat.carry,null);assert.equal(toy.flapClip,true);assert.equal(toy.flapH,46);assert.equal(toy.hidden,false);}
 if(phase==='hidden'){assert.equal(cat.hidden,true);assert.equal(toy.hidden,true);assert.equal(toy.carried,true);assert(store.get('heipipi-flap'),'offstage elephant is persisted');}
 const next=env.CatFlap.step(cat,v130,.05);
 if(next==='done')done=true;
 assert.notEqual(next,'lost');
}
assert(done,'round trip completes');
assert(seen.indexOf('push')>=0&&seen.indexOf('hidden')>seen.indexOf('push')&&seen.indexOf('toRoom')>seen.indexOf('hidden'));
assert.equal(cat.flapTrip,null);assert.equal(cat.hidden,false);assert.equal(toy.hidden,false);assert.equal(toy.carried,false);
assert(toy.x>v130.left&&toy.x<v130.right&&toy.y>v130.floor&&toy.y<v130.floorBottom,'elephant is back in the room');
assert.equal(store.get('heipipi-flap'),undefined);
assert.equal(other.pose,'sit');
const mid=catAt(),midToy=elephant();
assert(env.CatFlap.begin(mid,midToy,v130,{hold:2}));
let hid=false;
for(let i=0;i<200&&!hid;i++){env.CatFlap.step(mid,v130,.05);hid=mid.flapTrip&&mid.flapTrip.phase==='hidden';}
assert(hid);assert(store.get('heipipi-flap'));
const back=catAt();env.CatFlap.restore(back,[midToy],v130);
assert.equal(back.carry,midToy);assert.equal(midToy.carried,true);assert.equal(midToy.hidden,false);
assert.equal(back.x,v130.catFlap.exit.x);assert.equal(back.hidden,false);
assert.equal(env.CatFlap.POSE_ART.duckEle.key,'black_door_gait');assert.equal(env.CatFlap.POSE_ART.push.key,'black_door_gait');
assert.equal(env.CatFlap.POSE_ART.duckEle.frame,0);assert.equal(env.CatFlap.POSE_ART.push.frame,0);
const scales=new Set();
for(let i=0;i<5;i++)scales.add(env.CatFlap.poseScale());
assert.equal(scales.size,1,'pose scale does not jump');
console.log('Cat flap round trip returns the elephant, keeps the hit area, and leaves desktop alone');
