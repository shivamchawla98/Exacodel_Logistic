import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface UserSlice {
    email: string;
    password: string;
    userId: number;
}

const initialState: UserSlice = {
    email: '',
    password: '',
    userId: 1234,
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
        },
        updateUserId: (state, action: PayloadAction<number>) => {
            state.userId = action.payload;
        }
    }
})


export const {updateEmail, updatePassword, updateUserId} = userSlice.actions;

export default userSlice.reducer;