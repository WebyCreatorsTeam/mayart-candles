import { useLoaderData } from "react-router-dom";
import { CandleType } from "../../../utils/types/candles";
import CandleInfo from "../../../Components/Candles/singularCandle/CandleInfo";
import Error from "./Error";
import CandlePictures from "../../../Components/Candles/singularCandle/CandlePictures";

const Candle = () => {
  const { candle } = useLoaderData() as { candle: CandleType };
  if (!candle) return <Error />;
  return (
    <div className="h-fit w-full px-5 xl:max-2xl:mt-20 2xl:mt-40 2xl:gap-[106px] xl:gap-10 flex flex-col xl:mb-[200px] 2xl:mb-[450px] xl:px-32 xl:py-10">
      <div
        dir="rtl"
        className="flex h-fit w-full  flex-col items-center xl:flex-row xl:items-start xl:gap-8"
      >
        <CandlePictures currentCandle={candle} />
        <CandleInfo currentCandle={candle}>
          <div className="flex h-fit w-full flex-col items-center gap-7 xl:hidden">
            {/* divider */}
            <div className="h-fit w-[calc(100%-102px)]  border border-[#CFCFCF]"></div>
            <p className="text-balance px-[62px] text-center text-lg font-normal leading-9 sm:text-[38.49px] sm:leading-[76.98px]">
              {candle.description}
            </p>
          </div>
        </CandleInfo>
      </div>
      <div>
        <span
          dir="rtl"
          className="hidden text-balance xl:gap-10 2xl:gap-[120px] 2xl:text-[40px] 2xl:leading-[70px] text-start text-lg font-normal leading-9 xl:max-2xl:text-5xl sm:text-[38.49px] sm:leading-[76.98px] xl:flex flex-col"
        >
          <h4 className="font-semibold">תיאור מוצר:</h4>
          <p className="xl:max-2xl:text-3xl">{candle.description}</p>
        </span>
      </div>
    </div>
  );
};

export default Candle;
