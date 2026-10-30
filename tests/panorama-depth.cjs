const fs=require('fs'),vm=require('vm'),assert=require('assert');
const e={Math,Date,Intl};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),e);
const g=e.WindowScene.panoramaLayout(215);
assert(g.furniture?.length>=5,'Cabinets must occupy room depth rather than just the wall plane');
for(const item of g.furniture){
 const {a,b,top,bottom}=item;
 for(const u of [a,b]){
  const wall=item.wallProject(u,bottom),front=item.project(u,bottom);
  if(item.side==='left')assert(front.x>wall.x+40,'Left cabinets protrude inward');
  else if(item.side==='right')assert(front.x<wall.x-40,'Right cabinets protrude inward');
  else assert(front.y>wall.y+10,'Back cabinet stands forward on the floor');
  const head=item.project(u,top);assert(Math.abs(head.x-front.x)<1e-7,'Solid cabinet verticals stay vertical');
 }
 assert(item.footprint.length===4,'Each solid has a floor footprint shared with collision');
 assert(g.obstacles.includes(item.footprint),'Collision uses the visible cabinet footprint');
}
const display=g.furniture.find(i=>i.id==='left-display');
assert(display.project(display.b,display.bottom).x<g.project(287,322).x-15,'Protruding left cabinet stays clear of the curtain');
const p=g.plant,wall=g.project(2008,322);
assert(p&&p.x<wall.x-65,'Plant is moved inward away from the right wall');
const wallFloor=215+(p.x-1050)*(wall.y-215)/(wall.x-1050);
assert(p.y-wallFloor>70,'Entire pot rests on open floor, ahead of the skirting');
assert(g.obstacles.includes(p.footprint),'Plant footprint prevents cats crossing the pot');
console.log('Cabinet volumes protrude into room, upright fronts, shared collision, plant stands clear of wall');
