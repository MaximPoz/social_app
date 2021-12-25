import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUser } from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { whisAuthRedirect } from "../../HOC/whisAuthRedirect";



class UsersContainer extends React.Component { //расширяем что бы реакт мог взаимодействовать с User

    componentDidMount() {  // Происходит монтирование компоненты с сервера (запрос на сервак)
        this.props.getUser(this.props.currentPage, this.props.pageSize);// заменили весь запрос с диспатчами (api)

    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber); 
        this.props.getUser(pageNumber, this.props.pageSize); // заменили весь запрос с диспатчами (api)
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


export default compose (
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress,getUser}),
    whisAuthRedirect)
    (UsersContainer);//compose возми UsersContainer и закинь их в whisAuthRedirect, а этот результат закинь в connect;