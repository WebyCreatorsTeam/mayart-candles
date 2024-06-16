import React, { Suspense } from "react";
import Frame from "./Frame";
import { Link, Await, useLoaderData } from "react-router-dom";
import { CandleType } from "../../../utils/types/candles";

const CandlesAll = () => {
  const { candles, type, size } = useLoaderData() as {
    candles: Array<CandleType>;
    type?: string;
    size?: string;
  };
  return (
    <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
      <Await resolve={candles}>
        <div className="mt-40 flex w-[100%] flex-col">
          <p className="ml-[32%] mt-8 text-[32px] font-normal lg:ml-[41%] lg:text-[64px]">
            {type ? type : size ? `נרות בגודל ${size}` : "כל הנרות"}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center">
            {candles.map((candle, i) => (
              <Link
                to={`/candles/candle/${candle._id}`}
                key={i}
                className="flex flex-col items-center"
              >
                <div className="relative">
                  <img
                    src={candle.pictures[0]}
                    alt="calends"
                    className="flex h-[221px] w-[165px] cursor-pointer flex-nowrap gap-[4px] object-cover p-[4px]  md:h-[221px] md:w-[165px] lg:h-[700px] lg:w-[430px] lg:gap-[10px] lg:p-[10px]"
                  />

                  <Frame />
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
              </Link>
            ))}
          </div>
        </div>
      </Await>
    </Suspense>
  );
};

export default CandlesAll;
