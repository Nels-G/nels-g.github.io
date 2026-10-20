// Données générées à partir de parcours.* (fr.json / en.json) de mon-portfolio.

type Localized<T> = { fr: T; en: T };

export interface Experience {
  company: string;
  current: boolean;
  contract: Localized<string> | null;
  tools: string[];
  role: Localized<string>;
  desc: Localized<string>;
  period: Localized<string>;
  duration: Localized<string>;
  location: Localized<string>;
}

export interface Education {
  degree: Localized<string>;
  period: string;
  school: string;
}

export interface Community {
  org: string;
  role: Localized<string>;
  period: Localized<string>;
  desc: Localized<string>;
}

export interface Certification {
  org: string;
  title: Localized<string>;
  date: Localized<string>;
}

export interface SkillGroup {
  label: Localized<string>;
  items: Localized<string[]>;
}

export interface Language {
  name: string;
  level: Localized<string>;
}

export const experiences: Experience[] = [
  {
    "company": "NanooStudio",
    "current": true,
    "contract": {
      "fr": "Temps plein",
      "en": "Full-time"
    },
    "tools": [
      "TypeScript",
      "Next.js",
      "Node.js",
      "React.js",
      "PostgreSQL",
      "Figma"
    ],
    "role": {
      "fr": "Développeur Full Stack",
      "en": "Full Stack Developer"
    },
    "desc": {
      "fr": "Design et prototypage d'interfaces modernes sur Figma axés sur l'expérience utilisateur. Développement d'applications web scalables avec Next.js, React.js et Node.js. Conception et gestion des bases de données avec PostgreSQL et Supabase. Maintenance, refonte et optimisation de sites web sous WordPress et sécurisation des solutions.",
      "en": "Design and prototyping of modern interfaces on Figma focused on user experience. Development of scalable web applications with Next.js, React.js and Node.js. Database design and management with PostgreSQL and Supabase. Maintenance, redesign and optimization of WordPress websites and solution security."
    },
    "period": {
      "fr": "Avr. 2026 – Aujourd'hui",
      "en": "Apr. 2026 – Present"
    },
    "duration": {
      "fr": "6 mois",
      "en": "6 mos"
    },
    "location": {
      "fr": "Lomé, Togo · Hybride",
      "en": "Lomé, Togo · Hybrid"
    }
  },
  {
    "company": "ESGIS TOGO",
    "current": true,
    "contract": {
      "fr": "Temps partiel",
      "en": "Part-time"
    },
    "tools": [
      "C",
      "SQL",
      "phpMyAdmin",
      "Algorithmique",
      "Bases de données"
    ],
    "role": {
      "fr": "Assistant pédagogique en informatique",
      "en": "Teaching Assistant in Computer Science"
    },
    "desc": {
      "fr": "Encadrement des travaux dirigés (TD) et pratiques (TP) en programmation et bases de données pour étudiants de 1ère et 2ème année. Animation de séances pratiques en modélisation des données, SQL et utilisation de phpMyAdmin. Enseignement en algorithmique et langage C, suivi pédagogique et évaluation des travaux pratiques.",
      "en": "Supervision of tutorials (TD) and practical labs (TP) in programming and databases for 1st and 2nd year students. Practical sessions on data modeling, SQL, and phpMyAdmin. Mentoring in algorithms and C programming, student progress tracking and lab assessments."
    },
    "period": {
      "fr": "Oct. 2024 – Aujourd'hui",
      "en": "Oct. 2024 – Present"
    },
    "duration": {
      "fr": "En poste",
      "en": "Current"
    },
    "location": {
      "fr": "Lomé, Togo · Sur site",
      "en": "Lomé, Togo · On-site"
    }
  },
  {
    "company": "DKOM GROUP",
    "current": false,
    "contract": {
      "fr": "Temps partiel",
      "en": "Part-time"
    },
    "tools": [
      "React.js",
      "Figma",
      "Django",
      "PostgreSQL",
      "Git",
      "WordPress"
    ],
    "role": {
      "fr": "Développeur web / Responsable Front-end",
      "en": "Web Developer / Front-end Lead"
    },
    "desc": {
      "fr": "Évolution d’un stage de 3 mois vers un rôle de Responsable Front-End au sein de l’équipe technique. Conception des maquettes et prototypes UX/UI avec Figma. Développement et intégration des interfaces web avec React.js. Collaboration backend sur Django & PostgreSQL, gestion Git, configuration de l’environnement applicatif et intégration de sites vitrines WordPress.",
      "en": "Promoted from a 3-month internship to Front-End Lead within the technical team. Designed UI/UX mockups with Figma, built web interfaces with React.js, backend collaboration on Django & PostgreSQL, Git version control, app setup and WordPress sites."
    },
    "period": {
      "fr": "Mars 2025 – Fév. 2026",
      "en": "Mar. 2025 – Feb. 2026"
    },
    "duration": {
      "fr": "1 an",
      "en": "1 yr"
    },
    "location": {
      "fr": "Lomé, Togo · Hybride",
      "en": "Lomé, Togo · Hybrid"
    }
  },
  {
    "company": "G-CONT INTERNATIONAL",
    "current": false,
    "contract": null,
    "tools": [
      "Figma",
      "React.js",
      "Django",
      "PostgreSQL",
      "Microsoft Teams"
    ],
    "role": {
      "fr": "Développeur Web & UX/UI Designer",
      "en": "Web Developer & UX/UI Designer"
    },
    "desc": {
      "fr": "Conception des interfaces utilisateurs et réalisation des maquettes UX/UI avec Figma. Développement Front-End d’une plateforme SaaS de gestion des conteneurs avec React.js. Versionnement Git, collaboration d'équipe via Microsoft Teams et participation à l’intégration des interfaces dans un environnement Django & PostgreSQL.",
      "en": "Designed user interfaces and prototypes in Figma. Front-End development of a container management SaaS platform using React.js. Git version control and team collaboration via Microsoft Teams in a Django & PostgreSQL environment."
    },
    "period": {
      "fr": "Août 2025 – Janv. 2026",
      "en": "Aug. 2025 – Jan. 2026"
    },
    "duration": {
      "fr": "6 mois",
      "en": "6 mos"
    },
    "location": {
      "fr": "Québec, Canada · À distance",
      "en": "Quebec, Canada · Remote"
    }
  },
  {
    "company": "Agridigitale",
    "current": false,
    "contract": null,
    "tools": [
      "Python",
      "PHP",
      "HTML/CSS",
      "JavaScript",
      "Figma",
      "API REST"
    ],
    "role": {
      "fr": "Développeur Full-Stack",
      "en": "Full-Stack Developer"
    },
    "desc": {
      "fr": "Contribution au développement d’une IA pour diagnostiquer les maladies des plantes via photos (Python). Intégration d’API REST, développement du back-end en PHP et front-end en HTML/CSS/JavaScript. Conception du design avec Figma et rédaction d’un cahier des charges pour chatbot agricole.",
      "en": "Contributed to building an AI model for diagnosing plant diseases via images (Python). Integrated REST APIs, developed PHP backend and HTML/CSS/JS frontend, created UI designs in Figma, and drafted specs for an agricultural chatbot."
    },
    "period": {
      "fr": "Sept. 2024",
      "en": "Sept. 2024"
    },
    "duration": {
      "fr": "1 mois",
      "en": "1 mo"
    },
    "location": {
      "fr": "Lomé, Togo · Sur site",
      "en": "Lomé, Togo · On-site"
    }
  },
  {
    "company": "TOGO CODE RUN",
    "current": false,
    "contract": null,
    "tools": [
      "Adobe Photoshop",
      "Illustrator",
      "Figma"
    ],
    "role": {
      "fr": "Responsable Conception Graphique",
      "en": "Graphic Design Lead"
    },
    "desc": {
      "fr": "Création de l’identité visuelle et des affiches officielles pour l’événement tech national TOGO CODE RUN 2024. Conception des supports publicitaires et coordination graphique avec l’équipe communication.",
      "en": "Created visual identity and official branding for the TOGO CODE RUN 2024 national tech event. Designed promotional assets and coordinated with the communications team."
    },
    "period": {
      "fr": "Juin – Août 2024",
      "en": "Jun. – Aug. 2024"
    },
    "duration": {
      "fr": "3 mois",
      "en": "3 mos"
    },
    "location": {
      "fr": "Lomé, Togo · Hybride",
      "en": "Lomé, Togo · Hybrid"
    }
  }
];

