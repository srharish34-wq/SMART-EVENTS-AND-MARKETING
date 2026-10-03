// Mobile menu
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Header shadow on scroll
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Play video when visible, pause when off screen
const video = document.getElementById('promoVideo');
if (video && 'IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { video.play().catch(() => {}); }
      else { video.pause(); }
    });
  }, { threshold: 0.4 }).observe(video);
}

// Fade service rows in as they scroll into view
const rows = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  rows.forEach(r => io.observe(r));
} else {
  rows.forEach(r => r.classList.add('in'));
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();