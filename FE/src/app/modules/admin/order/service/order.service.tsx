import { axiosPrivate } from "~/app/api/configHttp"

export const getAllOrder = async () => {
   return await axiosPrivate.get('/order/orderadmin')
}

export const deleteOrder = async (userId: any) => {
   return await axiosPrivate.delete('/order/' + userId)
}
export const updateOrder = async (dataBody: any, id: any) => {
   return await axiosPrivate.put(`/order/edit/${id}`, dataBody)
}

export const createOrder = async (dataBody: any) => {
   return await axiosPrivate.post(`/order/add`, dataBody)
}

export const searchOrder = async (keyword: any) => {
   return await axiosPrivate.get(`/order/search?fullname=${keyword}`)
}