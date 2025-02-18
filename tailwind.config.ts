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
      primary: "#485b82",//"#4D85FF",
      accent: "#E7E7E7",//"#1D2639",
      background: "#F6F6F6",//"#111827",
      title: "#FFFFFF",
      content: "#000000",//"#DDDDDD",
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
