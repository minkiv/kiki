import axios from 'axios'
const accessToken = localStorage.getItem('accessToken') ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU1NmM5ZTEzOTYzNTk4NWQ0OGQ4ODIiLCJpYXQiOjE2OTI5ODE4NzMsImV4cCI6MTY5Mjk4NTQ3M30.E36YuPRg4rGUo58Vb1HjA4NctUCi03z565n2csh9ODU'

export const axiosPrivate = axios.create({
    baseURL: "http://localhost:8081/api",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${accessToken}`

    }
})

export const axiosFormData = axios.create({
    baseURL: "http://localhost:8081/api",
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${accessToken}`
    }
})

axios.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)