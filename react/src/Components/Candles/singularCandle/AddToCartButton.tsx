import React from "react";
import { ChosenCandleType } from "../../../utils/types/candles";

const AddToCartButton = ({
  chosenCandle,
  handleAddToShoppingCartArray,
}: {
  chosenCandle: ChosenCandleType;
  handleAddToShoppingCartArray: (candle: ChosenCandleType) => void;
}) => {
  return (
    <button
      onClick={() => handleAddToShoppingCartArray(chosenCandle)}
      className="w-full  border-[6px] border-primary-pink py-[25px] text-xl font-semibold leading-[26.6px]"
    >
      הוספה לסל
    </button>
  );
};

export default AddToCartButton;