export const education: Education[] = [
  {
    "degree": {
      "fr": "Licence en Informatique, Réseau et Télécoms – Architecture Logicielle",
      "en": "Bachelor's in Computer Science, Networks & Telecoms – Software Architecture"
    },
    "period": "2022 – 2025",
    "school": "ESGIS TOGO · Lomé, Togo"
  },
  {
    "degree": {
      "fr": "Baccalauréat série D (Sciences)",
      "en": "Scientific Baccalaureate (Series D)"
    },
    "period": "2022",
    "school": "Collège Protestant de Notsè · Notsè, Togo"
  }
];

export const community: Community[] = [
  {
    "org": "Microsoft",
    "role": {
      "fr": "Microsoft Student Ambassador",
      "en": "Microsoft Student Ambassador"
    },
    "period": {
      "fr": "Juil. 2025 – Présent",
      "en": "Jul. 2025 – Present"
    },
    "desc": {
      "fr": "Leader sur campus au sein d'une communauté mondiale de 120 000+ étudiants. Construction de communautés tech et développement de compétences techniques.",
      "en": "Campus leader within a global community of 120,000+ students. Building tech communities and developing technical skills."
    }
  },
  {
    "org": "Python Togo",
    "role": {
      "fr": "UX Product Designer - PyCon Togo",
      "en": "UX Product Designer - PyCon Togo"
    },
    "period": {
      "fr": "Mai – Déc. 2025",
      "en": "May – Dec. 2025"
    },
    "desc": {
      "fr": "Conception de l'identité visuelle et des supports de communication pour la communauté Python Togo. Visuels pour réseaux sociaux et événements.",
      "en": "Designed the visual identity and communication materials for the Python Togo community. Visuals for social media and events."
    }
  },
  {
    "org": "Tech Communities Club ESGIS",
    "role": {
      "fr": "Responsable Design - TCC ESGIS",
      "en": "Design Lead - TCC ESGIS"
    },
    "period": {
      "fr": "Oct. 2025 – Févr. 2026",
      "en": "Oct. 2025 – Feb. 2026"
    },
    "desc": {
      "fr": "Core team : création de visuels et supports graphiques pour la communauté étudiante tech de l'ESGIS.",
      "en": "Core team: created visuals and graphic materials for the ESGIS student tech community."
    }
  },
  {
    "org": "MLSA · Colonne Sociale",
    "role": {
      "fr": "Graphiste - MLSA & Colonne Sociale",
      "en": "Graphic Designer - MLSA & Colonne Sociale"
    },
    "period": {
      "fr": "2022 – 2025",
      "en": "2022 – 2025"
    },
    "desc": {
      "fr": "Conception de supports graphiques pour événements et communication. Identité visuelle cohérente pour deux organisations actives.",
      "en": "Graphic design for events and communication. Consistent visual identity for two active tech and social organizations."
    }
  }
];

