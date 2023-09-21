import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    analytics: true
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push']
      }
    })
  ]
})
