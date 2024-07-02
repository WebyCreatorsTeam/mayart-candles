import React from "react";
import { CandleType } from "../../../utils/types/candles";

import Colors from "./Colors";
import DSKPLinkToCandle from "./DSKPLinkToCandle";
import Title from "../../../Components/ListComponents/Title";
import PricingSystem from "../../../Components/ListComponents/PricingSystem";
import FrameAddToFavoriteButton from "../../../Components/Candles/Thumbnail/Frame/FrameAddToFavoriteButton";
const FavoritesCandle = ({ candle }: { candle: CandleType }) => {
  return (
    <div key={candle._id} className="flex w-full flex-col gap-3 text-center">
      <div className="flex flex-col items-center gap-3 sm:gap-[25.66px] lg:flex-row lg:items-start lg:gap-[59px]">
        {/* candle image */}
        <div className="relative">
        <img
          className="w-full object-cover max-sm:max-h-[475px] lg:h-[304px] lg:max-h-[304px] lg:w-[301px] lg:max-w-[301px]"
          src={candle.pictures[0].img}
          alt={candle.name}
          />
        <div className="absolute left-0 bottom-0">
          <FrameAddToFavoriteButton candle={candle} />
        </div>
          </div>
        <div className="flex w-full flex-col items-center gap-3 sm:gap-[25.66px] lg:items-start  lg:gap-9 lg:*:items-start">
          <div className="flex flex-col gap-2.5 text-base leading-[21.28px] sm:gap-[21.38px]">
            <Title candle={candle} />
            <PricingSystem candle={candle} />
          </div>
          <div
            dir="rtl"
            className="flex w-full flex-col justify-center gap-[15px] text-lg leading-9 sm:gap-8 sm:text-[38.49px] sm:leading-[76.98px] lg:flex-col lg:gap-[21px] lg:text-[32px] lg:font-normal lg:leading-none"
          >
            <Colors colors={candle.colors} />
            <div className="flex flex-col items-center">
              <h2>ריחות:</h2>
              <ul className="flex gap-2">
                {candle.fragrances.map((fragrance) => (
                  <li
                    key={fragrance}
                    className="border-[0.5px] border-black px-2"
                  >
                    {fragrance}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <span className="hidden h-[304px] flex-col items-end justify-between lg:flex">
          <DSKPLinkToCandle id={candle._id} />
        </span>
      </div>
    </div>
  );
};

export default FavoritesCandle;
