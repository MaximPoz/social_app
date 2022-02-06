import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage; //ссылка на dialogsPage

    let dialogsElements = state.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} />) //везде где у нас map'ится массив нужно добовлять эл. key, в качестве key нужно указывать id эл. из которого мы получаем JSX элемент. Потому что важно чтобы эти эл. были уникальны. В данном случае d
    let messagesElements = state.messages.map(m =>
        <Message message={m.message} key={m.id} />) //тут индекс m. Это делается что бы в консоли браузера не вылетала ошибка


    let addNewMessage =(values) =>{ 
        props.sendMessage(values.newMessageBody);  //добовляем сообщение из AddMessageFormRedux onSubmit в контейнерную компоненту
    }
    if (!props.isAuth)
        return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}</div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.area}>
                <Field component='textarea' name='newMessageBody' placeholder='Введите сообщение' />

                <div><button>Add Message</button></div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm); // название формы и компонента которую мы оборачиваем

export default Dialogs;