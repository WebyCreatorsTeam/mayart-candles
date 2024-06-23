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
          className={`flex w-full flex-col items-center gap-10 px-5 pb-14 sm:gap-20 lg:px-[118.5px] lg:pb-[69px] ${home ? "" : "xl:mt-48"}`}
        >
          <h1 className="border-b-[0.5px] border-[#B0C4B1] px-[30px] py-[21.5px] text-xl font-semibold sm:px-[64.15px] sm:py-[46.345px] sm:text-[42.77px] sm:leading-[56.89px]  lg:border-none lg:p-0 lg:text-[64px] lg:leading-[85.13px]">
            {type ? type : size ? `נרות בגודל ${size}` : "כל הנרות"}
          </h1>
          <div className=" grid w-full grid-flow-row grid-cols-2 items-center justify-center justify-items-center gap-5 lg:grid-cols-3 lg:gap-[47px]">
            {candles.map((candle, i) => (
              <div
                key={i}
                className="flex max-w-[165px] flex-col items-center text-[16px] font-normal leading-[21.28px] sm:max-w-[352.85px] sm:text-[32px] sm:leading-[42.56px] lg:max-w-[530px]"
              >
                <div className="relative h-full w-full">
                  <Link
                    to={`/candles/candle/${candle._id}`}
                    className="relative h-full max-h-[221px] w-full sm:max-h-[684.31px]"
                  >
                    <img
                      src={candle.pictures[0].img}
                      alt="calends"
                      className="flex cursor-pointer flex-nowrap gap-[4px] object-cover lg:max-h-[700px]"
                    />
                  </Link>
                  <Frame candle={candle} />
                </div>
                <Link to={`/candles/candle/${candle._id}`}>{candle.name}</Link>
                <div className="flex flex-row justify-evenly gap-2">
                  {candle.price ? (
                    <span className="">₪{candle.salePrice}</span>
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
