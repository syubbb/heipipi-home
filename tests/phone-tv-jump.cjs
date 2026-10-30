const fs=require('fs'),vm=require('vm'),assert=require('assert'),e=require('./room-engine.cjs')(5),s=e.source;
const graphics={Math,Date,Intl};vm.createContext(graphics);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),graphics);e.WindowScene=graphics.WindowScene;e.FT=215;e.document={documentElement:{getAttribute:()=> 'phone'}};
vm.runInContext(s.slice(s.indexOf('/* ---------- behaviour ---------- */'),s.indexOf('const MOUTH_UP=')),e);
vm.runInContext(s.slice(s.indexOf('function updateChase(dt){'),s.indexOf('function updateCat(dt){')),e);
for(const a of e.actors)Object.assign(a,{x:60,y:780,path:[],state:'wait',trafficYield:null});
vm.runInContext('wand.x=650;wand.y=160;',e);
Object.assign(e.cat,{x:650,y:300,state:'chase',cs:'pounce',pose:'pounce',jt:0,jx0:650,jy0:300,jx1:650,jy1:160,z:0});
assert(!e.panoramaFurnitureBlocked(650,300));assert(!e.panoramaFurnitureBlocked(650,160));
for(let i=0;i<8;i++){e.updateChase(.05);assert(!e.panoramaFurnitureBlocked(e.cat.x,e.cat.y),'A wand pounce cannot cross the phone TV cabinet volume');}
assert.equal(e.cat.z,0,'Blocked jump stays on floor and reroutes around cabinet');
console.log('Phone TV blocks wand pounce swept path as well as walking');
