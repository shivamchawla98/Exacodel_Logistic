import { createSlice } from "@reduxjs/toolkit";

interface SelectFormState {
    formName: string;
    signUpClicked: boolean;
    sendOtpClicked: boolean;
}

const initialState: SelectFormState = {
    formName: 'otp',
    signUpClicked: false,
    sendOtpClicked: false,
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
        updateSendOtpClicked: (state, action) => {
            state.sendOtpClicked = action.payload;
        },
    }
})


export const {updateFormName, updateSignUpclicked, updateSendOtpClicked} = selectFormSlice.actions;
export default selectFormSlice.reducer;