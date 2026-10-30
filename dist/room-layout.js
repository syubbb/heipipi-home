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
 floor:360,floorBottom:1040,viewBottom:1080,viewTop:-70,viewScale:1150,gatherY:763,bedTopY:160,
 window:{x:350,y:-36,width:340,height:146,hem:110,fitBodies:true,bodyMargin:33},
 lookout:{x:540,y:602},
 console:{x:12,w:268,h:70,depth:30,sw:220},
 tv:{cx:146,frontY:580,dy:.79,seats:[[-62,0],[62,0],[-124,130],[0,130],[124,130],[-155,335],[0,350],[150,365]]},
 box:{x:600,back:660,front:726,wall:false},
 mat:{x:600,y:790,width:176,height:94},
 toast:{x:400,y:820,width:164,free:true},
 rug:{x:120,y:615,w:440,h:225},
 bowl:{x:-50,y:745,pad:[-102,697,104,64]},water:{x:58,y:745,pad:[6,697,104,64]},
 litter:{x:150,back:890,front:962,width:220,door:124,approach:{x:150,y:856}},
 litterMat:{x:150,y:926,w:252,h:108,collision:false},
 stickerMat:{x:610,y:905,w:160,h:86},
 scratch:[{id:0,x:-60,y:590,rx:48,ry:24},{id:1,x:-70,y:960,rx:48,ry:24}],
 bed:{x:300,y:362,w:440,d:140,walkway:439,spots:[
  {id:'S1',x:400,y:388,pose:'lie',cat:'dongdong'},
  {id:'S2',x:540,y:398,pose:'sitback',cat:'socks',gaze:{x:540,y:398,z:160}},
  {id:'S3',x:685,y:396,pose:'curl',cat:'cat'},
  {id:'S4',x:415,y:478,pose:'lie',cat:'ye'},
  {id:'S5',x:605,y:478,pose:'sit',cat:'rabbit'}
 ]},
 step:{x:280,y:502,w:180,d:44,zLow:60,zHigh:120},
 jumps:{
  j1:[{x:240,y:524,z:0},{x:325,y:524,z:60,arc:18,dur:.3},{x:415,y:524,z:120,arc:18,dur:.3},{x:415,y:439,z:160,arc:40,dur:.32}],
  j2:[{x:500,y:534},{x:595,y:534},{x:690,y:534}]
 },
 shelf:{x:24,y:48,w:230,h:14},
 clock:{x:-60,y:-20,r:18},
 catFlap:{door:{x:-140,y:40,w:140,h:320},flap:{x:-112,y:262,w:84,h:84},inner:{x:-104,y:270,w:68,h:68},hit:{x:-122,y:257,w:104,h:104},zone:{x:-115,y:362,w:90,h:46},approach:{x:-70,y:430},mouth:{x:-70,y:372},exit:{x:-60,y:470}},
 aisle:{dx:465,width:240},
 toys:[{id:'ele',x:230,y:720,size:72},{id:'panda',x:470,y:800},{id:'car',x:440,y:690},{id:'husky',x:420,y:945,size:96},{id:'kiss',x:480,y:700}]
};
function createMobileV130({left=-150,width=900}={}){
 const t=MOBILE_V130,floor=t.floor,floorBottom=t.floorBottom,right=left+width,X=x=>x+(left+150);
 const window={x:X(t.window.x),y:t.window.y,width:t.window.width,height:t.window.height,hem:t.window.hem,fitBodies:!!t.window.fitBodies,bodyMargin:t.window.bodyMargin};
 const lookout={x:X(t.lookout.x),y:t.lookout.y};
 const console={x:X(t.console.x),y:floor-40,width:t.console.w,height:t.console.h,depth:t.console.depth};
 const sw=t.console.sw,sx=console.x+(console.width-sw)/2,sy=console.y-15-sw*9/16;
 const television={console,screen:quad(sx,sy,sw,sw*9/16),frame:quad(sx-5,sy-5,sw+10,sw*9/16+10),bottom:console.y-15};
 const cx=X(t.tv.cx),frontY=t.tv.frontY;
 const tvSeats=t.tv.seats.map(([dx,dy],slot)=>({x:cx+dx,y:frontY+dy*t.tv.dy,slot}));
 const box={x:X(t.box.x),back:t.box.back,front:t.box.front,wall:t.box.wall};
 const mat={x:X(t.mat.x),y:t.mat.y,width:t.mat.width,height:t.mat.height};
 const toast={x:X(t.toast.x),y:t.toast.y,width:t.toast.width,free:!!t.toast.free};
 const padOf=p=>p?[X(p[0]),p[1],p[2],p[3]]:undefined;
 const bowl={x:X(t.bowl.x),y:t.bowl.y,pad:padOf(t.bowl.pad)},water={x:X(t.water.x),y:t.water.y,pad:padOf(t.water.pad)};
 const litter={x:X(t.litter.x),back:t.litter.back,front:t.litter.front,width:t.litter.width,door:t.litter.door,approach:{x:X(t.litter.approach.x),y:t.litter.approach.y}};
 const scratch=t.scratch.map(s=>({id:s.id,x:X(s.x),y:s.y,rx:s.rx,ry:s.ry}));
 const bed={x:X(t.bed.x),y:t.bed.y,w:t.bed.w,d:t.bed.d,front:t.bed.y+t.bed.d,z:t.bedTopY,walkway:t.bed.walkway,spots:t.bed.spots.map(s=>({id:s.id,x:X(s.x),y:s.y,z:t.bedTopY,pose:s.pose,cat:s.cat,gaze:s.gaze?{x:X(s.gaze.x),y:s.gaze.y,z:s.gaze.z}:undefined}))};
 const litterMat={x:X(t.litterMat.x),y:t.litterMat.y,w:t.litterMat.w,h:t.litterMat.h,collision:false};
 const stickerMat={x:X(t.stickerMat.x),y:t.stickerMat.y,w:t.stickerMat.w,h:t.stickerMat.h};
 const petStep={x:X(t.step.x),y:t.step.y,w:t.step.w,d:t.step.d,front:t.step.y+t.step.d,zLow:t.step.zLow,zHigh:t.step.zHigh};
 const f=t.catFlap,catFlap={door:{...f.door,x:X(f.door.x)},flap:{...f.flap,x:X(f.flap.x)},inner:{...f.inner,x:X(f.inner.x)},hit:{...f.hit,x:X(f.hit.x)},zone:quad(X(f.zone.x),f.zone.y,f.zone.w,f.zone.h),approach:{x:X(f.approach.x),y:f.approach.y},mouth:{x:X(f.mouth.x),y:f.mouth.y},exit:{x:X(f.exit.x),y:f.exit.y}};
 const furniture=[{id:'home-open-console',a:0,b:console.width,top:0,bottom:console.height,levels:[6,43],P:(u,v,z=0)=>[console.x+u+10*z,console.y+v-console.depth*z]}];
 const obstacles=[quad(console.x,console.y+console.height-console.depth,console.width+10,console.depth),quad(bed.x,bed.y,bed.w,bed.d),quad(petStep.x,petStep.y,petStep.w,petStep.d)];
 const rug={x:X(t.rug.x),y:t.rug.y,w:t.rug.w,h:t.rug.h};
 const jumps={j1:t.jumps.j1.map(s=>({...s,x:X(s.x)})),j2:t.jumps.j2.map(s=>({...s,x:X(s.x)}))};
 const shelf={x:X(t.shelf.x),y:t.shelf.y,w:t.shelf.w,h:t.shelf.h},clock={x:X(t.clock.x),y:t.clock.y,r:t.clock.r};
 return {layoutId:'v130',desktop:false,left,right,width,floor,floorBottom,viewBottom:t.viewBottom,viewTop:t.viewTop,viewScale:t.viewScale,bedTopY:t.bedTopY,box,mat,toast,bowl,water,litter,scratch,window,lookout,television,tvSeats,furniture,obstacles,
  rug,shelf,clock,jumps,litterMat,stickerMat,mainAisle:{x:left+t.aisle.dx,width:t.aisle.width},gatherY:t.gatherY,bed,petStep,catFlap,
  toys:t.toys.map(o=>({id:o.id,x:X(o.x),y:o.y,size:o.size}))};
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
function roundBox(c,x,y,w,h,r){c.beginPath();if(c.roundRect)c.roundRect(x,y,w,h,r);else c.rect(x,y,w,h);}
function drawBed(c,bed){
 const z=bed.z,feet=bed.spots.map(s=>s.y-z),top=Math.min(...feet)-6,lip=Math.max(...feet)+16,front=bed.front;
 c.save();
 c.fillStyle='rgba(45,25,10,.16)';c.beginPath();c.ellipse(bed.x+bed.w/2,front+6,bed.w*.46,9,0,0,Math.PI*2);c.fill();
 c.fillStyle='#d9bd94';c.fillRect(bed.x,top+28,bed.w,Math.max(12,front-(top+28)));
 c.fillStyle='#b7aa9b';c.fillRect(bed.x+6,top,bed.w-12,lip-top);
 c.fillStyle='#efe9e1';c.fillRect(bed.x+12,top,bed.w-24,14);
 c.fillStyle='#f7f4ee';roundBox(c,bed.x+bed.w-86,top+2,64,26,8);c.fill();
 c.fillStyle='#e2c9a3';c.fillRect(bed.x+bed.w-14,top-12,14,(lip-top)+12);
 c.restore();
}
function drawPetStep(c,step){
 const front=step.front,low=front-step.zLow,high=front-step.zHigh,mid=step.x+step.w*.46;
 const wood='#c9a36a',shade='#8d6740';
 c.save();
 c.fillStyle='rgba(45,25,10,.14)';c.beginPath();c.ellipse(step.x+step.w/2,front+4,step.w*.42,6,0,0,Math.PI*2);c.fill();
 const leg=(x,top)=>{c.fillStyle=shade;c.fillRect(x,top,8,Math.max(10,front-top));c.fillStyle=wood;c.fillRect(x+1,top,5,Math.max(10,front-top));c.fillStyle='#e7d3a4';c.fillRect(x+2,top+2,2,Math.max(6,front-top-4));};
 leg(mid+10,high+22);leg(step.x+step.w-18,high+22);leg(step.x+12,low+18);leg(mid-18,low+18);
 c.fillStyle=shade;c.fillRect(step.x+12,front-7,step.w-28,5);c.fillStyle=wood;c.fillRect(step.x+12,front-9,step.w-28,3);
 c.fillStyle='#8e9397';roundBox(c,step.x+4,low,mid-step.x-2,22,12);c.fill();
 c.fillStyle='#a9adb1';roundBox(c,step.x+8,low+3,mid-step.x-12,14,8);c.fill();
 c.fillStyle='#7c8185';roundBox(c,mid,high,step.x+step.w-mid-4,26,14);c.fill();
 c.fillStyle='#c5c9cc';roundBox(c,mid+6,high+3,step.x+step.w-mid-16,16,9);c.fill();
 c.restore();
}
function drawFloorMat(c,mat,plain){
 if(!mat)return;const x=mat.x-mat.w/2,y=mat.y-mat.h/2;
 c.save();c.fillStyle=plain?'#d7c4a4':'#e7d7ea';roundBox(c,x,y,mat.w,mat.h,plain?6:12);c.fill();
 if(!plain){c.fillStyle='#c45b78';for(const [dx,dy] of [[18,16],[mat.w-34,22],[mat.w/2,mat.h-20]]){c.beginPath();c.arc(x+dx,y+dy,5,0,Math.PI*2);c.fill();}}
 c.restore();
}
function drawRug(c,rug){
 c.save();c.fillStyle='#e4d3b4';roundBox(c,rug.x,rug.y,rug.w,rug.h,18);c.fill();
 c.strokeStyle='rgba(120,90,55,.28)';c.lineWidth=3;if(c.roundRect){c.beginPath();c.roundRect(rug.x+8,rug.y+8,rug.w-16,rug.h-16,12);c.stroke();}
 c.restore();
}
function drawShelfClock(c,p,art){
 if(p.shelf){
  const s=p.shelf;c.save();c.fillStyle='#e6d3b0';c.fillRect(s.x,s.y,s.w,s.h);c.fillStyle='#c9ae86';c.fillRect(s.x,s.y+s.h-3,s.w,3);
  if(art&&art.scene&&art.family)art.scene.drawMatchingFrame(c,art.family,art.family,s.x+12,s.y+s.h+6,72);
  if(art&&art.plant&&art.plant.complete&&art.plant.naturalWidth)c.drawImage(art.plant,s.x+s.w-70,s.y-46,52,58);
  c.restore();
 }
 if(p.clock){
  const k=p.clock;c.save();c.fillStyle='#f4efe6';c.beginPath();c.arc(k.x,k.y,k.r,0,Math.PI*2);c.fill();
  c.strokeStyle='#6d6256';c.lineWidth=2;c.stroke();c.beginPath();c.moveTo(k.x,k.y);c.lineTo(k.x,k.y-k.r+5);c.moveTo(k.x,k.y);c.lineTo(k.x+k.r-7,k.y+2);c.stroke();
  c.restore();
 }
}
function drawReserved(c,p,art){
 if(!p||p.layoutId!=='v130')return;
 if(p.litterMat)drawFloorMat(c,p.litterMat,true);
 if(p.stickerMat)drawFloorMat(c,p.stickerMat,false);
 if(p.rug)drawRug(c,p.rug);
 if(p.petStep)drawPetStep(c,p.petStep);
 if(p.bed)drawBed(c,p.bed);
 drawShelfClock(c,p,art);
}
function drawMemories(c,p,scene,detail,family,source,decor=source){
 if(!scene||p.layoutId==='v130')return;
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
