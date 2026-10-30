const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');let setup=fs.readFileSync(path.join(__dirname,'walking-npcs.cjs'),'utf8').split('assert.equal(e.newActors.length,2)')[0]+';this.engine=e;this.source=s;';const h={require,console,__dirname};vm.createContext(h);vm.runInContext(setup,h);const e=h.engine;vm.runInContext(h.source.slice(h.source.indexOf('function reviewRoamProgress('),h.source.indexOf('let last=performance.now()')),e);assert.equal(typeof e.reviewRoamProgress,'function');
for(const a of [e.npc,e.bunny,...e.newActors]){
 Object.assign(a,{x:180,y:500,state:'walk',goal:{x:470,y:720},path:[{x:200,y:500}],facilityCare:null,gatherSlot:null,trafficYield:null,progressWatch:null,roamAvoid:[],roamRecoveries:0});
 for(let i=0;i<140;i++){e.clock.time+=.05;a.x=180+(i%2)*6;if(e.reviewRoamProgress(a,.05))break;}
 assert.equal(a.roamRecoveries,1,'Oscillating NPC chooses a fresh destination: '+a.id);assert(a.roamAvoid.length,'Failed goal remembered');
 const last=a.roamRecoveries;a.state='rest';for(let i=0;i<200;i++)e.reviewRoamProgress(a,.05);assert.equal(a.roamRecoveries,last,'Natural rest not interrupted');
}
Object.assign(e.cat,{state:'walk',walkGoal:{x:440,y:700},x:100,y:400});for(let i=0;i<200;i++)e.reviewRoamProgress(e.cat,.05);assert.equal(e.cat.walkGoal.x,440,'Player destination retained');
console.log('All four NPCs recover from moving-in-place; intentional rest and player commands retained');

const yielding=e.newActors[0];Object.assign(yielding,{trafficYield:{elapsed:3.49,repath:0,path:[],blocker:e.cat},scratchBoard:0});e.updateTrafficYield(yielding,.05);assert.equal(yielding.trafficYield,null,'Unfinishable yield has a deadline');assert(e.pairPassing(yielding,e.cat),'Only the blocking pair can pass');console.log('Yield timeout releases scratch reservation and grants pair-only soft passage');
