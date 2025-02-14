/** @type {import('tailwindcss').Config} */
const tailwindcssColors = require("tailwindcss/colors")
const { colors } = require("./src/theme/colors");

module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      ...tailwindcssColors,
      blue: colors.blue
    },
    extend: {
      colors: {
        charcoal: colors.charcoal,
        "steel-gray": colors.steelGray,
        "steel-night": colors.steelNight
      }
    }
  },
  plugins: []
};