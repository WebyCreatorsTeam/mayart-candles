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
export type CandleSizeT = "קטן" | "גדול" | "בינוני";
export type CandleColorT = "ורוד" | "ירוק" | "לבן" | "שחור" | "כחול" | "גוף";
export const candles: CandleType[] = [
  {
    id: "1",
    size: "גדול",
    name: "נר בועות",
    shape: "קוביה",
    colors: ["ורוד", "ירוק", "לבן", "שחור"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    salePrice: 20,
    pictures: [
      "https://s3-alpha-sig.figma.com/img/5a51/e2bd/2094f47f6e3728cfb6f736a243318fca?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsYStb9o7wZ0cFB-pIPU66i9x1aIClCWgNhSDHjOcdhQFIGrMaGlz~Ze8TSAp2nZbnC1DyVz6a~KRAkLIS4tlZ0-p4X06-0Z7IqEFV5iMRlqIAw9LFfOyIG4OSerBHm4s1i0F~iWDYocwE7K9xXnff5SHMkh7m5Iy8wQh5~QJ-pzUMKxEdWIrHGQvWfgy21rlk3zvZYYa7ZkaGcRMmt8SvNxK5kitS-sUnV3EUe6R64tJceG5x8U9Kh79YDYXXl52X9RKGxeQAOSFHR12n0j00Zf7MrD25hZ~WzqGZdqLUS9u7KkmUXOOIISpeeSWOSpFQFrbsP4PrBJts3zQXNU6A__",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
  },
  {
    id: "2",
    size: "בינוני",
    name: "נר בועות",
    shape: "קוביה",
    colors: ["ורוד", "ירוק", "לבן", "שחור"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    salePrice: 20,
    pictures: [
      "https://s3-alpha-sig.figma.com/img/5a51/e2bd/2094f47f6e3728cfb6f736a243318fca?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsYStb9o7wZ0cFB-pIPU66i9x1aIClCWgNhSDHjOcdhQFIGrMaGlz~Ze8TSAp2nZbnC1DyVz6a~KRAkLIS4tlZ0-p4X06-0Z7IqEFV5iMRlqIAw9LFfOyIG4OSerBHm4s1i0F~iWDYocwE7K9xXnff5SHMkh7m5Iy8wQh5~QJ-pzUMKxEdWIrHGQvWfgy21rlk3zvZYYa7ZkaGcRMmt8SvNxK5kitS-sUnV3EUe6R64tJceG5x8U9Kh79YDYXXl52X9RKGxeQAOSFHR12n0j00Zf7MrD25hZ~WzqGZdqLUS9u7KkmUXOOIISpeeSWOSpFQFrbsP4PrBJts3zQXNU6A__",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
  },
  {
    id: "3",
    size: "גדול",
    name: "נר בועות",
    shape: "קוביה",
    colors: ["ורוד", "ירוק", "לבן", "שחור"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    salePrice: 20,
    pictures: [
      "https://s3-alpha-sig.figma.com/img/5a51/e2bd/2094f47f6e3728cfb6f736a243318fca?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsYStb9o7wZ0cFB-pIPU66i9x1aIClCWgNhSDHjOcdhQFIGrMaGlz~Ze8TSAp2nZbnC1DyVz6a~KRAkLIS4tlZ0-p4X06-0Z7IqEFV5iMRlqIAw9LFfOyIG4OSerBHm4s1i0F~iWDYocwE7K9xXnff5SHMkh7m5Iy8wQh5~QJ-pzUMKxEdWIrHGQvWfgy21rlk3zvZYYa7ZkaGcRMmt8SvNxK5kitS-sUnV3EUe6R64tJceG5x8U9Kh79YDYXXl52X9RKGxeQAOSFHR12n0j00Zf7MrD25hZ~WzqGZdqLUS9u7KkmUXOOIISpeeSWOSpFQFrbsP4PrBJts3zQXNU6A__",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
  },
  {
    id: "4",
    size: "בינוני",
    name: "נר בועות",
    shape: "קוביה",
    colors: ["ורוד", "ירוק", "לבן", "שחור"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    salePrice: 20,
    pictures: [
      "https://s3-alpha-sig.figma.com/img/5a51/e2bd/2094f47f6e3728cfb6f736a243318fca?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsYStb9o7wZ0cFB-pIPU66i9x1aIClCWgNhSDHjOcdhQFIGrMaGlz~Ze8TSAp2nZbnC1DyVz6a~KRAkLIS4tlZ0-p4X06-0Z7IqEFV5iMRlqIAw9LFfOyIG4OSerBHm4s1i0F~iWDYocwE7K9xXnff5SHMkh7m5Iy8wQh5~QJ-pzUMKxEdWIrHGQvWfgy21rlk3zvZYYa7ZkaGcRMmt8SvNxK5kitS-sUnV3EUe6R64tJceG5x8U9Kh79YDYXXl52X9RKGxeQAOSFHR12n0j00Zf7MrD25hZ~WzqGZdqLUS9u7KkmUXOOIISpeeSWOSpFQFrbsP4PrBJts3zQXNU6A__",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
  },
  {
    id: "4",
    size: "קטן",
    name: "נר בועות",
    shape: "קוביה",
    colors: ["ורוד", "ירוק", "לבן", "שחור"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    salePrice: 20,
    pictures: [
      "https://s3-alpha-sig.figma.com/img/5a51/e2bd/2094f47f6e3728cfb6f736a243318fca?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsYStb9o7wZ0cFB-pIPU66i9x1aIClCWgNhSDHjOcdhQFIGrMaGlz~Ze8TSAp2nZbnC1DyVz6a~KRAkLIS4tlZ0-p4X06-0Z7IqEFV5iMRlqIAw9LFfOyIG4OSerBHm4s1i0F~iWDYocwE7K9xXnff5SHMkh7m5Iy8wQh5~QJ-pzUMKxEdWIrHGQvWfgy21rlk3zvZYYa7ZkaGcRMmt8SvNxK5kitS-sUnV3EUe6R64tJceG5x8U9Kh79YDYXXl52X9RKGxeQAOSFHR12n0j00Zf7MrD25hZ~WzqGZdqLUS9u7KkmUXOOIISpeeSWOSpFQFrbsP4PrBJts3zQXNU6A__",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
  },
  {
    id: "5",
    size: "גדול",
    name: "נר בועות",
    shape: "קוביה",
    colors: ["ורוד", "ירוק", "לבן", "שחור"],
    fragrances: ["וניל", "ורדים", "לבנדר"],
    price: 40,
    salePrice: 20,
    pictures: [
      "https://s3-alpha-sig.figma.com/img/5a51/e2bd/2094f47f6e3728cfb6f736a243318fca?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsYStb9o7wZ0cFB-pIPU66i9x1aIClCWgNhSDHjOcdhQFIGrMaGlz~Ze8TSAp2nZbnC1DyVz6a~KRAkLIS4tlZ0-p4X06-0Z7IqEFV5iMRlqIAw9LFfOyIG4OSerBHm4s1i0F~iWDYocwE7K9xXnff5SHMkh7m5Iy8wQh5~QJ-pzUMKxEdWIrHGQvWfgy21rlk3zvZYYa7ZkaGcRMmt8SvNxK5kitS-sUnV3EUe6R64tJceG5x8U9Kh79YDYXXl52X9RKGxeQAOSFHR12n0j00Zf7MrD25hZ~WzqGZdqLUS9u7KkmUXOOIISpeeSWOSpFQFrbsP4PrBJts3zQXNU6A__",
    ],
    description: "נר בועות גודל xxxxxx מיוצר משעוות יד טבעית עבודת יד",
  },
];
