/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        grace: {
          50: '#fef9f3',
          100: '#fdf0e1',
          200: '#fadec2',
          300: '#f6c398',
          400: '#f09e6c',
          500: '#ec7e48',
          600: '#dd633a',
          700: '#b84c31',
          800: '#933e2f',
          900: '#773528',
        },
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9deff',
          300: '#7cc5ff',
          400: '#36a8ff',
          500: '#0c8bff',
          600: '#006de8',
          700: '#0056bb',
          800: '#074a99',
          900: '#0c3f7e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}