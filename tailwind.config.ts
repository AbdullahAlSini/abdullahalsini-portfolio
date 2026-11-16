import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#102a43", mist: "#f4f8fc", coral: "#ff7d5f", ocean: "#2b6cb0" },
      fontFamily: { sans: ["var(--font-geist)", "Arial", "sans-serif"] }
    }
  },
  plugins: []
};

export default config;
