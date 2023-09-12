import { createSlice } from "@reduxjs/toolkit";
export interface AuthType {
    isLogin: boolean
    isOpen: boolean
    redirectLink: string
    accessTokenRedux: string
}
const initialState: AuthType = {
    isLogin: false,
    isOpen: false,
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
                state.isOpen = true
            }
            else {
                state.isLogin = true
                state.isOpen = false
            }
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        setToken: (state, action) => {
            state.accessTokenRedux = action.payload
        }
    },
})
export const { actions } = authSlice
export default authSlice.reducer