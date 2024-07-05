import React, { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  CandleType,
  CandleColorT,
  ChosenCandleType,
} from "../../../utils/types/candles";
import CandlePrices from "../CandlePrices";
import ColorsMenu from "../menus/ColorMenu";
import FragranceMenu from "../menus/FragranceMenu";
import { ContextType } from "../../../App";
import AmountToggle from "./AmountToggle";
import AddToCartButton from "./AddToCartButton";

const MobileTabletCandleInfo = ({
  children,
  currentCandle,
}: {
  children: React.ReactNode;
  currentCandle: CandleType;
}) => {
  const {
    handleAddToShoppingCartArray,
    handleRemoveOneFromShoppingCartArray,
    shoppingCartArray,
  } = useOutletContext<ContextType>();

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
      quantity: 1,
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
        <AmountToggle
          candleIsInShoppingCart={candleIsInShoppingCart}
          handleAddToShoppingCartArray={handleAddToShoppingCartArray}
          handleRemoveOneFromShoppingCartArray={
            handleRemoveOneFromShoppingCartArray
          }
        />
      ) : (
        <AddToCartButton
          chosenCandle={chosenCandle}
          handleAddToShoppingCartArray={handleAddToShoppingCartArray}
        />
      )}
    </div>
  );
};

export default MobileTabletCandleInfo;
