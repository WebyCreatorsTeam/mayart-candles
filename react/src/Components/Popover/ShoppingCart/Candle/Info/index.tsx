import React from "react";
import { ChosenCandleType } from "../../../../../utils/types/candles";
import ShoppingCartPopoverPriceTag from "./PriceTag";
import ShoppingCartPopoverColor from "./ShoppingCartPopoverColor";
import ShoppingCartPopoverFragrance from "./ShoppingCartPopoverFragrance";
import ShoppingCartPopoverShape from "./ShoppingCartPopoverShape";

const PopoverCandleInfo = ({ candle }: { candle: ChosenCandleType }) => {
  return (
    <span className="text-center leading-[21.28px] xl:w-full xl:text-start xl:text-xl xl:leading-[26.6px]">
      <h1 className="text-lg font-semibold leading-[23.94px] xl:text-2xl xl:leading-[31.92px]">
        {candle.name}
      </h1>
      <div className="flex justify-center xl:w-full xl:justify-between">
        <div className="hidden xl:block">
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
