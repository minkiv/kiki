import Order from "../Model/Order.js"
import Cart from "../../Cart/Model/Cart.js"
import ProductModel from "../../Product/Model/Product.js"

export const addOder = async (req) => {
    const listProductOrder = req.body.productOrder
    const userId = req.user.id
    const cartUser = await Cart.findOne({
        user: req.user._id
    })
    if (cartUser) {
        const filterArray = cartUser.carts.filter(
            (itemCart) => listProductOrder.filter(
                (itemListProduct) => itemListProduct.product._id === String(itemCart.product) &&
                    itemListProduct.quantityOrder.nameSize == itemCart.quantityOrder.nameSize &&
                    itemListProduct.quantityOrder.nameColor == itemCart.quantityOrder.nameColor
            ).length === 0
        )
        for (let index = 0; index < listProductOrder.length; index++) {
            const element = listProductOrder[index];
            const productOrder = element.quantityOrder
            const productDetail = await ProductModel.findOne({
                _id: element.product
            })
            console.log(productDetail)
            const findObjectRemain = productDetail.listQuantityRemain.find(
                (item) => item.nameColor == productOrder.nameColor && item.nameSize == productOrder.nameSize
            )
            findObjectRemain.quantity = findObjectRemain.quantity - productOrder.quantity
            await productDetail.save()
        }
        cartUser.carts = filterArray
        await cartUser.save()
    }
    const newOrder = await Order.create({
        user: userId,
        ...req.body
    })
    return newOrder
}
export const updateOrder = async (req) => {
    const { orderStatus } = req.body
    const id = req.params.id
    const findOrder = await Order.findById(id)
    const currentOrderStatus = findOrder.orderStatus
    if (currentOrderStatus === 'duyệt thành công') {
        if (orderStatus === 'đang chờ duyệt') {
            return false
        }
    }
    if (currentOrderStatus === 'đang vận chuyển') {
        if (orderStatus === 'đang chờ duyệt' || orderStatus === 'duyệt thành công') {
            return false
        }
    }
    if (currentOrderStatus === 'hoàn thành') {
        if (orderStatus === 'đang chờ duyệt' || orderStatus === 'duyệt thành công' || orderStatus === 'đang vận chuyển') {
            return false
        }
    }
    const update = await Order.updateOne({ _id: id }, {
        ...req.body,
        orderStatus
    })
    return update
}

export const getAllOrders = async (req) => {
    const orders = await Order.find({
        user: req.user.id,
    }).populate({
        path: 'productOrder',
        populate: {
            path: 'product',
        },
    })

    return orders
}

export const getAllOrderAdmins = async (req) => {
    const orderAdmin = await Order.find().populate({
        path: 'productOrder',
        populate: {
            path: 'product',
        },
    })
    return orderAdmin
}

export const deleteUsers = async (req) => {
    const remove = await Order.findByIdAndDelete(req.params.id)
    return remove
}