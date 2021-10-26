import React from 'react';
import { addPostActionCreator, updateActionPostText } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => { 
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () =>
                    store.dispatch(addPostActionCreator())

                let onPostChange = (text) => {
                    let action = updateActionPostText(text);
                    store.dispatch(action);
                }
              return  <MyPosts updateActionPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }

        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;