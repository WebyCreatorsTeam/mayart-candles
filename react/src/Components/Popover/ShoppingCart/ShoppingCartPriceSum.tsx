import React from "react";
import { ChosenCandleType } from "../../../utils/types/candles";

const ShoppingCartPriceSum = ({
  shoppingCartArray,
}: {
  shoppingCartArray: ChosenCandleType[];
}) => {
  const shoppingCartArrayPriceSum = shoppingCartArray.reduce((sum, candle) => {
    if (candle.salePrice) {
      return sum + candle.salePrice * candle.amount;
    } else {
      return sum + candle.price * candle.amount;
    }
  }, 0);
  return (
    <div
      dir="rtl"
      className={`hidden ${shoppingCartArray.length > 0 ? "lg:flex" : "hidden"} mb-[93px] h-fit w-full justify-between gap-2 border-b border-b-[#4A5759] pb-[35px] text-2xl font-semibold leading-[31.92px]`}
    >
      <p>סיכום</p>
      <span>₪{shoppingCartArrayPriceSum}</span>
    </div>
  );
};

export default ShoppingCartPriceSum;
