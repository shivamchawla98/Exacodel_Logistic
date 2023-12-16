// store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/login/form-slice";
import starterSlice from "@/features/starter-form/starter-slice";
import vendorRegistrationSlice from "@/features/vendorRegForm/vendorReg-slice";
import selectFormReducer from "@/features/select-form/selectForm-slice";
import customerRegFormSlice from "@/features/customerRegForm/customerRegForm-slice";
import overseasRegSlice from "@/features/overseasRegForm/overseasReg-slice";
import userSlice from "@/features/user/user-slice";
import registrationConfSlice from "@/features/registrationConf/registrationConf-slice";
import uploadSlice from "@/features/uploads/upload-slice";
import warehouseSlice from "@/features/warehouse/warehouse-slice";

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
    registerConfSlice: registrationConfSlice,
    uploadSlice: uploadSlice,
    warehouseSlice: warehouseSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; // Correct the casing to RootState

export default store;
