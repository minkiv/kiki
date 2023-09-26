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
export const validateRegister = yup.object().shape({
    email: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    password: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    phoneNumber: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    birthday: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    fullname: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    nickname: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    address: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    gender: yup.string().required('Bạn cần nhập đầy đủ thông tin'),
    confirmPass: yup.string().oneOf([yup.ref('password')]),
})
