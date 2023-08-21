import { createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "./thunk/product.thunk";

const initialState = {
    products: []
} as any
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.fulfilled, (state: any, action) => {
            state.products = action.payload
        })
    }
})
export const { actions } = productSlice
export default productSlice.reducer