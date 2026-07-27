const KEY='fast_os_v3';

const TODAY=new Date().toISOString().slice(0,10);
const d=o=>{const x=new Date();x.setDate(x.getDate()+o);return x.toISOString().slice(0,10);};
const RAW = window.RAW;
function SEED(){
  const s=JSON.parse(JSON.stringify(RAW));
  s.demandas.forEach(t=>{ t.ini=d(t.iniD); t.fim=d(t.fimD); delete t.iniD; delete t.fimD; });
  return s;
}

let S=null, mem=null;
const $=(q,r=document)=>r.querySelector(q);
const $$=(q,r=document)=>[...r.querySelectorAll(q)];
const uid=()=>'x'+Math.random().toString(36).slice(2,9);
const esc=s=>(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmtDate=s=>s?s.split('-').reverse().slice(0,2).join('/'):'—';
const brl=n=>'R$ '+(n||0).toLocaleString('pt-BR');
const REDES={
  instagram:{nome:'Instagram',cor:'#E1306C'},
  youtube:{nome:'YouTube',cor:'#FF0000'},
  linkedin:{nome:'LinkedIn',cor:'#0A66C2'}
};
function redeSVG(r,size){
  size=size||13;
  const s=size;
  if(r==='instagram') return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.12 1.38A5.87 5.87 0 0 0 .63 4.13c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.12-1.38 5.87 5.87 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.12A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0m0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4m6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44"/></svg>`;
  if(r==='youtube') return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81M9.6 15.6V8.4l6.24 3.6z"/></svg>`;
  if(r==='linkedin') return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13m1.78 13.02H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0"/></svg>`;
  return '📤';
}
const redeIcon=(r,size)=> r&&REDES[r]
  ? `<span class="rico" style="color:${REDES[r].cor}">${redeSVG(r,size)}</span>` : '📤';
const catTag=t=> t.cat==='gravacao'
  ? '<span class="tag cat grav">🎬 Gravação</span>'
  : (t.cat==='postagem'
      ? `<span class="tag cat post">${t.rede?redeIcon(t.rede,11):'📤'} ${t.rede?REDES[t.rede].nome:'Postagem'}${t.freq==='diaria'?' · diária':''}</span>`
      : '');
const isLate=t=>t.status!=='concluido'&&t.fim&&t.fim<TODAY;
const effStatus=t=>isLate(t)?'atrasado':t.status;
const LBL={nao_iniciado:'Não iniciada',em_andamento:'Em andamento',concluido:'Concluída',atrasado:'Atrasada'};
const frenteNome=id=>(S.frentes.find(f=>f.id===id)||{}).nome||'—';
const nodeById=id=>S.nodes.find(n=>n.id===id);
const isExec=n=>n&&n.tipo==='exec';
const execNodes=()=>S.nodes.filter(isExec);
const demandasOf=id=>S.demandas.filter(t=>t.node===id);

function nodeStatus(n){
  if(!isExec(n)) return null;
  const ds=demandasOf(n.id);
  if(!ds.length) return 'nao_iniciado';
  if(ds.every(t=>t.status==='concluido')) return 'concluido';
  if(ds.some(isLate)) return 'atrasado';
  if(ds.some(t=>t.status==='em_andamento')) return 'em_andamento';
  return 'nao_iniciado';
}
function waitFB(){
  return new Promise(res=>{
    if(window.FB!==undefined) return res();
    let done=false; const f=()=>{ if(!done){done=true;res();} };
    window.addEventListener('fb-ready', f, {once:true});
    setTimeout(f, 2500);
  });
}
async function load(){
  try{ if(window.FB){ const r=await window.FB.load(); if(r) return r; } }catch(e){ console.warn('Firebase load falhou',e); }
  try{ const s=localStorage.getItem(KEY); if(s) return JSON.parse(s); }catch(e){}
  return mem;
}
async function persist(){
  mem=S;
  try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){}
  try{ if(window.FB) await window.FB.save(S); }
  catch(e){ console.warn('Firebase save falhou',e); toast('Sem conexão — salvo localmente'); }
}
let pendingRemote=null;
function applyRemote(remote){
  if(!remote) return;
  if(JSON.stringify(remote)===JSON.stringify(S)) return;
  if($$('.overlay.on').length){ pendingRemote=remote; return; }
  S=remote; mem=S;
  try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){}
  renderAll(); if(selNode) selectNode(selNode);
  toast('Dados sincronizados');
}
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1900);}

function goPage(p){
  $$('nav button').forEach(x=>x.classList.toggle('on', x.dataset.p===p));
  $$('.page').forEach(s=>s.classList.remove('on'));
  $('#p-'+p).classList.add('on');
}
$$('nav button').forEach(b=>b.onclick=()=>goPage(b.dataset.p));

/* ---------- PAINEL ---------- */
function renderPainel(){
  const D=S.demandas;
  const done=D.filter(t=>t.status==='concluido').length;
  const doing=D.filter(t=>t.status==='em_andamento'&&!isLate(t)).length;
  const late=D.filter(isLate).length;
  const todo=D.filter(t=>t.status==='nao_iniciado'&&!isLate(t)).length;
  const pct=D.length?Math.round(done/D.length*100):0;
  const orc=D.filter(t=>t.orcamento).reduce((a,t)=>a+(+t.orcamentoValor||0),0);
  const orcN=D.filter(t=>t.orcamento).length;
  $('#kpis').innerHTML=`
   <div class="kpi"><div class="v">${D.length}</div><div class="l">demandas</div></div>
   <div class="kpi accent"><div class="v">${pct}%</div><div class="l">concluído</div></div>
   <div class="kpi warn"><div class="v">${doing}</div><div class="l">em andamento</div></div>
   <div class="kpi danger"><div class="v">${late}</div><div class="l">atrasadas</div></div>
   <div class="kpi"><div class="v" style="color:var(--mute)">${todo}</div><div class="l">não iniciadas</div></div>
   <div class="kpi"><div class="v" style="font-size:24px;padding-top:6px">${brl(orc)}</div><div class="l">${orcN} demandas c/ orçamento</div></div>`;
  $('#frentesProg').innerHTML=S.frentes.map(f=>{
    const ts=D.filter(t=>t.frente===f.id);
    const dn=ts.filter(t=>t.status==='concluido').length;
    const p=ts.length?Math.round(dn/ts.length*100):0;
    const l=ts.filter(isLate).length;
    return `<div class="frente-row"><div class="frente-top">
      <span class="frente-name">${esc(f.nome)}</span>
      <span class="frente-meta">${dn}/${ts.length}${l?` · <span style="color:var(--red)">${l} atrasada${l>1?'s':''}</span>`:''}</span>
      </div><div class="bar"><i style="width:${p}%"></i></div></div>`;
  }).join('');
  const lates=D.filter(isLate).sort((a,b)=>a.fim.localeCompare(b.fim));
  $('#lateList').innerHTML=lates.length?lates.map(t=>mini(t,1)).join(''):'<div class="empty">Nada atrasado. Mantenha assim.</div>';
  bindMini('#lateList');
  const lim=d(14);
  const soon=D.filter(t=>t.status!=='concluido'&&!isLate(t)&&t.fim&&t.fim<=lim).sort((a,b)=>a.fim.localeCompare(b.fim));
  $('#soonList').innerHTML=soon.length?soon.map(t=>mini(t)).join(''):'<div class="empty">Nenhuma entrega nas próximas duas semanas.</div>';
  bindMini('#soonList');

  // precisa de revisão
  const rev=D.filter(t=>t.revisao).sort((a,b)=>(a.fim||'zzzz').localeCompare(b.fim||'zzzz'));
  const rc=$('#revisaoCard');
  if(rev.length){
    rc.style.display='block';
    $('#revisaoCount').textContent=`· ${rev.length} pendência${rev.length>1?'s':''}`;
    $('#revisaoList').innerHTML=rev.map(t=>{
      const semPrazo = !t.fim;
      return `<div class="mini" data-id="${t.id}" style="background:#2a2408">
        <span class="dot ${effStatus(t)}"></span>
        <span class="t">${esc(t.titulo)}</span>
        <span class="d" style="color:${semPrazo?'var(--amber)':'var(--mute)'}">${semPrazo?'sem prazo':fmtDate(t.fim)} · ${esc(t.resp)}</span>
      </div>`;
    }).join('');
    bindMini('#revisaoList');
  } else { rc.style.display='none'; }
}
const mini=(t,l)=>`<div class="mini" data-id="${t.id}"><span class="dot ${effStatus(t)}"></span><span class="t">${esc(t.titulo)}</span><span class="d ${l?'late':''}">${fmtDate(t.fim)}</span></div>`;
function bindMini(s){$$(s+' .mini').forEach(e=>e.onclick=()=>openDemanda(e.dataset.id));}

