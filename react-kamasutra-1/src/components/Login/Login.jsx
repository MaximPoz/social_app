import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from "redux-form";
import { login } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import {  createField, Input } from '../common/FormsControls/FormsControls';
import style from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = ({ handleSubmit, error, captchaUrl }) => { //нам из пропсов интересен handleSubmit и error
    return (
        <form  //в пропсах к нам из контейнерной компоненты reduxForm приходит handleSubmit (там идёт сбор всех данных)
            onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            { captchaUrl && <img src={captchaUrl} />}
            { captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {}) }

            {error && <div className={style.formSummaryError}> {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' }) //уникальное имя формы
    (LoginForm) // обернули хоком reduxForm наш LoginForm

const Login = (props) => {
    const onSubmit = (formData) => { // в formData приходят все значения из формы
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);  //вызываем login из пропсов и даём ему значения из formData
    }

    if (props.isAuth) { // если мы зарегестрировались, тогда перенаравляемся в профайл
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm  //из Login в LoginReduxForm мы передаём колбэк ф-цию onSubmit в которую у нас приходят все значения из формы (formData) 
            onSubmit={onSubmit} 
            captchaUrl={props.captchaUrl}
            />
    </div>
}


const mapStateToProps = (state) => ({  captchaUrl: state.auth.captchaUrl, isAuth: state.auth.isAuth })

export default connect(mapStateToProps, { login }) //login в этой точке является санКриейтором
    (Login); 