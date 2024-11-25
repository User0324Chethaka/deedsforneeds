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
      colors: {
        main: "#0836AF",
        background: "#F0F4FA",
        foreground: "#F8FAFD",
      },
    },
  },
  plugins: [],
};
