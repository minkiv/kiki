import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { deleteProducts } from "../../Service/Product.js";
const deleteProduct = catchAsync(async(req,res)=>{
    const getOne = await deleteProducts(req)
    return res.status(status.OK).json(getOne)
})
export default deleteProduct