// Run the actual room logic with deterministic time/randomness; omit only DOM/audio/rendering.
const fs=require('fs'),vm=require('vm'),path=require('path');
module.exports=function roomEngine(seed=1){
 const s=fs.readFileSync(path.join(__dirname,'../dist/room.js'),'utf8');
 let value=seed>>>0;const math=Object.create(Math);math.random=()=>{value=(Math.imul(value,1664525)+1013904223)>>>0;return value/4294967296;};
 const e={Math:math,W:600,H:820,EX0:0,EW:600,cat:{x:80,y:780,state:'idle',path:[],time:0,phase:0,speed:100,face:1,z:0,walkTime:0},IMG:{},toys:[],VIDEO_WALK:{duration:2.64},videoWalkTime:0,WSTRIDE:100,KW3:.5,Image:class{},mode:'hand',refreshCameraOptions(){},bump(){},say(){},puff(){},advanceVideoWalk:(t,d)=>t+d,lerp:(a,b,t)=>a+(b-a)*t,interrupt(){},setMode(){},cancelLiftHold(){}};
 for(const name of ['NEW_COMPANION_ASSETS','WALKING_NPCS','FLOOR_NPC_ANIMATIONS'])e[name]=JSON.parse(s.match(new RegExp('const '+name+'=(.*);'))[1]);
 e.rand=(a,b)=>a+math.random()*(b-a);e.pick=a=>a[Math.floor(math.random()*a.length)];vm.createContext(e);
 const run=(from,to)=>vm.runInContext(s.slice(s.indexOf(from),s.indexOf(to)),e);
 run('const BOX=','/* ---------- static room');
 run('const YE_ANIMATION=','/* ---------- camera:');
 run('/* ---------- rabbit NPC ---------- */','/* Ground feedback');
 run('function gatherFootprint(','/* ---------- toolbar ---------- */');
 run('/* Walking-only companions */','/* End walking-only companions */');
 run('function reviewRoamProgress(','let last=performance.now()');
 run('function followPath(','const MOUTH_UP=');
 vm.runInContext('this.npc=ye;this.bunny=rabbit;this.newActors=extraNPCs;this.clock=facilityClock;this.puddles=floorPuddles;this.liftState=lift;this.reservations=facilityReservations;this.gatherState=gather;',e);
 e.actors=[e.cat,e.npc,e.bunny,...e.newActors];e.source=s;
 return e;
};
