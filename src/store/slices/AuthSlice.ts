import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        profile: null,
    },
    reducers: {
        isLogin: state => {
            state.isLoggedIn = true;
        },
        logout: state => {
            state.isLoggedIn = false;
        },
    },
});

export const { isLogin, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
