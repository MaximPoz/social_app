import React from 'react';
import { addMessageActionCreator, updateActionMessageText } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef();
    let addMessage = () =>
        props.dispatch(addMessageActionCreator());  //вызываем action из state.js

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateActionMessageText(text); //передаём значение из testarea в BLL через action
        props.dispatch(action);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}
                <div className={s.area}>
                    <textarea onChange={onMessageChange}
                        ref={newMessageElement}
                        value={props.newMessageText} />

                    <div><button onClick={addMessage}>Add Message</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;