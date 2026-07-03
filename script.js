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

/* ═══════════════════════════════════════════════════════════
   ✏️  PROJECTS — add new entries here
═══════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    slug: 'axcel',
    title: 'Axcel',
    folderName: 'Axcel',
    category: 'web-design',
    summary: 'A modern chat app concept similar to Discord — landing page, sign-up flow, and glossy UI exploration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
    demo: 'https://farhan-kamal.github.io/AxcelLandingPage/',
    repo: 'https://github.com/Farhan-Kamal/AxcelLandingPage',
    previewImage: 'gallery/projects/axcel-cover.png',
    detail: {
      tagline: 'Discord-inspired chat app landing and auth UI',
      lede: 'Axcel is a web design project exploring a modern communication platform with a polished landing page, login, and sign-up screens built for clarity and visual impact.',
      meta: [
        { label: 'Category', value: 'Web Design' },
        { label: 'Stack', value: 'HTML, CSS, JavaScript' },
        { label: 'Scope', value: 'Marketing site + auth UI mockups' },
      ],
      heroImage: {
        src: 'gallery/projects/axcel-cover.png',
        alt: 'Axcel chat app landing page cover',
        caption: 'Axcel landing page hero',
      },
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Axcel reimagines a community chat platform with a clean landing experience and onboarding screens. The focus was on hierarchy, contrast, and a product feel that could scale into a full application.',
          ],
        },
        {
          heading: 'Features',
          list: [
            'Responsive landing page with feature highlights',
            'Login and sign-up page designs',
            'Consistent component styling across screens',
            'Deployed live on GitHub Pages',
          ],
          image: {
            src: 'gallery/projects/axcel-hpi.png',
            alt: 'Axcel app mockup design',
            caption: 'Mock up design of the app',
          },
        },
        {
          heading: 'Auth screens',
          paragraphs: ['Login and sign-up flows with matching visual language.'],
          image: {
            src: 'gallery/projects/axcel-login.jpg',
            alt: 'Axcel login screen',
            caption: 'Login screen',
          },
        },
        {
          heading: 'Mobile',
          image: {
            src: 'gallery/projects/axcel-hpi-mobile.png',
            alt: 'Axcel mobile mockup',
            caption: 'Mobile version of the mock up',
          },
        },
        {
          heading: 'Outcome',
          paragraphs: [
            'The project demonstrates end-to-end web design skills — from layout and typography to deployable front-end pages that communicate a product vision.',
          ],
          image: {
            src: 'gallery/projects/axcel-signup.jpg',
            alt: 'Axcel sign up screen',
            caption: 'Sign up screen',
          },
        },
      ],
    },
  },
  {
    slug: 'lovepets',
    title: 'LovePets Animal Shelter',
    folderName: 'LovePets Animal Shelter',
    category: 'web-design',
    summary: 'A multi-page animal shelter website with adopt, volunteer, and contact flows for a fictional rescue organization.',
    tags: ['HTML', 'CSS', 'Responsive Design'],
    previewImage: 'gallery/projects/lovepets-screen.png',
    detail: {
      tagline: 'Animal shelter site with adopt and volunteer pages',
      lede: 'LovePets Animal Shelter is a static web design project built as a complete small-business site — home, about, adopt, volunteer, and contact pages with cohesive branding.',
      meta: [
        { label: 'Category', value: 'Web Design' },
        { label: 'Stack', value: 'HTML, CSS' },
        { label: 'Scope', value: 'Multi-page static site' },
      ],
      heroImage: {
        src: 'gallery/projects/lovepets-screen.png',
        alt: 'LovePets Animal Shelter website screenshot',
        caption: 'Homepage overview',
      },
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Designed and built a full shelter website experience with navigation across adoption listings, volunteer information, and contact details. Emphasis on warmth, readability, and clear calls to action.',
          ],
        },
        {
          heading: 'Gallery',
          paragraphs: ['Homepage, adoption listings, and hero imagery from the live site design.'],
          image: {
            src: 'gallery/projects/lovepets-screen.png',
            alt: 'LovePets homepage overview',
            caption: 'Homepage overview',
          },
        },
        {
          heading: 'Adoption listings',
          image: {
            src: 'gallery/projects/lovepets-dpet.jpg',
            alt: 'Buddy the dog available for adoption',
            caption: 'Buddy — available for adoption',
          },
        },
        {
          heading: 'More friends',
          image: {
            src: 'gallery/projects/lovepets-cpet.jpg',
            alt: 'Luna the cat adoption pending',
            caption: 'Luna — adoption pending',
          },
        },
        {
          heading: 'Thumper',
          image: {
            src: 'gallery/projects/lovepets-rpet.jpg',
            alt: 'Thumper the rabbit available for adoption',
            caption: 'Thumper — available',
          },
        },
        {
          heading: 'Success stories',
          image: {
            src: 'gallery/projects/lovepets-hpet.jpg',
            alt: 'Max the adopted pet success story',
            caption: 'Success story — Max',
          },
        },
        {
          heading: 'Outcome',
          paragraphs: [
            'A portfolio-ready web design piece showing multi-page planning, visual consistency, and practical UX for a community-facing organization.',
          ],
          image: {
            src: 'gallery/projects/lovepets-hero.jpeg',
            alt: 'LovePets hero banner',
            caption: 'Hero banner',
          },
        },
      ],
    },
  },
  {
    slug: 'verdant-clicker',
    title: 'Verdant Clicker',
    folderName: 'Verdant Clicker',
    category: 'game-design',
    summary: 'An eco-friendly clicker game prototype that teaches green living through playful upgrades and environmental themes.',
    tags: ['Code.org', 'Game Design', 'JavaScript', 'Prototype'],
    demo: 'https://studio.code.org/projects/applab/R3Z0IM_GcQIxjjV-6_dORXYe12v02gVgb7XDpgbtJwM/view',
    previewImage: 'gallery/projects/verdant-clicker-cover.png',
    detail: {
      tagline: 'Eco-themed clicker prototype on Code.org App Lab',
      lede: 'Verdant Clicker is a game design prototype where players grow a greener world through clicks, upgrades, and environmental messaging — built in Code.org App Lab for rapid iteration.',
      meta: [
        { label: 'Category', value: 'Game Design' },
        { label: 'Tools', value: 'Code.org App Lab' },
        { label: 'Scope', value: 'Playable prototype' },
      ],
      heroImage: {
        src: 'gallery/projects/verdant-clicker-cover.png',
        alt: 'Verdant Clicker game cover art',
        caption: 'Verdant Clicker cover',
      },
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'A clicker game centered on sustainability themes — players invest actions into upgrades that reflect eco-friendly choices. Built as a prototype to test mechanics before a fuller Unity version.',
          ],
        },
        {
          heading: 'Features',
          list: [
            'Core clicker loop with upgrade progression',
            'Environmental education woven into gameplay',
            'Original art direction with green palette',
            'Playable in browser via Code.org',
          ],
          image: {
            src: 'gallery/projects/verdant-menu.png',
            alt: 'Verdant Clicker main menu',
            caption: 'Main menu',
          },
        },
        {
          heading: 'Gameplay',
          paragraphs: ['Tutorial and core gameplay screens from the Code.org prototype.'],
          image: {
            src: 'gallery/projects/verdant-tutorial.jpg',
            alt: 'Verdant Clicker tutorial',
            caption: 'The tutorial',
          },
        },
        {
          heading: 'Outcome',
          paragraphs: [
            'Demonstrates game design thinking, rapid prototyping, and thematic cohesion. Planned future expansion into a fuller demo built in Unity.',
          ],
          image: {
            src: 'gallery/projects/verdant-gameplay.jpg',
            alt: 'Verdant Clicker gameplay',
            caption: 'Gameplay',
          },
        },
      ],
    },
  },
  {
    slug: 'glitchbound',
    title: 'GlitchBound',
    folderName: 'GlitchBound',
    category: 'game-design',
    summary: 'A 2D puzzle-platformer concept where glitches become tools to solve levels and navigate broken worlds.',
    tags: ['Game Design', 'Unity', 'Puzzle', '2D Platformer'],
    demo: 'https://www.youtube.com/watch?v=pjzvuNRtSK0',
    previewImage: 'gallery/projects/glitchbound-cover.png',
    detail: {
      tagline: 'Puzzle-platformer where bugs are features',
      lede: 'GlitchBound explores a world where visual glitches and broken physics become intentional mechanics — players manipulate anomalies to reach new areas and solve puzzles.',
      meta: [
        { label: 'Category', value: 'Game Design' },
        { label: 'Engine', value: 'Unity (in development)' },
        { label: 'Scope', value: 'Concept + video showcase' },
      ],
      heroImage: {
        src: 'gallery/projects/glitchbound-cover.png',
        alt: 'GlitchBound game cover',
        caption: 'GlitchBound key art',
      },
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'GlitchBound combines platforming with glitch-based puzzles. The design turns traditionally undesirable effects — screen tears, duplicate sprites, physics quirks — into player tools.',
          ],
        },
        {
          heading: 'Features',
          list: [
            'Glitch-as-mechanic puzzle design',
            '2D platformer level structure',
            'Distinct visual identity around digital corruption',
            'Gameplay showcased on YouTube',
          ],
        },
        {
          heading: 'Outcome',
          paragraphs: [
            'A competition-ready game design piece demonstrating creative mechanics, level thinking, and presentation through video documentation.',
          ],
        },
      ],
    },
  },
  {
    slug: 'subarctic-island',
    title: 'Subarctic Island',
    folderName: 'Subarctic Island',
    category: 'graphic-design',
    summary: 'Branding and visual design for a Club Penguin private server — logos, banners, and community identity.',
    tags: ['Graphic Design', 'Branding', 'Logo Design', 'Community'],
    previewImage: 'gallery/projects/subarctic-island-cover.png',
    detail: {
      tagline: 'Club Penguin private server brand identity',
      lede: 'Subarctic Island is a graphic design project covering logo, banners, and promotional assets for a fan community server with a cold, arctic theme.',
      meta: [
        { label: 'Category', value: 'Graphic Design' },
        { label: 'Tools', value: 'Photoshop, Pixlr' },
        { label: 'Scope', value: 'Brand kit + promotional art' },
      ],
      heroImage: {
        src: 'gallery/projects/subarctic-island-cover.png',
        alt: 'Subarctic Island brand cover',
        caption: 'Subarctic Island cover art',
      },
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Created a cohesive visual identity for an online community — logo variations, social banners, and in-world promotional graphics that reinforce the arctic island theme.',
          ],
        },
        {
          heading: 'Gallery',
          paragraphs: ['Promotional artwork and brand pieces from the Subarctic Island community kit.'],
          image: {
            src: 'gallery/image-12.png',
            alt: 'Subarctic Island community banner',
            caption: 'Community banner artwork',
          },
        },
        {
          heading: 'Brand artwork',
          image: {
            src: 'gallery/image-05.png',
            alt: 'Subarctic Island promotional art',
            caption: 'Promotional artwork',
          },
        },
        {
          heading: 'More designs',
          image: {
            src: 'gallery/projects/subarctic-art-2.png',
            alt: 'Subarctic Island graphic design',
            caption: 'Brand graphics',
          },
        },
        {
          heading: 'Outcome',
          paragraphs: [
            'Shows brand thinking for community products: recognizable marks, repeatable templates, and artwork that works across multiple touchpoints.',
          ],
          image: {
            src: 'gallery/projects/subarctic-art-3.png',
            alt: 'Subarctic Island additional art',
            caption: 'Additional promotional art',
          },
        },
      ],
    },
  },
  {
    slug: 'empow',
    title: 'EmPow',
    folderName: 'EmPow',
    category: 'ux-ui',
    summary: 'An app concept that helps empower youth by surfacing opportunities — Emoti-Con Overall Excellence winner.',
    tags: ['UX/UI', 'Figma', 'Mobile Design', 'Research'],
    demo: 'https://emoticon.mouse.org/2025/empow',
    previewImage: 'gallery/projects/empow-cover.png',
    detail: {
      tagline: 'Youth opportunity finder — Emoti-Con winning app design',
      lede: 'EmPow is a UX/UI capstone that helps young people discover programs, internships, and resources. Research-driven flows, wireframes, and high-fidelity screens earned Overall Excellence at Emoti-Con.',
      meta: [
        { label: 'Category', value: 'UX/UI Design' },
        { label: 'Tools', value: 'Figma' },
        { label: 'Recognition', value: 'Emoti-Con 2025 — Overall Excellence' },
      ],
      heroImage: {
        src: 'gallery/projects/empow-cover.png',
        alt: 'EmPow app design cover',
        caption: 'EmPow app screens',
      },
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'EmPow addresses information barriers for NYC youth by consolidating opportunities into a scannable, mobile-first experience. User research informed navigation, filtering, and trust signals.',
          ],
        },
        {
          heading: 'Features',
          list: [
            'User research and problem framing',
            'Wireframes and interactive Figma prototype',
            'Opportunity discovery and category filtering',
            'Presented at Emoti-Con 2025',
          ],
          image: {
            src: 'gallery/projects/empow-wireframe.png',
            alt: 'EmPow wireframe screens',
            caption: 'Wireframe for our app',
          },
        },
        {
          heading: 'Outcome',
          paragraphs: [
            'EmPow demonstrates a full UX process from research through polished UI — earning Overall Excellence at Emoti-Con for helping youth discover opportunities.',
          ],
          image: {
            src: 'gallery/projects/empow-cover.png',
            alt: 'EmPow high-fidelity screens',
            caption: 'Final app screens',
          },
        },
      ],
    },
  },
];

const PROJECT_CATEGORIES = [
  { id: 'web-design', name: 'Web Design' },
  { id: 'game-design', name: 'Game Design' },
  { id: 'graphic-design', name: 'Graphic Design' },
  { id: 'ux-ui', name: 'UX/UI' },
];

const SILLY_IMAGE_FILES = [
  'sillyImages/aero-site-logo.webp',
  'sillyImages/green-rotary-phone.webp',
  'sillyImages/aero-globe-water.webp',
  'sillyImages/blue-tang-fish.webp',
  'sillyImages/aero-charm-collage.webp',
  'sillyImages/aero-aquarium-stickers.webp',
  'sillyImages/goldfish-pair.webp',
  'sillyImages/cat-zoom-1.webp',
  'sillyImages/cat-zoom-2.webp',
  'sillyImages/cat-zoom-3.webp',
  'sillyImages/cat-zoom-4.webp',
  'sillyImages/aero-media-player.webp',
  'sillyImages/aero-collage.webp',
];

/* ─────────────────────────────────────────────────────────
   No need to edit anything below this line
───────────────────────────────────────────────────────── */

