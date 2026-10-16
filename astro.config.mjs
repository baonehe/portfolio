// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
