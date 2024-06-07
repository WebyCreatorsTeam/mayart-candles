import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { CandleType, candleCategoryType } from "../../../utils/types/candles";

const CandlesAll = () => {
  const { candles, type } = useLoaderData() as {
    candles: Array<CandleType>;
    type?: string;
  };
  return (
    <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
      <Await resolve={candles}>
        <div className="mt-40 flex w-[100%] flex-col">
          <p className="ml-[32%] mt-8 text-[32px] font-normal lg:ml-[41%] lg:text-[64px]">
            {type ? type : "כל הנרות"}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center">
            {candles.map((item: CandleType, i: number) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={item.pictures[0]}
                  alt="calends"
                  className="flex h-[40vh] w-[50vw] gap-2 p-4 lg:h-[75vh] lg:w-[30vw]"
                />
                <h1 className="text-[16px] font-normal tracking-normal lg:text-[30px]">
                  {item.name}
                </h1>
                <div className="flex flex-row justify-evenly gap-2">
                  <p className="text-[16px] lg:text-[32px] ">
                    ₪{item.salePrice}
                  </p>
                  <span className="text-[16px] text-black/[.50] line-through lg:text-[32px]">
                    ₪{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Await>
    </Suspense>
  );
};

export default CandlesAll;
