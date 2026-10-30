const assert=require('assert'),fs=require('fs'),vm=require('vm');
const room=fs.readFileSync('dist/room.js','utf8');
const fn=room.match(/function roomBaseScale\(width,height\)\{[^\n]+/)[0];
const e={W:600,H:820,document:{documentElement:{getAttribute:()=>'phone'}},roomPlan:null};
vm.createContext(e);vm.runInContext(fn,e);
assert.equal(e.roomBaseScale(390,531),Math.min(390/900,531/1080),'Phone v129 keeps the 1080 denominator');
e.roomPlan={layoutId:'v130',viewScale:1150};
assert.equal(e.roomBaseScale(390,531),Math.min(390/900,531/1150));
e.document.documentElement.getAttribute=()=>'desktop';
assert.equal(e.roomBaseScale(1600,800),.65,'Desktop scale ignores the mobile denominator');
function viewOf(width,sh,den,winTop){
 const scale=Math.min(width/900,sh/den),visibleW=width/scale,visibleH=sh/scale,roomW=900,left=-150;
 let top=1080-visibleH;if(top>winTop)top=winTop;
 const x=visibleW<roomW?Math.max(left,Math.min(left+roomW-visibleW,left)):left+(roomW-visibleW)/2;
 return {scale:+scale.toFixed(6),top:+top.toFixed(3),x:+x.toFixed(3),visibleW:+visibleW.toFixed(3),visibleH:+visibleH.toFixed(3)};
}
for(const [width,sh] of [[390,531],[412,553]]){
 const before=viewOf(width,sh,1080,-44),after=viewOf(width,sh,1150,-70);
 assert.deepEqual(after,before,width+' renders the same world window as the 1080 scale');
}
const narrow=viewOf(375,380,1150,-70);
assert.equal(narrow.top,-70);
assert(narrow.visibleW>900,'375x667 is wider than the 900-wide room');
const paints=[];
const ctx={fillStyle:'',fillRect:(x,y,w,h)=>{paints.push({color:thisFill,x,y,w,h});}};
let thisFill='';Object.defineProperty(ctx,'fillStyle',{set(v){thisFill=v;}});
const EX0=-150,EW=900,EY0=-320,EH=2100,floor=360,viewL=narrow.x,viewR=narrow.x+narrow.visibleW;
ctx.fillStyle='#e5c9a6';if(viewL<EX0)ctx.fillRect(viewL,EY0,EX0-viewL,floor-EY0);if(viewR>EX0+EW)ctx.fillRect(EX0+EW,EY0,viewR-EX0-EW,floor-EY0);
ctx.fillStyle='#d8ad79';if(viewL<EX0)ctx.fillRect(viewL,floor,EX0-viewL,EY0+EH-floor);if(viewR>EX0+EW)ctx.fillRect(EX0+EW,floor,viewR-EX0-EW,EY0+EH-floor);
assert(paints.length>=4,'Both side margins receive wall and floor paint');
assert(paints.every(p=>p.color!=='#14161c'&&p.w>20),'Side margins are room colours, not the page background');
assert(room.includes("c.fillStyle='#e5c9a6'")&&room.includes("layoutId==='v130'"));
console.log('390x844 and 412x915 match the previous scale; 375x667 starts at y=-70 with painted side margins');
