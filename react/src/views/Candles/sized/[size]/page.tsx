import React from "react";
import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { CandleType } from "../../../../utils/types/candles";
import CandleThumbnail from "../../../../Components/Candles/CandleThumbnail";

const BySize = () => {
  const { candles, size } = useLoaderData() as {
    candles: Array<CandleType>;
    size?: string;
  };
  return (
    <div>
      Size: {size}
      {/* candle grid */}
      <div className="grid grid-cols-3 gap-4">
        {candles
          .filter((candle) => candle.size === size)
          .map((candle) => (
            <CandleThumbnail key={candle._id} {...candle} />
          ))}
      </div>
    </div>
  );
};

export default BySize;
