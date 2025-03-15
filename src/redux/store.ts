import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './slices/modal/modalSlice';
import { portfolioApi } from './api/portfolio/portfolioApi';
import { portfolioReducer } from './slices/portfolio/portfolioSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    portfolio: portfolioReducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portfolioApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
