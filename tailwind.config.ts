import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#8B1A1A',
          light: '#A52020',
          dark: '#6B1414',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C84F',
          dark: '#B8942E',
        },
        parchment: {
          DEFAULT: '#FDE8EF',
          dark: '#F5D0DC',
        },
        'mughal-teal': {
          DEFAULT: '#2D7D6F',
          light: '#3D9E8E',
        },
        'deep-brown': '#2C1810',
        'mid-brown': '#5C3D2E',
      },
      fontFamily: {
        devanagari: ['var(--font-devanagari)', 'serif'],
        english: ['var(--font-english)', 'Georgia', 'serif'],
        ui: ['var(--font-ui)', 'system-ui', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
