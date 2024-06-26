import React from "react";
import { ChosenCandleType } from "../../../utils/types/candles";
import Title from "./Title";
import Overlay from "./Overlay";

const ShoppingCartPopover = ({
  showShoppingCart,
  shoppingCartArray,
  closeShoppingCart,
}: {
  showShoppingCart: boolean;
  shoppingCartArray: ChosenCandleType[];
  handleRemoveOneFromShoppingCartArray: (value: ChosenCandleType) => void;
  handleAddToShoppingCartArray: (value: ChosenCandleType) => void;
  closeShoppingCart: () => void;
}) => {
  return (
    <Overlay closeShoppingCart={closeShoppingCart} showShoppingCart={showShoppingCart}>
      <div
        dir="rtl"
        className="fixed left-0 top-0 z-[1000]  flex h-[681px] w-[334px] flex-col gap-5 bg-white"
      >
        <Title closeShoppingCart={closeShoppingCart} shoppingCartArray={shoppingCartArray} />
        <div
          className={`${
            showShoppingCart ? "" : ""
          } flex h-full max-h-[555px] w-full flex-col items-center gap-5 p-5 px-5`}
        >
          <div className="scrollbar-none flex h-fit max-h-[276px] w-full flex-col items-center overflow-y-scroll border-y border-[#B0C4B1]">
            {shoppingCartArray.map((candle, index) => (
              <div className="relative flex h-[206.45px] w-44  flex-col items-center gap-5">
                <div className="absolute start-0 top-0">{index + 1})</div>
                <div className="flex flex-col gap-1">
                  <img
                    className="size-28 object-cover"
                    src={candle.pictures[0].img}
                    alt={candle.name}
                  />
                  <span className="text-center leading-[21.28px]">
                    <h1 className="text-lg font-semibold leading-[23.94px]">
                      {candle.name}
                    </h1>
                    {candle.price}₪{" "}
                    {candle.salePrice ? `(${candle.salePrice}₪)` : ""}
                  </span>
                  <span
                    style={{
                      backgroundColor: candle.colors.hexCode,
                      border:
                        candle.colors.color === "לבן" ? "1px solid black" : "0",
                    }}
                    className={`${candle.colors.color === "שחור" ? "text-white" : "text-black"} w-fit self-center px-3 py-1`}
                  >
                    {candle.fragrances}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <span className="flex h-full w-full flex-col gap-[15px] text-xl font-semibold leading-[26.6px] *:w-full *:p-[23px] *:text-center ">
            <button className="bg-black text-white">תשלום</button>
            <button onClick={closeShoppingCart} className="border-4 border-black active:bg-black active:text-white">
              המשך קניות
            </button>
          </span>
        </div>
      </div>
    </Overlay>
  );
};

export default ShoppingCartPopover;
