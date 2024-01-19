import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: { 0: "#131213" },
        light: { 0: "#F0F0F0", 1: "#E1E1E1" },
        primary: { 0: "#F177C3", 1: "#BB3788" },
        secondary: { 0: "#882626" },
      },
      screens: {
        xs: "380px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
