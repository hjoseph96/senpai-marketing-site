import type { Config } from 'tailwindcss'
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#ff5d1b",
        dark: {
          background: "#40404a",
          background2: "#ebebeb",
        }
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        0: ['0px', '0px'],
        sm: ['12px', '16px'],
        lt: ['13px', '16px'],
        md: ['14px', '22px'],
        lg: ['15px', '23px'],
        xl: ['18px', '26px'],
        '2xl': ['26px', '34px'],
        '3xl': ['30px', '38px'],
        '4xl': ['32px', '40px'],
        '5xl': ['40px', '40px'],
        '48c': ['48px', '68px'],
        '6xl': ['68px', '84px'],
        '7xl': ['78px', '96px'],
      },
    },
  },
  plugins: [
    plugin(function ({addComponents, addUtilities}) {
      addComponents({
        '.h1': {
          '@apply font-barlow text-6xl font-bold': {}
        },
        '.h2': {
          '@apply font-barlow text-5xl font-bold': {}
        },
        '.h3': {
          '@apply font-barlow text-4xl font-bold': {}
        },
        '.title1': {
          '@apply font-barlow text-3xl font-bold': {}
        },
        '.title2': {
          '@apply font-barlow text-2xl font-bold': {}
        },
        '.title3': {
          '@apply font-barlow text-xl font-bold': {}
        },
        '.title4': {
          '@apply font-barlow text-xl font-normal': {}
        },
        '.headline': {
          '@apply font-barlow text-lg font-bold': {}
        },
        '.body': {
          '@apply font-barlow text-lg font-normal': {}
        },
        '.caption1': {
          '@apply font-lato text-xl font-normal': {}
        },
        '.caption2': {
          '@apply font-barlow text-lt font-normal': {}
        },
        '.caption3': {
          '@apply font-barlow text-sm font-bold': {}
        },
        '.caption4': {
          '@apply font-barlow text-sm font-normal': {}
        },
        '.custom48': {
          '@apply text-48c font-semibold': {}
        }
      });
    }),
  ],
}
export default config
