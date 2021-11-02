import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios'; 
import flyCat from '../../assets/image/flyCat.png'

let Users = (props) => {
    if (props.users.length === 0) { //когда Users render'ится длинна массива = 0, по этому выполняется условие, потом при rerender'e длинна !=0 и условие не выполняется (иначе из-за вечного цикла будет ошибка)

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => { //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
            props.setUsers(response.data.items) //придёт response у него мы берём data, а там items
        }); //делаем get запрос и нам вернуться пользователи

      
    }

    return <div>
        {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={ u.photos.small != null ? u.photo.small : flyCat } className={styles.usersPhoto} />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button> //если нажать на кнопку вызови unfollow и передай туда id
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>    ////если нажать на кнопку вызови follow и передай туда id
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.contry"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)
    }
    </div>
}

export default Users;