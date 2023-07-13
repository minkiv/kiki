import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { getAllProduct } from "../../Service/Product.js";
const getAllProducts = catchAsync(async (req, res) => {
    const products = await getAllProduct(req)
    return res.status(status.OK).json(products)
})
export default getAllProducts