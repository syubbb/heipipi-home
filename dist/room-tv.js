/* One inline decoder for the room television; only the current small clip loads. */
(function(root){
'use strict';
const PLAYLIST=[{"src":"assets/tv/room-tv-20261028-01.mp4?v=108","duration":14.0,"sourceId":"upload-01"},{"src":"assets/tv/room-tv-20261028-02.mp4?v=108","duration":9.27,"sourceId":"upload-02"},{"src":"assets/tv/room-tv-20261028-03.mp4?v=108","duration":9.33,"sourceId":"upload-03"},{"src":"assets/tv/room-tv-20261028-04.mp4?v=108","duration":8.4,"sourceId":"upload-04"},{"src":"assets/tv/room-tv-20261028-05.mp4?v=108","duration":16.13,"sourceId":"upload-05"},{"src":"assets/tv/room-tv-20261028-06.mp4?v=108","duration":12.07,"sourceId":"upload-06"},{"src":"assets/tv/room-tv-20261028-07.mp4?v=108","duration":33.07,"sourceId":"upload-07"}];
function createPlayer(options={}){
 const doc=options.document||document,playlist=options.playlist||PLAYLIST,video=options.video||doc.createElement('video');
 const poster=new Image();poster.src='assets/tv/poster-20261028.jpg?v=108';
 let index=0,failures=0,unavailable=false;
 video.id='room-tv-video';video.muted=true;video.defaultMuted=true;video.playsInline=true;video.autoplay=true;video.preload='auto';video.loop=false;
 video.setAttribute('playsinline','');video.setAttribute('webkit-playsinline','');video.setAttribute('muted','');video.setAttribute('aria-hidden','true');video.tabIndex=-1;
 Object.assign(video.style,{position:'fixed',left:'0',top:'0',width:'1px',height:'1px',opacity:'0.001',pointerEvents:'none'});doc.body.appendChild(video);
 const play=()=>{
  if(doc.hidden||unavailable)return;
  try{const result=video.play();if(result&&typeof result.catch==='function')result.catch(()=>{if(!unavailable)video.dataset.playback='gesture';});}catch{video.dataset.playback='gesture';}
 };
 const load=()=>{if(!playlist.length)return;video.dataset.playback='loading';video.src=playlist[index].src;video.load();play();};
 const next=()=>{index=(index+1)%playlist.length;load();};
 video.addEventListener('ended',()=>{failures=0;next();});
 video.addEventListener('playing',()=>{failures=0;video.dataset.playback='playing';});
 video.addEventListener('error',()=>{if(unavailable)return;if(++failures>=playlist.length){unavailable=true;video.dataset.playback='unavailable';video.pause();return;}next();});
 const resume=()=>{if(unavailable){unavailable=false;failures=0;load();}else if(video.paused)play();};
 doc.addEventListener('pointerdown',resume,{passive:true});doc.addEventListener('keydown',resume);
 doc.addEventListener('visibilitychange',()=>{if(doc.hidden)video.pause();else resume();});
 load();
 return {frame:()=>video.readyState>=2&&video.videoWidth?video:poster.complete&&poster.naturalWidth?poster:null,video};
}
function point(q,u,v){return [q[0][0]*(1-u)*(1-v)+q[1][0]*u*(1-v)+q[2][0]*u*v+q[3][0]*(1-u)*v,q[0][1]*(1-u)*(1-v)+q[1][1]*u*(1-v)+q[2][1]*u*v+q[3][1]*(1-u)*v];}
function containQuad(q,width,height){
 const w=(Math.hypot(q[1][0]-q[0][0],q[1][1]-q[0][1])+Math.hypot(q[2][0]-q[3][0],q[2][1]-q[3][1]))/2,h=(Math.hypot(q[3][0]-q[0][0],q[3][1]-q[0][1])+Math.hypot(q[2][0]-q[1][0],q[2][1]-q[1][1]))/2;
 const fit=Math.min(w/width,h/height),u=(1-width*fit/w)/2,v=(1-height*fit/h)/2;
 return [point(q,u,v),point(q,1-u,v),point(q,1-u,1-v),point(q,u,1-v)];
}
function coverCrop(q,width,height){
 const w=(Math.hypot(q[1][0]-q[0][0],q[1][1]-q[0][1])+Math.hypot(q[2][0]-q[3][0],q[2][1]-q[3][1]))/2,h=(Math.hypot(q[3][0]-q[0][0],q[3][1]-q[0][1])+Math.hypot(q[2][0]-q[1][0],q[2][1]-q[1][1]))/2;
 const ratio=w/h,cropWidth=Math.min(width,height*ratio),cropHeight=Math.min(height,width/ratio);
 return {x:(width-cropWidth)/2,y:(height-cropHeight)/2,width:cropWidth,height:cropHeight};
}
function paintFrame(c,frame,screen){
 c.save();c.beginPath();screen.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.clip();c.fillStyle='#0d1212';c.fill();
 if(frame){const w=frame.videoWidth||frame.naturalWidth||frame.width,h=frame.videoHeight||frame.naturalHeight||frame.height;
  if(w&&h){
   // Draw a continuous image spanning both side heights; the outer screen clip trims perspective excess.
   const q=screen,r=coverCrop(q,w,h),a=(q[1][0]-q[0][0])/r.width,b=(q[1][1]-q[0][1])/r.width,d=(q[3][0]-q[0][0])/r.height,e=Math.max(q[3][1]-q[0][1],q[2][1]-q[1][1])/r.height;
   c.transform(a,b,d,e,q[0][0],q[0][1]);
   c.drawImage(frame,r.x,r.y,r.width,r.height,0,0,r.width,r.height);
  }
 }
 c.restore();
}
const screens=new WeakMap();
function drawFrame(c,frame,screen){
 // Project once per decoded 15fps frame, then composite one tiny texture into
 // the 60fps game. One continuous texture avoids internal triangle seams.
 if(!root.document){paintFrame(c,frame,screen);return;}
 let cached=screens.get(screen);
 if(!cached){const x=Math.floor(Math.min(...screen.map(p=>p[0])))-1,y=Math.floor(Math.min(...screen.map(p=>p[1])))-1,w=Math.ceil(Math.max(...screen.map(p=>p[0])))-x+1,h=Math.ceil(Math.max(...screen.map(p=>p[1])))-y+1,canvas=root.document.createElement('canvas');canvas.width=w*2;canvas.height=h*2;cached={canvas,x,y,w,h,time:-1,frame:null};screens.set(screen,cached);}
 const time=frame&&'currentTime'in frame?Math.floor(frame.currentTime*15):0;
 if(cached.time!==time||cached.frame!==frame){const target=cached.canvas.getContext('2d');target.setTransform(2,0,0,2,-cached.x*2,-cached.y*2);target.clearRect(cached.x,cached.y,cached.w,cached.h);paintFrame(target,frame,screen);cached.time=time;cached.frame=frame;}
 c.drawImage(cached.canvas,cached.x,cached.y,cached.w,cached.h);
}
root.RoomTV={createPlayer,containQuad,coverCrop,drawFrame,playlist:PLAYLIST};
})(typeof window!=='undefined'?window:globalThis);
