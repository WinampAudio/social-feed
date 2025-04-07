const postcssOklabFunction = require('@csstools/postcss-oklab-function');
const tailwindcssPostcss = require('@tailwindcss/postcss');

module.exports = {
  plugins: [
    postcssOklabFunction({ preserve: true }),
    tailwindcssPostcss(),
  ]
};