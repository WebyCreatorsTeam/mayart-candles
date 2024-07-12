import React from "react";
import { ChosenCandleType } from "../../../utils/types/candles";
import ShoppingCartPopoverCandleThumbnail from "./Candle";
import ShoppingCartPriceSum from "./ShoppingCartPriceSum";
const ShoppingCartList = ({
  shoppingCartArrayActualLength,
  shoppingCartArray,
  handleRemoveOneFromShoppingCartArray,
  handleAddToShoppingCartArray,
}: {
  shoppingCartArrayActualLength: number;
  shoppingCartArray: ChosenCandleType[];
  handleRemoveOneFromShoppingCartArray: (
    event: React.MouseEvent,
    value: ChosenCandleType,
  ) => void;
  handleAddToShoppingCartArray: (
    event: React.MouseEvent,
    value: ChosenCandleType,
  ) => void;
}) => {
  return shoppingCartArrayActualLength > 0 ? (
    <>
      <div className="scrollbar-none flex h-full w-full flex-col items-center overflow-y-scroll border-[#B0C4B1] pb-5 max-lg:border-y max-sm:max-h-[276px] xl:min-h-full xl:gap-2  xl:py-0">
        {shoppingCartArray.map((candle, index) => (
          <ShoppingCartPopoverCandleThumbnail
            key={`${candle._id}${index}${candle.colors._id}${candle.fragrances}`}
            candle={candle}
            index={index}
            handleRemoveOneFromShoppingCartArray={
              handleRemoveOneFromShoppingCartArray
            }
            handleAddToShoppingCartArray={handleAddToShoppingCartArray}
          />
        ))}
      </div>
      <ShoppingCartPriceSum shoppingCartArray={shoppingCartArray} />
    </>
  ) : (
    <div className="w-full border-b border-b-[#B0C4B1] pb-[120px] pt-5 text-center text-lg leading-9">
      סל הקניות שלך ריק בינתיים.
    </div>
  );
};

export default ShoppingCartList;
