import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  email: string;
  password: string;
}

const initialState: FormState = {
  email: "",
  password: "",
};

const formSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    resetForm: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { updateEmail, updatePassword, resetForm } = formSlice.actions;
export default formSlice.reducer;
