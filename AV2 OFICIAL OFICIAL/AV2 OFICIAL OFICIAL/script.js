/* ===== Catálogo (edite aqui nomes, preços e descrições) ===== */
const PRODUTOS = [
  { id: 1, nome: 'Árvore de Natal 1,80 m', cat: 'Árvores', preco: 349.9, desc: 'Pinheiro artificial cheio, com suporte de metal.', img: 'https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000https://americanas.vtexassets.com/arquivos/ids/569590/7500242619_1_xlarge.jpg?v=638957000907570000' },
  { id: 2, nome: 'Pisca-pisca LED 100 luzes', cat: 'Iluminação', preco: 39.9, desc: 'Luz quente, 8 efeitos, bivolt.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwpRB_lO0qcOq1zvUEyuIJkaCuHxVfVU7ecQt8A9WOQ&s=10' },
  { id: 3, nome: 'Kit 12 bolas decorativas', cat: 'Enfeites', preco: 59.9, desc: 'Vermelhas e douradas, resistentes a quedas.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-Qeo3FZu1EkmcLMLygsJVcMRcQyMoZyVux0RGOVo8rY6hpekAq-VC6uv&s=10' },
  { id: 4, nome: 'Guirlanda de porta', cat: 'Portas', preco: 89.9, desc: 'Com laço, pinhas e frutinhas vermelhas.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeGEBPqn3wo7lBauWaWm5u1Q5C4t-hPXUFSEBE3qa7A&s=10' },
  { id: 5, nome: 'Papai Noel de pelúcia', cat: 'Pelúcias', preco: 74.9, desc: '40 cm, macio e ótimo para presentear.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIqeIm8IxTbTeIPirFMhSOz3Oom0gXDpN9jGU6hKCTQ&s=10' },
  { id: 6, nome: 'Meia natalina bordada', cat: 'Enfeites', preco: 24.9, desc: 'Para pendurar na lareira ou na porta.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfwtcomZgVY6sciV48lYuc3b4E255CWhc7z4Tfz5bow&s=10' },
  { id: 7, nome: 'Estrela para topo', cat: 'Árvores', preco: 29.9, desc: 'Dourada, com brilho e encaixe universal.', img: 'https://cdn.awsli.com.br/300x300/618/618763/produto/404541365/106532-dr-hzgse5uye8.jpg' },
  { id: 8, nome: 'Presépio completo', cat: 'Presépios', preco: 129.9, desc: '10 peças em resina pintada à mão.', img: 'https://http2.mlstatic.com/D_NQ_NP_739311-MLB98755528956_112025-O.webp' },
  { id: 9, nome: 'Kit de embrulho', cat: 'Embrulhos', preco: 34.9, desc: 'Papel, fitas e 20 etiquetas natalinas.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9T0rmyiP9--3izjtYwth5HqxMzbnptGPClkIOm8XrAQ&s=10' }
];

const FRETE = 19.9;
const FRETE_GRATIS = 200;

const $ = (s) => document.querySelector(s);
const brl = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function criarNeve() {
  if (document.querySelector('.snow-layer')) {
    return;
  }

  const layer = document.createElement('div');
  layer.className = 'snow-layer';
  layer.setAttribute('aria-hidden', 'true');

  const totalFlocos = 120;

  for (let i = 0; i < totalFlocos; i++) {
    const floco = document.createElement('span');
    floco.className = 'snowflake';
    floco.style.setProperty('--left', `${Math.random() * 100}%`);
    floco.style.setProperty('--size', `${(Math.random() * 7 + 4).toFixed(2)}px`);
    floco.style.setProperty('--duration', `${(Math.random() * 9 + 12).toFixed(2)}s`);
    floco.style.setProperty('--delay', `${(Math.random() * -20).toFixed(2)}s`);
    floco.style.setProperty('--drift', `${(Math.random() * 120 - 60).toFixed(2)}px`);
    layer.appendChild(floco);
  }

  document.body.prepend(layer);
}

function criarBotaoAudio() {
  if (document.querySelector('#music-toggle')) {
    return;
  }

  const btn = document.createElement('button');
  btn.id = 'music-toggle';
  btn.type = 'button';
  btn.className = 'music-toggle';
  btn.textContent = '♫ Música';
  btn.setAttribute('aria-label', 'Tocar música de fundo');

  const audio = new Audio('audio.mp3');
  audio.loop = true;
  audio.volume = 0.3;

  let tocando = false;

  btn.addEventListener('click', async () => {
    if (!tocando) {
      try {
        await audio.play();
        tocando = true;
        btn.classList.add('playing');
        btn.textContent = '❚❚ Música';
        btn.setAttribute('aria-label', 'Pausar música de fundo');
      } catch (error) {
        alert('Clique novamente para ativar o áudio.');
      }
      return;
    }

    audio.pause();
    tocando = false;
    btn.classList.remove('playing');
    btn.textContent = '♫ Música';
    btn.setAttribute('aria-label', 'Tocar música de fundo');
  });

  document.body.appendChild(btn);
}

