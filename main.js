/**
 * KRATE — Main Script
 * main.js
 *
 * Depends on:  data/games.js  (must load before this file)
 */

/* ══════════════════════════════════════════════════════════
   1. CUSTOM CURSOR
   ══════════════════════════════════════════════════════════ */
const cursorDot  = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

(function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();


/* ══════════════════════════════════════════════════════════
   2. PARALLAX — scroll & mouse
   ══════════════════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const sy = window.scrollY;

  // data-speed elements (hero layers)
  document.querySelectorAll('[data-speed]').forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0.3;
    el.style.transform = `translateY(${sy * speed}px)`;
  });

  // generic parallax layers
  document.querySelectorAll('.parallax-layer').forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0.1;
    el.style.transform = `translateY(${sy * speed}px)`;
  });
});

// Mouse-driven parallax on the GTA VI hero image
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  const gtaBg = document.getElementById('gtaBg');
  if (gtaBg) {
    gtaBg.style.transform = `translateX(${x * 0.5}px) translateY(${y * 0.3}px) scale(1.05)`;
  }
});


/* ══════════════════════════════════════════════════════════
   3. FLOATING PARTICLES
   ══════════════════════════════════════════════════════════ */
(function spawnParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#00f5ff', '#ff006e', '#ffd60a', '#39ff14'];

  for (let i = 0; i < 25; i++) {
    const p    = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    const col  = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = [
      `width:${size}px`, `height:${size}px`,
      `left:${Math.random() * 100}%`,
      `--dx:${(Math.random() - 0.5) * 100}px`,
      `animation-duration:${Math.random() * 15 + 10}s`,
      `animation-delay:-${Math.random() * 15}s`,
      `background:${col}`,
      `box-shadow:0 0 ${size * 3}px ${col}`
    ].join(';');
    container.appendChild(p);
  }
})();


/* ══════════════════════════════════════════════════════════
   4. SCROLL REVEAL  (IntersectionObserver)
   ══════════════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ══════════════════════════════════════════════════════════
   5. ANIMATED STAT COUNTERS
   ══════════════════════════════════════════════════════════ */
function animateCounter(el, target) {
  let current = 0;
  const step  = target / 60;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }

    if      (target === 45)    el.textContent = Math.floor(current) + 'M+';
    else if (target === 12847) el.textContent = Math.floor(current).toLocaleString() + '+';
    else                       el.textContent = Math.floor(current);
  }, 16);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    animateCounter(e.target, parseInt(e.target.dataset.target));
    statObserver.unobserve(e.target);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-target]').forEach(n => statObserver.observe(n));


/* ══════════════════════════════════════════════════════════
   6. LIVE COUNTDOWN TIMER
   ══════════════════════════════════════════════════════════ */
function updateCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const now      = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1_000);
  el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
setInterval(updateCountdown, 1000);
updateCountdown();


/* ══════════════════════════════════════════════════════════
   7. CART
   ══════════════════════════════════════════════════════════ */
let cartCount = 0;
const cartCountEl  = document.getElementById('cartCount');
const cartNotif    = document.getElementById('cartNotif');
const cartNotifTxt = document.getElementById('cartNotifText');
let   notifTimeout;

function addToCart(gameName) {
  cartCount++;
  cartCountEl.textContent     = cartCount;
  cartCountEl.style.transform = 'scale(1.6)';
  setTimeout(() => (cartCountEl.style.transform = 'scale(1)'), 200);

  clearTimeout(notifTimeout);
  cartNotifTxt.textContent = gameName.toUpperCase() + ' ADDED';
  cartNotif.classList.add('show');
  notifTimeout = setTimeout(() => cartNotif.classList.remove('show'), 3000);
}

// Expose globally so inline onclick="" attributes work
window.addToCart = addToCart;


/* ══════════════════════════════════════════════════════════
   8. 3-D CARD TILT
   ══════════════════════════════════════════════════════════ */
