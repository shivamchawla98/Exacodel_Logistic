import { createSlice } from "@reduxjs/toolkit";

interface StarterForm {
  identification: string;
  userType: string;
  country: string;
  gstNumber: string;
  companyName: string;
}

const initialState: StarterForm = {
  identification: "CUSTOMER",
  userType: "",
  country: "",
  gstNumber: "",
  companyName: "",
};

const starterFormSlice = createSlice({
  name: "starterForm",
  initialState,
  reducers: {
    updateUserType: (state, action) => {
      state.userType = action.payload;
    },
    updateIdentification: (state, action) => {
      state.identification = action.payload;
    },
    updateCountry: (state, action) => {
      state.country = action.payload;
    },
    updateGstNumber: (state, action) => {
      state.gstNumber = action.payload;
    },
    updateCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    resetForm: (state) => {
      state.identification='';
      state.userType = "";
      state.country = "";
      state.gstNumber = "";
      state.companyName = "";
    },
  },
});

export const {
  updateIdentification,
  updateUserType,
  updateCountry,
  updateGstNumber,
  updateCompanyName,
  resetForm,
} = starterFormSlice.actions;
export default starterFormSlice.reducer;
