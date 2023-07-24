import catchAsync from "../../../../utils/catchAsync.js";
import { updateCart } from "../../Service/Cart.js";
import status from "http-status"
import productModel from "../../../Product/Model/Product.js";
const editCarts = catchAsync(async(req,res)=>{
    const bodyRequet = {
        userId: req.user_id,
        productId: req.body.productId,
        quantityOrder: req.body.quantityOrder
    }
    const productLocal = await productModel.findOne({
        _id: bodyRequet.productId
    })
    if(!productLocal) {
        return res.status(status.NOT_FOUND).json("Không tìm thấy sản phẩm")
    }
    const productFineColor = productLocal.listQuantityRemain.find((item) => item.nameColor == bodyRequet.quantityOrder.nameColor)
    if(productFineColor.quantity< bodyRequet.quantityOrder.quantity){
       return res.status(status.BAD_REQUEST).json("Đã vượt quá hạn") 
    }
    await updateCart(bodyRequet)
    return res.status(status.OK).json("Sửa SP thành công")
})

export default editCarts