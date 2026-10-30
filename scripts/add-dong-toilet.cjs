const fs=require('fs');let p='dist/index.html',s=fs.readFileSync(p,'utf8');s=s.replace("function fitPhoneStage(){document.documentElement.style.setProperty('--stage-scale',Math.min(1,innerWidth/390,innerHeight/844));}",`function fitPhoneStage(){const mobile=innerWidth<=639,scale=mobile?innerWidth/390:Math.min(1,innerWidth/390,innerHeight/844);document.documentElement.style.setProperty('--stage-scale',scale);document.documentElement.style.setProperty('--stage-height',(mobile?innerHeight/scale:844)+'px');}`);s=s.replace('width:390px;height:844px;transform:', 'width:390px;height:var(--stage-height,844px);transform:');fs.writeFileSync(p,s);
p='dist/room.js';s=fs.readFileSync(p,'utf8');const meta=JSON.parse(fs.readFileSync('dist/assets/dong-toilet/frames.json','utf8'));
s=s.replace('const IMG={};',`const DONG_TOILET_FRAMES=${JSON.stringify(meta)};\nfor(let i=0;i<DONG_TOILET_FRAMES.length;i++)SPR['dong_toilet_'+i]='assets/dong-toilet/'+String(i).padStart(3,'0')+'.webp';\nconst IMG={};`);
s=s.replace("if(actor.walkOnly||actor===rabbit||actor!==cat&&(kind==='litter'||actor.trafficYield))return false;", "if(actor.walkOnly&&!(actor.id==='dongdong'&&kind==='litter')||actor===rabbit||actor!==cat&&(kind==='litter'&&actor.id!=='dongdong'||actor.trafficYield))return false;\n if(actor===cat&&kind==='litter')for(const npc of extraNPCs)if(npc.id==='dongdong'&&npc.facilityCare?.kind==='litter'){const out=dongToiletExit(npc);cancelFacility(npc);npc.inside=null;npc.z=0;npc.x=out.x;npc.y=out.y;npc.toiletDue=facilityClock.time+30;}");
s=s.replace("if(c.kind==='litter'){c.phase='enter';", "if(c.kind==='litter'&&actor.id==='dongdong'){c.phase='dongToilet';c.elapsed=0;c.from={x:actor.x,y:actor.y};c.exit=dongToiletExit(actor);actor.state='litter';return true;}\n   if(c.kind==='litter'){c.phase='enter';");
s=s.replace('if(!c)return false;sharedMealContact(actor,dt);',"if(!c)return false;if(c.phase==='dongToilet')return advanceDongToilet(actor,dt);sharedMealContact(actor,dt);");
s=s.replace('function updateWalkingNpc(actor,dt){',`function dongToiletExit(actor){
 for(const p of [{x:LIT.x-120,y:LIT.front+85},{x:LIT.x+110,y:LIT.front+85},{x:LIT.x-150,y:LIT.front+35}]){const safe=yeFreePoint(p.x,p.y,actor);if(safe&&!yeBlocked(safe.x,safe.y,false,actor)&&Math.hypot(safe.x-LIT_IN.x,safe.y-LIT_IN.y)>65)return safe;}
 return yeFreePoint(actor.x,LIT.front+100,actor)||{x:GX0+35,y:GY1-25};
}
function advanceDongToilet(actor,dt){
 const c=actor.facilityCare;c.elapsed+=dt;const t=c.elapsed;
 if(t<1.5){const u=Math.min(1,t/1.5);actor.x=lerp(c.from.x,LIT_IN.x,u);actor.y=lerp(c.from.y,LIT_IN.y,u);actor.z=Math.sin(u*Math.PI)*25;actor.inside=u>.65?'litter':null;}
 else if(t<7.2){actor.x=LIT_IN.x;actor.y=LIT_IN.y;actor.z=0;actor.inside='litter';}
 else{const u=Math.min(1,(t-7.2)/1.6);actor.x=lerp(LIT_IN.x,c.exit.x,u);actor.y=lerp(LIT_IN.y,c.exit.y,u);actor.z=Math.sin(u*Math.PI)*28;actor.face=c.exit.x>=LIT_IN.x?1:-1;actor.inside=null;for(const other of npcObstacles(actor))if(!pairCanStep(actor,actor,other))allowTrafficPass(actor,other);}
 actor.state='litter';if(t>=8.8){actor.x=c.exit.x;actor.y=c.exit.y;actor.z=0;actor.inside=null;actor.toiletDue=facilityClock.time+rand(90,150);finishFacility(actor);chooseWalkingDestination(actor);}return true;
}
function drawDongToilet(c,actor){
 const t=actor.facilityCare.elapsed,index=Math.min(111,Math.floor((t<1.5?.4+t: t<7.2?1.9+(t-1.5)*.96:7.4+(t-7.2)*1.05)*12)),m=DONG_TOILET_FRAMES[index],im=IMG['dong_toilet_'+index];if(!im?.complete||!im.naturalWidth)return;
 c.save();c.fillStyle='rgba(45,25,10,.15)';c.beginPath();c.ellipse(actor.x,actor.y,30,5,0,0,7);c.fill();c.translate(actor.x,actor.y-actor.z);c.scale(t>=7.2&&actor.face<0?-.33:.33,.33);c.drawImage(im,-m.cx,-m.ground);c.restore();
}
function updateWalkingNpc(actor,dt){
 if(actor.id==='dongdong'){
  if(lift.actor!==actor&&actor.facilityCare){actor.time+=dt;advanceFacility(actor,dt);return;}
  if(actor.toiletDue==null)actor.toiletDue=facilityClock.time+rand(40,75);
  if(lift.actor!==actor&&!actor.gatherSlot&&!actor.trafficYield&&facilityClock.time>=actor.toiletDue){actor.toiletDue=facilityClock.time+rand(8,15);if(beginFacility(actor,'litter'))return;}
 }
`);
s=s.replace('function drawCompanionBody(c,actor){',"function drawCompanionBody(c,actor){\n if(actor.id==='dongdong'&&actor.facilityCare?.phase==='dongToilet'){drawDongToilet(c,actor);return;}");fs.writeFileSync(p,s);
