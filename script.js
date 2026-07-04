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
    summary: 'A modern chat app concept similar to Discord with a landing page, sign-up flow, and glossy UI exploration.',
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
            'The project demonstrates end-to-end web design skills; from layout and typography to deployable front-end pages that communicate a product vision.',
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
      lede: 'LovePets Animal Shelter is a static web design project built as a complete small-business site with a home, about, adopt, volunteer, and contact pages with cohesive branding.',
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
            caption: 'Buddy one of the available pets for adoption',
          },
        },
        {
          heading: 'More friends',
          image: {
            src: 'gallery/projects/lovepets-cpet.jpg',
            alt: 'Luna the cat adoption pending',
            caption: "Luna a pet who's adoption pending",
          },
        },
        {
          heading: 'Thumper',
          image: {
            src: 'gallery/projects/lovepets-rpet.jpg',
            alt: 'Thumper the rabbit available for adoption',
            caption: 'Thumper who is available to be adopted',
          },
        },
        {
          heading: 'Success stories',
          image: {
            src: 'gallery/projects/lovepets-hpet.jpg',
            alt: 'Max the adopted pet success story',
            caption: 'Success story about Max',
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
      lede: 'Verdant Clicker is a game design prototype where players grow a greener world through clicks, upgrades, and environmental messaging; built in Code.org App Lab for rapid iteration.',
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
            'A clicker game centered on sustainability themes where Players invest actions into upgrades that reflect eco-friendly choices. Built as a prototype to test mechanics before a fuller Unity version.',
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
    slug: 'apartment-19',
    title: 'Apartment 19',
    folderName: 'Apartment 19',
    category: 'game-design',
    summary: 'Horror interactive visual novel — Lead Narrative, QA, and game trailer for Spooky Soiree Inc.',
    tags: ['Game Design', 'Narrative Design', 'Unity', 'Horror'],
    previewImage: 'assets/experiences/apartment-19-game.jpg',
    links: [
      { label: 'Play on itch.io', url: 'https://jannatb.itch.io/apartment-19' },
      { label: 'Game trailer', url: 'https://www.youtube.com/watch?v=gxmgIPEZkus' },
      { label: 'Online book', url: 'https://docs.google.com/document/d/1Bf1pMUhDvvPU84pr3LjVSEXqMffGqvtYxySKr25fZ-A/edit?tab=t.5ot3ezuh6h51' },
    ],
    detail: {
      tagline: 'Horror point-and-click visual novel puzzle game',
      lede: 'Apartment 19 is a horror-based interactive point-and-click visual novel where you start a new life in an unordinary apartment complex — until a housewarming party spirals into insanity.',
      meta: [
        { label: 'Category', value: 'Game Design' },
        { label: 'Role', value: 'Lead Narrative, QA, Trailer' },
        { label: 'Studio', value: 'Spooky Soiree Inc. / Urban Arts' },
      ],
      heroImage: {
        src: 'assets/experiences/apartment-19-game.jpg',
        alt: 'Apartment 19 game cover',
        caption: 'Game cover',
      },
      sections: [
        {
          heading: 'About the game',
          paragraphs: [
            'You move into a strange apartment complex and host a housewarming party for your neighbors. Everything seems fine until a certain event occurs, spiraling the night into insanity.',
            'The game includes six personalized, voiced characters — most voiced by the team. Credits to Albe for voicing Albe!',
          ],
        },
        {
          heading: 'My contributions',
          paragraphs: [
            'As Lead Narrative I developed the story and dialogue, planned how the game starts and where it ends, and kept narrative aligned across departments.',
            'I also QA tested the game to ensure it could be started and completed, and produced the game trailer.',
          ],
          image: {
            src: 'assets/experiences/apartment-19-trailer.jpg',
            alt: 'Apartment 19 trailer',
            caption: 'Game trailer still',
          },
        },
        {
          heading: 'Story bible',
          image: {
            src: 'assets/experiences/apartment-19-book.jpg',
            alt: 'Apartment 19 The Book Online',
            caption: 'Apartment 19 — The Book Online',
          },
        },
      ],
    },
  },
  {
    slug: 'the-lurking-hour',
    title: 'The Lurking Hour',
    folderName: 'The Lurking Hour',
    category: 'game-design',
    summary: 'FNAF-style horror survival game — programmed Phase 1 office survival with cameras, power, and monsters.',
    tags: ['Game Design', 'Godot', 'Horror', 'Programming'],
    previewImage: 'assets/experiences/TheLurkingHourBannerProject.png',
    links: [
      { label: 'Play on itch.io', url: 'https://dudestarneon.itch.io/thelurkinghour' },
      { label: 'Presentation', url: 'https://docs.google.com/presentation/d/1BBkYUrbgPRevFfBi3SgOvvGY8jetzrJ6uTpmlRk7WKA/edit?slide=id.g36e65fe57cb_0_0' },
    ],
    detail: {
      tagline: 'Survive three nights in a haunted facility',
      lede: 'The Lurking Hour is an FNAF-style horror game where you are trapped inside a facility and must escape over three nights. Gameplay splits into two phases: office survival and a generator escape run.',
      meta: [
        { label: 'Category', value: 'Game Design' },
        { label: 'Engine', value: 'Godot' },
        { label: 'My role', value: 'Phase 1 programming' },
      ],
      heroImage: {
        src: 'assets/experiences/TheLurkingHourBannerProject.png',
        alt: 'The Lurking Hour banner',
        caption: 'The Lurking Hour',
      },
      sections: [
        {
          heading: 'Phase 1 — Office',
          paragraphs: [
            'Monitor cameras to track shadow monsters attacking your office. Survive two minutes with limited power — cameras and flash drain energy. Four monsters total: one uses vents (do not flash when inside), one is invisible without night vision, and two approach manually.',
            'Controls: 1/Q to open camera; mouse click to flash, use night vision, and interact.',
          ],
          image: {
            src: 'assets/experiences/TheLurkingHourMainOfficepng.png',
            alt: 'The Lurking Hour office',
            caption: 'Main office — Phase 1',
          },
        },
        {
          heading: 'Phase 2 — Escape',
          paragraphs: [
            'Run from a monster, find a generator, and unlock the door to escape. WASD to move. Complete both phases to finish a night.',
            'Windows and Linux ports available; Mac via Wine.',
          ],
          image: {
            src: 'assets/experiences/TheLurkingHourWhatPhase2LookedLike.png',
            alt: 'Phase 2 gameplay',
            caption: 'Phase 2 escape sequence',
          },
        },
        {
          heading: 'Credits',
          paragraphs: [
            'Farhan Kamal — Phase 1 programming (FNAF-style office survival with moving monsters).',
            'Nicholas Gormanly — Phase 2. David Nitti — Sound + Menus.',
          ],
          image: {
            src: 'assets/experiences/TheLurkingHourCameraOpenPhase1.png',
            alt: 'Camera monitor view',
            caption: 'Camera monitor open',
          },
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
    slug: 'qpl-signage',
    title: 'Queens Public Library Signage',
    folderName: 'QPL Signage Redesign',
    category: 'graphic-design',
    summary: 'Redesigned South Hollis branch signage in Canva to match Queens Public Library branding.',
    tags: ['Graphic Design', 'Canva', 'Branding', 'Signage'],
    previewImage: 'assets/experiences/qpl-signage-after.jpg',
    links: [
      { label: 'Canva design file', url: 'https://www.canva.com/design/DAHOB1ebVyA/ee-BIzudjyUBS3uHnT23ig/edit' },
    ],
    detail: {
      tagline: 'Branch signage aligned with library-wide branding',
      lede: 'I took the initiative to redesign the entire South Hollis branch library signage so it better matches the branding used across other Queens Public Library branches.',
      meta: [
        { label: 'Category', value: 'Graphic Design' },
        { label: 'Tools', value: 'Canva' },
        { label: 'Scope', value: 'Full branch signage system' },
      ],
      heroImage: {
        src: 'assets/experiences/qpl-signage-after.jpg',
        alt: 'Library signage after redesign',
        caption: 'After — updated signage',
      },
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'While volunteering at Queens Public Library, I noticed the South Hollis branch signage did not match the cohesive look used at other branches. I redesigned the full signage set in Canva to align with the library brand.',
          ],
        },
        {
          heading: 'Before & after',
          paragraphs: ['Side-by-side comparison of legacy signage versus the updated designs.'],
          image: {
            src: 'assets/experiences/qpl-signage-before.jpg',
            alt: 'Library signage before redesign',
            caption: 'Before — original signage',
          },
        },
        {
          heading: 'Outcome',
          image: {
            src: 'assets/experiences/qpl-signage-after.jpg',
            alt: 'Library signage after redesign',
            caption: 'After — redesigned signage',
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
    summary: 'Youth career-confidence app — financial literacy, opportunities, and hiring — Emoti-Con Overall Excellence winner.',
    tags: ['UX/UI', 'Figma', 'Mobile Design', 'Research'],
    demo: 'https://emoticon.mouse.org/2025/empow',
    previewImage: 'gallery/projects/empow-cover.png',
    links: [
      { label: 'Presentation', url: 'https://www.figma.com/deck/BL18dOAVVvfMgPPMNWzq5a/EmPow---EMOTICON?node-id=1-264&t=7e6QWVVRvuRJ97TB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' },
      { label: 'Prototype', url: 'https://www.figma.com/proto/vfqVa6D3cj3NNf9Ec5QSi3/EmPow-App?node-id=86-1756&p=f&t=GpjWrMP81Pna683A-0&scaling=scale-down&content-scaling=fixed&page-id=3%3A3&starting-point-node-id=86%3A1756' },
      { label: 'Team board', url: 'https://www.figma.com/board/FgFZyrqVBQFjLXza9DrQIy/EmPow-%7C-Fig-Jam?node-id=0-1&t=ius44SmDlVVcVUVN-1' },
      { label: 'Main design file', url: 'https://www.figma.com/design/vfqVa6D3cj3NNf9Ec5QSi3/EmPow-App?node-id=3-3&t=GpjWrMP81Pna683A-1' },
    ],
    detail: {
      tagline: 'Empowering youth to build careers with confidence',
      lede: 'EmPow helps young people find confidence to start building careers through financial literacy and opportunity discovery — born from a problem students talk about but rarely see solved.',
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
          heading: 'About this project',
          paragraphs: [
            'EmPow was created to empower youth in finding confidence to start building careers through learning about financial literacy and finding opportunities. We wanted something unique — in our lives this is talked about a lot between students but nothing ever done to combat the issue.',
            'Before designing, we studied competitors, surveyed students on what mattered most, and gauged our audience\'s general knowledge. Then we moved from paper prototype to wireframe to a full app with three sections: finding opportunities, understanding finance, and helping businesses find employees.',
            'The app starts on a login page where users enter their info and choose to find work, learn finance, or — if they\'re a business owner — find employees.',
          ],
        },
        {
          heading: 'Process',
          list: [
            'Competitor research and student surveys',
            'Paper prototype → wireframes → high-fidelity Figma',
            'Three core flows: opportunities, finance, employer hiring',
            'Live presentation at Emoti-Con 2025',
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
            'EmPow earned Overall Excellence at Emoti-Con against 100+ competing projects — a full UX process from research through polished UI.',
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

/* ═══════════════════════════════════════════════════════════
   ✏️  EXPERIENCES — career timeline entries
═══════════════════════════════════════════════════════════ */
const EXPERIENCES = [
  {
    org: 'Urban Arts',
    orgSlug: 'urban-arts',
    logo: 'assets/experiences/urban_arts_partnership_logo.jpg',
    roles: [
      {
        id: 'urban-arts-founders-lab',
        title: 'Founders Lab Student',
        start: '2026-07',
        end: '2026-07',
        current: true,
        location: 'New York City Metropolitan Area',
        modality: 'Hybrid',
        summary: 'Continuing at Urban Arts through the Founders Lab program — building entrepreneurial and creative skills alongside peers.',
        skills: ['Entrepreneurship', 'Game Design', 'Leadership', 'Communication', 'Collaboration'],
      },
      {
        id: 'urban-arts-lead-narrative',
        title: 'Lead Narrative for Spooky Soiree Inc.',
        start: '2025-12',
        end: '2026-06',
        location: 'New York City Metropolitan Area',
        modality: 'Hybrid',
        summary: 'I lead the Narrative team for Spooky Soiree Inc. I write the story for Apartment 19, manage dialogue and scripting, and plan how the narrative opens and resolves. I work closely with music, code, art, and other departments so the story stays consistent and everyone has what they need to ship.',
        skills: ['Game Design', 'Leadership', 'Narrative Design', 'Dialogue Writing', 'Scripting', 'Unity', 'Communication', 'Project Planning'],
        media: [
          { src: 'assets/experiences/apartment-19-trailer.jpg', alt: 'Apartment 19 main trailer' },
          { src: 'assets/experiences/apartment-19-game.jpg', alt: 'Apartment 19 Game cover' },
          { src: 'assets/experiences/apartment-19-book.jpg', alt: 'Apartment 19 The Book Online' },
        ],
      },
      {
        id: 'urban-arts-studio-capstone',
        title: 'Studio Capstone Student',
        start: '2025-10',
        end: '2026-06',
        location: 'United States',
        modality: 'Hybrid',
        summary: 'Working with a team to develop a studio-level game demo from concept through production.',
        skills: ['Unity', 'Game Design', 'Communication', 'Leadership', 'Team Collaboration'],
      },
      {
        id: 'urban-arts-video-editor',
        title: 'Volunteer Video Editor',
        start: '2025-08',
        end: '2026-06',
        partTime: true,
        location: 'United States',
        modality: 'Hybrid',
        summary: 'Video producer and editor for the Urban Arts marketing channel, creating content that has reached 5,000+ views.',
        skills: ['Video Editing', 'Project Planning', 'Communication', 'Marketing', 'Content Creation'],
        media: [
          { src: 'assets/experiences/urban-arts-team-intro.jpg', alt: 'Urban Arts team intro video' },
          { src: 'assets/experiences/urban-arts-office-tour.jpg', alt: 'Urban Arts office tour' },
        ],
      },
      {
        id: 'urban-arts-seniorxp',
        title: 'SeniorXP Fellowship Student',
        start: '2025-07',
        end: '2025-08',
        location: 'New York City Metropolitan Area',
        modality: 'On-site',
        summary: 'Summer fellowship focused on professional game-industry skills and mentorship in NYC.',
        skills: ['Communication', 'Video Games', 'Professional Development'],
      },
      {
        id: 'urban-arts-3d-game-dev',
        title: '3D Game Development Student',
        start: '2024-06',
        end: '2025-06',
        location: 'New York City Metropolitan Area',
        modality: 'Remote',
        summary: 'Learned to develop games in 3D with Unity and collaborated with peers on a full game project.',
        skills: ['Game Design', 'Leadership', 'Unity', '3D Development', 'C#', 'Team Collaboration'],
      },
      {
        id: 'urban-arts-2d-game-dev',
        title: '2D Game Development Student',
        start: '2023-11',
        end: '2024-06',
        location: 'United States',
        modality: 'Remote',
        summary: 'Started learning game design and development fundamentals, building games with Unity and industry tools.',
        skills: ['Game Design', 'Unity', '2D Development', 'C#', 'Prototyping'],
      },
    ],
  },
  {
    org: 'America On Tech',
    orgSlug: 'america-on-tech',
    logo: 'assets/experiences/america_on_tech_logo.jpg',
    roles: [
      {
        id: 'aot-pm-product',
        title: 'Project Manager | Product Management',
        start: '2026-03',
        end: '2026-06',
        location: 'United States',
        modality: 'Hybrid',
        summary: 'Led product management workstreams — scoping features, coordinating deliverables, and aligning stakeholders on web and tech initiatives.',
        skills: ['Web Development', 'Leadership', 'Product Management', 'Project Planning', 'Communication'],
      },
      {
        id: 'aot-student',
        title: 'Student',
        start: '2025-09',
        end: '2026-06',
        location: 'United States',
        modality: 'Hybrid',
        summary: 'Studied web development and professional tech skills through America On Tech programs.',
        skills: ['Web Development', 'Communication', 'HTML', 'CSS', 'JavaScript'],
      },
      {
        id: 'aot-pm-web',
        title: 'Project Manager | Web Development',
        start: '2025-11',
        end: '2025-12',
        location: 'New York City Metropolitan Area',
        modality: 'Hybrid',
        summary: 'Managed web development projects — timelines, task breakdowns, and team coordination for deliverable-focused sprints.',
        skills: ['Web Development', 'Leadership', 'Project Planning', 'HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
  {
    org: 'The Animation Project, Inc.',
    orgSlug: 'animation-project',
    logo: 'assets/experiences/the_animation_project_inc__logo.jpg',
    roles: [
      {
        id: 'tap-animated-storytelling',
        title: 'Animated Storytelling Student',
        start: '2026-01',
        end: '2026-05',
        location: 'New York City Metropolitan Area',
        modality: 'On-site',
        summary: 'A proper introduction to animation — our cohort storyboarded and animated a two-minute film. I also voiced the old lady and old man characters.',
        skills: ['Storytelling', 'Storyboarding', 'Animation', 'Character Design', 'Voice Acting', 'Collaboration'],
        media: [
          { src: 'assets/experiences/venomous-deceit-title.jpg', alt: 'Venomous Deceit animation title card' },
          { src: 'assets/experiences/animation-storyboard.jpg', alt: 'Storyboarded scene' },
          { src: 'assets/experiences/animation-character.jpg', alt: 'Character design' },
        ],
      },
    ],
  },
  {
    org: 'Queens Public Library',
    orgSlug: 'queens-public-library',
    logo: 'assets/experiences/qpl.png',
    roles: [
      {
        id: 'qpl-volunteer',
        title: 'Library Volunteer / Computer Helper',
        start: '2025-07',
        end: '2025-08',
        location: 'United States',
        modality: 'On-site',
        summary: 'Shelved and organized books, assisted patrons, and collaborated on community tasks. I also redesigned the entire South Hollis branch signage in Canva to match branding used across other Queens Public Library branches.',
        skills: ['Communication', 'Canva', 'Graphic Design', 'Community Service', 'Organization'],
        media: [
          { src: 'assets/experiences/qpl-signage-after.jpg', alt: 'Library signage after redesign' },
          { src: 'assets/experiences/qpl-signage-before.jpg', alt: 'Library signage before redesign' },
        ],
      },
    ],
  },
  {
    org: 'Mouse',
    orgSlug: 'mouse',
    logo: 'assets/experiences/mouse_org_logo.jpg',
    roles: [
      {
        id: 'mouse-emoticon',
        title: 'Competitor for the Emoti-Con 2025',
        start: '2024-12',
        end: '2025-05',
        location: 'New York City Metropolitan Area',
        modality: 'Apprenticeship',
        summary: 'Led a four-person team through ideation, Figma training, prototyping, and a live presentation at a city-wide youth tech competition.',
        highlights: ['Won Overall Excellence against 100+ competing projects'],
        skills: ['Web Development', 'Leadership', 'Figma', 'UX/UI', 'Prototyping', 'Presentation'],
        media: [
          { src: 'assets/experiences/emoticon-project.jpg', alt: 'Emoti-Con 2025 project' },
        ],
      },
    ],
  },
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
  if (!src || src.includes('/thumbs/')) return src;
  if (/^gallery\/image-\d+\.png$/.test(src)) {
    return src.replace('gallery/', 'gallery/thumbs/');
  }
  return src;
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
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let waveRows = [];
let wavePhase = 0;
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
  if (REDUCED_MOTION || efficiencyMode || !waveRows.length || !waveInView || document.hidden) return;
  waveRafId = requestAnimationFrame(animateWaveGallery);
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
  if (!waveGallery || !waveRows.length || !waveInView || document.hidden) return;

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
  const topTarget = -20;
  const landingHeight = landingSection.offsetHeight;
  const scrollRange = Math.max(landingHeight - window.innerHeight * 0.35, 1);
  const progress = clamp(window.scrollY / scrollRange, 0, 1);
  const navHeight = dockNav.offsetHeight;
  const maxLift = window.innerHeight - navHeight - bottomOffset - topTarget;
  const baseLift = 12;
  const lift = baseLift + progress * Math.max(maxLift, 0);

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
    { section: 'experiences', count: 4 },
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

  function findBubbleAt(x, y) {
    const live = [...layer.querySelectorAll('.aero-bubble:not(.aero-bubble--pop)')];
    for (let i = live.length - 1; i >= 0; i--) {
      const bubble = live[i];
      const rect = bubble.getBoundingClientRect();
      const pad = 6;
      if (
        rect.width > 0 &&
        rect.height > 0 &&
        x >= rect.left - pad &&
        x <= rect.right + pad &&
        y >= rect.top - pad &&
        y <= rect.bottom + pad
      ) {
        return bubble;
      }
    }
    return null;
  }

  function popBubble(bubble) {
    if (!bubble || bubble.classList.contains('aero-bubble--pop')) return;

    bubble.style.animation = 'none';
    const frozen = getComputedStyle(bubble).transform;
    if (frozen && frozen !== 'none') {
      bubble.style.transform = frozen;
    }
    void bubble.offsetWidth;

    bubble.classList.add('aero-bubble--pop');
    bubbles = bubbles.filter(b => b !== bubble);

    let finished = false;
    const finishPop = () => {
      if (finished) return;
      finished = true;
      bubble.removeEventListener('animationend', onPopEnd);
      bubble.remove();
      scheduleRespawn();
    };

    const onPopEnd = e => {
      if (e.animationName !== 'bubblePop') return;
      finishPop();
    };
    bubble.addEventListener('animationend', onPopEnd);
    setTimeout(finishPop, 480);
  }

  // Capture-phase pointer handling fixes "some bubbles pop, some don't".
  const bubblePointerHandler = e => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    const bubble = findBubbleAt(e.clientX, e.clientY);
    if (!bubble) return;

    e.preventDefault();
    e.stopPropagation();
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

/* ── Experience messenger (Windows Live Messenger) ───────── */

const EXP_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const EXP_SKILL_CAP = 5;
const MSG_MOBILE_MQ = window.matchMedia('(max-width: 640px)');

let messengerState = { activeOrgSlug: null, contactQuery: '' };

function formatExpMonthYear(ym) {
  if (!ym) return '';
  const [year, month] = ym.split('-');
  const idx = parseInt(month, 10) - 1;
  return `${EXP_MONTHS[idx] || month} ${year}`;
}

function formatExpDateRange(role) {
  const start = formatExpMonthYear(role.start);
  const end = role.current ? 'Present' : formatExpMonthYear(role.end);
  return `${start} – ${end}`;
}

function formatExpTimestamp(role) {
  return `${formatExpMonthYear(role.start)} · 12:00 PM`;
}

function getDefaultOrgSlug() {
  const withCurrent = EXPERIENCES.find(org => org.roles.some(r => r.current));
  return withCurrent?.orgSlug || EXPERIENCES[0]?.orgSlug || null;
}

function getActiveOrg() {
  return EXPERIENCES.find(o => o.orgSlug === messengerState.activeOrgSlug) || EXPERIENCES[0];
}

function orgHasCurrent(org) {
  return org.roles.some(r => r.current);
}

function getOrgSubtitle(org) {
  const currentRoles = org.roles.filter(r => r.current);
  if (currentRoles.length) {
    const latest = [...currentRoles].sort((a, b) => b.start.localeCompare(a.start))[0];
    return latest.title;
  }
  return `${org.roles.length} role${org.roles.length === 1 ? '' : 's'}`;
}

function sortRolesOldestFirst(roles) {
  return [...roles].sort((a, b) => a.start.localeCompare(b.start));
}

function renderMsgAvatar(org) {
  const initial = org.org.charAt(0).toUpperCase();
  const statusClass = orgHasCurrent(org) ? 'msg-avatar--online' : 'msg-avatar--offline';
  if (org.logo) {
    return `
      <span class="msg-avatar ${statusClass} msg-avatar--has-img">
        <img class="msg-avatar-img" src="${escapeHtml(org.logo)}" alt="" width="40" height="40" loading="lazy" decoding="async" onload="this.parentElement.classList.add('msg-avatar--loaded')" onerror="this.parentElement.classList.add('msg-avatar--fallback')" />
        <span class="msg-avatar-initial" aria-hidden="true">${escapeHtml(initial)}</span>
      </span>
    `;
  }
  return `<span class="msg-avatar ${statusClass}"><span class="msg-avatar-initial">${escapeHtml(initial)}</span></span>`;
}

function renderExpSkills(skills) {
  if (!skills || !skills.length) return '';
  const visible = skills.slice(0, EXP_SKILL_CAP);
  const rest = skills.length - visible.length;
  const chips = visible.map(s => `<span class="skill-chip">${escapeHtml(s)}</span>`).join('');
  const more = rest > 0 ? `<span class="msg-skill-more">+${rest} more</span>` : '';
  return `<div class="msg-skills" aria-label="Skills">${chips}${more}</div>`;
}

function renderExpMedia(media) {
  if (!media || !media.length) return '';
  const items = media.map(item => `
    <figure class="msg-media-item">
      <button type="button" class="msg-media-btn" data-src="${escapeHtml(item.src)}" aria-label="View image: ${escapeHtml(item.alt || 'Related media')}">
        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || '')}" loading="lazy" decoding="async" onerror="this.closest('.msg-media-item').remove()" />
      </button>
    </figure>
  `).join('');
  return `<div class="msg-media-strip" aria-label="Related media">${items}</div>`;
}

function renderMessengerTranscript(org) {
  const roles = sortRolesOldestFirst(org.roles);
  let lastMonthYear = null;
  const parts = [];

  roles.forEach(role => {
    const monthYear = formatExpMonthYear(role.start);
    if (monthYear !== lastMonthYear) {
      lastMonthYear = monthYear;
      parts.push(`<div class="msg-date-sep" role="separator"><span>${escapeHtml(monthYear)}</span></div>`);
    }

    const dateRange = formatExpDateRange(role);
    const metaParts = [role.location, role.modality].filter(Boolean);
    if (role.partTime) metaParts.push('Part-time');
    const metaLine = metaParts.join(' · ');
    const badge = role.badge ? `<span class="msg-badge">${escapeHtml(role.badge)}</span>` : '';
    const timestamp = formatExpTimestamp(role);

    parts.push(`
      <div class="msg-row msg-row--in">
        <span class="msg-speaker">${escapeHtml(org.org)} says:</span>
        <div class="msg-bubble msg-bubble--in">
          <p class="msg-bubble-title">${escapeHtml(role.title)}</p>
          <p class="msg-bubble-meta">
            <time datetime="${escapeHtml(role.start)}">${escapeHtml(dateRange)}</time>${metaLine ? ` · ${escapeHtml(metaLine)}` : ''}
          </p>
          ${badge}
        </div>
        <time class="msg-time" datetime="${escapeHtml(role.start)}">${escapeHtml(timestamp)}</time>
      </div>
    `);

    const highlights = (role.highlights || []).length
      ? `<ul class="msg-highlights">${role.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}</ul>`
      : '';

    parts.push(`
      <div class="msg-row msg-row--out">
        <span class="msg-speaker">You say:</span>
        <div class="msg-bubble msg-bubble--out">
          <p class="msg-bubble-text">${escapeHtml(role.summary)}</p>
          ${highlights}
          ${renderExpSkills(role.skills)}
          ${renderExpMedia(role.media)}
        </div>
        <time class="msg-time" datetime="${escapeHtml(role.start)}">${escapeHtml(timestamp)}</time>
      </div>
    `);
  });

  return parts.join('');
}

function orgMatchesQuery(org, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  if (org.org.toLowerCase().includes(q)) return true;
  return org.roles.some(role =>
    (role.title && role.title.toLowerCase().includes(q))
    || (role.summary && role.summary.toLowerCase().includes(q))
  );
}

function renderMessengerContacts(host) {
  const list = host.querySelector('#msgContactList');
  if (!list) return;

  const query = messengerState.contactQuery.trim();
  const filtered = EXPERIENCES.filter(org => orgMatchesQuery(org, query));

  if (!filtered.length) {
    list.innerHTML = '<p class="msg-contacts-empty">No contacts match your search.</p>';
    return;
  }

  list.innerHTML = filtered.map(org => {
    const isActive = org.orgSlug === messengerState.activeOrgSlug;
    const statusClass = orgHasCurrent(org) ? 'msg-status--online' : 'msg-status--offline';
    return `
      <button
        type="button"
        class="msg-contact${isActive ? ' is-active' : ''}"
        role="tab"
        id="msg-tab-${escapeHtml(org.orgSlug)}"
        aria-selected="${isActive ? 'true' : 'false'}"
        aria-controls="msgChatPane"
        data-org-slug="${escapeHtml(org.orgSlug)}"
      >
        <span class="msg-status ${statusClass}" aria-hidden="true"></span>
        ${renderMsgAvatar(org)}
        <span class="msg-contact-text">
          <span class="msg-contact-name">${escapeHtml(org.org)}</span>
          <span class="msg-contact-sub">${escapeHtml(getOrgSubtitle(org))}</span>
        </span>
      </button>
    `;
  }).join('');

  const pane = host.querySelector('#msgChatPane');
  if (pane && messengerState.activeOrgSlug) {
    pane.setAttribute('aria-labelledby', `msg-tab-${messengerState.activeOrgSlug}`);
  }
}

const FSN_ICON_PHONE = `<svg class="msg-chat-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M15.5 4.5c1.2 1.2 2 2.8 2 4.5"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M18 2.5c1.8 1.8 3 4.1 3 6.5"/></svg>`;
const FSN_ICON_VIDEO = `<svg class="msg-chat-action-icon" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M2 4.5A1.5 1.5 0 0 1 3.5 3h5.5l1.2 1.5H12A1.5 1.5 0 0 1 13.5 6v5A1.5 1.5 0 0 1 12 12.5H3.5A1.5 1.5 0 0 1 2 11V4.5zm1.5 0V11H12V6.2L9.8 4.5H3.5z"/><path fill="currentColor" d="M10 6.5l3.5-2.2a.5.5 0 0 1 .8.4v6.6a.5.5 0 0 1-.8.4L10 9.5V6.5z"/></svg>`;

function renderMessengerChat(host) {
  const org = getActiveOrg();
  if (!org) return;

  const header = host.querySelector('#msgChatHeader');
  const transcript = host.querySelector('#msgTranscript');
  if (!header || !transcript) return;

  header.innerHTML = `
    <button type="button" class="msg-back-btn" id="msgBackBtn" aria-label="Back to contacts">&#8592; Contacts</button>
    ${renderMsgAvatar(org)}
    <div class="msg-chat-header-text">
      <span class="msg-chat-name">${escapeHtml(org.org)}</span>
      <span class="msg-chat-status">${orgHasCurrent(org) ? 'Online — Click here for personal info' : 'Offline'}</span>
    </div>
    <div class="msg-chat-actions" aria-hidden="true">
      <span class="msg-chat-action" title="Invite">+</span>
      <span class="msg-chat-action" title="Voice call">${FSN_ICON_PHONE}</span>
      <span class="msg-chat-action" title="Video call">${FSN_ICON_VIDEO}</span>
    </div>
  `;

  transcript.innerHTML = renderMessengerTranscript(org);
  transcript.scrollTop = transcript.scrollHeight;

  transcript.querySelectorAll('.msg-media-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const buttons = [...transcript.querySelectorAll('.msg-media-btn')];
      const images = buttons.map(b => {
        const img = b.querySelector('img');
        return { src: b.dataset.src || img?.src || '', alt: img?.alt || '' };
      }).filter(item => item.src);
      const startIndex = images.findIndex(item => item.src === btn.dataset.src);
      openMessageLightbox(images, Math.max(startIndex, 0));
    });
  });

  const backBtn = host.querySelector('#msgBackBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      host.classList.remove('msg-pane--chat');
      host.classList.add('msg-pane--list');
    });
  }
}

function selectMessengerOrg(slug) {
  messengerState.activeOrgSlug = slug;
  const host = document.getElementById('experienceMessenger');
  if (!host) return;

  renderMessengerContacts(host);
  renderMessengerChat(host);

  if (MSG_MOBILE_MQ.matches) {
    host.classList.remove('msg-pane--list');
    host.classList.add('msg-pane--chat');
  }
}

function wireMessengerEvents(host) {
  const list = host.querySelector('#msgContactList');
  if (!list || list.dataset.wired) return;
  list.dataset.wired = 'true';

  list.addEventListener('click', e => {
    const btn = e.target.closest('.msg-contact');
    if (!btn) return;
    selectMessengerOrg(btn.dataset.orgSlug);
  });

  list.addEventListener('keydown', e => {
    const tabs = [...list.querySelectorAll('.msg-contact')];
    const idx = tabs.indexOf(document.activeElement);
    if (idx < 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      tabs[Math.min(idx + 1, tabs.length - 1)]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      tabs[Math.max(idx - 1, 0)]?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectMessengerOrg(document.activeElement.dataset.orgSlug);
    }
  });

  const searchInput = host.querySelector('#msgContactSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      messengerState.contactQuery = searchInput.value;
      renderMessengerContacts(host);
    });
  }
}

function buildExperienceMessenger() {
  const host = document.getElementById('experienceMessenger');
  if (!host) return;

  if (!messengerState.activeOrgSlug) {
    messengerState.activeOrgSlug = getDefaultOrgSlug();
  }

  host.className = 'experience-messenger msg-pane--list';

  host.innerHTML = `
    <div class="msg-titlebar msg-titlebar--fsn">
      <div class="msg-titlebar-brand">
        <span class="msg-fsn-icon" aria-hidden="true">FSN</span>
        <span class="msg-titlebar-text">FSN Messenger</span>
      </div>
      <div class="msg-winbtns" aria-hidden="true">
        <span class="msg-winbtn">&#8211;</span>
        <span class="msg-winbtn">&#9633;</span>
        <span class="msg-winbtn msg-winbtn--close">&#10005;</span>
      </div>
    </div>
    <div class="msg-menubar" aria-hidden="true">
      <span>File</span><span>Contacts</span><span>Actions</span><span>Tools</span><span>Help</span>
    </div>
    <div class="msg-body">
      <aside class="msg-contacts-wrap">
        <div class="msg-contacts-head">
          <span class="msg-contacts-label">Contacts (${EXPERIENCES.length})</span>
          <input type="search" class="msg-search-input" id="msgContactSearch" placeholder="Find a contact..." autocomplete="off" aria-label="Find a contact" />
        </div>
        <div class="msg-contacts" id="msgContactList" role="tablist" aria-label="Organizations"></div>
      </aside>
      <div class="msg-chat" id="msgChatPane" role="tabpanel" aria-labelledby="msg-tab-${escapeHtml(messengerState.activeOrgSlug || '')}">
        <div class="msg-chat-header" id="msgChatHeader"></div>
        <div class="msg-transcript" id="msgTranscript" role="log" aria-live="polite" aria-label="Conversation history"></div>
        <div class="msg-compose" aria-hidden="true">
          <div class="msg-compose-toolbar">
            <span class="msg-compose-icon" title="Emoticons">&#9786;</span>
            <span class="msg-compose-icon" title="Font color">A</span>
            <span class="msg-compose-icon" title="Attach">&#128206;</span>
          </div>
          <div class="msg-compose-row">
            <div class="msg-compose-input">This is a read-only career log — scroll up for history.</div>
            <button type="button" class="msg-compose-send" disabled>Send</button>
          </div>
        </div>
      </div>
    </div>
  `;

  renderMessengerContacts(host);
  renderMessengerChat(host);
  wireMessengerEvents(host);
}

/* ── File explorer projects ───────────────────────────────── */
// This section is basically a mini fake-OS navigator for projects.
// The data comes from PROJECTS, the UI is rendered from current explorerState.

const FOLDER_ICON = `<svg class="fe-folder-icon" viewBox="0 0 64 52" aria-hidden="true">
  <defs>
    <linearGradient id="feFolderTab" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffe98a"/>
      <stop offset="100%" stop-color="#f5c842"/>
    </linearGradient>
    <linearGradient id="feFolderBody" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffe566"/>
      <stop offset="45%" stop-color="#f0c030"/>
      <stop offset="100%" stop-color="#d4a020"/>
    </linearGradient>
  </defs>
  <path d="M4 14a3 3 0 0 1 3-3h14l5 5h30a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V14z" fill="url(#feFolderBody)" stroke="#c89820" stroke-width="1"/>
  <path d="M4 18h56v24a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V18z" fill="url(#feFolderBody)" opacity="0.35"/>
  <path d="M4 11a3 3 0 0 1 3-3h12l4 4h22a3 3 0 0 1 3 3v2H4v-6z" fill="url(#feFolderTab)" stroke="#d4a828" stroke-width="0.8"/>
  <path d="M6 42h52" stroke="rgba(255,255,255,0.45)" stroke-width="1"/>
</svg>`;

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
      ? `<img class="fe-item-thumb fe-app-icon" src="${escapeHtml(previewImage)}" alt="" loading="lazy" decoding="async" />`
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

const WIN7_FOLDER_ICON = `<svg class="fe-sidebar-icon" viewBox="0 0 16 16" aria-hidden="true"><path fill="#f4c430" d="M1 3.5A1.5 1.5 0 0 1 2.5 2H6l1 1.5h6.5A1.5 1.5 0 0 1 15 5v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5V3.5z"/><path fill="#e8b020" d="M1 4.5h14v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5V4.5z"/></svg>`;

  function renderSidebar() {
    sidebar.innerHTML = '';

    const favHeading = document.createElement('p');
    favHeading.className = 'fe-sidebar-heading fe-sidebar-heading--fav';
    favHeading.innerHTML = '<span class="fe-sidebar-star" aria-hidden="true">★</span> Favorites';
    sidebar.appendChild(favHeading);

    const allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = `fe-sidebar-item${explorerState.view === 'root' ? ' is-active' : ''}`;
    allBtn.innerHTML = `${WIN7_FOLDER_ICON}<span>All Projects</span>`;
    allBtn.addEventListener('click', () => setExplorerState({ view: 'root', category: null }));
    sidebar.appendChild(allBtn);

    const divider = document.createElement('div');
    divider.className = 'fe-sidebar-divider';
    divider.setAttribute('role', 'separator');
    sidebar.appendChild(divider);

    const libHeading = document.createElement('p');
    libHeading.className = 'fe-sidebar-heading';
    libHeading.textContent = 'Libraries';
    sidebar.appendChild(libHeading);

    PROJECT_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `fe-sidebar-item${explorerState.category === cat.id ? ' is-active' : ''}`;
      btn.innerHTML = `${WIN7_FOLDER_ICON}<span>${escapeHtml(cat.name)}</span>`;
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

const PROFILE_BIRTHDAY = { year: 2008, month: 5, day: 5 };
const NY_TIMEZONE = 'America/New_York';

function getNyDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: NY_TIMEZONE,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(date);
  const get = type => parts.find(p => p.type === type)?.value;
  return {
    year: Number(get('year')),
    month: Number(get('month')),
    day: Number(get('day')),
  };
}

function computeProfileAge(date = new Date()) {
  const { year, month, day } = getNyDateParts(date);
  if (year < PROFILE_BIRTHDAY.year) return null;
  let age = year - PROFILE_BIRTHDAY.year;
  const birthdayPassed = month > PROFILE_BIRTHDAY.month
    || (month === PROFILE_BIRTHDAY.month && day >= PROFILE_BIRTHDAY.day);
  if (!birthdayPassed) age -= 1;
  return age;
}

function isBirthdayToday(date = new Date()) {
  const { month, day } = getNyDateParts(date);
  return month === PROFILE_BIRTHDAY.month && day === PROFILE_BIRTHDAY.day;
}

function initProfileAge() {
  const el = document.getElementById('profileAge');
  if (!el) return;

  function update() {
    const age = computeProfileAge();
    el.textContent = age === null ? '—' : String(age);
  }

  update();
  setInterval(update, 60 * 60 * 1000);
}

function initBirthdayToast() {
  if (!isBirthdayToday()) return;

  const toast = document.getElementById('birthdayToast');
  if (!toast) return;

  const dismissKey = `birthday-toast-dismissed-${new Date().getFullYear()}-${PROFILE_BIRTHDAY.month}-${PROFILE_BIRTHDAY.day}`;
  if (sessionStorage.getItem(dismissKey)) return;

  const closeBtn = toast.querySelector('.birthday-toast-close');
  toast.hidden = false;

  function dismiss() {
    toast.hidden = true;
    sessionStorage.setItem(dismissKey, '1');
  }

  if (closeBtn) closeBtn.addEventListener('click', dismiss);
}

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

  document.querySelectorAll('.about, .experiences-section, .projects-section, .site-footer').forEach(section => {
    new IntersectionObserver(([entry]) => {
      section.classList.toggle('section-idle', !entry.isIntersecting);
    }, { threshold: 0.06, rootMargin: '100px 0px' }).observe(section);
  });
}

function updateEfficiencyToggleUi() {
  if (!efficiencyToggle) return;
  efficiencyToggle.setAttribute('aria-pressed', efficiencyMode ? 'true' : 'false');
  const label = efficiencyMode
    ? 'Eco Saver on — lighter motion, keeps the vibe'
    : 'Eco Saver off — full motion';
  efficiencyToggle.title = label;
  efficiencyToggle.setAttribute('aria-label', label);
}

function applyEfficiencyMode() {
  document.documentElement.classList.toggle('efficiency-mode', efficiencyMode);
  applyPerfLiteClass();
  updateEfficiencyToggleUi();

  if (efficiencyMode) {
    stopWaveLoop();
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
    tryStartMusicAutoplay();
  }

  syncMusicWithEfficiency();
  updateMusicUi();
}

if (efficiencyToggle) {
  efficiencyToggle.addEventListener('click', () => {
    efficiencyMode = !efficiencyMode;
    saveEfficiencyPreference(efficiencyMode);
    applyEfficiencyMode();
  });
}

/* ── Frutiger Aero music player ───────────────────────────── */

const MUSIC_MANIFEST_URL = 'music-playlist.json';

const musicPlayerEl = document.getElementById('aeroMusicPlayer');
const musicTrackTitle = document.getElementById('musicTrackTitle');
const musicTrackArtist = document.getElementById('musicTrackArtist');
const musicPlaylistTrack = document.getElementById('musicPlaylistTrack');
const musicNextUp = document.getElementById('musicNextUp');
const musicPlayPause = document.getElementById('musicPlayPause');
const musicPrev = document.getElementById('musicPrev');
const musicNext = document.getElementById('musicNext');
const musicShuffle = document.getElementById('musicShuffle');
const musicRepeat = document.getElementById('musicRepeat');
const musicMute = document.getElementById('musicMute');
const musicVolume = document.getElementById('musicVolume');
const musicProgressBar = document.getElementById('musicProgressBar');
const musicProgressWrap = document.getElementById('musicProgressWrap');
const musicTimeDisplay = document.getElementById('musicTimeDisplay');
const wmpTitlebar = document.getElementById('wmpTitlebar');
const wmpViz = document.getElementById('wmpViz');
const wmpVizBg = document.getElementById('wmpVizBg');
const wmpPanelNow = document.getElementById('wmpPanelNow');
const wmpPanelLibrary = document.getElementById('wmpPanelLibrary');
const wmpLibraryList = document.getElementById('wmpLibraryList');
const wmpLandingSlot = document.getElementById('wmpLandingSlot');
const ytPlayerHost = document.getElementById('ytPlayerHost');

const WMP_POS_KEY = 'wmp-window-pos';
const MUSIC_EMBED_ORIGIN = 'https://www.youtube-nocookie.com';
const MUSIC_STATE = {
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
};
const WMP_BACKGROUNDS = Array.from(
  { length: 29 },
  (_, i) => `assets/wmp/backgrounds/bg-${String(i + 1).padStart(2, '0')}.jpg`,
);

let ytPlayer = null;
let musicPlayerReady = false;
let musicMuted = true;
let musicPlaying = false;
let musicEnginePromise = null;
let musicProgressTimer = null;
let musicSeeking = false;
let musicSeekPauseTimer = null;
let musicVolumeLevel = 100;
let musicShuffleOn = false;
let musicLoopOn = false;
let musicDiscStarted = false;
let wmpView = 'now';
let wmpPlaylistTracks = [];
let musicTitleMap = new Map();
let wmpDragInitialized = false;
let wmpCurrentIndex = -1;

function formatMusicTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function setTrackTitle(title) {
  const text = title || 'Frutiger Aero Mix';
  if (musicTrackTitle) musicTrackTitle.textContent = text;
  if (musicPlaylistTrack) musicPlaylistTrack.textContent = text;
  updateUpNextUi();
}

function updateMusicProgress() {
  if (!musicProgressBar || musicSeeking) return;
  const current = musicPlayer.getCurrentTime();
  const trackDuration = musicPlayer.getDuration();
  if (trackDuration > 0) {
    musicProgressBar.style.width = `${(current / trackDuration) * 100}%`;
  } else if (current > 0) {
    musicProgressBar.style.width = '0%';
  }
  if (musicTimeDisplay) {
    const durText = trackDuration > 0 ? formatMusicTime(trackDuration) : '0:00';
    musicTimeDisplay.textContent = `${formatMusicTime(current)} / ${durText}`;
  }
}

function pauseMusicProgressBriefly() {
  if (musicSeekPauseTimer) clearTimeout(musicSeekPauseTimer);
  musicSeekPauseTimer = setTimeout(() => {
    musicSeekPauseTimer = null;
    if (musicPlaying) startMusicProgressLoop();
  }, 350);
}

function startMusicProgressLoop() {
  stopMusicProgressLoop();
  musicProgressTimer = setInterval(updateMusicProgress, 250);
}

function stopMusicProgressLoop() {
  if (musicProgressTimer) {
    clearInterval(musicProgressTimer);
    musicProgressTimer = null;
  }
}

function canAutoplayMusic() {
  return !REDUCED_MOTION && !efficiencyMode;
}

function loadYouTubeIframeApi() {
  return new Promise(resolve => {
    if (window.YT?.Player) {
      resolve();
      return;
    }
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (previous) previous();
      resolve();
    };
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    }
  });
}

function createMusicEngine() {
  if (!ytPlayerHost) return Promise.resolve(null);
  if (musicPlayerReady && ytPlayer) return Promise.resolve(ytPlayer);

  return loadYouTubeIframeApi().then(() => {
    if (!window.YT?.Player || !ytPlayerHost) return null;
    if (musicPlayerReady && ytPlayer) return ytPlayer;

    const firstVideo = wmpPlaylistTracks[0]?.videoId || 'hds9-VXje4E';

    return new Promise(resolve => {
      ytPlayerHost.innerHTML = '';
      ytPlayer = new YT.Player(ytPlayerHost, {
        host: MUSIC_EMBED_ORIGIN,
        height: '144',
        width: '256',
        videoId: firstVideo,
        playerVars: {
          origin: window.location.origin,
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: event => {
            onMusicEngineReady(event);
            resolve(ytPlayer);
          },
          onStateChange: onMusicEngineStateChange,
        },
      });
    });
  });
}

function ensureMusicEngine() {
  if (musicPlayerReady && ytPlayer) return Promise.resolve(ytPlayer);
  if (musicEnginePromise) return musicEnginePromise;
  musicEnginePromise = createMusicEngine();
  return musicEnginePromise;
}

const musicPlayer = {
  getPlayerState: () => ytPlayer?.getPlayerState?.() ?? -1,
  playVideo: () => ytPlayer?.playVideo?.(),
  pauseVideo: () => ytPlayer?.pauseVideo?.(),
  mute: () => ytPlayer?.mute?.(),
  unMute: () => ytPlayer?.unMute?.(),
  setVolume: level => ytPlayer?.setVolume?.(level),
  seekTo: (seconds, allowSeekAhead) => ytPlayer?.seekTo?.(seconds, allowSeekAhead),
  getCurrentTime: () => ytPlayer?.getCurrentTime?.() ?? 0,
  getDuration: () => ytPlayer?.getDuration?.() ?? 0,
  getVideoData: () => ytPlayer?.getVideoData?.() ?? {
    video_id: wmpPlaylistTracks[wmpCurrentIndex]?.videoId || '',
    title: '',
    author: 'Frutiger Aero',
  },
  loadVideoById: params => ytPlayer?.loadVideoById?.(params),
};

function updateMusicUi() {
  if (!musicPlayPause) return;
  musicPlayPause.classList.toggle('is-playing', musicPlaying);
  musicPlayPause.setAttribute('aria-label', musicPlaying ? 'Pause' : 'Play');
  musicPlayPause.setAttribute('aria-pressed', musicPlaying ? 'true' : 'false');

  if (musicShuffle) {
    musicShuffle.classList.toggle('is-active', musicShuffleOn);
    musicShuffle.setAttribute('aria-pressed', musicShuffleOn ? 'true' : 'false');
    musicShuffle.setAttribute('aria-label', musicShuffleOn ? 'Shuffle on' : 'Shuffle off');
  }
  if (musicRepeat) {
    musicRepeat.classList.toggle('is-active', musicLoopOn);
    musicRepeat.setAttribute('aria-pressed', musicLoopOn ? 'true' : 'false');
    musicRepeat.setAttribute('aria-label', musicLoopOn ? 'Loop on' : 'Loop off');
  }
  if (musicMute) {
    musicMute.classList.toggle('is-muted', musicMuted);
    musicMute.setAttribute('aria-pressed', musicMuted ? 'true' : 'false');
    musicMute.setAttribute('aria-label', musicMuted ? 'Unmute' : 'Mute');
  }
  if (musicVolume && document.activeElement !== musicVolume) {
    musicVolume.value = String(musicMuted ? 0 : musicVolumeLevel);
  }

  if (wmpViz) {
    if (musicPlaying && !efficiencyMode && !REDUCED_MOTION) {
      musicDiscStarted = true;
    }
    const spinning = musicDiscStarted && !efficiencyMode && !REDUCED_MOTION;
    wmpViz.classList.toggle('wmp-viz--spin', spinning);
    wmpViz.classList.toggle('is-playing', spinning && musicPlaying);
  }

  updateUpNextUi();

  if (musicPlayerReady && !musicSeeking) startMusicProgressLoop();
  else if (!musicSeeking) stopMusicProgressLoop();
  highlightLibraryTrack();
}

function djb2Hash(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function hashVizBackground(videoId) {
  if (!videoId || !WMP_BACKGROUNDS.length) return WMP_BACKGROUNDS[0];
  return WMP_BACKGROUNDS[djb2Hash(videoId) % WMP_BACKGROUNDS.length];
}

function applyVizTheme(videoId) {
  if (!wmpVizBg) return;
  const bg = hashVizBackground(videoId);
  wmpVizBg.style.backgroundImage = `url('${bg}')`;
}

function getTrackTitle(videoId, fallback) {
  return musicTitleMap.get(videoId) || fallback || 'Unknown track';
}

function indexOfCurrentTrack() {
  const id = musicPlayer.getVideoData()?.video_id;
  if (!id) return wmpCurrentIndex;
  const idx = wmpPlaylistTracks.findIndex(t => t.videoId === id);
  return idx >= 0 ? idx : wmpCurrentIndex;
}

function getNextTrackIndex() {
  if (!wmpPlaylistTracks.length) return -1;
  const current = indexOfCurrentTrack();
  if (current < 0) return 0;
  if (musicLoopOn) return current;
  return (current + 1) % wmpPlaylistTracks.length;
}

function updateUpNextUi() {
  if (!musicNextUp) return;
  if (!wmpPlaylistTracks.length) {
    musicNextUp.textContent = '—';
    musicNextUp.disabled = true;
    return;
  }
  const nextIdx = getNextTrackIndex();
  if (nextIdx < 0) {
    musicNextUp.textContent = '—';
    musicNextUp.disabled = true;
    return;
  }
  const track = wmpPlaylistTracks[nextIdx];
  musicNextUp.textContent = getTrackTitle(track.videoId, track.title);
  musicNextUp.disabled = false;
}

async function playTrackAtIndex(index, { autoplay = true } = {}) {
  if (!wmpPlaylistTracks.length) return;
  await ensureMusicEngine();
  if (!ytPlayer?.loadVideoById) return;
  const total = wmpPlaylistTracks.length;
  const wrapped = ((index % total) + total) % total;
  const track = wmpPlaylistTracks[wrapped];
  if (!track?.videoId) return;
  wmpCurrentIndex = wrapped;
  if (musicMuted) ytPlayer.mute();
  ytPlayer.setVolume?.(musicVolumeLevel);
  ytPlayer.loadVideoById({ videoId: track.videoId });
  setTrackTitle(getTrackTitle(track.videoId, track.title));
  applyVizTheme(track.videoId);
  if (autoplay) {
    musicPlaying = true;
    ytPlayer.playVideo?.();
  }
  updateMusicProgress();
  updateMusicUi();
}

function playNextTrack() {
  if (!wmpPlaylistTracks.length) return;
  let next = indexOfCurrentTrack();
  if (musicShuffleOn) {
    if (wmpPlaylistTracks.length > 1) {
      do {
        next = Math.floor(Math.random() * wmpPlaylistTracks.length);
      } while (next === indexOfCurrentTrack());
    }
  } else {
    next += 1;
  }
  playTrackAtIndex(next);
}

function playPrevTrack() {
  if (!wmpPlaylistTracks.length) return;
  let prev = indexOfCurrentTrack();
  if (musicShuffleOn && wmpPlaylistTracks.length > 1) {
    do {
      prev = Math.floor(Math.random() * wmpPlaylistTracks.length);
    } while (prev === indexOfCurrentTrack());
  } else {
    prev -= 1;
  }
  playTrackAtIndex(prev);
}

function mergeManifestTracks(manifest) {
  const merged = [];
  const seen = new Set();
  const addTrack = track => {
    if (!track?.videoId || seen.has(track.videoId)) return;
    seen.add(track.videoId);
    merged.push({ videoId: track.videoId, title: track.title || 'Unknown track', free: !!track.free });
    musicTitleMap.set(track.videoId, track.title || 'Unknown track');
  };
  (manifest?.tracks || []).forEach(addTrack);
  return merged;
}

async function loadMusicManifest() {
  try {
    const res = await fetch(MUSIC_MANIFEST_URL);
    if (!res.ok) throw new Error('manifest fetch failed');
    const manifest = await res.json();
    return mergeManifestTracks(manifest);
  } catch {
    return [];
  }
}

async function buildPlaylistLibrary() {
  if (!wmpLibraryList) return;
  wmpLibraryList.innerHTML = '<li class="wmp-library-empty">Loading library…</li>';

  const manifestTracks = await loadMusicManifest();
  if (manifestTracks.length) {
    wmpPlaylistTracks = manifestTracks;
  }

  if (!wmpPlaylistTracks.length) {
    wmpLibraryList.innerHTML = `<li class="wmp-library-empty">Could not load playlist. <a href="https://frutigeraeroarchive.org/music" target="_blank" rel="noopener noreferrer">More Aero music</a></li>`;
    return;
  }
  renderLibraryList();
}

function onTrackMetaUpdate() {
  const data = musicPlayer.getVideoData();
  if (data?.title) setTrackTitle(data.title);
  if (data?.author && musicTrackArtist) {
    musicTrackArtist.textContent = data.author;
  }
  if (data?.video_id) {
    applyVizTheme(data.video_id);
    wmpCurrentIndex = indexOfCurrentTrack();
    if (!musicTitleMap.has(data.video_id) && data.title) {
      musicTitleMap.set(data.video_id, data.title);
    }
  }
  highlightLibraryTrack();
}

function setWmpView(view) {
  wmpView = view;
  document.querySelectorAll('.wmp-tab').forEach(tab => {
    const active = tab.dataset.wmpView === view;
    tab.classList.toggle('wmp-tab--active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  if (wmpPanelNow) wmpPanelNow.hidden = view !== 'now';
  if (wmpPanelLibrary) wmpPanelLibrary.hidden = view !== 'library';
  if (view === 'library') {
    if (!wmpPlaylistTracks.length) buildPlaylistLibrary();
    else renderLibraryList();
  }
}

function renderLibraryList() {
  if (!wmpLibraryList) return;
  if (!wmpPlaylistTracks.length) {
    wmpLibraryList.innerHTML = '<li class="wmp-library-empty">No tracks found.</li>';
    return;
  }
  wmpLibraryList.innerHTML = wmpPlaylistTracks.map(track => `
    <li>
      <button type="button" class="wmp-library-item" data-video-id="${escapeHtml(track.videoId)}">
        <span class="wmp-library-item-title">${escapeHtml(track.title)}</span>
      </button>
    </li>
  `).join('');

  wmpLibraryList.querySelectorAll('.wmp-library-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const videoId = btn.dataset.videoId;
      const idx = wmpPlaylistTracks.findIndex(t => t.videoId === videoId);
      if (idx < 0) return;
      playTrackAtIndex(idx);
      setWmpView('now');
    });
  });
  highlightLibraryTrack();
}

function highlightLibraryTrack() {
  if (!wmpLibraryList) return;
  const currentId = musicPlayer.getVideoData()?.video_id;
  wmpLibraryList.querySelectorAll('.wmp-library-item').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.videoId === currentId);
  });
}

function seekMusic(clientX) {
  if (!musicProgressWrap || !ytPlayer?.seekTo) return;
  const trackDuration = musicPlayer.getDuration();
  if (trackDuration <= 0) return;
  const rect = musicProgressWrap.getBoundingClientRect();
  const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
  stopMusicProgressLoop();
  musicSeeking = true;
  musicProgressWrap.classList.add('is-seeking');
  musicProgressBar.style.width = `${ratio * 100}%`;
  ytPlayer.seekTo(ratio * trackDuration, true);
  if (musicTimeDisplay) {
    const target = ratio * trackDuration;
    musicTimeDisplay.textContent = `${formatMusicTime(target)} / ${formatMusicTime(trackDuration)}`;
  }
  musicSeeking = false;
  musicProgressWrap.classList.remove('is-seeking');
  pauseMusicProgressBriefly();
}

function initMusicSeek() {
  if (!musicProgressWrap) return;
  let scrubbing = false;

  const seekFromEvent = e => {
    if (e.clientX != null) seekMusic(e.clientX);
  };

  musicProgressWrap.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    scrubbing = true;
    musicProgressWrap.setPointerCapture(e.pointerId);
    seekFromEvent(e);
    e.preventDefault();
  });

  musicProgressWrap.addEventListener('pointermove', e => {
    if (!scrubbing) return;
    seekFromEvent(e);
  });

  const endScrub = e => {
    if (!scrubbing) return;
    scrubbing = false;
    musicProgressWrap.releasePointerCapture(e.pointerId);
  };

  musicProgressWrap.addEventListener('pointerup', endScrub);
  musicProgressWrap.addEventListener('pointercancel', endScrub);
}

