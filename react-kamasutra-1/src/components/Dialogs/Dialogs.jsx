import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}> {props.massage} </div>
    )
}

const Dialogs = (props) => {

    const dialogsData = [
        {id:1, name:'Lena'},
        {id:2, name:'Viktor'},
        {id:3, name:'Artur'}
    ]

    const messageData = [
        {id:1, message:'Hey'},
        {id:2, message:'Bro'},
        {id:3, message:'tools'}
    ]

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>

            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />

        </div>
        <div className={s.messages}>
        <DialogItem name={messageData[0].message} id={messageData[0].id} />
        <DialogItem name={messageData[1].message} id={messageData[1].id} />
        <DialogItem name={messageData[2].message} id={messageData[2].id} />
        </div>
    </div>
    )

}
export default Dialogs;