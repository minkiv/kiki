import { axiosPrivate } from "../configHttp"

export const addOrder = async (data: any) => {
    return await axiosPrivate.post("/order/add", data)
}

export const updateOrder = async (data: any) => {
    return await axiosPrivate.post(`/order/edit`, data)
}

export const filterDataOrderByStatus = async (typeOrder: any) => {
    return await axiosPrivate.get(`/order/filter-data-status?status=${typeOrder}`)
}