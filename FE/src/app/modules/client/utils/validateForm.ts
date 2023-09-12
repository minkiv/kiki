import * as yup from "yup"

export const schema = yup.object().shape({
    fullname: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
    phoneNumber: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
    city: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
    district: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
    commune: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
    locationDetail: yup
        .string()
        .required('bạn cần nhập đầy đủ thông tin'),
})

export const validateLogin = yup.object().shape({
    email: yup.string().required('bạn cần nhập đầy đủ thông tin'),
    password: yup.string().required('bạn cần nhập đầy đủ thông tin')
})
