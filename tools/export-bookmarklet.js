/* 黑屁屁進度匯出 bookmarklet (readable source).
 * Run on the OLD site. Reads only (localStorage.getItem); never writes/removes storage.
 * Output JSON: {app:"heipipi-save",version:1,exportedAt,origin,data:{key:value}} */
(function () {
  var KEYS = ['heipipi-name', 'heipipi-sound', 'zhuwei-weather-v1'];
  var data = {};
  try {
    KEYS.forEach(function (k) { var v = localStorage.getItem(k); if (v !== null) data[k] = v; });
  } catch (e) { alert('無法讀取此網站的儲存資料：' + e); return; }
  var json = JSON.stringify({ app: 'heipipi-save', version: 1, exportedAt: new Date().toISOString(), origin: location.origin, data: data });
  function show(msg) {
    var old = document.getElementById('hpp-export-box'); if (old) old.remove();
    var box = document.createElement('div'); box.id = 'hpp-export-box';
    box.style.cssText = 'position:fixed;inset:10% 5% auto 5%;z-index:2147483647;background:#fff;color:#222;padding:14px;border-radius:12px;box-shadow:0 6px 30px rgba(0,0,0,.35);font:15px/1.5 sans-serif';
    var p = document.createElement('div'); p.textContent = msg;
    var ta = document.createElement('textarea'); ta.value = json; ta.readOnly = true;
    ta.style.cssText = 'width:100%;height:9em;margin:8px 0;font:12px monospace;box-sizing:border-box';
    var b = document.createElement('button'); b.textContent = '關閉'; b.onclick = function () { box.remove(); };
    box.appendChild(p); box.appendChild(ta); box.appendChild(b); document.body.appendChild(box);
    ta.focus(); ta.select(); try { ta.setSelectionRange(0, json.length); } catch (e) {}
    return ta;
  }
  var n = Object.keys(data).length;
  var head = '已找到 ' + n + ' 項進度資料。';
  function fallback() {
    show(head + '請長按／全選下方文字並複製，再到新網站按「匯入進度」貼上。');
    try { document.execCommand('copy'); } catch (e) {}
  }
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(json).then(function () {
      show(head + '已複製到剪貼簿！到新網站按「匯入進度」貼上即可。（下方是同一份內容，備用）');
    }, fallback);
  } else fallback();
})();
