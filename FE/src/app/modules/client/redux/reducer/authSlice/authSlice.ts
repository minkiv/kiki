import { createSlice } from "@reduxjs/toolkit";
export interface AuthType {
    isLogin: boolean
    isOpen: boolean
}
const initialState: AuthType = {
    isLogin: false,
    isOpen: false
} as any
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        checkLogin: (state) => {
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
        }
    },
})
export const { actions } = authSlice
export default authSlice.reducer