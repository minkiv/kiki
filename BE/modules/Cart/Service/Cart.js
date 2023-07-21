import Cart from "../Model/Cart.js"

export const deleteCart = async(req,res)=>{
    const remove = await Cart.findByIdAndDelete(req.params.id)
    return remove
}

export const getAllCart= async(req,res)=>{
    const getAll = await Cart.find().populate("carts");
    return getAll
}
export const addCart = async(req,res)=>{
    const add = await Cart.create(
        req.body
    )
   return add
}
export const updateCart = async(req,res) => {
    const id = req.params.id
    const update = await Cart.updateOne({
        _id:id
    },
    {
        ...req.body
    }
    )
    return update
}