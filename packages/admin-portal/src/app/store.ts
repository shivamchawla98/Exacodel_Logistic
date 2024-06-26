// store.js
import gmapSlice from "@/features/gmapSlice/gmap-slice";
import loginSlice from "@/features/login/login-slice";
import uploadSlice from "@/features/uploads/upload-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
    gmapSlice: gmapSlice,
    uploadSlice: uploadSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; // Correct the casing to RootState

export default store;
