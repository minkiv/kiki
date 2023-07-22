import Cart from "../Model/Cart.js"

export const deleteCart = async(bodyRequet)=>{
    const cart=await Cart.findOne({
       user:bodyRequet.userId
    })
       const newcart=cart.carts.findIndex((item)=>String(item.productId)==bodyRequet.productId)
       if(newcart>-1){
           cart.carts.splice(newcart,1)       
    }
    await cart.save()
}


export const getAllCart= async(req)=>{
    const cart = await Cart.findOne({user: req.userId}).populate('carts.productId')
    return cart
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