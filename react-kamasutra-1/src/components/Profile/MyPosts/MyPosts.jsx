import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div><textarea></textarea></div>
            <div><button> My post </button></div>

            <Post massage='ya Oleg' like='+15' />
            <Post massage='ya tozhe' like='+20' />
        </div>
    )

}
export default MyPosts;