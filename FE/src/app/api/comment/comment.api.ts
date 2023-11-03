import { axiosPrivate } from "../configHttp"

export const createComment = async (data: any) => {
    const response = await axiosPrivate.post("/comment/add", data)
    return response.data
}