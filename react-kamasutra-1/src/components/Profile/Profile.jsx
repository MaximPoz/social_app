import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader/Preloader';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo 
                profile={props.profile}
                status={props.status} 
                updateStatus={props.updateStatus}
                />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;

//<MyPosts posts={props.posts}/> это props MyPosts'ов (момент отрисовки MyPosts)