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
        saddlebrown: "#745822",
        white: "#fff",
        black: "#000",
        darkgray: "#a0a0a0",
        orange: "#ffb527",
        "gray-50": "#333333"
        
      },
      spacing: {},
      fontFamily: {

        body: "Inter",
        poppins: "Poppins",


        montserrat: "Montserrat",


        poppins: "Poppins",
      },
       borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "31xl": "50px",
        "12xs": "1px",
        sm: "14px",
        "11xl": "30px",
        mini: "15px",
        "81xl": "100px",
        "3xs": "10px",
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
      "2xl":"24px",
      sm10: "11px",
      sm8:"9px",
      xxl: "64px",
      inherit: "inherit",
       lg: "18px",
      mini: "15px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      smi: "13px",
      "3xs": "10px",
      "5xl": "24px",
      "45xl": "64px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      // Add your new screens here
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      // Keep your custom media queries
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
    
  },
  corePlugins: {
    preflight: false,
  },
};
