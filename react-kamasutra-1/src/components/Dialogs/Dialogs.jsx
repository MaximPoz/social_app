import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Lena' },
        { id: 2, name: 'Viktor' },
        { id: 3, name: 'Artur' }
    ]

    let messages = [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'Bro' },
        { id: 3, message: 'tools' }
    ]

    let dialogsElements  = dialogs.map( d  => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map( m => <Message message={m.message} />)

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>

            { dialogsElements }
            
        </div>
        <div className={s.messages}>

            { messagesElements }
            
        </div>
    </div>
    )
}
export default Dialogs;