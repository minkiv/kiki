import axios from 'axios'
const accessToken = localStorage.getItem('accessToken') ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU1NmM5ZTEzOTYzNTk4NWQ0OGQ4ODIiLCJpYXQiOjE2OTM1Nzc5MTMsImV4cCI6MTY5MzU4MTUxM30.itr-S5JmL5xLXF7LZotIcaCLaOPMD-ahx5uIXouNAv0'
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