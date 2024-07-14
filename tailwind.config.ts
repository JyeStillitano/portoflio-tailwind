import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#4D85FF",
      accent: "#4b5563",
      background: "#111827",
      content: colors.white,
      disabled: "#4b5563",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      warning: colors.red
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
};
export default config;
