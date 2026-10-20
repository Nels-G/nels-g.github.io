export interface Localized {
  fr: string;
  en: string;
}

export interface Talk {
  title: Localized;
  event: Localized;
  type: Localized;
  location: Localized;
  date: Localized;
  url?: string;
  urlLabel?: Localized;
  image?: string;
}

const online = { fr: 'En ligne', en: 'Online' };
const esgis = { fr: 'ESGIS TOGO, Adidogomé, Lomé', en: 'ESGIS TOGO, Adidogomé, Lomé' };

// Du plus récent au plus ancien. Ajouter uniquement des événements confirmés.
export const talks: Talk[] = [
  {
    title: {
      fr: 'Déployer votre propre IA sur Microsoft Azure Cloud & le programme Microsoft Student Ambassadors',
      en: 'Deploy Your Own AI on Microsoft Azure Cloud & the Microsoft Student Ambassadors Programme',
    },
    event: {
      fr: 'Atelier pratique Microsoft Student Ambassadors - co-animé avec Akomagni Kodjovi Rodrigue ASSOUN',
      en: 'Microsoft Student Ambassadors hands-on workshop - co-led with Akomagni Kodjovi Rodrigue ASSOUN',
    },
    type: { fr: 'Atelier', en: 'Workshop' },
    location: esgis,
    date: { fr: '05 juin 2026', en: 'Jun 5, 2026' },
    image: '/images/talks/azure-msa-2026.jpg',
  },
  {
    title: {
      fr: "Intégrer un modèle d'IA dans vos projets sans budget initial",
      en: 'Integrating an AI Model into Your Projects with No Initial Budget',
    },
    event: {
      fr: 'DevFest 2025 - Google Developer Groups (Keynote, jour 2)',
      en: 'DevFest 2025 - Google Developer Groups (Keynote, Day 2)',
    },
    type: { fr: 'Keynote', en: 'Keynote' },
    location: { fr: 'UniPod, Lomé, Togo', en: 'UniPod, Lomé, Togo' },
    date: { fr: '13 déc. 2025', en: 'Dec 13, 2025' },
    url: 'https://docs.google.com/presentation/d/19R-HOakFMvj5ip4wDlh3ATOiStBpfpVNCGkDV9L0D58/edit?usp=sharing',
    urlLabel: { fr: 'Voir la présentation', en: 'View slides' },
    image: '/images/talks/ia-sans-budget-unipod-2025.jpg',
  },
  {
    title: {
      fr: 'Héberger gratuitement son site avec Vercel et GitHub',
      en: 'Hosting Your Website for Free with Vercel and GitHub',
    },
    event: { fr: 'nelsbrowser - atelier pratique', en: 'nelsbrowser - hands-on workshop' },
    type: { fr: 'Atelier', en: 'Workshop' },
    location: online,
    date: { fr: '21 juin 2025', en: 'Jun 21, 2025' },
    image: '/images/talks/vercel-github-2025.jpg',
  },
  {
    title: {
      fr: "Formation d'initiation au développement web NoCode / LowCode",
      en: 'Introduction to NoCode / LowCode Web Development',
    },
    event: { fr: 'Tech Community Club UAC', en: 'Tech Community Club UAC' },
    type: { fr: 'Formation', en: 'Training' },
    location: online,
    date: { fr: '11 avr. 2025', en: 'Apr 11, 2025' },
    image: '/images/talks/nocode-tcc-uac-2025.jpg',
  },
  {
    title: {
      fr: 'Créez votre site web en un temps record',
      en: 'Build Your Website in Record Time',
    },
    event: { fr: 'Edufy Plus', en: 'Edufy Plus' },
    type: { fr: 'Meet', en: 'Meetup' },
    location: { fr: 'En ligne (Google Meet)', en: 'Online (Google Meet)' },
    date: { fr: '04 avr. 2025', en: 'Apr 4, 2025' },
    image: '/images/talks/edufy-plus-2025.jpg',
  },
  {
    title: {
      fr: 'HTML & CSS : lancez votre aventure dans le développement web',
      en: 'HTML & CSS: Start Your Web Development Journey',
    },
    event: { fr: 'nelsbrowser', en: 'nelsbrowser' },
    type: { fr: 'Formation', en: 'Training' },
    location: { fr: 'En ligne (Google Meet)', en: 'Online (Google Meet)' },
    date: { fr: '23-24 nov. 2024', en: 'Nov 23-24, 2024' },
    image: '/images/talks/html-css-2024.jpg',
  },
];
