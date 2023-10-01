import { createSlice } from "@reduxjs/toolkit";
export interface AuthType {
    isLogin: boolean
}
const initialState: AuthType = {
    isLogin: false
}
const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
    },
})
export const { actions } = authSlice
export default authSlice.reducer