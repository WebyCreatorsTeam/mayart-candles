import React, { useEffect, useState } from "react";
import "./output.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

import { CandleType, ChosenCandleType } from "./utils/types/candles";
import {
  useLocalFavoriteCandlesStorage,
  useLocalShoppingCartCandlesStorage,
} from "./utils/localCandleStorage";
import ContactKnob from "./Components/ContactKnob";

export type ContextType = {
  favoritesArray: CandleType[];
  shoppingCartArray: ChosenCandleType[];
  handleAddToFavoritesArray: (value: CandleType) => void;
  handleAddToShoppingCartArray: (candle: ChosenCandleType) => void;
  handleRemoveOneFromShoppingCartArray: (candle: ChosenCandleType) => void;
};
function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const { getFavoriteItems, addItemToFavorites } =
    useLocalFavoriteCandlesStorage();
  const { getShoppingCartItems, addItemToCart, removeItemFromCart } =
    useLocalShoppingCartCandlesStorage();
  const initialFavoritesArray = getFavoriteItems();
  const initialShoppingCartArray = getShoppingCartItems();
  const [favoritesArray, setFavoritesArray] = useState<CandleType[]>(
    initialFavoritesArray || [],
  );
  const [shoppingCartArray, setShoppingCartArray] = useState<
    ChosenCandleType[]
  >(initialShoppingCartArray || []);
  const handleAddToShoppingCartArray = (value: ChosenCandleType) => {
    const alreadyInCart = shoppingCartArray.findIndex(
      (candle) =>
        candle._id === value._id &&
        candle.colors._id === value.colors._id &&
        candle.fragrances === value.fragrances,
    );
    if (alreadyInCart === -1)
      setShoppingCartArray([...shoppingCartArray, value]);
    else {
      const updatedCart = shoppingCartArray.map((candle) => {
        if (
          candle._id === value._id &&
          candle.colors._id === value.colors._id &&
          candle.fragrances === value.fragrances
        ) {
          return { ...candle, amount: candle.amount + 1 };
        }
        return candle;
      });
      setShoppingCartArray(updatedCart);
    }
    console.log("shoppingCartArray", shoppingCartArray);

    addItemToCart(value);
  };
  const handleAddToFavoritesArray = (value: CandleType) => {
    const alreadyFavorite = favoritesArray.findIndex(
      (candle) => candle._id === value._id,
    );
    if (alreadyFavorite === -1) setFavoritesArray([...favoritesArray, value]);
    else {
      const filteredArray = favoritesArray.filter(
        (favorite) => favorite._id !== value._id,
      );
      setFavoritesArray(filteredArray);
    }
    addItemToFavorites(value);
  };

  const handleRemoveOneFromShoppingCartArray = (value: ChosenCandleType) => {
    const currentCandle = shoppingCartArray.findIndex(
      (candle) =>
        candle._id === value._id &&
        candle.colors._id === value.colors._id &&
        candle.fragrances === value.fragrances,
    );
    const updatedCart = shoppingCartArray.map((candle) => {
      if (
        candle._id === value._id &&
        candle.colors._id === value.colors._id &&
        candle.fragrances === value.fragrances
      ) {
        return { ...candle, amount: candle.amount - 1 };
      }
      return candle;
    });
    if (updatedCart[currentCandle].amount === 0) {
      const filteredArray = shoppingCartArray.filter(
        (candle) =>
          candle._id !== value._id ||
        candle.colors._id !== value.colors._id ||
        candle.fragrances !== value.fragrances,
      );
      setShoppingCartArray(filteredArray);
      return removeItemFromCart(value);
    }
    setShoppingCartArray(updatedCart);
    removeItemFromCart(value);
  };

  useEffect(() => {
    if (shoppingCartArray.length > 0) setShowShoppingCart(true);
    setTimeout(() => {
      setShowShoppingCart(false);
    }, 5000);
  }, [shoppingCartArray]);

  return (
    <div className="scrollbar-none relative flex h-fit min-h-svh flex-col justify-between overflow-x-clip">
      <div className="h-full ">
        <NavBar
          favoritesArray={favoritesArray}
          handleAddToFavoritesArray={handleAddToFavoritesArray}
        />
        {/* shopping cart popup */}
        <div className="absolute flex h-[681px] w-[334px] flex-col">
          <h1
            className={`bg-[#F7E1D799] text-left ${showShoppingCart ? "" : "hidden"}`}
          >
            סל קניות
          </h1>
          <div
            className={`${
              showShoppingCart ? "" : "hidden"
            } absolute right-0 top-0 flex h-[681px] w-[334px] flex-col justify-between bg-[#F7E1D799]`}
          >
            <div className="">
              {shoppingCartArray.map((candle) => (
                <div
                  key={candle._id}
                  className="flex h-[118px] w-full flex-col items-center justify-center gap-1"
                >
                  <img
                    src={candle.pictures[0].img}
                    alt="calends"
                    className="h-[118px] w-[118px] object-cover"
                  />
                  <p>{candle.name}</p>
                  <p>{candle.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-fit w-full flex-col">
          <Outlet
            context={{
              shoppingCartArray,
              handleAddToShoppingCartArray,
              handleRemoveOneFromShoppingCartArray,
              favoritesArray,
              handleAddToFavoritesArray,
            }}
          />
          <ContactKnob />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
