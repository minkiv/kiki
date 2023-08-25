import { createSlice } from "@reduxjs/toolkit";
import { getAllCart } from "./thunk/cart.thunk";
const initialState = {
    carts: []
} as any
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const productPayload = action.payload as any
            console.log(productPayload)
            const findProductInToCart = state.carts.findIndex((itemProduct: any) => {
                itemProduct.product.name == productPayload.product.name &&
                    itemProduct.quantityOrder.nameColor == productPayload.quantityOrder.nameColor &&
                    itemProduct.quantityOrder.nameSize == productPayload.quantityOrder.nameSize
            })

            if (findProductInToCart > -1) {
                state.carts[findProductInToCart].quantityOrder.quantity =
                    state.carts[findProductInToCart].quantityOrder.quantity = productPayload.quantityOrder.quantity
            }
            else {
                state.carts.push(action.payload)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCart.fulfilled, (state, action) => {
            state.carts = action.payload.carts
        })
    }
})

export const { actions } = cartSlice

export default cartSlice.reducer