export interface Localized {
  fr: string;
  en: string;
}

export interface Talk {
  title: Localized;
  event: Localized;
  type: Localized;
  location: Localized;
  date: string;
}

// Vide pour l'instant : ajouter uniquement des conférences/ateliers confirmés.
// Exemple :
// {
//   title: { en: 'Talk title', fr: 'Titre de la présentation' },
//   event: { en: 'Event name', fr: "Nom de l'événement" },
//   type: { en: 'Workshop', fr: 'Atelier' },
//   location: { en: 'Lomé, Togo', fr: 'Lomé, Togo' },
//   date: '2026',
// },
export const talks: Talk[] = [];
