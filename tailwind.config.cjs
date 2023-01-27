/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '	#161722',
      },
      backgroundImage: {
        'hero-pattern-light-mobile': "url('/src/assets/bg-mobile-light.jpg')",
        'hero-pattern-dark-mobile': "url('/src/assets/bg-mobile-dark.jpg)",
        'hero-pattern-light-desktop': "url('/src/assets/bg-desktop-light.jpg')",
        'hero-pattern-dark-desktop': "url('/src/assets/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
