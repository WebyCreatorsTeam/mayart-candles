import React from "react";
import { CandleType, ChosenCandleType } from "../../utils/types/candles";

const PricingSystem = ({
  candle,
}: {
  candle: CandleType | ChosenCandleType;
}) => {
  return candle.salePrice ? (
    <div className="flex flex-row justify-center gap-2 sm:justify-evenly sm:text-[34.22px] sm:leading-[45.51px] lg:text-[32px] lg:font-normal lg:leading-[42.56px]">
      <p className="text-[#12151580] line-through ">₪{candle.price}</p>
      <span className="">₪{candle.salePrice}</span>
    </div>
  ) : (
    <div>
      <span className="hidden"></span>
      <p className="sm:text-[34.22px] sm:leading-[45.51px] lg:text-[32px] lg:font-normal lg:leading-[42.56px]">
        ₪{candle.price}
      </p>
    </div>
  );
};

export default PricingSystem;