function isWmpMobile() {
  return window.matchMedia('(max-width: 900px)').matches;
}

function syncWmpPlacement() {
  if (!musicPlayerEl) return;
  const mobile = isWmpMobile();
  musicPlayerEl.classList.toggle('wmp-player--desktop', !mobile);
  musicPlayerEl.classList.toggle('wmp-player--mobile', mobile);

  if (mobile) {
    if (wmpLandingSlot && musicPlayerEl.parentElement !== wmpLandingSlot) {
      wmpLandingSlot.appendChild(musicPlayerEl);
    }
    musicPlayerEl.style.left = '';
    musicPlayerEl.style.top = '';
    musicPlayerEl.style.bottom = '';
    musicPlayerEl.style.transform = '';
  } else {
    if (musicPlayerEl.parentElement !== document.body) {
      document.body.appendChild(musicPlayerEl);
    }
    if (!musicPlayerEl.style.left && !musicPlayerEl.style.top) {
      loadWmpPosition();
    }
    if (!wmpDragInitialized) {
      initWmpDrag();
      wmpDragInitialized = true;
    }
  }
}

function onMusicEngineReady(event) {
  musicPlayerReady = true;
  const player = event?.target || ytPlayer;
  player?.setVolume?.(musicVolumeLevel);
  if (musicMuted) player?.mute?.();
  onTrackMetaUpdate();
  buildPlaylistLibrary();
  wmpCurrentIndex = indexOfCurrentTrack();
  updateMusicProgress();
  if (canAutoplayMusic()) {
    player?.mute?.();
    player?.playVideo?.();
    musicMuted = true;
    musicPlaying = true;
  }
  updateMusicUi();
}

