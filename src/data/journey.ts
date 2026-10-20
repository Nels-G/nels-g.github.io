export type JourneyCategory = 'education' | 'experience' | 'volunteer' | 'milestone';

export interface Localized {
  fr: string;
  en: string;
}

export interface JourneyEntry {
  period: Localized;
  title: Localized;
  org: Localized;
  location?: Localized;
  category: JourneyCategory;
  description?: Localized;
  url?: string;
}

// Repris du CV (CV_Nelson_Galley.pdf), du plus ancien au plus récent.
export const journey: JourneyEntry[] = [
  {
    period: { en: '2022', fr: '2022' },
    title: { en: 'Scientific Baccalaureate - Series D (Mathematics & Sciences)', fr: 'Baccalauréat Scientifique - Série D (Mathématiques & Sciences)' },
    org: { en: 'Collège Protestant de Notsè', fr: 'Collège Protestant de Notsè' },
    location: { en: 'Notsè, Togo', fr: 'Notsè, Togo' },
    category: 'education',
  },
  {
    period: { en: 'Dec 2022 - 2025', fr: 'Déc. 2022 - 2025' },
    title: {
      en: "Bachelor's in Computer Science, Networks and Telecommunications - Software Architecture",
      fr: 'Licence en Informatique, Réseau et Télécoms - Option Architecture Logicielle',
    },
    org: { en: 'ESGIS TOGO', fr: 'ESGIS TOGO' },
    location: { en: 'Lomé, Togo', fr: 'Lomé, Togo' },
    category: 'education',
    description: {
      en: 'LMD programme fully completed: 180/180 ECTS credits. Key areas: advanced algorithms, C/C++/OOP programming, software engineering, modelling (UML, MERISE), database architecture (Oracle, SQL Server, NoSQL), security & cryptography, graph theory.',
      fr: 'Cursus LMD validé intégralement : 180/180 crédits ECTS. Domaines clés : algorithmique avancée, programmation C/C++/POO, génie logiciel, modélisation (UML, MERISE), architecture des bases de données (Oracle, SQL Server, NoSQL), sécurité & cryptographie, théorie des graphes.',
    },
  },
  {
    period: { en: 'Jul 2024', fr: 'Juil. 2024' },
    title: { en: 'Exploratory Data Analysis for Machine Learning', fr: 'Exploratory Data Analysis for Machine Learning' },
    org: { en: 'IBM', fr: 'IBM' },
    category: 'milestone',
  },
  {
    period: { en: 'Oct 2024 - Present', fr: 'Oct. 2024 - Présent' },
    title: { en: 'Computer Science Teaching Assistant', fr: 'Assistant Pédagogique en Informatique' },
    org: { en: 'ESGIS TOGO · Part-time', fr: 'ESGIS TOGO · Temps partiel' },
    location: { en: 'Lomé, Togo', fr: 'Lomé, Togo' },
    category: 'experience',
    description: {
      en: 'Supervision of tutorials and lab sessions for first- and second-year undergraduate students. Hands-on sessions in algorithms, C programming and data modelling/SQL (MySQL, phpMyAdmin). Assessment of lab work and teaching good coding practices.',
      fr: 'Encadrement des TD et TP pour les étudiants de Licence 1 et 2. Séances pratiques en algorithmique, programmation C et modélisation/SQL (MySQL, phpMyAdmin). Évaluation des travaux pratiques et transmission des bonnes pratiques de code.',
    },
  },
  {
    period: { en: 'Mar 2025 - Feb 2026', fr: 'Mars 2025 - févr. 2026' },
    title: { en: 'Web Developer & Front-End Lead', fr: 'Développeur Web & Responsable Front-End' },
    org: { en: 'DKOM GROUP · Full-time / Hybrid', fr: 'DKOM GROUP · Temps plein / Hybride' },
    location: { en: 'Lomé, Togo', fr: 'Lomé, Togo' },
    category: 'experience',
    description: {
      en: 'Progressed from a 3-month internship to a front-end leadership role within the technical team. Built interfaces with React.js and integrated them with a Django / PostgreSQL backend via REST APIs. Led version control (Git) and kept design and implementation consistent.',
      fr: "Évolution d'un stage de 3 mois vers un poste de responsabilité front-end au sein de l'équipe technique. Développement des interfaces avec React.js et intégration avec un backend Django / PostgreSQL via API REST. Pilotage du versionnement (Git) et cohérence design-intégration.",
    },
  },
  {
    period: { en: 'May - Dec 2025', fr: 'Mai - déc. 2025' },
    title: { en: 'UX Product Designer', fr: 'UX Product Designer' },
    org: { en: 'Python Togo (PyCon Togo)', fr: 'Python Togo (PyCon Togo)' },
    category: 'volunteer',
    description: {
      en: "Visual identity and interfaces for the Python community's national events.",
      fr: 'Identité visuelle et interfaces pour les événements nationaux de la communauté Python.',
    },
  },
  {
    period: { en: 'Jul 2025 - Present', fr: 'Juil. 2025 - Présent' },
    title: { en: 'Microsoft Student Ambassador (MSA)', fr: 'Microsoft Student Ambassador (MSA)' },
    org: { en: 'Microsoft', fr: 'Microsoft' },
    category: 'volunteer',
    description: {
      en: 'Organising technical workshops, promoting Cloud & AI technologies, and leading the university tech community.',
      fr: 'Organisation de workshops techniques, promotion des technologies Cloud & IA, animation de la communauté tech universitaire.',
    },
  },
  {
    period: { en: 'Oct 2025 - Feb 2026', fr: 'Oct. 2025 - févr. 2026' },
    title: { en: 'Graphic Design Lead', fr: 'Responsable Design Graphique' },
    org: { en: 'Tech Communities Club (TCC) ESGIS', fr: 'Tech Communities Club (TCC) ESGIS' },
    category: 'volunteer',
    description: {
      en: "Designed the club's official visual materials and coordinated its communication.",
      fr: 'Conception des supports visuels officiels et coordination de la communication du club.',
    },
  },
  {
    period: { en: 'Apr 2026 - Present', fr: 'Avr. 2026 - Présent' },
    title: { en: 'Full Stack Developer', fr: 'Développeur Full Stack' },
    org: { en: 'NANOO STUDIO · Full-time', fr: 'NANOO STUDIO · Temps plein' },
    location: { en: 'Lomé, Togo', fr: 'Lomé, Togo' },
    category: 'experience',
    description: {
      en: 'Design and development of scalable web applications (Next.js, React.js, Node.js). Data flow modelling and management with PostgreSQL and Supabase. Prototyping of modern, usability-focused interfaces in Figma.',
      fr: "Conception et développement d'applications web scalables (Next.js, React.js, Node.js). Modélisation et gestion des flux de données avec PostgreSQL et Supabase. Prototypage d'interfaces modernes sur Figma, centrées sur l'ergonomie.",
    },
  },
  {
    period: { en: 'Apr 2026', fr: 'Avr. 2026' },
    title: { en: 'EF SET English Certificate - C1 Advanced (66/100)', fr: 'EF SET English Certificate - C1 Advanced (66/100)' },
    org: { en: 'EF SET', fr: 'EF SET' },
    category: 'milestone',
  },
  {
    period: { en: 'May 2026', fr: 'Mai 2026' },
    title: { en: 'Microsoft Learn Student Ambassador 2026', fr: 'Microsoft Learn Student Ambassador 2026' },
    org: { en: 'Microsoft', fr: 'Microsoft' },
    category: 'milestone',
  },
  {
    period: { en: '2026', fr: '2026' },
    title: { en: '1st Place - TOGO CODE RUN Design Challenge', fr: '1ère Place - TOGO CODE RUN Design Challenge' },
    org: { en: 'TOGO CODE RUN', fr: 'TOGO CODE RUN' },
    category: 'milestone',
  },
];
