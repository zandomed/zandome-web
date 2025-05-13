import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import playformCompress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zandome.com',
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    react(),
    sitemap(),
    playformCompress(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
});
