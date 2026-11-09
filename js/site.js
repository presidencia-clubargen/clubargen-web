(function(){
var C = window.CLUB, page = document.body.dataset.page || '';
var NAV = [['index.html','Inicio','inicio'],['partidos.html','Partidos','partidos'],['equipos.html','Equipos','equipos'],['club.html','El Club','club'],['socios.html','Socios','socios'],['index.html#tienda','Tienda','tienda']];
function el(h){var d=document.createElement('div');d.innerHTML=h.trim();return d.firstChild}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

/* header */
var navH = NAV.map(function(n){return '<a href="'+n[0]+'"'+(n[2]===page?' class="on"':'')+'>'+n[1]+'</a>'}).join('');
document.body.insertBefore(el('<div class="util"><div class="c"><span>Club Social y Deportivo Argentino · desde 2019 · Santiago, Chile</span><a href="'+C.aviso.link+'"><b>'+esc(C.aviso.texto)+'</b></a></div></div>'), document.body.firstChild);
var hdr = el('<header class="top"><div class="c"><a class="brand" href="index.html"><img src="logos/escudo.png" alt="Escudo del Club"><span>Argentino<small>Social y Deportivo</small></span></a><nav class="main">'+navH+'</nav><a class="cta" href="sumate.html">Sumate</a><button class="burger" aria-label="Menú"><span></span></button></div></header>');
document.body.insertBefore(hdr, document.body.children[1]);
var dr = el('<div class="drawer">'+navH+'<a class="cta2" href="sumate.html">Sumate</a></div>');
document.body.insertBefore(dr, hdr.nextSibling);
hdr.querySelector('.burger').onclick=function(){dr.classList.toggle('open')};

/* footer */
document.body.appendChild(el('<footer class="foot"><div class="c"><div><img src="logos/escudo.png" alt=""><p style="margin-top:14px;max-width:290px;line-height:1.7">Club Social y Deportivo Argentino. Familia, pasión y comunidad argentina en Chile desde 2019.</p></div><div><h4>Club</h4><a href="club.html">Historia</a><a href="club.html#comision">Comisión</a><a href="socios.html">Socios</a></div><div><h4>Fútbol</h4><a href="partidos.html">Partidos</a><a href="equipos.html">Equipos</a><a href="'+C.liga+'" target="_blank" rel="noopener">Liga Chicureo Norte</a></div><div><h4>Contacto</h4><a href="'+C.instagram+'" target="_blank" rel="noopener">Instagram @clubargen</a><a href="'+C.whatsapp+'" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:'+C.mail+'">'+C.mail+'</a></div></div><div class="copy"><span>© '+new Date().getFullYear()+' Club Social y Deportivo Argentino</span><span>Presentes para el futuro</span></div></footer>'));

/* helpers partidos */
function isMe(n){return n==='Argentino'}
function result(m){ if(m.post) return ['P','d']; var me=isMe(m.local)?m.gl:m.gv, ot=isMe(m.local)?m.gv:m.gl; return me>ot?['G','w']:me<ot?['P','l']:['E','d'] }
function lastPlayed(cat){var a=C.partidos[cat].filter(function(m){return !m.post});return a[a.length-1]}

/* matchday (home) */
var md = document.getElementById('matchday');
if(md){
  var cats=Object.keys(C.equipos), cur=cats[0];
  function draw(){
    md.querySelectorAll('.mtabs button').forEach(function(b){b.classList.toggle('on',b.dataset.c===cur)});
    var p=C.proxima, pm=p.partidos[cur]||{}, has=p.fecha&&pm.rival;
    var nx='<div class="mk">Próximo partido · Fecha '+p.numero+'</div><div class="teams"><div class="t"><img src="logos/escudo.png" alt="">Argentino</div><div class="vs">VS</div><div class="t"><div class="rival">'+(has?esc(pm.rival.charAt(0)):'?')+'</div>'+(has?esc(pm.rival):'A confirmar')+'</div></div><div class="meta">'+(has?esc(pm.hora)+' · '+esc(pm.cancha):'Fixture por confirmar en la liga')+'</div>';
    var cd='<div class="mk">Falta</div>';
    if(has){cd+='<div class="big" id="cd">—</div><div class="meta">Vení a alentar: el mate lo cebamos nosotros.</div>'}
    else{cd+='<div class="big">Sábado</div><div class="meta">Apenas la liga publique la fecha, la cargamos acá. Vení a alentar: el mate lo cebamos nosotros.</div>'}
    var lp=lastPlayed(cur), r=result(lp);
    var rs='<div class="mk">Último resultado</div>'+cats.map(function(c){var m=lastPlayed(c),x=result(m);return '<div class="res"><span><small>'+c+' · F'+m.f+'</small>'+esc(m.local)+' vs '+esc(m.visita)+'</span><b class="'+x[1]+'">'+m.gl+'-'+m.gv+'</b></div>'}).join('');
    md.querySelector('.mgrid').innerHTML='<div class="mbox">'+nx+'</div><div class="mbox">'+cd+'</div><div class="mbox">'+rs+'</div>';
    if(has) tick();
  }
  function tick(){var t=new Date(C.proxima.fecha)-new Date(),e=document.getElementById('cd');if(!e)return;if(t<0){e.textContent='¡Hoy!';return}var d=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),m=Math.floor(t%36e5/6e4);e.textContent=d+'d '+h+'h '+m+'m'}
  md.querySelector('.mtabs').innerHTML=cats.map(function(c){return '<button data-c="'+c+'">'+c+'</button>'}).join('')+'<span class="lbl">Liga Chicureo Norte · Clausura</span>';
  md.querySelectorAll('.mtabs button').forEach(function(b){b.onclick=function(){cur=b.dataset.c;draw()}});
  draw(); setInterval(tick,30000);
}

/* noticias */
var nw=document.getElementById('news');
if(nw){nw.innerHTML=C.noticias.map(function(n,i){return '<a class="card'+(i===0?' lead':'')+' reveal" href="'+n.link+'" target="_blank" rel="noopener"><div class="im" style="background-image:url('+n.img+')"></div><div class="tx"><div class="k">'+esc(n.k)+'</div><h3>'+esc(n.t)+'</h3>'+(n.p?'<p>'+esc(n.p)+'</p>':'')+'</div></a>'}).join('')}

/* partidos page */
var fx=document.getElementById('fixture');
if(fx){
  var cats2=Object.keys(C.partidos), c2=location.hash?decodeURIComponent(location.hash.slice(1)):cats2[0]; if(cats2.indexOf(c2)<0)c2=cats2[0];
  var tabs=document.getElementById('ptabs');
  tabs.innerHTML=cats2.map(function(c){return '<button data-c="'+c+'">'+c+'</button>'}).join('');
  function drawFx(){
    tabs.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b.dataset.c===c2)});
    var rows=C.partidos[c2].slice().reverse().map(function(m){var x=result(m);
      return '<div class="fxr"><div class="f">Fecha '+m.f+'</div><div class="h'+(isMe(m.local)?' me':'')+'">'+esc(m.local)+'</div><div class="sc'+(m.post?' p':'')+'">'+(m.post?'POSTERGADO':m.gl+' - '+m.gv)+'</div><div class="a'+(isMe(m.visita)?' me':'')+'">'+esc(m.visita)+'</div><div class="rs '+x[1]+'">'+(m.post?'A reprogramar':{G:'Victoria',P:'Derrota',E:'Empate'}[x[0]])+'</div></div>'}).join('');
    fx.innerHTML=rows;
    var s={G:0,E:0,P:0,gf:0,gc:0};C.partidos[c2].forEach(function(m){if(m.post)return;var x=result(m)[0];s[x]++;var me=isMe(m.local)?m.gl:m.gv,ot=isMe(m.local)?m.gv:m.gl;s.gf+=me;s.gc+=ot});
    document.getElementById('stats').innerHTML='<b>'+s.G+'</b> ganados · <b>'+s.E+'</b> empatados · <b>'+s.P+'</b> perdidos · <b>'+s.gf+'</b> goles a favor · <b>'+s.gc+'</b> en contra';
    document.getElementById('modal').textContent=C.equipos[c2]?C.equipos[c2].modalidad:'';
  }
  tabs.querySelectorAll('button').forEach(function(b){b.onclick=function(){c2=b.dataset.c;history.replaceState(null,'','#'+encodeURIComponent(c2));drawFx()}});
  drawFx();
}

