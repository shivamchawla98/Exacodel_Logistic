import { createSlice } from "@reduxjs/toolkit";

interface RegistrationConf {
    registerButtonClicked: boolean;
}

const initialState:  RegistrationConf = {
    registerButtonClicked: false,
}


export const registrationConf = createSlice({
    name: 'whichForm',
    initialState,
    reducers: {
        updatesRegisterButtonClicked: (state, action) => {
            state.registerButtonClicked = action.payload;
        },
    }
})


export const {updatesRegisterButtonClicked} = registrationConf.actions;
export default registrationConf.reducer;