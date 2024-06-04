import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { CandleType } from "../../../../types/candles";
import CandleThumbnail from "../../../../Components/Candles/CandleThumbnail";

const BySize = () => {
  const [candlesArray, setCandlesArray] =
    useOutletContext<Array<CandleType>[]>();
  const { size } = useParams<{ size: string }>();
  const hebrewSize =
    size === "small" ? "קטן" : size === "medium" ? "בינוני" : "גדול";
  return (
    <div>
      Size: {size}
      {/* candle grid */}
      <div className="grid grid-cols-3 gap-4">
        {candlesArray
          .filter((candle) => candle.size === hebrewSize)
          .map((candle) => (
            <CandleThumbnail key={candle.id} {...candle} />
          ))}
      </div>
    </div>
  );
};

export default BySize;