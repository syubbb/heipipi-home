const assert=require('assert'),fs=require('fs'),vm=require('vm');
const e={};vm.createContext(e);vm.runInContext(fs.readFileSync('dist/gather-menu.js','utf8'),e);
function node(){return {hidden:false,offsetWidth:200,style:{},attrs:{},events:{},setAttribute(k,v){this.attrs[k]=v;},addEventListener(k,f){this.events[k]=f;},getBoundingClientRect(){return {left:0,width:390};},contains(t){return t===this;},focus(){this.focused=true;}};}
const trigger=node(),panel=node(),photo=node(),television=node(),container=node(),doc=node();container.offsetWidth=390;let photos=0,tvs=0;
const menu=e.GatherMenu.create({trigger,panel,photo,television,container,document:doc,onPhoto(){photos++;},onTV(){tvs++;}});
assert(panel.hidden);trigger.events.click();assert(!panel.hidden);assert.equal(trigger.attrs['aria-expanded'],'true');assert(!photos&&!tvs,'Opening menu never gathers');
photo.events.click();assert(panel.hidden);assert.equal(photos,1);assert.equal(tvs,0);
trigger.events.click();television.events.click();assert(panel.hidden);assert.equal(tvs,1);
trigger.events.click();doc.events.keydown({key:'Escape',preventDefault(){}});assert(panel.hidden&&trigger.focused);
trigger.events.click();doc.events.pointerdown({target:{}});assert(panel.hidden,'Outside pointer closes chooser');
trigger.events.click();doc.events.click({target:{}});assert(panel.hidden,'Keyboard-generated outside click also closes chooser');
assert(+panel.style.left.slice(0,-2)>=8,'Chooser stays in the phone viewport');menu.close();
console.log('Gather chooser separates photography/TV and supports outside, Escape, focus and viewport bounds');
