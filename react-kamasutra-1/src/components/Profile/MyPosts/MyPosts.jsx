import React from 'react';
import { Field, reduxForm } from 'redux-form';
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

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateActionPostText(text)  //отправляем в контейнерную компаненту
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>

            <AddPostFormRedux onSubmit={addNewPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field component='textarea' name='newPost' placeholder="Пиши что на душе" />
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'messageAddPostForm'})(AddPostForm)


export default MyPosts;