import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'

import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push']
      }
    }),
    react()
  ],
  output: 'server',
  adapter: vercel({
    analytics: true,
    speedInsights: {
      enabled: true
    }
  })
})
