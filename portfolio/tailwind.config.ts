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
        secondary: "#a30796",
        darkBg: "#0f0f0f",
        lightBg: "#fafafa",
      },
      backgroundImage: {
        'gradient-cover': "radial-gradient(at top right, #0743a3, #000000)",
      },
    },
  },
  plugins: [],
};

export default config;
