import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        // no user saved!!!
        user: undefined,
        token: undefined,
        refreshToken: undefined
    },
    reducers: {
       addUser: (state, action) => {
            state.user = action.payload
       },
       addToken: (state, action) => {
            state.token = action.payload;
       },
       addRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
       }
}});        

export const { addUser, addToken, addRefreshToken } = LoginSlice.actions;
export default LoginSlice.reducer;
