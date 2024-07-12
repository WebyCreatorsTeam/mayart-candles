import React from "react";
import { useOutletContext } from "react-router-dom";
import { ChosenCandleType } from "../../../utils/types/candles";
import PopoverCandleQuantityToggle from "../../../Components/Popover/ShoppingCart/Candle/QuantityToggle";
import { ContextType } from "../../../App";

import Color from "./Color";
import DSKPLinkToCandle from "./DSKPLinkToCandle";
import PricingSystem from "../../../Components/ListComponents/PricingSystem";
import Title from "../../../Components/ListComponents/Title";
const ShoppingCartCandle = ({ candle }: { candle: ChosenCandleType }) => {
  const { handleAddToShoppingCartArray, handleRemoveOneFromShoppingCartArray } =
    useOutletContext<ContextType>();
  const ChosenCandleId = `${candle._id}${candle.colors.color}${candle.fragrances}`;
  return (
    <div
      key={ChosenCandleId}
      className="flex w-full flex-col gap-3 text-center"
    >
      <div className="flex flex-col items-center gap-3 sm:gap-[25.66px] xl:flex-row xl:items-start xl:gap-[59px]">
        {/* candle image */}
        <img
          className="w-full object-cover max-sm:max-h-[475px] xl:h-[304px] xl:max-h-[304px] xl:w-[301px] xl:max-w-[301px]"
          src={candle.pictures[0].img}
          alt={candle.name}
        />
        <div className="flex  w-full flex-col items-center gap-3 sm:gap-[25.66px] xl:items-start xl:items-start xl:gap-9 xl:*:items-start">
          <div className="flex flex-col gap-2.5 text-base leading-[21.28px] sm:gap-[21.38px]">
            <Title candle={candle} />
            <PricingSystem candle={candle} />
          </div>
          <div
            dir="rtl"
            className="flex w-full flex-col justify-center gap-[15px] text-lg leading-9 sm:gap-8 sm:text-[38.49px] sm:leading-[76.98px] xl:gap-[21px] xl:text-[32px] xl:font-normal xl:leading-none"
          >
            <Color color={candle.colors} />
            <p>ריח: {candle.fragrances}</p>
          </div>
          <span className="lg:hidden">
            <PopoverCandleQuantityToggle
              handleAddToShoppingCartArray={handleAddToShoppingCartArray}
              handleRemoveOneFromShoppingCartArray={
                handleRemoveOneFromShoppingCartArray
              }
              candle={candle}
            />
          </span>
        </div>
        <span className="hidden h-[304px] flex-col items-end justify-between xl:flex">
          <PopoverCandleQuantityToggle
            handleAddToShoppingCartArray={handleAddToShoppingCartArray}
            handleRemoveOneFromShoppingCartArray={
              handleRemoveOneFromShoppingCartArray
            }
            candle={candle}
          />
          <DSKPLinkToCandle id={ChosenCandleId} />
        </span>
      </div>
    </div>
  );
};

export default ShoppingCartCandle;
