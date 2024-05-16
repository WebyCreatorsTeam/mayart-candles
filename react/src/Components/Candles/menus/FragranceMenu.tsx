import { useState } from "react";
import { CandleType, CandleFragranceT } from "../../../types/candles";

const FragranceMenu = ({ currentCandle }: { currentCandle: CandleType }) => {
  const [currentCandleFragrance, setCurrentCandleFragrance] = useState(
    currentCandle.fragrances[0],
  );
  const chooseCandleFragrance = (fragrance: CandleFragranceT) => {
    setCurrentCandleFragrance(fragrance);
  };
  return (
    <div className="sm:text-[38.49px] sm:leading-[76.98px] flex flex-col items-center gap-3">
      <span className="sm:text-[38.49px] sm:leading-[76.98px]">ריח: {currentCandleFragrance}</span>
      <div className="flex gap-3">
        {currentCandle.fragrances.map((fragrance) => (
          <div
            onClick={() => chooseCandleFragrance(fragrance)}
            key={fragrance}
            className={`py-5 px-8 ${currentCandleFragrance === fragrance && "border"}`}
          >
            {fragrance}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FragranceMenu;
