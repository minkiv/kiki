import catchAsync from "../../../../utils/catchAsync.js";
import { addCart } from "../../Service/Cart.js";
import status from "http-status"
import productModel from "../../../Product/Model/Product.js"
const addCarts = catchAsync(async (req, res) => {
    const bodyRequet = {
        userId: req.user,
        productId: req.body.product,
        typeOrder: req.body.typeOrder
    }

    const productLocal = await productModel.findOne({
        _id: bodyRequet.productId
    })
    if (!productLocal) {
        return res.status(status.NOT_FOUND).json("Không tìm thấy sản phẩm");
    }
    const productFineColor = productLocal.listQuantityRemain.find((item) => item.nameColor == bodyRequet.typeOrder.nameColor)
    if (productFineColor.quantity < bodyRequet.typeOrder.quantity) {
        return res.status(status.BAD_REQUEST).json("đã vượt quá  hạn")
    }
    await addCart(bodyRequet)
    return res.status(status.OK).json("THM SP THÀNH CÔNG")
})

export default addCarts