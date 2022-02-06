import React from 'react';
import { Field, reduxForm } from "redux-form";
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
    return (
        <form  //в пропсах к нам из контейнерной компоненты reduxForm приходит handleSubmit (там идёт сбор всех данных)
        onSubmit={props.handleSubmit}> 
            <div>
                <Field placeholder={"Login"}  //Компонент соединяет каждый input с store 
                    name={"login"}  // добавили name что бы в fields (полях) консоли в браузере было имя
                    component={Input}  // указал что компонента для ввода данных 
                    validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}  /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm) // обернули хоком reduxForm (объект login отображается в консоле браузера) наш LoginForm

const Login = (props) => {
     const onSubmit = (formData) => {
        console.log(formData);
     }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm  //из Login в LoginReduxForm мы передаём колбэк ф-цию onSubmit в которую у нас приходят все значения из формы (formData) 
        onSubmit={onSubmit}/>
    </div>
}




export default Login; 