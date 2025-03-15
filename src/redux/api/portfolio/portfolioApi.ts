import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBinanceCurrency } from '../../../types/currencies';

const BASE_URL = 'https://api.binance.com/api/v3';

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAvailableCurrencies: builder.query<IBinanceCurrency[], void>({
      query: () => '/ticker/24hr',
    }),
  }),
});

export const { useGetAvailableCurrenciesQuery } = portfolioApi;
