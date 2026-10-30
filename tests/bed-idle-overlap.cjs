const assert=require('assert'),fs=require('fs'),vm=require('vm');
const env={Math};vm.createContext(env);
vm.runInContext(fs.readFileSync('dist/room-layout.js','utf8'),env);
const plan=env.RoomLayout.createMobileV130();
const s1=plan.bed.spots.find(s=>s.id==='S1'),s4=plan.bed.spots.find(s=>s.id==='S4');
assert.equal(s1.pose,'lie');assert.equal(s4.pose,'lie');
assert.equal(s1.x,400);assert.equal(s1.y,388);assert.equal(s4.x,415);assert.equal(s4.y,478);
const room=fs.readFileSync('dist/room.js','utf8'),from=room.indexOf('const CAT_SIZE_METRICS=')+'const CAT_SIZE_METRICS='.length,metrics=JSON.parse(room.slice(from,room.indexOf('\n',from)).replace(/;\r?$/,''));
const area=5500,lie=metrics.lie,k=Math.sqrt(area/lie.area);
function pngSize(file){const b=fs.readFileSync(file);assert.equal(b.toString('ascii',1,4),'PNG');return {w:b.readUInt32BE(16),h:b.readUInt32BE(20)};}
const ye=pngSize('dist/assets/ye_lie_0.png');
const yeScale=.43,yeAx=240,yeBy=350;
function box(kind,t){
 const breath=1+Math.sin(t*1.4)*.012,z=plan.bedTopY;
 if(kind==='s1'){const sy=k*breath,foot=s1.y-z;return {x0:s1.x-(lie.cx-lie.x0)*k,x1:s1.x+(lie.x1-lie.cx)*k,y0:foot-(lie.y1-lie.y0)*sy,y1:foot};}
 const sy=yeScale*breath,foot=s4.y-z;return {x0:s4.x-yeAx*yeScale,x1:s4.x+(ye.w-yeAx)*yeScale,y0:foot-yeBy*sy,y1:foot};
}
const hits=[];
for(let frame=0,t=0;t<=300;t+=0.1,frame++){
 const a=box('s1',t),b=box('s4',t);
 const ox=Math.min(a.x1,b.x1)-Math.max(a.x0,b.x0),oy=Math.min(a.y1,b.y1)-Math.max(a.y0,b.y0);
 if(ox>0&&oy>0)hits.push({t:+t.toFixed(1),frame,ox:+ox.toFixed(2),oy:+oy.toFixed(2)});
}
const report={spots:{S1:s1,S4:s4},seconds:300,step:0.1,overlaps:hits.length,first:hits[0]||null,worst:hits.reduce((m,h)=>!m||h.ox*h.oy>m.ox*m.oy?h:m,null)};
fs.writeFileSync('/tmp/bed-idle-overlap.json',JSON.stringify(report));
console.log('S1/S4 idle overlap over 300s: '+hits.length+' samples'+(hits[0]?' first t='+hits[0].t+' frame='+hits[0].frame+' ox='+hits[0].ox+' oy='+hits[0].oy:' none'));
assert.deepEqual([s1.x,s1.y,s4.x,s4.y],[400,388,415,478],'Frozen v6 spots were not moved');
