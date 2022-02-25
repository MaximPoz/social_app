import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA =  'samurai-network/auth/SET_USER_DATA'; // установить пользовательские данные



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {  //редьюсер принимает старый state и меняет его на основании action

    switch (action.type) {
        case SET_USER_DATA:
            return {                                     //мы возвращаем копию всего state'a
                ...state,
                ...action.payload
            }

        default:                                     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => (
    { type: SET_USER_DATA, payload: { userId, email, login, isAuth } }
    )


export const getAuthUserData = () => async(dispatch) => {  //дожидаться промис мы можем только в ассинхронной ф-ции
    let response = await authAPI.me()  //дожидаемся пока промис за'resolved (будет решен)

        if (response.data.resultCode === 0) {  //если resultCode = 0 тогда
            let { id, email, login } = response.data.data; // мы берём из data'ы  id, email, login и выставляем флаг isAuth true
            dispatch(setAuthUserData(id, email, login, true)); //и отправляем полученные данные в state через setAuthUserData
        }
    }


export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe) //в response у нас приходит промис await  login

        if (response.data.resultCode === 0) {  //если resultCode = 0 тогда
            dispatch(getAuthUserData()); //и отправляем полученные данные в state через getAuthUserData
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"; 
            dispatch(stopSubmit("login", { _error: message }));//пердаём форму login в которой ко всем элементам в случае ошибки в логин или пароль будет выводится ошибка с сервера
        }
    };


export const logout = (email, password, rememberMe) => async (dispatch) => {
    let response = await  authAPI.logout()     //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
        if (response.data.resultCode === 0) {  //если resultCode = 0 тогда
            dispatch(setAuthUserData(null, null, null, false)); // зануляем 
        }
}


export default authReducer;