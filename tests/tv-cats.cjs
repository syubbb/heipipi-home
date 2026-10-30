const assert=require('assert'),fs=require('fs'),vm=require('vm');
assert(fs.existsSync('dist/tv-cats.js'),'TV watching controller exists');
const e={Math,Image:class{}};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);
const actors=Array.from({length:5},(_,i)=>({id:['cat','ye','rabbit','socks','dongdong'][i],x:100+i*110,y:700,state:'wait',path:[],time:0}));let clock=0;
const tv=e.CatTV.create({actors:()=>actors,portrait:{complete:true,naturalWidth:2172},geometry:()=>({x:650,bottom:200,right:708}),blocked:()=>false,path:(a,p)=>[{...p}],canStep:()=>true,clock:()=>clock,random:()=>.5,prepare(){},resume(a){a.state='wait';},eligible:()=>false});
assert.equal(tv.startAll(),5);assert.equal(new Set(actors.map(a=>a.tvVisit.slot)).size,5,'Each cat has a separate seat');
for(let i=0;i<800&&!actors.every(a=>a.state==='watchTV');i++){clock+=.05;tv.tick(.05);}
assert(actors.every(a=>a.state==='watchTV'),'All five walk to seats and face the TV');
for(const a of actors){let draws=0;const c=new Proxy({drawImage(){draws++;}},{get:(o,k)=>o[k]||(()=>{}),set:(o,k,v)=>(o[k]=v,true)});assert(tv.draw(c,a));assert.equal(draws,1,'Each viewer uses its rear-view sprite');}
tv.cancel(actors[0]);assert(!actors[0].tvVisit);assert.equal(actors[0].state,'wait');
tv.cancelAll();assert(actors.every(a=>!a.tvVisit),'Manual commands release all reservations');
console.log('Five independent TV seats, walking, rear rendering and immediate cancellation passed');

tv.startAll();actors[0].state='lifted';tv.tick(.05);assert.equal(actors[0].state,'lifted','A lift cancels viewing without replacing the lifted state');assert(!actors[0].tvVisit);
