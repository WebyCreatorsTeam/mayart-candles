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
      className="flex w-full justify-center  ~sm/xl:~text-[0.6rem]/[1.5rem] ~sm/2xl:~leading-[0.75rem]/[4rem] sm:max-md:text-base lg:w-fit "
      dir="ltr"
    >
      <div className="flex  bg-[#F7E1D7] *:grow *:py-[7.22px] *:text-center ~/2xl:~w-[4.75rem]/[12.5rem] sm:*:py-[12.14px] lg:*:py-[19px]">
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
