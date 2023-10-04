import { axiosPrivate } from "~/app/api/configHttp"


export const getAllUser = async() => {
    return await axiosPrivate.get('/auth')
}
