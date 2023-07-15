import Category from "../Model/Category.js";

export const getAllCategory= async(req,res)=>{
    const getOne = await Category.find()
    return getOne
}