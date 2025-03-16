import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrency } from '../../../types/currencies';
import { RootState } from '../../store';

interface IPortfolioState {
  availableCurrencies: ICurrency[] | null;
  selectedCurrencies: ICurrency[] | [];
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
      state.selectedCurrencies = [...state.selectedCurrencies, action.payload];
    },
  },
});

export const { setAvailableCurrencies, addSelectedCurrency } = PortfolioSlice.actions;
export const portfolioReducer = PortfolioSlice.reducer;
export const selectAvailableCurrencies = (state: RootState) => state.portfolio.availableCurrencies;
export const selectSavedCurrencies = (state: RootState) => state.portfolio.selectedCurrencies
