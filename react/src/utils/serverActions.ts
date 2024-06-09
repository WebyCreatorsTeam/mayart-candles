import axios from "axios";
import { defer } from "react-router-dom";
import { CandleType } from "./types/candles";
import { aboutLoaderResponse as AboutLoaderResponse } from "./types/about";

export const handleGetCandles = async () => {
  const { data } = await axios.get(
    `https://mayart-candles-api.vercel.app/candles/get-candles`,
  );
  const { continueWork, allCandles } = data;
  if (continueWork) return allCandles;
  if (!continueWork) return alert("הראה שגיאה, נסה שנית");
};
export const handleGetCandlesByType = async (type: string) => {
  const { data } = await axios.get(
    `https://mayart-candles-api.vercel.app/candles/get-candles`,
  );
  const { continueWork, allCandles } = data;
  if (continueWork)
    return allCandles.filter((candle: CandleType) => candle.type === type);
  if (!continueWork) return alert("הראה שגיאה, נסה שנית");
};

export const candlesLoader = async ({ params }: any) => {
  if (!params["type"]) return defer({ candles: await handleGetCandles() });
  const { type }: { type: string } = params;
  const candlesArray = await handleGetCandlesByType(type);
  return defer({
    type,
    candles: candlesArray,
  });
};

export const aboutLoader = async () => {
  const { data }: { data: AboutLoaderResponse } = await axios.get(
    `https://mayart-candles-api.vercel.app/about/get-about`,
  );
  const { continueWork, aboutText } = data;
  if (continueWork) return { aboutText };
  if (!continueWork) return alert("הראה שגיאה, נסה שנית");
};

// export const candleLoader = async ({ params }: any) => {
//   const { id } = params
//   return defer({
//     project: await getCandle(id)
//   })
// }

// const handleGetCandles = async () => {
//   const { data } = await axios.get(
//     `https://mayart-candles-api.vercel.app/candles/get-candle/${id}`,
//   );
//   const { continueWork, allCandles } = data;
//   if (continueWork) return allCandles;
//   if (!continueWork) return alert("הראה שגיאה, נסה שנית");
// };

export const candleCatagoriesLoader = async () => {
  const { data } = await axios.get(
    `https://mayart-candles-api.vercel.app/categories/get-categories`,
  );
  const { continueWork, categories } = data;
  if (continueWork) return { categories };
  if (!continueWork) return alert("הראה שגיאה, נסה שנית");
};
