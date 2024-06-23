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
  const addItem = (value: CandleType) => {
    try {
      const currentCandles = getItems();
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
          deleteItem(value._id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getItems = (): CandleType[] | undefined => {
    try {
      const candles = localStorage.getItem(key);
      return candles ? [...JSON.parse(candles)] : undefined;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteItem = (id: string) => {
    try {
      const currentCandles = getItems();
      if (currentCandles) {
        const newCandles = currentCandles.filter((candle) => candle._id !== id);
        localStorage.setItem(key, JSON.stringify(newCandles));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { addItem, getItems };
};

export const useLocalShoppingCartCandlesStorage = () => {
  const key = "shoppingCartCandles";
  const addItem = (value: ChosenCandleType) => {
    try {
      const currentCandles = getItems();
      if (currentCandles) {
        const newCandles = [...currentCandles, value];
        localStorage.setItem(key, JSON.stringify(newCandles));
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getItems = (): ChosenCandleType[] | undefined => {
    try {
      const candles = localStorage.getItem(key);
      return candles ? JSON.parse(candles) : undefined;
    } catch (error) {
      console.log(error);
    }
  };
  return { addItem, getItems };
};
