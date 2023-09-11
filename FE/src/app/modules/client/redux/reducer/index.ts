import { combineReducers } from 'redux'
import productReducer from './productSlice/productSlice'
import cartReducer from './cartSlice/cartSlice'
import categoryReducer from './categorySlice/categorySlice'
import authReducer from './authSlice/authSlice'
export const clientReducer = combineReducers({
    productReducer,
    cartReducer,
    categoryReducer,
    authReducer
})
export default clientReducer