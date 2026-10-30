const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync('dist/outdoors.js','utf8');
class NightDate extends Date{constructor(...args){super(...(args.length?args:['2026-10-26T22:00:00+08:00']));}static now(){return +new NightDate();}}
const e={document:{getElementById(){return null}},Date:NightDate,Math,Intl,SunCalc:require('../dist/assets/suncalc.js')};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),e);vm.runInContext(code,e);
e.RoomOutdoors.weather.updated=NightDate.now();e.RoomOutdoors.weather.current={weather_code:0,cloud_cover:0};
const clips=[],fills=[];const gradient={addColorStop(){}};
const c=new Proxy({save(){},restore(){},translate(){},scale(){},beginPath(){},rect(...r){clips.push(r)},clip(){},fillRect(...r){fills.push(r)},createRadialGradient(){return gradient},createLinearGradient(){return gradient},arc(){},ellipse(){},fill(){},moveTo(){},lineTo(){},stroke(){}},{get:(o,k)=>k in o?o[k]:()=>{}});
e.RoomOutdoors.draw(c,{left:0,width:1586,floor:341.248});
function inside(r,x,y){return x>=r[0]&&x<r[0]+r[2]&&y>=r[1]&&y<r[1]+r[3];}
for(const x of [750,778,800,1000,1075,1100,1135]){assert(clips.some(r=>inside(r,x,70)),'Dynamic sky must cover glass behind sheer curtain at x='+x);assert(fills.some(r=>inside(r,x,70)),'Night sky painted at x='+x);}
console.log('Night sky covers both complete panes, including outer glass behind left/right sheer curtains');