function onMusicEngineStateChange(event) {
  const state = event?.data;
  const player = event?.target || ytPlayer;

  if (state === MUSIC_STATE.PLAYING) {
    musicPlaying = true;
  } else if (state === MUSIC_STATE.PAUSED || state === MUSIC_STATE.ENDED) {
    musicPlaying = false;
  }

  if (state === MUSIC_STATE.ENDED) {
    if (musicLoopOn) {
      player?.seekTo?.(0, true);
      player?.playVideo?.();
      musicPlaying = true;
      updateMusicUi();
      return;
    }
    playNextTrack();
    return;
  }

  if (state === MUSIC_STATE.PLAYING || state === MUSIC_STATE.PAUSED) {
    onTrackMetaUpdate();
    updateMusicProgress();
  }
  updateMusicUi();
}

function loadWmpPosition() {
  if (!musicPlayerEl) return;
  try {
    const raw = localStorage.getItem(WMP_POS_KEY);
    if (!raw) return;
    const { left, top } = JSON.parse(raw);
    if (Number.isFinite(left) && Number.isFinite(top)) {
      musicPlayerEl.style.left = `${left}px`;
      musicPlayerEl.style.top = `${top}px`;
      musicPlayerEl.style.bottom = 'auto';
    }
  } catch {
    // Ignore bad stored position.
  }
}

