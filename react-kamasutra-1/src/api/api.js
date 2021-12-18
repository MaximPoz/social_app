import * as axios from "axios";

const instance = axios.create({
    withCredentials: true, //  исп. куки, показать что я авторизован
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY" : "4b7c36f2-f146-498a-8850-f32bc3f1361f"
    }
}) 


export const userAPI = {
     getUsers (currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`// запрос на сервер
    
) .then (response=>{    // теперь нам get запрос возвращает из response только data
    return response.data
})}}
