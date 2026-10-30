const assert=require('assert'),fs=require('fs'),vm=require('vm');
assert(fs.existsSync('dist/room-layout.js'),'Approved responsive room geometry must exist');
const e={Math};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/room-layout.js','utf8'),e);
for(const desktop of [false,true]){
 const p=e.RoomLayout.create({desktop,left:desktop?-800:-150,width:desktop?2200:900});
 assert.equal(p.box.x,p.mat.x,'Original rug follows centered box');
 assert(p.mat.y>p.box.front&&p.mat.y-p.mat.height/2>=p.box.front,'Rug clears box front');
 assert.equal(p.bowl.y,p.water.y);assert(p.water.x-p.bowl.x>=150&&p.water.x-p.bowl.x<=200,'Dining pair a little wider, still adjacent');
 assert.equal((p.bowl.x+p.water.x)/2,p.left+p.width/2,'Dining pair centers on the room');assert(p.floorBottom-p.bowl.y>=90&&p.floorBottom-p.bowl.y<=130,'Leave bottom approach space');for(const a of [p.bowl,p.water])assert(Math.hypot(p.litter.x-a.x,p.litter.front-a.y)>200,'Dining leaves the litter doorway clear');
 assert(p.television.screen.every(q=>q[0]<p.window.x),'Television is on solid wall left of window');
 const s=p.television.screen;assert.equal(s[0][1],s[1][1]);assert.equal(s[0][0],s[3][0]);
 assert(Math.abs((s[1][0]-s[0][0])/(s[3][1]-s[0][1])-16/9)<1e-9,'Upright front screen keeps video ratio');
 assert.equal(p.tvSeats.length,8);assert(p.tvSeats.slice(0,5).every(q=>q.y-127>s[2][1]),'Viewers clear screen');
 for(let i=0;i<5;i++)for(let j=0;j<i;j++){const a=p.tvSeats[i],b=p.tvSeats[j];assert(((a.x-b.x)/106)**2+((a.y-b.y)/26)**2>1.3,'Spaced seats retain solid cat footprints');}
 assert.equal(p.scratch.length,2);assert(Math.abs(p.scratch[0].y-p.scratch[1].y)>=150,'Each scratching station has its own approach');
 assert(p.lookout.x<p.box.x-110,'Window has an empty lookout landing');
 assert(p.mainAisle.width>=230,'Continuous two-cat aisle');
 assert(!p.furniture.some(f=>f.id==='left-display'),'No lower-left shelving');
}
console.log('Approved desktop/phone zones, wider adjacent dining, square TV and two-cat clearance passed');
