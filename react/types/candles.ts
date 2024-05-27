export type CandleType = {
  id: string;
  name: string;
  shape: string;
  colors: CandleColorT[];
  fragrances: CandleFragranceT[];
  price: number;
  salePrice: number;
  pictures: string[];
  description: string;
  size: CandleSizeT;
};
export type CandleFragranceT = "וניל" | "ורדים" | "לבנדר";
export type CandleSizeT = "קטן" | "גדול" | "קטנה";
export type CandleColorT = "ורוד" | "ירוק" | "לבן" | "שחור" | "כחול" | "גוף";
export const candles: CandleType[] = [
  {
    id: "1",
    name: "נר בועות",
    shape: "קוביה",
    colors: ["ורוד", "ירוק", "לבן", "שחור"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    salePrice: 20,
    pictures: [
      "https://res.cloudinary.com/etanheyman/image/upload/v1715534381/observer/j13mhtcuou7lijv064xx.png",
      "https://placehold.co/600x400/EEE/31343C",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
    size: "קטן",
  },
  {
    id: "2",
    name: "נר בועות",
    shape: "קוביה",
    colors: ["ורוד", "כחול", "לבן", "שחור", "ירוק", "גוף"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    salePrice: 20,
    pictures: [
      "https://res.cloudinary.com/etanheyman/image/upload/v1715534381/observer/j13mhtcuou7lijv064xx.png",
      "https://placehold.co/600x400/EEE/31343C",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
    size: "גדול",
  },
];
