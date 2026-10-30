const fs=require('fs'),vm=require('vm'),assert=require('assert');
const env={Math,Date,Intl};vm.createContext(env);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),env);
const base={sun:{altitude:.8,azimuth:0},moon:{altitude:-.5,azimuth:1},illum:{fraction:.7,phase:.3},cloud:0,flags:{},current:{wind_speed_10m:10,precipitation:0},stale:false};
function render(s){const bodies=[],ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),createRadialGradient:()=>({addColorStop(){}}),scale(x,y){assert(Math.abs(x-y)<1e-8,'Window scenery must crop the view, never squash buildings or celestial bodies')},arc(){if(['#fff0c4','#f5ead3'].includes(this.fillStyle))bodies.push(this.fillStyle)}},{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>(o[k]=v,true)});env.WindowScene.draw(ctx,s,new Date('2026-10-28T12:00:00+08:00'),{left:-1000,width:2600,floor:215,panorama:true});return bodies;}
assert.deepEqual(render(base),['#fff0c4'],'The connected window view contains one sun, not a copy per glass pane');
assert.deepEqual(render({...base,sun:{altitude:-.6,azimuth:1},moon:{altitude:.7,azimuth:0}}),['#f5ead3'],'Night contains one moon');
for(const flags of [{rain:true},{drizzle:true},{rain:true,storm:true}])assert.deepEqual(render({...base,flags}),[],'Rainy windows do not show baked sunshine');
console.log('Panoramic sky: one sun, one moon, none through rain/drizzle/storm');
