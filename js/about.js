/* About page interactions. Defensive: safe if any element is missing. */
(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('siteNav');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile navigation
  function setMenu(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        setMenu(false);
        toggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }

  // Sticky header shadow
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Counter animation
  function runCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    if (reduceMotion) { el.textContent = target; return; }
    var start = null, dur = 1200;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(target * p);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  var counters = document.querySelectorAll('.count[data-count]');

  if (!('IntersectionObserver' in window) || reduceMotion) {
    items.forEach(function (el) { el.classList.add('in'); });
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
    return;
  }

  document.documentElement.classList.add('js-reveal');

  var io = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      var c = entry.target.querySelector('.count[data-count]');
      if (c) runCount(c);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  items.forEach(function (el) { io.observe(el); });
})();

// Our journey: flip calendar, timeline print-in, print head
(function(){
  const items = [...document.querySelectorAll('.jr-item')];
  const track = document.getElementById('jrTrack');
  if(!items.length || !track) return;

  const calPage = document.getElementById('calPage');
  const calYear = document.getElementById('calYear');
  const calLabel = document.getElementById('calLabel');
  const calGrid = document.getElementById('calGrid');
  const calCount = document.getElementById('calCount');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const thisYear = String(new Date().getFullYear());

  // Calendar grid: one square per chapter
  items.forEach((_, i) => {
    const s = document.createElement('span');
    s.textContent = i + 1;
    calGrid.appendChild(s);
  });
  const cells = [...calGrid.children];

  let current = -1;
  function setActive(i){
    if(i === current) return;
    const first = current === -1;
    current = i;
    items.forEach((it, k) => it.classList.toggle('active', k === i));
    cells.forEach((c, k) => {
      c.classList.toggle('done', k < i);
      c.classList.toggle('now', k === i);
    });
    calCount.textContent = `Chapter ${i + 1} of ${items.length}`;

    const y = items[i].dataset.year === 'now' ? thisYear : items[i].dataset.year;
    const l = items[i].dataset.label;
    const swap = () => { calYear.textContent = y; calLabel.textContent = l; };

    if(reduce || first){ swap(); return; }
    calPage.classList.remove('flip');
    void calPage.offsetWidth;            // restart the animation
    calPage.classList.add('flip');
    setTimeout(swap, 260);               // change the page when it is edge-on
  }

  // Cards print in when they scroll into view
  const reveal = new IntersectionObserver(entries => entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('in'); reveal.unobserve(e.target); }
  }), { threshold: .25 });
  items.forEach(it => reveal.observe(it));
  document.querySelectorAll('.jr-end').forEach(el => reveal.observe(el));

  // The card in the middle of the screen is the active chapter
  const act = new IntersectionObserver(entries => entries.forEach(e => {
    if(e.isIntersecting) setActive(items.indexOf(e.target));
  }), { rootMargin: '-45% 0px -45% 0px' });
  items.forEach(it => act.observe(it));

  // Print head moves down the line as you scroll
  function progress(){
    const r = track.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * .5 - r.top) / r.height));
    track.style.setProperty('--p', p);
  }
  addEventListener('scroll', progress, { passive: true });
  addEventListener('resize', progress);
  progress();
  setActive(0);
})();
