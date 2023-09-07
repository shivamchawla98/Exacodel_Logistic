// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/login/form-slice';
import starterSlice from '@/features/starter-form/starter-slice';
import vendorRegistrationSlice from '@/features/vendorRegForm/vendorReg-slice';
import selectFormReducer from '@/features/select-form/selectForm-slice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    starterSlice,
    vendorRegistration: vendorRegistrationSlice,
    // selectFormSlice,
    selectForm: selectFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; // Correct the casing to RootState

export default store;