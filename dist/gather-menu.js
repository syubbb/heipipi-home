/* The chooser opens without changing the current room action. */
(function(root){'use strict';
function create(d){
 const {trigger,panel,photo,television,container}=d,doc=d.document||document,choices=d.choices||[{button:photo,onSelect:d.onPhoto},{button:television,onSelect:d.onTV}];
 function close(focus=false){panel.hidden=true;trigger.setAttribute('aria-expanded','false');if(focus)trigger.focus();}
 function align(){const r=trigger.getBoundingClientRect(),base=container.getBoundingClientRect(),scale=base.width/container.offsetWidth||1,width=panel.offsetWidth||200;panel.style.left=Math.max(8,Math.min(container.offsetWidth-width-8,(r.left+r.width/2-base.left)/scale-width/2))+'px';}
 function toggle(){if(!panel.hidden){close();return;}panel.hidden=false;trigger.setAttribute('aria-expanded','true');align();choices[0].button.focus();}
 trigger.setAttribute('aria-controls',panel.id||'gatherChoices');trigger.setAttribute('aria-haspopup','dialog');trigger.addEventListener('click',toggle);
 for(const choice of choices)choice.button.addEventListener('click',()=>{close(true);choice.onSelect();});
 doc.addEventListener('pointerdown',e=>{if(!panel.hidden&&!panel.contains(e.target)&&!trigger.contains(e.target))close();});
 doc.addEventListener('click',e=>{if(!panel.hidden&&!panel.contains(e.target)&&!trigger.contains(e.target))close();});
 doc.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){e.preventDefault();close(true);}});
 root.addEventListener?.('resize',()=>{if(!panel.hidden)align();});close();return {close,align};
}
root.GatherMenu={create};
})(typeof window!=='undefined'?window:globalThis);
