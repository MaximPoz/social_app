import React from 'react';
import s from  './Nav.module.css';



const Nav = () => {
    return (<nav className={s.nav}>
        <div className={s.act}><a href="/Profile">Profile</a></div>
        <div className={s.item}><a href="/Dialogs">Masseges</a></div>
        <div className={s.item}><a>Mews</a></div>
        <div className={s.item}><a>Music</a></div>
        <div className={s.item}><a>Settings</a></div>
    </nav>
    )
}
export default Nav;