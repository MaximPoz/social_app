import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component { //расширяем что бы реакт мог взаимодействовать с User

    componentDidMount() {  // Происходит монтирование компоненты с сервера (запрос на сервак)
        this.props.toggleIsFetching(true) //когла идёт запрос на сервер, включить  анимацию загрузки
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`) // запрос на сервер
            .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                this.props.toggleIsFetching(false) //когда запрос приходит, выключаем  анимацию загрузки
                this.props.setUsers(response.data.items) //придёт response у него мы берём из data'ы items и totalCount,
                this.props.setTotalUsersCount(response.data.totalCount)
            });                                         //и пробрасываем через props в setUsers контейнера
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true) //когла идёт запрос на сервер, включить  анимацию загрузки
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`) // запрос на сервер
            .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
             this.props.toggleIsFetching(false)          //когда запрос приходит, выключаем анимацию загрузки
             this.props.setUsers(response.data.items)    //придёт response у него мы берём data, 
            });                                          //и пробрасываем через props в setUsers контейнера
    }

    render() {  //метод render возвращает JSX (начинает работать  первым)

        return <>
        { this.props.isFetching ? <Preloader />  : null}
            <Users totalUsersCount={this.props.totalUsersCount}  //отдаём через пропсы компаненте данные 
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}          //данный колбэк у нас не в пропсах, по этму передаём просто через this
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}


let mapStateToProps = (state) => { //это ф-ция которая принимает весть state целиком
    return {                       // и возвращает объект только с теми данными которые реально нужны 
        users: state.usersPage.users,   //список пользователей
        pageSize: state.usersPage.pageSize,  //размер страницы
        totalUsersCount: state.usersPage.totalUsersCount,  //общее количество пользователей
        currentPage: state.usersPage.currentPage,       //текущая страница
        isFetching: state.usersPage.isFetching
    }
}


let mapDispatchToProps = (dispatch) => { // служит для того что бы передавать дочерние колбеки, какие то ф-ции которые будут вызываться тупой компонентой
    return {
        follow: (userId) => {       //кого follow'ить
            dispatch(followAC(userId));     //вызываем результат работы actionCreater'a и говорим какого пользователя нужно follow'ить
        },
        unfollow: (userId) => {       //кого unfollow'ить
            dispatch(unfollowAC(userId));     //вызываем результат работы actionCreater'a и говорим какого пользователя нужно unfollow'ить
        },
        setUsers: (users) => {                //кого отправить в state
            dispatch(setUsersAC(users));     //вызываем результат работы actionCreater'a и говорим что пользователей нужно установить в state
        },
        setCurrentPage: (pageNumber) => {                //кого отправить в state
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {                //кого отправить в state
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);