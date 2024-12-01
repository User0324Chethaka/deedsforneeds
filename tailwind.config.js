/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        thin: ["Roboto-Thin", "sans-serif"],
        "thin-italic": ["Roboto-Thin-Italic", "sans-serif"],
        light: ["Roboto-Light", "sans-serif"],
        "light-italic": ["Roboto-Light-Italic", "sans-serif"],
        regular: ["Roboto-Regular", "sans-serif"],
        italic: ["Roboto-Italic", "sans-serif"],
        medium: ["Roboto-Medium", "sans-serif"],
        "medium-italic": ["Roboto-Medium-Italic", "sans-serif"],
        bold: ["Roboto-Bold", "sans-serif"],
        "bold-italic": ["Roboto-Bold-Italic", "sans-serif"],
        black: ["Roboto-Black", "sans-serif"],
        "black-italic": ["Roboto-Black-Italic", "sans-serif"],
      },
      fontSize: {
        //scaling is based on https://tailwindcss.com/docs/font-size#customizing-your-theme
        sm: "3.28vw", // 4.1 * 0.8
        base: "4.1vw", // 4.1 * 1
        xl: "5.125vw", // 4.1 * 1.25
        "2xl": "6.4083vw", // 4.1 * 1.563
        "3xl": "8.0113vw", // 4.1 * 1.953
        "4xl": "10.0081vw", // 4.1 * 2.441
        "5xl": "12.9132vw", // 4.1 * 3.052
      },
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#e1eaff",
          200: "#c3d5ff",
          300: "#a5c0ff",
          400: "#8babff",
          500: "#0836af", // main color theme
          600: "#072a8c",
          700: "#061e69",
          800: "#041346",
          900: "#030a23",
          950: "#020614",
        },
      },
    },
  },
  plugins: [],
};
