/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 16px 48px rgba(0, 217, 255, 0.12)',
        soft: '0 4px 24px rgba(0, 0, 0, 0.35)',
      },
      colors: {
        background: '#0B1020',
        surface: '#151B2F',
        paper: {
          50: '#0B1020',
          100: '#151B2F',
          200: '#1C2540',
          300: '#232E4A',
        },
        ink: {
          50: '#1E2838',
          100: '#2A3548',
          200: '#3D4A5C',
          300: '#5A6575',
          400: '#6E7A8C',
          500: '#8490A0',
          600: '#9AA4B2',
          700: '#C5CDD8',
          800: '#E0E6EF',
          900: '#F4F7FB',
        },
        brand: {
          DEFAULT: '#00D9FF',
          600: '#00BFE6',
          700: '#00A5CC',
          light: '#0F2A35',
        },
        moon: {
          navy: '#0B1020',
          panel: '#151B2F',
          teal: '#00D9FF',
          sky: '#7C5CFF',
        },
        accent: {
          violet: '#7C5CFF',
        },
      },
    },
  },
  plugins: [],
}
