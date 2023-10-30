import { axiosPrivate } from "~/app/api/configHttp"


export const getAllProduct = async () => {
    return await axiosPrivate.get('/product')
}
export const searchProduct = async (keyword: any) => {
    return await axiosPrivate.get(`/product/search?name=${keyword}`)
}