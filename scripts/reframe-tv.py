import subprocess,json
from pathlib import Path
f=Path(__file__).resolve().parent.parent/'dist/assets/tv';m=json.loads((f/'manifest.json').read_text())
centres={'tv-01':[.57],'tv-02':[.65,.65],'tv-03':[.38],'tv-04':[.53,.57,.56,.55,.56,.57,.59,.60],'tv-05':[.59],'tv-06':[.55],'tv-07':[.55],'tv-08':[.62]}
for src in m['sources']:
 for i,cid in enumerate(src['clipIds']):
  c=next(c for c in m['playlist'] if c['id']==cid);y=centres[src['id']][i]
  # Retained portrait masters have the complete source framing, unlike the already cropped fill clips.
  vf=f'crop=iw:trunc(iw*9/16/2)*2:0:min(ih-oh\\,max(0\\,ih*{y}-oh/2)),scale=480:270,setsar=1'
  subprocess.run(['ffmpeg','-y','-loglevel','error','-i',str(f/(cid+'.mp4')),'-vf',vf,'-an','-c:v','libx264','-preset','fast','-crf','23','-pix_fmt','yuv420p','-profile:v','baseline','-movflags','+faststart','-threads','2',str(f/(cid+'.center.mp4'))],check=True)
  c.update(src=cid+'.center.mp4',bytes=(f/(cid+'.center.mp4')).stat().st_size,framing={'centreY':y,'type':'interaction-midpoint-crop'})
  print(cid,flush=True)
m['version']=4;m['totals']['processedBytes']=sum(c['bytes'] for c in m['playlist']);m['poster']='center-poster.jpg';m['format']['framing']='single landscape image, interaction midpoint centred, no side padding'
(f/'manifest.json').write_text(json.dumps(m,indent=2,ensure_ascii=False)+'\n')
subprocess.run(['ffmpeg','-y','-loglevel','error','-ss','0.5','-i',str(f/m['playlist'][0]['src']),'-frames:v','1',str(f/'center-poster.jpg')],check=True)
p=f.parent.parent/'room-tv.js';s=p.read_text();a=s.index('const PLAYLIST=');b=s.index(';',a)
s=s[:a]+'const PLAYLIST='+json.dumps([{'src':'assets/tv/'+c['src']+'?v=103','duration':c['duration'],'sourceId':c['sourceId']}for c in m['playlist']],separators=(',',':'))+s[b:];s=s.replace('fill-poster.jpg?v=102','center-poster.jpg?v=103');p.write_text(s)
