const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const source=require(__dirname+'/source.cjs')();
assert(source.includes('function correctDongdongPawPixels('),'Dongdong paws use the reference colors');
const e={};vm.createContext(e);vm.runInContext(source.slice(source.indexOf('/* Dongdong paw colors */'),source.indexOf('/* End Dongdong paw colors */')),e);
const w=4,h=10,frame={ground:9,height:10},pixels=new Uint8ClampedArray(w*h*4);pixels.fill(0);
function pixel(x,y,rgba){pixels.set(rgba,(y*w+x)*4);}
pixel(0,9,[224,220,204,255]);pixel(1,9,[16,12,10,200]);pixel(2,9,[147,84,31,255]);pixel(3,9,[230,230,230,0]);pixel(0,1,[224,220,204,255]);
pixel(1,8,[181,170,117,255]);
const before=Array.from(pixels);e.correctDongdongPawPixels(pixels,w,h,frame);
assert(pixels[9*w*4]<120&&pixels[9*w*4+1]<95&&pixels[9*w*4+2]<75,'White paw becomes dark brown');
assert(pixels[(8*w+1)*4]<100,'Cream-colored source toe is dark brown too');
for(const [x,y] of [[1,9],[2,9],[3,9],[0,1]])assert.deepEqual(Array.from(pixels.slice((y*w+x)*4,(y*w+x)*4+4)),before.slice((y*w+x)*4,(y*w+x)*4+4),'Dark pads, orange fur, transparent pixels and upper body stay unchanged');
for(let i=3;i<pixels.length;i+=4)assert.equal(pixels[i],before[i],'Preserve silhouette alpha');
console.log('Dongdong paw correction: dark brown toes; orange fur, body and alpha preserved');
let canvas={width:0,height:0,getContext(){return {drawImage(){},getImageData(){return {data:new Uint8ClampedArray(w*h*4)};},putImageData(){}};}};
e.document={createElement(){return canvas;}};
const corrected=e.correctDongdongPaws({naturalWidth:w,naturalHeight:h},frame);
assert.equal(corrected.naturalWidth,w);assert.equal(corrected.naturalHeight,h,'Scratch animation retains image height');assert(corrected.complete);
