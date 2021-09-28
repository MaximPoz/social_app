import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog+ ' ' +s.active}>Artur</div>
            <div className={s.dialog}>Lena</div>
            <div className={s.dialog}>Vitya</div>
        </div>
        <div className={s.messages}>
            <div className={s.dialog}> Hi </div>
            <div className={s.dialog}> I wrong with you </div>
            <div className={s.dialog}> POMOI POSUDU </div>
        </div>

    </div>
    )

}
export default Dialogs;