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
    slug: 'letin',
    title: 'Letin',
    label: 'An opportunities bulletin board for NYC folks to find opportunities and break information barriers or even the digital divide.',
    summary:
      'Letin is a student-facing opportunity board that helps teens find internships, events, deadlines, and other resources all in one place; Based on the premise that access to information should not be limited by one\'s connections or geography.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Leaflet'],
    demo: 'https://farhanskamal.github.io/Letin/',
    repo: 'https://github.com/farhanskamal/Letin',
    previewImage: 'gallery/letin/LandingPage.png',
    detail: {
      heroImage: {
        src: 'gallery/letin/LandingPage.png',
        alt: 'Letin landing page with board header, mission callout, and search bar',
        caption: 'Landing page — board, mission callout, and search',
      },
      tagline: 'Opportunities bulletin board for NYC folks to break information barriers',
      lede:
        'Letin is a student-facing opportunity board that helps teens and adults to find internships, events, deadlines, and other resources all in one place; Based on the premise that access to information should not be limited by one\'s connections or geography.',
      meta: [
        { label: 'Tools', value: 'Figma, Claude, Cursor' },
        { label: 'Stack', value: 'React, TypeScript, Vite, Tailwind CSS' },
        { label: 'Scope', value: 'Functional prototype with 18 real NYC listings' },
      ],
      sections: [
        {
          heading: 'Problem',
          paragraphs: [
            'Information about opportunities for NYC students and adults is spread out in school emails, social media posts, library websites, and government pages. People with less established networks or counselors with limited time to communicate may miss out on great opportunities because they don\'t even know about them.',
            'Similar to a theme that we are exploring in the book Fences by August Wilson, We are trying to break barriers, that led to people like Troy Maxson who was prevented from pursuing opportunities such as professional baseball, not due to any lack of skill, but because of structural barriers. The same principle applies here to information barriers for youth and older generations.',
          ],
        },
        {
          heading: 'Research',
          paragraphs: [
            'In researching current channels for obtaining opportunities for young and old people, I looked at Morning Bell newsletters (NYCPS), library programming for teens, SYEP opportunities, and networking through extracurricular activities and friends. The common thread was the fact that the information was out there but inconsistent, difficult to find post-deadline, and scattered.',
            'In addition, I considered the cognitive benefits of a bulletin interface style, compared to long e-mail chains or social media feeds. Students need information that they can quickly scan for relevance, with deadlines and a means to favorite posts without having to make an account first.',
          ],
        },
        {
          heading: 'Solution',
          paragraphs: [
            'Letin consolidates the hunt for opportunities into one place using a searchable bulletin board. Users can filter opportunities by category, save posts to their favorites, see where the listed programs take place via the map, and create new posts. The admin panel provides CRUD operations and ability to pin important posts and use a text editor to style different words.',
            'There are 18 real NYC programs included in the app: All Star Code, Brooklyn Public Library Teen Techies, NYC SYEP, The Met internship, Khan Academy, Common App, and many others with links included to each resource with honest notes about deadlines.',
          ],
        },
        {
          heading: 'Features',
          list: [
            'Board with search, category tags, pinned posts, and favorites',
            'Post detail with upcoming deadline countdown badge',
            'Map displaying locations of NYC programs',
            'Community posting flow to add user-generated content',
            'Admin dashboard with CRUD, pin/unpin posts, TipTap rich text editing',
            'Mission & Impact pages that support capstone narrative',
            'Accessibility: skip navigation link & reduced motion',
          ],
        },
        {
          heading: 'Design',
          paragraphs: [
            'I created the visual identity in Figma: purple #C698FF, yellow #FFDE4C, and blue #36B5FF, with fonts Iosevka & Istok Web, balancing warmth and clarity to ensure that listings are inviting without being institutional.',
            'Prioritizing information architecture meant designing a hierarchy of components — category tags, countdown deadlines, pinned posts to help students scan for relevant information easily. Location map is included for in-person programs.',
          ],
          image: {
            src: 'gallery/letin/StyleGuideFigma.png',
            alt: 'Letin Figma style guide with logo, tagline, fonts, and color palette',
            caption: 'Figma style guide — logo, typography, and color palette',
          },
        },
        {
          heading: 'Technical considerations',
          paragraphs: [
            'I used the Vite development environment, with React as the main framework and Typescript for type safety. Using React Router and Tailwind CSS, I built an app that does not use a server (intentionally no Next.js).',
            'Post, bookmark, and verified user state is managed using React Context, whereas CRUD operations are performed over seeded data in session storage. This made the app self-contained enough to launch it on GitHub Pages with real-time functionality but without a server.',
            'Reusability was another technical goal, and the components I used include: PostCard, MapView, FeaturedSection, AppShell, and BarrierCallout.',
            'Deploying the app to GitHub Pages requires configuring the base path, which took some additional effort because of router settings.',
          ],
        },
        {
          heading: 'Challenges',
          paragraphs: [
            'Deciding how much persistence to implement with a lack of a backend proved to be a tricky choice. I needed true CRDU behavior for the admin panel and favorites; however, a full API was beyond the scope of the project. Storing state in session storage based on seeded data was the solution.',
            'In addition, base-path routing for GitHub Pages required configuring base URL in Vite and basename in React Router.',
          ],
        },
        {
          heading: 'Outcome',
          paragraphs: [
            'Letin is a functional prototype that delivers the full experience, from connecting to real listings, tracking engagement (localStorage counters) and impact. It proves that I can take a social problem defined by research, design, develop, and deploy a solution. I have also reached out to a Non-profit organization about it and got their feedback on the app.',
            'In a production app, there would be an actual API/database, listings would be automatically updated and there would be partnerships with schools and organizations. However, a prototype clearly illustrates the user experience and information architecture.',
          ],
          image: {
            src: 'gallery/letin/ReachedOutToPerson.png',
            alt: 'Email exchange with Urban Arts Game Academy responding positively to Letin',
            caption: 'Outreach to Urban Arts - Game Academy',
          },
        },
        {
          heading: 'Next steps',
          list: [
            'Create a back-end RESTful API for verified submissions and automatic deadline verification',
            'Partnerships with libraries/schools for curated and trusted listings',
            'Digest via email/push notifications for categories/favorite deadlines',
            'Add a algorithm that can personalize the board for each user so they can find the right opportunities for themselves.'
          ],
        },
      ],
    },
  },
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
if (track) {
  [...SKILLS, ...SKILLS].forEach(s => {
    const chip = document.createElement('span');
    chip.className = 'skill-chip';
    chip.textContent = s;
    track.appendChild(chip);
  });
}

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

