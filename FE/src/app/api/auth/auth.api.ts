import { axiosPrivate } from "../configHttp"

export const loginSystem = async (data: any) => {
    return await axiosPrivate.post("/auth/signin", data)
}
export const registerSystem = async (data: any) => {
    return await axiosPrivate.post("/auth/register", data)
}