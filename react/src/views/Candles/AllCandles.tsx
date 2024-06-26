import React from "react";
import { useOutletContext } from "react-router-dom";
import { CandleType } from "../../utils/types/candles";
import CandleThumbnail from "../../Components/Candles/CandleThumbnail";

const AllCandles = () => {
  const [candleArray] = useOutletContext<Array<CandleType>[]>();
  return (
    <div className="h-fit">
      {candleArray.map((candle) => (
        <CandleThumbnail key={candle._id} {...candle} />
      ))}
    </div>
  );
};

export default AllCandles;
