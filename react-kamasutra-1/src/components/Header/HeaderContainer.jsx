import React from 'react';
import { connect } from 'react-redux';
import {  logout } from '../../redux/auth-reducer';
import Header from './Header'



class  HeaderContainer extends React.Component {

    render(){
    return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, //получение флага isAuth (залогиненны мы или нет)
    login: state.auth.login, //отрисовка login пользователя
});

export default connect (mapStateToProps, { logout}) (HeaderContainer);