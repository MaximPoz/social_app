import React from "react";
import styles from './Users.module.css';
import flyCat from '../../assets/image/flyCat.png'
import { NavLink } from "react-router-dom";


let User = ({ user, followingInProgress, unfollow, follow }) => {
    return <div>
        <span>
            <div className='avaUsers'>
                <NavLink to={'/profile/'    //+ u.id это id пользователя в api/1.0/users
                    + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : flyCat} className={styles.usersPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)} //если в редьюсере в массиве followingInProgress хоть одна id = id пользователя то тогда заблокировать кнопку
                        onClick={() => {
                            unfollow(user.id);
                        }}> Отписаться </button> //если нажать на кнопку сообщи родителю unfollow и передай туда id

                    : <button disabled={followingInProgress
                        .some(id => id === user.id)} //если в массиве хоть одна id = id пользователя то тогда заблокировать кнопку
                        onClick={() => {
                            follow(user.id)
                        }}>Подписаться</button>    //если нажать на кнопку сообщи родителю follow и передай туда id
                }
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"Загнивающая страна"}</div>
                <div>{"Жопосранск"}</div>
            </span>
        </span>
    </div>

}

export default User;