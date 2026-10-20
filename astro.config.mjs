import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages "user site" : le dépôt s'appelle nels-g.github.io,
  // le site est donc servi à la racine (pas besoin de `base`).
  site: 'https://nels-g.github.io',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false, // fr = "/", en = "/en/..."
    },
  },
});
