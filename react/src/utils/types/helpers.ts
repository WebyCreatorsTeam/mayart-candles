import { CandleType } from "./candles";

export const returnCurrentPrice = (candle: CandleType) =>
  candle.salePrice ? candle.salePrice : candle.price;
