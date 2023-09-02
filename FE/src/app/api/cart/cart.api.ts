import { axiosPrivate } from "../configHttp"

export const addProductToCart = async (data: any) => {
    return await axiosPrivate.post("/cart/add", data)
}

export const UpdateProductToCart = async (data: any) => {
    console.log(data)
    return await axiosPrivate.post("/cart/edit", data)
}