import React from "react";
import { useLocalShoppingCartCandlesStorage } from "../../utils/localCandleStorage";
import { ChosenCandleType } from "../../utils/types/candles";
import ShoppingCartCandle from "./ShoppingCartCandle";
import CheckoutAndDisclaimer from "./CheckoutAndDisclaimer";
const ShoppingCartPage = () => {
  const { getShoppingCartItems } = useLocalShoppingCartCandlesStorage();
  const candles = getShoppingCartItems();
  return (
    <div
      dir="rtl"
      className="flex h-full w-full flex-col gap-[23px] bg-white sm:gap-[49.17px] lg:px-[89px] xl:mt-48"
    >
      {/* header */}
      <div className="flex flex-col items-center gap-2 sm:gap-[17.11px] lg:gap-1.5">
        <h1 className="w-fit border-b border-b-[#B0C4B14D] px-[30px] py-[21.5px] text-center text-xl font-semibold leading-[26.6px]  sm:border-b-2 sm:px-[64.15px] sm:py-[46.35] sm:text-[42.77px] sm:leading-[56.89px] lg:border-none lg:p-0 lg:text-[64px] lg:font-normal lg:leading-[85.13px]">
          סל קניות
        </h1>
        {candles && candles.length && (
          <h2 className="text-lg leading-9 sm:text-[38.49px] sm:leading-[76.98px]">
            פריטים שנבחרו ({candles.length})
          </h2>
        )}
      </div>
      {!candles || !candles.length ? (
        <h1 className="h-full">עדיין לא נוספו פריטים</h1>
      ) : (
        <div className="flex h-full w-full flex-col items-start">
          <div className="flex h-full w-full flex-col items-center gap-[50px] px-5  sm:gap-[106.92px] sm:px-[42.77px] lg:p-0">
            {candles.map((candle: ChosenCandleType) => (
              // candle
              <ShoppingCartCandle key={candle._id} candle={candle} />
            ))}
          <CheckoutAndDisclaimer />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
