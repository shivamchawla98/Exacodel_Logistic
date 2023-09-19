import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface UserSlice {
    email: string;
    password: string;
}

const initialState: UserSlice = {
    email: '',
    password: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        updateEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        updatePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    }
})


export const {updateEmail, updatePassword} = userSlice.actions;

export default userSlice.reducer;