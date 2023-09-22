import { axiosPrivate } from "../configHttp"

export const addOrder = async (data: any) => {
    return await axiosPrivate.post("/order/add", data)
}