function thumbPath(src) {
  return src.replace('gallery/', 'gallery/thumbs/');
}

/* ── Random favicon ─────────────────────────────────────── */
(function () {
  const pick = IMAGES[Math.floor(Math.random() * IMAGES.length)];
  let link = document.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = thumbPath(pick);
})();

/* ── Skills ticker (About section background) ───────────── */
function populateSkillsTrack(track) {
  if (!track) return;
  [...SKILLS, ...SKILLS].forEach(s => {
    const chip = document.createElement('span');
    chip.className = 'skill-chip';
    chip.textContent = s;
    track.appendChild(chip);
  });
}

populateSkillsTrack(document.getElementById('skillsTrackA'));
populateSkillsTrack(document.getElementById('skillsTrackB'));

/* ── Wave gallery ───────────────────────────────────────── */
// Real talk: this part is the "alive" feeling of the page.
// The goal is simple but picky:
// cards should stream in from the right with no random pop-in,
// while still feeling like they live in 3D space.
const waveGallery = document.getElementById('waveGallery');
const wavePauseChip = document.getElementById('wavePauseChip');
let lbIndex = 0;

const CARD_SIZE_CLASSES = ['card-sm', 'card-md', 'card-lg', 'card-md', 'card-lg', 'card-sm'];
const WAVE_ROW_CONFIG = [
  { speed: 0.5, phaseOffset: 0, arcScale: 1 },
  { speed: 0.55, phaseOffset: 2.1, arcScale: 0.85 },
  { speed: 0.48, phaseOffset: 4.2, arcScale: 0.7 },
];
const IMAGES_PER_ROW = 7;
const WAVE_IMAGE_BUFFER = 220;
const TRANSPARENT_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
const PAUSE_HOLD_MS = 700;
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let waveRows = [];
let wavePhase = 0;
let wavePaused = false;
let pauseHoldTimer = null;
let waveRafId = 0;
let waveInView = true;
let galleryW = 1;
const efficiencyToggle = document.getElementById('efficiencyToggle');
const EFFICIENCY_STORAGE_KEY = 'portfolio-efficiency-mode';
let efficiencyMode = false;
let stopBubbleSpawner = null;
let stopCursorEffects = null;
let stickersBuilt = false;
let footerAsciiBuilt = false;

