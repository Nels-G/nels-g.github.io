// Projets personnels, repris du CV. Liens GitHub vérifiés via l'API GitHub.

type Localized<T> = { fr: T; en: T };

export interface Project {
  title: Localized<string>;
  period: Localized<string>;
  ongoing: boolean;
  desc: Localized<string>;
  technologies: string[];
  image?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: {
      fr: 'Analyse de santé des cultures maraîchères',
      en: 'Vegetable Crop Health Analysis',
    },
    period: { fr: '2026 - Présent', en: '2026 - Present' },
    ongoing: true,
    desc: {
      fr: "Développement d'un modèle d'intelligence artificielle par vision par ordinateur pour la détection et le diagnostic précoce des maladies des cultures maraîchères à partir d'une image.",
      en: 'Development of a computer vision AI model for the early detection and diagnosis of vegetable crop diseases from a single image.',
    },
    technologies: ['Python', 'OpenCV', 'TensorFlow / PyTorch', 'Scikit-learn', 'NumPy'],
  },
  {
    title: {
      fr: 'VisionSlide - Contrôle de présentations PowerPoint par gestes',
      en: 'VisionSlide - Gesture-Based PowerPoint Control',
    },
    period: { fr: '2025', en: '2025' },
    ongoing: false,
    desc: {
      fr: "Conception et développement d'un système de contrôle IHM en temps réel permettant la navigation dans des présentations PowerPoint via la détection de gestes de la main par webcam.",
      en: 'Design and development of a real-time HCI control system for navigating PowerPoint presentations through webcam-based hand gesture detection.',
    },
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI', 'Git'],
    repo: 'https://github.com/Nels-G/VisionSlide',
  },
  {
    title: {
      fr: "DocSchool - Projet de Fin d'Études (PFE)",
      en: 'DocSchool - Final Year Project',
    },
    period: { fr: '2025', en: '2025' },
    ongoing: false,
    desc: {
      fr: 'Plateforme de gestion et de partage de ressources académiques intégrant un assistant interactif (Chat IA) pour accompagner les étudiants.',
      en: 'Platform for managing and sharing academic resources, featuring an interactive assistant (AI chat) to support students.',
    },
    technologies: ['React', 'Django', 'PostgreSQL', 'REST API', 'GroqCloud API'],
    image: '/projects/Docschool.jpg',
    repo: 'https://github.com/Nels-G/DocSchool',
  },
];
