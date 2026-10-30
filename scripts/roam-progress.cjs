const fs=require('fs'),p='dist/room.js';let s=fs.readFileSync(p,'utf8');s=s.replace('actor.time+=dt;yieldTo.repath-=dt;',`actor.time+=dt;yieldTo.repath-=dt;
 yieldTo.elapsed=(yieldTo.elapsed||0)+dt;
 if(yieldTo.elapsed>3.5){
  allowTrafficPass(actor,yieldTo.blocker);releaseScratchBoard(actor);actor.trafficYield=null;actor.path=[];actor.goal=null;actor.state='wait';actor.timer=.2;actor.progressWatch=null;return true;
 }`);
s=s.replace('actor.roamVisited=actor.roamVisited||[];',`actor.roamVisited=actor.roamVisited||[];
 actor.roamAvoid=(actor.roamAvoid||[]).filter(p=>p.until>facilityClock.time);`);
s=s.replace("for(const p of [...fresh.sort(()=>Math.random()-.5),...revisits]){",`// Prefer a different part of the room; recent failures cool down before retry.
 fresh.sort((a,b)=>Math.hypot(b.x-actor.x,b.y-actor.y)-Math.hypot(a.x-actor.x,a.y-actor.y));
 const shortlist=fresh.splice(0,Math.min(4,fresh.length));
 for(let i=shortlist.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[shortlist[i],shortlist[j]]=[shortlist[j],shortlist[i]];}
 for(const p of [...shortlist,...fresh,...revisits]){`);
s=s.replace('if(!target||!npcRestAllowed(target)||Math.hypot(target.x-actor.x,target.y-actor.y)<95)continue;', 'if(!target||!npcRestAllowed(target)||Math.hypot(target.x-actor.x,target.y-actor.y)<95||actor.roamAvoid.some(p=>Math.hypot(target.x-p.x,target.y-p.y)<75))continue;');
s=s.replace('actor.roamVisited.push(p.id);while(actor.roamVisited.length>10)', 'actor.roamVisited=actor.roamVisited.filter(id=>id!==p.id);actor.roamVisited.push(p.id);while(actor.roamVisited.length>10)');
s=s.replace('function finishLocomotionTick(actor,before,dt){',`function reviewRoamProgress(actor,dt){
 // Track meaningful progress to the final destination, not a few animated steps.
 if(actor===cat||actor.state!=='walk'||actor.facilityCare||actor.gatherSlot||actor.trafficYield||lift.actor===actor){actor.progressWatch=null;return false;}
 const goal=actor.goal||actor.path?.at(-1);if(!goal){actor.progressWatch=null;return false;}
 const distance=Math.hypot(actor.x-goal.x,actor.y-goal.y);if(distance<10){actor.progressWatch=null;return false;}
 let w=actor.progressWatch;
 if(!w||Math.hypot(goal.x-w.gx,goal.y-w.gy)>8){actor.progressWatch={gx:goal.x,gy:goal.y,best:distance,elapsed:0};return false;}
 if(w.best-distance>=18){w.best=distance;w.elapsed=0;return false;}
 w.elapsed+=dt;if(w.elapsed<6)return false;
 actor.roamAvoid=(actor.roamAvoid||[]).filter(p=>p.until>facilityClock.time);actor.roamAvoid.push({x:goal.x,y:goal.y,until:facilityClock.time+20});if(actor.roamAvoid.length>4)actor.roamAvoid.shift();
 actor.roamRecoveries=(actor.roamRecoveries||0)+1;actor.progressWatch=null;
 releaseScratchBoard(actor);actor.path=[];actor.goal=null;actor.yieldResume=null;actor.after=null;actor.wait=0;
 if(actor===ye)yeChooseDestination();else if(actor===rabbit)rabbitChooseDestination();else chooseWalkingDestination(actor);
 return true;
}
function finishLocomotionTick(actor,before,dt){
 if(reviewRoamProgress(actor,dt))return;`);
fs.writeFileSync(p,s);
