/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin'); (for adding custom classes)
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        starter: {
          red: '#470506',
          darkred: '#380404',
          yellow: '#FFEB01',
          beige: '#f8f7ee',
        },
      },
    },
  },
  // Add Custom Classes (import )
  //
  // plugins: [
  //   plugin(function({ addUtilities }){
  //     const utils = {
  //       '.custom-class': {
  //         'display': "inline",
  //       }
  //     };

  //     addUtilities(utils)
  //   })
  // ],
}