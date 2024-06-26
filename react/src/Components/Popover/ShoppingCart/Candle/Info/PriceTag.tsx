import React from "react";
import { ChosenCandleType } from "../../../../../utils/types/candles";

const ShoppingCartPopoverPriceTag = ({
  candle,
}: {
  candle: ChosenCandleType;
}) => {
  return (
    <div
      className={`${candle.salePrice ? "flex flex-row-reverse gap-1 lg:flex-row" : ""}`}
    >
      <span
        className={`${candle.salePrice ? "text-black/50 line-through" : ""}`}
      >
        {candle.price}₪
      </span>
      <span>{candle.salePrice ? `${candle.salePrice}₪` : ""}</span>
    </div>
  );
};

export default ShoppingCartPopoverPriceTag;
