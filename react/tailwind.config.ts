import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#F06CBB",
        "secondary-pink": "#8B0E59",
      },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
