import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nels-g.github.io',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false, // fr = "/", en = "/en/..."
    },
  },
});