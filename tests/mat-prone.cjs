const assert=require('assert'),fs=require('fs'),vm=require('vm');const e={Math};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/room-detail.js','utf8'),e);
assert.equal(typeof e.RoomDetail.drawMatSleeper,'function','Mat sleep has its own prone sleeping cutout renderer');
const png=fs.readFileSync('dist/assets/mat-sleep-prone-v1.png'),photo={complete:true,naturalWidth:png.readUInt32BE(16),naturalHeight:png.readUInt32BE(20)},mat={x:130,y:395,width:176,height:94};const draws=[];
const c=new Proxy({drawImage:(...args)=>draws.push(args)},{get:(o,k)=>o[k]||(()=>{}),set:(o,k,v)=>(o[k]=v,true)});
assert(!e.RoomDetail.drawMatSleeper(c,{complete:false},mat,0));
for(const t of [0,1,2,3]){assert(e.RoomDetail.drawMatSleeper(c,photo,mat,t));const [im,sx,sy,sw,sh,x,y,w,h]=draws.at(-1);assert.strictEqual(im,photo);assert(sx>=0&&sy>=0&&sx+sw<=photo.naturalWidth&&sy+sh<=photo.naturalHeight);assert(Math.abs(x+w/2-mat.x)<1e-6,'Prone body is centered on the mat');assert(x>=mat.x-mat.width/2&&x+w<=mat.x+mat.width/2);assert(y>=mat.y-mat.height/2&&y+h<=mat.y+mat.height/2,'Whole sleeping body remains on the rug');}
const bottoms=draws.map(a=>a[6]+a[8]);assert(Math.max(...bottoms)-Math.min(...bottoms)<1e-6,'Breathing keeps the body anchored to the rug');
console.log('Dedicated prone sleep sprite is centered fully on mat with grounded gentle breathing');
