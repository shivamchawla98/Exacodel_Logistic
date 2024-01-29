import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UploadState {
  userImage: string;
  cert_of_registration: string;
  pancard_company: string;
  aadhaar_card: string;
  isoCertificate: string;
  pancard_auth: string;
  AEO_cert: string;
  IATA_cert: string;
  DUNS_cert: string;
  manufacturing_license: string;
  other_license: string;
}

const initialState: UploadState = {
  userImage: "",
  cert_of_registration: "",
  pancard_company: "",
  aadhaar_card: "",
  isoCertificate: "",
  pancard_auth: "",
  AEO_cert: "",
  IATA_cert: "",
  DUNS_cert: "",
  manufacturing_license: "",
  other_license: "",
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    updateUserImage: (state, action) => {
      state.userImage = action.payload;
    },
    update_cert_of_registration: (state, action) => {
      state.cert_of_registration = action.payload;
    },
    update_pancard_company: (state, action) => {
      state.pancard_company = action.payload;
    },
    update_aadhaar_card: (state, action) => {
      state.aadhaar_card = action.payload;
    },
    update_isoCertificate: (state, action) => {
      state.isoCertificate = action.payload;
    },
    update_pancard_auth: (state, action) => {
      state.pancard_auth = action.payload;
    },
    update_AEO_cert: (state, action) => {
      state.AEO_cert = action.payload;
    },
    update_IATA_cert: (state, action) => {
      state.IATA_cert = action.payload;
    },
    update_DUNS_cert: (state, action) => {
      state.DUNS_cert = action.payload;
    },
    update_manufacturing_license: (state, action) => {
      state.manufacturing_license = action.payload;
    },
    update_other_license: (state, action) => {
      state.other_license = action.payload;
    },
  },
});

export const {
  updateUserImage,
  update_cert_of_registration,
  update_DUNS_cert,
  update_IATA_cert,
  update_AEO_cert,
  update_pancard_auth,
  update_isoCertificate,
  update_aadhaar_card,
  update_pancard_company,
  update_manufacturing_license,
  update_other_license,
} = uploadSlice.actions;
export default uploadSlice.reducer;
