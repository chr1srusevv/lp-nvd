/* BrainTrade landing — light motion only (no libraries).
   Everything is progressive enhancement: without JS (or with "reduce motion") the page is fully visible and static.
   The "js" class on <html> is set by the tiny inline snippet in <head>. */
(function () {
  'use strict';

  var root = document.documentElement;
  if (!root.classList.contains('js')) return;

  /* ---------- 1. Reveal on scroll ---------- */
  // selector -> [base delay ms, step between siblings ms]
  var REVEAL = {
    '.lead': [650, 0],
    '.checks li': [780, 90],
    '.form': [450, 0],
    '.section-head': [0, 0],
    '.timeline__item': [100, 140],
    '.terminal': [150, 0],
    '.benefits__feature': [0, 0],
    '.benefit': [100, 110],
    '.step': [100, 160],
    '.steps__cta': [350, 0],
    '.about__content': [0, 0],
    '.about__media': [150, 0],
    '.about__note': [250, 0],
    '.cta__panel': [0, 0],
    '.site-footer .container': [0, 0]
  };
  // observed only (they animate through their own CSS)
  var WATCH = ['.steps__list'];

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.classList.add('is-in');
      if (el.classList.contains('count')) countUp(el);
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

  Object.keys(REVEAL).forEach(function (sel) {
    var base = REVEAL[sel][0], step = REVEAL[sel][1];
    var seen = new Map(); // index within the same parent
    document.querySelectorAll(sel).forEach(function (el) {
      var i = seen.get(el.parentNode) || 0;
      seen.set(el.parentNode, i + 1);
      el.classList.add('reveal');
      el.style.setProperty('--d', (base + i * step) + 'ms');
      io.observe(el);
    });
  });
  WATCH.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { io.observe(el); });
  });

  /* ---------- 3. Count-up numbers ---------- */
  document.querySelectorAll('.stat__value').forEach(function (el) {
    var m = el.textContent.match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/);
    if (!m) return;
    el._count = { pre: m[1], num: m[2], post: m[3], final: el.textContent };
    el.style.minWidth = el.getBoundingClientRect().width + 'px';
    el.textContent = m[1] + '0' + m[3];
    el.classList.add('count');
    io.observe(el);
  });

  function countUp(el) {
    var c = el._count;
    var comma = c.num.indexOf(',') > -1;
    var dec = (c.num.split(/[.,]/)[1] || '').length;
    var target = parseFloat(c.num.replace(',', '.'));
    var start = null, dur = 1300;
    function frame(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / dur, 1);
      var v = target * (1 - Math.pow(1 - p, 3));
      var s = v.toFixed(dec);
      if (comma) s = s.replace('.', ',');
      el.textContent = p < 1 ? c.pre + s + c.post : c.final;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ---------- 4. Hero background follows the pointer (desktop only) ---------- */
  var hero = document.querySelector('.hero');
  if (hero && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var queued = false, px = 0, py = 0;
    var apply = function () {
      hero.style.setProperty('--px', px.toFixed(3));
      hero.style.setProperty('--py', py.toFixed(3));
      queued = false;
    };
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      px = (e.clientX - r.left) / r.width - 0.5;
      py = (e.clientY - r.top) / r.height - 0.5;
      if (!queued) { queued = true; requestAnimationFrame(apply); }
    });
    hero.addEventListener('pointerleave', function () { px = 0; py = 0; requestAnimationFrame(apply); });
  }

  /* ---------- 5. Graphics card drifts slightly while scrolling ---------- */
  var feature = document.querySelector('.benefits__feature');
  if (feature) {
    var ticking = false;
    var drift = function () {
      var r = feature.getBoundingClientRect();
      var p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight; // ~ -1..1
      p = Math.max(-1, Math.min(1, p));
      feature.style.setProperty('--gy', (p * -26).toFixed(1));
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(drift); }
    }, { passive: true });
    drift();
  }
})();

/* ---------- 6. Mobile sticky button (works even with reduced motion): appears once the form has scrolled up out of view ---------- */
(function () {
  'use strict';
  if (!('IntersectionObserver' in window)) return;
  var sticky = document.querySelector('.sticky-cta');
  var form = document.getElementById('lead-form');
  if (!sticky || !form) return;
  new IntersectionObserver(function (entries) {
    var e = entries[0];
    var passed = !e.isIntersecting && e.boundingClientRect.bottom < 0;
    sticky.classList.toggle('is-on', passed);
    sticky.setAttribute('aria-hidden', passed ? 'false' : 'true');
    sticky.querySelector('a').tabIndex = passed ? 0 : -1;
  }).observe(form);
})();
