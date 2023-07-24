import Order from "../Model/Order.js"

export const addOder = async (req) => {
    const newOrder = await Order.create({
        ...req.body
    })
    return newOrder
}