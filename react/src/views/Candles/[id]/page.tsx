import { useOutletContext, useParams } from "react-router-dom";
import { CandleType } from "../../../types/candles";
import CandlePictures from "../../../Components/Candles/CandlePictures";
import ColorsMenu from "../../../Components/Candles/menus/ColorMenu";
import FragranceMenu from "../../../Components/Candles/menus/FragranceMenu";

const Candle = () => {
  const { id } = useParams<{ id: string }>();
  const [candlesArray] = useOutletContext<Array<CandleType>[]>();
  const currentCandle = candlesArray.find((candle) => candle.id === id);
  if (!currentCandle) throw new Error("Candle not found");

  return (
    <div dir="rtl" className="h-fit w-full  px-5">
      <CandlePictures currentCandle={currentCandle} />
      <div className="flex w-full flex-col items-center gap-7">
        {/* name and price */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-semibold">{currentCandle.name}</h1>
          <p className="text-base font-normal ">
            {currentCandle.salePrice}₪{" "}
            <span className="line-through text-black/50">
              {currentCandle.price}₪
            </span>
          </p>
        </div>
        {/* divider */}
        <div className="h-fit w-[calc(100%-34px)] border border-[#CFCFCF]"></div>
        <p className="text-balance text-center text-lg font-normal leading-9">
          {currentCandle.description}
        </p>
        <ColorsMenu currentCandle={currentCandle} />
        <FragranceMenu currentCandle={currentCandle} />
      </div>
    </div>
  );
};

export default Candle;
