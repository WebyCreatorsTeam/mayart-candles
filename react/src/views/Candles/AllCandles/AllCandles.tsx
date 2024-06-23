import React, { Suspense } from "react";
import { Link, Await, useLoaderData, useOutletContext } from "react-router-dom";
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
          className={`flex w-full flex-col items-center gap-10 px-5 ${home ? "" : "xl:mt-40"}`}
        >
          <h1 className="border-b-[0.5px] border-[#B0C4B1] px-[30px] py-[21.5px] text-xl">
            {type ? type : size ? `נרות בגודל ${size}` : "כל הנרות"}
          </h1>
          <div className="flex  flex-wrap items-center justify-center gap-5">
            {candles.map((candle, i) => (
              <div key={i} className="flex  flex-col items-center">
                <div className="relative h-fit w-fit">
                  <Link
                    to={`/candles/candle/${candle._id}`}
                    className="relative"
                  >
                    <img
                      src={candle.pictures[0].img}
                      alt="calends"
                      className="flex h-[221px] w-[165px] cursor-pointer flex-nowrap gap-[4px]  p-[4px]  md:h-[221px] md:w-[165px] lg:h-[700px] lg:w-[430px] lg:gap-[10px] lg:p-[10px]"
                    />
                  </Link>
                  <Frame candle={candle} />
                </div>
                <h1 className="text-[16px] font-normal tracking-normal lg:text-[30px]">
                  {candle.name}
                </h1>
                <div className="flex flex-row justify-evenly gap-2">
                  {candle.price ? (
                    <span className="text-[16px] lg:text-[32px]">
                      ₪{candle.salePrice}
                    </span>
                  ) : (
                    <span className="none"></span>
                  )}
                  {candle.salePrice ? (
                    <p className="text-[16px] text-black/[.50] line-through lg:text-[32px]">
                      ₪{candle.price}
                    </p>
                  ) : (
                    <p className="text-[16px] lg:text-[32px]">{candle.price}</p>
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
