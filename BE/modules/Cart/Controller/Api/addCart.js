import catchAsync from "../../../../utils/catchAsync.js";
import { addCart } from "../../Service/Cart.js";
import status from "http-status"

const addCarts = catchAsync(async(req,res)=>{
    const Cartadd = await addCart(req)
    return res.status(status.OK).json(Cartadd)
})

export default addCarts