import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface loginState {

    email: string,
    firstName: string,
    lastName: string,
    isLogedIn: boolean,
    userId: number
}

const initialState: loginState = {
    email: "",
    firstName: "",
    lastName: "",
    isLogedIn: false,
    userId: -1,
}


const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updateFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        updateLastName: (state, action) => {
            state.lastName = action.payload;
        },
        updateIsLoggedIn: (state, action) => {
            state.isLogedIn = action.payload;
        },
        updateUserId: (state, action) => {
            state.userId = action.payload;
        }
    }
})

export const {updateEmail, updateFirstName, updateLastName, updateIsLoggedIn, updateUserId} = loginSlice.actions;

export default loginSlice.reducer;