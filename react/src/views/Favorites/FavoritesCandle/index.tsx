import React from "react";
import { CandleType } from "../../../utils/types/candles";
import Title from "../../../Components/ListComponents/Title";
import PricingSystem from "../../../Components/ListComponents/PricingSystem";
import FrameAddToFavoriteButton from "../../../Components/Candles/Thumbnail/Frame/FrameAddToFavoriteButton";
import { Link } from "react-router-dom";
const FavoritesCandle = ({ candle }: { candle: CandleType }) => {
  return (
    <div
      key={candle._id}
      className="flex w-full flex-col gap-3 text-center xl:relative"
    >
      <div className="flex flex-col items-center gap-3 sm:gap-[25.66px] xl:flex-row xl:items-start xl:gap-[59px]">
        {/* candle image */}
        <div className="relative">
          <img
            className="w-full object-cover max-sm:max-h-[475px] xl:h-[250px] xl:max-h-[250px] xl:w-[250px] xl:max-w-[250px] 2xl:h-[304px] 2xl:max-h-[304px] 2xl:w-[301px] 2xl:max-w-[301px]"
            src={candle.pictures[0].img}
            alt={candle.name}
          />
          <div className="absolute bottom-0 left-0">
            <FrameAddToFavoriteButton candle={candle} />
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-3 sm:gap-[25.66px] xl:items-start  xl:gap-9 xl:*:items-start">
          <div className="flex flex-col gap-2.5 text-base leading-[21.28px] sm:gap-[21.38px]">
            <Title candle={candle} />
            <PricingSystem candle={candle} />
          </div>
        </div>
        <Link
          to={`/candles/candle/${candle._id}`}
          className="left-0 hidden h-fit flex-col justify-end text-nowrap bg-black py-[25px] font-semibold text-3xl leading-9 text-white ~lg/2xl:~px-10/[12.25rem] xl:absolute xl:flex 2xl:text-4xl  2xl:leading-[47.88px] [@media(min-width:1825px)]:bottom-0"
        >
          צפייה במוצר
        </Link>
      </div>
    </div>
  );
};

export default FavoritesCandle;
