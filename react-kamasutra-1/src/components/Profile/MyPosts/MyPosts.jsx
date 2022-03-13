import React, { PureComponent } from 'react';
import AddPostForm from './AddPostForm/AddPostForm';
import s from './MyPosts.module.css';
import Post from './Post/Post';

window.props = [];

const MyPosts = React.memo(props => {  //на входе принимает одну компоненту а на выходе другая memo, если компонента не изменилась, то она снова не отрисовывается
  
    //в PureComponent (промежуток между Component и нашей компонентой) уже вшита shouldComponentUpdate но что бы не использовать классовую компоненту мы используем React.memo
    // shouldComponentUpdate(nextProps, nextState){ //компонента, нужно ли тебе обновится? (следующий пропс и стейт)
    //     return nextProps != this.props || nextState != this.props;  //если след пропсы не ровны текущим то отрисуй, если нет, то не надо
    // }


    let postsElements = [...props.posts]
    .reverse()  //перевернуть копию массива (копию что бы не изменить store во внешнем мире)
    .map(p =>
       <Post key={p.id} message={p.message} like={p.likesCount} />); //в качестве "p" у нас придёт строка массива posts (p можно заменить на что угодно)
    //и из строки массива как с props мы забераем один из элементов p.message или p.likesCount
    // т.е. .map это цикл который повторяет элемент за элементом из указанного массива.

    let newPostElement = React.createRef();

    let addNewPost = value => {
      props.addPost(value.newPost);
    };

    return (<div className={s.postsBlock}>
            <h3> My posts </h3>

            <AddPostForm onSubmit={addNewPost} />

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>);
  })




export default MyPosts;