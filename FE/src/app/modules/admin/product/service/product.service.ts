import { axiosPrivate } from "~/app/api/configHttp"


export const getAllProduct = async() => {
    return await axiosPrivate.get('/product')
}