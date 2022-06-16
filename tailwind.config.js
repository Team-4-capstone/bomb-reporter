module.exports = {
  content: [
    "./src/***/*.{js,jsx,ts,tsx}",
    "./src/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'ukrBlue':'#0057B7',
      'ukrYellow':'#FFDD00',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
