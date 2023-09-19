import { createSlice } from "@reduxjs/toolkit";

interface SelectFormState {
    formName: string;
    signUpClicked: boolean;
}

const initialState: SelectFormState = {
    formName: 'starterForm',
    signUpClicked: false,
}


export const selectFormSlice = createSlice({
    name: 'whichForm',
    initialState,
    reducers: {
        updateFormName: (state, action) => {
            state.formName = action.payload;
        },
        updateSignUpclicked: (state, action) => {
            state.signUpClicked = action.payload;
        },
    }
})


export const {updateFormName, updateSignUpclicked} = selectFormSlice.actions;
export default selectFormSlice.reducer;