function criarContagemDesconto() {
  const banner = document.querySelector('.aviso');

  if (!banner) {
    return;
  }

  const dataFinal = new Date(Date.now() + (3 * 24 * 60 * 60 * 1000) + (11 * 60 * 60 * 1000) + (42 * 60 * 1000));

  const formatarNumero = (valor) => String(valor).padStart(2, '0');

  const renderizar = () => {
    const diff = dataFinal.getTime() - Date.now();

    if (diff <= 0) {
      banner.innerHTML = '<span class="aviso-texto">Oferta encerrada! Aproveite os preços de temporada.</span>';
      return;
    }

    const totalSegundos = Math.floor(diff / 1000);
    const dias = Math.floor(totalSegundos / 86400);
    const horas = Math.floor((totalSegundos % 86400) / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    banner.innerHTML = `
      <span class="aviso-texto">Oferta relâmpago: 25% OFF em decoração natalina</span>
      <div class="aviso-timer" aria-live="polite">
        <span class="bloco"><strong>${formatarNumero(dias)}</strong><small>dias</small></span>
        <span class="bloco"><strong>${formatarNumero(horas)}</strong><small>h</small></span>
        <span class="bloco"><strong>${formatarNumero(minutos)}</strong><small>m</small></span>
        <span class="bloco"><strong>${formatarNumero(segundos)}</strong><small>s</small></span>
      </div>
    `;
  };

  renderizar();
  setInterval(renderizar, 1000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    criarNeve();
    criarBotaoAudio();
    criarContagemDesconto();
  });
} else {
  criarNeve();
  criarBotaoAudio();
  criarContagemDesconto();
}

/* ===== Carrinho: guardado como {idDoProduto: quantidade} ===== */
function ler() {
  try {
    return JSON.parse(localStorage.getItem('carrinho')) || {};
  } catch (e) {
    return {};
  }
}

function salvar(c) {
  try {
    localStorage.setItem('carrinho', JSON.stringify(c));
  } catch (e) {}

  atualizarBadge();
}

function atualizarBadge() {
  const n = Object.values(ler()).reduce((a, b) => a + b, 0);
  const b = $('#badge');

  if (b) {
    b.textContent = n;
  }
}

function toast(t) {
  let e = $('#toast');

  if (!e) {
    e = document.createElement('div');
    e.id = 'toast';
    e.setAttribute('role', 'status');
    document.body.append(e);
  }

  e.textContent = t;
  e.classList.add('show');
  clearTimeout(e.t);
  e.t = setTimeout(() => e.classList.remove('show'), 1800);
}

function adicionar(id, btn) {
  const c = ler();
  c[id] = (c[id] || 0) + 1;
  salvar(c);
  toast(PRODUTOS.find((p) => p.id === id).nome + ' adicionado ao carrinho');

  const b = $('#badge');

  if (b) {
    b.classList.remove('pulo');
    void b.offsetWidth;
    b.classList.add('pulo');
  }

  if (btn) {
    btn.textContent = 'Adicionado';
    btn.classList.add('ok');
    clearTimeout(btn.t);
    btn.t = setTimeout(() => {
      btn.textContent = 'Adicionar ao carrinho';
      btn.classList.remove('ok');
    }, 1400);
  }
}

function alterar(id, d) {
  const c = ler();
  c[id] = (c[id] || 0) + d;

  if (c[id] <= 0) {
    delete c[id];
  }

  salvar(c);
  renderCarrinho();
}

function remover(id) {
  const c = ler();
  delete c[id];
  salvar(c);
  renderCarrinho();
}

function esvaziar() {
  salvar({});
  renderCarrinho();
}

function finalizar() {
  location.href = 'pagamento.html';
}

function copiarPix() {
  const i = $('#pix');
  i.select();

  try {
    navigator.clipboard.writeText(i.value);
  } catch (e) {
    document.execCommand('copy');
  }

  toast('Código Pix copiado');
}

