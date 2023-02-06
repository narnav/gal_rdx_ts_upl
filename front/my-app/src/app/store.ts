import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import galReducer from '../features/gal/galSlice';

export const store = configureStore({
  reducer: {
    gal:galReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
