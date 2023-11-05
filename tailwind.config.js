module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: '#232F3E',
          DEFAULT: '#131921',
        },
      },
      height: {
        '5.5': '22px',
        '50': '200px',
        '78': '312px',
        '128': '512px',
        '160': '640px',
        fhd: '1080px',
        hdPlus: '900px',
      },
      width: {
        '5.5': '22px',
        '50': '200px',
        '78': '312px',
        '128': '512px',
        '160': '640px',
        fhd: '1920px',
        hdPlus: '1600px',
      },
    },
    maxHeight: ({theme}) => ({
      ...theme('height'),
    }),
    minHeight: ({theme}) => ({
      ...theme('height'),
    }),
    maxWidth: ({theme}) => ({
      ...theme('width'),
    }),
    minWidth: ({theme}) => ({
      ...theme('width'),
    }),
  },
  variants: {
    extend: {},
  },
}
