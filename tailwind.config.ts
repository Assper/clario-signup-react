import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FFFFFF",
        success: "#27B274",
        error: "#FF8080",
        initial: "#4A4E71",
        lightBlue: "#70C3FF",
        blue: "#4B65FF",
        lightgray: "#6F91BC",
      },
      backgroundImage: {
        "signup": "url('/bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
