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
import ShoppingCartPopover from "./Components/Popover/ShoppingCart";

export type ContextType = {
  favoritesArray: CandleType[];
  shoppingCartArray: ChosenCandleType[];
  handleAddToFavoritesArray: (value: CandleType) => void;
  handleAddToShoppingCartArray: (candle: ChosenCandleType) => void;
  handleRemoveOneFromShoppingCartArray: (candle: ChosenCandleType) => void;
  setShoppingCartPopoverIdleTimer: (value: boolean) => void;
};
function App() {
  const [remaining, setRemaining] = useState<number>(0);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [shoppingCartPopoverIdleTimer, setShoppingCartPopoverIdleTimer] =
    useState(false);
  const openShoppingCart = () => setShowShoppingCart(true);
  const closeShoppingCart = () => {
    setShoppingCartPopoverIdleTimer(false);
    setShowShoppingCart(false);
  };
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
    if (alreadyInCart === -1) {
      setShoppingCartPopoverIdleTimer(true);
      setShoppingCartArray([...shoppingCartArray, value]);
    } else {
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
    if (shoppingCartArray.length > 0)
      if (shoppingCartPopoverIdleTimer) setShowShoppingCart(true);
    if (!shoppingCartPopoverIdleTimer)
      setTimeout(() => {
        setShoppingCartPopoverIdleTimer(false);
        setShowShoppingCart(false);
      }, 5000);
  }, [shoppingCartArray, shoppingCartPopoverIdleTimer]);

  return (
    <div className="scrollbar-none relative flex h-fit min-h-svh flex-col justify-between overflow-x-clip">
      <div className="h-full ">
        <NavBar
          favoritesArray={favoritesArray}
          handleAddToFavoritesArray={handleAddToFavoritesArray}
        />

        <ShoppingCartPopover
          closeShoppingCart={closeShoppingCart}
          shoppingCartArray={shoppingCartArray}
          showShoppingCart={showShoppingCart}
          handleAddToShoppingCartArray={handleAddToShoppingCartArray}
          handleRemoveOneFromShoppingCartArray={
            handleRemoveOneFromShoppingCartArray
          }
        />
        <div className="flex h-fit w-full flex-col">
          <Outlet
            context={{
              shoppingCartArray,
              handleAddToShoppingCartArray,
              handleRemoveOneFromShoppingCartArray,
              favoritesArray,
              handleAddToFavoritesArray,
              setShoppingCartPopoverIdleTimer,
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
