import { axiosPrivate } from "~/app/api/configHttp"

export const getAllComment = async () => {
    return await axiosPrivate.get("/comment")
}
export const deleteComment = async (id: any) => {
    return await axiosPrivate.delete(`/comment/delete/${id}`)
}