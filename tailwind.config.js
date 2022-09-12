// const { join } = require('path');
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [join(__dirname,"./src/**/*.{html,js}")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {   colors: {
      primary: '#FF6363',
      secondary: {
        100: '#E2E2D5',
        200: '#888883',
        300:'#E812B9',
      }
    },
    fontFamily: {
      body: ['Poppins']
    },
    width: {
      '484': '484px',
      '436': '436px',
      'konga-jumia': '252px'
     }
  },
  },
  plugins: [],
}