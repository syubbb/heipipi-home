/* Approved home zones. Drawing and navigation consume the same world coordinates. */
(function(root){'use strict';
const quad=(x,y,w,h)=>[[x,y],[x+w,y],[x+w,y+h],[x,y+h]];
function create({desktop=false,left=-150,width=900}={}){
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
 if(cabinetCache?.key!==key)cabinetCache={key,models:detail.cabinetModel({furniture:p.furniture})};
 detail.drawModels(c,cabinetCache.models);
 const g=p.television,b=g.console,mid=(g.screen[0][0]+g.screen[1][0])/2;
 polygon(c,[[mid-5,g.screen[2][1]+2],[mid+5,g.screen[2][1]+2],[mid+8,b.y-8],[mid-8,b.y-8]],'#303630');
 c.fillStyle='#303630';c.beginPath();c.ellipse(mid,b.y-7,27,3,0,0,Math.PI*2);c.fill();
 polygon(c,g.frame,'#272e29');polygon(c,g.screen,'#0b100d');
 c.strokeStyle='#697064';c.lineWidth=.7;c.strokeRect(g.frame[0][0],g.frame[0][1],g.frame[1][0]-g.frame[0][0],g.frame[3][1]-g.frame[0][1]);
}
function drawMemories(c,p,scene,detail,family,source,decor=source){
 if(!scene)return;
 const wallLeft=p.window.x+p.window.width*1.2,wallRight=p.right-(p.desktop?130:24),center=(wallLeft+wallRight)/2;
 const w=p.desktop?112:85,artWidth=p.desktop?78:58,gap=p.desktop?30:14,total=w+gap+artWidth,x=center-total/2,y=p.desktop?133:118;
 scene.drawMatchingFrame(c,family,source,x,y,w);
 if(detail){c.save();const a=x+w+gap,b=p.desktop?158:144,ww=artWidth;detail.woodFrame(c,a,b,ww,ww*83/93);detail.blackArt(c,a+ww*.1,b+ww*.08,ww*.8,ww*.72);c.restore();}
 if(decor?.complete&&decor.naturalWidth){const w=p.desktop?310:176,a=center-w/2;c.drawImage(decor,532*decor.naturalWidth/2048,39*decor.naturalHeight/649,166*decor.naturalWidth/2048,59*decor.naturalHeight/649,a,p.desktop?12:26,w,w*59/166);}
}
root.RoomLayout={create,drawBackdrop,drawFurniture,drawMemories};
})(typeof window!=='undefined'?window:globalThis);
