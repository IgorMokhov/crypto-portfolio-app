import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrency } from '../../../types/currencies';
import { RootState } from '../../store';

interface IPortfolioState {
  availableCurrencies: ICurrency[] | null;
}

const initialState: IPortfolioState = {
  availableCurrencies: null,
};

export const PortfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setAvailableCurrencies: (state, action: PayloadAction<ICurrency[]>) => {
      state.availableCurrencies = action.payload;
    },
  },
});

export const { setAvailableCurrencies } = PortfolioSlice.actions;
export const portfolioReducer = PortfolioSlice.reducer;
export const selectCurrencies = (state: RootState) =>
  state.portfolio.availableCurrencies;
