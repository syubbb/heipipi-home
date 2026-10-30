const assert=require('assert'),fs=require('fs'),vm=require('vm'),path=require('path');
const setup=fs.readFileSync(path.join(__dirname,'favourite-mat.cjs'),'utf8').split("assert.equal(typeof e.goMatSleep")[0]+';this.engine=e;';const h={require,console,__dirname};vm.createContext(h);vm.runInContext(setup,h);const e=h.engine;
for(const a of [e.npc,e.bunny])Object.assign(a,{x:580,y:780,facilityCare:null,gatherSlot:null,trafficYield:null});
Object.assign(e.cat,{x:300,y:680,time:10,matAfter:1000,z:0,state:'idle',pose:'sit',path:[],carry:null,inside:null});assert(!e.goMatSleep(),'Autonomous cooldown remains');assert(e.goMatSleep(true),'Explicit mat sleep bypasses autonomous cooldown');assert.equal(e.cat.state,'walk');assert.notEqual(e.cat.pose,'sleep','Manual choice must walk before sleeping');
const arrival=e.cat.then;e.interrupt();arrival();assert.notEqual(e.cat.act,'matSleep','Cancelled manual arrival cannot resume sleep');
console.log('Manual mat choice bypasses cooldown, walks first and remains cancellable');
