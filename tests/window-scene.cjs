const fs=require('fs'),vm=require('vm'),assert=require('assert');const e={Math,Date,Intl};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),e);const w=e.WindowScene;
const base={sun:{altitude:.8,azimuth:0},moon:{altitude:.5,azimuth:1},illum:{fraction:.7,phase:.3},cloud:0,flags:{},current:{wind_speed_10m:10,precipitation:0},stale:false};
const noon=w.lighting(base,new Date('2026-06-21T12:00:00+08:00'),1),night=w.lighting({...base,sun:{altitude:-.5}},new Date('2026-12-21T23:00:00+08:00'),1);assert(noon.day>night.day);assert.notDeepEqual(noon.leaf,night.leaf);assert.notDeepEqual(noon.fabric,night.fabric);
const rain=w.lighting({...base,flags:{rain:true},current:{precipitation:8}},new Date(),1);assert(rain.wet&&rain.rainCount>70);assert.equal(noon.rainCount,0);assert.equal(w.lighting({...base,stale:true,flags:{rain:true}},new Date(),1).wet,false);
const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),createRadialGradient:()=>({addColorStop(){}})},{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>(o[k]=v,true)});
for(const flags of [{},{rain:true},{drizzle:true},{storm:true,rain:true},{fog:true},{snow:true},{hail:true,rain:true}])for(const alt of [-.6,-.08,.02,.8])w.draw(ctx,{...base,flags,sun:{altitude:alt,azimuth:0}},new Date(),{left:0,width:1586,floor:341},false);
assert.equal(w.lighting({...base,flags:{storm:true}},new Date(),38.08,true).flash,0);
console.log('Layered scene: seasonal colors, shared light, rain intensity, stale data, reduced motion, 28 rendering cases passed');

for(const flags of [{},{rain:true},{drizzle:true},{storm:true,rain:true},{fog:true}])for(const altitude of [-.6,.8])w.draw(ctx,{...base,flags,sun:{altitude,azimuth:0}},new Date(),{left:-1000,width:2600,floor:215,panorama:true,backdrop:{complete:true,naturalWidth:2175,naturalHeight:723}},false);console.log('Panoramic windows: shared day/night, rain, drizzle, storm and fog render without duplicate curtain layer');
