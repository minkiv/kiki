import Cart from "../Model/Cart.js"

export const deleteCart = async (bodyRequet) => {
    const cart = await Cart.findOne({
        user: bodyRequet.userId
    })
    const newcart = cart.carts.findIndex((item) => String(item.productId) == bodyRequet.productId)
    if (newcart > -1) {
        cart.carts.splice(newcart, 1)
    }
    await cart.save()
}


export const getAllCart = async (req) => {
    const cart = await Cart.findOne({ user: req.userId }).populate('carts.productId')
    return cart
}
export const addCart = async (bodyRequet) => {
    const productCart = {
        productId: bodyRequet.product,
        typeOrder: bodyRequet.typeOrder
    }
    const userCart = await Cart.findOne({
        user: bodyRequet.userId
    })

    if (userCart) {
        const findProduct = userCart.carts.find((item) => {
            String(item.product) == bodyRequet.productId
                && item.nameColor == bodyRequet.typeOrder.nameColor
                && item.nameSize == bodyRequet.typeOrder.nameSize
        })
        if (findProduct) {
            findProduct.typeOrder.quantity + bodyRequet.typeOrder.quantity
        }
        else {
            userCart.carts.push(productCart)
        }
        await userCart.save()
    }
    else {
        const newCart = await Cart.findOne({
            _id: bodyRequet.userId
        })
        newCart.carts.push(productCart)
        await newCart.save()
    }


}
export const updateCart = async (req, res) => {
    const id = req.params.id
    const update = await Cart.updateOne({
        _id: id
    },
        {
            ...req.body
        }
    )
    return update
}