if (colA && colB) buildGallery();

/* ── Projects panel ─────────────────────────────────────── */
const projectsList = document.getElementById('projectsList');
const tabGallery = document.getElementById('tabGallery');
const tabProjects = document.getElementById('tabProjects');
const panelGallery = document.getElementById('panelGallery');
const panelProjects = document.getElementById('panelProjects');

function buildProjects() {
  if (!projectsList) return;
  PROJECTS.forEach(project => {
    projectsList.appendChild(makeProjectCard(project));
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

function switchPanel(name) {
  const isGallery = name === 'gallery';
  const rightPanel = document.querySelector('.right');

  tabGallery.classList.toggle('active', isGallery);
  tabProjects.classList.toggle('active', !isGallery);
  tabGallery.setAttribute('aria-selected', isGallery);
  tabProjects.setAttribute('aria-selected', !isGallery);

  panelGallery.classList.toggle('active', isGallery);
  panelProjects.classList.toggle('active', !isGallery);
  panelGallery.hidden = !isGallery;
  panelProjects.hidden = isGallery;

  if (rightPanel) rightPanel.classList.toggle('right--projects', !isGallery);
}

/* ── Project detail modal ───────────────────────────────── */
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
        <a class="btn btn-primary" href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">View live demo</a>
        <a class="btn btn-outline" href="${escapeHtml(project.repo)}" target="_blank" rel="noopener noreferrer">Source code</a>
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

if (tabGallery && tabProjects) {
  buildProjects();

  tabGallery.addEventListener('click', () => switchPanel('gallery'));
  tabProjects.addEventListener('click', () => switchPanel('projects'));
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
