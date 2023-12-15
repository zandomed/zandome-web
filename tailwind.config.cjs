/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './app/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },

    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // background: '#121212'
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'logo-draw-stroke': {
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
        'logo-fill': {
          to: {
            'fill-opacity': 1,
            'stroke-opacity': 0,
            'stroke-width': '1px'
          }
        },
        'text-loading-fade': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        'text-loading-dot-pulse': {
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
        'logo-draw': `logo-draw-stroke 3.5s linear 700ms both,
							logo-fill 3s ease-out 2.5s both`,
        'text-loading-fade': 'text-loading-fade 2s ease 700ms both',
        'text-loading-dot-pulse':
          'text-loading-dot-pulse 1.4s ease-in-out infinite both'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@headlessui/tailwindcss')]
}
