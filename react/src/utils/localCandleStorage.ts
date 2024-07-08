import { CandleType, ChosenCandleType } from "./types/candles";

export const useLocalCandlesStorage = (key: string) => {
  const getItems = (): CandleType[] | undefined => {
    try {
      const candles = localStorage.getItem(key);
      return candles ? JSON.parse(candles) : undefined;
    } catch (error) {
      console.log(error);
    }
  };
  return { getItems };
};
export const useLocalFavoriteCandlesStorage = () => {
  const key = "favoritesCandles";
  const addItemToFavorites = (value: CandleType) => {
    try {
      const currentCandles = getFavoriteItems();
      if (!currentCandles) {
        const newCandles = [value];
        return localStorage.setItem(key, JSON.stringify(newCandles));
      } else {
        const candleExists = currentCandles.findIndex(
          (candle) => candle._id === value._id,
        );
        console.log(candleExists);

        if (candleExists === -1) {
          const newCandles = [...currentCandles, value];
          localStorage.setItem(key, JSON.stringify(newCandles));
        } else {
          deleteItemFromFavorites(value._id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getFavoriteItems = (): CandleType[] | undefined => {
    try {
      const candles = localStorage.getItem(key);
      return candles ? [...JSON.parse(candles)] : undefined;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteItemFromFavorites = (id: string) => {
    try {
      const currentCandles = getFavoriteItems();
      if (currentCandles) {
        const newCandles = currentCandles.filter((candle) => candle._id !== id);
        localStorage.setItem(key, JSON.stringify(newCandles));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { addItemToFavorites, getFavoriteItems };
};

export const useLocalShoppingCartCandlesStorage = () => {
  const key = "shoppingCartCandles";
  const addItemToCart = (value: ChosenCandleType) => {
    try {
      const currentCandles = getShoppingCartItems();
      if (!currentCandles) {
        const newCandles = [{ ...value, quantity: 1 }];
        return localStorage.setItem(key, JSON.stringify(newCandles));
      } else {
        const candleExists = currentCandles.findIndex(
          (candle) =>
            candle._id === value._id &&
            candle.colors._id === value.colors._id &&
            candle.fragrances === value.fragrances,
        );
        if (candleExists === -1) {
          const newCandles = [...currentCandles, { ...value, quantity: 1 }];
          localStorage.setItem(key, JSON.stringify(newCandles));
        } else {
          const newCandles = currentCandles.map((candle) => {
            if (
              candle._id === value._id &&
              candle.colors._id === value.colors._id &&
              candle.fragrances === value.fragrances
            ) {
              return { ...candle, quantity: candle.quantity + 1 };
            }
            return candle;
          });
          return localStorage.setItem(key, JSON.stringify(newCandles));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getShoppingCartItems = (): ChosenCandleType[] | undefined => {
    try {
      const candles = localStorage.getItem(key);
      return candles ? [...JSON.parse(candles)] : undefined;
    } catch (error) {
      console.log(error);
    }
  };
  const removeItemFromCart = (value: ChosenCandleType) => {
    try {
      const currentCandles = getShoppingCartItems();
      if (currentCandles) {
        const candleExists = currentCandles.findIndex(
          (candle) =>
            candle._id === value._id &&
            candle.colors._id === value.colors._id &&
            candle.fragrances === value.fragrances,
        );
        if (candleExists === -1) return;
        if (currentCandles[candleExists].quantity === 1) {
          const newCandles = currentCandles.filter(
            (candle) =>
              candle._id !== value._id ||
              candle.colors._id !== value.colors._id ||
              candle.fragrances !== value.fragrances,
          );
          localStorage.setItem(key, JSON.stringify(newCandles));
        } else {
          const updatedCandles = currentCandles.map((candle) => {
            if (
              candle._id === value._id &&
              candle.colors._id === value.colors._id &&
              candle.fragrances === value.fragrances
            ) {
              return { ...candle, quantity: candle.quantity - 1 };
            }
            return candle;
          });
          return localStorage.setItem(key, JSON.stringify(updatedCandles));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    addItemToCart,
    getShoppingCartItems,
    removeItemFromCart,
  };
};
