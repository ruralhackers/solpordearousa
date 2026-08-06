// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://solpordearousa.com',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'gl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // Emits xhtml:link alternates so the sitemap carries the same hreflang
      // signals as the <head>.
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-GB', gl: 'gl-ES' },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
