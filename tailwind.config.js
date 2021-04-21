module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'md-max': { 'max': '850px' },
    },
    extend: {
      colors: {
        green: {
          250: '#9ad3c2'
        },
      },
      fontFamily: {
        'condensed': ['"Open Sans Condensed"', 'sans-serif']
      },
      fontSize: {
        'fluid': 'calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
