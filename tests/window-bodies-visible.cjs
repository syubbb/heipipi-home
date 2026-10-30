const assert=require('assert'),fs=require('fs'),vm=require('vm');
const SunCalc=require('../dist/assets/suncalc.js');
const env={Math,Date,Intl};vm.createContext(env);
vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),env);
vm.runInContext(fs.readFileSync('dist/room-layout.js','utf8'),env);
const lat=25.135,lon=121.46;
const phone=env.RoomLayout.createMobileV130(),v129=env.RoomLayout.createMobileV129(),desktop=env.RoomLayout.create({desktop:true,left:-800,width:2200});
assert.equal(phone.window.fitBodies,true);
assert.ok(!v129.window.fitBodies);assert.ok(!desktop.window.fitBodies);
function skyAt(date){
 const sun=SunCalc.getPosition(date,lat,lon),moon=SunCalc.getMoonPosition(date,lat,lon),illum=SunCalc.getMoonIllumination(date);
 return {sun,moon,illum,cloud:0,flags:{},current:{wind_speed_10m:0,precipitation:0},stale:false};
}
function draw(win,date){
 let m=[1,0,0,1,0,0];const stack=[];
 const mul=(a,b,c,d,e,f)=>{const [A,B,C,D,E,F]=m;m=[A*a+C*b,B*a+D*b,A*c+C*d,B*c+D*d,A*e+C*f+E,B*e+D*f+F];};
 const hits=[],ctx=new Proxy({fillStyle:'',save(){stack.push(m.slice());},restore(){m=stack.pop();},translate(x,y){mul(1,0,0,1,x,y);},scale(x,y){mul(x,0,0,y,0,0);},transform(a,b,c,d,e,f){mul(a,b,c,d,e,f);},arc(x,y,r){if(this.fillStyle==='#f5ead3'||this.fillStyle==='#fff0c4')hits.push({color:this.fillStyle,x:m[0]*x+m[2]*y+m[4],y:m[1]*x+m[3]*y+m[5],r});},createLinearGradient:()=>({addColorStop(){}}),createRadialGradient:()=>({addColorStop(){}})},{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>(o[k]=v,true)});
 env.WindowScene.draw(ctx,skyAt(date),date,{home:win});
 return hits;
}
function inside(win,hit){return hit.x>win.x&&hit.x<win.x+win.width&&hit.y>win.y&&hit.y<win.y+win.height;}
const night=new Date('2026-10-31T00:16:00+08:00');
const nightSky=skyAt(night),az=(nightSky.moon.azimuth*180/Math.PI+540)%360;
assert(Math.abs(az-75)<8,'00:16 moon azimuth stays near 75°, got '+az.toFixed(1));
assert(nightSky.moon.altitude>0&&nightSky.sun.altitude<-.08);
const moon=draw(phone.window,night).filter(h=>h.color==='#f5ead3');
assert.equal(moon.length,1,'00:16 draws the moon on the mobile window');
assert(inside(phone.window,moon[0]),'00:16 moon is inside the rendered mobile window '+JSON.stringify(phone.window)+' at '+moon[0].x.toFixed(1)+','+moon[0].y.toFixed(1));
const legacy=draw(v129.window,night).filter(h=>h.color==='#f5ead3');
assert.equal(legacy.length,1);
assert(!inside(v129.window,legacy[0]),'Without fitBodies the same moon still falls outside the v129 window');
const noon=new Date('2026-10-31T12:00:00+08:00');
const sunNoon=draw(phone.window,noon).filter(h=>h.color==='#fff0c4');
assert.equal(sunNoon.length,1,'noon draws the sun');
assert(inside(phone.window,sunNoon[0]),'noon sun is inside the rendered mobile window');
const times=SunCalc.getTimes(noon,lat,lon);
let sunset=new Date(times.sunset.getTime()-10*60*1000);
if(SunCalc.getPosition(sunset,lat,lon).altitude<-.015)sunset=new Date(times.sunset.getTime()-25*60*1000);
const dusk=draw(phone.window,sunset).filter(h=>h.color==='#fff0c4'||h.color==='#f5ead3');
assert(dusk.length>=1,'sunset draws a sun or moon');
for(const hit of dusk)assert(inside(phone.window,hit),'sunset body is inside the rendered mobile window');
console.log('00:16 moon, noon sun and sunset bodies sit inside the mobile window rectangle');
