import cv2,numpy as np
from pathlib import Path
root=Path(r'C:\Users\USER\Documents\ChatGPT\new\sites\traffic-fix')
v=cv2.VideoCapture(r'C:\Users\USER\Documents\ChatGPT\new\outdoors-reference\rabbit-board.mp4')
out=root/'dist/assets/rabbit-scratch';out.mkdir(exist_ok=True)
for i in range(15):
 v.set(cv2.CAP_PROP_POS_FRAMES,i*2);ok,f=v.read();rgb=cv2.cvtColor(f,cv2.COLOR_BGR2RGB).astype(float)
 # Keep white fur and brown markings; remove only green-screen pixels.
 excess=rgb[:,:,1]-np.maximum(rgb[:,:,0],rgb[:,:,2])
 alpha=np.clip((38-excess)/24,0,1)
 rgb[:,:,1]=np.minimum(rgb[:,:,1],np.maximum(rgb[:,:,0],rgb[:,:,2])+7)
 rgba=np.dstack((rgb,np.round(alpha*255))).astype('uint8')[180:420,200:670]
 cv2.imwrite(str(out/f'{i:02}.png'),cv2.cvtColor(rgba,cv2.COLOR_RGBA2BGRA))
