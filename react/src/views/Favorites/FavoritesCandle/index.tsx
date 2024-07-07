import React from "react";
import { CandleType } from "../../../utils/types/candles";
import Colors from "./Colors";
import DSKPLinkToCandle from "./DSKPLinkToCandle";
import Title from "../../../Components/ListComponents/Title";
import PricingSystem from "../../../Components/ListComponents/PricingSystem";
import FrameAddToFavoriteButton from "../../../Components/Candles/Thumbnail/Frame/FrameAddToFavoriteButton";
import { Link } from "react-router-dom";
const FavoritesCandle = ({ candle }: { candle: CandleType }) => {
  return (
    <div
      key={candle._id}
      className="flex w-full flex-col gap-3 text-center lg:relative"
    >
      <div className="flex flex-col items-center gap-3 sm:gap-[25.66px] lg:flex-row lg:items-start lg:gap-[59px]">
        {/* candle image */}
        <div className="relative">
          <img
            className="w-full object-cover max-sm:max-h-[475px] lg:h-[304px] lg:max-h-[304px] lg:w-[301px] lg:max-w-[301px]"
            src={candle.pictures[0].img}
            alt={candle.name}
          />
          <div className="absolute bottom-0 left-0">
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
        </div>
        <Link
          to={`/candles/candle/${candle._id}`}
          className="left-0 hidden h-fit flex-col justify-end text-nowrap bg-black py-[25px] text-4xl font-semibold leading-[47.88px] text-white ~lg/2xl:~px-10/[12.25rem] lg:absolute  lg:flex [@media(min-width:1825px)]:bottom-0"
        >
          צפייה במוצר
        </Link>
      </div>
    </div>
  );
};

export default FavoritesCandle;