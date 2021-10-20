import React from 'react';
import { sendMessageActionCreator, updateActionMessageText } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage; //ссылка на dialogsPage
    let newMessageBody = state.newMessageBody;      //ссылка на newMessageBody

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)

    let addMessage = () =>props.dispatch(sendMessageActionCreator());  //вызываем action из state.js (добовляем сообщение)

    let onMessageChange = (e) => {
        let body = e.target.value; //target - textarea, value - значение, e(event - событие) - в данном случае onChange
        props.store.dispatch(updateActionMessageText(body)) //передаём в state что бы обновить и получить сообщение в textarea
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}</div>
                
            <div className={s.messages}>
                {messagesElements}
                <div className={s.area}>
                <textarea onChange={onMessageChange} // value берёт значение из state.newMessageBody
                           value={newMessageBody} />  
                <div><button onClick={addMessage}>Add Message</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;