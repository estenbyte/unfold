// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  markdown: {
    shikiConfig: {
      themes: {
        light: 'night-owl-light',
        dark: 'night-owl',
      },
    },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
