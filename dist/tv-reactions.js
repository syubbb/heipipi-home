/* Warm memorial reactions, drawn as crisp vectors at the current camera scale. */
(function(root){'use strict';
const kinds=['joy','like','sparkle','love','delighted','heipipi','fascinated','missing','memory','cherish','warmth','wink','kiss','shy','content','nostalgia','puzzled'];
function heart(c,x,y,size,color='#e8839e'){c.save();c.translate(x,y);c.scale(size,size);c.fillStyle=color;c.beginPath();c.moveTo(0,3);c.bezierCurveTo(-10,-3,-5,-9,0,-4);c.bezierCurveTo(5,-9,10,-3,0,3);c.fill();c.restore();}
function star(c,x,y,r,color='#eac66b'){c.fillStyle=color;c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x+1,y-1,x+r,y);c.quadraticCurveTo(x+1,y+1,x,y+r);c.quadraticCurveTo(x-1,y+1,x-r,y);c.quadraticCurveTo(x-1,y-1,x,y-r);c.fill();}
function face(c,black,expression='smile'){
 black=true; // Every television cat-face motif is Heipipi.
 c.fillStyle=black?'#252a2d':'#f5d8a8';c.strokeStyle=black?'#aaa98c':'#a17c54';c.lineWidth=.9;c.beginPath();c.moveTo(-12,-5);c.lineTo(-13,-17);c.lineTo(-5,-12);c.quadraticCurveTo(0,-15,5,-12);c.lineTo(13,-17);c.lineTo(12,-5);c.bezierCurveTo(20,14,-20,14,-12,-5);c.fill();c.stroke();
 c.fillStyle=black?'#d293a3':'#e2a6a0';for(const x of [-9,9]){c.beginPath();c.ellipse(x,3,2.4,1.2,0,0,7);c.fill();}
 c.strokeStyle=black?'#d8ddbc':'#664c3d';c.lineWidth=1.5;c.lineCap='round';
 const curve=(x1,y1,cx,cy,x2,y2)=>{c.beginPath();c.moveTo(x1,y1);c.quadraticCurveTo(cx,cy,x2,y2);c.stroke();};
 if(expression==='hearts'){for(const x of [-5.4,5.4])heart(c,x,-2,.52,'#ef88a3');}
 else if(expression==='sparkle'){for(const x of [-5.4,5.4])star(c,x,-2,3.8,black?'#d6de83':'#a78c3e');}
 else if(expression==='open'){c.fillStyle=black?'#c9da8a':'#726044';for(const x of [-5.4,5.4]){c.beginPath();c.ellipse(x,-2,2.9,3.5,0,0,7);c.fill();c.fillStyle='#1f2928';c.fillRect(x-.5,-4.4,1,4.7);c.fillStyle=black?'#c9da8a':'#726044';}}
 else if(expression==='puzzled'){c.beginPath();c.arc(-5.4,-2,2.2,0,7);c.stroke();curve(3,-1,5,-3,7,-1);curve(-8,-7,-5,-9,-2,-7);}
 else if(expression==='wink'){curve(-8,-1,-5,-4,-3,-1);c.fillStyle='#c9da8a';c.beginPath();c.ellipse(5.4,-2,2.5,3,0,0,7);c.fill();}
 else for(const x of [-5.4,5.4])curve(x-2.5,-1,x,-4,x+2.5,-1);
 c.fillStyle='#dba0aa';c.beginPath();c.moveTo(-1.5,2);c.lineTo(1.5,2);c.lineTo(0,3.7);c.fill();
 if(expression==='kiss'){curve(-1,4,4,3,1,6);heart(c,17,0,.48);}else if(expression==='puzzled'){curve(-2,5,0,3,3,4);}else if(expression==='joy'){c.fillStyle=black?'#e2a5b1':'#b27068';c.beginPath();c.moveTo(-3.5,4);c.quadraticCurveTo(0,12,3.5,4);c.fill();}
 else{curve(-3,4,0,8,3,4);}
}
const ownerFrames={
 'owner1':[50,45,312,329],'owner2':[373,36,294,340],owners:[690,58,384,318],
 'hug-owner1':[20,389,330,330],'hug-owner2':[362,382,328,338],'hug-owners':[699,390,382,330],
 'kiss-owner1':[1,730,364,305],'kiss-owner2':[363,729,333,307],'kiss-owners':[692,730,394,305],
 'pet-owner1':[4,1039,361,341],'pet-owner2':[365,1040,339,341],'miss-owners':[702,1038,384,342]
};
let ownerAtlas=root.Image?new root.Image():null;
if(ownerAtlas){ownerAtlas.decoding='async';ownerAtlas.src='assets/owner-memories-v1.png';}
function draw(c,mood,x,y,time=0){
 const {kind,index=0}=mood,bob=Math.sin(time*1.6+index)*1.6;
 c.save();c.translate(x,y+bob);c.lineJoin='round';c.lineCap='round';
 const frame=ownerFrames[kind];
 if(frame&&ownerAtlas?.complete&&ownerAtlas.naturalWidth){
  const scale=Math.min(68/frame[2],54/frame[3]),w=frame[2]*scale,h=frame[3]*scale;
  c.drawImage(ownerAtlas,...frame,-w/2,-h/2-3,w,h);
 }else{
  const type=frame?'puzzled':kind;
  if(['missing','nostalgia'].includes(type))c.rotate(-.1);
  const expression=['fascinated','love'].includes(type)?'hearts':type==='sparkle'?'sparkle':['joy','delighted'].includes(type)?'joy':type==='heipipi'?'open':type==='puzzled'?'puzzled':type==='wink'?'wink':type==='kiss'?'kiss':'smile';
  face(c,true,expression);
  if(type==='puzzled'){
   c.strokeStyle='#bd9454';c.lineWidth=1.7;c.beginPath();c.moveTo(17,-21);c.bezierCurveTo(17,-28,28,-28,26,-21);c.quadraticCurveTo(25,-18,22,-17);c.lineTo(22,-14);c.stroke();c.fillStyle='#bd9454';c.beginPath();c.arc(22,-10,1.1,0,7);c.fill();
  }else if(type==='like'){
   c.save();c.translate(21,-13);c.fillStyle='#f5d591';c.strokeStyle='#ac8152';c.lineWidth=1;c.beginPath();c.moveTo(-4,8);c.lineTo(-4,-2);c.lineTo(0,-8);c.quadraticCurveTo(4,-9,3,-2);c.lineTo(9,-2);c.quadraticCurveTo(11,0,8,8);c.closePath();c.fill();c.stroke();c.restore();heart(c,-20,-13,.55);
  }else if(['joy','delighted','sparkle','memory'].includes(type)){
   star(c,-22,-18,type==='sparkle'?6:4);star(c,21,-9,4);heart(c,17,-25,.5);
  }else if(type==='shy'){
   c.fillStyle='#c97d93';for(const dx of [-8,8]){c.beginPath();c.ellipse(dx,4,3,1.7,0,0,7);c.fill();}heart(c,19,-17,.55);
  }else if(['missing','nostalgia','content'].includes(type)){
   heart(c,19,-18,.65,type==='nostalgia'?'#ddb475':'#e995aa');star(c,-20,-13,3,'#d6bf86');
  }else{
   heart(c,-21,-18,.65);heart(c,21,-11,.55);if(type==='fascinated')star(c,18,-27,4);
  }
 }
 const p=((time+index*1.3)%3.8)/3.8;c.globalAlpha=Math.sin(p*Math.PI)*.8;
 if(kind!=='puzzled')heart(c,8+Math.sin(p*4)*5,-29-p*14,.4,'#df7e95');c.restore();
}
root.TVReactions={draw,kinds,ownerFrames,setOwnerAtlas:im=>{ownerAtlas=im;}};
})(typeof window!=='undefined'?window:globalThis);
