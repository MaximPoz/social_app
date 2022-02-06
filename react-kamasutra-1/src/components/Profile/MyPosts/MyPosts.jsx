import React from 'react';
import AddPostForm from './AddPostForm/AddPostForm';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p =>
            <Post message={p.message} like={p.likesCount} />)  //в качестве "p" у нас придёт строка массива posts (p можно заменить на что угодно)
    //и из строки массива как с props мы забераем один из элементов p.message или p.likesCount
    // т.е. .map это цикл который повторяет элемент за элементом из указанного массива.
    //let postsElements = (props.posts.map (p)) => {
    //<Post message={p.message} like={p.likesCount} />  это props Post'ов (момент отрисовки Post)
    //})


    let addNewPost = (value) => {
        props.addPost(value.newPost);
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>

            <AddPostForm onSubmit={addNewPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}




export default MyPosts;