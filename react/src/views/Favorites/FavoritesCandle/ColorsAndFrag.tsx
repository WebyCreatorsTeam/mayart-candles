import React from "react";
import { CandleType } from "../../../utils/types/candles";
import Colors from "./Colors";

const ColorsAndFrag = ({ candle }: { candle: CandleType }) => {
  return (
    <div
      dir="rtl"
      className="flex w-full flex-col justify-center gap-[15px] text-lg leading-9 sm:gap-8 sm:text-[38.49px] sm:leading-[76.98px] lg:flex-row lg:text-[32px] lg:font-normal  lg:leading-none lg:~gap-24/32 xl:justify-start"
    >
      <Colors colors={candle.colors} />
      <div className="flex flex-col items-center sm:gap-3">
        <h2>ריחות:</h2>
        <ul className="flex gap-2">
          {candle.fragrances.map((fragrance) => (
            <li
              key={fragrance}
              className="border-[0.5px] border-black px-2 sm:py-2"
            >
              {fragrance}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorsAndFrag;