function shouldReduceEffects() {
  return REDUCED_MOTION;
}

function loadEfficiencyPreference() {
  try {
    return localStorage.getItem(EFFICIENCY_STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function saveEfficiencyPreference(enabled) {
  try {
    localStorage.setItem(EFFICIENCY_STORAGE_KEY, enabled ? '1' : '0');
  } catch {
    // Ignore storage write failures (private mode, quotas, etc.).
  }
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function makeCard(src, idx, sizeClass) {
  const card = document.createElement('div');
  card.className = `gallery-card wave-card ${sizeClass || 'card-md'}`;
  card.dataset.lbIndex = String(idx);

  const img = document.createElement('img');
  const thumb = thumbPath(src);
  if (REDUCED_MOTION || efficiencyMode) {
    img.src = thumb;
  } else {
    img.dataset.src = thumb;
    img.src = TRANSPARENT_PIXEL;
  }
  img.alt = src.split('/').pop().replace(/\.[^.]+$/, '');
  img.decoding = 'async';
  img.draggable = false;
  if (sizeClass === 'card-sm') {
    img.width = 140;
    img.height = 100;
  } else if (sizeClass === 'card-lg') {
    img.width = 220;
    img.height = 160;
  } else {
    img.width = 180;
    img.height = 130;
  }
  card.appendChild(img);

  const hint = document.createElement('div');
  hint.className = 'expand-hint';
  hint.textContent = 'View';
  card.appendChild(hint);

  card.addEventListener('click', () => openLightbox(idx));
  return card;
}

function syncCardImage(card, centerX, galleryWidth) {
  const img = card.querySelector('img');
  if (!img) return;

  const cardW = card.offsetWidth || 180;
  const cardLeft = centerX - cardW / 2;
  const cardRight = centerX + cardW / 2;
  const loadMin = -WAVE_IMAGE_BUFFER;
  const loadMax = galleryWidth + WAVE_IMAGE_BUFFER * 2;
  const inLoadRange = cardRight >= loadMin && cardLeft <= loadMax;

  // This is a small performance trick:
  // load images only when they are near the visible zone,
  // unload after they leave far enough to the left.
  if (inLoadRange) {
    const needed = img.dataset.src;
    if (needed && img.dataset.loaded !== needed) {
      img.src = needed;
      img.dataset.loaded = needed;
    }
  } else if (img.dataset.loaded) {
    img.src = TRANSPARENT_PIXEL;
    delete img.dataset.loaded;
  }
}

function unloadWaveImages() {
  waveRows.forEach(row => {
    row.cards.forEach(card => {
      const img = card.querySelector('img');
      if (!img || !img.dataset.loaded) return;
      img.src = TRANSPARENT_PIXEL;
      delete img.dataset.loaded;
    });
  });
}

function measureRowCenters(track) {
  const cards = track.children;
  const centers = new Float32Array(cards.length);
  for (let i = 0; i < cards.length; i++) {
    centers[i] = cards[i].offsetLeft + cards[i].offsetWidth / 2;
  }
  const halfCount = Math.floor(cards.length / 2);
  const halfWidth = halfCount > 0
    ? centers[halfCount] - centers[0]
    : track.scrollWidth / 2;
  return { centers, cards: [...cards], halfWidth };
}

function recalcWaveMetrics() {
  if (!waveGallery) return;
  galleryW = waveGallery.clientWidth || 1;
  waveRows.forEach((row, rowIdx) => {
    let measured = measureRowCenters(row.track);

    // When the window gets wider, I keep adding copies until half-track
    // is safely wider than the visible area + buffer.
    // I do it with measurement (not pure guess math) so CSS size changes
    // don't quietly break the seamless loop.
    if (row.entries?.length && !REDUCED_MOTION && !efficiencyMode) {
      let guard = 0;
      while (
        measured.halfWidth > 0 &&
        measured.halfWidth < galleryW + WAVE_IMAGE_BUFFER * 2 &&
        guard < 8
      ) {
        appendEntryCopies(row, 2);
        measured = measureRowCenters(row.track);
        guard++;
      }
    }

    row.centers = measured.centers;
    row.cards = measured.cards;
    const prevHalf = row.halfWidth;
    row.halfWidth = measured.halfWidth;
    if (!prevHalf && row.halfWidth > 0) {
      row.scrollX = rowIdx * 48;
    }
  });
}

function stopWaveLoop() {
  if (waveRafId) {
    cancelAnimationFrame(waveRafId);
    waveRafId = 0;
  }
}

function syncWaveLoop() {
  stopWaveLoop();
  if (REDUCED_MOTION || efficiencyMode || !waveRows.length || !waveInView || document.hidden || wavePaused) return;
  waveRafId = requestAnimationFrame(animateWaveGallery);
}

function setWavePaused(paused) {
  wavePaused = paused;
  if (!wavePauseChip) return;
  wavePauseChip.classList.toggle('is-paused', paused);
  wavePauseChip.setAttribute('aria-pressed', paused ? 'true' : 'false');
  wavePauseChip.textContent = paused ? 'Paused' : 'Hold to pause';
  syncWaveLoop();
}

function clearPauseHoldTimer() {
  if (pauseHoldTimer) {
    clearTimeout(pauseHoldTimer);
    pauseHoldTimer = null;
  }
}

function setupPauseChip() {
  if (!wavePauseChip) return;

  const schedulePause = () => {
    clearPauseHoldTimer();
    pauseHoldTimer = setTimeout(() => setWavePaused(true), PAUSE_HOLD_MS);
  };

  const resume = () => {
    clearPauseHoldTimer();
    setWavePaused(false);
  };

  wavePauseChip.addEventListener('mouseenter', schedulePause);
  wavePauseChip.addEventListener('mouseleave', resume);
  wavePauseChip.addEventListener('focus', schedulePause);
  wavePauseChip.addEventListener('blur', resume);
  wavePauseChip.addEventListener('keydown', e => {
    if (e.key !== ' ') return;
    e.preventDefault();
    if (wavePaused) resume();
    else setWavePaused(true);
  });
}

const CARD_CLASS_WIDTHS = { 'card-sm': 140, 'card-md': 180, 'card-lg': 220 };
const WAVE_CARD_GAP = 20;

function makeRowEntries(subset) {
  return subset.map((src, j) => {
    const globalIdx = IMAGES.indexOf(src);
    return {
      src,
      globalIdx: globalIdx >= 0 ? globalIdx : j % IMAGES.length,
      sizeClass: CARD_SIZE_CLASSES[j % CARD_SIZE_CLASSES.length],
    };
  });
}

function entriesCopyWidth(entries) {
  return entries.reduce(
    (sum, entry) => sum + (CARD_CLASS_WIDTHS[entry.sizeClass] || 180) + WAVE_CARD_GAP,
    0
  );
}

function appendEntryCopies(row, copies) {
  for (let c = 0; c < copies; c++) {
    row.entries.forEach(entry => {
      row.track.appendChild(makeCard(entry.src, entry.globalIdx, entry.sizeClass));
    });
  }
}

function waveCopiesNeeded(entries) {
  const viewportW = waveGallery.clientWidth || window.innerWidth || 1200;
  const copyWidth = Math.max(entriesCopyWidth(entries), 1);
  const halfCopies = Math.max(1, Math.ceil((viewportW + WAVE_IMAGE_BUFFER * 2) / copyWidth));
  return halfCopies * 2;
}

function trimWaveRowsForEco() {
  waveRows.forEach(row => {
    if (!row.entries?.length) return;
    const center = Math.floor(row.entries.length / 2);
    const selectedEntries = [
      row.entries[Math.max(0, center - 1)],
      row.entries[center],
      row.entries[Math.min(row.entries.length - 1, center + 1)],
    ].filter(Boolean);

    row.track.innerHTML = '';
    selectedEntries.forEach(entry => {
      row.track.appendChild(makeCard(entry.src, entry.globalIdx, 'card-md'));
    });
    row.scrollX = 0;
  });
}

function settleEcoGallery() {
  waveRows.forEach(row => {
    row.track.style.transform = 'none';
    row.cards.forEach(card => {
      const img = card.querySelector('img');
      if (!img) return;
      const needed = img.dataset.src;
      if (needed) {
        img.src = needed;
        img.dataset.loaded = needed;
      }
      card.style.transform = 'translate3d(0,0,0)';
    });
  });
}

function applyEcoWaveTuning() {
  waveRows.forEach(row => {
    const base = row.baseSpeed ?? row.speed;
    row.baseSpeed = base;
    row.speed = efficiencyMode ? base * 0.55 : base;
  });
}

function restoreWaveRowsFromEfficiency() {
  waveRows.forEach(row => {
    if (!row.entries?.length) return;
    row.track.innerHTML = '';
    appendEntryCopies(row, waveCopiesNeeded(row.entries));
    row.scrollX = 0;
  });
}

function buildWaveGallery() {
  if (!waveGallery || !IMAGES.length) return;

  const shuffled = shuffleArray(IMAGES);

  WAVE_ROW_CONFIG.forEach((config, rowIdx) => {
    const stream = document.createElement('div');
    stream.className = 'wave-stream';

    const track = document.createElement('div');
    track.className = 'wave-track';

    const start = rowIdx * IMAGES_PER_ROW;
    const subset = shuffled.slice(start, start + IMAGES_PER_ROW);
    if (!subset.length) return;

    const entries = makeRowEntries(subset);

    stream.appendChild(track);
    waveGallery.appendChild(stream);

    const row = {
      track,
      entries,
      cards: [],
      centers: new Float32Array(0),
      scrollX: 0,
      halfWidth: 0,
      speed: config.speed,
      baseSpeed: config.speed,
      phaseOffset: config.phaseOffset,
      arcScale: config.arcScale,
    };

    appendEntryCopies(row, shouldReduceEffects() ? 1 : waveCopiesNeeded(entries));
    waveRows.push(row);
  });

  setupPauseChip();

  requestAnimationFrame(() => {
    recalcWaveMetrics();
    paintWaveGallery(false);
    syncWaveLoop();
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      recalcWaveMetrics();
      paintWaveGallery(false);
      syncWaveLoop();
    }, 150);
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) unloadWaveImages();
    syncWaveLoop();
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        waveInView = entries[0]?.isIntersecting ?? false;
        syncWaveLoop();
      },
      { rootMargin: '80px 0px' }
    );
    observer.observe(waveGallery);
  }
}

