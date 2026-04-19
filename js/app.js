let stack = ['devices'];

function setNavActive(sectionId) {
  ['nav-devices','nav-notifications','nav-controller','nav-outputs','nav-information'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  const map = { devices:'nav-devices', notifications:'nav-notifications', controller:'nav-controller', outputs:'nav-outputs', information:'nav-information' };
  if (map[sectionId]) { const el = document.getElementById(map[sectionId]); if (el) el.classList.add('active'); }
}

function showSection(id) {
  document.getElementById('search-input').value = '';
  stack = [id];
  render();
  setNavActive(id);
}

function navigate(id) {
  document.getElementById('search-input').value = '';
  stack.push(id);
  render();
}

function goBack() {
  if (stack.length > 1) stack.pop();
  render();
}

function goTo(idx) {
  stack = stack.slice(0, idx + 1);
  render();
}

function render() {
  const currentId = stack[stack.length - 1];
  const node = DATA[currentId];
  if (!node) return;

  const bc = document.getElementById('breadcrumb');
  bc.innerHTML = stack.map((id, i) => {
    const n = DATA[id];
    if (!n) return '';
    const label = (n.title || id).split(' — ')[0];
    if (i === stack.length - 1) return `<span class="bc-item current">${label}</span>`;
    return `<span class="bc-item" onclick="goTo(${i})">${label}</span><span class="bc-sep">›</span>`;
  }).join('');

  const content = document.getElementById('content');
  let html = '';

  if (stack.length > 1) html += `<button class="back-btn" onclick="goBack()">‹ Back</button>`;

  if (node.type === 'readings') {
    html += `<div class="page-title">${node.title}</div>`;
    html += `<div class="page-desc" style="margin-top:4px;">Live sensor values (simulated for demo)</div>`;
    html += `<div class="detail-section" style="margin-top:12px;"><div class="detail-section-title">Current measurements</div>`;
    const readings = [
      { label:'pH', value:'7.24', unit:'pH', color:'#e6f1fb', tc:'#0C447C' },
      { label:'ORP', value:'+185', unit:'mV', color:'#e1f5ee', tc:'#085041' },
      { label:'Temperature', value:'23.1', unit:'°C', color:'#faeeda', tc:'#633806' }
    ];
    html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px;">`;
    readings.forEach(r => {
      html += `<div style="background:${r.color};border-radius:var(--border-radius-md);padding:12px;">
        <div style="font-size:11px;font-weight:500;color:${r.tc};opacity:0.7;margin-bottom:4px;">${r.label}</div>
        <div style="font-size:22px;font-weight:500;color:${r.tc};">${r.value}</div>
        <div style="font-size:11px;color:${r.tc};opacity:0.7;">${r.unit}</div>
      </div>`;
    });
    html += `</div>`;
    html += `<div class="setting-row"><span class="setting-name">Sensor status</span><span class="setting-value" style="color:#4caf50;">● OK</span></div>`;
    html += `<div class="setting-row"><span class="setting-name">Last calibration</span><span class="setting-value">2025-03-12 09:41</span></div>`;
    html += `<div class="setting-row"><span class="setting-name">Signal source</span><span class="setting-value">Channel 1 (digital SC)</span></div>`;
    html += `</div>`;
    content.innerHTML = html;
    return;
  }

  html += `<div class="page-title">${node.title}</div>`;
  if (node.desc) html += `<div class="page-desc">${node.desc}</div>`;
  if (node.danger) html += `<div class="danger-box">${node.danger}</div>`;
  if (node.warn) html += `<div class="warn-box">${node.warn}</div>`;
  if (node.note) html += `<div class="note-box">${node.note}</div>`;

  if (node.children) {
    html += `<div class="menu-grid">`;
    node.children.forEach(c => {
      html += `<div class="menu-card" onclick="navigate('${c.id}')">
        <div class="menu-card-icon" style="background:${c.color||'var(--color-background-secondary)'};">
          <span style="font-size:13px;color:var(--color-text-primary);">${c.icon}</span>
        </div>
        <div class="menu-card-title">${c.label}</div>
        <div class="menu-card-sub">${c.sub}</div>
        <div class="menu-card-arrow">Open →</div>
      </div>`;
    });
    html += `</div>`;
  }

  if (node.type === 'detail' && node.settings) {
    html += `<div class="detail-section"><div class="detail-section-title">Settings &amp; options</div>`;
    node.settings.forEach(s => {
      html += `<div class="setting-row">
        <div style="flex:1;">
          <div class="setting-name">${s.name} <span class="tag tag-${s.tag}">${s.tag}</span></div>
          <div class="setting-value" style="font-size:12px;margin-top:1px;">${s.value}</div>
          <div class="setting-path">Path: ${s.path}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  content.innerHTML = html;
}

function doSearch(q) {
  if (!q || q.trim().length < 2) { render(); return; }
  const lower = q.toLowerCase();
  const results = [];
  function walk(id, parentTitle) {
    const node = DATA[id];
    if (!node) return;
    const fullTitle = node.title || id;
    if (fullTitle.toLowerCase().includes(lower)) results.push({ id, title: fullTitle, path: parentTitle, desc: node.desc || '' });
    if (node.settings) {
      node.settings.forEach(s => {
        if (s.name.toLowerCase().includes(lower) || s.value.toLowerCase().includes(lower))
          results.push({ id, title: s.name, path: s.path, desc: s.value, jump: id });
      });
    }
    if (node.children) node.children.forEach(c => walk(c.id, fullTitle));
  }
  ['devices','notifications','controller','outputs','information'].forEach(root => walk(root, ''));

  document.getElementById('breadcrumb').innerHTML = `<span class="bc-item current">Search: "${q}"</span>`;
  const content = document.getElementById('content');
  if (results.length === 0) { content.innerHTML = `<div class="empty-state">No results found for "${q}"</div>`; return; }
  let html = `<div class="page-title" style="margin-bottom:12px;">Results for "${q}" <span style="font-size:13px;font-weight:400;color:var(--color-text-secondary);">${results.length} found</span></div>`;
  results.slice(0, 20).forEach(r => {
    html += `<div class="sr-item" onclick="navigateTo('${r.jump||r.id}')">
      <div style="flex:1;min-width:0;">
        <div class="sr-name">${r.title}</div>
        <div class="sr-path">${r.path}</div>
        ${r.desc ? `<div class="sr-desc">${r.desc.substring(0,80)}${r.desc.length>80?'...':''}</div>` : ''}
      </div>
      <span style="color:var(--color-text-tertiary);font-size:13px;">›</span>
    </div>`;
  });
  content.innerHTML = html;
}

function navigateTo(id) {
  document.getElementById('search-input').value = '';
  const pathMap = {
    'ph-overview': ['devices','ph-overview'],
    'ph-readings': ['devices','ph-overview','ph-readings'],
    'ph-device-menu': ['devices','ph-overview','ph-device-menu'],
    'ph-calibration': ['devices','ph-overview','ph-device-menu','ph-calibration'],
    'ph-settings': ['devices','ph-overview','ph-device-menu','ph-settings'],
    'ph-diagnostics': ['devices','ph-overview','ph-device-menu','ph-diagnostics'],
    'ph-maintenance': ['devices','ph-overview','ph-maintenance'],
    'ph-historical': ['devices','ph-overview','ph-historical']
  };
  stack = pathMap[id] || [id.split('-')[0] || 'devices', id];
  render();
  setNavActive(stack[0]);
}

function selectInstrument(id) {
  document.querySelectorAll('.inst-item').forEach(el => el.classList.remove('active'));
  document.getElementById('inst-ph')?.classList.add('active');
  stack = ['devices','ph-overview'];
  render();
  setNavActive('devices');
}

document.addEventListener('DOMContentLoaded', function() {
  render();
});