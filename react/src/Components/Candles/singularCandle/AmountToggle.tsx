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
    <div className="flex w-96 items-center max-xl:py-3 max-xl:*:grow *:rounded-full *:text-center xl:max-2xl:text-3xl xl:max-2xl:leading-[42.56px] 2xl:text-4xl 2xl:leading-[47.88px]">
      <button
        onClick={(e) => handleAddToShoppingCartArray(e, candleIsInShoppingCart)}
        className="border-[3px] xl:size-[98px] border-primary-pink py-[12.5px] text-xl font-semibold leading-[13.3px] active:bg-primary-pink active:text-white"
      >
        +
      </button>
      <span className="grow">{candleIsInShoppingCart.quantity}</span>
      <button
        onClick={(e) =>
          handleRemoveOneFromShoppingCartArray(e, candleIsInShoppingCart)
        }
        className="border-[3px] xl:size-[98px] border-primary-pink py-[12.5px] text-xl font-semibold leading-[13.3px] active:bg-primary-pink active:text-white"
      >
        -
      </button>
    </div>
  );
};

export default AmountToggle;
