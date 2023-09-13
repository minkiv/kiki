import { createSlice } from "@reduxjs/toolkit";
import { getAllCart } from "./thunk/cart.thunk";
const initialState = {
    carts: [],
    listProductBuy: JSON.parse(localStorage.getItem('listSelectCart')!) ?? []
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
        },

        updateOrderProduct: (state, action) => {
            const findProductIntoCart = state.carts.find(
                (item: any, index: number) =>
                    item.product._id === action.payload.productId && action.payload.indexProductCart === index
            )

            findProductIntoCart.quantityOrder = {
                nameColor: action.payload.colorSelect.nameColor,
                nameSize: action.payload.sizeSelect.nameSize,
                quantity: findProductIntoCart.quantityOrder.quantity
            }
        },

        updateSelectQuantityCart: (state, action) => {
            const { itemCart, quantityWithCondition, quantityRemainProduct, newQuantity } = action.payload
            console.log(newQuantity)
            const findItemCart = state.carts.findIndex((item: any) => item._id === itemCart._id)
            switch (action.payload.type) {
                case 'INCREMENT':
                    if (Number(itemCart.quantityOrder.quantity) < Number(quantityWithCondition)) {
                        state.carts[findItemCart].quantityOrder.quantity += 1
                    }
                    break
                case 'DECREMENT':
                    if (itemCart.quantityOrder.quantity == 1) {
                        state.carts[findItemCart].quantityOrder.quantity = 1
                    } else {
                        state.carts[findItemCart].quantityOrder.quantity -= 1
                    }
                    break

                case 'ONCHANGE_INPUT':
                    if (Number(newQuantity) > Number(quantityWithCondition)) {
                        state.carts[findItemCart].quantityOrder.quantity = quantityWithCondition;
                    }
                    if (Number(newQuantity) < 1) {
                        state.carts[findItemCart].quantityOrder.quantity = 1;
                    }
                    break;

                case 'COMPARE_QUANTITY':
                    if (itemCart.quantityOrder.quantity > quantityRemainProduct?.quantity) {
                        state.carts[findItemCart].quantityOrder.quantity = quantityRemainProduct.quantity
                    }
                default:
                    break
            }
        },
        selectListProductBuy: (state, action) => {
            const productBuy = action.payload

            if (state.listProductBuy.flatMap((item: any) => item?._id).includes(productBuy?._id)) {

                const index = state.listProductBuy.findIndex((itemIndex: any) => itemIndex._id === productBuy?._id)
                state.listProductBuy.splice(index, 1)
            }
            else {
                state.listProductBuy.push(action.payload)
            }

            localStorage.setItem("listSelectCart", JSON.stringify(state.listProductBuy))
        },
        deleteProductCart: (state, action) => {
            const productId = action.payload
            state.carts = state.carts.filter((item: any) => item._id !== productId)
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