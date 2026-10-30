const assert=require('assert'),fs=require('fs'),vm=require('vm');
const SunCalc=require('../dist/assets/suncalc.js');
const env={Math,Date,Intl};vm.createContext(env);
vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),env);
vm.runInContext(fs.readFileSync('dist/room-layout.js','utf8'),env);
const lat=25.135,lon=121.46,win=env.RoomLayout.createMobileV130().window;
assert.equal(win.fitBodies,true);
assert.deepEqual([win.x,win.y,win.width,win.height],[350,-36,340,146]);
function skyAt(date,extra){
 const sun=SunCalc.getPosition(date,lat,lon),moon=SunCalc.getMoonPosition(date,lat,lon),illum=SunCalc.getMoonIllumination(date);
 return Object.assign({sun,moon,illum,cloud:0,flags:{},current:{wind_speed_10m:0,precipitation:0},stale:false},extra);
}
function draw(date,extra){
 let m=[1,0,0,1,0,0];const stack=[];
 const mul=(a,b,c,d,e,f)=>{const [A,B,C,D,E,F]=m;m=[A*a+C*b,B*a+D*b,A*c+C*d,B*c+D*d,A*e+C*f+E,B*e+D*f+F];};
 const world=(x,y)=>({x:m[0]*x+m[2]*y+m[4],y:m[1]*x+m[3]*y+m[5]});
 const hits=[],ctx=new Proxy({fillStyle:'',save(){stack.push(m.slice());},restore(){m=stack.pop();},translate(x,y){mul(1,0,0,1,x,y);},scale(x,y){mul(x,0,0,y,0,0);},transform(a,b,c,d,e,f){mul(a,b,c,d,e,f);},
  createRadialGradient(){return {glow:true,addColorStop(){}};},createLinearGradient:()=>({addColorStop(){}}),
  fillRect(x,y,w,h){if(this.fillStyle&&this.fillStyle.glow)this._glow={x,y,w,h,m:m.slice()};},
  arc(x,y,r){if(this.fillStyle==='#f5ead3'||this.fillStyle==='#fff0c4'){const g=this._glow;hits.push({color:this.fillStyle,c:world(x,y),r,sx:Math.hypot(m[0],m[1]),sy:Math.hypot(m[2],m[3]),glow:g?{a:world(g.x,g.y),b:world(g.x+g.w,g.y+g.h)}:null});}}
 },{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>(o[k]=v,true)});
 env.WindowScene.draw(ctx,skyAt(date,extra),date,{home:win});
 return hits;
}
// Curtain/frame margin measured from the rendered mobile window, not a fixed sky span.
assert.equal(win.bodyMargin,33);
function limits(){
 const curtainX=28*(win.width/400),curtainY=8*(win.height/220),margin=win.bodyMargin;
 return {disc:{x:win.x+margin,y:win.y+margin,x1:win.x+win.width-margin,y1:win.y+win.height-margin},glow:{x:win.x+curtainX,y:win.y+curtainY,x1:win.x+win.width-curtainX,y1:win.y+win.height-curtainY}};
}
function insideDisc(hit){
 const g=limits().disc,rx=hit.r*(hit.sx||1),ry=hit.r*(hit.sy||1);
 return hit.c.x-rx>=g.x-0.6&&hit.c.x+rx<=g.x1+0.6&&hit.c.y-ry>=g.y-0.6&&hit.c.y+ry<=g.y1+0.6;
}
function insideGlow(hit){
 if(!hit.glow)return true;const g=limits().glow;
 return hit.glow.a.x>=g.x-1&&hit.glow.b.x<=g.x1+1&&hit.glow.a.y>=g.y-1&&hit.glow.b.y<=g.y1+1;
}
function check(label,hits){
 assert(hits.length>=1,label+' draws a body');
 for(const hit of hits){assert(insideDisc(hit),label+' disc leaves the margin at '+hit.c.x.toFixed(1)+','+hit.c.y.toFixed(1));assert(insideGlow(hit),label+' glow leaves the glass');}
}
const night=new Date('2026-10-31T00:16:00+08:00');
const az=(SunCalc.getMoonPosition(night,lat,lon).azimuth*180/Math.PI+540)%360;
assert(Math.abs(az-75)<8,'00:16 moon azimuth near 75, got '+az.toFixed(1));
check('00:16 moon',draw(night).filter(h=>h.color==='#f5ead3'));
check('noon sun',draw(new Date('2026-10-31T12:00:00+08:00')).filter(h=>h.color==='#fff0c4'));
const times=SunCalc.getTimes(night,lat,lon);
check('sunset',draw(new Date(times.sunset.getTime()-12*60*1000)).filter(h=>h.color==='#fff0c4'||h.color==='#f5ead3'));
check('dawn',draw(new Date(times.sunrise.getTime()+12*60*1000)).filter(h=>h.color==='#fff0c4'||h.color==='#f5ead3'));
for(const deg of [70,80]){
 const alt=deg*Math.PI/180;
 check(deg+'° moon',draw(night,{moon:{altitude:alt,azimuth:(75-540)*Math.PI/180}}).filter(h=>h.color==='#f5ead3'));
 check(deg+'° sun',draw(night,{sun:{altitude:alt,azimuth:(90-540)*Math.PI/180},moon:{altitude:-1,azimuth:0}}).filter(h=>h.color==='#fff0c4'));
}
function viewOf(width,sh,den,winTop){
 const scale=Math.min(width/900,sh/den),visibleW=width/scale,visibleH=sh/scale,roomW=900,left=-150;
 let top=1080-visibleH;if(top>winTop)top=winTop;
 const x=visibleW<roomW?Math.max(left,Math.min(left+roomW-visibleW,0)):left+(roomW-visibleW)/2;
 return {scale,top,x,visibleW,visibleH};
}
for(const [width,height,sh] of [[390,844,531],[412,915,553]]){
 const before=viewOf(width,sh,1080,win.y-8),after=viewOf(width,sh,1150,-70);
 assert.deepEqual(after,before,width+'x'+height+' camera matches the 1080 scale');
}
const small=viewOf(375,380,1150,-70);
assert.equal(small.top,-70);assert(win.y>=small.top-0.2&&win.y+win.height<=small.top+small.visibleH+0.2,'375x667 shows the whole window');
assert(small.visibleW>900);assert(fs.readFileSync('dist/room.js','utf8').includes("c.fillStyle='#e5c9a6'"),'Wide phone views paint wall colour into the side margins');
console.log('Sun and moon discs stay inside the mobile glass, and the window frame fits three phone sizes');
