const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const s=fs.readFileSync(path.join(__dirname,'../dist/room.js'),'utf8');const spr=JSON.parse(s.match(/const SPR=(.*);/)[1]);const npcs=JSON.parse(s.match(/const WALKING_NPCS=(.*);/)[1]);const scope={SPR:spr,WALKING_NPCS:npcs};vm.createContext(scope);vm.runInContext(s.split('\n').find(l=>l.startsWith('Object.assign(SPR,Object.fromEntries(Object.values(WALKING_NPCS)')),scope);
for(const key of Object.keys(npcs.socks.frames)){
 assert(spr[key].startsWith('assets/walk-v2/socks/'),'New walking mapping overwritten: '+key+' -> '+spr[key]);
 assert(fs.existsSync(path.join(__dirname,'../dist',spr[key])),'Missing walking frame '+key);
}
console.log('All 115 Socks frames retain new asset paths through loader overrides');
