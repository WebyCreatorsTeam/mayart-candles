import React from "react";

import { Link } from "react-router-dom";
import Frame from "./Frame";
import { CandleType } from "../../../utils/types/candles";

const Thumbnail = ({ candle }: { candle: CandleType }) => {
  return (
    <div className="flex max-w-[165px] flex-col items-center text-[16px] font-normal leading-[21.28px] sm:max-w-[352.85px] sm:text-[32px] sm:leading-[42.56px] xl:max-w-[530px]">
      <div className="group relative h-full w-full overflow-y-hidden">
        <Link
          to={`/candles/candle/${candle._id}`}
          className="relative h-full max-h-[221px] w-full sm:max-h-[684.31px]"
        >
          <img
            src={candle.pictures[0].img}
            alt="candles"
            className="flex cursor-pointer flex-nowrap gap-[4px] object-cover xl:max-h-[700px]"
          />
        </Link>
        <Frame candle={candle} />
      </div>
      <Link to={`/candles/candle/${candle._id}`}>{candle.name}</Link>
      {candle.salePrice ? (
        <div className="flex flex-row justify-evenly gap-2">
          <p className="text-[#12151580] line-through ">₪{candle.price}</p>
          <span className="">₪{candle.salePrice}</span>
        </div>
      ) : (
        <div>
          <span className="none"></span>
          <p className="">₪{candle.price}</p>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
