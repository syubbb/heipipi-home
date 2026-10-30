/* 匯入進度 — imports progress exported from the old site by export-bookmarklet.
 * Isolated: touches only its own DOM nodes and the whitelisted localStorage keys below.
 * Styles: save-transfer.css. Open via the button or by visiting the page with #import. */
(function (root) {
  'use strict';
  var KEYS = {
    'heipipi-name': function (v) { return v.length > 0 && v.length <= 32; },
    'heipipi-sound': function (v) { return v === 'on' || v === 'off'; },
    'zhuwei-weather-v1': function (v) { try { var o = JSON.parse(v); return !!o && typeof o === 'object'; } catch (e) { return false; } }
  };
  function parseSave(text) {
    var o;
    try { o = JSON.parse(String(text).trim()); } catch (e) { throw new Error('格式不正確：不是有效的 JSON'); }
    if (!o || o.app !== 'heipipi-save') throw new Error('這不是黑屁屁的進度資料');
    if (o.version !== 1) throw new Error('不支援的版本：' + o.version);
    if (!o.data || typeof o.data !== 'object' || Array.isArray(o.data)) throw new Error('缺少進度內容');
    var out = {}, n = 0;
    for (var k in o.data) {
      if (!Object.prototype.hasOwnProperty.call(o.data, k)) continue;
      if (!KEYS[k]) continue; // ignore unknown keys
      var v = o.data[k];
      if (typeof v !== 'string' || !KEYS[k](v)) throw new Error('資料內容不正確：' + k);
      out[k] = v; n++;
    }
    if (!n) throw new Error('沒有可匯入的進度');
    return out;
  }
  function applySave(data, storage) { for (var k in data) storage.setItem(k, data[k]); return Object.keys(data).length; }
  var api = { KEYS: Object.keys(KEYS), parseSave: parseSave, applySave: applySave };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (!root.document) return;
  root.HeipipiSaveTransfer = api;
  var doc = root.document;

  function open() {
    if (doc.getElementById('hpp-import-overlay')) return;
    var ov = doc.createElement('div'); ov.id = 'hpp-import-overlay';
    ov.innerHTML = '<div id="hpp-import-panel" role="dialog" aria-label="匯入進度"><div>把舊網站匯出的進度貼在下面：</div>' +
      '<textarea spellcheck="false" placeholder="{&quot;app&quot;:&quot;heipipi-save&quot;,...}"></textarea>' +
      '<div class="hpp-msg"></div><div class="hpp-actions"><button type="button" class="hpp-cancel">取消</button>' +
      '<button type="button" class="hpp-primary hpp-ok">匯入</button></div></div>';
    var ta = ov.querySelector('textarea'), msg = ov.querySelector('.hpp-msg');
    function close() { ov.remove(); }
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    ov.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
    ov.addEventListener('keydown', function (e) { e.stopPropagation(); if (e.key === 'Escape') close(); });
    ov.querySelector('.hpp-cancel').onclick = close;
    ov.querySelector('.hpp-ok').onclick = function () {
      var data;
      try { data = parseSave(ta.value); } catch (e) { msg.textContent = e.message; return; }
      if (!root.confirm('匯入後會覆蓋這個網站目前的進度，確定嗎？')) return;
      try { applySave(data, root.localStorage); } catch (e) { msg.textContent = '無法寫入瀏覽器儲存空間：' + e.message; return; }
      if (root.location.hash === '#import') root.history.replaceState(null, '', root.location.pathname + root.location.search);
      root.location.reload();
    };
    doc.body.appendChild(ov); ta.focus();
  }
  api.open = open;
  function init() {
    var css = doc.createElement('link'); css.rel = 'stylesheet'; css.href = 'save-transfer.css'; doc.head.appendChild(css);
    var b = doc.createElement('button'); b.type = 'button'; b.id = 'hpp-import-btn'; b.textContent = '匯入進度';
    b.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
    b.addEventListener('click', function (e) { e.stopPropagation(); open(); });
    var sound = doc.getElementById('bSound');
    if (sound && sound.parentNode) { b.className = 'chip hpp-in-hud'; sound.parentNode.insertBefore(b, sound.nextSibling); }
    else { b.className = 'hpp-floating'; doc.body.appendChild(b); }
    if (root.location.hash === '#import') open();
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init); else init();
})(typeof window !== 'undefined' ? window : globalThis);
