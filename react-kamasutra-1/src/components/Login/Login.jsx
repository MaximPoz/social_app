import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { login } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
    return (
        <form  //в пропсах к нам из контейнерной компоненты reduxForm приходит handleSubmit (там идёт сбор всех данных)
            onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}  //Компонент соединяет каждый input с store 
                    name={"email"}  // добавили name что бы в fields (полях) консоли в браузере было имя
                    component={Input}  // указал что компонента для ввода данных 
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"} //под каким именем будет уходить на сервак (json)
                    type={'password'}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field
                    component={Input}
                    name={"rememberMe"}
                    type={"checkbox"} /> remember me
            </div>
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
        props.login(formData.email, formData.password, formData.rememberMe);  //вызываем login из пропсов и даём ему значения из formData
    }

    if (props.isAuth) { // если мы зарегестрировались, тогда перенаравляемся в профайл
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm  //из Login в LoginReduxForm мы передаём колбэк ф-цию onSubmit в которую у нас приходят все значения из формы (formData) 
            onSubmit={onSubmit} />
    </div>
}


const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth })

export default connect(mapStateToProps, { login }) //login в этой точке является санКриейтором
    (Login); 