import { axiosPrivate } from "~/app/api/configHttp"

export const getAllOrder = async () => {
   return await axiosPrivate.get('/order/orderadmin')
}

export const deleteOrder = async (userId: any) => {
   return await axiosPrivate.delete('/order/' + userId)
}