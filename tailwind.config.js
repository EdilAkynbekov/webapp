/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-20": "rgba(17, 17, 19, 0.2)",
        black: "#111113",
        "black-60": "rgba(17, 17, 19, 0.6)",
        "background-green-10": "#f2faf0",
        "secondary-default": "#4ca034",
        orange: "#ffb527",
        black1: "#000",
        red: "#ff0000",

        white: "#fff",
        black: "#000",
        darkgray: "#a0a0a0",
        orange: "#ffb527",
      },
      spacing: {},
      fontFamily: {

        body: "Inter",
        poppins: "Poppins",


        montserrat: "Montserrat",


        poppins: "Poppins",
      },
      borderRadius: {
        "12xs": "1px",
        sm: "14px",

        "4xs": "9px",
        "8xs": "5px",
        "47xl": "66px",

      },
    },
    fontSize: {

      base: "16px",


      xs: "12px",

      lg: "18px",
      mini: "15px",


      mid: "17px",
      xs: "12px",
      mini: "15px",
      "11xl": "30px",
      sm: "14px",
      lg: "18px",

      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
