export type CandleType = {
  _id: string;
  name: string;
  shape: string;
  colors: CandleColorT[];
  fragrances: CandleFragranceT[];
  price: number;
  salePrice?: number;
  pictures: string[];
  description: string;
  size: CandleSizeT;
  type: string;
  __v: number;
};
export type candleCategoryType = {
  _id: string;
  __v: number;
  opt: string;
};
export type CandleFragranceT = "וניל" | "ורדים" | "לבנדר";
export type CandleSizeT = "קטן" | "גדול" | "בינוני";
export type CandleColorT = "ורוד" | "ירוק" | "לבן" | "שחור" | "כחול" | "גוף";
export const candles: CandleType[] = [
  {
    _id: "665793e3d8a768380bacc8d1",
    name: "נר בועות",
    shape: "קוביה",
    colors: ["שחור", "לבן", "ירוק", "ורוד"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    salePrice: 20,
    pictures: [
      "https://res.cloudinary.com/divgmprsc/image/upload/f_auto,q_auto/v1/mayart/dppriqhsjaxqoxysc2n4",
      "https://res.cloudinary.com/divgmprsc/image/upload/f_auto,q_auto/v1/mayart/aesxmhojjejy5ncjg5cy",
      "https://res.cloudinary.com/divgmprsc/image/upload/f_auto,q_auto/v1/mayart/x1fmvjmhogbqlx3ph4ap",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
    type: "נרות הכלי",
    size: "בינוני",
    __v: 0,
  },
  {
    _id: "66579403d8a768380bacc8d3",
    name: "נר ואטאוור",
    shape: "עגול",
    colors: ["שחור", "לבן", "ירוק", "ורוד"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    pictures: [
      "https://res.cloudinary.com/divgmprsc/image/upload/f_auto,q_auto/v1/mayart/aesxmhojjejy5ncjg5cy",
      "https://res.cloudinary.com/divgmprsc/image/upload/f_auto,q_auto/v1/mayart/aesxmhojjejy5ncjg5cy",
      "https://res.cloudinary.com/divgmprsc/image/upload/f_auto,q_auto/v1/mayart/x1fmvjmhogbqlx3ph4ap",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
    type: "נרות בכלי",
    size: "קטן",
    __v: 0,
  },
  {
    _id: "66579447d8a768380bacc8d5",
    name: "נר יפה",
    shape: "חמשוש",
    colors: ["שחור", "לבן", "ירוק", "ורוד"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 55,
    salePrice: 33,
    pictures: [
      "https://res.cloudinary.com/divgmprsc/image/upload/f_auto,q_auto/v1/mayart/x1fmvjmhogbqlx3ph4ap",
      "https://res.cloudinary.com/divgmprsc/image/upload/f_auto,q_auto/v1/mayart/dppriqhsjaxqoxysc2n4",
      "https://res.cloudinary.com/divgmprsc/image/upload/f_auto,q_auto/v1/mayart/aesxmhojjejy5ncjg5cy",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
    type: "נרות מעוצבים",
    size: "גדול",
    __v: 0,
  },
];

export interface ICandles {
  name: string;
  shape: string;
  colors: [string];
  fragrances: [string];
  price: number;
  salePrice: number;
  pictures: [string];
  description: string;
  type: string;
  size: string;
  _id: string;
}
