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
    <div className="flex flex-col items-center xl:gap-[26px] gap-3 sm:text-[38.49px] sm:leading-[76.98px] xl:items-start">
      <span className="text-lg leading-[36px] sm:text-[38.49px]  sm:leading-[76.98px] xl:text-[32px]  xl:leading-[42.56px]">
        ריח: {currentCandleFragrance}
      </span>
      <div className="flex gap-3 xl:gap-14 xl:text-2xl xl:leading-[31.92px]">
        {currentCandle.fragrances.map((fragrance) => (
          <div
            onClick={() => chooseCandleFragrance(fragrance)}
            key={fragrance}
            className={`px-8 py-5 border-black flex items-center justify-center text-center xl:w-[140px] xl:p-0 xl:h-[52px] ${currentCandleFragrance === fragrance ? "border-2 xl:border-[3px]": "xl:hover:underline underline-offset-[20px] "}`}
          >
            {fragrance}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FragranceMenu;
