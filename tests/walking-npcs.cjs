const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
let setup=fs.readFileSync(path.join(__dirname,'dining.cjs'),'utf8').split("for(const kind of ['eat','drink']){")[0];
setup+=';this.engine=e;this.source=s;';const host={require,console,__dirname};vm.createContext(host);vm.runInContext(setup,host);
const e=host.engine,s=host.source;
e.WALKING_NPCS=JSON.parse(s.match(/const WALKING_NPCS=(.*);/)[1]);
e.FLOOR_NPC_ANIMATIONS=JSON.parse(s.match(/const FLOOR_NPC_ANIMATIONS=(.*);/)[1]);
Object.assign(e,{Image:class{},mode:'hand',interrupt(){},setMode(){},cancelLiftHold(){}});
vm.runInContext(s.slice(s.indexOf('function gatherFootprint('),s.indexOf('/* ---------- toolbar ---------- */')),e);
vm.runInContext(s.slice(s.indexOf('/* Walking-only companions */'),s.indexOf('/* End walking-only companions */'))+';this.newActors=extraNPCs;',e);
assert.equal(e.newActors.length,2);assert.equal(e.newActors[0].name,'小襪子');assert.equal(e.newActors[1].name,'東東');
for(const a of [e.cat,e.npc,e.bunny]){a.timer=999;a.facilityDue={eat:1e9,drink:1e9};a.facilityHistory={eat:0,drink:0,litter:0};}
for(const a of e.newActors){assert(a.walkOnly);for(const kind of ['eat','drink','litter'].filter(k=>!(a.id==='dongdong'&&k==='litter')))assert(!e.beginFacility(a,kind),'Walking-only NPC cannot use facilities');}
const seen=e.newActors.map(()=>new Set());
for(let i=0;i<3600;i++){e.clock.time+=.05;e.updatePuddles(.05);e.resolveTraffic();e.updateYe(.05);e.updateRabbit(.05);for(const [j,a] of e.newActors.entries()){e.updateWalkingNpc(a,.05);seen[j].add((a.x<300?0:1)+(a.y<520?0:2));assert(a.x>=-58&&a.x<=658&&a.y>=238&&a.y<=806,'Stays in room');assert(!a.facilityCare||a.id==='dongdong'&&a.facilityCare.kind==='litter','No unsupported pose');}}
assert(seen.every(x=>x.size>=3),'Both new cats explore room: '+JSON.stringify(e.newActors.map((a,i)=>({id:a.id,zones:[...seen[i]],x:a.x,y:a.y,state:a.state,goal:a.goal,wait:a.wait,scratch:a.scratchBoard,traffic:a.trafficYield}))));
e.startGather();for(let i=0;i<1400;i++){e.clock.time+=.05;e.updatePuddles(.05);e.resolveTraffic();for(const a of [e.cat,e.npc,e.bunny])e.updateGather(a,.05);for(const a of e.newActors)e.updateWalkingNpc(a,.05);if([e.cat,e.npc,e.bunny,...e.newActors].every(a=>a.state==='gatherSit'))break;}
assert([e.cat,e.npc,e.bunny,...e.newActors].every(a=>a.state==='gatherSit'),'All five gather: '+JSON.stringify([e.cat,e.npc,e.bunny,...e.newActors].map(a=>({id:a.id,x:a.x,y:a.y,state:a.state,slot:a.gatherSlot,scratch:a.scratchBoard}))));
console.log(JSON.stringify({newCats:e.newActors.map((a,i)=>({id:a.id,name:a.name,frames:a.animation.count,zones:seen[i].size})),allFiveGather:true,walkingOnly:true}));
const liftSource=s.slice(s.indexOf('/* Lift controls */'),s.indexOf('/* End lift controls */'));
Object.assign(e,{cv:{addEventListener(){}},setTimeout(){return 1;},clearTimeout(){},releaseGestureInteractions(){},ptr:null,pet:{on:false}});
vm.runInContext(liftSource+';this.liftState=lift;',e);
e.stopGather();
for(const a of e.newActors){a.z=0;e.beginLift(a,{x:a.x,y:a.y-60},1);assert.equal(e.liftState.actor,a);assert.equal(a.state,'lifted');e.moveLift({x:130,y:250});e.endLift();assert.equal(a.z,0);assert(!e.yeBlocked(a.x,a.y,true,a),'New NPC drop avoids obstacles');}
console.log('Both new cats can be lifted and safely dropped');
