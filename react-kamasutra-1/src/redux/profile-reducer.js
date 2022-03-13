import { stopSubmit } from "redux-form";
import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'ya Oleg', likesCount: '+16' },
        { id: 2, message: 'ya tozhe', likesCount: '+21' },
        { id: 3, message: 'a ya zhenya', likesCount: '-12' },
        { id: 4, message: 'Dada', likesCount: 11 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {  //если объект action имеет тип ADD_POST тогда выполняем этот код (добовляем пост из textarea)
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            } // создаём копию профайла, а фото меняем на то что пришло в action
        }

        default:                                     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}


export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })   //что бы не писать в UI тип данных мы обьявили его тут и передали в MyPosts
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})



export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId)          //в response сидит результат которым зарезолвится промис
    dispatch(setUserProfile(response.data))                //придёт response у него мы берём из data'ы,
}                                                        //и пробрасываем через props в setUserProfile контейнера

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))                    //придёт response у него мы берём из data'ы,
}                                                   //и пробрасываем через props в setUserProfile контейнера

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {                // и если всё впорядке тогда 
        dispatch(setStatus(status))                      //мы берём из data'ы status
    }
}
export const savePhoto = (file) => async (dispatch) => { //берём фото 
    let response = await profileAPI.savePhoto(file); //и отправляем фото на сервер
    if (response.data.resultCode === 0) {           // и если всё впорядке тогда 
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}





export default profileReducer;