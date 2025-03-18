import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrency } from '../../../types/currencies';
import { RootState } from '../../store';

interface IPortfolioState {
  availableCurrencies: ICurrency[] | null;
  selectedCurrencies: ICurrency[];
}

const initialState: IPortfolioState = {
  availableCurrencies: null,
  selectedCurrencies: [],
};

export const PortfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setAvailableCurrencies: (state, action: PayloadAction<ICurrency[]>) => {
      state.availableCurrencies = action.payload;
    },
    addSelectedCurrency: (state, action: PayloadAction<ICurrency>) => {
      const existingCurrency = state.selectedCurrencies.find(
        (currency) => currency.symbol === action.payload.symbol
      );
      if (existingCurrency) {
        existingCurrency.quantity =
          (existingCurrency.quantity || 0) + (action.payload.quantity || 0);
      } else {
        state.selectedCurrencies.push(action.payload);
      }
    },
    removeSelectedCurrency: (state, action: PayloadAction<string>) => {
      state.selectedCurrencies = state.selectedCurrencies.filter(
        (currency) => currency.name !== action.payload
      );
    },
  },
});

export const { setAvailableCurrencies, addSelectedCurrency, removeSelectedCurrency } =
  PortfolioSlice.actions;
export const portfolioReducer = PortfolioSlice.reducer;
export const selectAvailableCurrencies = (state: RootState) => state.portfolio.availableCurrencies;
export const selectSavedCurrencies = (state: RootState) => state.portfolio.selectedCurrencies;
