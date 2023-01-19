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
      rondap:'#1F1F1F',
      web_black:'#252525',
      new_black:'#070606',
      bg_col: " #fcf7f7",
      mr : "#003631",
      ailmobg: 'rgba(106, 157, 255, 0.1)',
      ailmobord: "rgba(191, 206, 235, 0.2)",
      hex:'#1a1a1a',
      g:'#398476',
      ticked: "#714DD9",
      grabby: '#EFB94D',
      ronda:'#8D0CCA',
      byt: '#0A2A98',
      ronda_hero: '#8D0CCA1A',
      by_hero: '#E3F2FE80',

      secondary: {
        100: '#E2E2D5',
        200: '#888883',
        300:'#E812B9',

      },
      linkedin:'#006699',
    },
    fontFamily: {
      body: ['Poppins'],
      lato: ['Lato']
    },
    width: {
      '400':'400px',
      '834':'834px',
      '484': '484px',
      '415':'415px',
      '436': '436px',
      '607':'607px',
      '700':'700px',
      '545':'545px',
      '1440':'1440px',
      'konga-jumia': '252px',
      '364':'364px',
      '783':'783px',
      '342':'342px',
      '442':'442px'
     },
     maxWidth: {
      '1440': '1440px',
    },lineHeight: {
      '30': '30px',
    },height:{
      '418':'418px',
      '622':'622px',
      '472':'472px'
    },
    boxShadow: {
      'new': '0 0 50px rgba(0, 67, 101, 0.08)',
    },
    backgroundImage: {
      'footer-texture': "url('/img/footer-texture.png')",
    }
  
  }, 
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
      display:["hover"]
    },
   },
  plugins: [],
}