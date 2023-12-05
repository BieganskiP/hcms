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
        main: "#ed254eff",
        accent: "#f9dc5cff",
        background: "#c2eabdff",
        primaryText: "#011936ff",
        secondaryText: "#465362ff",
      },
    },
  },
  plugins: [],
};
export default config;
