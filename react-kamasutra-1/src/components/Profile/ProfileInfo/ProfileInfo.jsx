import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    if(!props.profile){         //если у нас нет профайла
       return <Preloader/>      // тогда мы вернём загрузку
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
               <img src={props.profile.photos.large}/>
               <div><h3>Имя: {props.profile.fullName}</h3></div>
               <div><h3>Статус: </h3>{props.profile.aboutMe}</div>
               <div><h3>Контакты: </h3>{props.profile.contacts.facebook}</div>
               <div><h3>Ищу работу: </h3>{props.profile.lookingForAJob == true 
               ? <img className={s.avaWorkStatus} src='https://c.tenor.com/oTeBa4EVepMAAAAC/business-cat-working.gif'></img> 
               : <img className={s.avaWorkStatus} src='https://lh3.googleusercontent.com/proxy/hL7WZj0CfHGYTEkFXInbetdHg9w89e8Ut3HNmtwAEoYWVxJljIC58CSe-8_sRxOcIYXdGzheBDiEUa9sZwNSKP3Tk94'></img>
               }</div>
               <div><h3>Какую работу мне бы хотелось: </h3>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;