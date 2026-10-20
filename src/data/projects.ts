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
    url: 'https://github.com/Nels-G/DocSchool',
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
