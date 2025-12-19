/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      // 3D Printing Theme Colors
      deepPurple: "#1d1145",
      trapperGreen: "#0db4b9",
      pinkBoot: "#f2a1a1",
      modernPink: "#e76d89",

      // Legacy colors (mapped to new theme)
      darkColor: "#1d1145",
      lightColor: "#52525b",
      lightOrange: "#fca99b",
      lightBlue: "#7688DB",
      darkBlue: "#6c7fd8",
      darkText: "#686e7d",
      lightBg: "#F8F8FB",

      // Standard colors (updated to match theme)
      blue: "#0db4b9",
      purple: "#1d1145",
      pink: "#e76d89",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
