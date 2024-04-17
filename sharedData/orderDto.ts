export type OrderDto = {
  phoneNo: string;
  customerName: string;
  address: string;
  candleItems: CandleItem[];
};

type CandleItem = {
  candleName: string;
  quantity: number;
  price: number;
};
