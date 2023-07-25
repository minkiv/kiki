import Order from "../Model/Order.js"

export const addOder = async (req) => {
    const newOrder = await Order.create({
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