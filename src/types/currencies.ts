export interface IBinanceCurrency {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
}

export interface ICurrency {
  symbol: string;
  name?: string;
  price: number;
  priceChange: number;
  quantity?: number;
}

export interface IStreamCurrency {
  s: string; // Symbol
  c: string; // Last price
  P: string; // Price change percent
}

export interface IStreamResponse {
  data: IStreamCurrency;
}
