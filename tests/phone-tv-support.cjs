const fs=require('fs'),vm=require('vm'),assert=require('assert');const e={Math,Date,Intl};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),e);
for(const floor of [215,250]){
 const g=e.WindowScene.phoneTelevision(floor),w=g.frame[1][0]-g.frame[0][0],cab=g.front[1][0]-g.front[0][0];
 assert(w/cab<=.90&&w/cab>=.80,'The console leaves visible margins on both sides of the TV');
 assert(g.stand,'TV support is anchored to the actual cabinet top');
 const cx=g.top.reduce((s,p)=>s+p[0],0)/4,cy=g.top.reduce((s,p)=>s+p[1],0)/4;
 assert.equal(g.stand.x,cx);assert.equal(g.stand.y,cy,'Foot sits at the centre of the top rather than behind it');
 assert.equal((g.frame[0][0]+g.frame[1][0])/2,cx,'TV axis and support share the top centre');
 assert(g.frame[2][1]<cy,'Upright TV clears its support');
 assert(Math.abs((g.screen[1][0]-g.screen[0][0])/(g.screen[3][1]-g.screen[0][1])-16/9)<1e-6,'Video keeps 16:9 proportions');
}
console.log('TV margins, cabinet-top contact, centred support and 16:9 passed');