function saveWmpPosition() {
  if (!musicPlayerEl) return;
  const rect = musicPlayerEl.getBoundingClientRect();
  try {
    localStorage.setItem(WMP_POS_KEY, JSON.stringify({
      left: Math.round(rect.left),
      top: Math.round(rect.top),
    }));
  } catch {
    // Ignore storage failures.
  }
}

function initWmpDrag() {
  if (!musicPlayerEl || !wmpTitlebar || isWmpMobile()) return;

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let originLeft = 0;
  let originTop = 0;

  const onPointerDown = e => {
    if (e.button !== 0 || isWmpMobile()) return;
    if (e.target.closest('.win-caption-btn')) return;
    dragging = true;
    musicPlayerEl.classList.add('is-dragging');
    const rect = musicPlayerEl.getBoundingClientRect();
    originLeft = rect.left;
    originTop = rect.top;
    startX = e.clientX;
    startY = e.clientY;
    musicPlayerEl.style.left = `${originLeft}px`;
    musicPlayerEl.style.top = `${originTop}px`;
    musicPlayerEl.style.bottom = 'auto';
    musicPlayerEl.style.transform = 'none';
    wmpTitlebar.setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  const onPointerMove = e => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const maxLeft = window.innerWidth - musicPlayerEl.offsetWidth - 8;
    const maxTop = window.innerHeight - musicPlayerEl.offsetHeight - 8;
    const left = clamp(originLeft + dx, 8, Math.max(maxLeft, 8));
    const top = clamp(originTop + dy, 8, Math.max(maxTop, 8));
    musicPlayerEl.style.left = `${left}px`;
    musicPlayerEl.style.top = `${top}px`;
  };

  const onPointerUp = e => {
    if (!dragging) return;
    dragging = false;
    musicPlayerEl.classList.remove('is-dragging');
    wmpTitlebar.releasePointerCapture(e.pointerId);
    saveWmpPosition();
  };

  wmpTitlebar.addEventListener('pointerdown', onPointerDown);
  wmpTitlebar.addEventListener('pointermove', onPointerMove);
  wmpTitlebar.addEventListener('pointerup', onPointerUp);
  wmpTitlebar.addEventListener('pointercancel', onPointerUp);
  loadWmpPosition();
}

