import { createSlice } from "@reduxjs/toolkit";
import { getAllOrder } from "./thunk/order.thunk";

const initialState = {
    orders: []
} as any
export const orrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllOrder.fulfilled, (state, action) => {
            state.orders = action.payload
        })
    }
})

export const { actions } = orrderSlice

export default orrderSlice.reducer