/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2D7D46',
          light: '#3A9A58',
          dark: '#1E5C32',
        },
        secondary: {
          DEFAULT: '#C4713B',
          light: '#D9885A',
          dark: '#A05A2A',
        },
        accent: '#F5C542',
        'bg-dark': '#0A0A0A',
        'bg-warm': '#FAF8F5',
      },
    },
  },
  plugins: [],
}
