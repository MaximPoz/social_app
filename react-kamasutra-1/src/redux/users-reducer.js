const FOLLOW = 'FOLLOW'; // ну тут вроде понятно, объявление в глобальную константу
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,  //сколько пользователей на одной странице
    totalUsersCount: 0,  //общее кол пользователей
    currentPage: 1 // с какой страницы начать

};

const usersReducer = (state = initialState, action) => {  //редьюсер принимает старый state и меняет его на основании action

    switch (action.type) {  //если объект action имеет тип FOLLOW тогда выполняем этот код (добовляем пост из textarea)
        case FOLLOW: //если нужно кого то за'followed 
            return {        //мы возвращаем копию всего state'a
                ...state,
                users: state.users.map(u => {    //делаем копию users'ов  (.map возвращает новый массив на основе старого массива (аналогично - users: [...state.users]))
                    if (u.id === action.userId) { //если id совподает то мы возвращаем копию этого 
                        return { ...u, followed: true }  // и конкретного юзера которого надо поменять на true тоже делаем копию
                    }
                    return u; //если id не совподает то возвращаем старый объект
                })
            }

        case UNFOLLOW:
            return {        //мы возвращаем копию всего state'a
                ...state,
                users: state.users.map(u => {    //делаем копию users'ов  (.map возвращает новый массив на основе старого массива (аналогично - users: [...state.users]))
                    if (u.id === action.userId) { //если id совподает то мы возвращаем копию
                        return { ...u, followed: false }  // и конкретного юзера которого надо поменять на false тоже делаем копию
                    }
                    return u; //если id не совподает то возвращаем старый объект
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users } //берём из state'a старых юзеров которые там были создать копию массива и дописать к ним юзеров которые к нам пришли из action (склеиваем тех кто были в state и теъх кто пришел в action)
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage } //берём из state'a старых юзеров которые там были создать копию массива и дописать к ним юзеров которые к нам пришли из action (склеиваем тех кто были в state и теъх кто пришел в action)
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count } //берём из state'a старых юзеров которые там были создать копию массива и дописать к ним юзеров которые к нам пришли из action (склеиваем тех кто были в state и теъх кто пришел в action)
        }

        default:                                     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })   //что бы не писать в UI тип данных мы обьявили его тут и передали в MyPosts
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

export default usersReducer;