function paintWaveGallery(advance) {
  if (!waveGallery || !waveRows.length) return;
  if (efficiencyMode) {
    if (!advance) settleEcoGallery();
    return;
  }
  const eco = efficiencyMode;
  if (advance) wavePhase += eco ? 0.012 : 0.018;
  const invGalleryW = 1 / galleryW;
  const paintMin = -WAVE_IMAGE_BUFFER;
  const paintMax = galleryW + WAVE_IMAGE_BUFFER;
  const waveAmp = eco ? 6 : 10;
  const depthMul = eco ? 0.4 : 1;
  const rotMul = eco ? 0.55 : 1;

  for (let r = 0; r < waveRows.length; r++) {
    const row = waveRows[r];
    if (advance && row.halfWidth > 0) {
      row.scrollX += row.speed;
      if (row.scrollX >= row.halfWidth) row.scrollX %= row.halfWidth;
    }

    row.track.style.transform = `translate3d(${-row.scrollX}px,0,0)`;

    const { centers, cards, phaseOffset, arcScale } = row;
    for (let i = 0; i < centers.length; i++) {
      const centerX = centers[i] - row.scrollX;
      syncCardImage(cards[i], centerX, galleryW);

      if (centerX < paintMin - 220 || centerX > paintMax + 220) continue;

      // Arc note to future me:
      // t is 0..1 from left -> right.
      // This quadratic keeps the right side a little higher,
      // dips near center, then exits lower on the left.
      const t = centerX * invGalleryW;
      const arcY = (24 * t * t - 108 * t + 40) * arcScale * 0.9;
      const phase = centerX * 0.014 + wavePhase + phaseOffset + i * 0.12;
      const waveY = Math.sin(phase) * waveAmp;
      const depth = Math.cos(phase) * 16 * depthMul;
      const rotY = Math.sin(centerX * 0.01 + wavePhase + phaseOffset) * 4 * rotMul;
      const scale = 1 + Math.max(0, depth / 180);

      cards[i].style.transform =
        `translate3d(0,${arcY + waveY}px,${depth}px) rotateY(${rotY}deg) scale(${scale})`;
    }
  }
}

