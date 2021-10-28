import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateActionPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {  //при изменении state запускается эта ф-ци и новый объект сравнивается со старым, если изм. нет компан. не перерисовывается
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updateActionPostText(text));
        }
    }
}
const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsConteiner;