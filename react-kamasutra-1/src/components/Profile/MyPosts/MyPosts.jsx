import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
             <h3>My posts </h3>
            <div><textarea></textarea></div>
            <div><button> Add post</button></div>
<div className={s.posts}>
            <Post message='ya Oleg' like='+15' />
            <Post message='ya tozhe' like='+20' />
        </div>
        </div>
    )

}
export default MyPosts;