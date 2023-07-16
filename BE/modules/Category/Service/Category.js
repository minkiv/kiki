import Category from "../Model/Category.js";

export const getAllCategory= async(req,res)=>{
    const getAll = await Category.find()
    return getAll
}
export const getOneCategory = async(req) => {
    const categoryService = await Category.findById(req.params.id)
    return categoryService
}
export const deleteCategory = async(req,res)=>{
    const remove = await Category.findByIdAndDelete(req.params.id)
    return remove
}
export const addCategory = async (req) => {
    const fileImage = req.file
    const categorys = await Category.create({
        ...req.body,
        image: fileImage.path
    })
    return categorys
}