import React from "react";
import { ChosenCandleType } from "../../../utils/types/candles";

const AddToCartButton = ({
  chosenCandle,
  handleAddToShoppingCartArray,
}: {
  chosenCandle: ChosenCandleType;
  handleAddToShoppingCartArray: (
    event: React.MouseEvent,
    candle: ChosenCandleType,
  ) => void;
}) => {
  return (
    <button
      onClick={(e: React.MouseEvent) =>
        handleAddToShoppingCartArray(e, chosenCandle)
      }
      className="text-nowrap border-[6px] border-primary-pink py-[25px]  text-xl font-semibold leading-[26.6px] max-xl:w-full sm:text-3xl xl:flex xl:h-[98px] xl:items-center xl:justify-center xl:px-[203px] xl:max-2xl:text-3xl xl:max-2xl:leading-[42.56px] 2xl:text-4xl 2xl:leading-[47.88px] "
    >
      הוספה לסל
    </button>
  );
};

export default AddToCartButton;