function animateWaveGallery() {
  waveRafId = 0;
  if (!waveGallery || !waveRows.length || !waveInView || document.hidden || wavePaused) return;

  paintWaveGallery(true);
  waveRafId = requestAnimationFrame(animateWaveGallery);
}

buildWaveGallery();

/* ── Dock navbar scroll-linked lift ─────────────────────── */
// The dock is intentionally split:
// - Mobile: keep it pinned at the bottom for clean usability.
// - Desktop: let it travel up as you scroll the hero.
const dockNav = document.getElementById('dockNav');
const landingSection = document.getElementById('landing');

function updateDockPosition() {
  if (!dockNav || !landingSection) return;

  const isMobileDock = window.matchMedia('(max-width: 900px)').matches;
  if (isMobileDock) {
    // Mobile stays pinned at the bottom; no scroll-linked lift.
    dockNav.style.setProperty('--dock-lift', '0px');
    return;
  }

  const bottomOffset = Math.max(24, dockNav.offsetHeight + 12);
  // Slightly tighter top spacing on desktop so the dock sits closer to the top.
  const topTarget = 10;
  const landingHeight = landingSection.offsetHeight;
  const scrollRange = Math.max(landingHeight - window.innerHeight * 0.5, 1);
  const progress = clamp(window.scrollY / scrollRange, 0, 1);
  const navHeight = dockNav.offsetHeight;
  const maxLift = window.innerHeight - navHeight - bottomOffset - topTarget;
  const lift = progress * Math.max(maxLift, 0);

  dockNav.style.setProperty('--dock-lift', `${-lift}px`);
}

if (dockNav && landingSection) {
  let dockTicking = false;

  const scheduleDockUpdate = () => {
    if (dockTicking) return;
    dockTicking = true;
    requestAnimationFrame(() => {
      updateDockPosition();
      dockTicking = false;
    });
  };

  window.addEventListener('scroll', scheduleDockUpdate, { passive: true });
  window.addEventListener('resize', scheduleDockUpdate);
  updateDockPosition();
}

/* ── Silly stickers ─────────────────────────────────────── */
// These are the "chaos but controlled" elements.
// I keep them playful, but cap overlap so they don't turn into visual noise.

const STICKER_GRID_COLS = 4;
const STICKER_GRID_ROWS = 4;
const STICKER_MAX_PER_CELL = 2;

function pickStickerPlacement(cellCounts) {
  const totalCells = STICKER_GRID_COLS * STICKER_GRID_ROWS;
  const order = shuffleArray([...Array(totalCells).keys()]);

  for (const cellIdx of order) {
    if ((cellCounts.get(cellIdx) || 0) < STICKER_MAX_PER_CELL) {
      return cellIdx;
    }
  }

  for (let cellIdx = 0; cellIdx < totalCells; cellIdx++) {
    if ((cellCounts.get(cellIdx) || 0) < STICKER_MAX_PER_CELL) return cellIdx;
  }

  // Fallback: if every cell is full, still place somewhere deterministic.
  return order[0] ?? 0;
}

function cellToPosition(cellIdx, slotInCell) {
  const col = cellIdx % STICKER_GRID_COLS;
  const row = Math.floor(cellIdx / STICKER_GRID_COLS);
  const cellW = 100 / STICKER_GRID_COLS;
  const cellH = 100 / STICKER_GRID_ROWS;
  const inset = 4;
  const jitterX = 6 + Math.random() * (cellW - 18);
  const baseY = slotInCell === 0 ? 10 : 52;
  const jitterY = baseY + Math.random() * (cellH * 0.35);

  return {
    left: `${inset + col * cellW + jitterX}%`,
    top: `${inset + row * cellH + jitterY}%`,
  };
}

function buildSillyStickers() {
  if (REDUCED_MOTION || stickersBuilt) return;
  const layout = [
    { section: 'landing', count: 4 },
    { section: 'about', count: 5 },
    { section: 'projects', count: 4 },
  ];
  const pool = shuffleArray(SILLY_IMAGE_FILES);
  let poolIdx = 0;

  // I rebuild stickers per section so each section can have its own vibe
  // without everything bunching in one area.
  layout.forEach(({ section, count }) => {
    const host = document.querySelector(`[data-sticker-section="${section}"]`);
    if (!host) return;

    const cellCounts = new Map();

    for (let i = 0; i < count; i++) {
      const src = pool[poolIdx % pool.length];
      poolIdx += 1;

      const cellIdx = pickStickerPlacement(cellCounts);
      const slotInCell = cellCounts.get(cellIdx) || 0;
      cellCounts.set(cellIdx, slotInCell + 1);
      const pos = cellToPosition(cellIdx, slotInCell);

      const el = document.createElement('img');
      el.className = 'aero-sticker';
      el.src = src;
      el.alt = '';
      el.loading = 'lazy';
      el.decoding = 'async';
      el.draggable = false;

      const width = 58 + Math.floor(Math.random() * 40);
      el.style.width = `${width}px`;
      el.style.left = pos.left;
      el.style.top = pos.top;
      el.style.right = '';
      el.style.bottom = '';
      el.style.setProperty('--sticker-rotate', `${-14 + Math.random() * 28}deg`);
      el.style.setProperty('--sticker-delay', `${-Math.random() * 14}s`);
      el.style.setProperty('--sticker-drift-delay', `${-Math.random() * 18}s`);

      host.appendChild(el);
    }
  });
  stickersBuilt = true;
}

/* ── Aero bubble spawner ──────────────────────────────────── */
// Tiny game loop energy:
// bubbles float, you pop them, and new ones respawn after a short delay.

const BUBBLE_MAX_COUNT = 6;
const BUBBLE_MAX_ECO = 3;
const BUBBLE_MAX_LITE = 5;
const BUBBLE_SPAWN_MS = 14000;
const BUBBLE_RESPAWN_MIN_MS = 3000;
const BUBBLE_RESPAWN_MAX_MS = 5000;

