import { createSelector } from "reselect"

 const getUsersSelector = (state) => {   //селектор отрабатывает как ссылка в state, берёт от туда то что нужно
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users)=> { //передаём селектор getUsersSelector который будет использоваться что бы получить users (каждому сложному селектору нужен приметивный селектор)
    return users.filter(u=> true);                          //фейковый фильтр
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}