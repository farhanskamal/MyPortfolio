/* ═══════════════════════════════════════════════════════════
   ✏️  ADD YOUR IMAGES HERE
   ───────────────────────────────────────────────────────────
   Create an  images/  folder next to index.html on GitHub,
   put your files in there, then list the paths below.

   Example:
     'images/axcel-screenshot.png',
     'images/empow-ui.jpg',
     'images/subarctic-logo.png',
═══════════════════════════════════════════════════════════ */
const IMAGES = [
  'gallery/image-00.png',
  'gallery/image-01.png',
  'gallery/image-02.png',
  'gallery/image-03.png',
  'gallery/image-04.png',
  'gallery/image-05.png',
  'gallery/image-06.png',
  'gallery/image-07.png',
  'gallery/image-08.png',
  'gallery/image-09.png',
  'gallery/image-10.png',
  'gallery/image-11.png',
  'gallery/image-12.png',
  'gallery/image-13.png',
  'gallery/image-14.png',
  'gallery/image-15.png',
  'gallery/image-16.png',
  'gallery/image-17.png',
  'gallery/image-18.png',
  'gallery/image-19.png',
  'gallery/image-20.png',
  'gallery/image-21.png',
  'gallery/image-22.png',
  'gallery/image-23.png',
  'gallery/image-24.png',
  'gallery/image-25.png',
  'gallery/image-26.png',
  'gallery/image-27.png',
  'gallery/image-28.png',
  'gallery/image-29.png',
  'gallery/image-30.png',
  'gallery/image-31.png',
  'gallery/image-32.png',
  'gallery/image-33.png',
  'gallery/image-34.png',
  'gallery/image-35.png',
  'gallery/image-36.png',
  'gallery/image-37.png',
  'gallery/image-38.png',
  'gallery/image-39.png',
  'gallery/image-40.png',
  'gallery/image-41.png',
  'gallery/image-42.png',
  'gallery/image-43.png',
  'gallery/image-44.png',
  'gallery/image-45.png',
  'gallery/image-46.png'
];

/* ═══════════════════════════════════════════════════════════
   ✏️  SKILLS — add or remove freely
═══════════════════════════════════════════════════════════ */
const SKILLS = [
  'JavaScript', 'HTML / CSS', 'Python', 'Game Design', 'UI/UX Design',
  'Figma', 'Unity', 'Graphic Design', 'Logo Design', 'Photoshop',
  'Pixlr', 'Web Design', 'Branding', 'Music Production', 'Video Editing',
  'QA Testing', 'Responsive Design', 'Pixel Art', 'Brand Identity',
  'Creative Direction', 'C++', 'SFML', 'Narrative Design', 'Illustration',
];

/* ─────────────────────────────────────────────────────────
   No need to edit anything below this line
───────────────────────────────────────────────────────── */

/* ── Random favicon ─────────────────────────────────────── */
(function () {
  const pick = IMAGES[Math.floor(Math.random() * IMAGES.length)];
  let link = document.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = pick;
})();

/* ── Skills ticker ─────────────────────────────────────── */
const track = document.getElementById('skillsTrack');
[...SKILLS, ...SKILLS].forEach(s => {
  const chip = document.createElement('span');
  chip.className = 'skill-chip';
  chip.textContent = s;
  track.appendChild(chip);
});

/* ── Gallery ────────────────────────────────────────────── */
const colA = document.getElementById('colA');
const colB = document.getElementById('colB');
let lbIndex = 0;

function buildGallery() {
  if (!IMAGES.length) return;
  const half = Math.ceil(IMAGES.length / 2);
  populate(colA, IMAGES.slice(0, half), 0);
  populate(colB, IMAGES.slice(half), half);
}

function populate(col, subset, offset) {
  if (!subset.length) return;
  [...subset, ...subset].forEach((src, i) => {
    col.appendChild(makeCard(src, offset + (i % subset.length)));
  });
}

function makeCard(src, idx) {
  const card = document.createElement('div');
  card.className = 'gallery-card';

  const img = document.createElement('img');
  img.src = src;
  img.alt = src.split('/').pop().replace(/\.[^.]+$/, '');
  img.loading = 'lazy';
  card.appendChild(img);

  const hint = document.createElement('div');
  hint.className = 'expand-hint';
  hint.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 3 21 3 21 9"/>
      <polyline points="9 21 3 21 3 15"/>
      <line x1="21" y1="3" x2="14" y2="10"/>
      <line x1="3" y1="21" x2="10" y2="14"/>
    </svg>
    View
  `;
  card.appendChild(hint);

  card.addEventListener('click', () => openLightbox(idx));
  return card;
}

buildGallery();

/* ── Lightbox ───────────────────────────────────────────── */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');

function openLightbox(idx) {
  lbIndex = idx;
  updateLb();
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
}

function updateLb() {
  lbImg.style.animation = 'none';
  lbImg.offsetHeight; // force reflow to restart animation
  lbImg.style.animation = '';
  lbImg.src = IMAGES[lbIndex];
  lbImg.alt = IMAGES[lbIndex].split('/').pop();
  lbCounter.textContent = `${lbIndex + 1} / ${IMAGES.length}`;
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);

document.getElementById('lbPrev').addEventListener('click', () => {
  lbIndex = (lbIndex - 1 + IMAGES.length) % IMAGES.length;
  updateLb();
});

document.getElementById('lbNext').addEventListener('click', () => {
  lbIndex = (lbIndex + 1) % IMAGES.length;
  updateLb();
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')  { lbIndex = (lbIndex - 1 + IMAGES.length) % IMAGES.length; updateLb(); }
  if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % IMAGES.length; updateLb(); }
});
