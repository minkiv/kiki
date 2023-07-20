import catchAsync from "../../../../utils/catchAsync.js";
import { deleteCart } from "../../Service/Cart.js";
import status from 'http-status'
 const deleteCarts = catchAsync(async(req,res)=>{
    const remove = await deleteCart(req) 
    return res.status(status.OK).json(remove)
 })
 export default deleteCarts
