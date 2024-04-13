// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body-bg': '#5A6AA5', // custom color for background
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #6F5AA5, #955AA5, #5A6AA5)', // custom radial gradient
        'gradient-to-r-from-purple-400-to-blue-500': 'linear-gradient(to right, #9d4edd, #4d5bf9)', // existing linear gradient
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};




