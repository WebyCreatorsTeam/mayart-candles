import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { ContextType } from "../../../App";
import { CandleType } from "../../../utils/types/candles";

const AddToFavoritesButton = ({ candle }: { candle: CandleType }) => {
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
      className="left-0 top-[578px] hidden items-center justify-center p-[35px] hover:*:fill-black active:*:fill-black sm:p-[21.38px] xl:absolute xl:block xl:p-[15px] "
    >
      <svg
        className={`hidden size-[91px] xl:block ${isFavoriteCandle ? "fill-black" : ""}`}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0101 30.0721L3.71516 18.0297C-3.51035 10.8042 7.11113 -3.06878 17.0101 8.15481C26.9089 -3.06878 37.4824 10.8523 30.305 18.0297L17.0101 30.0721Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        className={`h-[27.6px] w-[32px] sm:h-[57.11px] sm:w-[68.43px] xl:hidden ${isFavoriteCandle ? "fill-black" : ""}`}
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
    </button>
  );
};
export default AddToFavoritesButton;
