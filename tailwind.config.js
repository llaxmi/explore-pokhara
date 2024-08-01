// tailwind.config.js
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#23973f",
          200: "#196f2f",
        },
        secondary: {
          100: "#f2f5f1",
          200: "#151515",
        },

        fontFamily: {
          'roboto': ['Roboto', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
};
