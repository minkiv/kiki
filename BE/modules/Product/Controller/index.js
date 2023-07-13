import getOneproducts from "./Api/getOneproduct.js";
import getAllProducts from "./Api/getAllProduct.js";
import deleteProduct from "./Api/deleteProduct.js";
const productController = {
   getOneproducts,
   getAllProducts,
   deleteProduct
}
export default productController