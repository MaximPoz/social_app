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
    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>

            <DialogItem name=" Lena" id="1" />
            <DialogItem name=" Viktor" id="2" />
            <DialogItem name=" Artur" id="3" />

        </div>
        <div className={s.massages}>
            <Message massage=" Hey" />
            <Message massage=" Bro" />
            <Message massage=" tools" />
        </div>
    </div>
    )

}
export default Dialogs;