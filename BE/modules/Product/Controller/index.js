import getOneproducts from "./Api/getOneproduct.js";
import getAllProducts from "./api/getAllProduct.js";
import deleteProducts from "./Api/deleteProduct.js";
import addProducts from "./Api/addProduct.js";
const productController = {
   getOneproducts,
   getAllProducts,
   deleteProducts,
   addProducts
}
export default productController