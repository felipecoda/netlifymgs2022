module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}

// module.exports = {
//     plugins: [
//         require("tailwindcss")("./tailwind.config.js"),
//         require("autoprefixer"),
//     ]
// }