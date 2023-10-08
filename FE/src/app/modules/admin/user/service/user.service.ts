import { axiosPrivate } from "~/app/api/configHttp"


export const getAllUser = async () => {
    return await axiosPrivate.get('/auth')
}
export const createUser = async (bodyRequest: any) => {
    return await axiosPrivate.post('/auth/register', bodyRequest)
}

export const deleteUser = async (userId: any) => {
    return await axiosPrivate.delete('/auth/' + userId)
}

