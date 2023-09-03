module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
      height: {
        fhd: "1080px",
      },
      width: {
        "50": '200px',
        fhd: "1920px",
      },
    },
    maxHeight: (theme) => ({
      ...theme("height"),
    }),
    minHeight: (theme) => ({
      ...theme("height"),
    }),
    maxWidth: (theme) => ({
      ...theme("width"),
    }),
    minWidth: (theme) => ({
      ...theme("width"),
    }),
  },
  variants: {
    extend: {},
  },
};
