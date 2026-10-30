const fs=require('fs'),p='dist/room.js';let s=fs.readFileSync(p,'utf8');
s=s.replace('let AC=null,master=null',"Object.assign(SND,{voice_ye:'assets/audio/ye.wav',voice_rabbit:'assets/audio/rabbit.wav',voice_socks:'assets/audio/socks.wav',voice_dongdong:'assets/audio/dongdong.wav'});\nlet AC=null,master=null");
const a=s.indexOf('  for(const k in SND){try{AC.decodeAudioData'),b=s.indexOf(' loadGatherWhistle();',a);
s=s.slice(0,a)+`  for(const k in SND)loadCatSound(k).then(buffer=>{
   if(k==='purr'&&buffer&&!purrStarted){purrStarted=true;const source=AC.createBufferSource();source.buffer=buffer;source.loop=true;source.loopStart=.3;source.loopEnd=Math.max(.31,buffer.duration-.3);source.connect(purrG);source.start();}
  });
`+s.slice(b);
const x=s.indexOf('function playBuf('),z=s.indexOf('const MEOWS=',x);
s=s.slice(0,x)+`const soundLoads=new Map();let purrStarted=false;
function loadCatSound(name){
 if(BUF[name])return Promise.resolve(BUF[name]);
 if(!AC||!SND[name])return Promise.resolve(null);
 if(soundLoads.has(name))return soundLoads.get(name);
 const context=AC;
 const loading=Promise.resolve().then(async()=>{
  let bytes;if(SND[name].startsWith('data:'))bytes=b64buf(SND[name]);else{const response=await fetch(SND[name]);if(!response.ok)throw Error('Audio HTTP '+response.status);bytes=await response.arrayBuffer();}
  const buffer=await new Promise((resolve,reject)=>{const pending=context.decodeAudioData(bytes,resolve,reject);if(pending?.then)pending.then(resolve,reject);});
  BUF[name]=buffer;return buffer;
 }).catch(error=>{soundLoads.delete(name);console.warn('Cat audio unavailable:',name,error.message);return null;});
 soundLoads.set(name,loading);return loading;
}
function playBuf(name,vol=1,rate=1){
 if(!AC||!soundOn)return Promise.resolve(false);
 const context=AC;
 return loadCatSound(name).then(async buffer=>{
  if(!buffer||!soundOn||document.hidden)return false;
  if(context.state==='suspended')await context.resume();
  const source=context.createBufferSource();source.buffer=buffer;source.playbackRate.value=rate;
  const gain=context.createGain();gain.gain.value=vol;source.connect(gain);gain.connect(master);source.start();
  source.onended=()=>{source.disconnect();gain.disconnect();};return true;
 });
}
let nextNpcVoiceAt=0;
function npcMeow(actor,requested=false){
 if(!AC||!soundOn||document.hidden||lift.actor===actor)return;
 const id=actor===ye?'ye':actor===rabbit?'rabbit':actor.id;
 if(!SND['voice_'+id]||AC.currentTime<nextNpcVoiceAt)return;
 if(!requested&&['sleep','rest','floorRest','eat','drink','marking'].includes(actor.state))return;
 nextNpcVoiceAt=AC.currentTime+4;actor.nextVoiceAt=AC.currentTime+rand(35,70);
 playBuf('voice_'+id,.42,1);
}
function updateNpcVoices(){
 if(!AC||!soundOn||document.hidden)return;
 for(const actor of [ye,rabbit,...extraNPCs]){
  if(actor.nextVoiceAt==null)actor.nextVoiceAt=AC.currentTime+rand(12,40);
  if(AC.currentTime>=actor.nextVoiceAt){actor.nextVoiceAt=AC.currentTime+rand(35,70);npcMeow(actor);}
 }
}
`+s.slice(z);
s=s.replace('cameraTarget.value=close?cameraSelection.target:\'\';',"cameraTarget.value=close?cameraSelection.target:'';if(id&&id!=='cat'){const actor=cameraSubject();npcMeow(actor,true);}");
s=s.replace('updateGroundRipples(dt);updatePuddleReactions();','updateGroundRipples(dt);updatePuddleReactions();updateNpcVoices();');
fs.writeFileSync(p,s);

