import React, { Suspense } from "react";
import { Link, Await, useLoaderData } from "react-router-dom";
import { CandleType } from "../../../utils/types/candles";
import Frame from "./Frame";

const AllCandles = ({ home = false }: { home?: boolean }) => {
  const { candles, type, size } = useLoaderData() as {
    candles: Array<CandleType>;
    type?: string;
    size?: string;
  };
  return (
    <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
      <Await resolve={candles}>
        <div
          className={`flex w-full flex-col items-center gap-10 sm:gap-20 pb-14 px-5 ${home ? "" : "xl:mt-40"}`}
        >
          <h1 className="border-b-[0.5px] sm:px-[64.15px] sm:py-[46.345px] sm:text-[42.77px] sm:leading-[56.89px] font-semibold  border-[#B0C4B1] px-[30px] py-[21.5px] text-xl">
            {type ? type : size ? `נרות בגודל ${size}` : "כל הנרות"}
          </h1>
          <div className=" w-full   grid grid-flow-row justify-items-center grid-cols-2 items-center justify-center gap-5">
            {candles.map((candle, i) => (
              <div key={i} className="flex text-[16px] font-normal leading-[21.28px]  sm:text-[32px] sm:leading-[42.56px] sm:max-w-[352.85px] max-w-[165px] flex-col items-center">
                <div className="relative h-full w-full">
                  <Link
                    to={`/candles/candle/${candle._id}`}
                    className="relative sm:max-h-[684.31px] max-h-[221px] w-full h-full"
                  >
                    <img
                      src={candle.pictures[0].img}
                      alt="calends"
                      className="flex object-cover cursor-pointer flex-nowrap gap-[4px] lg:h-[700px] lg:w-[430px] lg:gap-[10px] lg:p-[10px]"
                    />
                  </Link>
                  <Frame candle={candle} />
                </div>
                <h1 className="">
                  {candle.name}
                </h1>
                <div className="flex flex-row justify-evenly gap-2">
                  {candle.price ? (
                    <span className="">
                      ₪{candle.salePrice}
                    </span>
                  ) : (
                    <span className="none"></span>
                  )}
                  {candle.salePrice ? (
                    <p className="text-[#12151580] line-through ">
                      ₪{candle.price}
                    </p>
                  ) : (
                    <p className="">{candle.price}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Await>
    </Suspense>
  );
};

export default AllCandles;
