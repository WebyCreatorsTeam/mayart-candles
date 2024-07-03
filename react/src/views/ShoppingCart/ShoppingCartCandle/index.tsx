import React from "react";
import { useOutletContext } from "react-router-dom";
import { ChosenCandleType } from "../../../utils/types/candles";
import PopoverCandleActionButtons from "../../../Components/Popover/ShoppingCart/Candle/ActionButtons";
import { ContextType } from "../../../App";

import Color from "./Color";
import DSKPLinkToCandle from "./DSKPLinkToCandle";
import PricingSystem from "../../../Components/ListComponents/PricingSystem";
import Title from "../../../Components/ListComponents/Title";
const ShoppingCartCandle = ({ candle }: { candle: ChosenCandleType }) => {
  const { handleAddToShoppingCartArray, handleRemoveOneFromShoppingCartArray } =
    useOutletContext<ContextType>();
  return (
    <div key={candle._id} className="flex w-full flex-col gap-3 text-center">
      <div className="flex flex-col items-center gap-3 sm:gap-[25.66px] lg:flex-row lg:items-start lg:gap-[59px]">
        {/* candle image */}
        <img
          className="w-full object-cover max-sm:max-h-[475px] lg:h-[304px] lg:max-h-[304px] lg:w-[301px] lg:max-w-[301px]"
          src={candle.pictures[0].img}
          alt={candle.name}
        />
        <div className="flex  w-full flex-col items-center gap-3 sm:gap-[25.66px] lg:items-start lg:items-start lg:gap-9 lg:*:items-start">
          <div className="flex flex-col gap-2.5 text-base leading-[21.28px] sm:gap-[21.38px]">
            <Title candle={candle} />
            <PricingSystem candle={candle} />
          </div>
          <div
            dir="rtl"
            className="flex w-full flex-col justify-center gap-[15px] text-lg leading-9 sm:gap-8 sm:text-[38.49px] sm:leading-[76.98px] lg:gap-[21px] lg:text-[32px] lg:font-normal lg:leading-none"
          >
            <Color color={candle.colors} />
            <p>ריח: {candle.fragrances}</p>
          </div>
          <span className="lg:hidden">
            <PopoverCandleActionButtons
              handleAddToShoppingCartArray={handleAddToShoppingCartArray}
              handleRemoveOneFromShoppingCartArray={
                handleRemoveOneFromShoppingCartArray
              }
              candle={candle}
            />
          </span>
        </div>
        <span className="hidden h-[304px] flex-col items-end justify-between lg:flex">
          <PopoverCandleActionButtons
            handleAddToShoppingCartArray={handleAddToShoppingCartArray}
            handleRemoveOneFromShoppingCartArray={
              handleRemoveOneFromShoppingCartArray
            }
            candle={candle}
          />
          <DSKPLinkToCandle id={candle._id} />
        </span>
      </div>
    </div>
  );
};

export default ShoppingCartCandle;
