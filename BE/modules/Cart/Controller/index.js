import deleteCarts from "./Api/deleteCart.js"
import  getAllCarts  from "./Api/getAllCart.js";
import editCart from "./Api/updateCart.js";
const cartController = {
    getAllCarts,
    deleteCarts,
    editCart
    
}

export default cartController