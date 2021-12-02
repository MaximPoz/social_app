import React from "react";
import styles from './Users.module.css';
import flyCat from '../../assets/image/flyCat.png'
import { NavLink } from "react-router-dom";


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
                        ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button> //если нажать на кнопку вызови unfollow и передай туда id
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>    //если нажать на кнопку вызови follow и передай туда id
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