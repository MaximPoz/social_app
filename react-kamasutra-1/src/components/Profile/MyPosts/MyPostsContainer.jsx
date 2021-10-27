import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateActionPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
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