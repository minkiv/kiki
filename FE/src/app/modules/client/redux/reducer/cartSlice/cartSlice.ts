import { createSlice } from "@reduxjs/toolkit";
import { getAllCart } from "./thunk/cart.thunk";
const initialState = {
    carts: []
} as any
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCart.fulfilled, (state, action) => {
            state.carts = action.payload.carts
        })
    }
})

export const { actions } = cartSlice

export default cartSlice.reducer