import React from "react";
import { ChosenCandleType } from "../../../utils/types/candles";

const AmountToggle = ({
  candleIsInShoppingCart,
  handleAddToShoppingCartArray,
  handleRemoveOneFromShoppingCartArray,
}: {
  candleIsInShoppingCart: ChosenCandleType;
  handleAddToShoppingCartArray: (
    event: React.MouseEvent,
    candle: ChosenCandleType,
  ) => void;
  handleRemoveOneFromShoppingCartArray: (
    event: React.MouseEvent,
    candle: ChosenCandleType,
  ) => void;
}) => {
  return (
    <div className="flex w-96 items-center py-3 *:grow *:rounded-full *:text-center">
      <button
        onClick={(e) => handleAddToShoppingCartArray(e, candleIsInShoppingCart)}
        className="border-[3px] border-primary-pink py-[12.5px] text-xl font-semibold leading-[13.3px] active:bg-primary-pink active:text-white"
      >
        +
      </button>
      <span>{candleIsInShoppingCart.quantity}</span>
      <button
        onClick={(e) =>
          handleRemoveOneFromShoppingCartArray(e, candleIsInShoppingCart)
        }
        className="border-[3px] border-primary-pink py-[12.5px] text-xl font-semibold leading-[13.3px] active:bg-primary-pink active:text-white"
      >
        -
      </button>
    </div>
  );
};

export default AmountToggle;
