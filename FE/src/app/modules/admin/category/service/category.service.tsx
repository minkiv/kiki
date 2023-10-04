import { axiosPrivate } from '../../../../api/configHttp';

export const getAllCategory = async() => {
    return await axiosPrivate.get('/category')
}