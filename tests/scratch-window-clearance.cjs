const assert=require('assert'),vm=require('vm'),e=require('./room-engine.cjs')(17);
// A back-window seat with room to its right, as in the phone scenery.
vm.runInContext('SUN.x=300',e);for(const a of e.actors)Object.assign(a,{x:90,y:740,facilityCare:null,trafficYield:null,gatherSlot:null,scratchBoard:null});
Object.assign(e.cat,{x:300,y:260,state:'timed',pose:'sit',timer:999});
const a=e.newActors.find(a=>a.id==='dongdong');Object.assign(a,{x:200,y:590});
assert(e.beginScratchVisit(a),'Scratch pad remains reachable while black cat watches the window');
const board=e.scratchBoardLayout().find(b=>b.id===a.scratchBoard);
assert(a.goal.x>board.x,'Scratching cat stands to the right, away from the window cat');
assert(a.goal.x-80>e.cat.x+75,'Visible body stays clear of the window cat');
assert.equal(a.goal.face,-1,'Front paws face back toward the pad');
console.log('Scratch station remains reachable with right-side body clear of the window cat');
const second=e.newActors.find(b=>b!==a);Object.assign(second,{x:140,y:650});assert(e.beginScratchVisit(second));
for(const actor of [a,second])Object.assign(actor,{x:actor.goal.x,y:actor.goal.y,state:'scratchPad',face:-1,timer:999});
Object.assign(e.cat,{x:300,y:420,state:'walk',pose:'walk',speed:70,walkGoal:{x:300,y:260},then:null});e.cat.path=e.findPath(300,420,300,260);
assert(e.cat.path.length,'Window approach remains open with both pads in use');
for(let i=0;i<300&&!e.followPath(.05);i++){}
assert(Math.hypot(e.cat.x-300,e.cat.y-260)<4,'Black cat reaches its viewing seat while both other cats scratch');
console.log('Two occupied scratch pads leave the black cat a clear route to the window');
