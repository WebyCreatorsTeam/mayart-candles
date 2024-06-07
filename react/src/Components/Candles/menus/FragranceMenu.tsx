import { useState } from "react";
import { CandleType, CandleFragranceT } from "../../../utils/types/candles";

const FragranceMenu = ({ currentCandle }: { currentCandle: CandleType }) => {
  const [currentCandleFragrance, setCurrentCandleFragrance] = useState(
    currentCandle.fragrances[0],
  );
  const chooseCandleFragrance = (fragrance: CandleFragranceT) => {
    setCurrentCandleFragrance(fragrance);
  };
  return (
    <div className="flex flex-col items-center gap-3 sm:text-[38.49px] sm:leading-[76.98px]">
      <span className="sm:text-[38.49px] sm:leading-[76.98px]">
        ריח: {currentCandleFragrance}
      </span>
      <div className="flex gap-3">
        {currentCandle.fragrances.map((fragrance) => (
          <div
            onClick={() => chooseCandleFragrance(fragrance)}
            key={fragrance}
            className={`px-8 py-5 ${currentCandleFragrance === fragrance && "border"}`}
          >
            {fragrance}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FragranceMenu;
