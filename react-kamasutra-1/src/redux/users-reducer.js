const FOLLOW = 'FOLLOW'; // ну тут вроде понятно, объявление в глобальную константу
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {  //если объект action имеет тип FOLLOW тогда выполняем этот код (добовляем пост из textarea)
        case FOLLOW: //если нужно кого то за'followed 
            return {        //мы возвращаем копию всего state'a
                ...state,
                users: state.users.map(u => {    //делаем копию users'ов  (.map возвращает новый массив на основе старого массива (аналогично - users: [...state.users]))
                    if(u.id === action.userId) { //если id совподает то мы возвращаем копию этого 
                        return {...u, followed: true}  // и конкретного юзера которого надо поменять на true тоже делаем копию
                    }
                    return u; //если id не совподает то возвращаем старый объект
                })     
            }

        case UNFOLLOW:
            return {        //мы возвращаем копию всего state'a
                ...state,
                users: state.users.map(u => {    //делаем копию users'ов  (.map возвращает новый массив на основе старого массива (аналогично - users: [...state.users]))
                    if(u.id === action.userId) { //если id совподает то мы возвращаем копию
                        return {...u, followed: false}  // и конкретного юзера которого надо поменять на false тоже делаем копию
                    }
                    return u; //если id не совподает то возвращаем старый объект
                })     
            }

        case SET_USERS: {
            return {...state, users: [ ...state.users, ...action.users ]} //берём из state'a старых юзеров которые там были создать копию массива и дописать к ним юзеров которые к нам пришли из action (склеиваем тех кто были в state и теъх кто пришел в action)
            }   
        
        default:                                     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })   //что бы не писать в UI тип данных мы обьявили его тут и передали в MyPosts
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users})


export default usersReducer;