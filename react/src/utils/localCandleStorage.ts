import { CandleType } from "./types/candles";

export const useLocalCandleStorage = (key: string) => {
  const setItem = (value: CandleType) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  const getItems = (): CandleType[] | undefined => {
    try {
      const candles = localStorage.getItem(key);
      return candles ? JSON.parse(candles) : undefined;
    } catch (error) {
      console.log(error);
    }
  };
  return { setItem, getItems };
};
