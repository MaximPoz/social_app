import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
            
        </div>
    )
}
export default Profile;

//<MyPosts posts={props.posts}/> это props MyPosts'ов (момент отрисовки MyPosts)