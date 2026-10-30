const assert=require('assert'),fs=require('fs'),vm=require('vm');
assert(fs.existsSync('dist/door-gait.js'),'A front/back gait must replace side-facing door sliding');
const e={Math};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/door-gait.js','utf8'),e);
for(const id of ['cat','dongdong']){
 const file='dist/assets/litter-walk-'+(id==='cat'?'black':'dong')+'-v1.png',b=fs.readFileSync(file),im={complete:true,naturalWidth:b.readUInt32BE(16),naturalHeight:b.readUInt32BE(20)};
 for(const phase of ['enterDoor','exitDoor']){
  const calls=[],c={save(){},restore(){},drawImage(...a){calls.push(a);}},a={id,x:630,y:1100,pose:'walk',doorGaitTime:0,facilityCare:{door:true,phase}},indices=new Set();
  for(let t=0;t<1;t+=.05){a.doorGaitTime=t;const f=e.DoorGait.frame(a);indices.add(f.index);assert(f.y>=0&&f.x>=0&&f.x+f.width<=im.naturalWidth&&f.y+f.height<=im.naturalHeight);assert(e.DoorGait.draw(c,a,im));const q=calls.at(-1);assert(q[7]<110,'Narrow front/back silhouette fits 124-unit opening');assert(Math.abs(q[6]+q[8]-a.y)<2,'Paws stay anchored to floor');}
  assert.equal(indices.size,4,'Four actual paw phases advance while moving');
  assert([...indices].every(i=>phase==='enterDoor'?i<4:i>=4),'Away on entry, front on exit');
 }
}
console.log('Door walking uses four anchored stride phases in the correct front/back direction and fits aperture');
