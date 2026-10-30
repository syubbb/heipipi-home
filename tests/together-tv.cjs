const assert=require('assert'),fs=require('fs'),vm=require('vm');
const e={Math,Image:class{}};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);
const actors=['cat','ye','rabbit','socks','dongdong'].map((id,i)=>({id,x:300+i*60,y:700,state:'wait',time:0,path:[]}));let clock=0,busy=true;
const tv=e.CatTV.create({actors:()=>actors,portrait:{complete:true,naturalWidth:2172},geometry:()=>({x:650,bottom:200,right:708}),blocked:()=>false,path:(a,p)=>[{...p}],canStep:()=>true,clock:()=>clock,random:()=>.5,prepare(){},resume(a){a.state='wait';},eligible:()=>false,excluded:a=>a.id==='dongdong'&&busy});
const seats=tv.candidates().slice(0,5),ordered=[...seats].sort((a,b)=>a.y-b.y),gaps=ordered.slice(1).map((p,i)=>p.y-ordered[i].y);
assert.equal(gaps.indexOf(Math.max(...gaps))+1,2,'Two front viewers and three behind, with a clear gap between the staggered rows');
assert.equal(tv.startAll(),5,'Manual group request includes a busy cat waiting for safe departure');
busy=false;for(let i=0;i<1600&&!actors.every(a=>a.state==='watchTV');i++){clock+=.05;tv.tick(.05);}
assert(actors.every(a=>a.state==='watchTV'),'All requested viewers reach reserved seats');
assert.equal(new Set(actors.map(a=>a.tvVisit.slot)).size,5);
assert(tv.isGroupActive());
for(const a of actors){const moods=new Set();for(let t=0;t<65;t+=.5){a.time=t;moods.add(tv.reaction(a).kind);}assert(moods.size>=6,'Each viewer cycles through varied warm reactions');const reaction=tv.reaction(a);assert.equal(reaction.black,a===actors[0]);}
assert.notEqual(tv.reaction(actors[1]).kind,tv.reaction(actors[2]).kind,'Viewers have independent reaction phases');
tv.cancelAll();assert(!tv.isGroupActive());assert(actors.every(a=>!a.tvVisit));
busy=true;tv.startAll();tv.cancelAll();busy=false;tv.tick(.05);assert(actors.every(a=>!a.tvVisit),'Canceled pending request must never restart');
console.log('Staggered two/three TV seats, busy joining, varied memorial reactions and cancellation passed');
