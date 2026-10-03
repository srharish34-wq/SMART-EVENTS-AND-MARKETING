// ===============================
// Mobile Menu
// ===============================

const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (toggle && nav) {

  toggle.addEventListener('click', () => {

    const open = nav.classList.toggle('open');

    toggle.setAttribute('aria-expanded', open);

  });

  nav.querySelectorAll('a').forEach(a => {

    a.addEventListener('click', () => {

      nav.classList.remove('open');

      toggle.setAttribute('aria-expanded', 'false');

    });

  });

}


// ===============================
// Header Shadow on Scroll
// ===============================

const header = document.getElementById('header');

if (header) {

  const onScroll = () => {

    header.classList.toggle(
      'scrolled',
      window.scrollY > 10
    );

  };

  window.addEventListener(
    'scroll',
    onScroll,
    { passive: true }
  );

  onScroll();

}


// ===============================
// Footer Year
// ===============================

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}


// ===============================
// Contact Form → WhatsApp
// ===============================

const form = document.getElementById('contactForm');

if (form) {

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(form);

    const name =
      data.get('name') || '-';

    const phone =
      data.get('phone') || '-';

    const email =
      data.get('email') || '-';

    const service =
      data.get('service') || '-';

    const location =
      data.get('location') || '-';

    const date =
      data.get('date') || '-';

    const details =
      data.get('details') || '-';


    const message =
`Hi Smart Marketing & Events,

I would like to enquire about your services.

Name: ${name}
Phone: ${phone}
Email: ${email}

Service Required: ${service}

Project Location: ${location}

Required Date: ${date}

Project Details:
${details}

Please share the quotation and further details.`;


    const whatsappURL =
      'https://wa.me/918668074545?text=' +
      encodeURIComponent(message);


    window.open(
      whatsappURL,
      '_blank'
    );

  });

}