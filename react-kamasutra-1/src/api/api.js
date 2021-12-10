import * as axios from "axios";

const instance = axios.create({
    withCredentials: true, //  исп. куки, показать что я авторизован
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY" : "0adce104-060c-438f-85cd-312f385d5e63"
    }
}) 


export const userAPI = {
     getUsers (currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`// запрос на сервер
    
) .then (response=>{    // теперь нам get запрос возвращает из response только data
    return response.data
})
}
}
