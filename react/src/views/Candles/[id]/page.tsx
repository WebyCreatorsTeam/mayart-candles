import { useOutletContext, useParams } from "react-router-dom";
import { CandleType } from "../../../types/candles";
import CandlePictures from "../../../Components/Candles/CandlePictures";
import ColorsMenu from "../../../Components/Candles/menus/ColorMenu";
import FragranceMenu from "../../../Components/Candles/menus/FragranceMenu";
import MobileTabletCandleInfo from "../../../Components/Candles/MobileTabletCandleInfo";

const Candle = () => {
  const { id } = useParams<{ id: string }>();
  const [candlesArray] = useOutletContext<Array<CandleType>[]>();
  const currentCandle = candlesArray.find((candle) => candle.id === id);
  if (!currentCandle) throw new Error("Candle not found");

  return (
    <div className="h-fit w-full">
      <div dir="rtl" className="flex h-fit w-full flex-col px-5 xl:flex-row">
        <CandlePictures currentCandle={currentCandle} />
        <MobileTabletCandleInfo currentCandle={currentCandle}>
          {/* divider */}
          <div className="h-fit w-full xl:hidden">
            <div className="h-fit w-[calc(100%-34px)] border border-[#CFCFCF]"></div>
            <p className="text-balance text-center text-lg font-normal leading-9 sm:text-[38.49px] sm:leading-[76.98px]">
              {currentCandle.description}
            </p>
          </div>
        </MobileTabletCandleInfo>
      </div>
      <div>
        <p className="hidden text-balance text-center text-lg font-normal leading-9 sm:text-[38.49px] sm:leading-[76.98px] xl:block">
          {currentCandle.description}
        </p>
      </div>
    </div>
  );
};

export default Candle;
