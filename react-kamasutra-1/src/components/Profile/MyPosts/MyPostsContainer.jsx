import React from 'react';
import { addPostActionCreator, updateActionPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    let state = props.store.getState();
   
    let addPost = () =>
        props.store.dispatch(addPostActionCreator())

    let onPostChange = (text) => {
        let action = updateActionPostText(text);
        props.store.dispatch(action)
    }
    return <MyPosts updateActionPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />  

}
export default MyPostsContainer;