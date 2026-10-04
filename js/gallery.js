// ===============================
// GALLERY PAGE
// ===============================

// ---- 1. EDIT HERE: your images --------------------------------------------
// To add photos, put the filename in the right "images" list. Nothing else.
// Files are looked up in:  images/gallery/<key>/<filename>
// If a folder lives somewhere else, add  folder: "images/your/path/"  to that entry.
const GALLERY_CATEGORIES = {
  signage:  'Signage',
  acp:      'ACP Work',
  backlit:  'Backlit & Lighting',
  onewayvision: 'One Way Vision',
  inshop:   'In-Shop Branding',
  event:    'Event Branding',
  client:   'Client Projects',
  other:    'Other Projects'
};

const galleryData = {
  "100ft-signage": {
    title: "100ft signage", 
    category: "signage",
    folder: "images/100ft signage/",
    images: [
      "img1.png",
      "img2.png",
      "img3.png",
      "img4.png",
      "img5.png",
      "img6.png",
      "img7.png",
      "img8.png",
      "img9.png"   
    ]},

  "trim-cap-letter-work":  
   { title: "Trim Cap Letter Work",   
    category: "signage", 
    folder: "images/Trim cap letter work/",
    images: [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
      "img6.jpg",
      "img7.jpg",
      "img8.jpg",
      "img9.jpg",
      "img10.jpg",
      "img16.jpg",
      "img17.jpg",
      "img18.jpg"
    ] },

  "sndwich-sign-bords":  
   { title: "Sndwich Sign Bords",   
    category: "signage", 
    folder: "images/Sndwich Sign bords/",
    images: [
      "img1.png"
    ] },

  "Drop-down":              
  { title: "Drop Down",              
    category: "signage", 
    folder: "images/Drop down/",
    images: [
      "img1.png",
      "img2.png",
      "img3.png",
      "img4.png"
    ] },

  "acp-work":     
  { title: "ACP Work",               
    category: "acp",
    folder: "images/Acp work/",
     images: ["img1.png",
      "img2.png",
      "img3.png",
      "img4.png",
      "img5.png",
      "img6.png",
      "img7.png",
      "img8.png",
      "img9.png",
  ] },

  "Back-lit":               
  { title: "Back Lit",               
    category: "backlit", 
    folder: "images/Back lit/",
    images: [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
      "img6.jpg",
      "img7.jpg",
      "img11.jpg",
      "img15.jpg",

      "img17.jpg"
    ] },

  "fabric-back-lit":       
   { title: "Fabric back Lit",        
    category: " back lit",
    folder: "images/Fabric back lit/",
    images: [
      "img1.png",
      "img2.png",
      "img3.png"
    ] },

  "eleveation-one-way-vision": 
  { title: "One Way Vision Eleveation", 
    category: "onewayvision", 
    folder: "images/eleveation work one way vision/",
    images: [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
      "img6.jpg",
      "img7.jpg"
    ] },

  "inshop-branding":        
  { title: "In-Shop Branding",       
    category: "inshop", 
    folder: "images/Inshop branding/",
    images: [
      "img2.jpg",
  "img3.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img10.jpg",
  "img11.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg",
  "img17.jpg",
  "img21.jpg",
  "img23.jpg",
  "img25.jpg",
  "img28.jpg",
  "img30.jpg",
  "img32.jpg",
  "img33.jpg",
  "img34.jpg",
  "img35.jpg"
    ] },

  "inshop-full-branding":   
  { title: "In-Shop Full Branding",  
    category: "inshop", 
    folder: "images/Inshop full branding/",
    images: [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
      "img6.jpg",
      "img7.jpg",
      "img8.jpg",
      "img9.jpg",
      "img10.jpg",
      "img11.jpg",
      "img12.jpg",
      "img13.jpg",
      "img14.jpg",
      "img15.jpg",
      "img16.jpg"
    ] },

  "vasanth-harur-store-opening": 
  { title: "Vasanth Harur Store Opening", 
    category: "event", 
    folder: "images/vasanth harur store opening/",
    images: [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
      "img6.jpg",
      "img7.jpg",
      "img8.jpg",
      "img9.jpg",
      "img10.jpg",
      "img11.jpg",
      "img12.jpg",
      "img13.jpg",
      "img14.jpg",
      "img15.jpg",
      "img16.jpg",
      "img17.jpg",
      "img18.jpg",
      "img19.jpg",
      "img20.jpg",
      "img21.jpg",
      "img22.jpg",
      "img23.jpg",
      "img24.jpg",
      "img25.jpg",
      "img26.jpg",
      "img27.jpg",
      "img28.jpg",
      "img29.jpg",
      "img30.jpg",
      "img31.jpg",
      "img32.jpg"
    ] },

  "ashok-leyland": 
   { title: "Ashok leyland",
  category: "client", 
   folder: "images/Ashok leyland/",
  images: [
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
    "img6.png",
    "img7.png",
    "img8.png",
    "img9.png",
    "img10.png",
    "img11.png",
    "img12.png"

  ] },

  "Cauvery":               
   { title: "Cauvery",                
    category: "client", 
    folder: "images/Cauvery/",
    images: [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
      "img6.jpg",
      "img7.jpg",
      "img8.jpg",
      "img9.jpg",
      "img10.jpg"     
    ] },

  "Ola":                    
  { title: "Ola",                    
    category: "client", 
     folder: "images/Ola/",
    images: [
      "img1.png",
      "img2.png",
      "img3.png",
      "img4.png"

    ] },

  "Sleep-well":            
  { title: "Sleep Well",            
     category: "client", 
     folder: "images/Sleep well/",
     images: [
      "img1.png",
      "img2.png",
      "img3.png"
      
     ] },

  "Victorinox":             
  { title: "Victorinox",            
     category: "client", 
     folder: "images/Victorinox/",
     images: [
  "img4.jpg",
  "img5.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img12.jpg",
  "img13.jpg",
  "img19.jpg",
  "img20.jpg",
  "img21.jpg",
  "img22.jpg",
  "img29.jpg"
       ] },

  "Way-cool":               
  { title: "Way Cool",               
    category: "client", 
    folder: "images/Way cool/",
    images: [
  "img3.jpg",
  "img4.jpg",
  "img6.jpg",
  "img7.jpg",
  "img9.jpg",
  "img11.jpg",
  "img12.jpg",
  "img14.jpg",
  "img16.jpg",
  "img18.jpg",
  "img20.jpg",
  "img21.jpg",
  "img23.jpg",
  "img26.jpg",
  "img27.jpg",
  "img29.jpg"

        ] },

  "smart-marketing":        
  { title: "smart marketing",        
    category: "other", 
    folder: "images/smart marketing/",
    images: [
      "img1.png"
    ] },

    "Zee tamil":              
  { title: "Zee Tamil",              
    category: "signage", 
    folder: "images/Zee tamil/",
    images: [
      "img1.png",
     "img2.png",
     "img3.png",
     "img4.png",
     "img5.png" 
    ] },

    "Train wrapping":              
  { title: "Train wrapping",              
    category: "signage", 
    folder: "images/Train wrapping/",
    images: [
      "img1.jpeg",
      "img2.jpeg",
      "img3.jpeg",
      "img4.jpeg",
      "img5.jpeg",
      "img6.jpeg",
      "img7.jpeg",
      "img8.jpeg",
      "img9.jpeg"
    ] },

    "SMS-Group-office-branding":              
  { title: "SMS Group office branding",              
    category: "signage", 
    folder: "images/SMS Group office branding/",
    images: [
      "img1.jpeg",
      "img2.jpeg",
      "img3.jpeg",
      "img4.jpeg",
      "img5.jpeg",
      "img6.jpeg",
      "img7.jpeg"
    ] },

    "Meat&eat":              
  { title: "Meat & eat",              
    category: "signage", 
    folder: "images/Meat&eat/",
    images: [
      "img1.jpeg",
      "img2.jpeg",
      "img3.jpeg",
      "img4.jpeg",
      "img5.jpeg",
      "img6.jpeg",
      "img7.jpeg",
      "img8.jpeg",
      "img9.jpeg",
      "img10.jpeg",
      "img11.jpeg",
      "img12.jpeg",
      "img13.jpeg",
    ] },

    "Amazon":              
  { title: "Amazon",              
    category: "signage", 
    folder: "images/Amazon/",
    images: [
      "img1.png",
    ] },
};

