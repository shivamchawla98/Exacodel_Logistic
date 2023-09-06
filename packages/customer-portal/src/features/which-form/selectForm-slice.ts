import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectFormState {
    formName: string;
}

const initialState: SelectFormState = {
    formName: "starterForm",
}

const SelectFormSlice = createSlice({
  name: "selectForm",
  initialState,
  reducers: {
    updateFormName: (state, action) => {
      state.formName = action.payload;
    },

  },
});


export const {updateFormName} = SelectFormSlice.actions;

export default SelectFormSlice.reducer;