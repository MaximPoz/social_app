import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsRedirect = (state) =>{
    return{isAuth: state.auth.isAuth}}      //состояние флага isAuth находится в Heder

export const whisAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth) return <Redirect to='/login'/> //если не isAuth то перенаправить (redirect) на url login

            return <Component {...this.props}/> //перерисовка целивой компоненты которая прийдёт на входе в whisAuthRedirect
        }
    }

    let ConnectedAuthRedirectComponent = connect (mapStateToPropsRedirect)(RedirectComponent) //обернули  RedirectComponent ConnectedAuthRedirectComponent'ом тем самым дав доступ к mapStateToPropsRedirect
    return ConnectedAuthRedirectComponent;
}