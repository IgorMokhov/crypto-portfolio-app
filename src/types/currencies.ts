export interface IBinanceCurrency {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
}

export interface ICurrency {
  symbol: string;
  name: string;
  price: number;
  priceChange: number;
}
