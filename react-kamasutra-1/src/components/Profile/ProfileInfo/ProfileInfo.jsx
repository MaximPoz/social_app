import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusHooks from './ProfileStatusHooks';


const ProfileInfo = (props) => {
    if(!props.profile){         //если у нас нет профайла
       return <Preloader/>      // тогда мы вернём загрузку
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
               <img src={props.profile.photos.large}/>
               <ProfileStatusHooks 
                status={props.status} 
                updateStatus={props.updateStatus}/>


               <div><h3>Имя: {props.profile.fullName}</h3></div>
               <div><h3>Обо мне: {props.profile.aboutMe}</h3></div>
               <div><h3>Статус: </h3>{props.profile.aboutMe}</div>
               <div><h3>Контакты: </h3>{props.profile.contacts.facebook}</div>

               <div><h3>Ищу работу: </h3>{props.profile.lookingForAJob == true 
               ? <img className={s.avaWorkStatus} src='https://c.tenor.com/oTeBa4EVepMAAAAC/business-cat-working.gif'></img> 
               : <img className={s.avaWorkStatus} src='https://previews.123rf.com/images/ratoca/ratoca1904/ratoca190400030/124066330-funny-cat-in-relax-moment.jpg'></img>
               }</div>
               
               <div><h3>Какую работу мне бы хотелось: </h3>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;