import { configureStore } from '@reduxjs/toolkit';
import lottoSlice from './slices/lottoSlice';

export const store = configureStore({ reducer: { lotto: lottoSlice } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
