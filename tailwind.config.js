module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./public/**/*.html'],
    options: {
      keyframes: true,
      variables: true,
    },
  },
  // darkMode: false, // or 'media' or 'class'
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
