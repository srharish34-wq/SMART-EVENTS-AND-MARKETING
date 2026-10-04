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

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Testimonial slider
(function(){
  const slides = document.querySelectorAll('#slider .slide');
  const dots = document.getElementById('dots');
  if(!slides.length) return;
  let i = 0, timer;
  slides.forEach((_, n) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Show review ' + (n + 1));
    b.addEventListener('click', () => { go(n); restart(); });
    dots.appendChild(b);
  });
  function go(n){
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('active', k === i));
    [...dots.children].forEach((d, k) => d.classList.toggle('on', k === i));
  }
  function restart(){
    clearInterval(timer);
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => go(i + 1), 6000);
  }
  document.getElementById('prev').addEventListener('click', () => { go(i - 1); restart(); });
  document.getElementById('next').addEventListener('click', () => { go(i + 1); restart(); });
  go(0); restart();
})();

// Count-up numbers when the stats come into view
(function(){
  const nums = document.querySelectorAll('[data-count]');
  if(!nums.length) return;
  const run = el => {
    const target = +el.dataset.count, suffix = el.dataset.suffix || '';
    const steps = 50; let n = 0;
    const t = setInterval(() => {
      n++;
      el.textContent = Math.round(target * n / steps) + (n === steps ? suffix : '');
      if(n === steps) clearInterval(t);
    }, 25);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ run(e.target); io.unobserve(e.target); } });
  }, { threshold: .6 });
  nums.forEach(n => io.observe(n));
})();

// Moving client logos: duplicate the list so the loop is seamless
(function(){
  const track = document.getElementById('marquee');
  if(!track) return;
  [...track.children].forEach(li => {
    const c = li.cloneNode(true);
    c.setAttribute('aria-hidden', 'true');
    track.appendChild(c);
  });
})();

// Quote form -> WhatsApp message
(function(){
  const f = document.getElementById('quoteForm');
  if(!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(f);
    const msg = `Hi Smart Marketing & Events,\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nService: ${d.get('service')}\nDetails: ${d.get('details') || '-'}`;
    window.open('https://wa.me/918668074545?text=' + encodeURIComponent(msg), '_blank');
  });
})();

// Board guide tabs
(function(){
  const tabs = document.querySelectorAll('.tabs [role="tab"]');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(o => {
      const on = o === t;
      o.setAttribute('aria-selected', on);
      document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
    });
  }));
})();

