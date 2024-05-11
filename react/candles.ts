import { uuid } from "uuidv4";
export type CandleType = {
  id: string;
  name: string;
  shape: string;
  colors: string[];
  fragrances: string[];
  price: number;
  salePrice: number;
  pictures: string[];
  description: string;
};

export const candles: CandleType[] = [
  {
    id: uuid(),
    name: "נר בועות",
    shape: "קוביה",
    colors: ["ורוד", "ירוק", "לבן", "שחור"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    salePrice: 20,
    pictures: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2Fsphere-candles%2Fs%3Fk%3Dsphere%2Bcandles&psig=AOvVaw22cjAD8ii66eMog3FxDHyc&ust=1715549848076000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiqnKzHhoYDFQAAAAAdAAAAABAE",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2Fsphere-candles%2Fs%3Fk%3Dsphere%2Bcandles&psig=AOvVaw22cjAD8ii66eMog3FxDHyc&ust=1715549848076000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiqnKzHhoYDFQAAAAAdAAAAABAE",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
  },
];
