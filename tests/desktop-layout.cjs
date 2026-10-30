const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync('dist/display.js','utf8');
function layout(ua,width,touch=0,platform='Linux'){const attrs={};const e={navigator:{userAgent:ua,maxTouchPoints:touch,platform},innerWidth:width,document:{documentElement:{setAttribute(k,v){attrs[k]=v}}},matchMedia:()=>({matches:!touch}),addEventListener(){}};e.window=e;vm.createContext(e);vm.runInContext(source,e);return attrs['data-layout'];}
assert.equal(layout('Desktop Chrome',1280),'desktop');assert.equal(layout('Desktop Chrome',760),'desktop');assert.equal(layout('Desktop Chrome',700),'phone');assert.equal(layout('iPhone Mobile',1280,5),'phone');assert.equal(layout('Macintosh',1280,5,'MacIntel'),'phone');
const css=fs.readFileSync('dist/desktop.css','utf8');assert(css.includes('width:100vw;height:100vh;transform:none'));assert(css.includes('grid-auto-flow:column')&&css.includes('grid-auto-columns:minmax(0,1fr)'));assert(!source.includes('requestFullscreen'));
const room=fs.readFileSync('dist/room.js','utf8');assert(room.includes('base=roomBaseScale(VW,sh)'),'Room uses uniform camera scale');
console.log('Desktop fills window with one action row and uniform room scale; mobile remains phone layout');