/* ---------- DEMANDAS ---------- */
let view='kanban';
$$('#viewSeg button').forEach(b=>b.onclick=()=>{$$('#viewSeg button').forEach(x=>x.classList.remove('on'));b.classList.add('on');view=b.dataset.v;renderDemandas();});
['#fSearch','#fFrente','#fResp','#fPri','#fLate','#fRev'].forEach(s=>$(s).oninput=renderDemandas);
function filtered(){
  const q=$('#fSearch').value.toLowerCase(),fr=$('#fFrente').value,rp=$('#fResp').value,pr=$('#fPri').value,lt=$('#fLate').checked,rv=$('#fRev').checked;
  return S.demandas.filter(t=>(!q||(t.titulo+' '+t.desc).toLowerCase().includes(q))&&(!fr||t.frente===fr)&&(!rp||t.resp===rp)&&(!pr||t.prioridade===pr)&&(!lt||isLate(t))&&(!rv||t.revisao));
}
function renderDemandas(){
  const l=filtered();
  $('#kanban').style.display=view==='kanban'?'grid':'none';
  $('#lista').style.display=view==='lista'?'block':'none';
  view==='kanban'?renderKanban(l):renderLista(l);
}
function taskCard(t){
  return `<div class="task ${isLate(t)?'late':''} ${t.status==='concluido'?'done':''} ${t.pai?'child':''}" draggable="true" data-id="${t.id}">
    <div class="tt">${esc(t.titulo)}</div><div class="tags">
    <span class="tag resp">${esc(t.resp)}</span>
    <span class="tag date ${isLate(t)?'late':''}">${fmtDate(t.ini)} → ${fmtDate(t.fim)}</span>
    <span class="tag frente">${esc(frenteNome(t.frente))}</span>
    ${catTag(t)}
    ${t.revisao?'<span class="tag rev">⚑ Revisão</span>':''}
    ${t.prioridade==='Alta'?'<span class="tag pri">Alta</span>':''}
    ${t.orcamento?`<span class="tag money">R$ ${t.orcamentoValor?(+t.orcamentoValor).toLocaleString('pt-BR'):'a definir'}</span>`:''}
    ${t.pai?'<span class="tag sub">desdobramento</span>':''}</div></div>`;
}
function ordered(list){
  const roots=list.filter(t=>!t.pai||!list.some(x=>x.id===t.pai)),out=[];
  roots.forEach(r=>{out.push(r);list.filter(c=>c.pai===r.id).forEach(c=>out.push(c));});
  list.forEach(t=>{if(!out.includes(t))out.push(t);});
  return out;
}
function renderKanban(list){
  const cols=[['nao_iniciado','Não iniciadas'],['em_andamento','Em andamento'],['concluido','Concluídas']];
  $('#kanban').innerHTML=cols.map(([k,lab])=>{
    const it=ordered(list.filter(t=>t.status===k));
    return `<div class="col" data-col="${k}"><div class="col-head"><span class="dot ${k}"></span><span class="n">${lab}</span><span class="c">${it.length}</span></div>
      ${it.map(taskCard).join('')||'<div class="empty">Arraste demandas para cá.</div>'}</div>`;
  }).join('');
  bindDnD();
}
function renderLista(list){
  const it=ordered(list).sort((a,b)=>(a.fim||'z').localeCompare(b.fim||'z'));
  $('#lista').innerHTML=`<table><thead><tr><th>Demanda</th><th>Frente</th><th>Responsável</th><th>Início</th><th>Entrega</th><th>Status</th><th>Orçamento</th></tr></thead><tbody>${
    it.map(t=>`<tr data-id="${t.id}"><td class="name">${t.pai?'<span class="ind">↳</span>':''}${esc(t.titulo)}</td>
    <td style="color:var(--mute)">${esc(frenteNome(t.frente))}</td><td>${esc(t.resp)}</td>
    <td style="color:var(--mute)">${fmtDate(t.ini)}</td>
    <td style="${isLate(t)?'color:var(--red);font-weight:600':'color:var(--mute)'}">${fmtDate(t.fim)}</td>
    <td><span class="pill ${effStatus(t)}"><span class="dot ${effStatus(t)}"></span>${LBL[effStatus(t)]}</span></td>
    <td style="color:${t.orcamento?'var(--neon)':'var(--mute-2)'}">${t.orcamento?(t.orcamentoValor?brl(t.orcamentoValor):'a definir'):'—'}</td></tr>`).join('')
    ||'<tr><td colspan="7" class="empty" style="padding:22px">Nenhuma demanda com esses filtros.</td></tr>'}</tbody></table>`;
  $$('#lista tbody tr[data-id]').forEach(tr=>tr.onclick=()=>openDemanda(tr.dataset.id));
}
function bindDnD(){
  let drag=null;
  $$('.task').forEach(el=>{
    el.onclick=()=>{if(!drag)openDemanda(el.dataset.id);};
    el.ondragstart=e=>{drag=el.dataset.id;el.classList.add('dragging');e.dataTransfer.effectAllowed='move';};
    el.ondragend=()=>{el.classList.remove('dragging');setTimeout(()=>drag=null,50);};
  });
  $$('.col').forEach(c=>{
    c.ondragover=e=>{e.preventDefault();c.classList.add('over');};
    c.ondragleave=()=>c.classList.remove('over');
    c.ondrop=async e=>{
      e.preventDefault();c.classList.remove('over');
      const t=S.demandas.find(x=>x.id===drag);
      if(t&&t.status!==c.dataset.col){t.status=c.dataset.col;await persist();renderAll();if(selNode)selectNode(selNode);toast('Status atualizado');}
    };
  });
}

/* ---------- LINHA DO TEMPO ---------- */
let dayW=24, hlMode='';
const toDate=s=>new Date(s+'T00:00:00');
const diffD=(a,b)=>Math.round((toDate(b)-toDate(a))/864e5);
const iso=dt=>dt.toISOString().slice(0,10);
function monday(s){const x=toDate(s);const w=(x.getDay()+6)%7;x.setDate(x.getDate()-w);return iso(x);}
function addD(s,n){const x=toDate(s);x.setDate(x.getDate()+n);return iso(x);}
const dm=s=>{const[y,m,dd]=s.split('-');return dd+'/'+m;};

