export type ChosenCandleType = Omit<CandleType, "colors" | "fragrances"> & {
  colors: CandleColorT;
  fragrances: string;
  quantity: number;
};
export type SentCandleType = {
  _id: string;
  name: string;
  color: string;
  fragrance: string;
  description: string;
  quantity: number;
  price: number;
};

export type CandleType = {
  _id: string;
  name: string;
  shape: string;
  colors: CandleColorT[];
  fragrances: string[];
  price: number;
  salePrice: number | null;
  pictures: CandlePictureT[];
  description: string;
  type: string;
  size: CandleSizeT;
  __v: number;
};

export type CandlePictureT = {
  img: string;
  _id: string;
};

export type CandleSizeT =
  | "נרות קטנים"
  | "נרות נרות גדוליםים"
  | "נרות נרות בינונייםים";

export type CandleColorT = {
  color: string;
  hexCode: string;
  _id: string;
};
export interface ICandles {
  name: string;
  shape: string;
  colors: { color: string; hexCode: string; _id: string }[];
  fragrances: string[];
  price: number;
  salePrice: number;
  pictures: string[];
  description: string;
  type: string;
  size: string;
  _id: string;
}

export type CheckoutInfoType = {
  name: string;
  telNumber: string;
  email: string;
};
export type CheckoutInfoAndArrayType = CheckoutInfoType & {
  candles: SentCandleType[];
};
