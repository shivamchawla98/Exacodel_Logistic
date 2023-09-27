import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  email: string;
  password: string;
  isLogedIn: boolean;
}

const initialState: FormState = {
  email: "",
  password: "",
  isLogedIn: false,
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
    updateIsLogedIn: (state, action) => {
      state.isLogedIn = action.payload;
    },
    resetForm: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { updateEmail, updatePassword, updateIsLogedIn, resetForm } = formSlice.actions;
export default formSlice.reducer;
