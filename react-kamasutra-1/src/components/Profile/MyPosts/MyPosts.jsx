import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    const postData = [
        {id:1, message:'ya Oleg', likesCount: '+15'},
        {id:2, message:'ya tozhe', likesCount: '+20'}
        
    ]


    return (
        <div className={s.postsBlock}>
             <h3>My posts </h3>
            <div><textarea></textarea></div>
            <div><button> Add post</button></div>
<div className={s.posts}>
            <Post message={postData[0].message} like={postData[0].likesCount} />
            <Post message={postData[1].message} like={postData[1].likesCount} />
        </div>
        </div>
    )

}
export default MyPosts;