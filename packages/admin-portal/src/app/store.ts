// store.js
import loginSlice from '@/features/login/login-slice'
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    loginSlice: loginSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; // Correct the casing to RootState

export default store;