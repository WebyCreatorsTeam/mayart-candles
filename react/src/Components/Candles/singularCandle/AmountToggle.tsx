import React from "react";
import { ChosenCandleType } from "../../../utils/types/candles";

const AmountToggle = ({
  candleIsInShoppingCart,
  handleAddToShoppingCartArray,
  handleRemoveOneFromShoppingCartArray,
}: {
  candleIsInShoppingCart: ChosenCandleType;
  handleAddToShoppingCartArray: (candle: ChosenCandleType) => void;
  handleRemoveOneFromShoppingCartArray: (candle: ChosenCandleType) => void;
}) => {
  return (
    <div className="flex w-full items-center py-3   *:grow *:text-center">
      <button
        onClick={() => handleAddToShoppingCartArray(candleIsInShoppingCart)}
        className="border-[3px] border-primary-pink py-[12.5px] text-xl font-semibold leading-[13.3px] active:bg-primary-pink active:text-white"
      >
        +
      </button>
      <span>{candleIsInShoppingCart.amount}</span>
      <button
        onClick={() => handleRemoveOneFromShoppingCartArray(candleIsInShoppingCart)}
        className="border-[3px] border-primary-pink py-[12.5px] text-xl font-semibold leading-[13.3px] active:bg-primary-pink active:text-white"
      >
        -
      </button>
    </div>
  );
};

export default AmountToggle;
