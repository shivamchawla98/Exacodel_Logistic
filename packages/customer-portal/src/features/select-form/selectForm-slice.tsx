import { createSlice } from "@reduxjs/toolkit";

interface SelectFormState {
    formName: string;
}

const initialState: SelectFormState = {
    formName: 'starterForm',
}


export const selectFormSlice = createSlice({
    name: 'whichForm',
    initialState,
    reducers: {
        updateFormName: (state, action) => {
            state.formName = action.payload;
        },
    }
})


export const {updateFormName} = selectFormSlice.actions;
export default selectFormSlice.reducer;