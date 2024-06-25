import React, { useEffect, useMemo, useState } from "react";
import {
  CandleColorT,
  CandleType,
  ChosenCandleType,
} from "../../utils/types/candles";
import ColorsMenu from "./menus/ColorMenu";
import FragranceMenu from "./menus/FragranceMenu";
import CandlePrices from "./CandlePrices";
import { useOutletContext } from "react-router-dom";
import { ContextType } from "../../App";

const MobileTabletCandleInfo = ({
  children,
  currentCandle,
}: {
  children: React.ReactNode;
  currentCandle: CandleType;
}) => {
  const { handleAddToShoppingCartArray,handleRemoveOneFromShoppingCartArray, shoppingCartArray } =
    useOutletContext<ContextType>();

  const [currentCandleFragrance, setCurrentCandleFragrance] = useState(
    currentCandle.fragrances[0],
  );
  const chooseCandleFragrance = (fragrance: string) => {
    setCurrentCandleFragrance(fragrance);
  };
  const [currentCandleColor, setCurrentCandleColor] = useState(
    currentCandle.colors[0],
  );
  const currentCandleColorOptions = currentCandle.colors;
  const findCandleColorById = (id: string) => {
    return currentCandle.colors.find((color) => color._id === id);
  };
  const chooseCandleColor = (id: CandleColorT["_id"]) => {
    const color = findCandleColorById(id);
    if (!color) return;
    setCurrentCandleColor(color);
  };
  const chosenCandle: ChosenCandleType = useMemo(() => {
    return {
      _id: currentCandle._id,
      price: currentCandle.price,
      salePrice: currentCandle.salePrice,
      description: currentCandle.description,
      type: currentCandle.type,
      name: currentCandle.name,
      shape: currentCandle.shape,
      size: currentCandle.size,
      pictures: currentCandle.pictures,
      colors: currentCandleColor,
      fragrances: currentCandleFragrance,
      __v: currentCandle.__v,
      amount: 1,
    };
  }, [currentCandle, currentCandleColor, currentCandleFragrance]);
  const candleIsInShoppingCart = useMemo(() => {
    return shoppingCartArray.find(
      (candle) =>
        candle._id === chosenCandle._id &&
        candle.colors._id === chosenCandle.colors._id &&
        candle.fragrances === chosenCandle.fragrances,
    );
  }, [chosenCandle, shoppingCartArray]);
console.log('candleIsInShoppingCart',candleIsInShoppingCart);

  return (
    <div className="flex w-full flex-col items-center gap-7 px-[34px]">
      {/* name and price */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-xl font-semibold sm:text-[42.77px] sm:leading-[56.89px]">
          {currentCandle.name}
        </h1>
        <CandlePrices currentCandle={currentCandle} />
      </div>
      {children}
      <ColorsMenu
        currentCandleColor={currentCandleColor}
        currentCandleColorOptions={currentCandleColorOptions}
        chooseCandleColor={chooseCandleColor}
      />
      <FragranceMenu
        currentCandleFragrance={currentCandleFragrance}
        chooseCandleFragrance={chooseCandleFragrance}
        currentCandle={currentCandle}
      />
      {candleIsInShoppingCart ? (
        <div className="flex *:text-center items-center *:grow   w-full py-3">
          <button onClick={() => handleAddToShoppingCartArray(chosenCandle)} className="border-[3px] border-primary-pink py-[12.5px] text-xl font-semibold leading-[13.3px] active:bg-primary-pink active:text-white">+</button>
          <span>{candleIsInShoppingCart.amount}</span>
          <button onClick={() => handleRemoveOneFromShoppingCartArray(chosenCandle)} className="border-[3px] border-primary-pink py-[12.5px] text-xl font-semibold leading-[13.3px] active:bg-primary-pink active:text-white">-</button>

        </div>
      ) : (
        <button
          onClick={() => handleAddToShoppingCartArray(chosenCandle)}
          className="w-full  border-[6px] border-primary-pink py-[25px] text-xl font-semibold leading-[26.6px]"
        >
          הוספה לסל
        </button>
      )}
    </div>
  );
};

export default MobileTabletCandleInfo;
