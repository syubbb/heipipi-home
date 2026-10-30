const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path'),s=require(__dirname+'/source.cjs')();
assert(s.includes('function lowerSocksRearWhite('),'Lower the right rear sock');const e={};vm.createContext(e);vm.runInContext(s.slice(s.indexOf('/* Socks rear sock */'),s.indexOf('/* End Socks rear sock */')),e);
const w=30,h=30,d=new Uint8ClampedArray(w*h*4);
for(let y=10;y<=25;y++)for(let x=3;x<=6;x++)d.set([220,220,215,255],(y*w+x)*4);
for(let y=20;y<=25;y++)d.set([220,220,215,255],(y*w+12)*4);
for(let y=8;y<=18;y++)d.set([220,220,215,255],(y*w+24)*4);
const before=d.slice();e.lowerSocksRearWhite(d,w,h,{cx:16,width:28,height:30,ground:26});
assert(d[(10*w+4)*4]<50);assert.equal(d[(25*w+4)*4],220);assert.equal(d[(24*w+12)*4],220);assert.equal(d[(12*w+24)*4],220);
for(let i=3;i<d.length;i+=4)assert.equal(d[i],before[i]);console.log('Rear sock shortened by half; paw, other sock, chest and alpha retained');