async function initMusicPlayer() {
  if (!musicPlayerEl || !ytPlayerHost) return;

  await buildPlaylistLibrary();

  musicPlayPause?.addEventListener('click', async () => {
    await ensureMusicEngine();
    if (!musicPlayerReady || !ytPlayer) return;
    if (musicMuted && musicVolumeLevel > 0) {
      ytPlayer.unMute();
      musicMuted = false;
    }
    if (musicPlaying) {
      ytPlayer.pauseVideo();
      musicPlaying = false;
    } else {
      ytPlayer.playVideo();
      musicPlaying = true;
    }
    updateMusicUi();
  });

  musicPrev?.addEventListener('click', () => playPrevTrack());
  musicNext?.addEventListener('click', () => playNextTrack());

  musicShuffle?.addEventListener('click', () => {
    musicShuffleOn = !musicShuffleOn;
    updateMusicUi();
  });

  musicRepeat?.addEventListener('click', () => {
    musicLoopOn = !musicLoopOn;
    updateMusicUi();
  });

  musicNextUp?.addEventListener('click', () => {
    const nextIdx = getNextTrackIndex();
    if (nextIdx >= 0) playTrackAtIndex(nextIdx);
  });

  musicMute?.addEventListener('click', async () => {
    await ensureMusicEngine();
    if (!ytPlayer) return;
    if (musicMuted) {
      musicPlayer.unMute();
      musicPlayer.setVolume(musicVolumeLevel || 100);
      musicMuted = false;
      if (!musicPlaying) {
        musicPlayer.playVideo();
        musicPlaying = true;
      }
    } else {
      musicPlayer.mute();
      musicMuted = true;
    }
    updateMusicUi();
  });

  musicVolume?.addEventListener('input', async () => {
    await ensureMusicEngine();
    if (!ytPlayer) return;
    musicVolumeLevel = Number(musicVolume.value) || 0;
    if (musicVolumeLevel === 0) {
      musicPlayer.mute();
      musicMuted = true;
    } else {
      musicPlayer.unMute();
      musicPlayer.setVolume(musicVolumeLevel);
      musicMuted = false;
    }
    updateMusicUi();
  });

  document.querySelectorAll('.wmp-tab').forEach(tab => {
    tab.addEventListener('click', () => setWmpView(tab.dataset.wmpView || 'now'));
  });

  initMusicSeek();

  syncWmpPlacement();
  window.addEventListener('resize', syncWmpPlacement, { passive: true });
  updateMusicUi();

  scheduleMusicAutoplayOnGesture();
}

