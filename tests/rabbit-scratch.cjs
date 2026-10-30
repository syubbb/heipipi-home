const fs=require('fs'),vm=require('vm'),path=require('path');
const setup=fs.readFileSync(path.join(__dirname,'scratch-boards.cjs'),'utf8').split('for(const a of e.newActors)assert')[0]+';this.engine=e;this.source=s;';
const host={require,console,__dirname};vm.createContext(host);vm.runInContext(setup,host);const e=host.engine,s=host.source,assert=require('assert');
for(const a of [e.cat,e.npc,...e.newActors])Object.assign(a,{x:-100,y:780,scratchBoard:null});
Object.assign(e.bunny,{x:140,y:460,path:[],scratchDue:1e9,trafficYield:null,yieldResume:null});
assert(e.beginScratchVisit(e.bunny),'Rabbit reserves a board');
const board=e.bunny.scratchBoard;
Object.assign(e.newActors[0],{x:330,y:590});assert(e.beginScratchVisit(e.newActors[0]));assert.notEqual(e.newActors[0].scratchBoard,board,'Rabbit reservation shared with other cats');
for(let i=0;i<1800&&e.bunny.state!=='scratchPad';i++){e.clock.time+=.025;e.resolveTraffic();e.updateRabbit(.025);}
assert.equal(e.bunny.state,'scratchPad','Rabbit reaches scratch board');assert.equal(e.bunny.timer,3);
for(let i=0;i<119;i++)e.updateRabbit(.025);
assert.equal(e.bunny.state,'scratchPad','Complete three-second scratch loop');
e.updateRabbit(.03);assert.equal(e.bunny.scratchBoard,null);assert.equal(e.bunny.state,'walk','Resume roaming after scratching');
const assetRoot=path.join(__dirname,'../dist/assets/rabbit-scratch');assert.equal(fs.readdirSync(assetRoot).filter(f=>f.endsWith('.png')).length,15);
assert(s.includes('Math.floor(rabbit.scratchTime*15)%15'),'One-second animation loops');
console.log('Rabbit: shared reservation, real route arrival, 3-second loop, release and resume, 15 extracted frames passed');

