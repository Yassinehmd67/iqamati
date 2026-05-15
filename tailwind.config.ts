import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
      },

      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
    },
  },

  plugins: [],
};

export default config;