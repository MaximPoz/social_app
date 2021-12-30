import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { getAuthUserData } from '../../redux/auth-reducer';
import Header from './Header'



class  HeaderContainer extends React.Component {

    componentDidMount() {  // Происходит монтирование компоненты с сервера (запрос на сервак)

       this.props.getAuthUserData() // получаем из auth-reduser проверку что мы залогиненны
    }

    render(){
    return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, //получение флага isAuth (залогиненны мы или нет)
    login: state.auth.login, //отрисовка login пользователя
});

export default connect (mapStateToProps, {getAuthUserData}) (HeaderContainer);