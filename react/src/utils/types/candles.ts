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

export type CandleSizeT = "נרות קטנים" | "נרות גדולים" | "נרות בינוניים";

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
