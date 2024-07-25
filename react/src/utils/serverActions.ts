import axios from "axios";
import { defer } from "react-router-dom";
import {
  CandleType,
  ChosenCandleType,
  CheckoutInfoAndArrayType,
  SentCandleType,
} from "./types/candles";
import { AboutLoaderResponse } from "./types/about";

export const handleGetCandles = async () => {
  const { data } = await axios.get(
    `https://mayart-candles-api.vercel.app/candles/get-candles`,
  );
  const { continueWork, allCandles } = data;
  if (continueWork) return allCandles;
  if (!continueWork) return alert("הראה שגיאה, נסה שנית");
};
export const handleGetCandlesByType = async (type: string) => {
  try {
    const { data } = await axios.post(
      `https://mayart-candles-api.vercel.app/candles/get-candles-by-category`,
      {
        categoryType: type,
      },
    );
    const { continueWork, categoryCandles } = data;
    if (continueWork) return categoryCandles;
    if (!continueWork) return alert("הראה שגיאה, נסה שנית");
  } catch (error) {
    console.log(error);
  }
};
export const handleGetCandlesBySize = async (size: string) => {
  try {
    const { data } = await axios.post(
      `https://mayart-candles-api.vercel.app/candles/get-candles-by-category`,
      {
        categoryType: size,
      },
    );
    const { continueWork, categoryCandles } = data;
    if (continueWork) return categoryCandles;
    if (!continueWork) return alert("הראה שגיאה, נסה שנית");
  } catch (error) {
    console.log(error);
  }
};
export const handleGetCandleById = async (id: string) => {
  const { data } = await axios.post(
    `https://mayart-candles-api.vercel.app/candles/get-one-candle`,
    {
      id,
    },
  );
  const {
    continueWork,
    candle,
  }: { continueWork: boolean; candle: CandleType } = data;
  if (continueWork) {
    return candle;
  }
  if (!continueWork) return alert("הראה שגיאה, נסה שנית");
};
export const candlesLoader = async () => {
  return defer({ candles: await handleGetCandles() });
};
export const candlesLoaderByType = async ({ params }: any) => {
  const { type } = params;
  if (type !== undefined)
    return defer({
      type: type,
      candles: await handleGetCandlesByType(type),
    });
};
export const candlesLoaderBySize = async ({ params }: any) => {
  const { size } = params;
  if (size !== undefined)
    return defer({
      size: size,
      candles: await handleGetCandlesBySize(size),
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

export const candleLoader = async ({ params }: any) => {
  const { id } = params;
  return defer({
    candle: await handleGetCandleById(id),
  });
};

// const handleGetCandles = async () => {
//   const { data } = await axios.get(
//     `https://mayart-candles-api.vercel.app/candles/get-candle/${id}`,
//   );
//   const { continueWork, allCandles } = data;
//   if (continueWork) return allCandles;
//   if (!continueWork) return alert("הראה שגיאה, נסה שנית");
// };

export const candleCategoriesLoader = async () => {
  const { data } = await axios.get(
    `https://mayart-candles-api.vercel.app/categories/get-categories`,
  );
  const { continueWork, categories } = data;
  if (continueWork) return { categories };
  if (!continueWork) return alert("הראה שגיאה, נסה שנית");
};
export const checkoutPageInfoLoader = async (): Promise<{
  paymentText: { _id: string; text: string };
} | void> => {
  const { data } = await axios.get(
    `https://mayart-candles-api.vercel.app/payment/get-payment`,
  );
  const {
    continueWork,
    paymentText,
  }: { continueWork: boolean; paymentText: { _id: string; text: string } } =
    data;
  if (continueWork) return { paymentText };
  if (!continueWork) return alert("הראה שגיאה, נסה שנית");
};
export const checkout = async ({ request }: any) => {
  const formData = await request.formData();

  const checkoutInfo = {
    fullName: formData.get("fullName"),
    telPhone: formData.get("telPhone"),
    candlesArrayTrue: formData.get("candlesArrayTrue"),
  };
  const candles = localStorage.getItem("shoppingCartCandles");
  const candlesArray = JSON.parse(candles as string) as ChosenCandleType[];
  const sentCandlesArray: SentCandleType[] = candlesArray.map((candle) => {
    let price = candle.price;
    if (candle.salePrice && candle.salePrice < candle.price)
      price = candle.salePrice;
    return {
      _id: candle._id,
      name: candle.name,
      quantity: candle.quantity,
      price: price,
      color: candle.colors.color,
      fragrance: candle.fragrances,
      description: candle.description,
    };
  });
  if (checkoutInfo.candlesArrayTrue === false)
    return alert("הראה שגיאה, נסה שנית");
  const checkoutInfoAndArray: CheckoutInfoAndArrayType = {
    name: checkoutInfo.fullName,
    telNumber: checkoutInfo.telPhone,
    candles: sentCandlesArray,
  };
  const { data } = await axios.post(
    // `https://mayart-candles-api.vercel.app/orders/send-order`,
    `http://localhost:7575/orders/send-order`,
    checkoutInfoAndArray,
  );
  const { continueWork, message } = data;

  if (continueWork) return { message };
  if (!continueWork) throw new Error(message);
};
