import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  adapter: vercel({
    analytics: true,
    speedInsights: {
      enabled: true,
    },
  }),
});