export const certifications: Certification[] = [
  {
    "org": "Microsoft",
    "title": {
      "fr": "Microsoft Learn Student Ambassador",
      "en": "Microsoft Learn Student Ambassador"
    },
    "date": {
      "fr": "Mai 2026",
      "en": "May 2026"
    }
  },
  {
    "org": "EF SET",
    "title": {
      "fr": "EF SET English Certificate - C1 Advanced (66/100)",
      "en": "EF SET English Certificate - C1 Advanced (66/100)"
    },
    "date": {
      "fr": "Avril 2026",
      "en": "April 2026"
    }
  },
  {
    "org": "IBM",
    "title": {
      "fr": "Exploratory Data Analysis for Machine Learning",
      "en": "Exploratory Data Analysis for Machine Learning"
    },
    "date": {
      "fr": "Juillet 2024",
      "en": "July 2024"
    }
  },
  {
    "org": "Sololearn",
    "title": {
      "fr": "Introduction to LLMs & Prompt Engineering",
      "en": "Introduction to LLMs & Prompt Engineering"
    },
    "date": {
      "fr": "2025",
      "en": "2025"
    }
  }
];

export const skills: SkillGroup[] = [
  {
    "label": {
      "fr": "Design & UX/UI",
      "en": "Design & UX/UI"
    },
    "items": {
      "fr": [
        "Figma",
        "Adobe Photoshop",
        "Illustrator",
        "Prototypage",
        "Wireframing",
        "Design System",
        "User Research"
      ],
      "en": [
        "Figma",
        "Adobe Photoshop",
        "Illustrator",
        "Prototyping",
        "Wireframing",
        "Design System",
        "User Research"
      ]
    }
  },
  {
    "label": {
      "fr": "Développement Web & Logiciel",
      "en": "Web & Software Development"
    },
    "items": {
      "fr": [
        "Python",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Django",
        "Django REST Framework",
        "C",
        "SQL",
        "PostgreSQL",
        "MySQL",
        "WordPress",
        "HTML / CSS",
        "API REST"
      ],
      "en": [
        "Python",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Django",
        "Django REST Framework",
        "C",
        "SQL",
        "PostgreSQL",
        "MySQL",
        "WordPress",
        "HTML / CSS",
        "REST API"
      ]
    }
  },
  {
    "label": {
      "fr": "Outils & DevOps",
      "en": "Tools & DevOps"
    },
    "items": {
      "fr": [
        "Git / GitHub",
        "Docker",
        "CI/CD",
        "API REST",
        "VS Code",
        "Vercel",
        "phpMyAdmin",
        "Microsoft Teams",
        "Agile / Scrum"
      ],
      "en": [
        "Git / GitHub",
        "Docker",
        "CI/CD",
        "REST API",
        "VS Code",
        "Vercel",
        "phpMyAdmin",
        "Microsoft Teams",
        "Agile / Scrum"
      ]
    }
  }
];

export const languages: Language[] = [
  {
    "name": "Français",
    "level": {
      "fr": "Langue maternelle",
      "en": "Native"
    }
  },
  {
    "name": "English",
    "level": {
      "fr": "C1 Advanced (EF SET)",
      "en": "C1 Advanced (EF SET)"
    }
  }
];
