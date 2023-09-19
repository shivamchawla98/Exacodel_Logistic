// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/login/form-slice';
import starterSlice from '@/features/starter-form/starter-slice';
import vendorRegistrationSlice from '@/features/vendorRegForm/vendorReg-slice';
import selectFormReducer from '@/features/select-form/selectForm-slice';
import customerRegFormSlice from '@/features/customerRegForm/customerRegForm-slice';
import overseasRegSlice from '@/features/overseasRegForm/overseasReg-slice';
import userSlice from '@/features/user/user-slice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    starterSlice,
    vendorRegistration: vendorRegistrationSlice,
    // selectFormSlice,
    selectForm: selectFormReducer,
    customerReg: customerRegFormSlice,
    overseasReg: overseasRegSlice,
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; // Correct the casing to RootState

export default store;