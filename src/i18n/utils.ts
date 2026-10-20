import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// Préfixe un chemin interne avec /en quand on est en anglais.
export function localizePath(path: string, lang: Lang): string {
  if (lang === 'fr') return path;
  return path === '/' ? '/en' : `/en${path}`;
}

export function getAlternatePaths(pathname: string): { fr: string; en: string } {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  if (clean === '/en' || clean.startsWith('/en/')) {
    const fr = clean.replace(/^\/en/, '') || '/';
    return { fr, en: clean };
  }
  return { fr: clean, en: clean === '/' ? '/en' : `/en${clean}` };
}
