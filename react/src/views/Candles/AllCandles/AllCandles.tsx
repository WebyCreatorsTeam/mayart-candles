import React, { Suspense, useMemo } from "react";
import { Await, useLoaderData, useOutletContext } from "react-router-dom";
import { CandleType } from "../../../utils/types/candles";
import Thumbnail from "../../../Components/Candles/Thumbnail";
import { ContextType } from "../../../App";

const AllCandles = ({ home = false }: { home?: boolean }) => {
  const { candles, type, size } = useLoaderData() as {
    candles: Array<CandleType>;
    type?: string;
    size?: string;
  };
  const { searchInfo, setSearchInfo } = useOutletContext() as ContextType;

  const searchedCandles = useMemo(() => {
    return candles?.filter((candle) =>
      candle.name.toLowerCase().includes(searchInfo?.toLowerCase() || ""),
    );
  }, [candles, searchInfo]);
  return (
    <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
      <Await resolve={candles}>
        <div
          id="all_candles_list"
          className={`flex w-full flex-col items-center gap-10 px-5 pb-14 sm:gap-20 lg:px-[118.5px] lg:pb-[69px] ${home ? "" : "xl:mt-48"}`}
        >
          <h1 className="border-b-[0.5px] border-[#B0C4B1] px-[30px] py-[21.5px] text-xl font-semibold sm:px-[64.15px] sm:py-[46.345px] sm:text-[42.77px] sm:leading-[56.89px]  lg:border-none lg:p-0 lg:text-[64px] lg:leading-[85.13px]">
            {type ? type : size ? size : "כל הנרות"}
          </h1>
          <div className=" grid w-full grid-flow-row grid-cols-2 items-center justify-center justify-items-center gap-5 lg:grid-cols-3 lg:gap-[47px]">
            {!searchInfo ? (
              candles.map((candle) => (
                <Thumbnail key={candle._id} candle={candle} />
              ))
            ) : searchedCandles.length === 0 ? (
              <div dir="rtl" className="flex flex-col ">
                לא נמצאו נרות תואמים את החיפוש,
                <button onClick={() => setSearchInfo("")}>
                  התחל חיפוש מחדש
                </button>
              </div>
            ) : (
              searchedCandles.map((candle) => (
                <Thumbnail key={candle._id} candle={candle} />
              ))
            )}
          </div>
        </div>
      </Await>
    </Suspense>
  );
};

export default AllCandles;
