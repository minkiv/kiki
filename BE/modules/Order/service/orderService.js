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
                _id: element.product._id
            })
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
    const { orderStatus, oderId } = req.body
    const order = await Order.findOne({
        _id: oderId
    })

    order.orderStatus = orderStatus
    await order.save()
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

export const getAllOrderAdmins = async (req)=>{
    const orderAdmin = await Order.find().populate({
        path: 'productOrder',
        populate: {
            path: 'product',
        },
    })
    return orderAdmin
}