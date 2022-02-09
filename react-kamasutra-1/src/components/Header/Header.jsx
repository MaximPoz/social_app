import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
  return <header className={s.header}>
    <img src='https://www.reviewpro.com/wp-content/uploads/2019/03/mews-logo-dark.png'></img>

    <div className={s.loginBlock}>
      {props.isAuth
        ? <div> {props.login} - <button onClick={props.logout}> Logout </button> </div>
        : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}
export default Header;