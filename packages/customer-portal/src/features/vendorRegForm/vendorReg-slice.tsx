// vendorRegistrationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VendorRegistrationState {
  companyBillingCode: string;
  userType: string;
  company: string;
  companyRegistrationNumber: String;
  industryType: string;
  country: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
  panNumber: string;
  gst: string;
  firstName: string;
  lastName: string;
  designation: string;
  phnNumber: string;
  email: string;
  website: string;
  checkBox: boolean;
}

const initialState: VendorRegistrationState = {
  companyBillingCode: '',
  userType: '',
  company: '',
  companyRegistrationNumber: '',
  industryType: '',
  country: '',
  streetAddress: '',
  city: '',
  region: '',
  postalCode: '',
  panNumber: '',
  gst: '',
  firstName: '',
  lastName: '',
  designation: '',
  phnNumber: '',
  email: '',
  website: '',
  checkBox: false,
};

const vendorRegistrationSlice = createSlice({
  name: 'vendorRegistration',
  initialState,
  reducers: {
    updateCompanyBillingCode: (state, action: PayloadAction<string>) => {
        state.companyBillingCode = action.payload;
      },
      updateUserType: (state, action: PayloadAction<string>) => {
        state.userType = action.payload;
      },
      updateCompany: (state, action: PayloadAction<string>) => {
        state.company = action.payload;
      },
      updateIndustryType: (state, action: PayloadAction<string>) => {
        state.industryType = action.payload;
      },
      updateCountry: (state, action: PayloadAction<string>) => {
        state.country = action.payload;
      },
      updateStreetAddress: (state, action: PayloadAction<string>) => {
        state.streetAddress = action.payload;
      },
      updateCity: (state, action: PayloadAction<string>) => {
        state.city = action.payload;
      },
      updateRegion: (state, action: PayloadAction<string>) => {
        state.region = action.payload;
      },
      updatePostalCode: (state, action: PayloadAction<string>) => {
        state.postalCode = action.payload;
      },
      updatePanNumber: (state, action: PayloadAction<string>) => {
        state.panNumber = action.payload;
      },
      updateGST: (state, action: PayloadAction<string>) => {
        state.gst = action.payload;
      },
      updateFirstName: (state, action: PayloadAction<string>) => {
        state.firstName = action.payload;
      },
      updateLastName: (state, action: PayloadAction<string>) => {
        state.lastName = action.payload;
      },
      updateDesignation: (state, action: PayloadAction<string>) => {
        state.designation = action.payload;
      },
      updatePhoneNumber: (state, action: PayloadAction<string>) => {
        state.phnNumber = action.payload;
      },
      updateEmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
      },
      updateWebsite: (state, action: PayloadAction<string>) => {
        state.website = action.payload;
      },
      updateCheckBox: (state, action: PayloadAction<boolean>) => {
        state.checkBox = action.payload;
      },
      updateCompanyRegistrationNumber: (state, action: PayloadAction<string>) => {
        state.companyRegistrationNumber = action.payload;
      },
  },

});

export const {
    updateCompanyBillingCode,
    updateUserType,
    updateCompany,
    updateIndustryType,
    updateCountry,
    updateStreetAddress,
    updateCity,
    updateRegion,
    updatePostalCode,
    updatePanNumber,
    updateGST,
    updateFirstName,
    updateLastName,
    updateDesignation,
    updatePhoneNumber,
    updateEmail,
    updateWebsite,
    updateCheckBox,
    updateCompanyRegistrationNumber,
} = vendorRegistrationSlice.actions;

export default vendorRegistrationSlice.reducer;
