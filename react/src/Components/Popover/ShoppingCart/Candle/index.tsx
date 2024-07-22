import React from "react";
import { ChosenCandleType } from "../../../../utils/types/candles";
import PopoverCandleQuantityToggle from "./QuantityToggle";
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
    <div className="relative flex h-fit w-44 flex-col items-center gap-5 xl:w-full xl:flex-row xl:justify-between xl:gap-0">
      <div className="flex w-full flex-col items-center xl:w-6/12">
        <div className="self-start leading-[36px] xl:hidden">{index + 1})</div>
        <div className="flex flex-col gap-1 xl:w-full xl:flex-row">
          <img
            className="size-28 object-cover"
            src={candle.pictures[0].img}
            alt={candle.name}
          />
          <PopoverCandleInfo candle={candle} />
        </div>
      </div>
      <PopoverCandleQuantityToggle
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