function applyTilt(cards) {
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-10px)`;
    });
    card.addEventListener('mouseleave', () => (card.style.transform = ''));
  });
}

applyTilt(document.querySelectorAll('.game-card, .deal-card, .release-card'));


/* ══════════════════════════════════════════════════════════
   9. LOGO GLITCH
   ══════════════════════════════════════════════════════════ */
function triggerGlitch() {
  const logos = document.querySelectorAll('.logo');
  const seq   = 'KR4T3 KRATE ΚR∧T∃ KR-ATE KRATE';
  logos.forEach(logo => {
    let i = 0;
    const id = setInterval(() => {
      logo.style.letterSpacing = Math.random() > 0.5 ? '8px' : '6px';
      logo.style.opacity       = Math.random() > 0.8  ? '0.5' : '1';
      if (i++ > seq.length - 5) {
        clearInterval(id);
        logo.style.letterSpacing = '6px';
        logo.style.opacity       = '1';
      }
    }, 40);
  });
}
setInterval(triggerGlitch, 5000);
triggerGlitch();


/* ══════════════════════════════════════════════════════════
   10. LIBRARY — INFINITE SCROLL
   ══════════════════════════════════════════════════════════ */
const PAGE_SIZE = 12;

let currentPage  = 0;
let isLoading    = false;
let allLoaded    = false;
let activeGenre  = 'all';

/** Returns the currently-filtered game list */
function getFilteredGames() {
  return activeGenre === 'all'
    ? GAME_DB
    : GAME_DB.filter(g => g.genre === activeGenre);
}

/** Renders a single library card's HTML */
function buildLibCard(game, delay) {
  const platforms  = (game.platforms || [])
    .map(p => `<div class="lib-dot ${p}"></div>`)
    .join('');

  const badgeLabel = { sale: 'SALE', free: 'FREE', hot: 'HOT' };
  const badgeHTML  = game.badge
    ? `<div class="lib-badge-tiny ${game.badge}">${badgeLabel[game.badge] || ''}</div>`
    : '';

  const priceColor = game.price === '$Free' ? 'var(--neon-green)' : 'var(--neon-gold)';
  const safeTitle  = game.title.replace(/'/g, "\\'");

  return `
    <div class="lib-card" style="animation-delay:${delay}ms;"
         onclick="addToCart('${safeTitle}')">
      <div class="lib-cover">
        <img src="images/${game.img}" alt="${game.title}" loading="lazy"
             onerror="this.style.display='none'">
        <div class="lib-cover-fallback" style="background:${game.fb}">
          <div class="fb-icon">🎮</div>
          <div class="fb-label">${game.title}</div>
        </div>
      </div>
      <div class="lib-card-overlay">
        <button class="lib-quick-buy">+ ADD TO CART</button>
        <div class="lib-score">Score: ${game.score}</div>
      </div>
      <div class="lib-card-info">
        <div class="lib-title">${game.title}</div>
        <div class="lib-meta-row">
          <div class="lib-price" style="color:${priceColor}">${game.price}</div>
          <div style="display:flex;align-items:center;gap:6px;">
            ${badgeHTML}
            <div class="lib-platform-dots">${platforms}</div>
          </div>
        </div>
      </div>
    </div>`;
}

/** Loads the next page of game cards into the grid */
function loadNextPage() {
  const games = getFilteredGames();
  const start = currentPage * PAGE_SIZE;
  const slice = games.slice(start, start + PAGE_SIZE);

  if (slice.length === 0) { endLibrary(); return; }

  isLoading = true;
  const loader = document.getElementById('libLoader');
  loader.style.display = 'flex';

  // Simulate async fetch delay (replace with real API call if needed)
  setTimeout(() => {
    const grid = document.getElementById('libGrid');
    slice.forEach((game, i) => {
      grid.insertAdjacentHTML('beforeend', buildLibCard(game, i * 60));
    });

    // Apply 3-D tilt to newly inserted cards only
    const fresh = grid.querySelectorAll('.lib-card:not([data-tilted])');
    applyTilt(fresh);
    fresh.forEach(c => c.setAttribute('data-tilted', '1'));

    currentPage++;
    loader.style.display = 'none';
    isLoading = false;

    if (currentPage * PAGE_SIZE >= games.length) endLibrary();
  }, 600);
}

/** Called when all pages have been rendered */
function endLibrary() {
  allLoaded = true;
  document.getElementById('libLoader').style.display = 'none';
  document.getElementById('libEnd').style.display    = 'block';
}

/** Clears the grid and starts fresh (used when filters change) */
function resetLibrary() {
  currentPage = 0;
  allLoaded   = false;
  isLoading   = false;
  document.getElementById('libGrid').innerHTML    = '';
  document.getElementById('libEnd').style.display = 'none';
  loadNextPage();
}

// Sentinel-based infinite scroll trigger
const sentinel = document.getElementById('lib-sentinel');
new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !isLoading && !allLoaded) loadNextPage();
}, { rootMargin: '200px' }).observe(sentinel);

// Genre filter tabs
document.querySelectorAll('.lib-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lib-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeGenre = btn.dataset.genre;
    resetLibrary();
  });
});

// Kick off the initial load
loadNextPage();
