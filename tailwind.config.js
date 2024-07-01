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
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'satisfy': ['Satisfy', 'cursive'],
        'sacramento': ['Sacramento', 'cursive'],
        'allura': ['Allura', 'cursive'],
        'pinyon-script': ['Pinyon Script', 'cursive'],
        'mrs-saint-delafield': ['Mrs Saint Delafield', 'cursive'],
        'alex-brush': ['Alex Brush', 'cursive'],
        'yellowtail': ['Yellowtail', 'cursive'],
        'tangerine': ['Tangerine', 'cursive'],
        'rouge-script': ['Rouge Script', 'cursive'],
        'petit-formal-script': ['Petit Formal Script', 'cursive'],
        'cookie': ['Cookie', 'cursive'],
        'parisienne': ['Parisienne', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};