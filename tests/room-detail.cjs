const fs=require('fs'),vm=require('vm'),assert=require('assert');
assert(fs.existsSync('dist/room-detail.js'),'A separate geometric furniture renderer is required');
const e={Math,Date,Intl};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),e);vm.runInContext(fs.readFileSync('dist/room-detail.js','utf8'),e);
const model=e.RoomDetail.cabinetModel(e.WindowScene.panoramaLayout(215));
assert.equal(model.length,5);
for(const cabinet of model){
 assert(cabinet.front.length===4&&cabinet.back.length===4);assert(cabinet.front.some((p,i)=>Math.hypot(p[0]-cabinet.back[i][0],p[1]-cabinet.back[i][1])>5),'Carcass has measurable depth');
 for(const bay of cabinet.bays){assert(bay.back.length===4&&bay.floor.length===4&&bay.sides.length===2,'Every shelf has a back, floor and two side walls');assert(bay.objects.length,'Shelf has independent objects');for(const object of bay.objects)assert(object.depth>0&&object.faces.length>=3,'Props have independent front/side/top geometry');}
}
assert(model.filter(c=>c.bays.length).length>=3,'Display, open shelf and glass cabinet have recessed interiors');
const tvConsole=model.find(c=>c.id==='right-console');assert(!tvConsole.bays.some(b=>b.objects.some(o=>o.kind==='plant')),'No tabletop plant beside desktop TV');
const photo={complete:true,naturalWidth:1280,naturalHeight:960};let original=false;const ctx=new Proxy({drawImage:im=>{if(im===photo)original=true;},createLinearGradient:()=>({addColorStop(){}})},{get:(o,k)=>o[k]||(()=>{}),set:(o,k,v)=>(o[k]=v,true)});
e.RoomDetail.drawMat(ctx,photo,{x:145,y:395,width:176,height:94});assert(original,'Mat renders original user photo pixels rather than a generated replacement');

const layers=[],scene={...e.WindowScene,drawDesktopTelevision:()=>layers.push('tv'),drawStandingPlant:()=>layers.push('plant')};e.RoomDetail.drawDesktop(ctx,scene,215,{complete:true,naturalWidth:1024});assert.deepStrictEqual(layers,['tv','plant'],'Standing floor plant stays in front of new cabinets');
console.log('Five solid cabinets, recessed shelf geometry, independent volumetric props and exact-photo mat passed');
vm.runInContext(fs.readFileSync('dist/room-layout.js','utf8'),e);
for(const desktop of [false,true]){
 const cabinet=e.RoomDetail.cabinetModel(e.RoomLayout.create({desktop,layout:desktop?undefined:'v129',left:-150,width:desktop?2200:900})).find(c=>c.id==='home-open-console'),items=cabinet.bays.flatMap(b=>b.objects);
 assert(items.length>=5,'TV shelf contains several separate practical objects');assert(items.every(o=>!['plant','vase','frame','lamp'].includes(o.kind)),'TV shelf contains media equipment, not decorative garden items');
 assert(items.some(o=>o.kind==='receiver')&&items.some(o=>o.kind==='console')&&items.some(o=>o.kind==='remote'));
 for(const o of items){assert(o.depth>=.2);assert(o.faces[1].some((p,i)=>p[1]!==o.front[i%4][1]),'Equipment has projected depth');}
}
console.log('TV shelf contains independent solid equipment with no plants');
