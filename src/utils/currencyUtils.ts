import { IBinanceCurrency, ICurrency } from '../types/currencies';

export const transformAvailableCurrencies = (currencies: IBinanceCurrency[]): ICurrency[] => {
  return currencies
    .filter(({ symbol, lastPrice }) => symbol.endsWith('USDT') && +lastPrice > 0)
    .map(({ symbol, lastPrice, priceChangePercent }) => ({
      symbol: symbol,
      name: symbol.replace('USDT', ''),
      price: parseFloat(lastPrice),
      priceChange: parseFloat(priceChangePercent),
    }));
};

export const filterCurrenciesByName = (
  search: string,
  currencies: ICurrency[] | null
): ICurrency[] | [] => {
  if (!currencies) return [];
  if (!search.trim()) return currencies;

  return currencies.filter(({ name }) => name.toLowerCase().includes(search.trim().toLowerCase()));
};
