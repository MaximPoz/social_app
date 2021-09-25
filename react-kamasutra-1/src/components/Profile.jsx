import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            {/* <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkx6Sy9VmSVZ7AceJgWFDlca4YoI6A1UI45Q&usqp=CAU'></img></div> */}
            <div><img src='https://cdn.custom-cursor.com/packs/3475/meme-pop-cat-pack.png'></img></div>
            <div> My Post</div>
            <div> Mews Post</div>
            <div> Post 1</div>
            <div> Post 2</div>
        </div>
    )
}
export default Profile;