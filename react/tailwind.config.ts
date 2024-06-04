import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#F06CBB",
        "secondary-pink": "#8B0E59",
        "candle-כחול": "#BACEFF",
        "candle-ירוק": "#B0C4B1",
        "candle-לבן": "#FFFFFF",
        "candle-שחור": "#121515",
        "candle-גוף": "#F7E1D7",
        "candle-ורוד": "#EAAFF9",
      },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
