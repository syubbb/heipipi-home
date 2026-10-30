/* Fit the complete game to the browser window; never request browser fullscreen. */
(()=>{
 'use strict';
 function isDesktop(){
  const n=navigator;
  if(n.userAgentData?.mobile||/Android|iPhone|iPad|iPod|Mobile/i.test(n.userAgent))return false;
  if(n.platform==='MacIntel'&&n.maxTouchPoints>1)return false;
  return (typeof matchMedia==='function'&&matchMedia('(hover: hover) and (pointer: fine)').matches)||!n.maxTouchPoints;
 }
 function updateLayout(){
  const root=document.documentElement,desktop=isDesktop();root.setAttribute('data-device',desktop?'desktop':'mobile');
  root.setAttribute('data-layout',desktop&&innerWidth>=760?'desktop':'phone');
 }
 window.RoomDisplay=Object.freeze({isDesktop});
 updateLayout();addEventListener('resize',updateLayout);
})();
