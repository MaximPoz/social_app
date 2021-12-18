import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";


class UsersContainer extends React.Component { //расширяем что бы реакт мог взаимодействовать с User

    componentDidMount() {  // Происходит монтирование компоненты с сервера (запрос на сервак)

        this.props.toggleIsFetching(true) //когла идёт запрос на сервер, включить  анимацию загрузки
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {  //когда сервак даст ответ затем (then) выполни стрелочную ф-цию (getUsers инкапсулировал get запрос на сервер)
                this.props.toggleIsFetching(false) //когда запрос приходит, выключаем  анимацию загрузки
                this.props.setUsers(data.items) //придёт response у него мы берём из data'ы items и totalCount,
                this.props.setTotalUsersCount(data.totalCount)
            });                                         //и пробрасываем через props в setUsers контейнера
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true) //когда идёт запрос на сервер, включить  анимацию загрузки

        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {  //когда сервак даст ответ затем (then) выполни стрелочную ф-цию (getUsers инкапсулировал get запрос на сервер)
             this.props.toggleIsFetching(false)          //когда запрос приходит, выключаем анимацию загрузки
             this.props.setUsers(data.items)    //придёт response у него мы берём data, 
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
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress, // прогресс запроса
    }
}


export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, 
    setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);