import { createSlice } from "@reduxjs/toolkit";
export interface AuthType {
    isLogin: boolean
    redirectLink: string
    accessTokenRedux: string
}
const initialState: AuthType = {
    isLogin: false,
    redirectLink: '',
    accessTokenRedux: ''
} as any
const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        checkLoginLink: (state, action) => {
            state.redirectLink = action.payload
            if (!localStorage.getItem('accessToken')) {
                state.isLogin = false
            }
            else {
                state.isLogin = true
            }
        },
        setToken: (state, action) => {
            state.accessTokenRedux = action.payload
        }
    },
})
export const { actions } = authSlice
export default authSlice.reducer