function initAeroBubbleSpawner() {
  if (REDUCED_MOTION || stopBubbleSpawner) return;

  const layer = document.getElementById('aeroBubbleLayer');
  if (!layer) return;

  let bubbles = [...layer.querySelectorAll('.aero-bubble')];

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function applyBubbleMotion(bubble) {
    const size = rand(32, 88);
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.top = `${rand(4, 86)}%`;
    bubble.style.right = '';
    bubble.style.bottom = '';
    bubble.style.left = `${rand(2, 90)}%`;
    bubble.style.animationDuration = `${rand(11, 20)}s`;
    bubble.style.animationDelay = `${-rand(0, 16)}s`;
    bubble.style.setProperty('--bubble-drift', `${rand(-20, 20)}px`);
    bubble.style.opacity = '';
    bubble.classList.remove('aero-bubble--pop');
  }

  function createBubble(isDynamic) {
    const bubble = isDynamic
      ? document.createElement('div')
      : null;
    if (bubble) {
      bubble.className = 'aero-bubble aero-bubble--dynamic';
      bubble.setAttribute('aria-hidden', 'true');
      layer.appendChild(bubble);
    }
    return bubble;
  }

  function registerBubble(bubble, fadeIn) {
    applyBubbleMotion(bubble);
    if (fadeIn) {
      bubble.style.opacity = '0';
      requestAnimationFrame(() => {
        bubble.style.opacity = '0.85';
      });
    }
    bubbles.push(bubble);
  }

  bubbles.forEach(b => applyBubbleMotion(b));

  function bubbleLimit() {
    if (document.documentElement.classList.contains('efficiency-mode')) return BUBBLE_MAX_ECO;
    if (document.documentElement.classList.contains('perf-lite')) return BUBBLE_MAX_LITE;
    return BUBBLE_MAX_COUNT;
  }

  function spawnBubble() {
    if (document.hidden) return;
    if (bubbles.length >= bubbleLimit()) return;

    const bubble = createBubble(true);
    if (!bubble) return;
    registerBubble(bubble, true);
  }

  function scheduleRespawn() {
    const delay = rand(BUBBLE_RESPAWN_MIN_MS, BUBBLE_RESPAWN_MAX_MS);
    setTimeout(() => {
      if (!document.hidden) spawnBubble();
    }, delay);
  }

  function popBubble(bubble) {
    if (!bubble || bubble.classList.contains('aero-bubble--pop')) return;

    bubble.classList.add('aero-bubble--pop');
    bubbles = bubbles.filter(b => b !== bubble);

    setTimeout(() => {
      bubble.remove();
      scheduleRespawn();
    }, 320);
  }

  // Capture-phase pointer handling fixes "some bubbles pop, some don't".
  // If direct target misses, I do a fallback bounds hit-test.
  const bubblePointerHandler = e => {
    const layerRect = layer.getBoundingClientRect();
    if (
      e.clientX < layerRect.left ||
      e.clientX > layerRect.right ||
      e.clientY < layerRect.top ||
      e.clientY > layerRect.bottom
    ) {
      return;
    }

    let bubble = e.target.closest?.('.aero-bubble') || null;
    if (!bubble) {
      bubble = bubbles.find(b => {
        const rect = b.getBoundingClientRect();
        return (
          rect.width > 0 &&
          rect.height > 0 &&
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
      }) || null;
    }

    if (!bubble || bubble.classList.contains('aero-bubble--pop')) return;
    e.preventDefault();
    popBubble(bubble);
  };

  document.addEventListener('pointerdown', bubblePointerHandler, true);

  const spawnTimer = setInterval(() => {
    if (document.hidden) return;
    spawnBubble();
  }, BUBBLE_SPAWN_MS);

  const visibilityHandler = () => {
    if (!document.hidden) spawnBubble();
  };
  document.addEventListener('visibilitychange', visibilityHandler);

  const cleanup = () => {
    clearInterval(spawnTimer);
    document.removeEventListener('pointerdown', bubblePointerHandler, true);
    document.removeEventListener('visibilitychange', visibilityHandler);
    stopBubbleSpawner = null;
  };

  stopBubbleSpawner = cleanup;
  window.addEventListener('pagehide', cleanup, { once: true });
}

/* ── Cursor effects ───────────────────────────────────────── */

function initCursorEffects() {
  if (shouldReduceEffects() || stopCursorEffects || window.matchMedia('(pointer: coarse)').matches) return;

  const layer = document.createElement('div');
  layer.id = 'cursorFx';
  layer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(layer);

  let lastTrail = 0;
  const TRAIL_MS = 33;

  function maxTrailCount() {
    return document.documentElement.classList.contains('perf-lite') ? 6 : 10;
  }

  function trimTrail() {
    while (layer.querySelectorAll('.cursor-particle').length > maxTrailCount()) {
      layer.querySelector('.cursor-particle')?.remove();
    }
  }

  const mouseMoveHandler = e => {
    const now = performance.now();
    if (now - lastTrail < TRAIL_MS) return;
    lastTrail = now;

    const particle = document.createElement('span');
    particle.className = 'cursor-particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    layer.appendChild(particle);
    requestAnimationFrame(() => particle.classList.add('is-active'));
    setTimeout(() => particle.remove(), 420);
    trimTrail();
  };
  document.addEventListener('mousemove', mouseMoveHandler, { passive: true });

  const mouseDownHandler = e => {
    if (e.button !== 0) return;

    const ring = document.createElement('span');
    ring.className = 'cursor-ring';
    ring.style.left = `${e.clientX}px`;
    ring.style.top = `${e.clientY}px`;
    layer.appendChild(ring);
    requestAnimationFrame(() => ring.classList.add('is-active'));
    setTimeout(() => ring.remove(), 480);

    for (let i = 0; i < 5; i++) {
      const burst = document.createElement('span');
      burst.className = 'cursor-burst';
      const angle = (Math.PI * 2 * i) / 5 + Math.random() * 0.4;
      burst.style.left = `${e.clientX}px`;
      burst.style.top = `${e.clientY}px`;
      burst.style.setProperty('--bx', `${Math.cos(angle) * (18 + Math.random() * 14)}px`);
      burst.style.setProperty('--by', `${Math.sin(angle) * (18 + Math.random() * 14)}px`);
      layer.appendChild(burst);
      requestAnimationFrame(() => burst.classList.add('is-active'));
      setTimeout(() => burst.remove(), 520);
    }
  };
  document.addEventListener('mousedown', mouseDownHandler);

  stopCursorEffects = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mousedown', mouseDownHandler);
    layer.remove();
    stopCursorEffects = null;
  };
}

/* ── File explorer projects ───────────────────────────────── */
// This section is basically a mini fake-OS navigator for projects.
// The data comes from PROJECTS, the UI is rendered from current explorerState.

const FOLDER_ICON = `<svg class="fe-folder-icon" viewBox="0 0 76 52" aria-hidden="true"><path d="M4 12a4 4 0 0 1 4-4h16l6 6h38a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V12z" fill="#8edcff" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"/></svg>`;

let explorerState = { view: 'root', category: null };

function getProjectsByCategory(categoryId) {
  return PROJECTS.filter(p => p.category === categoryId);
}

function getCategoryName(categoryId) {
  return PROJECT_CATEGORIES.find(c => c.id === categoryId)?.name || categoryId;
}

