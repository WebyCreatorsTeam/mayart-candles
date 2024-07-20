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
    <div className="flex flex-col items-center gap-3 sm:text-[38.49px] sm:leading-[76.98px] xl:items-start xl:gap-[26px]">
      <span className="text-lg leading-[36px] sm:text-[38.49px]  sm:leading-[76.98px] 2xl:text-[32px]  xl:leading-[42.56px] xl:max-2xl:leading-[31.92px] xl:max-2xl:text-[30px]">
        ריח: {currentCandleFragrance}
      </span>
      <div className="flex gap-3 xl:gap-14 2xl:text-2xl 2xl:leading-[31.92px] xl:max-2xl:leading-[31.92px] xl:max-2xl:text-[30px]">
        {currentCandle.fragrances.map((fragrance) => (
          <div
            onClick={() => chooseCandleFragrance(fragrance)}
            key={fragrance}
            className={`flex items-center justify-center border-black px-8 py-5 text-center xl:h-[52px] xl:w-[140px] xl:p-0 ${currentCandleFragrance === fragrance ? "border-2 xl:border-[3px]" : "underline-offset-[20px] xl:hover:underline "}`}
          >
            {fragrance}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FragranceMenu;
