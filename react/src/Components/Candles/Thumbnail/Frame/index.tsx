import React from "react";

import FrameAddToFavoriteButton from "./FrameAddToFavoriteButton";
import { CandleType } from "../../../../utils/types/candles";
import FrameAddToCartButton from "./FrameAddToCartButton";

const Frame = ({ candle }: { candle: CandleType }) => {
  return (
    <div className="absolute bottom-0 left-0 w-fit justify-evenly text-xl font-semibold leading-[26.6px] xl:flex xl:w-full xl:translate-y-full xl:bg-white/50 xl:py-3.5 xl:backdrop-blur-sm xl:transition-transform xl:duration-500 xl:group-hover:translate-y-0">
      <FrameAddToCartButton candle={candle} />
      <FrameAddToFavoriteButton candle={candle} />
    </div>
  );
};

export default Frame;
