import catchAsync from "../../../../utils/catchAsync.js";
import { updateCart } from "../../Service/Cart.js";
import status from "http-status"

const editCart = catchAsync(async(req,res)=>{
    const cart = await updateCart(req)
    return res.status(status.OK).json(cart)
})

export default editCart