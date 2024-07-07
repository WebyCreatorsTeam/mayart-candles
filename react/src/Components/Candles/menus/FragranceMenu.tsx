import { CandleType } from "../../../utils/types/candles";

const FragranceMenu = ({
  currentCandle,
  chooseCandleFragrance,
  currentCandleFragrance,
}: {
  currentCandle: CandleType;
  chooseCandleFragrance: (fragrance: string) => void;
  currentCandleFragrance: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-3 sm:text-[38.49px] sm:leading-[76.98px]">
      <span className="text-lg leading-[36px] sm:text-[38.49px]  sm:leading-[76.98px]">
        ריח: {currentCandleFragrance}
      </span>
      <div className="flex gap-3">
        {currentCandle.fragrances.map((fragrance) => (
          <div
            onClick={() => chooseCandleFragrance(fragrance)}
            key={fragrance}
            className={`px-8 py-5 ${currentCandleFragrance === fragrance && "border-2"}`}
          >
            {fragrance}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FragranceMenu;
