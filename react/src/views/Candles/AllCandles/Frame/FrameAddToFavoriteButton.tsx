import React, { useMemo } from "react";
import { CandleType } from "../../../../utils/types/candles";
import { useOutletContext } from "react-router-dom";
import { ContextType } from "../../../../App";

const FrameAddToFavoriteButton = ({ candle }: { candle: CandleType }) => {
  const context = useOutletContext();
  const { favoritesArray, handleAddToFavoritesArray } = context as ContextType;

  const isFavoriteCandle = useMemo((): boolean => {
    if (!favoritesArray) return false;
    const favoriteCandle = favoritesArray.findIndex(
      (c: any) => c._id === candle._id,
    );
    if (favoriteCandle === -1) return false;
    else return true;
  }, [candle._id, favoritesArray]);
  
  return (
    <button
      onClick={() => handleAddToFavoritesArray(candle)}
      className="flex flex-col items-center justify-center p-2.5 sm:p-[21.38px] active:*:fill-black"
    >
      <svg
        className={`h-[27.6px] sm:h-[57.11px] sm:w-[68.43px] w-[32px] lg:hover:fill-black ${isFavoriteCandle ? "fill-black" : ""}`}
        viewBox="0 0 34 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.01 27.8735L3.43021 15.573C-3.95015 8.19269 6.89895 -5.97756 17.01 5.48656C27.121 -5.97756 37.9211 8.2419 30.5899 15.573L17.01 27.8735Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="hidden text-[20px]">!אהבתי</span>
    </button>
  );
};

export default FrameAddToFavoriteButton;
