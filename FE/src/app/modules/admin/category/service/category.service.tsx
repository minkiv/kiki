import { axiosPrivate } from '../../../../api/configHttp';

export const getAllCategory = async () => {
    return await axiosPrivate.get('/category')
}

export const deleteCategory = async (userId: any) => {
    return await axiosPrivate.delete('/category/' + userId)
}