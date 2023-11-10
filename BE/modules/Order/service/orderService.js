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
    const { orderStatus, orderId } = req.body

    const order = await Order.findOne({
        _id: orderId,
    })

    order.orderStatus = orderStatus
    await order.save()

    return order
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
export const searchOrder = async (req, res) => {
    const { fullname } = req.query;
    const searchRegex = new RegExp(fullname, "i");
    const orders = await Order.find({ fullname: searchRegex });
    return orders
};

export const filterDataOrderByStatus = async (queryRequest) => {
    const { status } = queryRequest

    const orders = await Order.aggregate([
        {
            $match: { "orderStatus": { $in: [status] } }
        },
        {
            $unwind: "$productOrder"
        },
        {
            $lookup: {
                from: "products",
                localField: "productOrder.product",
                foreignField: "_id",
                as: "productInfo"
            }
        },
        {
            $unwind: "$productInfo"
        },
        {
            $set: {
                "productOrder.product": "$productInfo"
            }
        },
        {
            $group: {
                _id: "$_id",
                fullname: { $first: "$fullname" },
                totalprice: { $first: "$totalprice" },
                phoneNumber: { $first: "$phoneNumber" },
                district: { $first: "$district" },
                city: { $first: "$city" },
                commune: { $first: "$commune" },
                fullname: { $first: "$fullname" },
                locationDetail: { $first: "$locationDetail" },
                productOrder: { $push: "$productOrder" },
                createdAt: { $first: "$createdAt" },
                updatedAt: { $first: "$updatedAt" },
                orderStatus: { $first: "$orderStatus" },
                payment_methods: { $first: "$payment_methods" },
                __v: { $first: "$__v" }
            }
        }
    ])

    return orders
}