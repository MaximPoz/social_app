import React from "react";
import styles from './Users.module.css';
import flyCat from '../../assets/image/flyCat.png'
import { NavLink } from "react-router-dom";
import* as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // что бы определить количество страниц, надо разделить общее количество пользователей на размер страницы

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
   
    {
        props.users.map(u => <div key={u.id}>
            <span>
                <div className='avaUsers'>
                
                    <NavLink to={'/profile/'    //+ u.id это id пользователя в api/1.0/users
                    + u.id}>   

                    <img src={u.photos.small != null ? u.photos.small : flyCat} className={styles.usersPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { // отписаться от определённого пользователя (u) по id 
                                withCredentials: true, // только для авторизованных (позволяет исп. куки) объект настройки идёт вторым
                                headers: {
                                    "API-KEY" : "0adce104-060c-438f-85cd-312f385d5e63"
                                }}) 
                                .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                                if( response.data.resultCode == 0 ){ // если resultCode пришел 0, значит ошибок нет
                                    props.unfollow(u.id)   //  и выполняется отписка от определённого пользователя
                                }
                            });
                             
                             }}>UnFollow</button> //если нажать на кнопку вызови unfollow и передай туда id

                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {// подписаться на определённого пользователя (u) по id 
                                withCredentials: true, // только для авторизованных (позволяет исп. куки) объект настройки идёт третим
                                headers: {
                                    "API-KEY" : "0adce104-060c-438f-85cd-312f385d5e63"
                                }}) 
                                .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                                if( response.data.resultCode == 0 ){//см. выше
                                    props.follow(u.id) //см. выше
                                }
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
                    <div>{"Страна загнивающая"}</div>
                    <div>{"Живу в жопе"}</div>
                </span>
            </span>
        </div>)
        
    }
     <div className={styles.allPages}>
        {pages.map(p => {
            return  <span className={props.currentPage === p && styles.selectPage} //если текущая страница ровна "p" тогда selectPage присобачится внутрь класса
                onClick={(e) => { props.onPageChanged(p) }}>  {p}</span> //при нажатии на кнопку установи текущую страницу
        })}
    </div>
</div>
}

export default Users;