function scheduleMusicAutoplayOnGesture() {
  if (!canAutoplayMusic()) return;
  const start = () => {
    ensureMusicEngine().then(() => tryStartMusicAutoplay());
  };
  document.addEventListener('pointerdown', start, { once: true, capture: true });
  document.addEventListener('keydown', start, { once: true, capture: true });
}

async function tryStartMusicAutoplay() {
  if (!canAutoplayMusic() || !wmpPlaylistTracks.length) return;
  await ensureMusicEngine();
  if (!ytPlayer?.playVideo) return;
  ytPlayer.mute();
  ytPlayer.playVideo();
  musicMuted = true;
  musicPlaying = true;
  updateMusicUi();
}

function syncMusicWithEfficiency() {
  if (!ytPlayer?.pauseVideo) return;
  if (!canAutoplayMusic()) {
    ytPlayer.pauseVideo();
    musicPlaying = false;
  }
  updateMusicUi();
}

efficiencyMode = loadEfficiencyPreference();
applyPerfLiteClass();
buildSillyStickers();
buildExperienceMessenger();
buildProjectExplorer();
initAeroBubbleSpawner();
initCursorEffects();
initFooterClock();
initProfileAge();
initBirthdayToast();
initFooterAscii();
initSectionIdleObservers();
applyEfficiencyMode();
initMusicPlayer();
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
const projectModalTitleEl = document.getElementById('projectModalTitle');
const projectModalBreadcrumb = document.getElementById('projectModalBreadcrumb');
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
  const altText = image.alt || image.caption || 'Project screenshot';
  const captionText = image.caption || image.alt || '';
  const caption = captionText
    ? `<figcaption>${escapeHtml(captionText)}</figcaption>`
    : '';
  const src = thumbPath(image.src);
  return `
    <figure class="fe-figure">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(altText)}" loading="lazy" />
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
    `<span class="fe-tag-chip">${escapeHtml(tag)}</span>`
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

  const linksHtml = (project.links || []).map(link =>
    `<a class="fe-btn" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
  ).join('');

  return `
    <article class="case-article">
      ${eyebrowHtml}
      <h1 class="case-title">${escapeHtml(project.title)}</h1>
      <p class="case-tagline">${escapeHtml(d.tagline)}</p>
      <p class="case-lede">${escapeHtml(d.lede)}</p>
      <div class="case-meta">${metaHtml}</div>
      <div class="tag-row" aria-label="Technologies used">${tagsHtml}</div>
      ${heroHtml}
      ${sectionsHtml}
      ${talkingHtml}
      <div class="case-cta">
        ${project.demo ? `<a class="fe-btn" href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">View live demo</a>` : ''}
        ${project.repo ? `<a class="fe-btn" href="${escapeHtml(project.repo)}" target="_blank" rel="noopener noreferrer">Source code</a>` : ''}
        ${linksHtml}
      </div>
    </article>
  `;
}

const projectModalIconImg = document.getElementById('projectModalIconImg');
const projectModalIconFallback = document.getElementById('projectModalIconFallback');

function setProjectModalIcon(previewImage) {
  if (!projectModalIconImg || !projectModalIconFallback) return;
  if (previewImage) {
    projectModalIconImg.src = previewImage;
    projectModalIconImg.hidden = false;
    projectModalIconFallback.hidden = true;
  } else {
    projectModalIconImg.hidden = true;
    projectModalIconImg.removeAttribute('src');
    projectModalIconFallback.hidden = false;
  }
}

function openProjectModal(project) {
  if (!projectModal || !projectModalContent) return;
  activeProjectSlug = project.slug;
  if (projectModalTitleEl) {
    projectModalTitleEl.textContent = project.title;
  }
  setProjectModalIcon(project.previewImage);
  if (projectModalBreadcrumb) {
    const categoryName = getCategoryName(project.category);
    projectModalBreadcrumb.textContent = `Projects › ${categoryName} › ${project.title}`;
  }
  projectModalContent.innerHTML = renderProjectDetail(project);
  projectModal.hidden = false;
  projectModal.classList.add('open');
  document.body.classList.add('modal-open');
  projectModalClose?.focus();
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove('open');
  projectModal.hidden = true;
  document.body.classList.remove('modal-open');
  activeProjectSlug = null;
  projectModalContent.innerHTML = '';
  if (projectModalTitleEl) {
    projectModalTitleEl.textContent = 'Projects';
  }
  if (projectModalBreadcrumb) {
    projectModalBreadcrumb.textContent = 'Projects';
  }
  setProjectModalIcon(null);
}

if (projectModal && projectModalClose && projectModalBackdrop) {
  projectModalClose.addEventListener('click', closeProjectModal);
  projectModalBackdrop.addEventListener('click', closeProjectModal);
}

/* ── Lightbox ───────────────────────────────────────────── */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');
const lbCaption = document.getElementById('lbCaption');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');
let lbMode = 'gallery';
let lbMessageImages = [];
let lbMessageIndex = 0;

function setLightboxNavVisible(visible) {
  if (lbPrev) lbPrev.hidden = !visible;
  if (lbNext) lbNext.hidden = !visible;
  if (lbCounter) lbCounter.hidden = !visible;
}

function updateMessageLb() {
  if (!lbImg || !lbMessageImages.length) return;
  const item = lbMessageImages[lbMessageIndex];
  lbImg.src = item.src;
  lbImg.alt = item.alt || '';
  if (lbCounter) {
    lbCounter.textContent = lbMessageImages.length > 1
      ? `${lbMessageIndex + 1} / ${lbMessageImages.length}`
      : '';
  }
  if (lbCaption) {
    if (item.alt) {
      lbCaption.textContent = item.alt;
      lbCaption.hidden = false;
    } else {
      lbCaption.textContent = '';
      lbCaption.hidden = true;
    }
  }
}

function openMessageLightbox(images, startIndex = 0) {
  if (!lightbox || !lbImg || !images.length) return;
  lbMode = 'message';
  lbMessageImages = images;
  lbMessageIndex = clamp(startIndex, 0, images.length - 1);
  setLightboxNavVisible(lbMessageImages.length > 1);
  lightbox.classList.add('open', 'lightbox--message');
  updateMessageLb();
}

function openLightbox(idx) {
  if (!lightbox || !lbImg || !lbCounter) return;
  lbMode = 'gallery';
  lbMessageImages = [];
  setLightboxNavVisible(true);
  lightbox.classList.remove('lightbox--message');
  if (lbCaption) lbCaption.hidden = true;
  lbIndex = idx;
  updateLb();
  lightbox.classList.add('open');
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open', 'lightbox--message');
  lbMode = 'gallery';
  lbMessageImages = [];
  setLightboxNavVisible(true);
  if (lbCaption) {
    lbCaption.hidden = true;
    lbCaption.textContent = '';
  }
  if (lbImg) {
    lbImg.src = TRANSPARENT_PIXEL;
    lbImg.removeAttribute('src');
  }
}

function stepLightbox(delta) {
  if (lbMode === 'message' && lbMessageImages.length) {
    lbMessageIndex = (lbMessageIndex + delta + lbMessageImages.length) % lbMessageImages.length;
    updateMessageLb();
    return;
  }
  if (lbMode === 'gallery') {
    lbIndex = (lbIndex + delta + IMAGES.length) % IMAGES.length;
    updateLb();
  }
}

function updateLb() {
  if (!lbImg || !lbCounter) return;
  lbImg.style.animation = 'none';
  lbImg.offsetHeight;
  lbImg.style.animation = '';
  lbImg.src = thumbPath(IMAGES[lbIndex]);
  lbImg.alt = IMAGES[lbIndex].split('/').pop();
  lbCounter.textContent = `${lbIndex + 1} / ${IMAGES.length}`;
}

if (lightbox && lbImg && lbCounter) {
  document.getElementById('lbClose').addEventListener('click', closeLightbox);

  document.getElementById('lbPrev').addEventListener('click', () => stepLightbox(-1));

  document.getElementById('lbNext').addEventListener('click', () => stepLightbox(1));

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });
}

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (projectModal && projectModal.classList.contains('open')) {
    closeProjectModal();
    return;
  }
});
