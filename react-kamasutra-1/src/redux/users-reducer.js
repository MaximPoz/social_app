import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW'; // ну тут вроде понятно, объявление в глобальную константу
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'; //переключи значение из фетчинга
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'; //переключи значение из запроса на подписку

let initialState = {
    users: [],
    pageSize: 3,  //сколько пользователей на одной странице
    totalUsersCount: 0,  //общее кол пользователей
    currentPage: 1, // с какой страницы начать
    isFetching: true, //состояние запроса
    followingInProgress: [], // в каком состоянии прогресс подписки, если запрос обрабатывается то false
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
            return { ...state, currentPage: action.currentPage } //создаём копию stat'a и дополняем её action'ом меняя страницу
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count } //создаём копию stat'a и дополняем её action'ом
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching } //создаём копию stat'a и дополняем её action'ом. !!!Dispatch'ит (отправляет) только объект!!!
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state,
                 followingInProgress: action.isFetching
                 ? [...state.followingInProgress, action.userId] // добавить в state и дизейблить ту что пришла в userId
                 : state.followingInProgress.filter(id => id !=action.userId) } //пропускаем только ту id которая не ровна той id которая в акшине пришла (фильтрация уже возвращает нам копию массива  )
        }

        default:                                     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}


//ACTION CREATOR
export const followSuccess = (userId) => ({ type: FOLLOW, userId })   //сюда приходит тип и значение
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})



//САНКИ(thunk) - это ф-ции которые внутри делают какую то комбинацию диспатчей связанную с асинхронной операцией (ajax запрос)
export const getUser = (currentPage, pageSize) => {
    return (dispatch) => {

    dispatch(toggleIsFetching(true)) //когла идёт запрос на сервер, включить  анимацию загрузки

    userAPI.getUsers( currentPage, pageSize).then(data => {  //когда сервак даст ответ затем (then) выполни стрелочную ф-цию (getUsers инкапсулировал get запрос на сервер)

        dispatch(toggleIsFetching(false))   //когда запрос приходит, выключаем  анимацию загрузки
        dispatch(setUsers(data.items))  //придёт response у него мы берём из data'ы items и totalCount,
        dispatch(setTotalUsersCount(data.totalCount))
        });                                         //и пробрасываем через props в setUsers контейнера
}}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));//когда запрос начнётся передать toggleFollowingProgress true и id user'a и заблокировать кнопку
        userAPI.follow(userId)  // post запрос на сервер за конкретного id user
            .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                if (response.data.resultCode == 0) {// если resultCode пришел 0, значит ошибок нет
                    dispatch(followSuccess(userId)) //  и выполняется отписка от определённого пользователя
                }
                dispatch(toggleFollowingProgress(false, userId));//когда запрос закончится передать toggleFollowingProgress folse и id user'a и кнопка разблокируется
            });
}}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));//когда запрос начнётся передать toggleFollowingProgress true и id user'a  и заблокировать кнопку
        userAPI.unfollow(userId) // delete запрос на сервер за конкретного id user
        .then(response => {  //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
            if (response.data.resultCode == 0) { // если resultCode пришел 0, значит ошибок нет
                dispatch(unfollowSuccess(userId))   //  и выполняется отписка от определённого пользователя
            }
            dispatch(toggleFollowingProgress(false, userId));//когда запрос закончится передать toggleFollowingProgress folse и id user'a и кнопка разблокируется
        });
    }
}



export default usersReducer;