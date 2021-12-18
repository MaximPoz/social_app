import React from "react";
import styles from './Users.module.css';
import flyCat from '../../assets/image/flyCat.png'
import { NavLink } from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // что бы определить количество страниц, надо разделить общее количество пользователей на размер страницы

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i); //пока i меньше  количества страниц, добовлять страницу
    }return <div>
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
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} //если в редьюсере в массиве followingInProgress хоть одна id = id пользователя то тогда заблокировать кнопку
                            onClick={() => {

                                props.toggleFollowingProgress(true, u.id);  //когда запрос начнётся передать toggleFollowingProgress true и id user'a
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { // отписаться от определённого пользователя (u) по id 
                                    withCredentials: true, // только для авторизованных (позволяет исп. куки) объект настройки идёт вторым
                                    headers: {
                                        "API-KEY": "4b7c36f2-f146-498a-8850-f32bc3f1361f"
                                    }
                                })
                                    .then(response => {  //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                                        if (response.data.resultCode == 0) { // если resultCode пришел 0, значит ошибок нет
                                            props.unfollow(u.id)   //  и выполняется отписка от определённого пользователя
                                        }
                                        props.toggleFollowingProgress(false, u.id);//когда запрос закончится передать toggleFollowingProgress folse и id user'a
                                    });

                            }}>UnFollow</button> //если нажать на кнопку вызови unfollow и передай туда id

                        : <button disabled={props.followingInProgress.some(id => id === u.id)} //если в массиве хоть одна id = id пользователя то тогда заблокировать кнопку
                            onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {// подписаться на определённого пользователя (u) по id 
                                    withCredentials: true, // только для авторизованных (позволяет исп. куки) объект настройки идёт третим
                                    headers: {
                                        "API-KEY": "4b7c36f2-f146-498a-8850-f32bc3f1361f"
                                    }
                                })
                                    .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                                        if (response.data.resultCode == 0) {//см. выше
                                            props.follow(u.id) //см. выше
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Follow</button>    //если нажать на кнопку вызови follow и передай туда id
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