import React from "react";
import { ChosenCandleType } from "../../../../../utils/types/candles";

const ShoppingCartPopoverColor = ({ candle }: { candle: ChosenCandleType }) => {
  return (
    <span className="flex gap-2">
      <h2>צבע:</h2>
      <span
        aria-description={`צבע ${candle.colors.color}`}
        style={{
          backgroundColor: candle.colors.hexCode,
          border: candle.colors.color === "לבן" ? "1px solid black" : "0",
        }}
        className={`size-4 self-center rounded-full max-lg:hidden`}
      ></span>
    </span>
  );
};

export default ShoppingCartPopoverColor;
