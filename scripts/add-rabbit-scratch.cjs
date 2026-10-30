const fs=require('fs');const p='dist/room.js';let s=fs.readFileSync(p,'utf8');
function change(a,b){if(!s.includes(a))throw Error('Missing '+a.slice(0,70));s=s.replace(a,b)}
change('const IMG={};',`for(let i=0;i<15;i++)SPR['rabbit_scratch_'+i]='assets/rabbit-scratch/'+String(i).padStart(2,'0')+'.png';\nconst IMG={};`);
change("if(!['socks','dongdong'].includes(actor.id)","if(!['socks','dongdong','rabbit'].includes(actor.id)");
change('const busy=extraNPCs.filter(a=>a!==actor&&a.scratchBoard!=null)', 'const busy=[rabbit,...extraNPCs].filter(a=>a!==actor&&a.scratchBoard!=null)');
change("const rabbit={name:","const rabbit={id:'rabbit',scratchDue:facilityClock.time+rand(18,34),scratchTime:0,name:");
change('if(actor===rabbit){if(actor.facilityCare)',"if(actor===rabbit){if(actor.state==='scratchPad')return false;if(actor.facilityCare)");
change('function rabbitChooseDestination(){\r\n', 'function rabbitChooseDestination(){\r\n releaseScratchBoard(rabbit);\r\n');
change('  if(updateNpcFacilities(rabbit,dt))return;',`  if(rabbit.state==='scratchPad'){rabbit.time+=dt;rabbit.scratchTime+=dt;rabbit.timer-=dt;if(rabbit.timer<=0){releaseScratchBoard(rabbit);rabbitChooseDestination();}return;}
  if(!rabbit.trafficYield&&!rabbit.yieldResume&&rabbit.scratchBoard==null&&facilityClock.time>=rabbit.scratchDue){rabbit.scratchDue=facilityClock.time+rand(35,65);if(beginScratchVisit(rabbit))return;}
  if(updateNpcFacilities(rabbit,dt))return;`);
change("      rabbit.trips++;",`      if(rabbit.scratchBoard!=null){rabbit.state='scratchPad';rabbit.scratchTime=0;rabbit.timer=3;rabbit.face=1;rabbit.icon='happy';rabbit.iconUntil=rabbit.time+3;return;}
      rabbit.trips++;`);
change("function drawRabbit(c){",`function drawRabbitScratch(c){
 const im=IMG['rabbit_scratch_'+Math.floor(rabbit.scratchTime*15)%15];
 if(!im?.complete||!im.naturalWidth)return;
 c.save();c.fillStyle='rgba(60,30,8,.13)';c.beginPath();c.ellipse(rabbit.x,rabbit.y,49,5,0,0,Math.PI*2);c.fill();
 c.translate(rabbit.x,rabbit.y-(rabbit.z||0));c.scale(.36,.36);c.drawImage(im,-237,-224);c.restore();drawYeMoodIcon(c,rabbit);
}
function drawRabbit(c){
 if(rabbit.state==='scratchPad'){drawRabbitScratch(c);return;}`);
fs.writeFileSync(p,s);
