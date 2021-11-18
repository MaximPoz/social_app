import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div >
            <img className={s.avaDialogs}
                src='https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg'></img>
            <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
}


export default DialogItem;