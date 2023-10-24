import { axiosPrivate } from "~/app/api/configHttp"

export const getAllOrder = async () => {
    return await axiosPrivate.get('/order/orderadmin')
}