import { CandleType, ChosenCandleType } from "./types/candles";

export const useLocalCandleStorage = (key: string) => {
  const setItem = (value: ChosenCandleType) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
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
  return { setItem, getItems };
};
