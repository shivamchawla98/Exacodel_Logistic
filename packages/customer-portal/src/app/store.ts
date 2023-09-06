// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/login/form-slice';
import starterSlice from '@/features/starter-form/starter-slice';
import vendorRegistrationSlice from '@/features/vendorRegForm/vendorReg-slice';
import selectFormSlice from '@/features/which-form/selectForm-slice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    starterSlice,
    vendorRegistration: vendorRegistrationSlice,
    selectForm: selectFormSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; // Correct the casing to RootState

export default store;