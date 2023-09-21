/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        background: '#121212'
      },
      keyframes: {
        ADrawStrokeLogoZandome: {
          '0%': {
            'stroke-opacity': 0
          },
          '25%': {
            'stroke-opacity': 1
          },
          '90%': {
            'stroke-width': '6px'
          },
          '100%': {
            'stroke-dashoffset': 0,
            'stroke-width': '4px',
            'stroke-opacity': 1
          }
        },
        AColorFillLogoZandome: {
          to: {
            'fill-opacity': 1,
            'stroke-opacity': 0,
            'stroke-width': '1px'
          }
        },
        AFadeLoadingText: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        ABlinkDotLoadingText: {
          '0%': {
            opacity: 0.2
          },
          '20%': {
            opacity: 1
          },
          '100%': {
            opacity: 0.2
          }
        }
      },
      animation: {
        zandomeLogo: `ADrawStrokeLogoZandome 3.5s linear 700ms both,
							AColorFillLogoZandome 3s ease-out 2.5s both`,
        fadeLoadingText: 'AFadeLoadingText 2s ease 700ms both',
        blinkDotLoadingText:
          'ABlinkDotLoadingText 1.4s ease-in-out infinite both'
      }
    }
  },
  plugins: []
}
