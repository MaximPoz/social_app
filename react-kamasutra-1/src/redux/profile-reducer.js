import { profileAPI, userAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; // ну тут вроде понятно, объявление в глобальную константу
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'ya Oleg', likesCount: '+16' },
        { id: 2, message: 'ya tozhe', likesCount: '+21' },
        { id: 3, message: 'a ya zhenya', likesCount: '-12' }
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {  //если объект action имеет тип ADD_POST тогда выполняем этот код (добовляем пост из textarea)
        case ADD_POST: {
            let text = state.newPostText;
            return {
                ...state,
                posts: [{ id: 4, message: text, likesCount: 0 }, ...state.posts],  // пушит в посты         //создаём копию state (копируется только state без внутренних массивов) что бы не изменять основной state
                newPostText: ''         //зануляем textarea 
            }
        }

        case UPDATE_NEW_POST_TEXT: {                  //но если action тип UPDATE_NEW_POST_TEXT тогда мы 
            return {
                ...state,                       //создаём копию state (копируется только state без внутренних массивов) что бы не изменять основной state
                newPostText: action.text,       // отправляем текст который набирается в значение textarea в state.newPostText
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        default:                                     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })   //что бы не писать в UI тип данных мы обьявили его тут и передали в MyPosts
export const updateActionPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then(response => {     //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
            dispatch(setUserProfile(response.data)) //придёт response у него мы берём из data'ы,
        });                                          //и пробрасываем через props в setUserProfile контейнера
    }
}

export const getStatus = (userId) => (dispatch) => {  //эквивалентно return (dispatch) => 
    profileAPI.getStatus(userId).then(response => {     //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
        dispatch(setStatus(response.data)) //придёт response у него мы берём из data'ы,
    });                                          //и пробрасываем через props в setUserProfile контейнера
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {     //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
        if (response.data.resultCode === 0) {                // и если всё впорядке тогда 
            dispatch(setStatus(status)) //мы берём из data'ы status
        }
    }); 
}




export default profileReducer;