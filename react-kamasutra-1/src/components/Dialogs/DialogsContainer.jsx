import React from 'react';
import { sendMessageActionCreator, updateActionMessageText } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage; //ссылка на dialogsPage

    let addMessage = () =>{
        props.dispatch(sendMessageActionCreator());  //вызываем action из state.js (добовляем сообщение)
    }
    let onMessageChange = (body) => {
        props.store.dispatch(updateActionMessageText(body)) //передаём в state что бы обновить и получить сообщение в textarea
    }
    return <Dialogs updateActionMessageText={onMessageChange}
        sendMessage={addMessage}
        dialogsPage={state} />
}
export default DialogsContainer;