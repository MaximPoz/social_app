import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    const posts = [
        {id:1, message:'ya Oleg', likesCount: '+16'},
        {id:2, message:'ya tozhe', likesCount: '+21'}
    ]
let postsElements = posts.map ( p => <Post message={p.message} like={p.likesCount} /> ) //в качестве "p" у нас придёт строка массива posts (p можно заменить на что угодно)
                                                                                        //и из строки массива как с props мы забераем один из элементов p.message или p.likesCount
                                                                                        // т.е. .map это цикл который повторяет элемент за элементом из указанного массива.
    return (
        <div className={s.postsBlock}>
             <h3>My posts </h3>
            <div><textarea></textarea></div>
            <div><button> Add post</button></div>

<div className={s.posts}>
    {postsElements}
           
        </div>
        </div>
    )

}
export default MyPosts;