// tailwind.config.js
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        primary: {
         green: '#365E32',
      //     200: "#E5E5E5",
       },
      //   secondary: {
      //     100: "#F5F5F5",
      //     200: "#E5E5E5",
       },

          100: "#399918",
          200: "#337357",
        },
        secondary: {
          100: "#f2f5f1",
          200: "#151515",
      },
    },
  },
  plugins: [],
}
}
