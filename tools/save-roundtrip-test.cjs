// Node round-trip: run the real bookmarklet (export-bookmarklet.txt) against a fake OLD-site storage,
// capture the JSON, verify old storage untouched, then import via dist/save-transfer.js into a fresh storage.
const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const D=path.join(__dirname,'..');
function mkStore(init){const m=new Map(Object.entries(init||{}));let writes=0;return{m,get writes(){return writes},getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>{writes++;m.set(k,String(v))},removeItem:k=>{writes++;m.delete(k)},clear:()=>{writes++;m.clear()}};}
const weather=JSON.stringify({current:{temperature_2m:24},hourly:{},updated:1761840000000,error:false});
const old=mkStore({'heipipi-name':'小雞','heipipi-sound':'off','zhuwei-weather-v1':weather,'unrelated':'x'});
let copied=null;const els=[];
const fakeEl=()=>({style:{},appendChild(){},remove(){},focus(){},select(){},setSelectionRange(){},set value(v){this._v=v},get value(){return this._v}});
const ctx={localStorage:old,location:{origin:'https://old.example'},isSecureContext:true,alert:m=>{throw new Error('alert '+m)},
  navigator:{clipboard:{writeText:t=>{copied=t;return Promise.resolve();}}},
  document:{getElementById:()=>null,createElement:()=>{const e=fakeEl();els.push(e);return e},body:{appendChild(){}},execCommand(){}},Date,JSON,Object};
const bm=fs.readFileSync(path.join(D,'tools/export-bookmarklet.txt'),'utf8').trim();
assert(bm.startsWith('javascript:'));
ctx.window=ctx;vm.createContext(ctx);vm.runInContext(decodeURIComponent(bm.slice('javascript:'.length)),ctx);
setImmediate(()=>{
  assert(copied,'clipboard got JSON');assert.equal(old.writes,0,'old storage never modified');
  const o=JSON.parse(copied);assert.equal(o.app,'heipipi-save');assert.equal(o.version,1);assert.equal(o.origin,'https://old.example');
  assert.deepEqual(Object.keys(o.data).sort(),['heipipi-name','heipipi-sound','zhuwei-weather-v1']);
  const st=require(path.join(D,'dist/save-transfer.js'));
  const fresh=mkStore({'heipipi-sound':'on'});
  assert.equal(st.applySave(st.parseSave(copied),fresh),3);
  assert.equal(fresh.getItem('heipipi-name'),'小雞');assert.equal(fresh.getItem('heipipi-sound'),'off');assert.equal(fresh.getItem('zhuwei-weather-v1'),weather);
  assert.equal(fresh.getItem('unrelated'),null);
  // validation
  for(const bad of ['not json','{}',JSON.stringify({app:'heipipi-save',version:2,data:{}}),JSON.stringify({app:'heipipi-save',version:1,data:{'heipipi-sound':'loud'}}),JSON.stringify({app:'heipipi-save',version:1,data:{evil:'1'}})])
    assert.throws(()=>st.parseSave(bad));
  // empty old site exports cleanly and is rejected on import with a clear message
  console.log('round-trip OK: export read-only, 3 keys restored, validation rejects bad input');
});
