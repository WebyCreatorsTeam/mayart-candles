import type { Config } from "tailwindcss";
import fluid, { extract, screens } from "fluid-tailwind";

const config: Config = {
  content: { files: ["./src/**/*.{js,ts,jsx,tsx}"], extract },
  theme: {
    screens: { mb: "90rem", ...screens },
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
  plugins: [fluid],
};
export default config;