// Featured Work: project keys from galleryData (shown only if they have images)
const FEATURED_PROJECTS = ["100ft-signage", "acp-work", "elevation-one-way-vision", "fabric-back-lit"];
const GALLERY_BASE = 'images/gallery/';
const GALLERY_BATCH = 24;
// ---------------------------------------------------------------------------

(function(){
  const grid = document.getElementById('galleryGrid');
  if(!grid) return; // not the gallery page

  const filtersEl = document.getElementById('galleryFilters');
  const emptyEl = document.getElementById('galleryEmpty');
  const moreBtn = document.getElementById('galleryMore');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCount = document.getElementById('lbCount');
  const lbTitle = document.getElementById('lbTitle');

  // Flatten galleryData into one list of image items
  const items = [];
  Object.entries(galleryData).forEach(([key, p]) => {
    const folder = p.folder || (GALLERY_BASE + key + '/');
    p.images.forEach((file, n) => {
      items.push({
        key, category: p.category, title: p.title,
        src: folder + encodeURIComponent(file).replace(/%2F/g, '/'),
        alt: p.title + ' – signage and branding work by Smart Marketing & Events, photo ' + (n + 1) + ' of ' + p.images.length
      });
    });
  });

  let activeCat = 'all';
  let current = items.slice();   // images matching the current filter (also the slideshow list)
  let shown = 0;
  let lbIndex = 0;
  let lastFocus = null;

  const SEARCH_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>';

  function renderFilters(){
    filtersEl.innerHTML = '';
    const cats = [['all', 'All']].concat(
      Object.entries(GALLERY_CATEGORIES).filter(([k]) => items.some(i => i.category === k))
    );
    cats.forEach(([key, label]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.dataset.cat = key;
      b.setAttribute('aria-pressed', key === activeCat);
      b.addEventListener('click', () => filterGallery(key));
      filtersEl.appendChild(b);
    });
  }

  function filterGallery(cat) {
  activeCat = cat;

  filtersEl.querySelectorAll('button').forEach(b => {
    b.setAttribute(
      'aria-pressed',
      b.dataset.cat === cat
    );
  });

  grid.innerHTML = '';
  shown = 0;

  renderGallery();
}

 
function renderGallery() {

  const projects = Object.entries(galleryData).filter(([key, project]) => {

    if (!project.images || project.images.length === 0) {
      return false;
    }

    if (activeCat === 'all') {
      return true;
    }

    return project.category === activeCat;
  });

  const end = Math.min(
    shown + GALLERY_BATCH,
    projects.length
  );

  const fragment = document.createDocumentFragment();

  for (let i = shown; i < end; i++) {

    const [key, project] = projects[i];

    const folder =
      project.folder ||
      (GALLERY_BASE + key + '/');

    // Project heading
    const projectSection = document.createElement('div');

    projectSection.className = 'gallery-project';

    const heading = document.createElement('h3');

    heading.className = 'gallery-project-title';

    heading.textContent = project.title;

    projectSection.appendChild(heading);


    // Images grid
    const imageGrid = document.createElement('div');

    imageGrid.className = 'gallery-project-grid';


    project.images.forEach((file, index) => {

      const imagePath =
        folder +
        encodeURIComponent(file)
          .replace(/%2F/g, '/');


      const card =
        document.createElement('button');

      card.type = 'button';

      card.className = 'gallery-image-card';

      card.setAttribute(
        'aria-label',
        'View ' +
        project.title +
        ' image ' +
        (index + 1)
      );


      card.innerHTML = `
        <img
          src="${imagePath}"
          alt="${project.title} - image ${index + 1}"
          loading="lazy"
          decoding="async"
        >
      `;


      // Click image → existing lightbox
      card.addEventListener('click', () => {

        const projectItems =
          project.images.map((photo, n) => ({

            key: key,

            category: project.category,

            title: project.title,

            src:
              folder +
              encodeURIComponent(photo)
                .replace(/%2F/g, '/'),

            alt:
              project.title +
              ' - image ' +
              (n + 1) +
              ' of ' +
              project.images.length

          }));


        current = projectItems;

        lbIndex = index;

        showImage();

        lb.hidden = false;

        lb.setAttribute(
          'aria-hidden',
          'false'
        );

        document.body.classList.add(
          'lb-open'
        );

        document
          .getElementById('lbClose')
          .focus();
      });


      imageGrid.appendChild(card);

    });


    projectSection.appendChild(imageGrid);

    fragment.appendChild(projectSection);
  }


  grid.appendChild(fragment);

  shown = end;

  emptyEl.hidden =
    projects.length > 0;

  moreBtn.hidden =
    shown >= projects.length;
}

  function renderFeatured(){
    const wrap = document.getElementById('featured');
    const box = document.getElementById('featuredGrid');
    FEATURED_PROJECTS.forEach(key => {
      const p = galleryData[key];
      const first = items.find(i => i.key === key);
      if(!p || !first) return;
      const a = document.createElement('a');
      a.className = 'card';
      a.href = '#gallery';
      a.innerHTML = '<img loading="lazy" decoding="async"><div class="card-body"><h3></h3></div>';
      const img = a.querySelector('img');
      img.src = first.src;
      img.alt = first.alt;
      a.querySelector('h3').textContent = p.title;
      a.addEventListener('click', e => {
        e.preventDefault();
        filterGallery(p.category);
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
      });
      box.appendChild(a);
    });
    wrap.hidden = !box.children.length;
  }

  // ---- Lightbox ----
  function showImage(){
    const it = current[lbIndex];
    lbImg.src = it.src;       // large image is only loaded when opened / navigated to
    lbImg.alt = it.alt;
    lbCount.textContent = (lbIndex + 1) + ' / ' + current.length;
    lbTitle.textContent = it.title;
  }
  function openLightbox(i){
    lastFocus = document.activeElement;
    lbIndex = i;
    showImage();
    lb.hidden = false;
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-open');
    document.getElementById('lbClose').focus();
  }
  function closeLightbox(){
    lb.hidden = true;
    lb.setAttribute('aria-hidden', 'true');
    lbImg.removeAttribute('src');
    document.body.classList.remove('lb-open');
    if(lastFocus) lastFocus.focus();
  }
  function showNextImage(){ lbIndex = (lbIndex + 1) % current.length; showImage(); }
  function showPreviousImage(){ lbIndex = (lbIndex - 1 + current.length) % current.length; showImage(); }

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbNext').addEventListener('click', showNextImage);
  document.getElementById('lbPrev').addEventListener('click', showPreviousImage);
  lb.addEventListener('click', e => { if(e.target === lb) closeLightbox(); }); // click outside image
  document.addEventListener('keydown', e => {
    if(lb.hidden) return;
    if(e.key === 'Escape') closeLightbox();
    else if(e.key === 'ArrowRight') showNextImage();
    else if(e.key === 'ArrowLeft') showPreviousImage();
  });

  // Swipe
  let startX = null;
  lb.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if(startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if(Math.abs(dx) > 50) (dx < 0 ? showNextImage : showPreviousImage)();
  }, { passive: true });

  moreBtn.addEventListener('click', renderGallery);

  renderFilters();
  renderFeatured();
  filterGallery('all');
})();
