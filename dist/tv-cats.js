/* Rear-facing television visits; navigation and room collision stay owned by the room. */
(function(root){'use strict';
const frames=[[17,49,381,629],[452,49,388,630],[887,60,384,616],[1322,60,369,615],[1752,57,391,620]];
const directionFrames=[[[48,13,175,227],[296,8,176,235],[543,12,165,231],[785,8,170,235],[1038,12,170,230]],[[53,247,183,237],[302,245,179,240],[538,246,174,243],[784,245,179,243],[1038,245,184,242]],[[59,484,175,251],[295,484,182,254],[530,486,179,253],[783,486,182,250],[1037,487,184,249]],[[50,735,193,248],[299,734,184,252],[544,738,170,249],[785,731,193,258],[1042,736,180,251]],[[51,987,193,250],[296,984,189,254],[540,986,181,254],[784,985,192,253],[1037,986,188,247]]];
const directionAnchors=[[109.43,105.86,88.94,107.26,66.22],[107.16,97.24,94.6,104.63,72.76],[103.56,101.56,98.9,108.32,74.12],[117.69,103.85,88.89,112.57,73.43],[115.93,107.86,93.72,116.27,73.65]];
const heights=[115,127,116,112,116];
const walkingSpeed=a=>a.id==='socks'?38:55;
// Ignore disconnected pixels from adjacent rows of the tightly packed atlas.
function spriteComponentMask(alpha,w,h){
 const seen=new Uint8Array(w*h);let largest=[];
 for(let i=0;i<seen.length;i++){if(seen[i]||alpha[i]<=32)continue;const q=[i];seen[i]=1;for(let n=0;n<q.length;n++){const k=q[n],x=k%w;for(const j of [x?k-1:-1,x<w-1?k+1:-1,k-w,k+w])if(j>=0&&j<seen.length&&!seen[j]&&alpha[j]>32){seen[j]=1;q.push(j);}}if(q.length>largest.length)largest=q;}
 const mask=new Uint8Array(w*h);for(const k of largest)mask[k]=1;return mask;
}
const spriteCache=new WeakMap();
function isolatedSprite(im,f){
 if(!root.document)return null;let cache=spriteCache.get(im);if(!cache){cache=new Map();spriteCache.set(im,cache);}const key=f.join(',');if(cache.has(key))return cache.get(key);
 const canvas=root.document.createElement('canvas');canvas.width=f[2];canvas.height=f[3];const c=canvas.getContext('2d',{willReadFrequently:true});c.drawImage(im,...f,0,0,f[2],f[3]);const pixels=c.getImageData(0,0,f[2],f[3]),alpha=new Uint8Array(f[2]*f[3]);for(let i=0;i<alpha.length;i++)alpha[i]=pixels.data[i*4+3];const mask=spriteComponentMask(alpha,f[2],f[3]);for(let i=0;i<mask.length;i++)if(!mask[i]){const x=i%f[2],y=Math.floor(i/f[2]);let fringe=false;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++)if(x+dx>=0&&x+dx<f[2]&&y+dy>=0&&y+dy<f[3]&&mask[(y+dy)*f[2]+x+dx])fringe=true;if(!fringe)pixels.data[i*4+3]=0;}c.putImageData(pixels,0,0);cache.set(key,canvas);return canvas;
}
function create(d){
 const portrait=d.portrait||new Image();if(!d.portrait){portrait.fetchPriority='high';portrait.decoding='async';portrait.src='assets/tv-cat-backs.png';}
 const directional=d.directional||new Image();if(!d.directional){directional.decoding='async';directional.src='assets/tv-cat-directions-v1.png';}
 let group=0;const pending=new Map();
 const due=new WeakMap(),random=d.random||Math.random,ready=()=>portrait.complete&&portrait.naturalWidth;
 function candidates(){const g=d.geometry();if(g.seats)return g.seats.map((p,i)=>({...p,slot:i}));const right=Math.min(g.x+110,g.right-53),y=Math.max(350,g.bottom+128);return [[-57,y],[0,y+28],[-155,y+80],[-75,y+120],[0,y+160],[-220,y+245],[-110,y+245],[0,y+245]].map(([dx,y],i)=>({x:right+dx,y,slot:i}));}
 function shuffled(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 function cancel(a,resume=true){pending.delete(a);if(!a.tvVisit)return;delete a.tvVisit;a.path=[];a.goal=null;a.walkGoal=null;due.set(a,d.clock()+35+random()*50);if(resume)d.resume(a);}
 function pauseForCare(a){const request=pending.get(a)||(a.tvVisit?.group?{group:a.tvVisit.group,until:d.clock()+120}:null);cancel(a,false);if(request)pending.set(a,request);}
 function start(a,manual=false){
  if(!ready()||a.tvVisit)return !!a.tvVisit;
  if(d.excluded?.(a)||!manual&&!d.eligible(a))return false;
  const occupied=d.actors().filter(b=>b!==a&&b.tvVisit).map(b=>b.tvVisit.target);
  d.prepare(a);
  const seats=manual?candidates().slice(0,5):candidates();for(const p of [...shuffled(seats.slice(0,5)),...shuffled(seats.slice(5))]){
   if(occupied.some(q=>q.slot===p.slot)||d.blocked(p,a))continue;
   const path=d.path(a,p);if(!path.length&&Math.hypot(a.x-p.x,a.y-p.y)>3)continue;
   const speed=walkingSpeed(a);const distance=path.reduce((n,q,i)=>n+Math.hypot(q.x-(path[i-1]||a).x,q.y-(path[i-1]||a).y),0);
   a.tvVisit={slot:p.slot,target:p,elapsed:0,travelElapsed:0,repath:0,blocked:0,left:24+random()*12,travelLimit:Math.max(38,distance/speed+25)};a.path=path;a.goal=p;a.walkGoal=p;a.state='walk';a.pose='walk';a.speed=speed;a.act=null;due.set(a,d.clock()+65+random()*65);return true;
  }
  due.set(a,d.clock()+15);return false;
 }
 function tick(dt){
  for(const [a,request]of pending){
   if(request.until<d.clock()||!d.actors().includes(a)){pending.delete(a);continue;}
   if(!d.excluded?.(a)&&!d.urgent?.(a)&&start(a,true)){a.tvVisit.group=request.group;a.tvVisit.left=60+random()*20;pending.delete(a);}
  }
  for(const a of d.actors()){
   const v=a.tvVisit;
   if(v){
    if(a.trafficYield&&d.yieldTick){const from={x:a.x,y:a.y};d.yieldTick(a,dt);if(Math.hypot(a.x-from.x,a.y-from.y)>.001){a.state='walk';a.pose='walk';a.act=null;a.speed=walkingSpeed(a);}if(!a.trafficYield){a.state='walk';a.goal=v.target;a.walkGoal=v.target;a.path=[];v.travelElapsed=0;v.blocked=0;v.repath=0;}continue;}
    if(d.excluded?.(a)||a.state!=='walk'&&a.state!=='watchTV'){cancel(a,false);continue;}
    if(d.urgent?.(a)){const id=v.group;cancel(a);if(id)pending.set(a,{group:id,until:d.clock()+120});continue;}
    a.time+=dt;d.onTick?.(a,dt);v.elapsed+=dt;
    if(a.state==='watchTV'){const waiting=v.group&&v.elapsed<120&&(Array.from(pending.values()).some(r=>r.group===v.group)||d.actors().some(b=>b.tvVisit?.group===v.group&&b.state!=='watchTV'));if(!waiting)v.left-=dt;if(v.left<=0)cancel(a);continue;}
    const p=v.target;
    v.travelElapsed+=dt;
    if(Math.hypot(a.x-p.x,a.y-p.y)<3){a.x=p.x;a.y=p.y;a.path=[];a.state='watchTV';a.pose='tvBack';a.act='watchTV';continue;}
    v.repath-=dt;if(v.repath<=0&&(!a.path.length||v.blocked>.2)){a.path=d.path(a,p);v.repath=.8;}
    const next=a.path[0];if(next){const dx=next.x-a.x,dy=next.y-a.y,len=Math.hypot(dx,dy),speed=walkingSpeed(a),motion=d.walkStep?.(a,dt,speed,len)||{step:Math.min(len,speed*dt),time:(a.walkTime||0)+dt*speed/(a.id==='socks'?84:75)},step=motion.step,to={x:a.x+dx/(len||1)*step,y:a.y+dy/(len||1)*step};
     if(d.canStep(a,to)){a.x=to.x;a.y=to.y;a.pose='walk';a.act=null;a.speed=speed;a.walkTime=motion.time??(a.walkTime||0)+dt*speed/75;if(Math.abs(dx)>.1)a.face=dx<0?-1:1;if(len<=step+.01)a.path.shift();v.blocked=0;}else v.blocked+=dt;
    }else v.blocked+=dt;
    if(v.travelElapsed>v.travelLimit||v.blocked>8)cancel(a);
   }else if(ready()&&d.eligible(a)){
    if(!due.has(a))due.set(a,d.clock()+20+random()*45);
    if(d.clock()>=due.get(a))start(a);
   }
  }
 }
 // Atlas columns are -60, +30, 0, -30, +60 degrees (see asset metadata).
 function orientation(a,focus=null){
  const index=Math.max(0,d.actors().indexOf(a)),headHeight=heights[index]*.82,g=d.geometry(),q=g.screen;
  const target=focus||(q?.length?{x:q.reduce((n,p)=>n+p[0],0)/q.length,y:q.reduce((n,p)=>n+p[1],0)/q.length}:{x:g.x,y:g.bottom-45});
  const angle=Math.atan2(target.x-a.x,a.y-headHeight-target.y),view=[0,3,2,1,4][Math.max(0,Math.min(4,Math.round(angle/(Math.PI/6))+2))];
  return {target,angle,view,headHeight};
 }
 function draw(c,a,focus=null){
  if(!focus&&(a.state!=='watchTV'||!a.tvVisit)||!ready())return false;
  const index=d.actors().indexOf(a),heading=orientation(a,focus),hasDirections=directional.complete&&directional.naturalWidth,f=hasDirections?directionFrames[index]?.[heading.view]:frames[index];if(!f)return false;
  const height=heights[index],scale=height/f[3],w=f[2]*scale,breath=1+Math.sin(a.time*1.6+index)*.005;
  c.save();c.fillStyle='rgba(45,25,10,.17)';c.beginPath();c.ellipse(a.x,a.y,w*.39,5,0,0,Math.PI*2);c.fill();
  c.translate(a.x,a.y);c.transform(1,0,Math.sin(a.time*.55+index)*.003,breath,0,0);const anchor=hasDirections?directionAnchors[index][heading.view]*scale:w/2;const im=hasDirections?directional:portrait,clean=isolatedSprite(im,f);if(clean)c.drawImage(clean,0,0,f[2],f[3],-anchor,-height,w,height);else c.drawImage(im,...f,-anchor,-height,w,height);c.restore();return true;
 }
 function reaction(a){if(a.state!=='watchTV'||!a.tvVisit)return null;const index=d.actors().indexOf(a),black=index===0,kinds=black?['puzzled','owner1','owner2','owners','hug-owner1','hug-owner2','hug-owners','kiss-owner1','kiss-owner2','kiss-owners','pet-owner1','pet-owner2','miss-owners']:['heipipi','love','fascinated','missing','memory','cherish','wink','warmth','kiss','shy','joy','sparkle','content','nostalgia'];const kind=kinds[(Math.floor((a.time||0)/4.6)+index*3)%kinds.length];return {kind,black,subject:/owner/.test(kind)?'owners':'black-cat',phase:((a.time||0)+index*1.7)%4.6/4.6,index};}
 function drawMoods(c){if(!root.TVReactions)return;for(const a of d.actors()){const mood=reaction(a);if(mood)root.TVReactions.draw(c,mood,a.x,a.y-heights[d.actors().indexOf(a)]-32,a.time||0);}}
 function startAll(){pending.clear();d.actors().forEach(a=>cancel(a));const id=++group;let count=0;for(const a of shuffled(d.actors())){if(start(a,true)){a.tvVisit.group=id;a.tvVisit.left=60+random()*20;}else pending.set(a,{group:id,until:d.clock()+120});count++;}return count;}
 return {start,startAll,tick,draw,drawFacing:(c,a,target)=>draw(c,a,target),drawMoods,reaction,orientation,cancel,pauseForCare,cancelAll:()=>{pending.clear();d.actors().forEach(a=>cancel(a));},isGroupMember:a=>pending.has(a)||!!a.tvVisit?.group,isGroupActive:()=>pending.size>0||d.actors().some(a=>a.tvVisit?.group),has:a=>!!a.tvVisit,candidates};
}
root.CatTV={create,spriteComponentMask};
})(typeof window!=='undefined'?window:globalThis);
