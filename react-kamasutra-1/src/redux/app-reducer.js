import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'; // установить пользовательские данные



let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {  //редьюсер принимает старый state и меняет его на основании action

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {                                     //мы возвращаем копию всего state'a
                ...state,
                initialized: true // если к нам придёт в action initialized изменяем его на true
            }
        default:                                     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
    dispatch(initializedSuccess())
})
}



export default appReducer;