function buildProjectExplorer() {
  const sidebar = document.getElementById('feSidebar');
  const main = document.getElementById('feMain');
  const backBtn = document.getElementById('feBack');
  const breadcrumb = document.getElementById('feBreadcrumb');
  if (!sidebar || !main) return;

  function setExplorerState(next) {
    explorerState = next;
    renderExplorer();
  }

  function openFolderItem(el) {
    const type = el.dataset.type;
    if (type === 'category') {
      setExplorerState({ view: 'category', category: el.dataset.category });
      return;
    }
    if (type === 'project') {
      const project = PROJECTS.find(p => p.slug === el.dataset.slug);
      if (project) openProjectModal(project);
    }
  }

  function makeFolderItem({ type, label, sublabel, category, slug, previewImage }) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'fe-item';
    btn.dataset.type = type;
    if (category) btn.dataset.category = category;
    if (slug) btn.dataset.slug = slug;

    const icon = type === 'project' && previewImage
      ? `<img class="fe-item-thumb" src="${escapeHtml(previewImage)}" alt="" loading="lazy" decoding="async" />`
      : FOLDER_ICON;

    btn.innerHTML = `
      ${icon}
      <span class="fe-item-name">${escapeHtml(label)}</span>
      ${sublabel ? `<span class="fe-item-meta">${escapeHtml(sublabel)}</span>` : ''}
    `;
    btn.addEventListener('click', () => openFolderItem(btn));
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openFolderItem(btn);
      }
    });
    return btn;
  }

  function renderSidebar() {
    sidebar.innerHTML = '';
    const heading = document.createElement('p');
    heading.className = 'fe-sidebar-heading';
    heading.textContent = 'Folders';
    sidebar.appendChild(heading);

    const allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = `fe-sidebar-item${explorerState.view === 'root' ? ' is-active' : ''}`;
    allBtn.textContent = 'All Projects';
    allBtn.addEventListener('click', () => setExplorerState({ view: 'root', category: null }));
    sidebar.appendChild(allBtn);

    PROJECT_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `fe-sidebar-item${explorerState.category === cat.id ? ' is-active' : ''}`;
      btn.textContent = cat.name;
      btn.addEventListener('click', () => setExplorerState({ view: 'category', category: cat.id }));
      sidebar.appendChild(btn);
    });
  }

  function renderMain() {
    main.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'fe-grid';
    grid.setAttribute('role', 'list');

    if (explorerState.view === 'root') {
      PROJECT_CATEGORIES.forEach(cat => {
        const count = getProjectsByCategory(cat.id).length;
        grid.appendChild(makeFolderItem({
          type: 'category',
          label: cat.name,
          sublabel: `${count} item${count === 1 ? '' : 's'}`,
          category: cat.id,
        }));
      });
    } else {
      getProjectsByCategory(explorerState.category).forEach(project => {
        grid.appendChild(makeFolderItem({
          type: 'project',
          label: project.folderName || project.title,
          sublabel: project.tags?.[0] || '',
          slug: project.slug,
          previewImage: project.previewImage,
        }));
      });
    }

    main.appendChild(grid);
  }

  function renderExplorer() {
    renderSidebar();
    renderMain();

    if (backBtn) {
      backBtn.disabled = explorerState.view === 'root';
    }

    if (breadcrumb) {
      breadcrumb.textContent = explorerState.view === 'root'
        ? 'Projects'
        : `Projects › ${getCategoryName(explorerState.category)}`;
    }
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (explorerState.view === 'category') {
        setExplorerState({ view: 'root', category: null });
      }
    });
  }

  renderExplorer();
}

/* ── Footer clock + ASCII field ───────────────────────────── */

const FOOTER_GLYPHS = [
  { text: '><>', type: 'fish' },
  { text: '><)))>', type: 'fish' },
  { text: '><>', type: 'fish' },
  { text: '°', type: 'bubble' },
  { text: '○', type: 'bubble' },
  { text: '·', type: 'bubble' },
  { text: '(o)', type: 'bubble' },
  { text: '◦', type: 'bubble' },
  { text: '~', type: 'bubble' },
  { text: '><>', type: 'fish' },
  { text: '<><', type: 'fish' },
  { text: '○', type: 'bubble' },
  { text: '· ·', type: 'bubble' },
  { text: '><>', type: 'fish' },
  { text: '° ○', type: 'bubble' },
  { text: '><)))>>', type: 'fish' },
  { text: '·', type: 'bubble' },
  { text: '( o )', type: 'bubble' },
  { text: '><>', type: 'fish' },
  { text: '○', type: 'bubble' },
  { text: '°', type: 'bubble' },
  { text: '<><', type: 'fish' },
];

function initFooterClock() {
  const el = document.getElementById('footerClock');
  if (!el) return;

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  function tick() {
    const now = new Date();
    el.textContent = formatter.format(now);
    el.dateTime = now.toISOString();
  }

  tick();
  setInterval(tick, 1000);
}

function initFooterAscii() {
  const host = document.getElementById('footerAscii');
  if (!host || REDUCED_MOTION || footerAsciiBuilt) return;

  const count = document.documentElement.classList.contains('perf-lite') ? 10 : 12;
  const glyphs = shuffleArray(FOOTER_GLYPHS).slice(0, count);

  glyphs.forEach((glyph, i) => {
    const el = document.createElement('span');
    el.className = `footer-glyph footer-glyph--${glyph.type}`;
    el.textContent = glyph.text;
    el.style.left = `${4 + Math.random() * 88}%`;
    el.style.top = `${8 + Math.random() * 72}%`;

    if (!REDUCED_MOTION) {
      el.style.setProperty('--glyph-duration', `${11 + Math.random() * 10}s`);
      el.style.setProperty('--glyph-delay', `${-Math.random() * 14}s`);
    } else {
      el.style.animation = 'none';
    }

    host.appendChild(el);
  });
  footerAsciiBuilt = true;
}

function isPerfLiteDevice() {
  return window.matchMedia('(max-width: 900px)').matches
    || (navigator.deviceMemory && navigator.deviceMemory <= 4)
    || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
}

function applyPerfLiteClass() {
  const perfLite = !efficiencyMode && isPerfLiteDevice();
  document.documentElement.classList.toggle('perf-lite', perfLite);
}

function initSectionIdleObservers() {
  if (!('IntersectionObserver' in window)) return;

  const landing = document.getElementById('landing');
  if (landing) {
    new IntersectionObserver(([entry]) => {
      document.documentElement.classList.toggle('landing-idle', !entry.isIntersecting);
    }, { threshold: 0.08 }).observe(landing);
  }

  document.querySelectorAll('.about, .projects-section, .site-footer').forEach(section => {
    new IntersectionObserver(([entry]) => {
      section.classList.toggle('section-idle', !entry.isIntersecting);
    }, { threshold: 0.06, rootMargin: '100px 0px' }).observe(section);
  });
}

function updateEfficiencyToggleUi() {
  if (!efficiencyToggle) return;
  efficiencyToggle.setAttribute('aria-pressed', efficiencyMode ? 'true' : 'false');
  efficiencyToggle.title = efficiencyMode
    ? 'Eco Saver on — lighter motion, keeps the vibe'
    : 'Eco Saver off — full motion';
}

function applyEfficiencyMode() {
  document.documentElement.classList.toggle('efficiency-mode', efficiencyMode);
  applyPerfLiteClass();
  updateEfficiencyToggleUi();

  if (wavePauseChip) {
    wavePauseChip.hidden = efficiencyMode;
  }

  if (efficiencyMode) {
    stopWaveLoop();
    setWavePaused(false);
    trimWaveRowsForEco();
    recalcWaveMetrics();
    settleEcoGallery();

    if (stopCursorEffects) stopCursorEffects();

    const layer = document.getElementById('aeroBubbleLayer');
    if (layer) {
      const all = [...layer.querySelectorAll('.aero-bubble')];
      all.slice(BUBBLE_MAX_ECO).forEach(b => b.remove());
    }
  } else {
    applyEcoWaveTuning();
    restoreWaveRowsFromEfficiency();
    recalcWaveMetrics();
    paintWaveGallery(false);
    syncWaveLoop();

    if (!stopCursorEffects) initCursorEffects();
  }
}

if (efficiencyToggle) {
  efficiencyToggle.addEventListener('click', () => {
    efficiencyMode = !efficiencyMode;
    saveEfficiencyPreference(efficiencyMode);
    applyEfficiencyMode();
  });
}

