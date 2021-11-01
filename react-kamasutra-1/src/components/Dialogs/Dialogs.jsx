import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage; //ссылка на dialogsPage

    let dialogsElements = state.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} />) //везде где у нас map'ится массив нужно добовлять эл. key, в качестве key нужно указывать id эл. из которого мы получаем JSX элемент. Потому что важно чтобы эти эл. были уникальны. В данном случае d
    let messagesElements = state.messages.map(m =>
        <Message message={m.message} key={m.id} />) //тут индекс m. Это делается что бы в консоли браузера не вылетала ошибка

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
                        value={props.newMessageBody} />
                    <div><button onClick={addMessage}>Add Message</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;