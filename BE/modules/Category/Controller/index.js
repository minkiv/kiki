import getAllCategorys from "./Api/getAllCategory.js";
import getOneCategorys from "./Api/getOneCategory.js";
import deleteCategorys from "./Api/deleteCategory.js";
import addCategorys from "./Api/addCategory.js";
const categoryController={
    getAllCategorys,
    getOneCategorys,
    deleteCategorys,
    addCategorys
}
export default categoryController