import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => { //это ф-ция которая принимает весть state целиком
    return {                       // и возвращает объект только с теми данными которые реально нужны (список пользователей)
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}


let mapDispatchToProps = (dispatch) => { // служит для того что бы передавать дочерние колбеки, какие то ф-ции которые будут вызываться тупой компонентой
    return {
        follow: (userId) => {       //кого follow'ить
            dispatch (followAC(userId));     //вызываем результат работы actionCreater'a и говорим какого пользователя нужно follow'ить
        },
        unfollow: (userId) => {       //кого unfollow'ить
            dispatch (unfollowAC(userId));     //вызываем результат работы actionCreater'a и говорим какого пользователя нужно unfollow'ить
        },
        setUsers: (users) => {                //кого отправить в state
            dispatch (setUsersAC(users));     //вызываем результат работы actionCreater'a и говорим что пользователей нужно установить в state
        },
        setCurrentPage: (pageNumber) => {                //кого отправить в state
            dispatch (setCurrentPageAC(pageNumber)); 
        },
        setTotalUsersCount: (totalCount) => {                //кого отправить в state
            dispatch (setTotalUsersCountAC(totalCount)); 
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Users);