const assert=require('assert'),fs=require('fs'),vm=require('vm');
const e={Math,Image:class{}};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);
const actors=Array.from({length:5},(_,i)=>({id:['cat','ye','rabbit','socks','dongdong'][i],x:500,y:500,state:'watchTV',tvVisit:{},time:0}));
const directional={complete:true,naturalWidth:2048,naturalHeight:2048},screen=[[400,100],[600,100],[600,200],[400,200]];
const atlas=JSON.parse(fs.readFileSync('dist/assets/tv-cat-directions-v1.json','utf8'));
const tv=e.CatTV.create({actors:()=>actors,portrait:{complete:true,naturalWidth:2172},directional,geometry:()=>({screen,x:500,bottom:200,right:900}),clock:()=>0,random:()=>.5});
assert.equal(typeof tv.orientation,'function','Viewer direction must follow the screen instead of a fixed rear sprite');
for(const a of actors){
 for(const [x,sign]of [[220,1],[400,1],[500,0],[600,-1],[780,-1]]){
  a.x=x;const heading=tv.orientation(a);assert.equal(Math.sign(heading.angle),sign,'Side seats turn toward the screen');assert.equal(Math.sign(atlas.angles[heading.view]),sign,'The actual sprite yaw must match the gaze, including the inner diagonal columns');
  assert(Math.abs(heading.target.x-500)<1e-9&&Math.abs(heading.target.y-150)<1e-9,'Aim at the actual screen centre');
  assert(Math.abs(heading.angle-Math.atan2(500-a.x,a.y-heading.headHeight-150))<1e-9,'Yaw uses cat head height and screen position');
  let image=null,rotated=false;const c=new Proxy({drawImage:im=>image=im,rotate:()=>rotated=true},{get:(o,k)=>o[k]||(()=>{}),set:(o,k,v)=>(o[k]=v,true)});
  assert(tv.draw(c,a));assert.strictEqual(image,directional,'Draw an actual directional pose');assert(!rotated,'A seated cat stays upright instead of rotating the flat cutout');
 }
}
actors[0].x=220;const old=tv.orientation(actors[0]).view;screen.forEach(p=>p[0]-=600);assert(tv.orientation(actors[0]).view<old,'Changing screen geometry updates facing without reseating');
console.log('All five TV viewers aim at actual screen centre, use diagonal body views and remain upright');
