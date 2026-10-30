/* Independently lit scene and fabric. Geometry uses the retained room's 1586px wall. */
(function(root){
'use strict';
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),mix=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*t),rgb=a=>'rgb('+a.map(Math.round).join(',')+')',hash=n=>{const v=Math.sin(n*127.13+31.7)*43758.5453;return v-Math.floor(v);};
function lighting(s,date,t,reduced=false){
 const alt=s.sun.altitude,day=clamp((alt+.12)/.28),dusk=(1-clamp(Math.abs(alt-.01)/.2))*(1-clamp((alt-.12)/.2)),cloud=s.stale?.45:s.cloud/100;
 const f=s.stale?{}:s.flags,wet=!!(f.rain||f.drizzle||f.snow||f.hail),storm=!!f.storm;
 const month=Number(new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Taipei',month:'numeric'}).format(date));
 const season=month>=3&&month<=5?0:month>=6&&month<=8?1:month>=9&&month<=11?2:3;
 const leaf=[[105,146,82],[49,112,70],[116,128,69],[77,110,92]][season];
 const flash=storm&&!reduced?(t%23<.28?Math.sin(t%23/.28*Math.PI)*.65:0):0;
 const sky=mix(mix([12,22,43],[95,173,219],day),storm?[55,68,87]:[118,137,151],cloud*(storm?.9:.8));
 const horizon=mix(mix(mix([31,43,67],[202,226,233],day),[244,165,118],dusk*(1-cloud*.75)),[87,103,119],storm?.8:cloud*.22);
 // Interior lamplight remains warm; exterior light contributes at the glass-facing edge.
 const fabric=mix(mix([123,113,100],[230,218,194],day*(1-cloud*.4)),[241,189,143],dusk*.35);
 return {day,dusk,cloud,season,leaf:mix([19,39,37],leaf,day),sky,horizon,fabric,flash,wet,storm,flags:f,rainCount:wet?f.drizzle?45:f.snow?45:Math.min(190,85+(s.current?.precipitation||0)*9):0,wind:clamp((s.current?.wind_speed_10m||0)/25,0,2),t:reduced?0:t};
}
function polygon(c,points,color){c.fillStyle=color;c.beginPath();c.moveTo(...points[0]);for(const p of points.slice(1))c.lineTo(...p);c.closePath();c.fill();}
function sky(c,s,l,showBodies=true,span=null){
 const grad=c.createLinearGradient(0,25,0,250);grad.addColorStop(0,rgb(l.sky));grad.addColorStop(.7,rgb(l.horizon));grad.addColorStop(1,rgb(mix(l.horizon,[133,151,152],l.day*.35)));c.fillStyle=grad;c.fillRect(735,25,420,230);
 if(l.day<.3&&l.cloud<.6){for(let i=0;i<38;i++){c.globalAlpha=(1-l.day)*(1-l.cloud)*(.25+hash(i)*.45);c.fillStyle='#f0e6d0';c.fillRect(744+hash(i+8)*390,35+hash(i+70)*95,hash(i+90)>.7?1.2:.6,.8);}c.globalAlpha=1;}
 for(const [body,moon]of showBodies?[[s.sun,false],[s.moon,true]]:[]){
  if(body.altitude<-.015||l.cloud>.92||l.wet||moon&&l.day>.65)continue;
  const az=(body.azimuth*180/Math.PI+540)%360,x=(span?span.x0:752)+clamp((az-50)/260)*(span?span.x1-span.x0:372),y=(span?span.y1:145)-clamp(body.altitude/1.4)*(span?span.y1-span.y0:100),r=moon?7:11;
  const glow=c.createRadialGradient(x,y,1,x,y,r*4);glow.addColorStop(0,moon?'rgba(232,236,255,.28)':'rgba(255,226,150,.45)');glow.addColorStop(1,'rgba(255,230,190,0)');c.fillStyle=glow;c.fillRect(x-r*4,y-r*4,r*8,r*8);
  c.fillStyle=moon?'#f5ead3':'#fff0c4';c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();
  if(moon){c.fillStyle=rgb(l.sky);c.beginPath();c.ellipse(x+(s.illum.phase<.5?-1:1)*r*s.illum.fraction*1.6,y,r*(1-s.illum.fraction*.6),r,0,0,Math.PI*2);c.fill();}
 }
 for(let layer=0;layer<3;layer++){
  const count=Math.round(2+l.cloud*8);for(let i=0;i<count;i++){
   const x=690+((hash(i+layer*23)*520+l.t*(.6+layer*.5)*(1+l.wind))%520),y=43+hash(i+91+layer)*72;
   c.fillStyle=rgb(mix(mix([39,48,69],[243,241,231],l.day),[98,117,135],l.cloud*.75));c.globalAlpha=.22+l.cloud*.24;
   c.beginPath();for(let k=0;k<6;k++)c.ellipse(x+k*12,y+Math.sin(k*1.7+i)*6,16+hash(k+i)*18,7+layer*2,0,0,Math.PI*2);c.fill();
  }
 }c.globalAlpha=1;
}
function landscape(c,l){
 for(let layer=0;layer<3;layer++){
  const pts=[[735,255]];for(let x=735;x<=1165;x+=8)pts.push([x,148+layer*17-Math.sin(x*.012+layer)*14-Math.sin(x*.03)*5]);pts.push([1165,255]);polygon(c,pts,rgb(mix(l.sky,l.leaf,.28+layer*.17)));
 }
 // Concrete apartment blocks with roofs, window recesses and exterior AC units.
 for(let i=0;i<11;i++){
  const x=731+i*40,y=158+hash(i+9)*33,w=29+hash(i)*13,h=95;
  c.fillStyle=rgb(mix([35,43,54],[164+hash(i)*26,165,157],l.day*(1-l.cloud*.2)));c.fillRect(x,y,w,h);
  c.fillStyle=rgb(mix([23,29,39],[132,139,137],l.day));c.fillRect(x+w-4,y,4,h);c.fillRect(x-2,y-3,w+3,3);
  for(let row=0;row<6;row++)for(let col=0;col<3;col++){
   const lit=l.day<.6&&hash(i*31+row*5+col)>.48;
   c.fillStyle=lit?'#c6a570':rgb(mix([17,26,38],[92,119,128],l.day));c.fillRect(x+4+col*8,y+7+row*12,4.5,6);
   if(col===1&&row%2===0){c.fillStyle=rgb(mix([52,56,61],[190,190,178],l.day));c.fillRect(x+3+col*8,y+14+row*12,7,2);}
  }
 }
 // Evergreen subtropical canopy; a little autumn warmth, never all bare trees.
 for(let i=0;i<110;i++){
  const x=736+hash(i+90)*414,y=223+hash(i+67)*35+Math.sin(i)*8,sway=Math.sin(l.t*.7+i)*l.wind*.7;
  c.fillStyle=rgb(mix(l.leaf,l.season===2?[147,124,61]:[143,165,85],hash(i+2)*l.day*.34));c.beginPath();c.ellipse(x+sway,y,7+hash(i)*10,5+hash(i+13)*8,hash(i)*2,0,Math.PI*2);c.fill();
 }
 if(l.flags.fog||l.wet){const fog=c.createLinearGradient(0,110,0,250);fog.addColorStop(0,'rgba(155,172,185,'+(l.flags.fog?.55:.12)+')');fog.addColorStop(1,'rgba(155,172,185,0)');c.fillStyle=fog;c.fillRect(735,110,420,145);}
}
function precipitation(c,l){
 if(!l.wet)return;const snow=l.flags.snow,hail=l.flags.hail;
 for(let i=0;i<l.rainCount;i++){
  const depth=.4+hash(i+31)*.6,x=735+((hash(i)*430+l.t*l.wind*18*depth)%430),y=30+((hash(i+17)*225+l.t*(snow?14:110+depth*100))%225);
  c.strokeStyle='rgba(215,231,239,'+(.15+depth*.35)+')';c.lineWidth=l.flags.drizzle?.5:.5+depth*.5;
  if(snow||hail){c.fillStyle='rgba(238,243,249,.8)';c.beginPath();c.arc(x,y,hail?1.3:1.1,0,7);c.fill();}else{c.beginPath();c.moveTo(x,y);c.lineTo(x-l.wind*4,y+(l.flags.drizzle?4:10)*depth);c.stroke();}
 }
 if(!snow)for(let i=0;i<(l.flags.drizzle?16:32);i++){
  const x=745+hash(i+53)*389,y=36+((hash(i+6)*210+l.t*(1+hash(i)*5))%210),r=.65+hash(i+88)*1.1;
  c.strokeStyle='rgba(222,239,247,.32)';c.lineWidth=.6;c.beginPath();c.ellipse(x,y,r,r*1.6,0,0,7);c.stroke();c.beginPath();c.moveTo(x,y-r);c.lineTo(x,y-r-3-hash(i)*7);c.stroke();
 }
}
function lightning(c,l){if(!l.flash)return;c.fillStyle='rgba(224,234,255,'+l.flash*.45+')';c.fillRect(735,28,420,224);
 const x=790+hash(Math.floor(l.t/23))*280;const pts=[[x,37],[x-9,58],[x+1,55],[x-15,83],[x-4,77],[x-25,111]];c.strokeStyle='rgba(239,243,255,'+Math.min(1,l.flash*2)+')';c.lineWidth=1.5;c.beginPath();c.moveTo(...pts[0]);for(const p of pts.slice(1))c.lineTo(...p);c.stroke();c.lineWidth=.65;c.beginPath();c.moveTo(x-9,58);c.lineTo(x+11,75);c.lineTo(x+14,93);c.stroke();}
const geometry={left:742,right:1142,center:942,top:28,bottom:248,curtainHem:334,curtainMirror:1884,panes:[{left:750,top:36,width:186,height:204},{left:948,top:36,width:186,height:204}]};
function curtains(c,l,backdrop){
 // Original linen drape, mirrored about the window centre: identical length,
 // real tiebacks and photographic folds rather than an invented hourglass.
 for(const right of [false,true]){
  c.save();if(right){c.translate(geometry.curtainMirror,0);c.scale(-1,1);}
  // Opaque original linen only: no translucent bands over the glass.
  c.translate(664,0);c.scale(1.4,1);c.translate(-664,0);
  c.save();c.beginPath();c.moveTo(678,0);c.lineTo(744,0);
  c.bezierCurveTo(741,70,724,148,723,175);
  c.bezierCurveTo(723,204,733,277,738,331);
  c.quadraticCurveTo(706,336,666,331);
  c.bezierCurveTo(666,247,674,103,678,0);c.closePath();c.clip();
  if(backdrop?.complete&&backdrop.naturalWidth){
   c.drawImage(backdrop,664,0,128,334,664,0,128,334);
  }else{
   const fabric=c.createLinearGradient(666,0,744,0);for(let j=0;j<=12;j++)fabric.addColorStop(j/12,rgb(l.fabric.map(v=>v*(.78+.2*Math.cos(j*2.3)))));c.fillStyle=fabric;c.fillRect(664,0,128,334);
  }c.restore();c.restore();
 }
}
function windowFrame(c,l){
 const g=geometry,frame=rgb(mix([194,188,177],[247,243,233],.45+l.day*.55));
 c.fillStyle=frame;c.fillRect(g.left,20,g.right-g.left,16);c.fillRect(g.left,240,g.right-g.left,20);
 c.fillRect(g.left,28,8,220);c.fillRect(g.right-8,28,8,220);c.fillRect(g.center-6,28,12,220);
 c.strokeStyle=rgb(mix([119,119,115],[190,191,183],l.day));c.lineWidth=1;
 for(const p of g.panes)c.strokeRect(p.left,p.top,p.width,p.height);
 c.fillStyle='#ada99d';c.fillRect(g.left+4,253,g.right-g.left-8,2);
 c.fillStyle='#736f63';c.fillRect(g.center-4,126,3,13);c.fillRect(g.center+1,126,3,13);
}
// Back wall and two side walls share a single camera and vanishing point.
function panoramaLayout(floor=215){
 const scale=floor/322,edges=[0,274,280,526,529,952,964,1460,1488,2048],gaps=[160,130,200];
 const fixed=(274+246+423+496+560)*scale;gaps.push(2400-fixed-gaps.reduce((a,b)=>a+b,0));
 let x=-900;const segments=[];
 for(let i=0;i<edges.length-1;i++){const width=i%2?gaps[(i-1)/2]:(edges[i+1]-edges[i])*scale;segments.push({source:edges[i],sourceWidth:edges[i+1]-edges[i],x,width});x+=width;}
 const mapX=u=>{const a=segments.find(a=>u>=a.source&&u<=a.source+a.sourceWidth)||segments.at(-1);return a.x+(u-a.source)*a.width/a.sourceWidth;};
 const project=(u,v)=>{
  let x=mapX(u),depth=1;
  if(u<=526){x=-1000+u*550/526;depth=(300-x)/750;}
  else if(u>=1488){x=1050+(u-1488)*550/560;depth=(x-300)/750;}
  return {x,y:-100+(v*scale+100)*depth};
 };
 const rect=([x,y,w,h])=>{const polygon=[[x,y],[x+w,y],[x+w,y+h],[x,y+h]].map(([u,v])=>project(u,v)),left=Math.min(...polygon.map(p=>p.x)),top=Math.min(...polygon.map(p=>p.y));return {x:left,y:top,width:Math.max(...polygon.map(p=>p.x))-left,height:Math.max(...polygon.map(p=>p.y))-top,polygon};};
 const windows=[
  {main:true,bounds:rect([1046,53,335,170]),panes:[[1046,53,158,170],[1216,53,165,170]].map(rect)},
  {main:false,bounds:rect([347,64,115,152]),panes:[[347,64,51,152],[409,64,53,152]].map(rect)},
 ];
 const curtains=[[[287,22],[344,22],[336,110],[327,173],[343,315],[286,315],[299,173]],[[464,22],[520,22],[508,173],[520,315],[464,315],[478,173]],[[970,22],[1046,22],[1031,100],[1021,169],[1045,315],[970,315],[985,167]],[[1380,22],[1454,22],[1442,167],[1452,315],[1377,315],[1393,167]]];
 const obstacles=[];
 obstacles.push([[-1e6,0],[-450,0],[-450,floor],[-1000,project(0,322).y],[-1e6,project(0,322).y]],[[-1e6,0],[-1000,0],[-1000,820],[-1e6,820]],[[1050,0],[1e6,0],[1e6,820],[1600,820],[1600,project(2048,322).y],[1050,floor]]);
 const objects=[
  [[73,32],[259,32],[272,36],[272,315],[260,322],[73,322]],
  [[338,48],[474,48],[474,238],[338,238]],
  [[282,16],[526,16],[526,28],[282,28]],
  [[533,38],[698,38],[698,96],[533,96]],
  [[529,229],[722,229],[736,233],[736,316],[724,322],[529,322]],
  [[538,174],[588,174],[588,231],[538,231]],
  [[593,178],[641,178],[641,231],[593,231]],
  [[653,164],[676,164],[685,198],[670,198],[670,224],[681,225],[681,231],[647,231],[647,225],[659,224],[659,198],[645,198]],
  [[687,175],[719,175],[719,231],[687,231]],
  [[728,69],[835,69],[835,177],[728,177]],
  [[847,123],[904,123],[904,180],[847,180]],
  Array.from({length:40},(_,i)=>[921+31*Math.cos(i*Math.PI/20),86+31*Math.sin(i*Math.PI/20)]),
  [[1033,43],[1398,43],[1398,248],[1033,248]],
  [[967,16],[1458,16],[1458,28],[967,28]],
  [[1490,33],[1607,33],[1607,322],[1490,322]],
  [[1606,246],[1832,246],[1832,322],[1606,322]],
  [[1624,126],[1801,126],[1801,244],[1761,249],[1650,249],[1624,244]],
  [[1783,211],[1818,211],[1818,248],[1783,248]],
  [[1821,29],[1962,29],[1962,322],[1821,322]],
  ...curtains,
 ];
 // The wall projection is retained for windows and trim. Furniture has a
 // separate front plane and actual floor depth; it is never a wall decal.
 const specs=[
  {id:'left-display',side:'left',a:73,b:259,top:32,bottom:322,offset:-70,art:[0]},
  {id:'back-sideboard',side:'back',a:529,b:724,top:229,bottom:322,art:[4,5,6,7,8]},
  {id:'right-open',side:'right',a:1490,b:1607,top:33,bottom:322,art:[14]},
  {id:'right-console',side:'right',a:1607,b:1832,top:246,bottom:322,art:[15,16,17]},
  {id:'right-glass',side:'right',a:1821,b:1959,top:29,bottom:322,art:[18]},
 ];
 const furniture=specs.map(item=>{
  const depth=item.side==='back'?14:item.side==='left'?56:64,factor=item.side==='back'?1:1-depth/750,wallProject=(u,v)=>project(u+(item.offset||0),v);
  const front=(u,v)=>{const p=wallProject(u,v);return item.side==='back'?{x:p.x-8,y:p.y+depth}:{x:300+(p.x-300)*factor,y:p.y};};
  const footprint=[wallProject(item.a,item.bottom),wallProject(item.b,item.bottom),front(item.b,item.bottom),front(item.a,item.bottom)].map(p=>[p.x,p.y]);
  obstacles.push(footprint);return {...item,depth,factor,wallProject,project:front,footprint,objects:item.art.map(i=>objects[i])};
 });
 const used=new Set(specs.flatMap(a=>a.art)),wallObjects=objects.filter((_,i)=>!used.has(i));
 // A freestanding pot must clear the skirting, including its broad lower bowl.
 const potWall=project(2008,322),plant={x:potWall.x-130,y:potWall.y+34,height:132*(potWall.x-300)/750};
 plant.footprint=Array.from({length:16},(_,i)=>[plant.x+34*Math.cos(i*Math.PI/8),plant.y+15*Math.sin(i*Math.PI/8)]);obstacles.push(plant.footprint);
 return {scale,segments,mapX,project,windows,curtains,objects,wallObjects,furniture,plant,obstacles,sunX:(windows[0].bounds.x+windows[0].bounds.width/2)};
}
function photoTriangle(c,im,src,dst){
 const [a,b,d]=src,[p,q,r]=dst,ux=b[0]-a[0],uy=b[1]-a[1],vx=d[0]-a[0],vy=d[1]-a[1],det=ux*vy-uy*vx;
 const m0=((q.x-p.x)*vy-(r.x-p.x)*uy)/det,m2=(ux*(r.x-p.x)-vx*(q.x-p.x))/det,m1=((q.y-p.y)*vy-(r.y-p.y)*uy)/det,m3=(ux*(r.y-p.y)-vx*(q.y-p.y))/det;
 c.save();c.beginPath();const pa=Math.hypot(q.x-r.x,q.y-r.y),pb=Math.hypot(r.x-p.x,r.y-p.y),pc=Math.hypot(p.x-q.x,p.y-q.y),perimeter=pa+pb+pc,cx=(pa*p.x+pb*q.x+pc*r.x)/perimeter,cy=(pa*p.y+pb*q.y+pc*r.y)/perimeter,inradius=Math.abs((q.x-p.x)*(r.y-p.y)-(q.y-p.y)*(r.x-p.x))/perimeter,expand=1+1.1/Math.max(.01,inradius);
 [p,q,r].forEach((v,i)=>{const x=cx+(v.x-cx)*expand,y=cy+(v.y-cy)*expand;i?c.lineTo(x,y):c.moveTo(x,y);});c.closePath();c.clip();c.transform(m0,m1,m2,m3,p.x-m0*a[0]-m2*a[1],p.y-m1*a[0]-m3*a[1]);c.drawImage(im,0,0);c.restore();
}
function photoGroups(c,im,g,objects,sourceHeight=649){
 const sx=(im.naturalWidth||im.width)/2048,sy=(im.naturalHeight||im.height)/sourceHeight;
 for(const side of ['left','back','right']){
  const group=objects.filter(pts=>side==='left'?Math.max(...pts.map(p=>p[0]))<=526:side==='right'?Math.min(...pts.map(p=>p[0]))>=1488:Math.min(...pts.map(p=>p[0]))>526&&Math.max(...pts.map(p=>p[0]))<1488);if(!group.length)continue;
  c.save();c.beginPath();for(const pts of group){pts.forEach(([u,v],i)=>{const p=g.project(u,v);i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y);});c.closePath();}c.clip();
  if(side==='back'){for(const a of g.segments.filter(a=>a.source>=529&&a.source<1460))c.drawImage(im,a.source*sx,0,a.sourceWidth*sx,322*sy,a.x,0,a.width,322*g.scale);}
  else{
   const left=side==='left'?0:1488,right=side==='left'?526:2048,cols=16,rows=3;
   for(let x=0;x<cols;x++)for(let y=0;y<rows;y++){
    const u0=left+(right-left)*x/cols,u1=left+(right-left)*(x+1)/cols,v0=322*y/rows,v1=322*(y+1)/rows;
    const src=[[u0*sx,v0*sy],[u1*sx,v0*sy],[u1*sx,v1*sy],[u0*sx,v1*sy]],dst=[[u0,v0],[u1,v0],[u1,v1],[u0,v1]].map(([u,v])=>g.project(u,v));
    for(const ids of [[0,1,2],[0,2,3]])photoTriangle(c,im,ids.map(i=>src[i]),ids.map(i=>dst[i]));
   }
  }c.restore();
 }
}
function panoramaSkirting(left=-1000,width=2600,floor=215){
 const g=panoramaLayout(floor),a=g.project(0,322),b=g.project(2048,322),bases=[{x:Math.min(left,a.x),y:a.y},a,{x:-450,y:floor},{x:1050,y:floor},b,{x:Math.max(left+width,b.x),y:b.y}];
 const nodes=bases.map(base=>{const depth=(base.y+100)/(floor+100);return {base,depth,top:{x:base.x,y:base.y-18*depth}};});
 const segments=nodes.slice(1).map((b,i)=>({a:nodes[i],b,wall:i})).filter(p=>p.b.base.x-p.a.base.x>.01);
 return {segments,corners:nodes.slice(1,-1).map((p,i)=>({...p,outer:i===0||i===3,shadowSide:i<2?1:-1}))};
}
function drawPanoramaJoinery(c,trim){
 const band=(a,b,low,high,color)=>polygon(c,[[a.base.x,a.base.y-high*a.depth],[b.base.x,b.base.y-high*b.depth],[b.base.x,b.base.y-low*b.depth],[a.base.x,a.base.y-low*a.depth]],color);
 for(const {a,b,wall}of trim.segments){
  // Floor contact shadow, tall wood face, bevelled top and fine grain.
  band(a,b,-7,-4,'rgba(64,40,20,.025)');band(a,b,-4,-2,'rgba(64,40,20,.065)');band(a,b,-2,0,'rgba(64,40,20,.16)');
  band(a,b,0,16,['#be956b','#b5895e','#c59c70','#b58a60','#bf966c'][wall]);
  band(a,b,0,1.3,'#906a45');band(a,b,14.5,16,'#d7b388');band(a,b,16,18,'#e6c9a4');
  for(const h of [5,10]){c.strokeStyle='rgba(87,53,25,.09)';c.lineWidth=.5;c.beginPath();c.moveTo(a.base.x,a.base.y-h*a.depth);c.lineTo(b.base.x,b.base.y-h*b.depth);c.stroke();}
 }
 for(const p of trim.corners){
  const x=p.base.x,d=p.depth,side=p.shadowSide,w=p.outer?22:14,shade=c.createLinearGradient(x,0,x+side*w,0);shade.addColorStop(0,p.outer?'rgba(87,57,30,.16)':'rgba(87,57,30,.11)');shade.addColorStop(1,'rgba(87,57,30,0)');
  c.fillStyle=shade;c.fillRect(Math.min(x,x+side*w),0,w,p.top.y);
  c.strokeStyle=p.outer?'rgba(106,70,36,.38)':'rgba(106,70,36,.24)';c.lineWidth=p.outer?1.5:1;c.beginPath();c.moveTo(x,0);c.lineTo(x,p.top.y);c.stroke();
  if(p.outer){c.strokeStyle='rgba(255,239,211,.62)';c.lineWidth=1.2;c.beginPath();c.moveTo(x-side*1.5,0);c.lineTo(x-side*1.5,p.top.y);c.stroke();}
  // The mitred wood joint continues through the profile instead of ending a stroke.
  c.strokeStyle='rgba(102,65,32,.48)';c.lineWidth=.8*d;c.beginPath();c.moveTo(x-1.5*d,p.top.y+1.4*d);c.lineTo(x+1.5*d,p.top.y+.2*d);c.lineTo(x+1.5*d,p.base.y);c.stroke();
  c.strokeStyle='rgba(255,229,190,.48)';c.lineWidth=.55*d;c.beginPath();c.moveTo(x-.4*d,p.top.y+1.6*d);c.lineTo(x-.4*d,p.base.y-.8*d);c.stroke();
 }
}
function cabinetSurfaces(item){
 const {a,b,top,bottom,wallProject:wall,project:front}=item;
 const wa=wall(a,top),wb=wall(b,top),fa=front(a,top),fb=front(b,top),ba=wall(a,bottom),bb=wall(b,bottom),pa=front(a,bottom),pb=front(b,bottom);
 const points=arr=>arr.map(p=>[p.x,p.y]);
 return {top:points([wa,wb,fb,fa]),front:points([fa,fb,pb,pa]),sides:[points([wa,fa,pa,ba]),points([wb,fb,pb,bb])]};
}
function phoneTelevision(floor=215){
 const dy=floor-215,shift=pts=>pts.map(([x,y])=>[x,y+dy]);
 // Place the support at the projected centre of the top, including its depth.
 return {stand:{x:656,y:212+dy,rx:20,ry:2.5},pedestal:shift([[652,198],[660,198],[663,210],[649,210]]),screen:shift([[595,125],[717,125],[717,193.625],[595,193.625]]),frame:shift([[590,120],[722,120],[722,199],[590,199]]),
 top:shift([[588,205],[736,205],[724,219],[576,219]]),front:shift([[576,219],[724,219],[724,251],[576,251]]),side:shift([[724,219],[736,205],[736,237],[724,251]]),
 footprint:shift([[588,205],[736,205],[736,251],[576,251]])};
}
function drawPhoneTelevision(c,floor=215){
 const g=phoneTelevision(floor),dy=floor-215;c.save();c.translate(0,dy);
 // A low oak console, fine shadow gaps and recessed plinth replace the old drawers.
 for(const [grow,alpha]of [[7,.035],[3,.06],[0,.1]])polygon(c,[[576-grow,246],[735+grow,236],[741+grow,256],[579-grow,262]],'rgba(55,33,15,'+alpha+')');
 c.fillStyle='#866649';c.fillRect(585,248,131,9);polygon(c,[[716,248],[729,237],[729,247],[716,257]],'#70523a');
 c.restore();c.save();
 const side=c.createLinearGradient(724,0,736,0);side.addColorStop(0,'#b18c63');side.addColorStop(1,'#97714d');polygon(c,g.side,side);
 const front=c.createLinearGradient(0,219+dy,0,251+dy);front.addColorStop(0,'#e4c69f');front.addColorStop(1,'#cfaa7d');c.fillStyle=front;c.beginPath();c.roundRect(576,219+dy,148,32,3);c.fill();
 const lid=c.createLinearGradient(0,205+dy,0,220+dy);lid.addColorStop(0,'#eed9b9');lid.addColorStop(1,'#dfbd92');polygon(c,g.top,lid);
 c.translate(0,dy);
 c.strokeStyle='rgba(255,242,216,.8)';c.lineWidth=1.2;c.beginPath();c.moveTo(578,219);c.lineTo(723,219);c.stroke();
 // Three handle-free doors, inset from the rounded outer casing.
 c.fillStyle='#b18e68';c.fillRect(581,222,138,1.1);
 c.strokeStyle='rgba(130,95,58,.36)';c.lineWidth=.65;
 for(const x of [626,674]){c.beginPath();c.moveTo(x,224);c.lineTo(x,247);c.stroke();}
 c.strokeStyle='rgba(255,236,205,.17)';c.lineWidth=.45;
 for(let i=0;i<19;i++){const x=583+i*7.3;c.beginPath();c.moveTo(x,225);c.bezierCurveTo(x+.8,231,x-.6,239,x+.3,247);c.stroke();}
 // Support and contact shadow share the very same projected top position.
 c.translate(0,-dy);
 const foot=g.stand;
 c.fillStyle='rgba(55,35,19,.20)';c.beginPath();c.ellipse(foot.x,foot.y+1,22,3.2,0,0,Math.PI*2);c.fill();
 polygon(c,g.pedestal,'#343732');
 const base=c.createLinearGradient(0,foot.y-2,0,foot.y+2);base.addColorStop(0,'#4b4e47');base.addColorStop(1,'#242923');
 c.fillStyle=base;c.beginPath();c.ellipse(foot.x,foot.y,foot.rx,foot.ry,0,0,Math.PI*2);c.fill();
 const [f0,f1,,f3]=g.frame,[s0,s1,,s3]=g.screen;
 polygon(c,[[f1[0],f1[1]],[f1[0]+1.5,f1[1]-1],[f1[0]+1.5,f3[1]-1],[f1[0],f3[1]]],'#171c18');
 c.fillStyle='#252823';c.beginPath();c.roundRect(f0[0],f0[1],f1[0]-f0[0],f3[1]-f0[1],2.6);c.fill();
 c.strokeStyle='#55594f';c.lineWidth=.65;c.stroke();
 c.fillStyle='#101513';c.fillRect(s0[0],s0[1],s1[0]-s0[0],s3[1]-s0[1]);
 c.fillStyle='#afbc8a';c.fillRect(f1[0]-7,f3[1]-2,1.6,.8);
 c.restore();
}
function desktopTelevision(floor=215,layout=null){
 const g=layout||panoramaLayout(floor),item=g.furniture.find(i=>i.id==='right-console');
 // The frame, video, stand and pot share the same inset console plane.
 const p=(u,v)=>{const back=item.wallProject(u,v),front=item.project(u,v);return [back.x+(front.x-back.x)*.95,back.y+(front.y-back.y)*.95];};
 const quad=(x,y,w,h)=>[[x,y],[x+w,y],[x+w,y+h],[x,y+h]].map(([u,v])=>p(u,v));
 const base=p(1798,246),height=p(1798,246)[1]-p(1798,214)[1];
 return {frame:quad(1618,139,160,94),screen:quad(1622,143,152,85.5),
 pedestal:[[1694,232],[1702,232],[1707,243],[1689,243]].map(([u,v])=>p(u,v)),
 base:[[1674,243],[1722,243],[1728,246],[1668,246]].map(([u,v])=>p(u,v)),
 plant:{x:base[0],y:base[1],height,width:height*.9}};
}
function televisionScreen(floor=215){return desktopTelevision(floor).screen;}
function drawDesktopTelevision(c,g,plant){
 const tv=desktopTelevision(g.scale*322,g);
 polygon(c,tv.pedestal,'#282d29');polygon(c,tv.base,'#242923');
 const edge=tv.frame.map(([x,y])=>[x+1.7,y-.7]);polygon(c,edge,'#151c17');polygon(c,tv.frame,'#303630');
 c.strokeStyle='#697064';c.lineWidth=.6;c.beginPath();tv.frame.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.stroke();
 polygon(c,tv.screen,'#0b100d');
 if(plant?.complete&&plant.naturalWidth){const p=tv.plant,h=p.width*plant.naturalHeight/plant.naturalWidth;c.save();c.fillStyle='rgba(55,35,17,.17)';c.beginPath();c.ellipse(p.x,p.y+.7,p.width*.27,1.8,0,0,Math.PI*2);c.fill();c.drawImage(plant,p.x-p.width/2,p.y-h,p.width,h);c.restore();}
}
function drawFramedPhoto(c,photo,x,y,width,height,source=null){
 if(!photo?.complete||!photo.naturalWidth)return;
 // Fit the complete original photograph inside the existing frame opening.
 const [sx,sy,sw,sh]=source||[0,0,photo.naturalWidth,photo.naturalHeight],scale=Math.min(width/sw,height/sh),w=sw*scale,h=sh*scale;
 c.save();c.fillStyle='#e9dfcd';c.fillRect(x,y,width,height);c.drawImage(photo,sx,sy,sw,sh,x+(width-w)/2,y+(height-h)/2,w,h);c.restore();
}
function drawMatchingFrame(c,photo,frameImage,x,y,width,{source=null,frameSource=[339,71,137,127],slice=13}={}){
 if(!photo?.complete||!photo.naturalWidth||!frameImage?.complete||!frameImage.naturalWidth)return;
 const [sx,sy,sw,sh]=source||[0,0,photo.naturalWidth,photo.naturalHeight],height=width*sh/sw;
 const [fx,fy,fw,fh]=frameSource,xx=[fx,fx+slice,fx+fw-slice,fx+fw],yy=[fy,fy+slice,fy+fh-slice,fy+fh];
 const dx=[x,x+width*.065,x+width*.935,x+width],dy=[y,y+height*.065,y+height*.935,y+height];
 c.save();c.shadowColor='rgba(60,35,18,.24)';c.shadowBlur=2;c.shadowOffsetX=1;c.shadowOffsetY=1.5;c.fillStyle='#e9dfcd';c.fillRect(x,y,width,height);c.restore();
 // Reuse the original wooden frame edges; both frame and opening follow the image ratio.
 if(root.RoomDetail?.woodFrame)root.RoomDetail.woodFrame(c,x,y,width,height);
 else for(let row=0;row<3;row++)for(let col=0;col<3;col++)if(row!==1||col!==1)c.drawImage(frameImage,xx[col],yy[row],xx[col+1]-xx[col],yy[row+1]-yy[row],dx[col],dy[row],dx[col+1]-dx[col],dy[row+1]-dy[row]);
 const inset=.075;c.drawImage(photo,sx,sy,sw,sh,x+width*inset,y+height*inset,width*(1-inset*2),height*(1-inset*2));
}
const phoneWallCache={image:null,canvas:null};
function restorePhonePhotoWall(c,im){
 if(!im?.complete||!im.naturalWidth)return;
 if(phoneWallCache.image!==im&&root.document){
  const patch=root.document.createElement('canvas');patch.width=155;patch.height=145;
  const p=patch.getContext('2d',{willReadFrequently:true});p.drawImage(im,330,62,155,145,0,0,155,145);
  const pixels=p.getImageData(0,0,155,145),data=pixels.data;
  // Continue the unpainted wall colours from either side, feathering into the source texture.
  for(let y=0;y<145;y++){
   const left=[...data.slice(y*155*4,y*155*4+3)],right=[...data.slice((y*155+154)*4,(y*155+154)*4+3)];
   for(let x=0;x<155;x++){const blend=Math.max(0,Math.min(1,x/8,(154-x)/8,y/8,(144-y)/8)),i=(y*155+x)*4;for(let ch=0;ch<3;ch++)data[i+ch]=data[i+ch]*(1-blend)+(left[ch]*(1-x/154)+right[ch]*x/154)*blend;}
  }
  p.putImageData(pixels,0,0);phoneWallCache.image=im;phoneWallCache.canvas=patch;
 }
 if(phoneWallCache.image===im)c.drawImage(phoneWallCache.canvas,330,62);
}
function wallPhotoGeometry(floor=215,photo=null){
 const g=panoramaLayout(floor),width=112*g.scale*2/3,height=width*(photo?.naturalHeight/photo?.naturalWidth||4/3),center=g.project(781.5,123);
 return {x:center.x-width/2,y:center.y-height/2,width,height};
}
function drawPanoramaFurniture(c,im,g,plant=null,tabletopArt=null){
 for(const item of [...g.furniture].sort((a,b)=>Math.max(...a.footprint.map(p=>p[1]))-Math.max(...b.footprint.map(p=>p[1])))){
  const {a,b,top,bottom,project:front}=item;
  const wa=item.wallProject(a,top),wb=item.wallProject(b,top),fa=front(a,top),fb=front(b,top),ba=item.wallProject(a,bottom),bb=item.wallProject(b,bottom),pa=front(a,bottom),pb=front(b,bottom);
  // The cast shadow belongs to the volume, behind its feet rather than painted
  // on its front. Solid return panels hide the skirting behind each cabinet.
  for(const [spread,alpha]of [[13,.035],[7,.065],[2,.12]])polygon(c,[[ba.x,ba.y],[bb.x,bb.y],[pb.x+spread,pb.y+spread],[pa.x-spread,pa.y+spread]],'rgba(69,42,19,'+alpha+')');
  const topShade=c.createLinearGradient(wa.x,wa.y,fa.x,fa.y+5);topShade.addColorStop(0,'#d1ac7f');topShade.addColorStop(1,'#ead0a8');
  polygon(c,[[wa.x,wa.y],[wb.x,wb.y],[fb.x,fb.y],[fa.x,fa.y]],topShade);
  for(const [w,p,base,foot]of [[wa,fa,ba,pa],[wb,fb,bb,pb]]){
   const sideShade=c.createLinearGradient(w.x,w.y,p.x,p.y);sideShade.addColorStop(0,'#a78057');sideShade.addColorStop(.15,'#bc9467');sideShade.addColorStop(1,'#d5b184');
   polygon(c,[[w.x,w.y],[p.x,p.y],[foot.x,foot.y],[base.x,base.y]],sideShade);
   c.strokeStyle='rgba(96,62,31,.3)';c.lineWidth=.8;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(foot.x,foot.y);c.stroke();
  }
  // An opaque cabinet front closes the shell even where the photograph has
  // narrow recessed or cropped edges. The cap is reapplied after the photo.
  polygon(c,cabinetSurfaces(item).front,'#d0aa7a');
  c.save();
  if(item.side==='back'){c.translate(-8,item.depth);}
  else{c.translate(300,0);c.scale(item.factor,1);c.translate(-300,0);}
  // Use only the original front: the formerly baked narrow side strips are
  // replaced by the real return panels above.
  const art=item.objects.map((pts,i)=>i===0?[[a,top],[b,top],[b,bottom],[a,bottom]]:pts).filter((pts,i)=>(item.id!=='right-console'||i===0)&&(item.id!=='back-sideboard'||pts!==g.objects[6]));
  photoGroups(c,im,{...g,project:item.wallProject},art);c.restore();
  const lid=cabinetSurfaces(item).top;
  polygon(c,lid,topShade);
  polygon(c,[[fa.x,fa.y],[fb.x,fb.y],[fb.x,fb.y+3],[fa.x,fa.y+3]],'#c49a69');
  c.strokeStyle='rgba(255,235,203,.8)';c.lineWidth=1.5;c.beginPath();c.moveTo(fa.x,fa.y);c.lineTo(fb.x,fb.y);c.stroke();
  // Items resting on the lid stay above its opaque cap.
  if(item.id!=='right-console'&&item.objects.length>1){c.save();if(item.side==='back'){c.translate(-8,item.depth);}else{c.translate(300,0);c.scale(item.factor,1);c.translate(-300,0);}photoGroups(c,im,{...g,project:item.wallProject},item.objects.slice(1).filter(pts=>item.id!=='back-sideboard'||pts!==g.objects[6]));c.restore();}
  if(item.id==='back-sideboard'){const width=54*g.scale,height=width*83/93,a=front(590,232);drawMatchingFrame(c,tabletopArt,tabletopArt,a.x,a.y-height,width,{source:[362,94,93,83],frameSource:[130,178,57,60],slice:8});}
  if(item.id==='right-console')drawDesktopTelevision(c,g,plant);
  c.strokeStyle='rgba(83,53,29,.28)';c.lineWidth=1.5;c.beginPath();c.moveTo(pa.x,pa.y);c.lineTo(pb.x,pb.y);c.stroke();
 }
}
function drawStandingPlant(c,plant,floor=215){
 if(!plant?.complete||!plant.naturalWidth)return;
 const p=panoramaLayout(floor).plant,h=p.height,w=h*plant.naturalWidth/plant.naturalHeight;
 c.save();c.imageSmoothingQuality='high';c.fillStyle='rgba(65,42,22,.14)';c.beginPath();c.ellipse(p.x,p.y+1,w*.19,6,0,0,Math.PI*2);c.fill();c.drawImage(plant,p.x-w/2,p.y-h*1473/1536,w,h);c.restore();
}
function panoramaBackdrop(c,im,{left=-1000,width=2600,floor=215,height=820,bottom=height*2-floor,plant=null,tablePlant=null,tabletopArt=null,wallPhoto=null,furniture=true}={}){
 const g=panoramaLayout(floor),sx=im.naturalWidth/2048,sy=im.naturalHeight/649;
 // Continue only the floor texture across the visible area. Mirrored edges meet
 // exactly; furniture and window geometry keep their fixed world dimensions.
 const tileWidth=2600,tileHeight=height-floor,start=Math.floor((left+1000)/tileWidth),end=Math.ceil((left+width+1000)/tileWidth);
 c.save();c.beginPath();c.rect(left,floor,width,Math.max(0,bottom-floor));c.clip();
 for(let col=start;col<end;col++)for(let row=0;row<Math.ceil((bottom-floor)/tileHeight);row++){
  const flipX=Math.abs(col%2)===1,flipY=row%2===1;c.save();c.translate(-1000+col*tileWidth+(flipX?tileWidth:0),floor+row*tileHeight+(flipY?tileHeight:0));c.scale(flipX?-1:1,flipY?-1:1);c.drawImage(im,0,322*sy,im.naturalWidth,327*sy,0,0,tileWidth,tileHeight);c.restore();
 }c.restore();
 const wall=c.createLinearGradient(0,0,0,floor);wall.addColorStop(0,'#e8cfae');wall.addColorStop(.7,'#e3c39d');wall.addColorStop(1,'#ddbb92');c.fillStyle=wall;c.fillRect(left,0,width,floor);
 const a=g.project(0,322),b=g.project(2048,322);
 const planes=[[[[a.x,0],[-450,0],[-450,floor],[a.x,a.y]],['#cba37a','#dfbf9a']],[[[1050,0],[b.x,0],[b.x,b.y],[1050,floor]],['#e0c09c','#caa278']]];
 if(left<a.x)planes.unshift([[[left,0],[a.x,0],[a.x,a.y],[left,a.y]],['#d4b28c','#e4c8a5']]);
 if(left+width>b.x)planes.push([[[b.x,0],[left+width,0],[left+width,b.y],[b.x,b.y]],['#ddbd98','#d2b08a']]);
 for(const [pts,colors]of planes){const grad=c.createLinearGradient(pts[0][0],0,pts[1][0],0);grad.addColorStop(0,colors[0]);grad.addColorStop(1,colors[1]);polygon(c,pts,grad);}
 drawPanoramaJoinery(c,panoramaSkirting(left,width,floor));
 photoGroups(c,im,g,g.wallObjects.filter(pts=>pts!==g.objects[9]&&(furniture||pts!==g.objects[10]&&pts!==g.objects[11])));
 const wallFrame=wallPhotoGeometry(floor,wallPhoto);drawMatchingFrame(c,wallPhoto,tabletopArt,wallFrame.x,wallFrame.y,wallFrame.width);
 if(furniture)drawPanoramaFurniture(c,im,g,tablePlant,tabletopArt);
 if(furniture)drawStandingPlant(c,plant,floor);
}
const fabricCache={image:null,key:'',canvas:null};
function panoramaFabric(im,l,g){
 if(!im?.complete||!im.naturalWidth||typeof document==='undefined'&&typeof OffscreenCanvas==='undefined')return null;
 // Recolour the material pixels themselves; folds stay photographic, with no filter bands.
 const color=l.fabric.map(v=>Math.round(v/6)*6),key=color.join(',')+':'+g.scale;
 if(fabricCache.image===im&&fabricCache.key===key)return fabricCache.canvas;
 const canvas=typeof OffscreenCanvas==='function'?new OffscreenCanvas(2048,322):document.createElement('canvas');canvas.width=2048;canvas.height=322;
 const c=canvas.getContext('2d',{willReadFrequently:true});c.drawImage(im,0,0,im.naturalWidth,im.naturalHeight*322/649,0,0,2048,322);
 const pixels=c.getImageData(0,0,2048,322),d=pixels.data;
 for(let i=0;i<d.length;i+=4){const shade=(d[i]*.2126+d[i+1]*.7152+d[i+2]*.0722)/208;for(let ch=0;ch<3;ch++)d[i+ch]=Math.min(255,color[ch]*shade);}
 c.putImageData(pixels,0,0);const projected=typeof OffscreenCanvas==='function'?new OffscreenCanvas(2600,600):document.createElement('canvas');projected.width=2600;projected.height=600;const target=projected.getContext('2d');target.translate(1000,0);photoGroups(target,canvas,g,g.curtains,322);Object.assign(fabricCache,{image:im,key,canvas:projected});return projected;
}
function panoramaWindows(c,s,date,g,reduced){
 const l=lighting(s,date,date.getTime()/1000,reduced),layout=panoramaLayout(g.floor);
 for(const view of layout.windows){
  const b=view.bounds;c.save();c.beginPath();for(const pane of view.panes){pane.polygon.forEach((p,i)=>i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y));c.closePath();}c.clip();
  const scale=Math.max(b.width/415,b.height/226);c.translate(b.x,b.y);c.scale(scale,scale);c.translate(-735,-28);
  // One continuous exterior behind both panes. The smaller window looks at another
  // part of the same sky; it never makes a second sun or moon appear in the room.
  sky(c,s,l,view.main);landscape(c,l);precipitation(c,l);lightning(c,l);c.restore();
 }
 const fabric=panoramaFabric(g.backdrop,l,layout);
 if(fabric)c.drawImage(fabric,-1000,0,2600,600);
 return l;
}
function draw(c,s,date,g,reduced=false){
 if(g.home){
  const l=lighting(s,date,date.getTime()/1000,reduced),w=g.home;
  c.save();c.translate(w.x,w.y);c.scale(w.width/400,w.height/220);c.translate(-742,-28);
  c.save();c.beginPath();c.rect(750,36,384,204);c.clip();
  // Cancel the frame's unequal scaling; crop one uniformly scaled exterior.
  const exteriorScale=Math.max(w.width/400,w.height/220);
  c.translate(942,138);c.scale(exteriorScale/(w.width/400),exteriorScale/(w.height/220));c.translate(-942,-138);
  const hx=192*(w.width/400)/exteriorScale,hy=102*(w.height/220)/exteriorScale;
  const span=w.fitBodies?{x0:Math.max(752,942-hx+16),x1:Math.min(1124,942+hx-16),y0:Math.max(45,138-hy+16),y1:Math.min(145,138+hy-16)}:null;
  sky(c,s,l,true,span);landscape(c,l);precipitation(c,l);lightning(c,l);c.restore();
  windowFrame(c,l);c.restore();
  c.save();c.translate(w.x,w.y);c.scale(w.width/400,((w.hem||w.y+w.height+40)-w.y)/306);c.translate(-742,-28);curtains(c,l,g.backdrop);c.restore();return l;
 }
 if(g.panorama)return panoramaWindows(c,s,date,g,reduced);

 const l=lighting(s,date,date.getTime()/1000,reduced);c.save();c.translate(g.left,0);c.scale(g.width/1586,g.floor/(992*.344));
 if(g.backdrop?.complete&&g.backdrop.naturalWidth)c.drawImage(g.backdrop,1230,0,60,334,664,0,556,334);
 c.save();c.beginPath();c.rect(735,28,415,226);c.clip();sky(c,s,l);landscape(c,l);precipitation(c,l);lightning(c,l);c.restore();
 windowFrame(c,l);curtains(c,l,g.backdrop);c.restore();return l;
}
function projectLight(s,worldWidth,floor){
 const width=Math.max(1000,worldWidth),left=(600-width)/2,body=s.strength>.18?s.sun:s.moon;
 const altitude=Math.max(.12,body?.altitude||.12),length=clamp(42/Math.tan(altitude),55,140);
 return {x:left+width*geometry.center/1586,y:floor+9,width:width*(geometry.right-geometry.left)/1586*.72,length,shift:-Math.sin(body?.azimuth||0)*Math.min(45,length*.4)};
}
root.WindowScene={draw,lighting,geometry,projectLight,panoramaLayout,panoramaBackdrop,panoramaSkirting,cabinetSurfaces,phoneTelevision,drawPhoneTelevision,televisionScreen,desktopTelevision,drawFramedPhoto,drawMatchingFrame,wallPhotoGeometry,restorePhonePhotoWall,drawDesktopTelevision,drawStandingPlant};
})(typeof window!=='undefined'?window:globalThis);

