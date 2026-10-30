const fs=require('fs'),vm=require('vm'),assert=require('assert');const e={Math,Date,Intl};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),e);const g=e.WindowScene.panoramaLayout(215);
assert.equal(typeof g.project,'function','Room must project furniture onto separate left, back and right walls');
const vp={x:300,y:-100},cross=(a,b,p)=>(b.x-a.x)*(p.y-a.y)-(b.y-a.y)*(p.x-a.x);
for(const [a,b]of [[0,526],[1488,2048]])for(const y of [0,64,216,322])assert(Math.abs(cross(g.project(a,y),g.project(b,y),vp))<1e-5,'Side wall edges share the room vanishing point');
assert(g.project(74,322).y>300,'Left display cabinet sits along the left side wall');
assert(g.project(1959,322).y>300,'Right cabinets sit along the right side wall');
assert(Math.abs(g.project(1100,322).y-215)<1e-6,'Main window stays on the back wall');
for(const view of g.windows){assert.equal(view.panes.length,2);assert(view.panes.every(p=>p.polygon?.length===4),'Window clipping follows the projected glass corners');}
let triangles=0;const c=new Proxy({createLinearGradient:()=>({addColorStop(){}}),transform(...v){assert(v.every(Number.isFinite));triangles++;}},{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>(o[k]=v,true)});
e.WindowScene.panoramaBackdrop(c,{naturalWidth:2227,naturalHeight:706});assert(triangles>20,'Both side furniture planes are perspective rendered');
console.log('Three-wall room: correct shared perspective, furniture on both sides, projected two-pane glass');
