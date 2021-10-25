import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage; //ссылка на dialogsPage
    let newMessageBody = state.newMessageBody;      //ссылка на newMessageBody

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)

    let addMessage = () =>
    props.sendMessage();  //вызываем action из state.js (добовляем сообщение)

    let onMessageChange = (e) => {
        let body = e.target.value; //target - textarea, value - значение, e(event - событие) - в данном случае onChange
        props.updateActionMessageText(body)
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