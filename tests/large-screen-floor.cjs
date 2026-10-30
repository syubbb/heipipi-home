const fs=require('fs'),vm=require('vm'),assert=require('assert'),{createCanvas,loadImage}=require('@napi-rs/canvas');
(async()=>{const e={Math,Date,Intl};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/window-scene.js','utf8'),e);const im=await loadImage('dist/assets/home-panorama-v4.jpg');
for(const [width,height]of [[2560,1300],[3440,1300],[3840,2000]]){
 const scale=.65,worldWidth=width/scale,left=(600-worldWidth)/2,bottom=height/scale,canvas=createCanvas(width,height),c=canvas.getContext('2d');c.scale(scale,scale);c.translate(-left,0);
 e.WindowScene.panoramaBackdrop(c,im,{left,width:worldWidth,floor:215,height:820,bottom});
 for(const x of [2,width/2|0,width-3])for(const y of [height/2|0,height-3])assert.equal(c.getImageData(x,y,1,1).data[3],255,`${width} x ${height}: floor must cover visible point ${x},${y}`);
}console.log('Large-screen floor coverage: 2560px, ultrawide 3440px, 4K 3840px; both lower corners and bottom filled');})();
