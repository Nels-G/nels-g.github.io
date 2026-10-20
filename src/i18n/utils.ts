import { ui, defaultLang } from './ui';

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getAlternatePaths(pathname: string): { fr: string; en: string } {
  let frPath = pathname;
  let enPath = pathname;

  if (pathname.startsWith('/en')) {
    frPath = pathname.replace(/^\/en/, '') || '/';
  } else {
    enPath = pathname === '/' ? '/en' : `/en${pathname}`;
  }

  return { fr: frPath, en: enPath };
}
