export type ProjectCategory = 'AI' | 'HCI' | 'Software';

export interface Localized {
  fr: string;
  en: string;
}

export interface Project {
  title: Localized;
  category: ProjectCategory;
  period: Localized;
  affiliation: Localized;
  description: Localized;
  url?: string;
  image?: string;
}

// Projets personnels, repris du CV. Liens GitHub vérifiés via l'API GitHub.
export const projects: Project[] = [
  {
    title: { en: 'Vegetable Crop Health Analysis', fr: 'Analyse de santé des cultures maraîchères' },
    category: 'AI',
    period: { en: '2026 - Present', fr: '2026 - Présent' },
    affiliation: { en: 'Personal project', fr: 'Projet personnel' },
    description: {
      en: 'Development of a computer vision AI model for the early detection and diagnosis of vegetable crop diseases from a single image. Technologies: Python, OpenCV, TensorFlow / PyTorch, Scikit-learn, NumPy.',
      fr: "Développement d'un modèle d'intelligence artificielle par vision par ordinateur pour la détection et le diagnostic précoce des maladies des cultures maraîchères à partir d'une image. Technologies : Python, OpenCV, TensorFlow / PyTorch, Scikit-learn, NumPy.",
    },
    image: '/images/projects/analyse-cultures.jpg',
  },
  {
    title: { en: 'AI Context Copier - VS Code Extension', fr: 'AI Context Copier - Extension VS Code' },
    category: 'Software',
    period: { en: '2026', fr: '2026' },
    affiliation: { en: 'Personal project · open source', fr: 'Projet personnel · open source' },
    description: {
      en: 'VS Code extension that copies several files selected in the Explorer in one click, formatted with their relative path and ready to paste into ChatGPT, Claude, Gemini or any other AI assistant. Skips folders and binary files, preserves indentation and line endings, with settings to exclude folders, add line numbers or include the project tree. Technologies: TypeScript, VS Code Extension API, esbuild.',
      fr: "Extension VS Code qui copie en un clic plusieurs fichiers sélectionnés dans l'Explorer, formatés avec leur chemin relatif et prêts à être collés dans ChatGPT, Claude, Gemini ou tout autre assistant IA. Ignore les dossiers et fichiers binaires, préserve l'indentation et les fins de ligne, avec des réglages pour exclure des dossiers, numéroter les lignes ou ajouter l'arborescence du projet. Technologies : TypeScript, VS Code Extension API, esbuild.",
    },
    url: 'https://github.com/Nels-G/ai-context-copier',
    image: '/images/projects/ai-context-copier.png',
  },
  {
    title: { en: 'VisionSlide - Gesture-Based PowerPoint Control', fr: 'VisionSlide - Contrôle de présentations PowerPoint par gestes' },
    category: 'HCI',
    period: { en: '2025', fr: '2025' },
    affiliation: { en: 'Personal project', fr: 'Projet personnel' },
    description: {
      en: 'Design and development of a real-time HCI control system for navigating PowerPoint presentations through webcam-based hand gesture detection. Technologies: Python, OpenCV, MediaPipe, NumPy, PyAutoGUI, Git.',
      fr: "Conception et développement d'un système de contrôle IHM en temps réel permettant la navigation dans des présentations PowerPoint via la détection de gestes de la main par webcam. Technologies : Python, OpenCV, MediaPipe, NumPy, PyAutoGUI, Git.",
    },
    url: 'https://github.com/Nels-G/VisionSlide',
  },
  {
    title: { en: 'DocSchool - Final Year Project', fr: "DocSchool - Projet de Fin d'Études (PFE)" },
    category: 'Software',
    period: { en: '2025', fr: '2025' },
    affiliation: { en: 'ESGIS TOGO', fr: 'ESGIS TOGO' },
    description: {
      en: 'Platform for managing and sharing academic resources, featuring an interactive assistant (AI chat) to support students. Technologies: React, Django, PostgreSQL, REST API, GroqCloud API.',
      fr: 'Plateforme de gestion et de partage de ressources académiques intégrant un assistant interactif (Chat IA) pour accompagner les étudiants. Technologies : React, Django, PostgreSQL, REST API, GroqCloud API.',
    },
    image: '/images/projects/docschool.jpg',
  },
];

export interface RepoLink {
  name: string;
  description?: Localized;
  language?: string;
  url: string;
}

// Autres dépôts à mettre en avant (section « Plus sur GitHub »), vide pour l'instant.
export const otherRepos: RepoLink[] = [];
