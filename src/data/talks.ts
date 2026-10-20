// Communications, conférences, ateliers et workshops.
// Vide pour l'instant : ajouter uniquement des événements confirmés.
//
// Exemple d'entrée :
// {
//   title: { fr: 'Titre de la présentation', en: 'Talk title' },
//   event: { fr: "Nom de l'événement", en: 'Event name' },
//   type: { fr: 'Workshop', en: 'Workshop' },
//   location: { fr: 'Lomé, Togo', en: 'Lomé, Togo' },
//   date: '2026',
//   link: 'https://...', // optionnel : slides, vidéo, page de l'événement
// },

type Localized = { fr: string; en: string };

export interface Talk {
  title: Localized;
  event: Localized;
  type: Localized;
  location: Localized;
  date: string;
  link?: string;
}

export const talks: Talk[] = [];
