import React from "react";

import FrameAddToFavoriteButton from "./FrameAddToFavoriteButton";
import { CandleType } from "../../../../utils/types/candles";
import FrameAddToCartButton from "./FrameAddToCartButton";

const Frame = ({ candle }: { candle: CandleType }) => {
  return (
    <div className="absolute bottom-0 left-0 w-fit justify-evenly text-xl font-semibold leading-[26.6px] lg:flex lg:w-full lg:translate-y-full lg:bg-white/50 lg:py-3.5 lg:backdrop-blur-sm lg:transition-transform lg:duration-500 lg:group-hover:translate-y-0">
      <FrameAddToCartButton candle={candle} />
      <FrameAddToFavoriteButton candle={candle} />
    </div>
  );
};

export default Frame;