// Catalogue + cost calculator + PDF estimate
(function(){
  const GST_RATE = 18;                 // change if your GST rate is different
  const WHATSAPP = '918668074545';
  const TO_SQFT = { ft: 1, in: 1/144, m: 10.7639 };

  const cards = [...document.querySelectorAll('.cat-card')];
  const sel = document.getElementById('calcService');
  if(!sel || !cards.length) return;

  // Services and rates are read from the catalogue cards (change prices in the HTML)
  const services = cards.map(c => ({ name: c.dataset.name, rate: +c.dataset.price }));
  services.forEach((s, i) => sel.add(new Option(`${s.name} – ₹${s.rate}/sq ft`, i)));

  const $ = id => document.getElementById(id);
  const money = n => '₹' + Math.round(n).toLocaleString('en-IN');
  const rs = n => 'Rs. ' + Math.round(n).toLocaleString('en-IN');   // PDF fonts cannot print the ₹ sign
  const num = x => Math.round(x * 100) / 100;
  const items = [];
  $('gstRate').textContent = GST_RATE;

  function totals(){
    const sub = items.reduce((t, it) => t + it.amount, 0);
    const tax = $('calcGst').checked ? sub * GST_RATE / 100 : 0;
    return { sub, tax, total: sub + tax };
  }

  function current(){
    const w = parseFloat($('calcW').value), h = parseFloat($('calcH').value);
    const qty = Math.max(1, parseInt($('calcQty').value) || 1);
    if(!(w > 0) || !(h > 0)) return null;
    const unit = $('calcUnit').value;
    const s = services[+sel.value];
    const area = w * h * TO_SQFT[unit];
    return { name: s.name, rate: s.rate, w, h, unit, qty, area, amount: area * qty * s.rate };
  }

  function live(){
    const c = current();
    $('calcLive').textContent = c
      ? `${num(c.area)} sq ft × ${c.qty} × ₹${c.rate} = ${money(c.amount)}`
      : 'Enter width and height to see the cost.';
  }

  function render(){
    const body = $('calcRows');
    body.innerHTML = '';
    if(!items.length){
      body.innerHTML = '<tr class="empty"><td colspan="5">No items yet.</td></tr>';
    }
    items.forEach((it, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td></td><td>${it.w} × ${it.h} ${it.unit}</td><td>${it.qty}</td><td>${money(it.amount)}</td><td><button class="rm" aria-label="Remove item">×</button></td>`;
      tr.children[0].textContent = it.name;
      tr.querySelector('.rm').addEventListener('click', () => { items.splice(i, 1); render(); });
      body.appendChild(tr);
    });
    const t = totals();
    $('calcSub').textContent = money(t.sub);
    $('calcTax').textContent = money(t.tax);
    $('calcTotal').textContent = money(t.total);
    $('calcSend').disabled = !items.length;
    $('calcPdf').disabled = !items.length;
  }

  ['calcService','calcW','calcH','calcUnit','calcQty'].forEach(id => $(id).addEventListener('input', live));
  $('calcGst').addEventListener('change', render);

  $('calcAdd').addEventListener('click', () => {
    const c = current();
    $('calcErr').textContent = c ? '' : 'Please enter a width and height greater than zero.';
    if(!c) return;
    items.push(c);
    $('calcW').value = ''; $('calcH').value = ''; $('calcQty').value = 1;
    live(); render();
  });

  // ----- Send on WhatsApp -----
  $('calcSend').addEventListener('click', () => {
    const t = totals();
    const lines = items.map((it, i) => `${i + 1}. ${it.name} – ${it.w} x ${it.h} ${it.unit}, qty ${it.qty} = ${money(it.amount)}`);
    const msg = `Hi Smart Marketing & Events, I would like a quote:\n${lines.join('\n')}\n` +
      (t.tax ? `GST: ${money(t.tax)}\n` : '') + `Estimated total: ${money(t.total)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // ----- Download estimate as PDF (logo at the top right) -----
  function loadLogo(){
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        try {
          const c = document.createElement('canvas');
          c.width = img.naturalWidth; c.height = img.naturalHeight;
          c.getContext('2d').drawImage(img, 0, 0);
          resolve({ data: c.toDataURL('image/png'), ratio: img.naturalWidth / img.naturalHeight });
        } catch(e){ resolve(null); }
      };
      img.onerror = () => resolve(null);
      img.src = 'images/logo.png';
    });
  }

  $('calcPdf').addEventListener('click', async () => {
    if(!items.length || !window.jspdf) return;
    const logo = await loadLogo();
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const W = doc.internal.pageSize.getWidth();
    const H = doc.internal.pageSize.getHeight();
    const red = [214, 58, 47];

    // Red header: name on the left, logo on the top right
    doc.setFillColor(...red);
    doc.rect(0, 0, W, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold'); doc.setFontSize(18);
    doc.text('Smart Marketing & Events', 14, 15);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
    doc.text('Large format printing | Sign boards | Branding', 14, 22);
    if(logo){
      const h = 16, w = h * logo.ratio;
      doc.addImage(logo.data, 'PNG', W - 14 - w, 7, w, h);
    }

    // Title and date
    const today = new Date();
    doc.setTextColor(58, 21, 18);
    doc.setFont('helvetica', 'bold'); doc.setFontSize(16);
    doc.text('ESTIMATE', 14, 44);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
    doc.text('Date: ' + today.toLocaleDateString('en-IN'), W - 14, 44, { align: 'right' });

    // Items table
    doc.autoTable({
      startY: 50,
      head: [['Item', 'Size', 'Area (sq ft)', 'Qty', 'Rate / sq ft', 'Amount']],
      body: items.map(it => [
        it.name,
        `${it.w} x ${it.h} ${it.unit}`,
        num(it.area),
        it.qty,
        rs(it.rate),
        rs(it.amount)
      ]),
      headStyles: { fillColor: red, textColor: 255 },
      alternateRowStyles: { fillColor: [252, 228, 228] },
      styles: { fontSize: 10, cellPadding: 3 },
      columnStyles: { 5: { halign: 'right' } }
    });

    // Totals
    const t = totals();
    let y = doc.lastAutoTable.finalY + 10;
    doc.setTextColor(58, 21, 18);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(11);
    doc.text('Subtotal', W - 70, y);
    doc.text(rs(t.sub), W - 14, y, { align: 'right' });
    if(t.tax){
      y += 7;
      doc.text(`GST (${GST_RATE}%)`, W - 70, y);
      doc.text(rs(t.tax), W - 14, y, { align: 'right' });
    }
    y += 9;
    doc.setDrawColor(...red); doc.setLineWidth(0.6);
    doc.line(W - 80, y - 6, W - 14, y - 6);
    doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
    doc.setTextColor(...red);
    doc.text('Total', W - 70, y);
    doc.text(rs(t.total), W - 14, y, { align: 'right' });

    // Note
    doc.setTextColor(58, 21, 18);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
    doc.text('This is an approximate estimate. The final price is confirmed after we see your site and design.', 14, y + 14, { maxWidth: W - 28 });

    // Footer
    doc.setFillColor(...red);
    doc.rect(0, H - 22, W, 22, 'F');
    doc.setTextColor(255, 255, 255); doc.setFontSize(9);
    doc.text('Velachery, Chennai - 600 042  |  044 4791 7507  |  +91 97907 38393  |  WhatsApp +91 86680 74545', W / 2, H - 13, { align: 'center' });
    doc.text('smartmarketingchennai@gmail.com  |  GSTIN: 33CABPP3282J1ZN', W / 2, H - 7, { align: 'center' });

    doc.save('Smart-Marketing-Estimate-' + today.toISOString().slice(0, 10) + '.pdf');
  });

  // "Estimate" button on a catalogue card preselects that service
  document.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => {
    const i = services.findIndex(s => s.name === b.dataset.pick);
    if(i > -1){ sel.value = i; live(); }
  }));

  live(); render();
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
