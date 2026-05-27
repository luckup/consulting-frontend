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
        panel: '0 16px 48px rgba(0, 223, 255, 0.14)',
        soft: '0 4px 24px rgba(42, 42, 42, 0.06)',
      },
      colors: {
        paper: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f0f0f0',
          300: '#e5e5e5',
        },
        ink: {
          50: '#fafafa',
          100: '#f0f0f0',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#2e2e2e',
          800: '#1f1f1f',
          900: '#171717',
        },
        brand: {
          DEFAULT: '#00DFFF',
          600: '#00BFE6',
          700: '#009FBD',
          light: '#E6FBFF',
        },
        moon: {
          navy: '#2B2B2B',
          panel: '#00BFE6',
          teal: '#00DFFF',
          sky: '#B8F4FF',
        },
      },
    },
  },
  plugins: [],
}
