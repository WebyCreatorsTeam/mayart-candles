import { useState } from "react";
import { CandleType, CandleFragranceT } from "../../../types/candles";

const FragranceMenu = ({ currentCandle }: { currentCandle: CandleType }) => {
  const [currentCandleFragrance, setCurrentCandleFragrance] = useState(
    currentCandle.fragrances[0],
  );
  const currentCandleFragranceOptions = currentCandle.fragrances;
  const chooseCandleFragrance = (fragrance: CandleFragranceT) => {
    setCurrentCandleFragrance(fragrance);
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <span>ריח: {currentCandleFragrance}</span>
      <div className="flex gap-3">
        {currentCandle.fragrances.map((fragrance) => (
          <div
            onClick={() => chooseCandleFragrance(fragrance)}
            key={fragrance}
            className="border"
          >
            {fragrance}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FragranceMenu;
