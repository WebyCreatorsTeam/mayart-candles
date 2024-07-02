import React, { useMemo } from "react";
import { ChosenCandleType } from "../../../../utils/types/candles";

const PopoverCandleActionButtons = ({
  candle,
  handleRemoveOneFromShoppingCartArray,
  handleAddToShoppingCartArray,
}: {
  candle: ChosenCandleType;
  handleRemoveOneFromShoppingCartArray: (
    event: React.MouseEvent,
    value: ChosenCandleType,
  ) => void;
  handleAddToShoppingCartArray: (
    event: React.MouseEvent,
    value: ChosenCandleType,
  ) => void;
}) => {
  const { amount } = useMemo(() => candle, [candle]) as ChosenCandleType;
  return (
    <span
      className="flex w-full justify-center text-[9.13px] leading-[12.14px] sm:text-base lg:w-fit lg:text-2xl lg:leading-[31.92px]"
      dir="ltr"
    >
      <div className="flex  w-[77.18px] bg-[#F7E1D7] *:grow *:py-[7.22px] *:text-center sm:*:py-[12.14px] lg:w-[203px] lg:*:py-[19px]">
        <button
          onClick={(e) => {
            handleAddToShoppingCartArray(e, candle);
          }}
        >
          +
        </button>
        <span>{amount}</span>
        <button
          onClick={(e) => handleRemoveOneFromShoppingCartArray(e, candle)}
        >
          -
        </button>
      </div>
    </span>
  );
};

export default PopoverCandleActionButtons;
