const assert=require('assert'),roomEngine=require('./room-engine.cjs'),e=roomEngine(19);
assert.equal(typeof e.catMood,'function','Contextual moods are derived from live actor state');
const a=e.newActors[0];
const cases=[
 [{state:'walk',trafficYield:{}},'sheepish'],
 [{state:'walk',wait:.5},'puzzled'],
 [{state:'floorRest'},'sleepy'],
 [{state:'scratchPad'},'smug'],
 [{state:'marking'},'relieved'],
 [{state:'gatherSit'},'love'],
 [{state:'eat'},'nom'],
 [{state:'drink'},'nom'],
 [{state:'chase'},'playful'],
 [{state:'wait',icon:'curious'},'curious']
];
for(const [state,want]of cases){Object.assign(a,{trafficYield:null,wait:0,facilityCare:null,carry:null,pose:'walk'},state);assert.equal(e.catMood(a),want,JSON.stringify(state));}
e.liftState.actor=a;assert.equal(e.catMood(a),'surprised');e.liftState.actor=null;
Object.assign(e.cat,{state:'ask',meowPop:0});assert.equal(e.catMood(e.cat),null,'Ask bubble has priority');
Object.assign(e.cat,{state:'walk',meowPop:1});assert.equal(e.catMood(e.cat),null,'Meow bubble has priority');
Object.assign(e.cat,{state:'timed',pose:'sleep',meowPop:0});assert.equal(e.catMood(e.cat),'sleepy');
const marks=[];const canvas=new Proxy({},{get(o,k){if(k in o)return o[k];return (...args)=>{for(const n of args)if(typeof n==='number')assert(Number.isFinite(n),'Finite mood geometry');marks.push(k);};},set(o,k,v){o[k]=v;return true;}});
for(const mood of ['happy','curious','content','sleepy','sheepish','puzzled','smug','relieved','love','nom','playful','surprised']){Object.assign(a,{x:200,y:400,z:0,time:1,face:1,state:'wait',icon:mood,trafficYield:null,wait:0});e.drawYeMoodIcon(canvas,a);}
assert(marks.filter(k=>k==='stroke').length>20,'All custom face icons draw their expressions');
e.startGather();for(const a of e.actors)Object.assign(a,{x:a.gatherSlot.x,y:447,state:'gatherSit',meowPop:0});
const positions=[];canvas.translate=(x,y)=>positions.push({x,y});
for(const a of e.actors)e.drawYeMoodIcon(canvas,a);assert.equal(positions.length,0,'Gathered moods wait for the overlay above every body');
e.drawGatherMoodIcons(canvas);assert.equal(positions.length,5,'One gathered face per cat');
for(const [i,p]of positions.entries()){assert.equal(p.x,e.actors[i].x,'Gather mood centered over its own cat');assert(p.y<447-165,'Gather moods clear every front-facing head');}
console.log('Twelve custom moods, contextual priorities and bubble exclusivity passed');
