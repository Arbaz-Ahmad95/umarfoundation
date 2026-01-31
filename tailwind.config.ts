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
        primary: {
          DEFAULT: "#1a472a", // Forest Green (NGO feel)
          light: "#2d5a3f",
          dark: "#0f2e1b",
        },
        secondary: {
          DEFAULT: "#f59e0b", // Warm Orange/Gold (Donate/Action)
          light: "#fbbf24",
          dark: "#d97706",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
