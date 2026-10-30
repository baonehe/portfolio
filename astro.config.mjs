// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://baonehe.github.io',
  base: '/portfolio',
  devToolbar: { enabled: false },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
