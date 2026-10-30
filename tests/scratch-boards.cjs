const assert=require('assert'),fs=require('fs'),vm=require('vm'),path=require('path');
const setup=fs.readFileSync(path.join(__dirname,'dining.cjs'),'utf8').split("for(const kind of ['eat','drink']){")[0]+';this.engine=e;this.source=s;';const host={require,console,__dirname};vm.createContext(host);vm.runInContext(setup,host);const e=host.engine,s=host.source;
assert.equal(typeof e.scratchBoardLayout,'function','Two scratch boards are anchored in upper right corner');
const boards=e.scratchBoardLayout();assert.equal(boards.length,2);assert(boards.every(b=>b.x>250&&b.y<400));
assert.equal(typeof e.updatePuddleReactions,'function','Passing cats react with disgust');
e.WALKING_NPCS=JSON.parse(s.match(/const WALKING_NPCS=(.*);/)[1]);
e.FLOOR_NPC_ANIMATIONS=s.match(/const FLOOR_NPC_ANIMATIONS=(.*);/)?JSON.parse(s.match(/const FLOOR_NPC_ANIMATIONS=(.*);/)[1]):{};
Object.assign(e,{Image:class{},mode:'hand',interrupt(){},setMode(){},cancelLiftHold(){}});
vm.runInContext(s.slice(s.indexOf('function gatherFootprint('),s.indexOf('/* ---------- toolbar ---------- */')),e);
vm.runInContext(s.slice(s.indexOf('/* Walking-only companions */'),s.indexOf('/* End walking-only companions */'))+';this.newActors=extraNPCs;this.puddles=floorPuddles;',e);
for(const a of [e.cat,e.npc,e.bunny]){a.x=-40;a.y=790;a.path=[];a.state='wait';}
for(const [i,a] of e.newActors.entries())Object.assign(a,{x:80+i*190,y:590,restDue:1e9,peeDue:1e9,scratchDue:1e9});
for(const a of e.newActors)assert(e.beginScratchVisit(a),'Each new companion can reserve a board');
assert.notEqual(e.newActors[0].scratchBoard,e.newActors[1].scratchBoard);
for(let i=0;i<1600;i++){e.clock.time+=.05;e.resolveTraffic();for(const a of e.newActors){if(a.state==='scratchPad')a.timer=99;e.updateWalkingNpc(a,.05);}if(e.newActors.every(a=>a.state==='scratchPad'))break;}
assert(e.newActors.every(a=>a.state==='scratchPad'),'Both arrive and scratch their own board');
for(const a of e.newActors){const b=boards.find(b=>b.id===a.scratchBoard);assert(Math.abs(a.x-68-b.x)<3&&Math.abs(a.y-b.y-10)<3,'Front paws reach pad');assert.equal(a.icon,'happy');assert.equal(a.face,-1,'Cat faces left toward the board');}
e.releaseScratchBoard(e.newActors[0]);assert.equal(e.newActors[0].scratchBoard,null);
assert(e.yeCanStep(e.newActors[0],{x:e.newActors[0].x+5,y:e.newActors[0].y},e.newActors[0]),'Cat can step away after releasing its scratch pad');
e.puddles.push({x:110,y:550,rx:90,ry:31,age:0});
for(const a of [e.cat,e.npc,e.bunny,...e.newActors]){Object.assign(a,{x:245,y:550,state:'walk',disgustUntil:0});e.updatePuddleReactions();assert(a.disgustUntil>e.clock.time);}
console.log('Two round boards, independent reservations, both arrivals, paws on pads, all five disgust reactions passed');
