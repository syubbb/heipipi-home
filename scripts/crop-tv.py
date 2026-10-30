"""Rebuild TV clips as real 16:9 crops, with no padding or blurred side panels."""
import argparse,json,subprocess
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('original_directory',type=Path);args=p.parse_args()
root=Path(__file__).resolve().parent.parent;folder=root/'dist/assets/tv';manifest=json.loads((folder/'manifest.json').read_text())
# Reviewed per shot: keep the cat and the person's interacting upper body in view.
centres={'tv-01':[.58],'tv-02':[.80,.80],'tv-03':[.40],'tv-04':[.60,.78,.68,.69,.61,.63,.73,.75],'tv-05':[.66],'tv-06':[.61],'tv-07':[.61],'tv-08':[.74]}
for source in manifest['sources']:
 source.pop('crop',None)
 prefix=source['original'].split('(')[0]
 originals=list(args.original_directory.glob(prefix+'*.mp4'))
 if not originals and source['id']=='tv-07':
  originals=list(args.original_directory.glob('video_635826975462392440-Qk1QyvGZ*.mp4'))
 if not originals:raise FileNotFoundError(source['original'])
 for i,clip_id in enumerate(source['clipIds']):
  item=next(v for v in manifest['playlist'] if v['id']==clip_id);centre=centres[source['id']][i]
  out=folder/(clip_id+'.fill.mp4')
  crop=f'crop=iw:trunc(iw*9/16/2)*2:0:min(ih-oh\\,max(0\\,ih*{centre}-oh/2)),scale=480:270,setsar=1,fps=15'
  subprocess.run(['ffmpeg','-y','-hide_banner','-loglevel','error','-threads','2','-ss',str(item['sourceStart']),'-i',str(originals[0]),'-t',str(item['duration']),'-vf',crop,'-an','-c:v','libx264','-preset','fast','-crf','25','-profile:v','baseline','-pix_fmt','yuv420p','-movflags','+faststart','-threads','2',str(out)],check=True)
  item.update(src=out.name,bytes=out.stat().st_size,width=480,height=270,framing={'centreY':centre,'type':'crop-no-padding'})
  print(clip_id,flush=True)
manifest['version']=3;manifest['poster']='fill-poster.jpg';manifest['format']['framing']='full-screen 16:9 crop, shot-specific interaction framing, no padding or blur'
manifest['format']['crf']=25;manifest['totals']['processedBytes']=sum(v['bytes'] for v in manifest['playlist'])
(folder/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
subprocess.run(['ffmpeg','-y','-hide_banner','-loglevel','error','-ss','0.5','-i',str(folder/manifest['playlist'][0]['src']),'-frames:v','1',str(folder/'fill-poster.jpg')],check=True)
js=root/'dist/room-tv.js';text=js.read_text();start=text.index('const PLAYLIST=');end=text.index(';',start)
playlist=[{'src':'assets/tv/'+v['src']+'?v=102','duration':v['duration'],'sourceId':v['sourceId']}for v in manifest['playlist']]
text=text[:start]+'const PLAYLIST='+json.dumps(playlist,separators=(',',':'))+text[end:]
text=text.replace('assets/tv/wide-poster.jpg?v=100','assets/tv/fill-poster.jpg?v=102');js.write_text(text)
