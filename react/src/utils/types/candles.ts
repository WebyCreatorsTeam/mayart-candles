export type CandleType = {
  _id: string;
  name: string;
  shape: string;
  colors: CandleColorT[];
  fragrances: string[];
  price: number;
  salePrice: number | null;
  pictures: string[];
  description: string;
  type: string;
  size: CandleSizeT;
  __v: number;
};

export type CandleSizeT = "נרות קטנים" | "נרות גדולים" | "נרות בינוניים";
export type CandleColorNamesT =
  | "ורוד"
  | "ירוק"
  | "לבן"
  | "שחור"
  | "כחול"
  | "גוף";
export type CandleColorT = {
  color: CandleColorNamesT;
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
