import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        primary_pink: '#f2bbc9',
        secondary_pink: '#d9597b',
        tertiary_pink: '#d3a3af',
        primary_blue: '#6E6AD9',
        secondary_blue: '#6763BF',
        primary_peach: '#F28379',
        primary_yellow: '#ffff00',

      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
        'width': 'width',
        'max-width':'max-width'
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
