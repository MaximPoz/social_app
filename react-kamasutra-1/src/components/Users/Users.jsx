import React from "react";
import styles from './Users.module.css';
import flyCat from '../../assets/image/flyCat.png'
import { NavLink } from "react-router-dom";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // что бы определить количество страниц, надо разделить общее количество пользователей на размер страницы

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i); //пока i меньше  количества страниц, добовлять страницу
    } return <div>
        {props.users.map(u => <div key={u.id} //перечесляем пользователей добавляя им id
        > <span>
                <div className='avaUsers'>
                    <NavLink to={'/profile/'    //+ u.id это id пользователя в api/1.0/users
                        + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : flyCat} className={styles.usersPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress
                        .some(id => id === u.id)} //если в редьюсере в массиве followingInProgress хоть одна id = id пользователя то тогда заблокировать кнопку
                            onClick={() => {
                                props.unfollow(u.id);
                            }}> Отписаться </button> //если нажать на кнопку сообщи родителю unfollow и передай туда id

                        : <button disabled={props.followingInProgress
                        .some(id => id === u.id)} //если в массиве хоть одна id = id пользователя то тогда заблокировать кнопку
                            onClick={() => {
                                props.follow(u.id)
                            }}>Подписаться</button>    //если нажать на кнопку сообщи родителю follow и передай туда id
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"Загнивающая страна"}</div>
                    <div>{"Жопосранск"}</div>
                </span>
            </span>
        </div>)

        }
        <div className={styles.allPages}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectPage} //если текущая страница ровна "p" (странице) тогда применить к ней стиль selectPage
                    onClick={(e) => { props.onPageChanged(p) }}>  {p}</span> //при нажатии на кнопку установи текущую страницу
            })}
        </div>
    </div>
}

export default Users;