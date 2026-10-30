/* Geometry, shelf contents and original-photo floor mat. No flattened cabinet interiors. */
(function(root){'use strict';
const tileCache=new Map();let desktopModels=null,phoneModels=null;
const mix=(a,b,t)=>a+(b-a)*t;
function polygon(c,points,fill,edge=null,width=.55){c.beginPath();points.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.closePath();if(fill){c.fillStyle=fill;c.fill();}if(edge){c.strokeStyle=edge;c.lineWidth=width;c.lineJoin='round';c.stroke();}}
function lighter(hex,t=.2){const n=parseInt(hex.slice(1),16);return 'rgb('+[n>>16,(n>>8)&255,n&255].map(v=>Math.round(v+(255-v)*t)).join(',')+')';}
function gradient(c,a,b,colors){const g=c.createLinearGradient(...a,...b);colors.forEach((color,i)=>g.addColorStop(i/(colors.length-1),color));return g;}
function rect(P,u,v,w,h,t=0){return [[u,v],[u+w,v],[u+w,v+h],[u,v+h]].map(([x,y])=>P(x,y,t));}
function box(P,u,v,w,h,t=.1,depth=.28){const front=rect(P,u,v,w,h,t),back=rect(P,u,v,w,h,t+depth);return {front,back,faces:[front,[front[0],front[1],back[1],back[0]],[front[1],front[2],back[2],back[1]],[front[0],back[0],back[3],front[3]]],depth};}
function object(P,kind,u,bottom,w,h,t=.2,color='#d5bba0'){return {...box(P,u,bottom-h,w,h,t,.24),kind,u,v:bottom-h,bottom,w,h,t,color,P};}
function bayObjects(P,bay,seed){
 const {u,v,w,h}=bay,bottom=v+h-2,items=[],colors=['#5c665d','#d1bd98','#eee5d3','#9a7856','#bec3ae'];
 const add=(kind,x,ww,hh,t=.24,color)=>items.push(object(P,kind,u+x*w,bottom,ww*w,hh*h,t,color));
 if(seed%3===0){add('plant',.06,.31,.77,.38);add('frame',.42,.25,.6,.2);add('vase',.77,.15,.65,.45,'#e4ded1');}
 else if(seed%3===1){for(let i=0;i<5;i++)add('book',.05+i*.074,.068,.59+(i%3)*.08,.17+(i%2)*.08,colors[i]);add('plant',.6,.32,.81,.45);}
 else{add('lamp',.05,.28,.76,.22);add('vase',.45,.14,.53,.5,'#bd9a70');for(let i=0;i<4;i++)add('book',.65+i*.075,.067,.62+(i%2)*.1,.18,colors[(i+2)%5]);}
 return items;
}
function mediaObjects(P,bay){
 const {u,v,w,h}=bay,bottom=v+h-2,items=[];
 const add=(kind,x,ww,hh,t,color,base=bottom)=>{const o=object(P,kind,u+x*w,base,ww*w,hh,t,color);Object.assign(o,box(P,o.u,o.v,o.w,o.h,t,.62));items.push(o);return o;};
 const receiver=add('receiver',.045,.29,h*.33,.16,'#282e34');
 add('remote',.11,.14,h*.09,.25,'#393f44',receiver.v-1);
 add('console',.415,.07,h*.72,.3,'#e1e3df');
 add('controller',.535,.13,h*.28,.08,'#30363c');
 for(let i=0;i<3;i++)add('disc',.765,.19,h*.105,.2,['#667784','#c6b28c','#596652'][i],bottom-i*h*.105);
 return items;
}
function makeCabinet(item,index){
 const P=item.P||((u,v,t=0)=>{const f=item.project(u,v),b=item.wallProject(u,v);return [mix(f.x,b.x,t),mix(f.y,b.y,t)];});
 const {a,b,top,bottom}=item,w=b-a,solid=box(P,a,top,w,bottom-top,0,1),bays=[];
 let levels=[];
 if(/display/.test(item.id))levels=[top+10,106,167,228];
 if(/open/.test(item.id))levels=item.phone?[top+10,89,166,242]:[top+10,111,176,239];
 if(/glass/.test(item.id))levels=[top+10,105,174,245,bottom-8];
 if(item.levels)levels=item.levels;
 for(let row=0;row<levels.length-1;row++){
  const u=a+9,v=levels[row],bw=w-18,bh=levels[row+1]-v-6;
  const front=rect(P,u,v,bw,bh,0),back=rect(P,u+1,v+1,bw-2,bh-2,.8);
  const bay={u,v,w:bw,h:bh,front,back,floor:[front[3],front[2],back[2],back[3]],sides:[[front[0],back[0],back[3],front[3]],[front[1],front[2],back[2],back[1]]],ceiling:[front[0],front[1],back[1],back[0]],objects:[]};
  bay.objects=item.id==='home-open-console'?mediaObjects(P,bay):bayObjects(P,bay,index+row);bays.push(bay);
 }
 const doorTop=levels.length&&!/glass/.test(item.id)?levels.at(-1)+3:top;
 const props=[];
 if(/sideboard/.test(item.id)){
  const pu=item.phone?50:539,base=top-3,bookWidth=item.phone?8:7;
  for(let i=0;i<6;i++)props.push(object(P,'book',pu+i*bookWidth,base,bookWidth-1,(item.phone?64:48)+(i%3)*5,.23,['#c9b294','#dcd0b6','#696b61'][i%3]));
  props.push(object(P,'blackFrame',item.phone?124:590,base,item.phone?68:54,(item.phone?68:54)*83/93,.3));
  props.push(object(P,'lamp',item.phone?194:649,base,item.phone?37:32,item.phone?72:65,.25));
  props.push(object(P,'reeds',item.phone?251:691,base,item.phone?23:23,item.phone?59:52,.25,'#80613f'));
 }
 const all=[...solid.faces,...bays.flatMap(v=>[...v.objects.flatMap(o=>o.faces)]) ,...props.flatMap(o=>o.faces)].flat();
 const left=Math.min(...all.map(p=>p[0]))-14,right=Math.max(...all.map(p=>p[0]))+14,up=Math.min(...all.map(p=>p[1]))-12,down=Math.max(...all.map(p=>p[1]))+15;
 return {...item,...solid,P,bays,doorTop,topProps:props,bounds:{x:left,y:up,w:right-left,h:down-up}};
}
function cabinetModel(layout){return layout.furniture.map((item,i)=>makeCabinet(item,i));}
function woodFrame(c,x,y,w,h){
 const f=.065,bw=w*f,bh=h*f,inner=[[x+bw,y+bh],[x+w-bw,y+bh],[x+w-bw,y+h-bh],[x+bw,y+h-bh]],outer=[[x,y],[x+w,y],[x+w,y+h],[x,y+h]];
 c.save();c.lineJoin='miter';
 for(let i=0;i<4;i++){const j=(i+1)%4;polygon(c,[outer[i],outer[j],inner[j],inner[i]],gradient(c,outer[i],inner[i],['#80603f','#ba8958','#8c603d']),'#765334',Math.max(.22,w*.002));}
 c.strokeStyle='#dbc3a0';c.lineWidth=Math.max(.35,w*.009);c.strokeRect(x+bw*.87,y+bh*.87,w-bw*1.74,h-bh*1.74);
 c.strokeStyle='rgba(67,39,19,.18)';c.lineWidth=Math.max(.2,w*.0018);
 for(let i=0;i<3;i++){const t=(i+1)/5;c.beginPath();c.moveTo(x+bw,y+bh*t);c.bezierCurveTo(x+w*.32,y+bh*(t+.15),x+w*.67,y+bh*(t-.12),x+w-bw,y+bh*t);c.stroke();}
 c.restore();
}
function blackArt(c,x,y,w,h){
 c.save();c.translate(x,y);c.scale(w/100,h/100);c.fillStyle='#eae4ce';c.fillRect(0,0,100,100);
 c.strokeStyle='#617640';c.lineWidth=1.8;c.beginPath();c.moveTo(17,100);c.bezierCurveTo(13,65,27,30,33,4);c.stroke();
 for(const [px,py,angle]of [[23,72,-.8],[15,60,.7],[29,48,-.8],[22,36,.6],[33,23,-.55]]){c.save();c.translate(px,py);c.rotate(angle);c.fillStyle='#748a48';c.beginPath();c.ellipse(0,0,5,13,0,0,Math.PI*2);c.fill();c.restore();}
 c.fillStyle='#242a26';c.beginPath();c.moveTo(38,98);c.bezierCurveTo(36,78,42,69,50,61);c.bezierCurveTo(50,54,49,45,50,37);c.lineTo(54,20);c.lineTo(64,33);c.lineTo(74,33);c.lineTo(82,20);c.lineTo(84,43);c.bezierCurveTo(86,52,78,61,76,69);c.bezierCurveTo(76,81,82,93,78,99);c.closePath();c.fill();
 c.strokeStyle='#303630';c.lineWidth=5;c.lineCap='round';c.beginPath();c.moveTo(59,93);c.bezierCurveTo(48,102,28,96,24,98);c.stroke();c.fillStyle='#89915d';for(const px of [60,75]){c.beginPath();c.ellipse(px,44,1.3,1.7,0,0,7);c.fill();}
 c.restore();
}
function drawArtFrame(c,P,u,v,w,h,kind='cat',depth=.14){
 const q=rect(P,u,v,w,h,depth),a=q[0],dx=q[1][0]-a[0],dy=q[1][1]-a[1],ex=q[3][0]-a[0],ey=q[3][1]-a[1];
 c.save();c.transform(dx/w,dy/w,ex/h,ey/h,a[0],a[1]);c.fillStyle='#ede5d4';c.fillRect(0,0,w,h);woodFrame(c,0,0,w,h);
 if(kind==='cat')blackArt(c,w*.085,h*.085,w*.83,h*.83);
 else if(kind==='leaf'){c.strokeStyle='#536b3d';c.lineWidth=.7;c.beginPath();c.moveTo(w*.35,h*.85);c.lineTo(w*.62,h*.18);c.stroke();for(let i=0;i<4;i++){c.save();c.translate(w*(.4+i*.05),h*(.72-i*.15));c.rotate(i%2?.6:-.6);c.fillStyle=i%2?'#84925a':'#667945';c.beginPath();c.ellipse(0,0,w*.13,h*.12,0,0,7);c.fill();c.restore();}}
 else{c.fillStyle='#262b26';for(const [cx,cy,size]of [[.4,.62,.19],[.7,.31,.125]])for(const [px,py,r]of [[-.65,-.65,.33],[-.16,-1,.34],[.4,-.88,.33],[.85,-.42,.3],[0,.25,.65]]){c.beginPath();c.ellipse(w*(cx+px*size),h*(cy+py*size),w*size*r,h*size*r,-.2,0,7);c.fill();}}

 c.restore();
}
function drawObject(c,o){
 const {P,u,v,w,h,t,kind,color}=o,q=o.front,origin=P(u+w/2,o.bottom,t),top=P(u+w/2,v,t),rx=Math.hypot(q[1][0]-q[0][0],q[1][1]-q[0][1])/2;
 c.save();
 if(['receiver','console','remote','controller','disc'].includes(kind)){
  const shadow=rect(P,u-.5,o.bottom,w+1,1.5,t+.15);polygon(c,shadow,'rgba(28,24,20,.35)');
  polygon(c,o.faces[3],kind==='console'?'#9babae':'#14191e','#20282d',.3);
  polygon(c,o.faces[2],kind==='console'?'#94a0a6':'#171e24','#20282d',.3);
  polygon(c,o.faces[1],gradient(c,o.back[0],q[0],[lighter(color,.28),color]),'#616b70',.35);
  polygon(c,q,gradient(c,q[0],q[3],[lighter(color,.12),color]),'#222b30',.4);
  if(kind==='receiver'){
   polygon(c,rect(P,u+w*.06,v+h*.25,w*.27,h*.42,t-.005),'#10181c');
   for(let i=0;i<5;i++)polygon(c,rect(P,u+w*(.43+i*.065),v+h*.3,w*.023,h*.44,t-.01),'#11171a');
   const led=P(u+w*.9,v+h*.55,t-.01);c.fillStyle='#a5c58a';c.beginPath();c.arc(...led,.7,0,7);c.fill();
  }else if(kind==='console'){
   polygon(c,rect(P,u+w*.32,v+1,w*.37,h-2,t-.01),'#242f37');polygon(c,rect(P,u+w*.44,v+h*.5,w*.1,h*.28,t-.02),'#10171e');
  }else if(kind==='remote'){
   for(let i=0;i<3;i++)polygon(c,rect(P,u+w*(.2+i*.24),v+h*.26,w*.09,h*.4,t-.01),'#a1aaad');
  }else if(kind==='controller'){
   for(const x of [.26,.7]){const p=P(u+w*x,v+h*.4,t-.01);c.fillStyle='#899397';c.beginPath();c.arc(...p,Math.max(.7,h*.16),0,7);c.fill();}
  }else{polygon(c,rect(P,u+1,v+h*.32,w-2,Math.max(.4,h*.18),t-.01),'#e5dfcd');}
 }else if(kind==='book'||kind==='frame'||kind==='blackFrame'){

  polygon(c,o.faces[2],'#806c52','#6d614d',.25);polygon(c,o.faces[1],'#e5ddc5','#a9997c',.25);polygon(c,q,gradient(c,q[0],q[1],[color,lighter(color,.18),color]),'#8f7b5f',.3);
  if(kind==='book'){for(const a of [.13,.18,.77]){const p0=P(u+w*.13,v+h*a,t),p1=P(u+w*.87,v+h*a,t);c.strokeStyle='rgba(68,54,36,.5)';c.lineWidth=.3;c.beginPath();c.moveTo(...p0);c.lineTo(...p1);c.stroke();}}
  else drawArtFrame(c,P,u,v,w,h,kind==='blackFrame'?'cat':'leaf',t);
 }else{
  const height=Math.hypot(top[0]-origin[0],top[1]-origin[1]);c.translate(...origin);c.fillStyle='rgba(52,35,17,.21)';c.beginPath();c.ellipse(1,1,rx*.76,Math.max(1,rx*.22),0,0,7);c.fill();
  if(kind==='vase'||kind==='plant'||kind==='reeds'){
   const ph=kind==='plant'?height*.35:kind==='reeds'?height*.37:height,pr=kind==='plant'?rx*.62:rx*.8;
   c.fillStyle=gradient(c,[-pr,0],[pr,0],kind==='reeds'?['#54412d',color,'#b59769','#684f32']:['#9b8d74',color||'#e5ddca','#f9f3e8','#aa9d86']);c.beginPath();c.moveTo(-pr*.8,0);c.bezierCurveTo(-pr,-ph*.2,-pr*1.1,-ph*.62,-pr*.6,-ph);c.lineTo(pr*.6,-ph);c.bezierCurveTo(pr*1.1,-ph*.62,pr,-ph*.2,pr*.8,0);c.closePath();c.fill();
   c.fillStyle='#84765d';c.beginPath();c.ellipse(0,-ph,pr*.6,pr*.18,0,0,7);c.fill();
   if(kind==='plant')for(let i=0;i<12;i++){const a=i*2.399,x=Math.sin(a)*rx*.87,yy=-ph-height*.19-(i%4)*height*.105;c.strokeStyle='#526536';c.lineWidth=.55;c.beginPath();c.moveTo(0,-ph);c.quadraticCurveTo(x*.3,yy+height*.1,x,yy);c.stroke();c.save();c.translate(x,yy);c.rotate(a);c.fillStyle=gradient(c,[-rx*.3,0],[rx*.3,0],['#3e562b','#8ca15b']);c.beginPath();c.ellipse(0,0,rx*.28,height*.12,0,0,7);c.fill();c.restore();}
   if(kind==='reeds')for(let i=0;i<7;i++){c.strokeStyle=i%2?'#40382a':'#62523a';c.lineWidth=.65;c.beginPath();c.moveTo((i-3)*rx*.1,-ph*.85);c.lineTo((i-3)*rx*.22,-height*(.9+(i%3)*.05));c.stroke();}
  }else if(kind==='lamp'){
   c.fillStyle='#9e7844';c.beginPath();c.ellipse(0,-1,rx*.72,rx*.18,0,0,7);c.fill();c.fillStyle=gradient(c,[-rx*.2,0],[rx*.2,0],['#9a7039','#dfc78e','#8d693c']);c.fillRect(-rx*.18,-height*.59,rx*.36,height*.56);
   c.fillStyle=gradient(c,[-rx,-height*.7],[rx,-height*.7],['#e2cea0','#fff7d8','#e9d8b6']);c.beginPath();c.moveTo(-rx,-height*.55);c.lineTo(-rx*.6,-height);c.quadraticCurveTo(0,-height*1.03,rx*.6,-height);c.lineTo(rx,-height*.55);c.quadraticCurveTo(0,-height*.5,-rx,-height*.55);c.fill();
  }
 }
 c.restore();
}
function drawCabinet(c,m){
 const {P,a,b,top,bottom}=m,w=b-a;
 polygon(c,[m.back[3],m.back[2],[m.front[2][0]+9,m.front[2][1]+6],[m.front[3][0]-9,m.front[3][1]+6]],'rgba(64,36,14,.14)');
 polygon(c,m.faces[3],gradient(c,m.back[0],m.front[0],['#a07a50','#d5b184']),'#9d7a52');polygon(c,m.faces[2],gradient(c,m.back[1],m.front[1],['#9f7b54','#dfc29a']),'#98754e');
 polygon(c,m.front,'#d0ad81','#a4845c');
 for(const bay of m.bays){
  polygon(c,bay.front,'#8c6e49');polygon(c,bay.back,gradient(c,bay.back[0],bay.back[3],['#a9875b','#c6a477']));
  polygon(c,bay.ceiling,'#9f7f56');for(const side of bay.sides)polygon(c,side,gradient(c,side[0],side[1],['#b99768','#876a45']));polygon(c,bay.floor,gradient(c,bay.floor[0],bay.floor[3],['#e3c493','#b08b5c']));
  c.save();c.beginPath();bay.front.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.closePath();c.clip();
  for(const o of [...bay.objects].sort((x,y)=>y.t-x.t))drawObject(c,o);c.restore();
  polygon(c,rect(P,bay.u-1,bay.v+bay.h,w-16,4,0),'#d5b182','#98754e',.4);
  const q=rect(P,bay.u,bay.v+bay.h,w-18,.8,0);polygon(c,q,'#f4dec0');
 }
 const rail=7;for(const u of [a,b-rail])polygon(c,rect(P,u,top,rail,bottom-top,0),gradient(c,P(u,top),P(u+rail,top),['#b38e62','#ead0a7','#b18a5c']),'#a38157',.4);
 polygon(c,rect(P,a,top,w,7,0),'#dcb98a','#9e7b52',.4);polygon(c,m.faces[1],gradient(c,m.back[0],m.front[0],['#d7b88e','#f0d8b2']),'#ab895e',.4);
 if(!/glass/.test(m.id)&&bottom-m.doorTop>10){
  const count=/sideboard/.test(m.id)?3:2,du=(w-16)/count;
  for(let i=0;i<count;i++){const u=a+8+i*du,v=m.doorTop+3,h=bottom-v-9;polygon(c,rect(P,u,v,du-1.4,h,0),gradient(c,P(u,v),P(u,v+h),['#e5c99f','#d7b88c']),'#b29369',.45);const p=P(u+du*.52,v+9,-.015);c.fillStyle='#a5814d';c.fillRect(p[0]-1.8,p[1]-.45,3.6,1);}
 }else if(/glass/.test(m.id)){
  const u=a+w/2;polygon(c,rect(P,u-1.4,top+7,2.8,bottom-top-14,-.01),'#d6b58a','#a3865d',.3);
  c.save();polygon(c,rect(P,a+8,top+8,w-16,bottom-top-16,-.015),'rgba(224,238,231,.07)');c.strokeStyle='rgba(255,255,244,.2)';c.lineWidth=1;for(const k of [.24,.7]){const p=P(a+w*k,top+17),q=P(a+w*(k-.1),bottom-18);c.beginPath();c.moveTo(...p);c.lineTo(...q);c.stroke();}c.restore();
 }
 polygon(c,rect(P,a+5,bottom-6,w-10,5,0),'#bc9566','#98734b',.4);
 for(const o of m.topProps)drawObject(c,o);
}
function drawModels(c,models){
 for(const m of [...models].sort((a,b)=>Math.max(...a.front.map(p=>p[1]))-Math.max(...b.front.map(p=>p[1])))){
  const tr=c.getTransform?.(),scale=tr?Math.max(1,Math.ceil(Math.hypot(tr.a,tr.b)*8)/8):1,b=m.bounds,key=m.id+':'+scale;
  if(!root.document||b.w*scale>4096||b.h*scale>4096){drawCabinet(c,m);continue;}
  let cached=tileCache.get(key);
  if(!cached){const canvas=root.document.createElement('canvas');canvas.width=Math.ceil(b.w*scale);canvas.height=Math.ceil(b.h*scale);const t=canvas.getContext('2d');t.setTransform(scale,0,0,scale,-b.x*scale,-b.y*scale);t.imageSmoothingQuality='high';drawCabinet(t,m);cached={canvas,b};for(const k of tileCache.keys())if(k.startsWith(m.id+':'))tileCache.delete(k);tileCache.set(key,cached);}
  c.drawImage(cached.canvas,0,0,cached.canvas.width,cached.canvas.height,b.x,b.y,cached.canvas.width/scale,cached.canvas.height/scale);
 }
}
function drawWallDetails(c,scene,floor){
 const g=scene.panoramaLayout(floor),P=(u,v)=>{const p=g.project(u,v);return [p.x,p.y];};drawArtFrame(c,P,847,123,57,57,'paw');drawClock(c,P,921,86,30);
}
function drawClock(c,P,u,v,r){const o=P(u,v),a=P(u+r,v),b=P(u,v+r);c.save();c.transform((a[0]-o[0])/r,(a[1]-o[1])/r,(b[0]-o[0])/r,(b[1]-o[1])/r,...o);c.fillStyle='#ba9464';c.beginPath();c.arc(0,0,r,0,7);c.fill();c.fillStyle='#f0eadb';c.beginPath();c.arc(0,0,r-2.3,0,7);c.fill();c.fillStyle='#625c4e';c.font=(r*.25)+'px serif';c.textAlign='center';c.textBaseline='middle';for(let i=1;i<=12;i++){const a=i*Math.PI/6;c.fillText(String(i),Math.sin(a)*r*.76,-Math.cos(a)*r*.76);}c.strokeStyle='#4b4e43';c.lineWidth=1.1;c.beginPath();c.moveTo(-r*.5,-r*.2);c.lineTo(0,0);c.lineTo(r*.28,-r*.48);c.stroke();c.restore();}
function drawDesktop(c,scene,floor,standingPlant=null){const g=scene.panoramaLayout(floor);if(!desktopModels||desktopModels.floor!==floor)desktopModels={floor,models:cabinetModel(g)};drawModels(c,desktopModels.models);drawWallDetails(c,scene,floor);scene.drawDesktopTelevision?.(c,g,null);scene.drawStandingPlant?.(c,standingPlant,floor);}
const phonePatches=new WeakMap();
function restorePhoneBackdrop(c,photo){
 if(!photo?.complete||!photo.naturalWidth||!root.document)return;
 let patches=phonePatches.get(photo);
 if(!patches){patches=[];for(const box of [{x:35,y:158,w:257,h:84},{x:574,y:46,w:94,h:92}]){
  const canvas=root.document.createElement('canvas');canvas.width=box.w;canvas.height=box.h;const p=canvas.getContext('2d',{willReadFrequently:true});p.drawImage(photo,box.x,box.y,box.w,box.h,0,0,box.w,box.h);const image=p.getImageData(0,0,box.w,box.h),d=image.data;
  for(let y=0;y<box.h;y++){const left=[...d.slice(y*box.w*4,y*box.w*4+3)],right=[...d.slice((y*box.w+box.w-1)*4,(y*box.w+box.w-1)*4+3)];for(let x=0;x<box.w;x++){const a=Math.max(0,Math.min(1,x/6,(box.w-1-x)/6,y/6,(box.h-1-y)/6)),i=(y*box.w+x)*4,t=x/(box.w-1);for(let k=0;k<3;k++)d[i+k]=d[i+k]*(1-a)+(left[k]*(1-t)+right[k]*t)*a;}}
  p.putImageData(image,0,0);patches.push({...box,canvas});
 }phonePatches.set(photo,patches);}
 for(const p of patches)c.drawImage(p.canvas,p.x,p.y);
}
function drawPhone(c,scene,floor,left,width,photo){
 if(!photo?.complete||!photo.naturalWidth)return;c.save();c.translate(left,0);c.scale(width/photo.naturalWidth,floor/(photo.naturalHeight*.344));
 if(!phoneModels){const P=(u,v,t=0)=>[u+18*t,v-12*t],side=makeCabinet({id:'phone-sideboard',a:31,b:280,top:245,bottom:346,P,phone:true},1);
 const open=makeCabinet({id:'phone-open',a:1455,b:1583,top:-10,bottom:407,P:(u,v,t=0)=>[u+21*t,v-13*t],phone:true},2);phoneModels=[side,open];}drawModels(c,phoneModels);
 drawArtFrame(c,(u,v)=>[u,v],491,125,82,67,'paw');drawClock(c,(u,v)=>[u,v],619,88,32);c.restore();
}
const matTextures=new WeakMap();
function paintStraightMat(c,photo){
 // Inset the fabric silhouette to exclude photographed floor and the loose label.
 // Rectify the photographed trapezoid into a level rectangle, using only source pixels.
 c.save();c.beginPath();c.moveTo(62,2);c.lineTo(688,2);c.bezierCurveTo(721.12,2,748,33.36,748,72);c.lineTo(748,413);c.bezierCurveTo(748,443.38,723.38,468,693,468);c.lineTo(57,468);c.bezierCurveTo(26.62,468,2,443.38,2,413);c.lineTo(2,72);c.bezierCurveTo(2,33.36,28.88,2,62,2);c.closePath();c.clip();
 const left=v=>[381-25*v,346+430*v],right=v=>[1081+18*v,349+455*v],rows=470;
 for(let i=0;i<rows;i++){
  const v=i/rows,next=(i+1)/rows,dy=i,dh=1,L=left(v),R=right(v),N=left(next),a=(R[0]-L[0])/750,b=(R[1]-L[1])/750,u=(N[0]-L[0])/dh,d=(N[1]-L[1])/dh,det=a*d-b*u;
  c.save();c.beginPath();c.rect(0,dy,750,dh);c.clip();c.translate(0,dy);c.transform(d/det,-b/det,-u/det,a/det,(-d*L[0]+u*L[1])/det,(b*L[0]-a*L[1])/det);
  c.drawImage(photo,0,0,photo.naturalWidth,photo.naturalHeight,0,0,1280,960);c.restore();
 }c.restore();
}
function drawMat(c,photo,mat){
 if(!photo?.complete||!photo.naturalWidth)return;
 let texture=matTextures.get(photo);
 if(!texture&&root.document){texture=root.document.createElement('canvas');texture.width=750;texture.height=470;paintStraightMat(texture.getContext('2d'),photo);matTextures.set(photo,texture);}
 c.save();c.translate(mat.x-mat.width/2,mat.y-mat.height/2);c.scale(mat.width/750,mat.height/470);
 if(texture)c.drawImage(texture,0,0);else paintStraightMat(c,photo);c.restore();
}
function drawMatSleeper(c,photo,mat,time=0){
 if(!photo?.complete||!photo.naturalWidth)return false;
 const crop={x:32,y:186,width:1854,height:550},scale=Math.min(mat.width*.94/crop.width,mat.height*.8/crop.height),width=crop.width*scale,baseHeight=crop.height*scale,height=baseHeight*(1+Math.sin(time*1.6)*.008);
 const x=mat.x-width/2,y=mat.y+baseHeight/2-height;
 c.save();c.imageSmoothingQuality='high';c.drawImage(photo,crop.x,crop.y,crop.width,crop.height,x,y,width,height);c.restore();return true;
}
root.RoomDetail={cabinetModel,drawDesktop,drawPhone,drawMat,drawMatSleeper,woodFrame,blackArt,drawModels,restorePhoneBackdrop};
})(typeof window!=='undefined'?window:globalThis);
