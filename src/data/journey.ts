// Parcours, repris du CV (CV_Nelson_Galley.pdf). Versions anglaises = traductions du CV.

type Localized<T> = { fr: T; en: T };

export interface Education {
  degree: Localized<string>;
  school: string;
  location: string;
  period: Localized<string>;
  details: Localized<string[]>;
}

export interface Experience {
  role: Localized<string>;
  org: string;
  contract: Localized<string>;
  location: string;
  period: Localized<string>;
  current: boolean;
  details: Localized<string[]>;
}

export interface Community {
  role: Localized<string>;
  org: string;
  period: Localized<string>;
  current: boolean;
  details: Localized<string[]>;
}

export interface Distinction {
  title: Localized<string>;
  org?: string;
  date: Localized<string>;
}

export interface SkillGroup {
  label: Localized<string>;
  items: (string | Localized<string>)[];
}

export const education: Education[] = [
  {
    degree: {
      fr: 'Licence en Informatique, Réseau et Télécoms - Option Architecture Logicielle',
      en: "Bachelor's in Computer Science, Networks and Telecommunications - Software Architecture",
    },
    school: 'ESGIS TOGO',
    location: 'Lomé, Togo',
    period: { fr: 'Déc. 2022 - 2025', en: 'Dec. 2022 - 2025' },
    details: {
      fr: [
        'Cursus LMD validé intégralement : 180/180 crédits ECTS.',
        'Domaines clés : algorithmique avancée, programmation C/C++/POO, génie logiciel, modélisation (UML, MERISE), architecture des bases de données (Oracle, SQL Server, NoSQL), sécurité & cryptographie, théorie des graphes.',
      ],
      en: [
        'LMD programme fully completed: 180/180 ECTS credits.',
        'Key areas: advanced algorithms, C/C++/OOP programming, software engineering, modelling (UML, MERISE), database architecture (Oracle, SQL Server, NoSQL), security & cryptography, graph theory.',
      ],
    },
  },
  {
    degree: {
      fr: 'Baccalauréat Scientifique - Série D (Mathématiques & Sciences)',
      en: 'Scientific Baccalaureate - Series D (Mathematics & Sciences)',
    },
    school: 'Collège Protestant de Notsè',
    location: 'Notsè, Togo',
    period: { fr: '2022', en: '2022' },
    details: { fr: [], en: [] },
  },
];

export const experiences: Experience[] = [
  {
    role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
    org: 'NANOO STUDIO',
    contract: { fr: 'Temps plein', en: 'Full-time' },
    location: 'Lomé, Togo',
    period: { fr: 'Avril 2026 - Présent', en: 'April 2026 - Present' },
    current: true,
    details: {
      fr: [
        "Conception et développement d'applications web scalables (Next.js, React.js, Node.js).",
        'Modélisation et gestion des flux de données avec PostgreSQL et Supabase.',
        "Prototypage d'interfaces modernes sur Figma, centrées sur l'ergonomie.",
      ],
      en: [
        'Design and development of scalable web applications (Next.js, React.js, Node.js).',
        'Data flow modelling and management with PostgreSQL and Supabase.',
        'Prototyping of modern, usability-focused interfaces in Figma.',
      ],
    },
  },
  {
    role: { fr: 'Assistant Pédagogique en Informatique', en: 'Computer Science Teaching Assistant' },
    org: 'ESGIS TOGO',
    contract: { fr: 'Temps partiel', en: 'Part-time' },
    location: 'Lomé, Togo',
    period: { fr: 'Octobre 2024 - Présent', en: 'October 2024 - Present' },
    current: true,
    details: {
      fr: [
        'Encadrement des TD et TP pour les étudiants de Licence 1 et 2.',
        'Séances pratiques en algorithmique, programmation C et modélisation/SQL (MySQL, phpMyAdmin).',
        'Évaluation des travaux pratiques et transmission des bonnes pratiques de code.',
      ],
      en: [
        'Supervision of tutorials and lab sessions for first- and second-year undergraduate students.',
        'Hands-on sessions in algorithms, C programming and data modelling/SQL (MySQL, phpMyAdmin).',
        'Assessment of lab work and teaching good coding practices.',
      ],
    },
  },
  {
    role: { fr: 'Développeur Web & Responsable Front-End', en: 'Web Developer & Front-End Lead' },
    org: 'DKOM GROUP',
    contract: { fr: 'Temps plein / Hybride', en: 'Full-time / Hybrid' },
    location: 'Lomé, Togo',
    period: { fr: 'Mars 2025 - Février 2026', en: 'March 2025 - February 2026' },
    current: false,
    details: {
      fr: [
        "Évolution d'un stage de 3 mois vers un poste de responsabilité front-end au sein de l'équipe technique.",
        'Développement des interfaces avec React.js et intégration avec un backend Django / PostgreSQL via API REST.',
        'Pilotage du versionnement (Git) et cohérence design-intégration.',
      ],
      en: [
        'Progressed from a 3-month internship to a front-end leadership role within the technical team.',
        'Built interfaces with React.js and integrated them with a Django / PostgreSQL backend via REST APIs.',
        'Led version control (Git) and kept design and implementation consistent.',
      ],
    },
  },
];

