import React from "react";
import { CandleType } from "../../types/candles";
import ColorsMenu from "./menus/ColorMenu";
import FragranceMenu from "./menus/FragranceMenu";

const MobileTabletCandleInfo = ({
  children,
  currentCandle,
}: {
  children: React.ReactNode;
  currentCandle: CandleType;
}) => {
  return (
    <div className="flex w-full flex-col items-center gap-7">
      {/* name and price */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-xl font-semibold sm:text-[42.77px] sm:leading-[56.89px]">
          {currentCandle.name}
        </h1>
        <p className="flex flex-row-reverse gap-2 text-base font-normal sm:gap-4 sm:text-[34.22px] sm:leading-[45.51px]">
          {currentCandle.salePrice}₪
          <span className="text-black/50 line-through">
            {currentCandle.price}₪
          </span>
        </p>
      </div>
      {children}
      <ColorsMenu currentCandle={currentCandle} />
      <FragranceMenu currentCandle={currentCandle} />
    </div>
  );
};

export default MobileTabletCandleInfo;
