/* Mobile v130 cat-flap round trip. Desktop and v129 plans have no catFlap, so they never enter this path.
   Duck/push art is one swappable entry. The rejected black-rear sheets are not used; both poses
   currently draw the existing rear walk frame (door-gait back 0) at that frame's own scale. */
(function(root){'use strict';
const ENABLED=true;
const REAR={x:112,y:53,width:202,height:429,anchorX:115,ground:429,visibleHeight:429};
const POSE_ART={
 duckEle:{kind:'sheet',key:'black_door_gait',frame:0},
 push:{kind:'sheet',key:'black_door_gait',frame:0}
};
const KEY='heipipi-flap';
function enabled(plan){return ENABLED&&!!(plan&&plan.layoutId==='v130'&&plan.catFlap);}
function poseScale(){return Math.sqrt(5500/58871.367)*367*.95/REAR.visibleHeight;}
function lerp(a,b,t){return a+(b-a)*t;}
function ease(t){t=Math.max(0,Math.min(1,t));return 1-(1-t)*(1-t)*(1-t);}
function hitCss(plan,scale){const h=plan.catFlap.hit;return {w:h.w*scale,h:h.h*scale};}
function contains(p,plan){if(!enabled(plan))return false;const h=plan.catFlap.hit;return p.x>=h.x&&p.x<=h.x+h.w&&p.y>=h.y&&p.y<=h.y+h.h;}
function locked(actor){const t=actor&&actor.flapTrip;return !!(t&&t.phase!=='toDoor');}
function remember(actor,plan){
 const t=actor.flapTrip;if(!t||t.phase!=='hidden')return;
 try{root.localStorage&&root.localStorage.setItem(KEY,JSON.stringify({v:1,toy:t.toy&&t.toy.id,x:plan.catFlap.exit.x,y:plan.catFlap.exit.y}));}catch(e){}
}
function forget(){try{root.localStorage&&root.localStorage.removeItem(KEY);}catch(e){}}
function restore(actor,toys,plan){
 if(!enabled(plan))return false;
 let raw;try{raw=root.localStorage&&root.localStorage.getItem(KEY);}catch(e){return false;}
 if(!raw)return false;
 let data;try{data=JSON.parse(raw);}catch(e){forget();return false;}
 const toy=(toys||[]).find(t=>t.id===data.toy);if(!toy){forget();return false;}
 const exit=plan.catFlap.exit;
 actor.x=exit.x;actor.y=exit.y;actor.z=0;actor.hidden=false;actor.offstage=null;actor.pose='sit';actor.state='idle';
 actor.carry=toy;toy.carried=true;toy.hidden=false;toy.flapClip=false;toy.x=exit.x+16;toy.y=exit.y;toy.z=12;
 forget();return true;
}
function begin(actor,toy,plan,opts){
 if(!enabled(plan)||!actor||!toy||actor.flapTrip)return false;
 actor.flapTrip={phase:'toDoor',t:0,flap:0,hold:opts&&opts.hold!=null?opts.hold:5,toy,sx:actor.x,sy:actor.y};
 actor.hidden=false;actor.offstage=null;actor.carry=toy;actor.pose='flapDuck';actor.state='flap';
 toy.carried=true;toy.held=false;toy.hidden=false;toy.flapClip=false;toy.inBox=false;
 return true;
}
function cancel(actor){
 const t=actor&&actor.flapTrip;if(!t||locked(actor))return false;
 actor.flapTrip=null;actor.hidden=false;actor.offstage=null;actor.pose='sit';actor.state='idle';
 if(t.toy){t.toy.flapClip=false;t.toy.hidden=false;}
 return true;
}
function place(actor,p){actor.x=p.x;actor.y=p.y;actor.z=0;}
function holdToy(actor,toy,x,y){toy.carried=true;toy.hidden=false;toy.flapClip=false;toy.x=x;toy.y=y;toy.z=18;actor.carry=toy;}
function step(actor,plan,dt){
 const trip=actor&&actor.flapTrip;if(!trip||!enabled(plan))return false;
 const f=plan.catFlap,A=f.approach,B=f.mouth,C=f.exit,toy=trip.toy;
 if(!toy){actor.flapTrip=null;actor.hidden=false;return 'lost';}
 trip.t+=dt;actor.state='flap';actor.face=1;
 for(let hop=0;hop<3&&actor.flapTrip;hop++){
 const phase=trip.phase;
 if(trip.phase==='toDoor'){
  const u=Math.min(1,trip.t/.7);
  actor.x=lerp(trip.sx,A.x,u);actor.y=lerp(trip.sy,A.y,u);actor.z=0;actor.hidden=false;actor.pose='flapDuck';
  holdToy(actor,toy,actor.x+16,actor.y-8);trip.flap=0;
  if(u>=1){trip.phase='push';trip.t=0;}
 }else if(trip.phase==='push'){
  const u=Math.min(1,trip.t/.7);
  place(actor,B);actor.pose='flapPush';actor.carry=null;actor.flapSink=0;actor.hidden=false;
  toy.carried=true;toy.hidden=false;toy.flapClip=true;toy.flapH=46;
  toy.x=f.inner.x+f.inner.w/2;toy.y=f.inner.y+f.inner.h*.62;
  trip.flap=70*ease(Math.min(1,trip.t/.25));
  if(u>=1){trip.phase='enter';trip.t=0;}
 }else if(trip.phase==='enter'){
  const u=Math.min(1,trip.t/.8);
  place(actor,B);actor.pose='flapPush';actor.carry=null;actor.flapSink=u;actor.hidden=false;
  toy.flapClip=true;toy.flapH=46;toy.carried=true;trip.flap=70;
  if(u>=1){trip.phase='hidden';trip.t=0;actor.hidden=true;actor.offstage='flap';toy.hidden=true;actor.carry=toy;remember(actor,plan);}
 }else if(trip.phase==='hidden'){
  actor.hidden=true;toy.hidden=true;toy.carried=true;actor.carry=toy;actor.offstage='flap';
  trip.flap=70*Math.exp(-3.2*trip.t)*Math.cos(7.5*trip.t);
  if(trip.t>=trip.hold){trip.phase='emerge';trip.t=0;actor.hidden=false;toy.hidden=false;actor.offstage=null;}
 }else if(trip.phase==='emerge'){
  const u=Math.min(1,trip.t/.8);
  place(actor,B);actor.hidden=false;actor.offstage=null;actor.pose='flapDuck';actor.flapSink=1-u;
  holdToy(actor,toy,actor.x+14,actor.y-6);trip.flap=-70;
  if(u>=1){trip.phase='toRoom';trip.t=0;}
 }else if(trip.phase==='toRoom'){
  const u=Math.min(1,trip.t/.8);
  actor.x=lerp(B.x,C.x,u);actor.y=lerp(B.y,C.y,u);actor.z=0;actor.pose='flapDuck';actor.hidden=false;
  holdToy(actor,toy,actor.x+16,actor.y-4);
  trip.flap=-70*Math.exp(-3.2*trip.t)*Math.cos(7.5*trip.t);
  if(u>=1){trip.phase='drop';trip.t=0;}
 }else if(trip.phase==='drop'){
  const u=Math.min(1,trip.t/.45);
  place(actor,C);actor.pose='sit';actor.hidden=false;actor.offstage=null;
  toy.hidden=false;toy.flapClip=false;toy.x=C.x+22;toy.y=C.y+6;toy.z=16*(1-u);toy.carried=u<1;
  actor.carry=u<1?toy:null;trip.flap*=Math.exp(-6*dt);
  if(u>=1){actor.flapTrip=null;actor.state='idle';forget();return 'done';}
 }
 if(!actor.flapTrip||trip.phase===phase)break;
 trip.t=0;
 }
 return actor.flapTrip?actor.flapTrip.phase:'done';
}
function poseFrame(frame,actor,toy,plan){
 if(!enabled(plan)||!actor||!toy)return false;
 const f=plan.catFlap,mid={x:(plan.left+plan.right)/2,y:700};
 const frames={
  1:()=>{actor.x=toy.x-30;actor.y=toy.y;actor.pose='walk';actor.carry=null;toy.carried=false;toy.hidden=false;toy.flapClip=false;},
  2:()=>{actor.x=lerp(mid.x,f.approach.x,.45);actor.y=lerp(mid.y,f.approach.y,.45);actor.pose='flapDuck';holdToy(actor,toy,actor.x+16,actor.y-8);},
  3:()=>{place(actor,f.mouth);actor.pose='flapPush';actor.carry=null;actor.flapSink=0;toy.flapClip=true;toy.flapH=46;toy.carried=true;toy.hidden=false;toy.x=f.inner.x+f.inner.w/2;toy.y=f.inner.y+f.inner.h*.62;actor.flapTrip={phase:'push',flap:62,toy,t:.4,hold:5};},
  4:()=>{place(actor,f.mouth);actor.pose='flapPush';actor.carry=null;actor.flapSink=.55;toy.flapClip=true;toy.flapH=46;toy.carried=true;actor.flapTrip={phase:'enter',flap:70,toy,t:.4,hold:5};},
  5:()=>{place(actor,f.mouth);actor.hidden=true;actor.offstage='flap';toy.hidden=true;toy.carried=true;actor.carry=toy;actor.flapTrip={phase:'hidden',flap:18,toy,t:1,hold:5};},
  6:()=>{place(actor,f.mouth);actor.hidden=false;actor.pose='flapDuck';actor.flapSink=.2;holdToy(actor,toy,actor.x+14,actor.y-6);actor.flapTrip={phase:'emerge',flap:-70,toy,t:.4,hold:5};},
  7:()=>{place(actor,f.exit);actor.hidden=false;actor.pose='flapDuck';holdToy(actor,toy,actor.x+16,actor.y-4);actor.flapTrip={phase:'toRoom',flap:0,toy,t:.8,hold:5};}
 };
 const go=frames[frame];if(!go)return false;go();actor.z=0;actor.state='flap';actor.flapHold=true;return true;
}
function wood(c,d){
 const g=c.createLinearGradient(d.x,0,d.x,d.y+d.h);
 g.addColorStop(0,'#8b603f');g.addColorStop(.5,'#7a5236');g.addColorStop(1,'#6e4930');
 c.fillStyle=g;c.fillRect(d.x,d.y,d.w,d.h);
 for(let y=d.y+4;y<d.y+d.h;y+=7){
  c.strokeStyle=y%14?'rgba(50,30,15,.16)':'rgba(186,140,96,.2)';c.lineWidth=1.4;
  c.beginPath();c.moveTo(d.x+2,y);c.lineTo(d.x+d.w-2,y+Math.sin(y*.2)*1.1);c.stroke();
 }
 c.strokeStyle='rgba(40,22,10,.4)';c.lineWidth=2;c.strokeRect(d.x+1,d.y+1,d.w-2,d.h-2);
}
function paintDoor(c,plan){
 if(!enabled(plan))return;const d=plan.catFlap.door,woodIm=root.CatFlapWood,jamb=root.CatFlapJamb;
 c.save();
 if(woodIm&&woodIm.complete&&woodIm.naturalWidth)c.drawImage(woodIm,d.x,d.y,d.w,d.h);else wood(c,d);
 c.fillStyle='#f4ede2';
 if(jamb&&jamb.complete&&jamb.naturalWidth){c.drawImage(jamb,d.x-8,d.y-6,10,d.h+8);c.drawImage(jamb,d.x+d.w-2,d.y-6,10,d.h+8);}
 else{c.fillRect(d.x-6,d.y,8,d.h);c.fillRect(d.x+d.w-2,d.y,8,d.h);c.fillStyle='rgba(74,43,17,.14)';c.fillRect(d.x-8,d.y,2,d.h);c.fillRect(d.x+d.w+6,d.y,2,d.h);}
 const hy=d.y+d.h*.52;c.fillStyle='#c9c4ba';c.fillRect(d.x+16,hy-3,8,10);c.fillStyle='#dcd8d0';c.fillRect(d.x+14,hy,22,5);c.fillStyle='#eeeae3';c.fillRect(d.x+14,hy,22,2);
 c.restore();
}
function drawFlap(c,plan,actor){
 if(!enabled(plan))return;const f=plan.catFlap,trip=actor&&actor.flapTrip,ang=(trip&&trip.flap||0)*Math.PI/180;
 const flap=f.flap,inner=f.inner,glow=actor&&(actor.carry&&actor.carry.id==='ele'||trip&&trip.phase!=='hidden'&&trip.phase!=='drop');
 c.save();
 if(glow){const cx=flap.x+flap.w/2,cy=flap.y+flap.h/2,pulse=.8+.2*Math.sin((actor.time||0)*Math.PI*2/1.6),r=flap.w*.95;
  const g=c.createRadialGradient(cx,cy,flap.w*.45,cx,cy,r);g.addColorStop(0,'rgba(247,212,129,'+(.55*pulse)+')');g.addColorStop(1,'rgba(247,212,129,0)');
  c.fillStyle=g;c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.fill();c.strokeStyle='rgba(255,242,214,'+(.9*pulse)+')';c.lineWidth=3;c.strokeRect(flap.x-2,flap.y-2,flap.w+4,flap.h+4);}
 c.fillStyle='rgba(30,26,22,.88)';c.fillRect(inner.x,inner.y,inner.w,inner.h);
 const im=root.CatFlapSheet;
 c.save();c.translate(flap.x+flap.w/2,flap.y+6);c.scale(1,Math.cos(ang)||.08);c.translate(-(flap.x+flap.w/2),-(flap.y+6));
 if(im&&im.complete&&im.naturalWidth)c.drawImage(im,flap.x,flap.y,flap.w,flap.h);
 else{c.fillStyle='#1f1f21';round(c,flap.x,flap.y,flap.w,flap.h,7);c.fill();c.fillStyle='rgba(226,223,214,.78)';round(c,flap.x+8,flap.y+8,flap.w-16,flap.h-16,4);c.fill();c.fillStyle='rgba(87,72,60,.35)';c.fillRect(flap.x+flap.w*.4,flap.y+18,flap.w*.2,6);}
 c.restore();
 c.fillStyle='#c44a3d';c.fillRect(flap.x+6,flap.y+flap.h-8,8,5);c.fillStyle='#3d6fb6';c.fillRect(flap.x+flap.w-14,flap.y+flap.h-8,8,5);
 const toy=trip&&trip.toy;if(toy&&toy.flapClip&&!toy.hidden){
  c.save();c.beginPath();c.rect(inner.x,inner.y,inner.w,inner.h);c.clip();
  c.fillStyle='#7ec8ea';const h=toy.flapH||46,w=h*.72;c.beginPath();c.ellipse(toy.x,toy.y,w*.45,h*.45,0,0,Math.PI*2);c.fill();
  c.restore();
 }
 c.restore();
}
function round(c,x,y,w,h,r){c.beginPath();if(c.roundRect)c.roundRect(x,y,w,h,r);else c.rect(x,y,w,h);}
function drawCat(c,actor,image,plan){
 if(!actor||actor.hidden)return false;
 const scale=poseScale();
 c.save();
 if(actor.pose==='flapPush'&&actor.flapSink>0&&plan&&plan.catFlap){
  const inner=plan.catFlap.inner;c.beginPath();c.rect(inner.x-4,inner.y-4,inner.w+8,inner.h+8);c.rect(plan.left,plan.floor,plan.width,plan.floorBottom-plan.floor);c.clip();
 }
 c.translate(actor.x,actor.y-(actor.z||0));
 if(image&&image.complete&&image.naturalWidth)c.drawImage(image,REAR.x,REAR.y,REAR.width,REAR.height,-REAR.anchorX*scale,-REAR.ground*scale,REAR.width*scale,REAR.height*scale);
 else{c.fillStyle='#241c18';c.beginPath();c.ellipse(0,-40,22,36,0,0,Math.PI*2);c.fill();}
 if(actor.pose==='flapDuck'&&actor.carry&&!actor.carry.flapClip){c.fillStyle='#7ec8ea';c.beginPath();c.ellipse(18,-46,16,12,0,0,Math.PI*2);c.fill();}
 c.restore();return true;
}
root.CatFlap={ENABLED,POSE_ART,REAR,enabled,poseScale,hitCss,contains,locked,begin,cancel,step,poseFrame,restore,paintDoor,drawFlap,drawCat,forget};
})(typeof window!=='undefined'?window:globalThis);
