import axios from 'axios'
//const accessToken =
// localStorage.getItem('accessToken') ||
//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Nzc1ZDAxNTQwYmJjMDBlYjlmNzliYSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5MjQ5OTgwNSwiZXhwIjoxNjkyOTMxODA1fQ.rg6qw7kYcOzu-pjeTkqL0JI9gSj4NiqpN-TKKdkpJQA'

export const axiosPrivate = axios.create({
    baseURL: "http://localhost:8081/api",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     Authorization: `Bearer ${accessToken}`
    //   }
})

// export const axiosFormData = axios.create({
//     baseURL: import.meta.env.VITE_API,
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'Access-Control-Allow-Origin': '*',
//         Authorization: `Bearer ${accessToken}`
//     }
// })

// axios.interceptors.request.use(
//     function (config) {
//         return config
//     },
//     function (error) {
//         return Promise.reject(error)
//     }
// )

// axios.interceptors.response.use(
//     function (response) {
//         return response
//     },
//     function (error) {
//         return Promise.reject(error)
//     }
// )