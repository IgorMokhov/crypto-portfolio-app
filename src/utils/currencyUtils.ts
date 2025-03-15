import { IBinanceCurrency, ICurrency } from '../types/currencies';

export const transformAvailableCurrencies = (
  currencies: IBinanceCurrency[]
): ICurrency[] => {
  return currencies
    .filter((currency) => currency.symbol.endsWith('USDT'))
    .map((filteredCurrency) => ({
      symbol: filteredCurrency.symbol,
      name: filteredCurrency.symbol.replace('USDT', ''),
      price: +filteredCurrency.lastPrice,
      priceChange: +filteredCurrency.priceChangePercent,
    }));
};
