import React from 'react';
import styles from './Users.module.css';


let Users = (props) => {
     
    if(props.users.lenght === 0) { //когда Users render'ится длинна массива = 0, по этому выполняется условие, потом при rerender'e длинна !=0 и условие не выполняется (иначе из-за вечного цикла будет ошибка)
    props.setUsers ([
        {
            id: 1, photoUrl: 'https://www.ixbt.com/img/n1/news/2021/1/0/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_2.png',
            followed: false, fullName: 'Lena', status: 'Boss', location: { city: 'Ykt', contry: 'Russia' }
        },
        {
            id: 2, photoUrl: 'https://www.ixbt.com/img/n1/news/2021/1/0/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_2.png',
            followed: true, fullName: 'Max', status: 'Boss', location: { city: 'Ykt', contry: 'Russia' }
        },
        {
            id: 3, photoUrl: 'https://www.ixbt.com/img/n1/news/2021/1/0/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_2.png',
            followed: false, fullName: 'Artur', status: 'Boss', location: { city: 'Ykt', contry: 'Russia' }
        },
    ])
}

    return <div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto} />
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.contry}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;