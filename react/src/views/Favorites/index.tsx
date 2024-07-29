import React, { useMemo } from "react";
import { CandleType } from "../../utils/types/candles";
import { Link, useOutletContext } from "react-router-dom";
import { ContextType } from "../../App";
import FavoritesCandle from "./FavoritesCandle";
import EmptyArrayPrompt from "../../Components/ListComponents/EmptyArrayPrompt";
const FavoritesPage = () => {
  const { favoritesArray } = useOutletContext<ContextType>();
  const candles = useMemo(() => favoritesArray, [favoritesArray]);
  return (
    <div
      dir="rtl"
      className={`flex h-full w-full flex-col gap-[23px] bg-white sm:gap-[49.17px]  md:~px-0/28 xl:mt-48 ${candles.length > 0 ? "" : "gap-20  px-[51.5px] text-center"}`}
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-2 sm:gap-[17.11px] xl:gap-1.5">
        <h1 className="w-fit border-b border-b-[#B0C4B14D] px-[30px] py-[21.5px] text-center text-xl font-semibold leading-[26.6px] sm:border-b-2 sm:px-[64.15px] sm:py-[46.35] sm:text-[42.77px] sm:leading-[56.89px] xl:border-none xl:p-0 2xl:text-[64px] xl:text-6xl xl:font-normal 2xl:leading-[85.13px]">
          נרות שאהבתי במיוחד
        </h1>
      </div>
      {!candles || !candles.length ? (
        <EmptyArrayPrompt />
      ) : (
        <div className="flex h-full w-full flex-col items-start pb-20">
          <div className="flex h-full w-full flex-col items-center gap-[50px] px-5  sm:gap-[106.92px] sm:px-[42.77px] xl:p-0">
            {candles.map((candle: CandleType) => (
              // candle
              <FavoritesCandle key={candle._id} candle={candle} />
            ))}

            <Link
              className="w-full text-nowrap border-4 border-black p-[23px]  text-center font-semibold leading-[26.6px] transition-colors duration-300 hover:bg-black hover:text-white active:bg-black  active:text-white max-md:max-w-[287px] sm:w-fit sm:py-10 sm:text-[32px] sm:text-xl sm:leading-[42.56px] sm:~px-20/24 md:~text-xl/3xl"
              to="/"
            >
              המשך קניות
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
