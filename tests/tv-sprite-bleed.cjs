const assert=require('assert'),fs=require('fs'),vm=require('vm');const e={Math,Image:class{}};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/tv-cats.js','utf8'),e);
const w=9,h=9,a=new Uint8ClampedArray(w*h);for(let x=0;x<8;x++)a[x]=255;for(let y=3;y<9;y++)for(let x=2;x<7;x++)a[y*w+x]=255;a[2*w+3]=255;
a[w+3]=1;
const m=e.CatTV.spriteComponentMask(a,w,h);assert.equal(m[0],0,'Detached previous-row foot edge must be excluded');assert.equal(m[2*w+3],1,'Keep ears attached to the actual cat');assert.equal(m[7*w+4],1);console.log('Detached atlas strip removed while connected ears and body remain intact');