/* equipos page */
var eq=document.getElementById('squads');
if(eq){eq.innerHTML=Object.keys(C.equipos).map(function(c,i){var e=C.equipos[c];
  return '<div class="cat-h" id="'+c.replace(/\s/g,'')+'"><h2>'+c+'</h2><span>'+e.modalidad+'</span><a href="partidos.html#'+encodeURIComponent(c)+'">Ver partidos</a></div><p class="note" style="margin:-8px 0 16px;font-size:15px">Capitanes: <b>'+e.capitanes.join(', ')+'</b></p><div class="squad">'+e.plantel.map(function(p){return '<div class="pl reveal">'+esc(p)+(e.capitanes.some(function(k){return p.indexOf(k.split(' ')[0])===0&&p.indexOf(k.split(' ').slice(-1)[0])>0})?'<i>C</i>':'')+'</div>'}).join('')+'</div>'}).join('')}

/* sumate form */
var f=document.getElementById('sumate');
if(f){
  f.querySelectorAll('.chips').forEach(function(g){g.querySelectorAll('.chip').forEach(function(ch){ch.onclick=function(){if(g.dataset.multi){ch.classList.toggle('on')}else{g.querySelectorAll('.chip').forEach(function(x){x.classList.remove('on')});ch.classList.add('on')}}})});
  f.onsubmit=function(ev){ev.preventDefault();
    var v={};new FormData(f).forEach(function(val,k){v[k]=val});
    f.querySelectorAll('.chips').forEach(function(g){v[g.dataset.name]=[].map.call(g.querySelectorAll('.chip.on'),function(x){return x.textContent}).join(', ')});
    if(!v.nombre||!v.contacto){document.getElementById('ferr').textContent='Completá tu nombre y cómo te contactamos.';return}
    if(C.sumateEndpoint){fetch(C.sumateEndpoint,{method:'POST',mode:'no-cors',body:JSON.stringify(v)}).then(function(){f.style.display='none';document.getElementById('fok').style.display='block'})}
    else{var txt='Hola! Quiero sumarme al Club.%0A%0A'+Object.keys(v).filter(function(k){return v[k]}).map(function(k){return '*'+k+':* '+encodeURIComponent(v[k])}).join('%0A');window.open(C.whatsapp+'?text='+txt,'_blank');f.style.display='none';document.getElementById('fok').style.display='block'}
  };
}

/* reveal */
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
document.querySelectorAll('.reveal').forEach(function(x){io?io.observe(x):x.classList.add('in')});

/* hero slider */
var hs=document.querySelector('.hero[data-slides]');
if(hs){var sl=JSON.parse(hs.dataset.slides),i=0,dots=hs.querySelector('.dots');
  function show(n){i=n;var s=sl[i];hs.style.backgroundImage='url('+s.img+')';hs.querySelector('.tag').textContent=s.tag;hs.querySelector('h1').innerHTML=s.h;hs.querySelector('p').textContent=s.p;var a=hs.querySelectorAll('.btns a');a[0].href=s.link;a[0].textContent=s.btn;dots.querySelectorAll('button').forEach(function(d,j){d.classList.toggle('on',j===i)})}
  dots.innerHTML=sl.map(function(_,j){return '<button aria-label="Slide '+(j+1)+'"></button>'}).join('');
  dots.querySelectorAll('button').forEach(function(d,j){d.onclick=function(){show(j)}});
  show(0); setInterval(function(){show((i+1)%sl.length)},7000);
}
})();
