// ---------- Clients page ----------

// Second logo row (moves the other way): duplicate for a seamless loop
(function(){
  const t = document.getElementById('marquee2');
  if(!t) return;
  [...t.children].forEach(li => t.appendChild(li.cloneNode(true)));
})();

// Add the shine layer to each logo card
document.querySelectorAll('.client-logo').forEach(card => {
  const s = document.createElement('span');
  s.className = 'shine';
  card.appendChild(s);
});

// Slide rows in as they scroll into view
(function(){
  const rows = document.querySelectorAll('.c-reveal');
  if(!('IntersectionObserver' in window)){ rows.forEach(r => r.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .2 });
  rows.forEach(r => io.observe(r));
})();

// 3D tilt on hover (skipped on touch screens and for reduced motion)
(function(){
  if(matchMedia('(hover: none)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.setProperty('--ry', (x * 18) + 'deg');
      card.style.setProperty('--rx', (-y * 18) + 'deg');
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
})();