import React from 'react';
import styles from './Users.module.css';


let Users = (props) => {
    if (props.users.length === 0) { //когда Users render'ится длинна массива = 0, по этому выполняется условие, потом при rerender'e длинна !=0 и условие не выполняется (иначе из-за вечного цикла будет ошибка)

        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ]
        )
    }

    return <div>
        {
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