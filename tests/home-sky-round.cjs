const fs=require('fs'),vm=require('vm'),assert=require('assert');
const e={Math,Date,Intl};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),e);
for(const home of [{x:215,y:30,width:280,height:290},{x:0,y:30,width:620,height:290}])for(const night of [false,true]){
 let sx=1,sy=1,stack=[],bodies=0;const ctx=new Proxy({save(){stack.push([sx,sy]);},restore(){[sx,sy]=stack.pop();},scale(x,y){sx*=x;sy*=y;},createLinearGradient:()=>({addColorStop(){}}),createRadialGradient:()=>({addColorStop(){}}),arc(){if(['#fff0c4','#f5ead3'].includes(this.fillStyle)){assert(Math.abs(sx-sy)<1e-9,'Sun/moon must remain round in phone and desktop windows');bodies++;}}},{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>(o[k]=v,true)});
 const s={sun:{altitude:night?-.6:.8,azimuth:0},moon:{altitude:night?.7:-.5,azimuth:0},illum:{fraction:.7,phase:.3},cloud:0,flags:{},current:{},stale:false};
 e.WindowScene.draw(ctx,s,new Date('2026-10-30T12:00:00+08:00'),{home});assert.equal(bodies,1);assert.equal(stack.length,0);
}
console.log('Phone/desktop daylight and moonlight preserve circular celestial bodies');
