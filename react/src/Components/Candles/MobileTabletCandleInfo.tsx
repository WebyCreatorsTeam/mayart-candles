import React from "react";
import { CandleType } from "../../types/candles";
import ColorsMenu from "./menus/ColorMenu";
import FragranceMenu from "./menus/FragranceMenu";
import CandlePrices from "./CandlePrices";

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
        <CandlePrices currentCandle={currentCandle} />
      </div>
      {children}
      <ColorsMenu currentCandle={currentCandle} />
      <FragranceMenu currentCandle={currentCandle} />
    </div>
  );
};

export default MobileTabletCandleInfo;
