import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'; // установить пользовательские данные



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false, 
};

const authReducer = (state = initialState, action) => {  //редьюсер принимает старый state и меняет его на основании action

    switch (action.type) {  
        case SET_USER_DATA: 
            return {        //мы возвращаем копию всего state'a
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:                                     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}

export const setAuthUserData = ( userId, email, login ) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {      //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
        if  (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data; // деструктуризируем
            dispatch(setAuthUserData (id, email, login));
        }
    });
}

export default authReducer;