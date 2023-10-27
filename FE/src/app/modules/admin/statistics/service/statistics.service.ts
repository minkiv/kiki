import { axiosPrivate } from "~/app/api/configHttp"

export const getAllOrder = async () => {
    return await axiosPrivate.get('/order/orderadmin')
}

export const getAllStatistics = async () => {
    return await axiosPrivate.get('/statistics')
}