import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div><img src='https://cdn.custom-cursor.com/packs/3475/meme-pop-cat-pack.png'></img></div>
            <div className={s.descriptionBlock}>
               <h3> 'My avatae will be here' </h3>
            </div>
        </div>
    )
}
export default ProfileInfo;