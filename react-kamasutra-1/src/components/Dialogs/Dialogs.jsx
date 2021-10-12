import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

 

    let dialogsElements  = props.state.dialogs.map( d  => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map( m => <Message message={m.message} />)
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }
    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>

            { dialogsElements }
           
        </div>
        <div className={s.messages}>

            { messagesElements }
            <div className={s.area}>
            <textarea ref = {newMessageElement}>add</textarea>
            <div><button onClick={addMessage}>Add Message</button></div>
            </div>
        </div>
    </div>
    )
}
export default Dialogs;