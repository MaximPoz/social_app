import * as axios from "axios";

const instance = axios.create({
    withCredentials: true, //  исп. куки, показать что я авторизован
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "4b7c36f2-f146-498a-8850-f32bc3f1361f"
    }
})


export const userAPI = {
    getUsers(currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) // запрос на сервер
        .then(response => {    // теперь нам get запрос возвращает из response только data
            return response.data
        })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId){
        return instance.get(`profile/` + userId); // запрос на сервер
    },
}

    export const authAPI = {
        me(){
           return instance.get(`auth/me`)}
        }
    

