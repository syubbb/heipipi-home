/* Approved home zones. Drawing and navigation consume the same world coordinates. */
(function(root){'use strict';
const quad=(x,y,w,h)=>[[x,y],[x+w,y],[x+w,y+h],[x,y+h]];
function createDesktopV129({desktop=false,left=-150,width=900}={}){
 const floor=360,right=left+width,boxX=right-(desktop?360:250);
 const box={x:boxX,back:floor+4,front:floor+70},mat={x:boxX,y:floor+132,width:176,height:94};
 const toast={x:right-(desktop?115:82),y:floor+105,width:desktop?210:164};
 const console={x:left+(desktop?145:18),y:floor-40,width:desktop?470:310,height:70,depth:30};
 const sw=desktop?390:250,sx=console.x+(console.width-sw)/2,sy=console.y-15-sw*9/16;
 const television={console,screen:quad(sx,sy,sw,sw*9/16),frame:quad(sx-5,sy-5,sw+10,sw*9/16+10),bottom:console.y-15};
 const window={x:desktop?left+width*.4:left+365,y:30,width:desktop?Math.min(620,width*.29):280,height:290,hem:floor-6};
 const lookout={x:window.x+window.width*.23,y:floor+42};
 const diningGap=desktop?175:150,bowl={x:left+width/2-diningGap/2,y:1120};
 const water={x:bowl.x+diningGap,y:bowl.y};
 const litter={x:desktop?left+185:right-123,back:980,front:1070,width:220,door:124};
 const scratchX=desktop?right-150:left+115,scratch=[930,1100].map((y,id)=>({id,x:scratchX,y:desktop?650+id*170:y,rx:48,ry:24}));
 const cx=Math.max(sx+sw/2,left+220),frontY=desktop?510:580;
 const tvSeats=[[-62,0],[62,0],[-124,130],[0,130],[124,130],[-155,335],[0,350],[150,365]].map(([dx,dy],slot)=>({x:cx+dx,y:frontY+dy,slot}));
 const furniture=[{id:'home-open-console',a:0,b:console.width,top:0,bottom:console.height,levels:[6,43],P:(u,v,t=0)=>[console.x+u+10*t,console.y+v-console.depth*t]}];
 if(desktop)furniture.push({id:'home-right-open',a:0,b:148,top:30,bottom:322,P:(u,v,t=0)=>[right-112+u*.8+12*t,60+v*.93-18*t]});
 else furniture.push({id:'home-right-open',a:0,b:128,top:30,bottom:322,P:(u,v,t=0)=>[right-16+u*.7+12*t,36+v-18*t]});
 const obstacles=[quad(console.x,console.y+console.height-console.depth,console.width+10,console.depth)];
 if(desktop)obstacles.push(quad(right-118,320,140,52));
 // Close the inaccessible recess behind the wall-side cushion to roaming targets.
 obstacles.push(quad(toast.x-toast.width/2-8,floor,toast.width+24,toast.y-floor-29));
 return {desktop,left,right,width,floor,floorBottom:1220,box,mat,toast,bowl,water,litter,scratch,window,lookout,television,tvSeats,furniture,obstacles,
  mainAisle:{x:desktop?left+width*.46:left+465,width:desktop?420:240},
  toys:[{id:'ele',x:boxX-95,y:floor+226},{id:'panda',x:toast.x-10,y:floor+226},{id:'car',x:boxX+45,y:floor+252},{id:'husky',x:toast.x-5,y:floor+295},{id:'kiss',x:boxX-35,y:floor+280}]};
}
function createMobileV129({left=-150,width=900}={}){
 return createDesktopV129({desktop:false,left,width});
}
// Mobile v130 placement. Swap this table when the bed and the rest of the furniture are redrawn.
const MOBILE_V130={
 floor:360,floorBottom:1040,viewBottom:1080,gatherY:763,bedTopY:572,stepTopY:545,
 window:{x:215,y:30,width:280,height:290,fitBodies:true},
 lookout:{x:540,y:602},
 memories:{cx:205,cy:30,scale:.6},
 console:{x:12,w:268,h:70,depth:30,sw:220},
 tv:{cx:146,frontY:580,dy:.79,seats:[[-62,0],[62,0],[-124,130],[0,130],[124,130],[-155,335],[0,350],[150,365]]},
 box:{x:600,back:660,front:726,wall:false},
 mat:{x:600,y:790,width:176,height:94},
 toast:{x:640,y:900,width:164,free:true},
 bowl:{x:330,y:990},water:{x:470,y:990},
 litter:{x:150,back:890,front:962,width:220,door:124,approach:{x:150,y:856}},
 scratch:[{id:0,x:-70,y:770,rx:48,ry:24},{id:1,x:-70,y:960,rx:48,ry:24}],
 bed:{x:370,back:362,w:340},
 step:{x:272,back:440,w:96},
 catFlap:{door:{x:-140,y:40,w:140,h:320},flap:{x:-112,y:262,w:84,h:84},inner:{x:-104,y:270,w:68,h:68},hit:{x:-122,y:257,w:104,h:104},zone:{x:-115,y:362,w:90,h:46},approach:{x:-70,y:430},mouth:{x:-70,y:372},exit:{x:-60,y:470}},
 aisle:{dx:465,width:240},
 toys:[{id:'ele',x:470,y:740},{id:'panda',x:470,y:800},{id:'car',x:440,y:690},{id:'husky',x:250,y:760},{id:'kiss',x:700,y:780}]
};
function createMobileV130({left=-150,width=900}={}){
 const t=MOBILE_V130,floor=t.floor,floorBottom=t.floorBottom,right=left+width,X=x=>x+(left+150);
 const window={x:X(t.window.x),y:t.window.y,width:t.window.width,height:t.window.height,hem:floor-6,fitBodies:!!t.window.fitBodies};
 const lookout={x:X(t.lookout.x),y:t.lookout.y};
 const console={x:X(t.console.x),y:floor-40,width:t.console.w,height:t.console.h,depth:t.console.depth};
 const sw=t.console.sw,sx=console.x+(console.width-sw)/2,sy=console.y-15-sw*9/16;
 const television={console,screen:quad(sx,sy,sw,sw*9/16),frame:quad(sx-5,sy-5,sw+10,sw*9/16+10),bottom:console.y-15};
 const cx=X(t.tv.cx),frontY=t.tv.frontY;
 const tvSeats=t.tv.seats.map(([dx,dy],slot)=>({x:cx+dx,y:frontY+dy*t.tv.dy,slot}));
 const box={x:X(t.box.x),back:t.box.back,front:t.box.front,wall:t.box.wall};
 const mat={x:X(t.mat.x),y:t.mat.y,width:t.mat.width,height:t.mat.height};
 const toast={x:X(t.toast.x),y:t.toast.y,width:t.toast.width,free:!!t.toast.free};
 const bowl={x:X(t.bowl.x),y:t.bowl.y},water={x:X(t.water.x),y:t.water.y};
 const litter={x:X(t.litter.x),back:t.litter.back,front:t.litter.front,width:t.litter.width,door:t.litter.door,approach:{x:X(t.litter.approach.x),y:t.litter.approach.y}};
 const scratch=t.scratch.map(s=>({id:s.id,x:X(s.x),y:s.y,rx:s.rx,ry:s.ry}));
 const bed={x:X(t.bed.x),y:t.bed.back,w:t.bed.w,d:t.bedTopY-t.bed.back,front:t.bedTopY};
 const petStep={x:X(t.step.x),y:t.step.back,w:t.step.w,d:t.stepTopY-t.step.back,front:t.stepTopY};
 const f=t.catFlap,catFlap={door:{...f.door,x:X(f.door.x)},flap:{...f.flap,x:X(f.flap.x)},inner:{...f.inner,x:X(f.inner.x)},hit:{...f.hit,x:X(f.hit.x)},zone:quad(X(f.zone.x),f.zone.y,f.zone.w,f.zone.h),approach:{x:X(f.approach.x),y:f.approach.y},mouth:{x:X(f.mouth.x),y:f.mouth.y},exit:{x:X(f.exit.x),y:f.exit.y}};
 const furniture=[{id:'home-open-console',a:0,b:console.width,top:0,bottom:console.height,levels:[6,43],P:(u,v,z=0)=>[console.x+u+10*z,console.y+v-console.depth*z]}];
 const obstacles=[quad(console.x,console.y+console.height-console.depth,console.width+10,console.depth),quad(bed.x,bed.y,bed.w,bed.d),quad(petStep.x,petStep.y,petStep.w,petStep.d)];
 return {layoutId:'v130',desktop:false,left,right,width,floor,floorBottom,viewBottom:t.viewBottom,bedTopY:t.bedTopY,box,mat,toast,bowl,water,litter,scratch,window,lookout,television,tvSeats,furniture,obstacles,
  memories:{cx:X(t.memories.cx),cy:t.memories.cy,scale:t.memories.scale},
  mainAisle:{x:left+t.aisle.dx,width:t.aisle.width},gatherY:t.gatherY,bed,petStep,catFlap,
  toys:t.toys.map(o=>({id:o.id,x:X(o.x),y:o.y}))};
}
function requestedLayout(explicit){
 if(explicit)return explicit;
 try{if(typeof location!=='undefined'&&location&&typeof location.search==='string'){const m=/[?&]layout=([^&]*)/.exec(location.search);return m?decodeURIComponent(m[1]):undefined;}}catch(e){}
 return undefined;
}
function create(opts={}){
 if(opts.desktop)return createDesktopV129(opts);
 if(requestedLayout(opts.layout)==='v129')return createMobileV129(opts);
 return createMobileV130(opts);
}
function polygon(c,p,color){c.fillStyle=color;c.beginPath();p.forEach((a,i)=>i?c.lineTo(...a):c.moveTo(...a));c.closePath();c.fill();}
function drawBackdrop(c,p,photo){
 c.save();c.fillStyle='#e5c9a6';c.fillRect(p.left,-320,p.width,p.floor+320);
 if(photo?.complete&&photo.naturalWidth){
  const y=photo.naturalHeight*.50,h=photo.naturalHeight-y,tileW=2200,tileH=540;
  for(let row=0;row<4;row++){c.save();c.translate(p.left,p.floor+row*tileH+(row%2?tileH:0));c.scale(1,row%2?-1:1);c.drawImage(photo,0,y,photo.naturalWidth,h,0,0,p.width,tileH);c.restore();}
 }else{c.fillStyle='#d8ad79';c.fillRect(p.left,p.floor,p.width,p.floorBottom);}
 c.fillStyle='#bd9369';c.fillRect(p.left,p.floor-13,p.width,13);c.fillStyle='#e8cda7';c.fillRect(p.left,p.floor-15,p.width,2);c.fillStyle='rgba(74,43,17,.18)';c.fillRect(p.left,p.floor,p.width,2);
 c.restore();
}
let cabinetCache=null;
function drawFurniture(c,p,detail){
 if(!detail)return;const key=[p.desktop,p.left,p.width].join(':');
 const cacheKey=key+':'+(p.layoutId||'v129');
 if(cabinetCache?.key!==cacheKey)cabinetCache={key:cacheKey,models:detail.cabinetModel({furniture:p.furniture})};
 detail.drawModels(c,cabinetCache.models);
 const g=p.television,b=g.console,mid=(g.screen[0][0]+g.screen[1][0])/2;
 polygon(c,[[mid-5,g.screen[2][1]+2],[mid+5,g.screen[2][1]+2],[mid+8,b.y-8],[mid-8,b.y-8]],'#303630');
 c.fillStyle='#303630';c.beginPath();c.ellipse(mid,b.y-7,27,3,0,0,Math.PI*2);c.fill();
 polygon(c,g.frame,'#272e29');polygon(c,g.screen,'#0b100d');
 c.strokeStyle='#697064';c.lineWidth=.7;c.strokeRect(g.frame[0][0],g.frame[0][1],g.frame[1][0]-g.frame[0][0],g.frame[3][1]-g.frame[0][1]);
}
function drawReserved(){}
function drawMemories(c,p,scene,detail,family,source,decor=source){
 if(!scene)return;
 if(p.memories){
  const s=p.memories.scale||1,w=85*s,artWidth=58*s,gap=14*s,aspect=family?.naturalWidth?family.naturalHeight/family.naturalWidth:.72,h=w*aspect,x=p.memories.cx-w/2,y=p.memories.cy-h/2;
  scene.drawMatchingFrame(c,family,source,x,y,w);
  if(detail){c.save();const a=x+w+gap,b=y,ww=artWidth;detail.woodFrame(c,a,b,ww,ww*83/93);detail.blackArt(c,a+ww*.1,b+ww*.08,ww*.8,ww*.72);c.restore();}
  return;
 }
 const wallLeft=p.window.x+p.window.width*1.2,wallRight=p.right-(p.desktop?130:24),center=(wallLeft+wallRight)/2;
 const w=p.desktop?112:85,artWidth=p.desktop?78:58,gap=p.desktop?30:14,total=w+gap+artWidth,x=center-total/2,y=p.desktop?133:118;
 scene.drawMatchingFrame(c,family,source,x,y,w);
 if(detail){c.save();const a=x+w+gap,b=p.desktop?158:144,ww=artWidth;detail.woodFrame(c,a,b,ww,ww*83/93);detail.blackArt(c,a+ww*.1,b+ww*.08,ww*.8,ww*.72);c.restore();}
 if(decor?.complete&&decor.naturalWidth){const w=p.desktop?310:176,a=center-w/2;c.drawImage(decor,532*decor.naturalWidth/2048,39*decor.naturalHeight/649,166*decor.naturalWidth/2048,59*decor.naturalHeight/649,a,p.desktop?12:26,w,w*59/166);}
}
root.RoomLayout={create,createDesktopV129,createMobileV129,createMobileV130,drawBackdrop,drawFurniture,drawMemories,drawReserved,MOBILE_V130};
})(typeof window!=='undefined'?window:globalThis);
