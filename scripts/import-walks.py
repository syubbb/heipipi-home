import subprocess,json,re
from pathlib import Path
import numpy as np
from PIL import Image
from scipy import ndimage
root=Path(__file__).resolve().parents[1];p=root/'dist/room.js';s=p.read_text()
def obj(name):return json.loads(re.search(r'const '+name+r'=(.*?);\n',s).group(1))
spr=obj('SPR');npcs=obj('WALKING_NPCS');rabbit=obj('RABBIT_ANIMATION')
clips=[('socks','j53luVDCWL-3eBURfC4S05Ox8_UaEKO3vIn2OqSoGRY(1).mp4'),('rabbit','lK_IVy7nEJ-3v1Fl3jxjObAAcSbJetis_yq44vPFLP0(1).mp4')]
for id,file in clips:
 src=Path('/workspace/scratch/3037c1017726/upload')/file
 raw=subprocess.check_output(['ffmpeg','-v','error','-i',str(src),'-vf','fps=12,scale=512:288','-f','rawvideo','-pix_fmt','rgb24','-'])
 frames=np.frombuffer(raw,np.uint8).reshape(-1,288,512,3);meta={};heights=[];widths=[]
 out=root/'dist/assets/walk-v2'/id;out.mkdir(parents=True,exist_ok=True)
 for i,a in enumerate(frames):
  f=a.astype(float);r,g,b=f[:,:,0],f[:,:,1],f[:,:,2]
  dominance=g-np.maximum(r,b)
  alpha=np.clip((38-dominance)/26,0,1)
  mask=alpha>.5;labels,n=ndimage.label(mask);sizes=np.bincount(labels.ravel());sizes[0]=0;main=labels==sizes.argmax()
  keep=ndimage.binary_dilation(main,iterations=3);alpha*=keep
  # Remove green spill on fur boundaries without removing white paws or black fur.
  f[:,:,1]=np.minimum(g,np.maximum(r,b)+7)
  rgba=np.dstack([f,np.round(alpha*255)]).clip(0,255).astype('uint8')
  ys,xs=np.where(alpha>.5);x0,x1,y0,y1=int(xs.min()),int(xs.max()),int(ys.min()),int(ys.max())
  key=f'{id}_walk_{i:03}';Image.fromarray(rgba).save(out/f'{i:03}.png')
  spr[key]=f'assets/walk-v2/{id}/{i:03}.png';meta[key]={'cx':(x0+x1)/2,'ground':y1,'height':y1-y0,'width':x1-x0};heights.append(y1-y0);widths.append(x1-x0)
 height=float(np.median(heights));width=float(np.median(widths))
 if id=='socks':npcs[id].update(fps=12,count=len(frames),height=height,width=width,frames=meta)
 else:
  rabbit['frames']={k:v for k,v in rabbit['frames'].items() if not k.startswith('rabbit_walk_')};rabbit['frames'].update(meta);rabbit['walk'].update(frames=len(frames),fps=12,duration=len(frames)/12,height=height,width=width)
 print(id,len(frames),height,width)
for name,v in [('SPR',spr),('WALKING_NPCS',npcs),('RABBIT_ANIMATION',rabbit)]:s=re.sub(r'const '+name+r'=.*?;\n',lambda _: 'const '+name+'='+json.dumps(v,separators=(',',':'))+';\n',s,count=1)
s=s.replace('const weight=index>=24&&index<=34?0:index===23||index===35?.5:1;','const weight=1; // New clip keeps stepping while looking around.')
s=s.replace('// Socks source frames 24–34: planted feet while the head looks around.\n// Advance clip time through those frames, but integrate no room displacement.','// Current Socks clip has continuous footfalls, including during head turns.')
p.write_text(s)