$$('#tSeg button').forEach(b=>b.onclick=()=>{
  $$('#tSeg button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  dayW=+b.dataset.z; renderTempo();
});
$$('#tHl button').forEach(b=>b.onclick=()=>{
  $$('#tHl button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  hlMode=b.dataset.h;
  document.body.classList.toggle('hl-grav',hlMode==='grav');
  document.body.classList.toggle('hl-post',hlMode==='post');
});
['#tFrente','#tResp','#tHideDone'].forEach(s=>$(s).oninput=renderTempo);

function tempoList(){
  const fr=$('#tFrente').value, rp=$('#tResp').value, hd=$('#tHideDone').checked;
  return S.demandas.filter(t=>t.ini&&t.fim&&(!fr||t.frente===fr)&&(!rp||t.resp===rp)&&(!hd||t.status!=='concluido'));
}
function renderTempo(){
  const L=tempoList();
  if(!L.length){
    $('#ganttWrap').innerHTML='<div class="empty" style="padding:30px">Nenhuma demanda com datas nesses filtros.</div>';
    $('#semanas').innerHTML=''; return;
  }
  const start=monday(L.reduce((a,t)=>t.ini<a?t.ini:a,L[0].ini));
  const lastFim=L.reduce((a,t)=>t.fim>a?t.fim:a,L[0].fim);
  let end=addD(monday(lastFim),6);
  const days=diffD(start,end)+1;
  const W=days*dayW, wkW=7*dayW;
  const nWeeks=Math.ceil(days/7);
  const trackBg=`repeating-linear-gradient(to right, transparent 0 ${5*dayW}px, rgba(255,255,255,.025) ${5*dayW}px ${7*dayW}px),`
              + `repeating-linear-gradient(to right, #262626 0 1px, transparent 1px ${wkW}px)`;
  const nowLeft = (TODAY>=start&&TODAY<=end) ? diffD(start,TODAY)*dayW : null;

  // cabeçalho de semanas
  let head=`<div class="ghead"><div class="glabel">Demanda</div><div class="gtrack" style="width:${W}px;display:flex">`;
  for(let i=0;i<nWeeks;i++){
    const ws=addD(start,i*7), we=addD(ws,6);
    const isNow = TODAY>=ws && TODAY<=we;
    head+=`<div class="wk ${isNow?'now':''}" style="width:${wkW}px"><b>Sem ${i+1}</b>${dm(ws)} – ${dm(we)}</div>`;
  }
  head+='</div></div>';

  // linhas agrupadas por frente, com desdobramentos logo abaixo do pai
  let rows='';
  S.frentes.forEach(f=>{
    const all=L.filter(t=>t.frente===f.id);
    if(!all.length) return;
    // raízes ordenadas por data; cada filha entra imediatamente após a mãe
    const byDate=(a,b)=>(a.ini||'z').localeCompare(b.ini||'z')||(a.fim||'z').localeCompare(b.fim||'z');
    const roots=all.filter(t=>!t.pai||!all.some(x=>x.id===t.pai)).sort(byDate);
    const ts=[];
    roots.forEach(r=>{
      ts.push(r);
      all.filter(c=>c.pai===r.id).sort(byDate).forEach(c=>ts.push(c));
    });
    all.forEach(t=>{ if(!ts.includes(t)) ts.push(t); }); // segurança: nada fica de fora
    rows+=`<div class="gsec"><div class="glabel">${esc(f.nome)}</div>
      <div class="gtrack" style="width:${W}px"></div></div>`;
    ts.forEach(t=>{
      const st=effStatus(t);
      const isChild=!!t.pai && all.some(x=>x.id===t.pai);
      const x=diffD(start,t.ini)*dayW;
      const w=Math.max(dayW,(diffD(t.ini,t.fim)+1)*dayW);
      const dias=diffD(t.ini,t.fim)+1;
      const catCls = t.cat==='gravacao'?' grav':(t.cat==='postagem'?' post':'');
      const ico = t.cat==='gravacao'?'<span class="cico">🎬</span>':(t.cat==='postagem'?'<span class="cico">📤</span>':'');
      const label = w>150 ? `${ico}${esc(t.resp)} <span class="gmini">${dm(t.ini)} → ${dm(t.fim)}</span>` : (w>62?`${ico}${esc(t.resp)}`:ico);
      // pontos por dia de postagem
      let dots='';
      if(t.cat){
        const dotc = t.cat==='gravacao' ? 'gravdot' : 'postdot';
        const verb = t.cat==='gravacao' ? 'Gravação' : 'No ar';
        if(t.freq==='diaria'){
          for(let dd=0; dd<dias; dd++){
            const cx=(diffD(start,t.ini)+dd)*dayW + dayW/2;
            dots+=`<div class="${dotc}" style="left:${cx}px" title="${verb} #${dd+1}: ${dm(addD(t.ini,dd))}"></div>`;
          }
        }else{
          const cx=diffD(start,t.fim)*dayW + dayW/2;
          dots+=`<div class="${dotc}" style="left:${cx}px" title="${verb}: ${dm(t.fim)}"></div>`;
        }
      }
      rows+=`<div class="grow ${isChild?'gchild':''} ${st==='concluido'?'gdone':''}">
        <div class="glabel" data-id="${t.id}">
          <span class="dot ${st}"></span>
          <span class="gt">${isChild?'<span class="gbranch">↳</span> ':''}${esc(t.titulo)}</span>
          <span class="sub2">${st==='concluido'?'✓ ':''}${dias}d</span>
        </div>
        <div class="gtrack" style="width:${W}px;background:${trackBg}">
          ${nowLeft!==null?`<div class="gnow" style="left:${nowLeft}px"></div>`:''}
          <div class="bar ${st}${catCls}" data-id="${t.id}" style="left:${x}px;width:${w}px" title="${esc(t.titulo)} — ${dm(t.ini)} a ${dm(t.fim)}${st==='concluido'?' (concluída)':''}">${st==='concluido'?'<span class="cico">✓</span>':''}${label}</div>
          ${dots}
          <div class="cap ini" style="left:${x-2}px"></div>
          <div class="cap fim" style="left:${x+w-4}px;background:${st==='atrasado'?'var(--red)':st==='concluido'?'var(--neon)':'#8A8A8A'}"></div>
        </div></div>`;
    });
  });
  $('#ganttWrap').innerHTML=`<div class="gantt">${head}${rows}</div>`;
  $$('#ganttWrap .bar,#ganttWrap .glabel[data-id]').forEach(el=>el.onclick=()=>openDemanda(el.dataset.id));

  // scroll até a semana atual
  const gw=$('#ganttWrap');
  if(nowLeft!==null) gw.scrollLeft=Math.max(0,nowLeft-260);

  // ---------- AGENDA SEMANAL ----------
  let out='';
  for(let i=0;i<nWeeks;i++){
    const ws=addD(start,i*7), we=addD(ws,6);
    const isNow=TODAY>=ws&&TODAY<=we;
    const ini=L.filter(t=>t.ini>=ws&&t.ini<=we);
    const fim=L.filter(t=>t.fim>=ws&&t.fim<=we);
    const run=L.filter(t=>t.ini<ws&&t.fim>we);
    if(!ini.length&&!fim.length&&!run.length) continue;
    const item=t=>`<div class="wkitem ${isLate(t)?'late':''}" data-id="${t.id}">
      <span class="dot ${effStatus(t)}"></span><span>${esc(t.titulo)}</span><span class="who">${esc(t.resp)}</span></div>`;
    // dias com conteúdo no ar nesta semana
    const air=[];
    L.filter(t=>t.cat==='postagem').forEach(t=>{
      if(t.freq==='diaria'){
        const n=diffD(t.ini,t.fim)+1;
        for(let k=0;k<n;k++){ const day=addD(t.ini,k); if(day>=ws&&day<=we) air.push([day,t]); }
      }else if(t.fim>=ws&&t.fim<=we){ air.push([t.fim,t]); }
    });
    air.sort((a,b)=>a[0].localeCompare(b[0]));
    const WD=['dom','seg','ter','qua','qui','sex','sáb'];
    const airHtml = air.length
      ? `<div class="airline"><span class="al">📤 No ar</span><div class="postrow">${
          air.map(([day,t])=>`<span class="pchip" data-id="${t.id}" title="${esc(t.titulo)}">${WD[toDate(day).getDay()]} ${dm(day)} <span class="pd">${esc(t.titulo.slice(0,22))}${t.titulo.length>22?'…':''}</span></span>`).join('')
        }</div></div>` : '';
    out+=`<div class="wkcard ${isNow?'now':''}">
      <div class="wkhead"><span class="wn">Semana ${i+1}</span>
        <span class="wd">${dm(ws)} a ${dm(we)}</span>
        ${isNow?'<span class="tagnow">semana atual</span>':''}
        <span class="cnt">${ini.length} inícios · ${fim.length} entregas · ${run.length} em curso${air.length?` · ${air.length} no ar`:''}</span></div>
      <div class="wkgrid">
        <div class="wkcol ini"><div class="h">▶ Começam</div>${ini.map(item).join('')||'<div class="wknone">—</div>'}</div>
        <div class="wkcol fim"><div class="h">■ Entregam</div>${fim.map(item).join('')||'<div class="wknone">—</div>'}</div>
        <div class="wkcol run"><div class="h">— Em curso</div>${run.map(item).join('')||'<div class="wknone">—</div>'}</div>
      </div>${airHtml}</div>`;
  }
  $('#semanas').innerHTML=out;
  $$('#semanas .wkitem,#semanas .pchip').forEach(el=>el.onclick=()=>openDemanda(el.dataset.id));
}


/* ---------- CALENDÁRIO DE CONTEÚDO ---------- */
let cHl='', cView='cal', cRede='';
$$('#cHl button').forEach(b=>b.onclick=()=>{
  $$('#cHl button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  cHl=b.dataset.c;
  document.body.classList.toggle('chl-grav',cHl==='gravacao');
  document.body.classList.toggle('chl-post',cHl==='postagem');
  $('#cRede').style.opacity = cHl==='gravacao' ? '.4' : '1';
  $('#cRede').style.pointerEvents = cHl==='gravacao' ? 'none' : 'auto';
  renderConteudo();
});
$$('#cView button').forEach(b=>b.onclick=()=>{
  $$('#cView button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  cView=b.dataset.v; renderConteudo();
});
function initRedeFilter(){
  $$('#cRede button[data-r]').forEach(b=>{
    if(b.dataset.r) b.innerHTML=redeIcon(b.dataset.r,14);
    b.onclick=()=>{
      $$('#cRede button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
      cRede=b.dataset.r;
      b.style.color = b.dataset.r ? REDES[b.dataset.r].cor : '';
      $$('#cRede button').forEach(x=>{ if(x!==b) x.style.color=''; });
      renderConteudo();
    };
  });
}
$('#cResp').oninput=renderConteudo;

// gera a lista de eventos individuais (um por dia), numerados dentro da série
function contentEvents(){
  const rp=$('#cResp').value;
  const evs=[];
  S.demandas.filter(t=>t.cat&&t.ini&&t.fim&&(!rp||t.resp===rp)&&(!cRede||(t.cat==='postagem'&&t.rede===cRede))).forEach(t=>{
    const total = t.freq==='diaria' ? diffD(t.ini,t.fim)+1 : 1;
    if(t.freq==='diaria'){
      for(let k=0;k<total;k++) evs.push({day:addD(t.ini,k), t, seq:k+1, total, cat:t.cat});
    }else{
      evs.push({day:t.fim, t, seq:1, total:1, cat:t.cat});
    }
  });
  return evs.sort((a,b)=>a.day.localeCompare(b.day));
}
const MES=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const WD3=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
// cabeçalho do grid: a semana começa na SEGUNDA (mesma base do monday())
const WD3_HEAD=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
function evIcon(e){
  if(e.cat==='gravacao') return '<span class="cico2">🎬</span>';
  return `<span class="cico2">${e.t.rede?redeIcon(e.t.rede,12):'📤'}</span>`;
}
function evLabel(e){
  const seq = e.total>1 ? ` <span class="seq">#${e.seq}</span>` : '';
  return `${evIcon(e)}<span class="clabel">${esc(e.t.titulo)}${seq}</span>`;
}

function renderConteudo(){
  const evs=contentEvents();
  // stats
  const gDays=evs.filter(e=>e.cat==='gravacao').length;
  const pDays=evs.filter(e=>e.cat==='postagem').length;
  const gDem=new Set(evs.filter(e=>e.cat==='gravacao').map(e=>e.t.id)).size;
  const pDem=new Set(evs.filter(e=>e.cat==='postagem').map(e=>e.t.id)).size;
  $('#cStats').innerHTML=`
    <div class="cstat post"><div class="v">${pDays}</div><div class="l">dias com postagem</div></div>
    <div class="cstat grav"><div class="v">${gDays}</div><div class="l">dias de gravação</div></div>
    <div class="cstat"><div class="v">${pDem}</div><div class="l">demandas de postagem</div></div>
    <div class="cstat"><div class="v">${gDem}</div><div class="l">demandas de gravação</div></div>`;

  if(!evs.length){
    $('#cCal').innerHTML='<div class="empty" style="padding:30px;text-align:center">Nenhuma gravação ou postagem marcada ainda.<br>Abra uma demanda e marque como 🎬 Gravação ou 📤 Postagem.</div>';
    $('#cResumo').innerHTML=''; return;
  }

  // mapa dia -> eventos
  const byDay={};
  evs.forEach(e=>{ (byDay[e.day]=byDay[e.day]||[]).push(e); });

  if(cView==='cal') renderCalGrid(evs, byDay);
  else renderCalList(byDay);

  renderResumo(evs);
}

function renderCalGrid(evs, byDay){
  const first=monday(evs[0].day);
  const lastEv=evs[evs.length-1].day;
  const last=addD(monday(lastEv),6);
  const weeks=Math.ceil((diffD(first,last)+1)/7);
  // agrupa por mês (usa o mês da quinta-feira de cada semana para rótulo estável)
  let html='';
  let cursor=first, curMonthKey='';
  const headRow=`<div class="calgrid">${WD3_HEAD.map(w=>`<div class="cwh">${w}</div>`).join('')}</div>`;
  let grid='';
  for(let w=0; w<weeks; w++){
    for(let dd=0; dd<7; dd++){
      const day=addD(first, w*7+dd);
      const dt=toDate(day);
      const mk=dt.getFullYear()+'-'+dt.getMonth();
      if(mk!==curMonthKey){
        if(grid){ html+=`<div class="cal">${monthHead(curMonthKey)}${headRow}<div class="calgrid">${grid}</div></div>`; grid=''; }
        curMonthKey=mk;
      }
      const evList=(byDay[day]||[]);
      const cls=['cday'];
      if(dt.getDay()===0||dt.getDay()===6) cls.push('we');
      if(day===TODAY) cls.push('today');
      grid+=`<div class="${cls.join(' ')}"><div class="dn">${dt.getDate()}</div>${
        evList.map(e=>`<button class="cev ${e.cat==='gravacao'?'grav':'post'}" data-id="${e.t.id}" title="${esc(e.t.titulo)}${e.total>1?' — '+e.seq+'/'+e.total:''} · ${WD3[dt.getDay()]} ${dm(day)}">${evLabel(e)}</button>`).join('')
      }</div>`;
    }
  }
  if(grid) html+=`<div class="cal">${monthHead(curMonthKey)}${headRow}<div class="calgrid">${grid}</div></div>`;
  $('#cCal').innerHTML=html;
  $$('#cCal .cev').forEach(el=>el.onclick=()=>openDemanda(el.dataset.id));
}
function monthHead(mk){
  const [y,m]=mk.split('-'); return `<div class="calmonth">${MES[+m]} ${y}</div>`;
}
function renderCalList(byDay){
  const days=Object.keys(byDay).sort();
  $('#cCal').innerHTML=`<div class="cdaylist">${
    days.map(day=>{
      const dt=toDate(day);
      const evs=byDay[day];
      return `<div class="cdl ${day===TODAY?'today':''}">
        <div class="cdd"><b>${dt.getDate()}/${String(dt.getMonth()+1).padStart(2,'0')}</b><span>${WD3[dt.getDay()]} · ${MES[dt.getMonth()].slice(0,3)}</span></div>
        <div class="evs">${evs.map(e=>`<button class="cev ${e.cat==='gravacao'?'grav':'post'}" data-id="${e.t.id}" style="width:auto;max-width:280px">${evLabel(e)}</button>`).join('')}</div>
      </div>`;
    }).join('')
  }</div>`;
  $$('#cCal .cev').forEach(el=>el.onclick=()=>openDemanda(el.dataset.id));
}
function renderResumo(evs){
  const dem={};
  evs.forEach(e=>{ dem[e.t.id]=dem[e.t.id]||{t:e.t,days:[]}; dem[e.t.id].days.push(e.day); });
  const list=Object.values(dem);
  const grav=list.filter(x=>x.t.cat==='gravacao');
  const post=list.filter(x=>x.t.cat==='postagem');
  const row=x=>{
    const days=x.days.sort();
    const rng = days.length>1 ? `${dm(days[0])} → ${dm(days[days.length-1])} · ${days.length} dias` : dm(days[0]);
    const cls=x.t.cat==='gravacao'?'grav':'post';
    const ico=x.t.cat==='gravacao'?'🎬':(x.t.rede?redeIcon(x.t.rede,16):'📤');
    return `<div class="cbrow ${cls}" data-id="${x.t.id}">
      <span class="ico">${ico}</span><span class="nm">${esc(x.t.titulo)}</span>
      ${x.days.length>1?`<span class="badge2">${x.days.length}×</span>`:''}
      <span class="rng">${rng}</span></div>`;
  };
  let html='';
  if(post.length && cHl!=='gravacao') html+=`<div class="cbucket"><h2>📤 Postagens</h2>${post.map(row).join('')}</div>`;
  if(grav.length && cHl!=='postagem') html+=`<div class="cbucket"><h2>🎬 Gravações</h2>${grav.map(row).join('')}</div>`;
  $('#cResumo').innerHTML=html;
  $$('#cResumo .cbrow').forEach(el=>el.onclick=()=>openDemanda(el.dataset.id));
}

/* ---------- MODAL DEMANDA ---------- */
let editId=null;
function fillSelects(){
  const fo='<option value="">Todas as frentes</option>'+S.frentes.map(f=>`<option value="${f.id}">${esc(f.nome)}</option>`).join('');
  const po='<option value="">Todos responsáveis</option>'+S.people.map(p=>`<option value="${esc(p)}">${esc(p)}</option>`).join('');
  const keep=(sel,html)=>{const v=$(sel).value; $(sel).innerHTML=html; $(sel).value=v;};
  keep('#fFrente',fo); keep('#fResp',po); keep('#tFrente',fo); keep('#tResp',po); keep('#cResp',po);
}
function openDemanda(id,preset={}){
  editId=id;
  const t=id?S.demandas.find(x=>x.id===id):null;
  $('#mdTitle').textContent=t?'Editar demanda':'Nova demanda';
  $('#dDel').style.display=t?'block':'none';
  $('#dSplit').style.display=t?'block':'none';
  $('#dGoMap').style.display=(t&&t.node&&nodeById(t.node))?'block':'none';
  $('#dFrente').innerHTML=S.frentes.map(f=>`<option value="${f.id}">${esc(f.nome)}</option>`).join('');
  $('#dNode').innerHTML='<option value="">— sem etapa —</option>'+execNodes().map(n=>`<option value="${n.id}">${esc(n.l)}</option>`).join('');
  $('#dResp').innerHTML=S.people.map(p=>`<option value="${esc(p)}">${esc(p)}</option>`).join('');
  $('#dPai').innerHTML='<option value="">— demanda independente —</option>'+S.demandas.filter(x=>!x.pai&&x.id!==id).map(x=>`<option value="${x.id}">${esc(x.titulo)}</option>`).join('');
  $('#dTitulo').value=t?.titulo||''; $('#dDesc').value=t?.desc||'';
  $('#dFrente').value=t?.frente||preset.frente||S.frentes[0].id;
  $('#dNode').value=t?.node||preset.node||'';
  $('#dResp').value=t?.resp||S.people[0];
  $('#dPri').value=t?.prioridade||'Média';
  $('#dIni').value=t?.ini||TODAY; $('#dFim').value=t?.fim||d(14);
  $('#dStatus').value=t?.status||'nao_iniciado';
  $('#dPai').value=t?.pai||preset.pai||'';
  $('#dOrc').checked=!!t?.orcamento; $('#dOrcVal').value=t?.orcamentoValor||'';
  $('#dOrcWrap').style.display=$('#dOrc').checked?'block':'none';
  $('#dRevisao').checked=!!t?.revisao;
  $('#dGrav').checked=(t?.cat==='gravacao');
  $('#dPost').checked=(t?.cat==='postagem');
  $('#dFreq').value=t?.freq||'unica';
  dRede=t?.rede||'';
  $$('#dRedes .rede').forEach(b=>{ b.innerHTML=`${redeIcon(b.dataset.r,16)} ${REDES[b.dataset.r].nome}`; });
  paintRedes();
  syncCat();
  $('#mDemanda').classList.add('on');
  setTimeout(()=>$('#dTitulo').focus(),60);
}
$('#dOrc').onchange=e=>$('#dOrcWrap').style.display=e.target.checked?'block':'none';
let dRede='';
function paintRedes(){
  $$('#dRedes .rede').forEach(b=>{
    const on=b.dataset.r===dRede;
    b.classList.toggle('on',on);
    b.style.borderColor = on ? REDES[b.dataset.r].cor : '';
    b.style.color = on ? REDES[b.dataset.r].cor : '';
  });
}
$$('#dRedes .rede').forEach(b=>b.onclick=()=>{ dRede = dRede===b.dataset.r?'':b.dataset.r; paintRedes(); });
function syncCat(){
  const g=$('#dGrav').checked, p=$('#dPost').checked;
  $('#ctGrav').classList.toggle('on',g);
  $('#ctPost').classList.toggle('on',p);
  $('#dFreqWrap').style.display=(g||p)?'block':'none';
  $('#dRedeWrap').style.display=p?'block':'none';
  freqHint();
}
function freqHint(){
  const dias = Math.max(1, (function(){
    const a=$('#dIni').value, b=$('#dFim').value;
    if(!a||!b) return 1;
    return Math.round((new Date(b)-new Date(a))/864e5)+1;
  })());
  const verbo = $('#dGrav').checked ? 'gravação' : 'postagem';
  $('#dFreqHint').textContent = $('#dFreq').value==='diaria'
    ? `Gera ${dias} evento${dias>1?'s':''} de ${verbo}, numerados #1 a #${dias}, um por dia.`
    : 'Acontece uma vez, na data de entrega.';
}
$('#dGrav').onchange=()=>{ if($('#dGrav').checked)$('#dPost').checked=false; syncCat(); };
$('#dPost').onchange=()=>{ if($('#dPost').checked)$('#dGrav').checked=false; syncCat(); };
$('#dFreq').onchange=freqHint;
$('#dIni').addEventListener('change',freqHint);
$('#dFim').addEventListener('change',freqHint);
$('#btnNew').onclick=()=>openDemanda(null);
$('#dSave').onclick=async()=>{
  const titulo=$('#dTitulo').value.trim();
  if(!titulo){$('#dTitulo').focus();toast('Dê um nome à demanda');return;}
  const data={titulo,desc:$('#dDesc').value.trim(),frente:$('#dFrente').value,node:$('#dNode').value,
    resp:$('#dResp').value,prioridade:$('#dPri').value,ini:$('#dIni').value,fim:$('#dFim').value,
    status:$('#dStatus').value,pai:$('#dPai').value,orcamento:$('#dOrc').checked,orcamentoValor:+$('#dOrcVal').value||0,
    revisao:$('#dRevisao').checked,
    cat:$('#dGrav').checked?'gravacao':($('#dPost').checked?'postagem':''),
    freq:($('#dGrav').checked||$('#dPost').checked)?$('#dFreq').value:'',
    rede:$('#dPost').checked?dRede:''};
  if(editId) Object.assign(S.demandas.find(x=>x.id===editId),data);
  else S.demandas.push({id:uid(),...data});
  await persist(); closeModals(); renderAll(); if(selNode)selectNode(selNode);
  toast(editId?'Demanda salva':'Demanda criada');
};
$('#dDel').onclick=async()=>{
  const k=S.demandas.filter(x=>x.pai===editId).length;
  if(!confirm(k?`Excluir esta demanda e liberar ${k} desdobramento(s)?`:'Excluir esta demanda?'))return;
  S.demandas.filter(x=>x.pai===editId).forEach(x=>x.pai='');
  S.demandas=S.demandas.filter(x=>x.id!==editId);
  await persist(); closeModals(); renderAll(); if(selNode)selectNode(selNode); toast('Demanda excluída');
};
$('#dSplit').onclick=()=>{
  const t=S.demandas.find(x=>x.id===editId); if(!t)return;
  closeModals(); setTimeout(()=>openDemanda(null,{frente:t.frente,node:t.node,pai:t.pai||t.id}),120);
};
$('#dGoMap').onclick=()=>{
  const t=S.demandas.find(x=>x.id===editId);
  if(!t||!t.node)return;
  closeModals(); revealNode(t.node);
};

/* ---------- MAPA ---------- */
let zoom=.22,panX=20,panY=20,selNode=null;
const canvas=$('#canvas'),vp=$('#viewport');
function renderMap(){
  $$('.hot').forEach(e=>e.remove());
  S.nodes.forEach(n=>{
    const el=document.createElement('div');
    const st=nodeStatus(n);
    const ds=demandasOf(n.id);
    el.className='hot '+(isExec(n)?'exec':'ctx')+(n.custom?' custom':'')+((n.custom&&!n.card)?' tp':'')+(selNode===n.id?' sel':'');
    if(st) el.dataset.st=st;
    el.dataset.id=n.id;
    el.style.cssText=`left:${n.x}px;top:${n.y}px;width:${n.w}px;height:${n.h}px`;
    let inner='';
    if(n.custom && n.card) inner+=esc(n.l);
    if(isExec(n)) inner+=`<div class="badge">${ds.length}</div>`;
    else if(selNode===n.id) inner+=`<div class="badge">i</div>`;
    if(n.custom) inner+='<div class="rz"></div>';
    el.innerHTML=inner;
    canvas.appendChild(el);
    bindHot(el,n);
  });
}
function bindHot(el,n){
  el.onmousedown=e=>{
    e.stopPropagation();
    if(e.target.classList.contains('rz')){ resize(e,n,el); return; }
    if(!n.custom){ // caixas originais não se movem: o mapa é fiel
      const up=()=>{document.removeEventListener('mouseup',up); selectNode(n.id);};
      document.addEventListener('mouseup',up); return;
    }
    let moved=false;
    const sx=e.clientX,sy=e.clientY,ox=n.x,oy=n.y;
    const mv=ev=>{
      const dx=(ev.clientX-sx)/zoom,dy=(ev.clientY-sy)/zoom;
      if(Math.abs(dx)>3||Math.abs(dy)>3)moved=true;
      n.x=Math.max(0,ox+dx); n.y=Math.max(0,oy+dy);
      el.style.left=n.x+'px'; el.style.top=n.y+'px';
    };
    const up=async()=>{
      document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up);
      if(moved) await persist(); else selectNode(n.id);
    };
    document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);
  };
}
function resize(e,n,el){
  const sx=e.clientX,sy=e.clientY,ow=n.w,oh=n.h;
  const mv=ev=>{n.w=Math.max(60,ow+(ev.clientX-sx)/zoom);n.h=Math.max(34,oh+(ev.clientY-sy)/zoom);
    el.style.width=n.w+'px';el.style.height=n.h+'px';};
  const up=async()=>{document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up);await persist();};
  document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);
}
function applyT(){canvas.style.transform=`translate(${panX}px,${panY}px) scale(${zoom})`;}
vp.onmousedown=e=>{
  if(e.target.closest('.hot'))return;
  vp.classList.add('grabbing');
  const sx=e.clientX-panX,sy=e.clientY-panY;
  const mv=ev=>{panX=ev.clientX-sx;panY=ev.clientY-sy;applyT();};
  const up=()=>{vp.classList.remove('grabbing');document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',up);};
  document.addEventListener('mousemove',mv);document.addEventListener('mouseup',up);
};
vp.onwheel=e=>{
  e.preventDefault();
  const r=vp.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;
  const nz=Math.min(3,Math.max(.08,zoom*(e.deltaY<0?1.12:0.89)));
  panX=mx-(mx-panX)*(nz/zoom); panY=my-(my-panY)*(nz/zoom); zoom=nz; applyT();
};
$('#zIn').onclick=()=>{zoom=Math.min(3,zoom*1.25);applyT();};
$('#zOut').onclick=()=>{zoom=Math.max(.08,zoom/1.25);applyT();};
$('#zReset').onclick=()=>{zoom=1;panX=-100;panY=-40;applyT();};
$('#btnFit').onclick=fit;
function fit(){
  const r=vp.getBoundingClientRect();
  zoom=Math.min((r.width-40)/14175,(r.height-40)/4050);
  panX=20; panY=(r.height-4050*zoom)/2; applyT();
}
$('#btnFocus').onclick=e=>{
  document.body.classList.toggle('focusexec');
  e.currentTarget.classList.toggle('on', document.body.classList.contains('focusexec'));
};

/* --- MODO MARCAÇÃO: desenhar a área sobre uma caixa já impressa no mapa --- */
let markMode=false;
function setMark(on){
  markMode=on;
  document.body.classList.toggle('drawmode',on);
  $('#btnMark').classList.toggle('on',on);
  if(on){ $('#side').classList.remove('open'); selNode=null; renderMap(); }
}
$('#btnMark').onclick=()=>setMark(!markMode);
$('#markCancel').onclick=()=>setMark(false);
vp.addEventListener('mousedown', e=>{
  if(!markMode || e.button!==0) return;
  e.preventDefault(); e.stopPropagation();
  const r=vp.getBoundingClientRect();
  const toC=(cx,cy)=>[(cx-r.left-panX)/zoom,(cy-r.top-panY)/zoom];
  const [x0,y0]=toC(e.clientX,e.clientY);
  const box=document.createElement('div'); box.id='drawbox'; canvas.appendChild(box);
  const mv=ev=>{
    const [x1,y1]=toC(ev.clientX,ev.clientY);
    box.style.cssText=`left:${Math.min(x0,x1)}px;top:${Math.min(y0,y1)}px;width:${Math.abs(x1-x0)}px;height:${Math.abs(y1-y0)}px`;
  };
  const up=async ev=>{
    document.removeEventListener('mousemove',mv); document.removeEventListener('mouseup',up);
    const [x1,y1]=toC(ev.clientX,ev.clientY);
    box.remove(); setMark(false);
    const w=Math.round(Math.abs(x1-x0)), h=Math.round(Math.abs(y1-y0));
    if(w<20||h<14){ toast('Área pequena demais — arraste sobre a caixa inteira'); return; }
    const id=uid();
    S.nodes.push({id, x:Math.round(Math.min(x0,x1)), y:Math.round(Math.min(y0,y1)), w, h,
      l:'Caixa do mapa', txt:'', fill:'#FFFFFF', tipo:'exec', f:S.frentes[0].id, custom:true, card:false, tp:true});
    selNode=id; await persist(); renderMap(); openNode(id);
    toast('Caixa marcada. Dê um nome e ligue a uma frente.');
  };
  document.addEventListener('mousemove',mv); document.addEventListener('mouseup',up);
}, true);

/* --- ETAPA NOVA (cartão branco, não existe no PDF) --- */
$('#btnAddNode').onclick=async()=>{
  const r=vp.getBoundingClientRect();
  const x=Math.round((-panX+r.width/2)/zoom), y=Math.round((-panY+r.height/2)/zoom);
  const id=uid();
  S.nodes.push({id,x,y,w:280,h:110,l:'Nova etapa',txt:'',fill:'#FFFFFF',
    tipo:'exec',f:S.frentes[0].id,custom:true,card:true,tp:false});
  selNode=id; await persist(); renderMap(); openNode(id);
  toast('Cartão criado no centro da tela');
};

function revealNode(id){
  const n=nodeById(id); if(!n) return;
  goPage('mapa');
  requestAnimationFrame(()=>{
    const r=vp.getBoundingClientRect();
    const sideW = r.width>760 ? 410 : 0;
    zoom=0.95;
    panX = (r.width - sideW)/2 - (n.x + n.w/2)*zoom;
    panY = r.height/2 - (n.y + n.h/2)*zoom;
    applyT();
    selectNode(id);
    const el=$(`.hot[data-id="${id}"]`);
    if(el){ el.classList.remove('ping'); void el.offsetWidth; el.classList.add('ping'); }
  });
}

function selectNode(id){
  selNode=id; renderMap();
  const n=nodeById(id); if(!n) return;
  const ex=isExec(n);
  $('#sideTipo').className='tipoTag '+(ex?'exec':'ctx');
  $('#sideTipo').textContent=ex?'Etapa de execução':'Etapa de contexto';
  $('#sideTitle').textContent=n.l;
  $('#sideFrente').textContent=n.f?frenteNome(n.f):'Sem frente definida';
  const ds=demandasOf(id);
  let body=`<div class="boxtext">${esc(n.txt||n.l)}</div>`;
  if(ex){
    body+= ds.length
      ? `<div class="eyebrow" style="margin-bottom:10px">${ds.length} demanda${ds.length>1?'s':''}</div>`+ds.map(taskCard).join('')
      : `<div class="empty">Nenhuma demanda aqui — por isso a etapa aparece como não iniciada.</div>`;
  }else{
    body+=`<div class="empty">Etapa de contexto: existe no fluxo para explicar e situar, mas não recebe demanda e não entra em nenhum cálculo.<br><br>Quando isso virar trabalho, transforme em etapa de execução.</div>`;
  }
  $('#sideBody').innerHTML=body;
  $$('#sideBody .task').forEach(el=>el.onclick=()=>openDemanda(el.dataset.id));
  $('#sideFoot').innerHTML = ex
    ? `<button class="hbtn primary" id="sAdd" style="flex:1">+ Demanda aqui</button>
       <button class="hbtn" id="sTipo">Virar contexto</button>
       <button class="hbtn" id="sEdit">Editar</button>`
    : `<button class="hbtn primary" id="sTipo" style="flex:1">Transformar em etapa de execução</button>
       <button class="hbtn" id="sEdit">Editar</button>`;
  const a=$('#sAdd'); if(a) a.onclick=()=>openDemanda(null,{frente:n.f||S.frentes[0].id,node:n.id});
  $('#sTipo').onclick=async()=>{
    if(ex && demandasOf(n.id).length){ toast('Remova as demandas antes de virar contexto'); return; }
    n.tipo = ex?'ctx':'exec';
    if(n.tipo==='exec' && !n.f) n.f=S.frentes[0].id;
    await persist(); renderAll(); selectNode(n.id);
    toast(n.tipo==='exec'?'Agora é etapa de execução':'Agora é etapa de contexto');
  };
  $('#sEdit').onclick=()=>openNode(n.id);
  $('#side').classList.add('open');
}
$('#sideClose').onclick=()=>{$('#side').classList.remove('open');selNode=null;renderMap();};

let editNode=null;
function openNode(id){
  editNode=id;
  const n=nodeById(id);
  $('#mnTitle').textContent = n.custom ? 'Etapa criada por você' : 'Editar etapa';
  $('#nDel').style.display=n.custom?'block':'none';
  $('#nCardWrap').style.display=n.custom?'flex':'none';
  $('#nPosWrap').style.display=n.custom?'block':'none';
  $('#nFrente').innerHTML='<option value="">— sem frente —</option>'+S.frentes.map(f=>`<option value="${f.id}">${esc(f.nome)}</option>`).join('');
  $('#nLabel').value=n.l; $('#nTxt').value=n.txt||''; $('#nFrente').value=n.f||'';
  $('#nCard').checked=!!n.card; $('#nTipo').value=n.tipo||'exec';
  $('#nX').value=Math.round(n.x); $('#nY').value=Math.round(n.y);
  $('#nW').value=Math.round(n.w); $('#nH').value=Math.round(n.h);
  $('#mNode').classList.add('on');
  setTimeout(()=>$('#nLabel').select(),60);
}
$('#nSave').onclick=async()=>{
  const n=nodeById(editNode);
  const l=$('#nLabel').value.trim(); if(!l){toast('Dê um nome');return;}
  n.l=l; n.txt=$('#nTxt').value.trim(); n.f=$('#nFrente').value;
  const novo=$('#nTipo').value;
  if(novo==='ctx' && demandasOf(n.id).length){ toast('Remova as demandas antes de virar contexto'); return; }
  n.tipo=novo;
  if(n.custom){
    n.card=$('#nCard').checked;
    n.x=+$('#nX').value||n.x; n.y=+$('#nY').value||n.y;
    n.w=Math.max(24,+$('#nW').value||n.w); n.h=Math.max(18,+$('#nH').value||n.h);
  }
  await persist(); closeModals(); renderAll(); selectNode(n.id); toast('Etapa salva');
};
$('#nDel').onclick=async()=>{
  const ds=demandasOf(editNode).length;
  if(!confirm(ds?`Excluir a etapa? ${ds} demanda(s) ficarão sem etapa (não serão apagadas).`:'Excluir esta etapa do mapa?'))return;
  S.demandas.filter(t=>t.node===editNode).forEach(t=>t.node='');
  S.nodes=S.nodes.filter(x=>x.id!==editNode);
  selNode=null; $('#side').classList.remove('open');
  await persist(); closeModals(); renderAll(); toast('Etapa excluída');
};

/* ---------- EQUIPE ---------- */
function renderEquipe(){
  $('#people').innerHTML=S.people.map(p=>{
    const n=S.demandas.filter(t=>t.resp===p).length;
    return `<div class="chip">${esc(p)} <span class="n">${n}</span><button data-p="${esc(p)}">✕</button></div>`;
  }).join('');
  $$('#people .chip button').forEach(b=>b.onclick=async()=>{
    const p=b.dataset.p,n=S.demandas.filter(t=>t.resp===p).length;
    if(n&&!confirm(`${p} tem ${n} demanda(s). Elas passarão para "A definir". Continuar?`))return;
    S.demandas.filter(t=>t.resp===p).forEach(t=>t.resp='A definir');
    if(!S.people.includes('A definir'))S.people.push('A definir');
    S.people=S.people.filter(x=>x!==p);
    await persist();renderAll();
  });
  $('#frentes').innerHTML=S.frentes.map(f=>{
    const n=S.demandas.filter(t=>t.frente===f.id).length;
    return `<div class="chip">${esc(f.nome)} <span class="n">${n}</span><button data-f="${f.id}">✕</button></div>`;
  }).join('');
  $$('#frentes .chip button').forEach(b=>b.onclick=async()=>{
    if(S.frentes.length<2){toast('Mantenha ao menos uma frente');return;}
    const id=b.dataset.f,n=S.demandas.filter(t=>t.frente===id).length;
    if(n&&!confirm(`Essa frente tem ${n} demanda(s). Elas irão para a primeira frente da lista. Continuar?`))return;
    const alt=S.frentes.find(f=>f.id!==id).id;
    S.demandas.filter(t=>t.frente===id).forEach(t=>t.frente=alt);
    S.nodes.filter(nd=>nd.f===id).forEach(nd=>nd.f=alt);
    S.frentes=S.frentes.filter(f=>f.id!==id);
    await persist();renderAll();
  });
}
$('#addPerson').onclick=async()=>{
  const v=$('#newPerson').value.trim(); if(!v)return;
  if(S.people.includes(v)){toast('Já existe');return;}
  S.people.push(v);$('#newPerson').value='';await persist();renderAll();toast('Responsável adicionado');
};
$('#addFrente').onclick=async()=>{
  const v=$('#newFrente').value.trim(); if(!v)return;
  S.frentes.push({id:uid(),nome:v});$('#newFrente').value='';await persist();renderAll();toast('Frente adicionada');
};

/* ---------- DADOS ---------- */
function exportJSON(){
  const b=new Blob([JSON.stringify(S,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(b);
  a.download=`fast-os-${TODAY}.json`;a.click();URL.revokeObjectURL(a.href);toast('JSON exportado');
}
$('#btnExport').onclick=exportJSON; $('#btnExport2').onclick=exportJSON;
$('#btnImport').onclick=()=>$('#fileIn').click(); $('#btnImport2').onclick=()=>$('#fileIn').click();
$('#fileIn').onchange=e=>{
  const f=e.target.files[0]; if(!f)return;
  const r=new FileReader();
  r.onload=async()=>{
    try{const j=JSON.parse(r.result); if(!j.demandas||!j.nodes)throw 0; S=j; await persist(); renderAll(); toast('Dados importados');}
    catch(_){toast('Arquivo inválido');}
    e.target.value='';
  };
  r.readAsText(f);
};
$('#btnReset').onclick=async()=>{
  if(!confirm('Isso apaga tudo e restaura o plano original do mapa. Continuar?'))return;
  S=SEED(); await persist(); renderAll(); toast('Plano original restaurado');
};

/* ---------- SINCRONIZAR ---------- */
$('#btnSync').onclick=async()=>{
  const btn=$('#btnSync');
  if(!window.FB){ toast('Firebase não configurado — dados só neste navegador'); return; }
  btn.disabled=true; const old=btn.textContent; btn.textContent='⟳ Sincronizando...';
  try{
    // 1) puxa o que está na nuvem
    const remote=await window.FB.load();
    const localStr=JSON.stringify(S);
    if(remote && JSON.stringify(remote)!==localStr){
      // há divergência: pergunta quem vence
      const usarNuvem=confirm(
        'A nuvem tem uma versão diferente da que está aqui.\n\n'+
        'OK = trazer a versão da NUVEM para este dispositivo\n'+
        'Cancelar = enviar a versão DESTE dispositivo para a nuvem'
      );
      if(usarNuvem){ S=remote; mem=S; try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){} renderAll(); if(selNode)selectNode(selNode); }
      else { await window.FB.save(S); }
    } else {
      // sem divergência: só garante que a nuvem tem o local
      await window.FB.save(S);
    }
    btn.textContent='✓ Sincronizado';
    setTimeout(()=>{btn.textContent=old;btn.disabled=false;},1400);
  }catch(e){
    console.warn('sync falhou',e);
    toast('Falha ao sincronizar — verifique a conexão');
    btn.textContent=old; btn.disabled=false;
  }
};

function closeModals(){$$('.overlay').forEach(o=>o.classList.remove('on')); if(pendingRemote){const r=pendingRemote;pendingRemote=null;applyRemote(r);}}
$$('.overlay').forEach(o=>{o.onclick=e=>{if(e.target===o||e.target.closest('[data-close]'))closeModals();};});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){ if(markMode) setMark(false); closeModals(); return; }
  if(!e.key.startsWith('Arrow')) return;
  if($('.overlay.on')) return;
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName||'')) return;
  if(!$('#p-mapa').classList.contains('on') || !selNode) return;
  const n=nodeById(selNode); if(!n||!n.custom) return;
  e.preventDefault();
  const st=e.shiftKey?10:1;
  if(e.key==='ArrowLeft') n.x-=st;
  if(e.key==='ArrowRight')n.x+=st;
  if(e.key==='ArrowUp')   n.y-=st;
  if(e.key==='ArrowDown') n.y+=st;
  const el=$(`.hot[data-id="${n.id}"]`);
  if(el){ el.style.left=n.x+'px'; el.style.top=n.y+'px'; }
  clearTimeout(window._nT); window._nT=setTimeout(persist,400);
});
function renderAll(){fillSelects();renderPainel();renderDemandas();renderTempo();renderConteudo();renderMap();renderEquipe();}
(async function(){
  await waitFB();
  S=await load();
  if(!S||!S.demandas||!S.nodes){S=SEED();await persist();}
  initRedeFilter();
  renderAll();
  setTimeout(fit,60);
  if(window.FB) window.FB.watch(applyRemote);
})();
