import Category from "../Model/Category.js";

export const getAllCategory= async(req,res)=>{
    const getOne = await Category.find()
    return getOne
}
export const getOneCategory = async(req) => {
    const categoryService = await Category.findById(req.params.id)
    return categoryService
}