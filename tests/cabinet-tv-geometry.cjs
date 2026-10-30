const fs=require('fs'),vm=require('vm'),assert=require('assert');
const e={Math,Date,Intl};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),e);const w=e.WindowScene;
assert.equal(typeof w.phoneTelevision,'function','Phone room needs a physical television cabinet');
const p=w.phoneTelevision(215);assert(p.screen.length===4);assert(p.footprint.length===4);const centre=pts=>pts.reduce((sum,p)=>sum+p[0],0)/pts.length;assert.equal(centre(p.screen),centre(p.top),'TV sits exactly at the cabinet centre');
assert(p.footprint.every(([x,y])=>x>560&&x<750&&y>=205&&y<260),'Phone cabinet stands on the upper-right floor');
for(const item of w.panoramaLayout(215).furniture){const surfaces=w.cabinetSurfaces(item);assert.equal(surfaces.top.length,4);const area=surfaces.top.reduce((s,a,i,pts)=>{const b=pts[(i+1)%pts.length];return s+a[0]*b[1]-b[0]*a[1];},0)/2;assert(Math.abs(area)>100,'Every cabinet has a solid, non-degenerate top panel');assert.equal(surfaces.front.length,4);assert.equal(surfaces.sides.length,2);}
const engine=require('./room-engine.cjs')(4);engine.document={documentElement:{getAttribute:()=> 'phone'}};engine.WindowScene=w;engine.FT=215;engine.EX0=-150;engine.EW=900;vm.runInContext('GX0=-108;GX1=708;',engine);
assert(engine.panoramaFurnitureBlocked(650,238),'Player collision includes phone television');
for(const a of [engine.npc,engine.bunny,...engine.newActors])assert(engine.yeBlocked(650,238,false,a),'All companions avoid phone TV');
assert(!engine.panoramaFurnitureStepClear({x:650,y:300},{x:650,y:180}),'Walking cannot tunnel through phone cabinet');
assert(!engine.blockedPt(270,318),'Existing box entrance stays accessible');
console.log('Cabinet tops close; phone TV volume, floor footprint, all-cat collision and box access passed');
