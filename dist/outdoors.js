/* Window environment: Zhuwei, Tamsui. SunCalc BSD; Open-Meteo CC BY 4.0. */
(function(root){
'use strict';
const lat=25.135,lon=121.46,zone='Asia/Taipei',cacheKey='zhuwei-weather-v1';
const weather={current:null,hourly:null,updated:0,error:false};let lastUI=0,pending=false;
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
function conditions(code){return {storm:code>=95,drizzle:code>=51&&code<=57,rain:code>=61&&code<=67||code>=80&&code<=82||code>=95,snow:code>=71&&code<=77||code===85||code===86,hail:code===96||code===99,fog:code===45||code===48};}
function weatherName(code){const c=conditions(code);return c.storm?'雷雨':c.snow?'降雪':c.drizzle?'毛毛雨':c.rain?'降雨':c.fog?'霧':code===3?'陰天':code===2?'多雲':code===1?'晴時多雲':'晴天';}
function state(date=new Date()){
 const sun=SunCalc.getPosition(date,lat,lon),moon=SunCalc.getMoonPosition(date,lat,lon),illum=SunCalc.getMoonIllumination(date);
 const current=weather.current,stale=!weather.updated||Date.now()-weather.updated>7200000;
 const code=current?.weather_code,flags=conditions(code??0),cloud=current?.cloud_cover??0;
 // Unavailable weather must not be represented as observed clear skies.
 const strength=!stale&&sun.altitude>0&&!flags.rain&&!flags.drizzle&&!flags.snow&&!flags.fog?clamp(Math.sin(sun.altitude)*1.7,0,1)*(1-cloud/100):0;
 const moonStrength=!stale&&sun.altitude<-.08&&moon.altitude>0&&!flags.rain&&!flags.drizzle&&!flags.snow&&!flags.fog?Math.sin(moon.altitude)*illum.fraction*(1-cloud/100)*.65:0;
 return {sun,moon,illum,flags,cloud,code,strength,moonStrength,stale,current};
}
async function refresh(){
 if(pending)return;pending=true;
 try{const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),12000);let response;
 try{response=await fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current=temperature_2m,weather_code,cloud_cover,precipitation,wind_speed_10m&hourly=weather_code,cloud_cover&forecast_days=2&timezone=Asia%2FTaipei',{signal:controller.signal});}finally{clearTimeout(timeout);}
 if(!response.ok)throw Error(response.status);const data=await response.json();if(!Number.isFinite(data.current?.weather_code)||!Number.isFinite(data.current?.cloud_cover))throw Error('Invalid weather');
 Object.assign(weather,{current:data.current,hourly:data.hourly,updated:Date.now(),error:false});try{localStorage.setItem(cacheKey,JSON.stringify(weather));}catch(_){}
 }catch(_){weather.error=true;}finally{pending=false;updateUI();}
}
const fmt=d=>new Intl.DateTimeFormat('zh-TW',{timeZone:zone,hour:'2-digit',minute:'2-digit',hour12:false}).format(d);
const deg=x=>Math.round(x*180/Math.PI),bearing=x=>(deg(x)+180+360)%360;
function hourly(date=new Date()){
 const day=new Intl.DateTimeFormat('en-CA',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit'}).format(date);
 return Array.from({length:24},(_,h)=>{const d=new Date(day+'T'+String(h).padStart(2,'0')+':00:00+08:00'),s=state(d);return {hour:h,sunAltitude:deg(s.sun.altitude),sunAzimuth:bearing(s.sun.azimuth),moonAltitude:deg(s.moon.altitude),moonAzimuth:bearing(s.moon.azimuth)};});
}
function showDetails(){
 let dialog=document.getElementById('outdoors-details');if(!dialog){dialog=document.createElement('dialog');dialog.id='outdoors-details';document.body.append(dialog);dialog.style.cssText='max-width:92vw;max-height:80vh;overflow:auto;background:#f9f3e7;color:#493a2b;border:1px solid #aa9573;border-radius:14px;padding:20px;font:14px system-ui;touch-action:pan-y;user-select:text';}
 dialog.replaceChildren();const title=document.createElement('h2');title.textContent='淡水竹圍・窗外環境';dialog.append(title);
 const info=document.createElement('p'),now=new Date(),s=state(now),times=SunCalc.getTimes(now,lat,lon);info.textContent='台灣時間 '+fmt(now)+'｜日出 '+fmt(times.sunrise)+'｜日落 '+fmt(times.sunset)+'｜'+(s.stale?'天氣資料暫不可用':weatherName(s.code)+' '+s.current.temperature_2m+'°C')+'。天體位置為估算，視窗採全天空示意，並非窗戶真實朝向。';dialog.append(info);
 const table=document.createElement('table');table.style.cssText='border-collapse:collapse;width:100%;text-align:center';
 const head=document.createElement('tr');for(const text of ['時間','太陽高度 / 方位','月亮高度 / 方位']){const th=document.createElement('th');th.textContent=text;head.append(th);}table.append(head);
 for(const r of hourly(now)){const tr=document.createElement('tr');for(const text of [String(r.hour).padStart(2,'0')+':00',r.sunAltitude+'° / '+r.sunAzimuth+'°',r.moonAltitude+'° / '+r.moonAzimuth+'°']){const td=document.createElement('td');td.textContent=text;td.style.padding='5px';tr.append(td);}table.append(tr);}dialog.append(table);
 const credit=document.createElement('p');credit.textContent='地平線以下（負高度）的天體不顯示。天氣每 15 分鐘更新；雨勢與閃電為依天氣類型呈現的示意動畫，非即時雷達。資料：Open-Meteo（CC BY 4.0）；天文：SunCalc（BSD）。';dialog.append(credit);
 const link=document.createElement('a');link.href='https://open-meteo.com/';link.textContent='Open-Meteo 天氣資料';link.target='_blank';link.rel='noopener';dialog.append(link);
 const close=document.createElement('button');close.textContent='關閉';close.style.cssText='display:block;margin-top:14px;padding:8px 20px';close.onclick=()=>dialog.close();dialog.append(close);if(!dialog.open)dialog.showModal();
}
function updateUI(){const s=state(),button=document.getElementById('bSun'),label=button?.querySelector('.tool-label');if(label)label.textContent=s.strength>.18?'曬太陽':'看窗外';const status=document.getElementById('outdoors-status');if(status)status.textContent='竹圍 '+fmt(new Date())+' · '+(s.stale?'天氣暫不可用':weatherName(s.code)+(weather.error?'（上次資料）':''));}
function draw(c,g){
 const now=new Date(),s=state(now);if(Date.now()-lastUI>10000){lastUI=Date.now();updateUI();}
 if(root.WindowScene)root.WindowScene.draw(c,s,now,g,typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches);
}
function start(){try{const saved=JSON.parse(localStorage.getItem(cacheKey));if(saved?.current&&Number.isFinite(saved.updated)&&Date.now()-saved.updated<7200000)Object.assign(weather,saved);}catch(_){}
 const button=document.createElement('button');button.id='outdoors-status';button.style.cssText='font:10px var(--body,system-ui);color:var(--muted,#aaa69f);background:none;border:0;padding:3px 0;margin-left:auto;text-align:right;cursor:pointer;white-space:nowrap;line-height:1.4';button.onclick=showDetails;button.setAttribute('aria-label','竹圍窗外天氣與每小時太陽月亮位置');
 const name=document.querySelector('.row1 .name');
 if(name){const heading=document.createElement('div');heading.className='room-heading';heading.style.cssText='display:flex;align-items:center;gap:14px;flex:1;min-width:0;flex-wrap:wrap';name.parentNode.insertBefore(heading,name);heading.append(name,button);}else document.body.append(button);
 updateUI();refresh();setInterval(refresh,900000);document.addEventListener('visibilitychange',()=>{if(!document.hidden){updateUI();if(Date.now()-weather.updated>900000)refresh();}});
}
root.RoomOutdoors={state,draw,start,hourly,conditions,weather,refresh};
})(typeof window!=='undefined'?window:globalThis);
