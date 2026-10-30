const fs=require('fs');const p='dist/room.js';let s=fs.readFileSync(p,'utf8');
s=s.replace('rx:152,ry:50','rx:106,ry:26').replace('CELL=12,IX=42,IY=12','CELL=12,IX=28,IY=12');
s=s.replace("function scratchBoardLayout(){return [{id:0,x:GX1-55,y:285,rx:48,ry:24},{id:1,x:GX1-55,y:390,rx:48,ry:24}];}","function scratchBoardLayout(){const x=Math.min(GX1-55,SUN.x+160);return [{id:0,x,y:270,rx:48,ry:24},{id:1,x,y:350,rx:48,ry:24}];}");
s=s.replaceAll('o.x0-58','o.x0-38').replaceAll('o.x1+58','o.x1+38').replaceAll('o.y0-18','o.y0-12').replaceAll('o.y1+18','o.y1+12');
s=s.replaceAll('TOAST.w/2+35','TOAST.w/2+25').replaceAll('TOAST.w/2-35','TOAST.w/2-25').replaceAll('TOAST_CENTER.y-52','TOAST_CENTER.y-36').replaceAll('TOAST_CENTER.y+52','TOAST_CENTER.y+36').replace('Math.abs(y-TOAST_CENTER.y)<52','Math.abs(y-TOAST_CENTER.y)<36');
s=s.replaceAll('t.size*.42+35','t.size*.42+20').replaceAll('t.size*.2+12','t.size*.2+8');
// Rendering only advances walking frames when the feet actually move.
s=s.replace("actor.state==='walk'?Math.floor(actor.walkTime*meta.fps)","actor.state==='walk'&&!actor.walkingStill?Math.floor(actor.walkTime*meta.fps)");
s=s.replace("rabbit.state==='walk'?Math.floor(rabbit.walkTime*sequence.fps)","rabbit.state==='walk'&&!rabbit.walkingStill?Math.floor(rabbit.walkTime*sequence.fps)");
s=s.replace('Math.floor(ye.walkTime*YE_ANIMATION.walk.fps)','Math.floor((ye.walkingStill?0:ye.walkTime)*YE_ANIMATION.walk.fps)');
const marker='let last=performance.now(),uiT=0;';
s=s.replace(marker,`function finishLocomotionTick(actor,before,dt){
 const moving=Math.hypot(actor.x-before.x,actor.y-before.y)>.01;
 actor.walkingStill=actor.state==='walk'&&!moving;
 if(moving||!trafficGoal(actor)){actor.stalledFor=0;return;}
 actor.stalledFor=(actor.stalledFor||0)+dt;
 if(actor.walkingStill){actor.walkTime=before.walkTime;if(actor===cat)actor.pose='sit';}
 if(actor.stalledFor<1.2)return;
 actor.stalledFor=0;
 for(const other of [cat,ye,rabbit,...extraNPCs])if(other!==actor&&pairDistance(actor,other)<2.5)allowTrafficPass(actor,other);
 if(rerouteTraffic(actor))return;
 // NPCs abandon inaccessible roaming goals; player commands keep priority.
 if(actor!==cat&&!actor.facilityCare&&!actor.gatherSlot&&!actor.trafficYield){
  releaseScratchBoard(actor);actor.path=[];actor.state='wait';actor.timer=.1;actor.goal=null;
 }
}
${marker}`);
s=s.replace('facilityClock.time+=dt;updatePuddles(elapsed);','const actors=[cat,ye,rabbit,...extraNPCs],before=actors.map(a=>({x:a.x,y:a.y,walkTime:a.walkTime}));facilityClock.time+=dt;updatePuddles(elapsed);');
s=s.replace('updateToys(dt);updateParts(dt);','actors.forEach((a,i)=>finishLocomotionTick(a,before[i],dt));updateToys(dt);updateParts(dt);');
fs.writeFileSync(p,s);