efficiencyMode = loadEfficiencyPreference();
applyPerfLiteClass();
buildSillyStickers();
buildProjectExplorer();
initAeroBubbleSpawner();
initCursorEffects();
initFooterClock();
initFooterAscii();
initSectionIdleObservers();
applyEfficiencyMode();
window.addEventListener('resize', applyPerfLiteClass, { passive: true });

/* ── Projects (legacy card grid) ──────────────────────────── */

function buildProjects(container) {
  if (!container) return;
  PROJECTS.forEach(project => {
    container.appendChild(makeProjectCard(project));
  });
}

function makeProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';

  const preview = document.createElement('div');
  preview.className = 'project-preview';

  if (project.previewImage) {
    const img = document.createElement('img');
    img.src = project.previewImage;
    img.alt = `${project.title} preview`;
    img.loading = 'lazy';
    preview.appendChild(img);
  }

  const label = document.createElement('span');
  label.className = 'project-preview-label';
  preview.appendChild(label);
  card.appendChild(preview);

  const body = document.createElement('div');
  body.className = 'project-body';

  const title = document.createElement('h3');
  title.className = 'project-title';
  title.textContent = project.title;
  body.appendChild(title);

  const summary = document.createElement('p');
  summary.className = 'project-summary';
  summary.textContent = project.summary;
  body.appendChild(summary);

  const tags = document.createElement('div');
  tags.className = 'project-tags';
  tags.setAttribute('aria-label', 'Technologies used');
  project.tags.forEach(tag => {
    const chip = document.createElement('span');
    chip.className = 'project-tag';
    chip.textContent = tag;
    tags.appendChild(chip);
  });
  body.appendChild(tags);

  const actions = document.createElement('div');
  actions.className = 'project-actions';

  const demoBtn = document.createElement('a');
  demoBtn.className = 'btn btn-primary btn-sm';
  demoBtn.href = project.demo;
  demoBtn.target = '_blank';
  demoBtn.rel = 'noopener noreferrer';
  demoBtn.textContent = 'Live demo';
  actions.appendChild(demoBtn);

  const detailBtn = document.createElement('button');
  detailBtn.className = 'btn btn-outline btn-sm';
  detailBtn.type = 'button';
  detailBtn.textContent = 'View detail';
  detailBtn.addEventListener('click', () => openProjectModal(project));
  actions.appendChild(detailBtn);

  const repoBtn = document.createElement('a');
  repoBtn.className = 'btn btn-outline btn-sm';
  repoBtn.href = project.repo;
  repoBtn.target = '_blank';
  repoBtn.rel = 'noopener noreferrer';
  repoBtn.textContent = 'Code';
  actions.appendChild(repoBtn);

  body.appendChild(actions);
  card.appendChild(body);
  return card;
}

/* ── Project detail modal ───────────────────────────────── */
// Modal rendering is data-driven:
// one project object in, full case-study panel out.
const projectModal = document.getElementById('projectModal');
const projectModalContent = document.getElementById('projectModalContent');
const projectModalClose = document.getElementById('projectModalClose');
const projectModalBackdrop = document.getElementById('projectModalBackdrop');
let activeProjectSlug = null;

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderProjectImage(image) {
  if (!image || !image.src) return '';
  const caption = image.caption
    ? `<figcaption>${escapeHtml(image.caption)}</figcaption>`
    : '';
  return `
    <figure class="project-figure">
      <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || image.caption || '')}" loading="lazy" />
      ${caption}
    </figure>
  `;
}

function renderProjectDetail(project) {
  const d = project.detail;
  if (!d) return '';

  const metaHtml = d.meta.map(item => `
    <div class="case-meta-item">
      <span class="case-meta-label">${escapeHtml(item.label)}</span>
      <span>${escapeHtml(item.value)}</span>
    </div>
  `).join('');

  const tagsHtml = project.tags.map(tag =>
    `<span class="skill-chip">${escapeHtml(tag)}</span>`
  ).join('');

  const sectionsHtml = d.sections.map(section => {
    const paragraphs = (section.paragraphs || [])
      .map(p => `<p>${escapeHtml(p)}</p>`)
      .join('');
    const list = section.list
      ? `<ul class="case-list">${section.list.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
      : '';
    const image = renderProjectImage(section.image);
    return `
      <section class="case-section">
        <h2>${escapeHtml(section.heading)}</h2>
        ${paragraphs}
        ${image}
        ${list}
      </section>
    `;
  }).join('');

  const heroHtml = renderProjectImage(d.heroImage);

  const talkingHtml = d.talkingPoints && d.talkingPoints.length
    ? `
      <section class="case-section case-notes">
        <h2>Interview talking points</h2>
        ${d.talkingPoints.map(point => `
          <details class="case-details">
            <summary>${escapeHtml(point.title)}</summary>
            <p>${escapeHtml(point.body)}</p>
          </details>
        `).join('')}
      </section>
    `
    : '';

  const eyebrowHtml = d.eyebrow
    ? `<p class="case-eyebrow">${escapeHtml(d.eyebrow)}</p>`
    : '';

  return `
    <article class="case-article">
      ${eyebrowHtml}
      <h1 class="case-title" id="projectModalTitle">${escapeHtml(project.title)}</h1>
      <p class="case-tagline">${escapeHtml(d.tagline)}</p>
      <p class="case-lede">${escapeHtml(d.lede)}</p>
      <div class="case-meta">${metaHtml}</div>
      <div class="tag-row" aria-label="Technologies used">${tagsHtml}</div>
      ${heroHtml}
      ${sectionsHtml}
      ${talkingHtml}
      <div class="case-cta">
        ${project.demo ? `<a class="btn btn-primary" href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">View live demo</a>` : ''}
        ${project.repo ? `<a class="btn btn-outline" href="${escapeHtml(project.repo)}" target="_blank" rel="noopener noreferrer">Source code</a>` : ''}
      </div>
    </article>
  `;
}

function openProjectModal(project) {
  if (!projectModal || !projectModalContent) return;
  activeProjectSlug = project.slug;
  projectModalContent.innerHTML = renderProjectDetail(project);
  projectModal.hidden = false;
  projectModal.classList.add('open');
  document.body.classList.add('modal-open');
  projectModalClose.focus();
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove('open');
  projectModal.hidden = true;
  document.body.classList.remove('modal-open');
  activeProjectSlug = null;
  projectModalContent.innerHTML = '';
}

if (projectModal && projectModalClose && projectModalBackdrop) {
  projectModalClose.addEventListener('click', closeProjectModal);
  projectModalBackdrop.addEventListener('click', closeProjectModal);
}

/* ── Lightbox ───────────────────────────────────────────── */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');

function openLightbox(idx) {
  if (!lightbox || !lbImg || !lbCounter) return;
  lbIndex = idx;
  updateLb();
  lightbox.classList.add('open');
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  if (lbImg) {
    lbImg.src = TRANSPARENT_PIXEL;
    lbImg.removeAttribute('src');
  }
}

function updateLb() {
  if (!lbImg || !lbCounter) return;
  lbImg.style.animation = 'none';
  lbImg.offsetHeight;
  lbImg.style.animation = '';
  lbImg.src = IMAGES[lbIndex];
  lbImg.alt = IMAGES[lbIndex].split('/').pop();
  lbCounter.textContent = `${lbIndex + 1} / ${IMAGES.length}`;
}

if (lightbox && lbImg && lbCounter) {
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
}

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (projectModal && projectModal.classList.contains('open')) {
    closeProjectModal();
    return;
  }
});
