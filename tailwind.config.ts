import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: "#e90c31",
        redT: "rgba(233, 12, 49, 0.1)",
        black: "#010101",
        grey: "#6b6b6b",
        lightGrey: "#f6f6f6",
        whiteT: "rgba(255, 255, 255, 0.8)",
        blackT: "rgba(31, 39, 45, 0.6)",
        pink: "#E5667C",
        lightGreen: "#34c759",
      },
      dropShadow: {
        sm: "0 2px 5px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
