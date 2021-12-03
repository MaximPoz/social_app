import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header'



class  HeaderContainer extends React.Component {

    componentDidMount() {  // Происходит монтирование компоненты с сервера (запрос на сервак)

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {// запрос на сервер для получения аунтификации
            withCredentials: true }) // отправляем авторизационную куку
            .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                if  (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data; // деструктуризируем
                    this.props.setAuthUserData (id, email, login);
                }
            });
    }

    render(){
    return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);