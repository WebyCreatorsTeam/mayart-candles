import React, { useEffect, useMemo } from "react";
import { ChosenCandleType } from "../../../utils/types/candles";
import Title from "./Title";
import Overlay from "./Overlay";
import ShoppingCartList from "./ShoppingCartList";
import ShoppingCartPopoverButtons from "./Buttons";
const ShoppingCartPopover = ({
  showShoppingCart,
  shoppingCartArray,
  closeShoppingCartPopover,
  handleRemoveOneFromShoppingCartArray,
  handleAddToShoppingCartArray,
}: {
  showShoppingCart: boolean;
  shoppingCartArray: ChosenCandleType[];
  handleRemoveOneFromShoppingCartArray: (
    event: React.MouseEvent,
    value: ChosenCandleType,
  ) => void;
  handleAddToShoppingCartArray: (
    event: React.MouseEvent,
    value: ChosenCandleType,
  ) => void;
  closeShoppingCartPopover: (event?: React.MouseEvent) => void;
}) => {
  const shoppingCartArrayActualLength = useMemo(() => {
    let shoppingCartArrayActualLength = 0;
    shoppingCartArray.forEach((candle) => {
      if (candle.quantity) {
        shoppingCartArrayActualLength += candle.quantity;
      }
    });
    return shoppingCartArrayActualLength;
  }, [shoppingCartArray]);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeShoppingCartPopover();
    }, 5000);
    return () => clearTimeout(timer);
  }, [closeShoppingCartPopover, showShoppingCart]);

  return (
    <Overlay showShoppingCart={showShoppingCart}>
      <div
        dir="rtl"
        className="fixed left-0 top-0 z-[1000] flex h-[651px] w-[334px] flex-col gap-5 bg-white sm:h-[780px] 2xl:w-[960px] xl:h-full xl:w-[760px]"
      >
        <Title
          closeShoppingCartPopover={closeShoppingCartPopover}
          shoppingCartArrayActualLength={shoppingCartArrayActualLength}
        />

        <div
          className={`flex h-full w-full flex-col items-center gap-5 px-5 max-lg:max-h-[555px] max-lg:p-5 sm:max-lg:max-h-[635px] xl:max-h-[calc(100%-484px)] 2xl:px-[95px] ${shoppingCartArrayActualLength > 0 ? "" : "gap-[50px] pb-[37px]"}`}
        >
          <ShoppingCartList
            shoppingCartArrayActualLength={shoppingCartArrayActualLength}
            shoppingCartArray={shoppingCartArray}
            handleRemoveOneFromShoppingCartArray={
              handleRemoveOneFromShoppingCartArray
            }
            handleAddToShoppingCartArray={handleAddToShoppingCartArray}
          />
          <ShoppingCartPopoverButtons
            shoppingCartArrayActualLength={shoppingCartArrayActualLength}
            closeShoppingCartPopover={closeShoppingCartPopover}
          />
        </div>
      </div>
    </Overlay>
  );
};

export default ShoppingCartPopover;
