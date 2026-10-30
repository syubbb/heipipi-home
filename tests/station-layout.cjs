const assert=require('assert'),vm=require('vm'),e=require('./room-engine.cjs')(29);
vm.runInContext('this.layout={BOX,BOWL,WATER,LIT,LIT_IN,LIT_OUT,FAVOURITE_MAT:typeof FAVOURITE_MAT!=="undefined"?FAVOURITE_MAT:null};',e);
const p=e.layout;
assert.equal(p.BOWL.y,750,'Food bowl moves down 30 units');assert.equal(p.WATER.y,750,'Water bowl moves down 30 units');
assert.equal(p.LIT.back,630);assert.equal(p.LIT.front,688);assert.equal(p.LIT_IN.y,p.LIT.front-20);
assert.equal(p.LIT_OUT.y,p.LIT.back+32);assert(e.litterExitPoint().y>p.LIT.front+40,'Exit stays in front of the relocated tray');
assert.deepStrictEqual(Array.from(e.scratchBoardLayout(),b=>b.y),[298,378]);
for(const kind of ['eat','drink'])for(const actor of e.actors){const c=e.feedingContact(kind);assert.equal(c.y,750-(kind==='eat'?16:30));for(const slot of e.facilitySlots(kind,actor))assert.equal(slot.contact.y,c.y,'All cats use the relocated mouth contact');}
assert(p.FAVOURITE_MAT.x<220&&p.FAVOURITE_MAT.y>350&&p.FAVOURITE_MAT.y<450,'Mat lies below the box in the marked floor area');
assert.equal(p.FAVOURITE_MAT.x,p.BOX.x,'Straight mat is centered exactly below the box');
console.log('Relocated stations share draw, collision, arrival and exit coordinates; mat is in the requested area');
