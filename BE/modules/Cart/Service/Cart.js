import Cart from "../Model/Cart.js"

export const deleteCart = async(req,res)=>{
    const remove = await Cart.findByIdAndDelete(req.params.id)
    return remove
}