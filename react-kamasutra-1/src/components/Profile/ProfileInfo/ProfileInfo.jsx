import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusHooks from './ProfileStatusHooks';
import flyCat from '../../../assets/image/flyCat.png';
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {         //если у нас нет профайла
        return <Preloader />      // тогда мы вернём загрузку
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {  //если длинна у файлов есть
            savePhoto(e.target.files[0]); //то передаём это фото во внешний мир
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || flyCat} className={s.namePhoto} />
                <div>
                    {isOwner && <input
                        type={"file"}  //Если мы являемся владельцем страницы тогда отобразить кнопку файл
                        onChange={onMainPhotoSelected} // обработчик событий
                    />}

                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                        : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
                </div>

                <ProfileStatusHooks
                    status={status}
                    updateStatus={updateStatus}
                />

            </div>
        </div>
    )
}


const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div><h3>Имя: {profile.fullName}</h3></div>
        <div><h3>Обо мне: {profile.aboutMe}</h3></div>
        <div><h3>Статус: </h3>{profile.aboutMe}</div>
        <div><h3>Контакты: </h3>{profile.contacts.facebook}</div>

        <div><h3>Ищу работу: </h3>{profile.lookingForAJob == true
            ? <img className={s.avaWorkStatus} src='https://c.tenor.com/oTeBa4EVepMAAAAC/business-cat-working.gif'></img>
            : <img className={s.avaWorkStatus} src='https://previews.123rf.com/images/ratoca/ratoca1904/ratoca190400030/124066330-funny-cat-in-relax-moment.jpg'></img>
        }</div>

        <div><h3>Мои профессиональные навыки: </h3>{profile.lookingForAJobDescription}</div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;