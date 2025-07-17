import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import playformCompress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import pdf from 'astro-pdf';

const PDF_MARGIN = 40;

// https://astro.build/config
export default defineConfig({
  site: 'https://zandome.com',
  integrations: [
    react(),
    sitemap(),
    playformCompress(),
    icon(),
    pdf({
      pages: {
        '/cv': {
          path: 'cv.pdf',
          pdf: {
            margin: {
              top: PDF_MARGIN,
              bottom: PDF_MARGIN,
              left: PDF_MARGIN,
              right: PDF_MARGIN,
            },
          },
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  redirects: {
    '/curriculum': {
      status: 302,
      destination: '/cv',
    },
  },
});
