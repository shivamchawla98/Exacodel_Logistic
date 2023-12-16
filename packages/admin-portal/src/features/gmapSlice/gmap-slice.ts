import { createSlice } from "@reduxjs/toolkit"

export interface GmapStates {
    pincode: string,
    address: string,
    city: string,
    country: string,
    State: string,
    lat: number,
    lng: number
}

const initialState: GmapStates = {
    pincode: "",
    address: "",
    city: "",
    country: "",
    State: "",
    lat: 0,
    lng: 0,
}

const gmapSlice = createSlice({
    name: "gmapSlice",
    initialState: initialState,
    reducers: {
        updatePincode: (state, action) => {
            state.pincode = action.payload;
        },
        updateAddress: (state, action) => {
            state.address = action.payload;
        },
        updateCity: (state, action) => {
            state.city = action.payload;
        },
        updateLat: (state, action) => {
            state.lat = action.payload;
        },
        updateLng: (state, action) => {
            state.lng = action.payload;
        },
        updateCountry: (state, action) => {
            state.country = action.payload;
        },
        updateState: (state, action) => {
            state.State = action.payload;
        }
    }
})

export const {updateAddress, updateCity, updateCountry, updateLat, updateState, updateLng, updatePincode} = gmapSlice.actions;
export default gmapSlice.reducer;