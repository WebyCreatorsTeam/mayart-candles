import React, { useEffect, useMemo } from "react";
import { ChosenCandleType } from "../../../utils/types/candles";
import Title from "./Title";
import Overlay from "./Overlay";
import ShoppingCartPopoverCandleThumbnail from "./Candle";
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
      if (candle.amount) {
        shoppingCartArrayActualLength += candle.amount;
      }
    });
    return shoppingCartArrayActualLength;
  }, [shoppingCartArray]);
  const shoppingCartArrayPriceSum = shoppingCartArray.reduce((sum, candle) => {
    if (candle.salePrice) {
      return sum + candle.salePrice * candle.amount;
    } else {
      return sum + candle.price * candle.amount;
    }
  }, 0);

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
        className="fixed left-0 top-0 z-[1000] flex h-[651px] w-[334px] flex-col gap-5 bg-white sm:h-[780px] lg:h-full lg:w-[960px]"
      >
        <Title
          closeShoppingCartPopover={closeShoppingCartPopover}
          shoppingCartArrayActualLength={shoppingCartArrayActualLength}
        />

        <div
          className={`${
            showShoppingCart ? "" : ""
          } flex h-full w-full flex-col items-center gap-5 px-5 max-lg:max-h-[555px] max-lg:p-5 sm:max-lg:max-h-[635px]  lg:max-h-[calc(100%-484px)] lg:px-[95px] ${shoppingCartArrayActualLength > 0 ? "" : "gap-[50px] pb-[37px]"}`}
        >
          {shoppingCartArrayActualLength > 0 ? (
            <>
              <div className="scrollbar-none flex h-full w-full flex-col items-center overflow-y-scroll border-[#B0C4B1] pb-5 max-lg:border-y max-sm:max-h-[276px] lg:min-h-full lg:gap-2  lg:py-0">
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
              <div
                dir="rtl"
                className={`hidden ${shoppingCartArray.length > 0 ? "lg:flex" : "hidden"} mb-[93px] h-fit w-full justify-between gap-2 border-b border-b-[#4A5759] pb-[35px] text-2xl font-semibold leading-[31.92px]`}
              >
                <p>סיכום</p>
                <span>₪{shoppingCartArrayPriceSum}</span>
              </div>
            </>
          ) : (
            <div className="w-full border-b border-b-[#B0C4B1] pb-[120px] pt-5 text-center text-lg leading-9">
              סל הקניות שלך ריק בינתיים.
            </div>
          )}
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
