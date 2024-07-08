import React from "react";
import { ChosenCandleType } from "../../../../../utils/types/candles";
import ShoppingCartPopoverPriceTag from "./PriceTag";
import ShoppingCartPopoverColor from "./ShoppingCartPopoverColor";
import ShoppingCartPopoverFragrance from "./ShoppingCartPopoverFragrance";
import ShoppingCartPopoverShape from "./ShoppingCartPopoverShape";

const PopoverCandleInfo = ({ candle }: { candle: ChosenCandleType }) => {
  return (
    <span className="text-center leading-[21.28px] lg:w-full lg:text-start lg:text-xl lg:leading-[26.6px]">
      <h1 className="text-lg font-semibold leading-[23.94px] lg:text-2xl lg:leading-[31.92px]">
        {candle.name}
      </h1>
      <div className="flex justify-center lg:w-full lg:justify-between">
        <div className="hidden lg:block">
          <ShoppingCartPopoverFragrance fragrance={candle.fragrances} />
          <ShoppingCartPopoverColor candle={candle} />
          <ShoppingCartPopoverShape shape={candle.shape} />
        </div>
        <ShoppingCartPopoverPriceTag candle={candle} />
      </div>
    </span>
  );
};

export default PopoverCandleInfo;
