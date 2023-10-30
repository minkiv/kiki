import { axiosPrivate } from "../configHttp"

export const loginSystem = async (data: any) => {
    return await axiosPrivate.post("/auth/signin", data)
}
export const registerSystem = async (data: any) => {
    return await axiosPrivate.post("/auth/register", data)
}

export const getOneUserSystem = async (id: any) => {
    return await axiosPrivate.get(`/auth/${id}`)
}

export const sendEmail = async (email:any) => {
    return await axiosPrivate.post(`/auth/sendEmail`, email)
}