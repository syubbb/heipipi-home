const assert=require('assert'),fs=require('fs'),vm=require('vm'),s=fs.readFileSync('dist/room.js','utf8');
const e={gather:{active:false},tvCats:{isGroupActive:()=>true,isGroupMember:()=>false},cat:{state:'idle',time:0},mode:'wand',toolbarSelection:{},pet:{on:false}};vm.createContext(e);vm.runInContext(s.slice(s.indexOf('function currentToolButton(){'),s.indexOf('function syncToolbar(){')),e);
assert.equal(e.currentToolButton(),'bWand','Other viewers must not override a newer individual black-cat action');
e.mode='hand';e.cat.state='walk';e.toolbarSelection.requested='bFood';assert.equal(e.currentToolButton(),'bFood');
e.tvCats.isGroupMember=()=>true;assert.equal(e.currentToolButton(),'bGather','Black cat group travel still highlights gather');
console.log('Group highlight follows black-cat participation and respects newer individual commands');
