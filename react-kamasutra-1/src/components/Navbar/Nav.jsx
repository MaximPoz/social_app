import React from 'react';
import s from  './Nav.module.css';



const Nav = () => {
    return (<nav className={s.nav}>
        <div className={s.act}><a>Profile</a></div>
        <div className={s.item}><a>Masseges</a></div>
        <div className={s.item}><a>Mews</a></div>
        <div className={s.item}><a>Music</a></div>
        <div className={s.item}><a>Settings</a></div>
    </nav>
    )
}
export default Nav;