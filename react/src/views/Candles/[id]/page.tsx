import { useLoaderData } from "react-router-dom";
import { CandleType } from "../../../utils/types/candles";
import CandlePictures from "../../../Components/Candles/CandlePictures";
import MobileTabletCandleInfo from "../../../Components/Candles/MobileTabletCandleInfo";

const Candle = () => {
  const { candle } = useLoaderData() as { candle: CandleType };
  return (
    <div className="h-fit w-full px-5 xl:mt-40 xl:px-32 xl:py-10">
      <div
        dir="rtl"
        className="flex h-fit w-full flex-col items-center xl:flex-row xl:gap-8"
      >
        <CandlePictures currentCandle={candle} />
        <MobileTabletCandleInfo currentCandle={candle}>
          {/* divider */}
          <div className="h-fit w-full xl:hidden">
            <div className="h-fit w-[calc(100%-34px)] border border-[#CFCFCF]"></div>
            <p className="text-balance text-center text-lg font-normal leading-9 sm:text-[38.49px] sm:leading-[76.98px]">
              {candle.description}
            </p>
          </div>
        </MobileTabletCandleInfo>
      </div>
      <div>
        <span
          dir="rtl"
          className="hidden text-balance text-start text-lg font-normal leading-9 sm:text-[38.49px] sm:leading-[76.98px] xl:block"
        >
          <h4 className="font-semibold">תיאור מוצר:</h4>
          <p>{candle.description}</p>
        </span>
      </div>
    </div>
  );
};

export default Candle;
