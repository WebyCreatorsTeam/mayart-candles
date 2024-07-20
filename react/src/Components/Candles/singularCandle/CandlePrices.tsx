import { CandleType } from "../../../utils/types/candles";

const CandlePrices = ({ currentCandle }: { currentCandle: CandleType }) => {
  return (
    <span className="flex flex-row-reverse gap-2 text-base font-normal sm:gap-4 sm:text-[34.22px] sm:leading-[45.51px] 2xl:text-[32px] xl:max-2xl:leading-[31.92px] 2xl:leading-[42.56px] xl:max-2xl:text-[28px]">
      {currentCandle.salePrice ? (
        <>
          {currentCandle.salePrice}₪
          <span className="text-black/50 line-through">
            {currentCandle.price}₪
          </span>
        </>
      ) : (
        `${currentCandle.price}₪`
      )}
    </span>
  );
};

export default CandlePrices;
