import { axiosPrivate, socket } from "../configHttp"
export const addOrder = async (data: any) => {
    return await axiosPrivate.post("/order/add", data)
}

export const updateOrder = async (data: any) => {
    const response =  await axiosPrivate.post(`/order/edit`, data)
        socket.emit("order_updated", data);
        return response
}

export const filterDataOrderByStatus = async (typeOrder: any, keyword: any) => {
    let apiUrl = `/order/filter-data-status?status=${typeOrder}`;

    if (keyword) {
        apiUrl += `&keyword=${keyword}`;
    }
    return await axiosPrivate.get(apiUrl);
    // return await axiosPrivate.get(`/order/filter-data-status?status=${typeOrder}&&keyword=${keyword}`)
}