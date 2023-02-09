/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '	#161722',
        'secondary-dark': '#25273D',
        'gray-800': '#393A4B',
        'gray-700': '#767992',
        'gray-500': '#9495A5',
        'violet-800': '#C8CBE7',
      },
      boxShadow: {
        'input-light': '0px 35px 50px -15px rgba(194, 195, 214, 0.5)',
        'input-dark': '0px 35px 50px -15px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'hero-pattern-light-mobile': "url('/src/assets/bg-mobile-light.jpg')",
        'hero-pattern-dark-mobile': "url('/src/assets/bg-mobile-dark.jpg')",
        'hero-pattern-light-desktop': "url('/src/assets/bg-desktop-light.jpg')",
        'hero-pattern-dark-desktop': "url('/src/assets/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