function renderPagamento() {
  const box = $('#pagamento');

  if (!box) {
    return;
  }

  const c = ler();
  const itens = PRODUTOS.filter((p) => c[p.id]);

  if (!itens.length) {
    box.innerHTML = '<div class="vazio"><p>Não há itens para pagar.</p><a class="btn" href="produtos.html">Escolher produtos</a></div>';
    return;
  }

  const sub = itens.reduce((s, p) => s + p.preco * c[p.id], 0);
  const frete = sub >= FRETE_GRATIS ? 0 : FRETE;
  const total = sub + frete;

  box.innerHTML = `<form id="form-pag"><h2>Forma de pagamento</h2>
    <div class="metodos">
      <label><input type="radio" name="metodo" value="pix" checked>Pix</label>
      <label><input type="radio" name="metodo" value="cartao">Cartão</label>
      <label><input type="radio" name="metodo" value="boleto">Boleto</label>
    </div>
    <fieldset class="painel" id="p-pix"><label for="pix">Código Pix (copia e cola)</label>
      <input id="pix" readonly value="CODIGO-PIX-DE-EXEMPLO"><button type="button" class="btn" onclick="copiarPix()">Copiar código</button></fieldset>
    <fieldset class="painel" id="p-cartao" hidden disabled>
      <label for="cnum">Número do cartão</label><input id="cnum" inputmode="numeric" autocomplete="cc-number" maxlength="19" required>
      <label for="cnome">Nome impresso no cartão</label><input id="cnome" autocomplete="cc-name" required>
      <div class="dupla">
        <div><label for="cval">Validade (MM/AA)</label><input id="cval" autocomplete="cc-exp" maxlength="5" placeholder="12/28" pattern="(0[1-9]|1[0-2])/\\d{2}" required></div>
        <div><label for="ccvv">CVV</label><input id="ccvv" inputmode="numeric" autocomplete="cc-csc" maxlength="4" pattern="\\d{3,4}" required></div>
      </div>
      <label for="parc">Parcelas</label>
      <select id="parc">${[1, 2, 3].map((n) => `<option>${n}x de ${brl(total / n)} sem juros</option>`).join('')}</select></fieldset>
    <fieldset class="painel" id="p-boleto" hidden disabled><p>O boleto é gerado ao confirmar e vence em 3 dias úteis. O pedido é liberado após a compensação.</p></fieldset>
    <button class="btn red" type="submit">Confirmar pagamento de ${brl(total)}</button></form>
    <aside class="resumo"><h3>Seu pedido</h3>
      <ul>${itens.map((p) => `<li><span>${c[p.id]}× ${p.nome}</span><span>${brl(p.preco * c[p.id])}</span></li>`).join('')}</ul>
      <p><span>Frete</span><span>${frete ? brl(frete) : 'Grátis'}</span></p>
      <p class="total"><span>Total</span><span>${brl(total)}</span></p>
      <a class="link" href="carrinho.html">Voltar ao carrinho</a></aside>`;

  const metodo = () => document.querySelector('input[name=metodo]:checked').value;

  box.querySelectorAll('input[name=metodo]').forEach((r) => {
    r.addEventListener('change', () => {
      ['pix', 'cartao', 'boleto'].forEach((k) => {
        const f = $('#p-' + k);
        f.hidden = f.disabled = (k !== metodo());
      });
    });
  });

  const mascara = (el, f) => {
    el.addEventListener('input', () => {
      el.value = f(el.value.replace(/\D/g, ''));
    });
  };

  mascara($('#cnum'), (v) => v.slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 '));
  mascara($('#cval'), (v) => v.slice(0, 4).replace(/^(\d{2})(?=\d)/, '$1/'));
  mascara($('#ccvv'), (v) => v.slice(0, 4));

  $('#form-pag').addEventListener('submit', (e) => {
    e.preventDefault();

    const msgs = {
      pix: 'Assim que o Pix for identificado, liberamos o seu pedido.',
      cartao: 'Pagamento no cartão registrado.',
      boleto: 'Boleto gerado, com vencimento em 3 dias úteis.'
    };

    const n = 'NM' + Date.now().toString().slice(-6);
    const t = msgs[metodo()];

    salvar({});
    box.innerHTML = `<div class="vazio"><p>Pedido ${n} recebido!</p><p class="peq">${t}</p><a class="btn" href="index.html">Voltar ao início</a></div>`;
    scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===== Renderização ===== */
function montarFiltrosProdutos() {
  const cont = $('#filtros-produtos');

  if (!cont) {
    return;
  }

  const categorias = ['all', ...new Set(PRODUTOS.map((p) => p.cat))];

  cont.innerHTML = categorias.map((cat) => `
    <button
      type="button"
      class="filtro-btn ${cat === 'all' ? 'active' : ''}"
      data-categoria="${cat}"
    >
      ${cat === 'all' ? 'Todos' : cat}
    </button>
  `).join('');

  cont.querySelectorAll('.filtro-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      cont.querySelectorAll('.filtro-btn').forEach((b) => b.classList.toggle('active', b === btn));
      renderProdutos();
    });
  });
}

function renderProdutos() {
  const box = $('#lista-produtos');

  if (!box) {
    return;
  }

  const categoriaAtiva = $('#filtros-produtos .filtro-btn.active')?.dataset.categoria || 'all';
  const lista = categoriaAtiva === 'all' ? PRODUTOS : PRODUTOS.filter((p) => p.cat === categoriaAtiva);
  const lim = +box.dataset.limite || lista.length;

  if (!lista.length) {
    box.innerHTML = '<div class="vazio"><p>Nenhum produto encontrado nesta categoria.</p></div>';
    return;
  }

  box.innerHTML = lista.slice(0, lim)
    .map((p) => `
      <article class="card">
        <div class="thumb">${p.img ? `<img src="${p.img}" alt="${p.nome}" loading="lazy">` : p.cat}</div>
        <h3>${p.nome}</h3>
        <p>${p.desc}</p>
        <div class="price">${brl(p.preco)}</div>
        <button class="btn" onclick="adicionar(${p.id}, this)">Adicionar ao carrinho</button>
      </article>
    `)
    .join('');
}

function renderCarrinho() {
  const box = $('#carrinho');

  if (!box) {
    return;
  }

  const c = ler();
  const itens = PRODUTOS.filter((p) => c[p.id]);

  if (!itens.length) {
    box.innerHTML = '<div class="vazio"><p>Seu carrinho está vazio.</p><a class="btn" href="produtos.html">Escolher produtos</a></div>';
    return;
  }

  const sub = itens.reduce((s, p) => s + p.preco * c[p.id], 0);
  const frete = sub >= FRETE_GRATIS ? 0 : FRETE;
  const pct = Math.min(100, Math.round((sub / FRETE_GRATIS) * 100));

  box.innerHTML = `<div>
    ${itens.map((p) => `
      <div class="linha">
        <div class="thumb-sm"></div>
        <div class="nome">
          <strong>${p.nome}</strong>
          <small>${brl(p.preco)} cada</small>
        </div>
        <div class="qtd">
          <button onclick="alterar(${p.id}, -1)" aria-label="Diminuir quantidade">−</button>
          <span>${c[p.id]}</span>
          <button onclick="alterar(${p.id}, 1)" aria-label="Aumentar quantidade">+</button>
        </div>
        <strong class="sub">${brl(p.preco * c[p.id])}</strong>
        <button class="x" onclick="remover(${p.id})" aria-label="Remover ${p.nome}">×</button>
      </div>
    `).join('')}
  </div>
  <aside class="resumo">
    <h3>Resumo do pedido</h3>
    <p><span>Subtotal</span><span>${brl(sub)}</span></p>
    <p><span>Frete</span><span>${frete ? brl(frete) : 'Grátis'}</span></p>
    <p class="total"><span>Total</span><span>${brl(sub + frete)}</span></p>
    <div
      class="barra"
      role="progressbar"
      aria-label="Progresso para o frete grátis"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="${pct}"
    >
      <i style="width:${pct}%"></i>
    </div>
    <small>
      ${frete ? 'Faltam ' + brl(FRETE_GRATIS - sub) + ' para frete grátis' : 'Você ganhou frete grátis!'}
    </small>
    <button class="btn red" onclick="finalizar()">Ir para o pagamento</button>
    <button class="link" onclick="esvaziar()">Esvaziar carrinho</button>
  </aside>`;
}

/* ===== Extras ===== */
const pagina = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach((a) => {
  if (a.getAttribute('href') === pagina) {
    a.classList.add('on');
    a.setAttribute('aria-current', 'page');
  }
});

const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');

if (slides.length) {
  let slideAtual = 0;
  let temporizador;

  function mostrarSlide(index) {
    slideAtual = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === slideAtual);
    });

    dots.forEach((dot, i) => {
      const ativo = i === slideAtual;
      dot.classList.toggle('active', ativo);
      dot.setAttribute('aria-current', ativo ? 'true' : 'false');
    });
  }

  function reiniciarAutoSlide() {
    clearInterval(temporizador);
    temporizador = setInterval(() => mostrarSlide(slideAtual + 1), 4500);
  }

  prevBtn?.addEventListener('click', () => {
    mostrarSlide(slideAtual - 1);
    reiniciarAutoSlide();
  });

  nextBtn?.addEventListener('click', () => {
    mostrarSlide(slideAtual + 1);
    reiniciarAutoSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      mostrarSlide(i);
      reiniciarAutoSlide();
    });
  });

  const slider = document.querySelector('.slideshow');
  slider?.addEventListener('mouseenter', () => clearInterval(temporizador));
  slider?.addEventListener('mouseleave', reiniciarAutoSlide);

  mostrarSlide(0);
  reiniciarAutoSlide();
}

const cab = $('header');
const rolar = () => cab.classList.toggle('rolou', scrollY > 8);
addEventListener('scroll', rolar, { passive: true });
rolar();

const form = $('#form-contato');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    $('#msg-ok').hidden = false;
  });
}

montarFiltrosProdutos();
renderProdutos();
renderCarrinho();
renderPagamento();
atualizarBadge();