export const community: Community[] = [
  {
    role: { fr: 'Microsoft Student Ambassador (MSA)', en: 'Microsoft Student Ambassador (MSA)' },
    org: 'Microsoft',
    period: { fr: 'Juillet 2025 - Présent', en: 'July 2025 - Present' },
    current: true,
    details: {
      fr: ['Organisation de workshops techniques, promotion des technologies Cloud & IA, animation de la communauté tech universitaire.'],
      en: ['Organising technical workshops, promoting Cloud & AI technologies, and leading the university tech community.'],
    },
  },
  {
    role: { fr: 'Responsable Design Graphique', en: 'Graphic Design Lead' },
    org: 'Tech Communities Club (TCC) ESGIS',
    period: { fr: 'Oct. 2025 - Fév. 2026', en: 'Oct. 2025 - Feb. 2026' },
    current: false,
    details: {
      fr: ['Conception des supports visuels officiels et coordination de la communication du club.'],
      en: ["Designed the club's official visual materials and coordinated its communication."],
    },
  },
  {
    role: { fr: 'UX Product Designer', en: 'UX Product Designer' },
    org: 'Python Togo (PyCon Togo)',
    period: { fr: 'Mai 2025 - Déc. 2025', en: 'May 2025 - Dec. 2025' },
    current: false,
    details: {
      fr: ['Identité visuelle et interfaces pour les événements nationaux de la communauté Python.'],
      en: ["Visual identity and interfaces for the Python community's national events."],
    },
  },
];

export const distinctions: Distinction[] = [
  {
    title: { fr: 'Microsoft Learn Student Ambassador 2026', en: 'Microsoft Learn Student Ambassador 2026' },
    org: 'Microsoft',
    date: { fr: 'Mai 2026', en: 'May 2026' },
  },
  {
    title: { fr: 'EF SET English Certificate - C1 Advanced (66/100)', en: 'EF SET English Certificate - C1 Advanced (66/100)' },
    org: 'EF SET',
    date: { fr: 'Avril 2026', en: 'April 2026' },
  },
  {
    title: { fr: 'Exploratory Data Analysis for Machine Learning', en: 'Exploratory Data Analysis for Machine Learning' },
    org: 'IBM',
    date: { fr: 'Juillet 2024', en: 'July 2024' },
  },
  {
    title: { fr: '1ère Place - TOGO CODE RUN Design Challenge', en: '1st Place - TOGO CODE RUN Design Challenge' },
    date: { fr: '2026', en: '2026' },
  },
];

export const skills: SkillGroup[] = [
  { label: { fr: 'Langages', en: 'Languages' }, items: ['C', 'C++', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'PHP', 'SQL'] },
  {
    label: { fr: 'Frameworks', en: 'Frameworks' },
    items: ['React.js', 'Next.js', 'Django', 'Django REST Framework', 'Node.js', 'ASP.NET MVC', 'J2EE'],
  },
  {
    label: { fr: 'Bases de données', en: 'Databases' },
    items: ['PostgreSQL', 'Oracle', 'SQL Server', 'MySQL', 'NoSQL', 'Supabase'],
  },
  {
    label: { fr: 'Génie logiciel & outils', en: 'Software engineering & tools' },
    items: ['Git', 'GitHub', { fr: 'Docker (notions)', en: 'Docker (basics)' }, 'CI/CD', { fr: 'API REST', en: 'REST API' }, 'UML', 'MERISE', 'Agile'],
  },
  {
    label: { fr: 'Design & IHM', en: 'Design & HCI' },
    items: ['Figma', 'Photoshop', { fr: 'Prototypage UX/UI', en: 'UX/UI prototyping' }, 'Wireframing'],
  },
];

export const languages: { name: Localized<string>; level?: Localized<string> }[] = [
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Technique', en: 'Technical' } },
  { name: { fr: 'Éwé', en: 'Ewe' } },
];

export const interests: Localized<string[]> = {
  fr: ['Piano', 'Football', 'Arts graphiques'],
  en: ['Piano', 'Football', 'Graphic arts'],
};
