import React from "react";
import { ChosenCandleType } from "../../../../utils/types/candles";
import PopoverCandleActionButtons from "./ActionButtons";
import PopoverCandleInfo from "./Info";

const ShoppingCartPopoverCandleThumbnail = ({
  candle,
  index,
  handleRemoveOneFromShoppingCartArray,
  handleAddToShoppingCartArray,
}: {
  candle: ChosenCandleType;
  index: number;
  handleRemoveOneFromShoppingCartArray: (
    event: React.MouseEvent,
    value: ChosenCandleType,
  ) => void;
  handleAddToShoppingCartArray: (
    event: React.MouseEvent,
    value: ChosenCandleType,
  ) => void;
}) => {
  return (
    <div className="relative flex h-fit w-44 flex-col items-center gap-5 lg:w-full lg:flex-row lg:justify-between lg:gap-0">
      <div className="flex w-full flex-col items-center lg:w-6/12">
        <div className="self-start leading-[36px] lg:hidden">{index + 1})</div>
        <div className="flex flex-col gap-1 lg:w-full lg:flex-row">
          <img
            className="size-28 object-cover"
            src={candle.pictures[0].img}
            alt={candle.name}
          />
          <PopoverCandleInfo candle={candle} />
        </div>
      </div>
      <PopoverCandleActionButtons
        candle={candle}
        handleRemoveOneFromShoppingCartArray={
          handleRemoveOneFromShoppingCartArray
        }
        handleAddToShoppingCartArray={handleAddToShoppingCartArray}
      />
    </div>
  );
};

export default ShoppingCartPopoverCandleThumbnail;
