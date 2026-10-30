const assert=require('assert'),fs=require('fs'),vm=require('vm');const e={Math,Image:class{}};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);
const actors=Array.from({length:5},()=>({state:'watchTV',tvVisit:{},time:0}));const tv=e.CatTV.create({actors:()=>actors,portrait:{complete:true,naturalWidth:2172}}),seen=new Set();
for(let t=0;t<100;t++){actors[0].time=t;const m=tv.reaction(actors[0]);seen.add(m.kind);assert(m.kind==='puzzled'||/owner/.test(m.kind),'Black cat sees only puzzled face or personal owner moments');}
for(const key of ['puzzled','owners','hug-owner1','hug-owner2','kiss-owner1','kiss-owner2','pet-owner1','pet-owner2','miss-owners'])assert(seen.has(key),'Missing '+key);
for(const a of actors.slice(1))for(let t=0;t<80;t++){a.time=t;const m=tv.reaction(a);assert(!/owner/.test(m.kind));assert.equal(m.subject,'black-cat','All companion reaction subjects are black cats');}
vm.runInContext(fs.readFileSync('dist/tv-reactions.js','utf8'),e);const fills=[];let frames=0;const c=new Proxy({roundRect(){frames++;},fillRect(x,y,w,h){if(w>20&&h>20)frames++;},fill(){fills.push(this.fillStyle);}},{get:(o,k)=>o[k]||(()=>{}),set:(o,k,v)=>(o[k]=v,true)});
for(const kind of e.TVReactions.kinds)e.TVReactions.draw(c,{kind,black:false},0,0,1);
assert.equal(frames,0,'No exterior square/photo/thought frames');assert(!fills.includes('rgba(255,249,232,.73)'),'No round backdrop halo');assert(!fills.includes('#f5d8a8'),'No cream/nonblack cat faces');
const source=fs.readFileSync('dist/room.js','utf8');e.ownsTVVisit=a=>!!a.tvVisit;let normalMoods=0;e.catMood=()=>{normalMoods++;return null;};
vm.runInContext(source.slice(source.indexOf('function drawYeMoodIcon('),source.indexOf('function initializeCharacters(')),e);
e.drawYeMoodIcon({}, {state:'walk',tvVisit:{}},false); // No normal cream face during TV travel either.
assert.equal(normalMoods,0,'TV travel must not render a nonblack normal mood icon');
console.log('Unframed black-cat companion expressions and black-cat personal owner-only pool passed');
