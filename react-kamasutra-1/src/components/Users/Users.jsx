import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import flyCat from '../../assets/image/flyCat.png'

class Users extends React.Component { //расширяем что бы реакт мог взаимодействовать с User

    componentDidMount() {  // Происходит монтирование компоненты с сервера
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`) // запрос на сервер
            .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                this.props.setUsers(response.data.items) //придёт response у него мы берём data,
                this.props.setTotalUsersCount(response.data.totalCount) 
            });                                         //и пробрасываем через props в setUsers контейнера
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`) // запрос на сервер
                .then(response => {                          //когда сервак даст ответ затем (then) выполни стрелочную ф-цию
                    this.props.setUsers(response.data.items) //придёт response у него мы берём data, 
                });   
                                                      //и пробрасываем через props в setUsers контейнера
        }
    
    render() {  //метод render возвращает JSX (анчинает работать  первым)

        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize); // что бы определить количество страниц, надо разделить общее количество пользователей на размер страницы

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectPage} //если текущая страница ровна "p" тогда selectPage присобачится внутрь класса
                            onClick={(e)=>{ this.onPageChanged(p) }}>{p}</span>  //при нажатии на кнопку установи текущую страницу
                })}
                    </div>
                    {
                        this.props.users.map(u => <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photos.small != null ? u.photo.small : flyCat} className={styles.usersPhoto} />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { this.props.unfollow(u.id) }}>UnFollow</button> //если нажать на кнопку вызови unfollow и передай туда id
                                        : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>    //если нажать на кнопку вызови follow и передай туда id
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
}

            export default Users;