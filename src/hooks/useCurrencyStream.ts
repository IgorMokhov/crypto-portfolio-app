import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import { selectSavedCurrencies } from '../redux/slices/portfolio/portfolioSlice';
import { ICurrency, IStreamResponse } from '../types/currencies';

export const useCurrencyStream = () => {
  const [currenciesData, setCurrenciesData] = useState<Record<string, ICurrency> | null>(null);
  const selectedCurrencies = useAppSelector(selectSavedCurrencies);
  const symbols = selectedCurrencies.map((currency) => currency.symbol.toLowerCase());

  useEffect(() => {
    if (symbols.length === 0) return;

    const streamName = symbols.map((s) => `${s}@ticker`).join('/');
    const URL = `wss://stream.binance.com:9443/stream?streams=${streamName}`;
    const socket = new WebSocket(URL);

    socket.onmessage = (e) => {
      const { data }: IStreamResponse = JSON.parse(e.data);
      setCurrenciesData((prev) => ({
        ...prev,
        [data.s]: {
          symbol: data.s,
          price: +data.c,
          priceChange: +data.P,
          name: data.s.replace('USDT', ''),
          quantity: selectedCurrencies.find((currency) => currency.symbol === data.s)?.quantity,
        },
      }));
    };

    socket.onerror = (error) => console.error('WebSocket Error:', error);
    socket.onclose = () => console.log('WebSocket закрыт');

    return () => socket.close();
  }, [symbols]);

  return Object.values(currenciesData ?? []);
};
