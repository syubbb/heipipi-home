const fs=require('fs');const base64=fs.readFileSync('dist/assets/sitfront.webp').toString('base64');
fs.writeFileSync('dist/assets/heipipi-face.svg',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="48 -8 160 160"><rect x="48" y="-8" width="160" height="160" rx="35" fill="#e8d5b6"/><image href="data:image/webp;base64,${base64}" width="240" height="376"/></svg>`);
fs.writeFileSync('dist/site.webmanifest',JSON.stringify({name:'黑屁屁的房間',short_name:'黑屁屁',start_url:'./',display:'standalone',background_color:'#1f222c',theme_color:'#1f222c',icons:[{src:'assets/heipipi-face.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]},null,2));
let p='dist/index.html',s=fs.readFileSync(p,'utf8');s=s.replace('<meta charset="utf-8">','<meta charset="utf-8">\n<link rel="icon" type="image/svg+xml" href="assets/heipipi-face.svg">\n<link rel="manifest" href="site.webmanifest">\n<meta name="theme-color" content="#1f222c">');
s=s.replace('</style>',`/* phone-stage: fixed logical phone canvas, uniformly fitted on every screen. */
html{background:#14161c;overflow:hidden}
body{margin:0;position:fixed;left:50%;top:50%;width:390px;height:844px;transform:translate(-50%,-50%) scale(var(--stage-scale,1));transform-origin:center;box-shadow:0 0 55px #0007}
canvas#room{width:100%;height:100%;inset:0}
.inner{max-width:none;padding-left:14px;padding-right:14px}
.row1{flex-wrap:wrap}.name{white-space:nowrap}.hbtns{gap:4px;flex-wrap:nowrap;width:100%}
.camera-picker{gap:2px}.camera-picker select{max-width:86px}
.grid{grid-template-columns:repeat(7,minmax(0,1fr));grid-auto-rows:64px;gap:4px 3px}
.grid button{grid-template-rows:20px 1fr;font-size:11px;line-height:1.2;padding:5px 1px;gap:2px;border-radius:9px}
.grid svg{width:20px;height:20px}.tools{padding-top:6px;padding-bottom:6px}
.hud{padding-top:8px}.room-heading{width:100%}
</style>
<script>
function fitPhoneStage(){document.documentElement.style.setProperty('--stage-scale',Math.min(1,innerWidth/390,innerHeight/844));}
fitPhoneStage();addEventListener('resize',fitPhoneStage);
</script>`);fs.writeFileSync(p,s);
p='dist/room.js';s=fs.readFileSync(p,'utf8');s=s.replace('VW=innerWidth;VH=innerHeight;DPR=', 'VW=cv.clientWidth;VH=cv.clientHeight;DPR=');s=s.replace('safeTop=hudEl.getBoundingClientRect().bottom;safeBot=toolsEl.getBoundingClientRect().top;',"const box=cv.getBoundingClientRect(),scale=box.width/VW;safeTop=(hudEl.getBoundingClientRect().bottom-box.top)/scale;safeBot=(toolsEl.getBoundingClientRect().top-box.top)/scale;");s=s.replace('function toWorld(e){return{x:e.clientX/cam.s+cam.x,y:e.clientY/cam.s+cam.y};}',`function screenPoint(e){const box=cv.getBoundingClientRect();return {x:(e.clientX-box.left)*VW/box.width,y:(e.clientY-box.top)*VH/box.height};}
function toWorld(e){const p=screenPoint(e);return{x:p.x/cam.s+cam.x,y:p.y/cam.s+cam.y};}`);
s=s.replaceAll('roomTouches.set(e.pointerId,{x:e.clientX,y:e.clientY})','roomTouches.set(e.pointerId,screenPoint(e))');s=s.replace('const anchor={x:e.clientX,y:e.clientY},world=', 'const anchor=screenPoint(e),world=');
const a=s.indexOf('function drawSun(c){'),b=s.indexOf('function drawWand(c){',a);s=s.slice(0,a)+`function drawSun(c){
 const environment=window.RoomOutdoors?RoomOutdoors.state():{strength:1,moonStrength:0,sun:{altitude:.7,azimuth:0}};
 const moonlight=environment.strength<=.18,level=moonlight?environment.moonStrength:environment.strength;
 if(level<=.01||!window.WindowScene)return;
 const p=WindowScene.projectLight(environment,EW,FT),gap=6,pane=(p.width-gap)/2;
 c.save();c.globalAlpha=level;
 const light=c.createLinearGradient(0,p.y,0,p.y+p.length);light.addColorStop(0,moonlight?'rgba(191,218,255,.45)':'rgba(255,245,202,.5)');light.addColorStop(1,moonlight?'rgba(191,218,255,.05)':'rgba(255,245,202,.07)');c.fillStyle=light;
 for(const x of [-p.width/2,gap/2]){c.beginPath();c.moveTo(p.x+x,p.y);c.lineTo(p.x+x+pane,p.y);c.lineTo(p.x+x+pane+p.shift,p.y+p.length);c.lineTo(p.x+x+p.shift,p.y+p.length);c.closePath();c.fill();}c.restore();
}
`+s.slice(b);fs.writeFileSync(p,s);
p='dist/window-scene.js';s=fs.readFileSync(p,'utf8').replace('root.WindowScene={draw,lighting,geometry};',`function projectLight(s,worldWidth,floor){
 const width=Math.max(1000,worldWidth),left=(600-width)/2,body=s.strength>.18?s.sun:s.moon;
 const altitude=Math.max(.12,body?.altitude||.12),length=clamp(42/Math.tan(altitude),55,140);
 return {x:left+width*geometry.center/1586,y:floor+9,width:width*(geometry.right-geometry.left)/1586*.72,length,shift:-Math.sin(body?.azimuth||0)*Math.min(45,length*.4)};
}
root.WindowScene={draw,lighting,geometry,projectLight};`);fs.writeFileSync(p,s);
