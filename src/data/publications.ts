export interface Localized {
  fr: string;
  en: string;
}

export interface Publication {
  title: Localized;
  authors: string;
  venue: Localized;
  year: Localized;
  description?: Localized;
  links?: { label: Localized; url: string }[];
}

// Vide pour l'instant : ajouter uniquement des publications réelles.
export const publications: Publication[] = [];
