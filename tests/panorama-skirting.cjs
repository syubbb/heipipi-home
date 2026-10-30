const fs=require('fs'),vm=require('vm'),assert=require('assert'),{createCanvas,loadImage}=require('@napi-rs/canvas');
(async()=>{const e={Math,Date,Intl};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),e);const w=e.WindowScene;
assert.equal(typeof w.panoramaSkirting,'function','Skirting must wrap both new outer returns and both inner room corners');
const trim=w.panoramaSkirting(-2500,5600,215);assert.equal(trim.segments.length,5);assert.deepEqual(Array.from(trim.corners,p=>p.base.x),[-1000,-450,1050,1600]);
for(let i=1;i<trim.segments.length;i++){assert.deepEqual(trim.segments[i-1].b.base,trim.segments[i].a.base,'Skirting meets at the floor');assert.deepEqual(trim.segments[i-1].b.top,trim.segments[i].a.top,'Top cap has no gap at the turn');}
assert(trim.corners[0].base.y-trim.corners[0].top.y>trim.corners[1].base.y-trim.corners[1].top.y,'Profile height follows perspective');
const im=await loadImage('dist/assets/home-panorama-v4.jpg'),canvas=createCanvas(2800,700),c=canvas.getContext('2d');c.scale(.5,.5);c.translate(2500,0);w.panoramaBackdrop(c,im,{left:-2500,width:5600,bottom:1400});
const sample=(x,y)=>Array.from(c.getImageData(Math.round((x+2500)*.5),Math.round(y*.5),1,1).data).slice(0,3),sum=p=>p.reduce((a,b)=>a+b,0),turn=trim.corners[0];
assert(sum(sample(-1800,turn.base.y-38))>sum(sample(-1800,turn.base.y-12))+40,'Visible wood skirting extends along the outer return wall');
assert(sample(-1015,180).reduce((n,v,i)=>n+Math.abs(v-sample(-985,180)[i]),0)>15,'Outer wall turn has distinct lighting and edge detail');
console.log('Five continuous wood skirting faces, four aligned mitred corners, perspective profile and visible outer-return detail');})();
