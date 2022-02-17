import React, { useState } from "react"

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false) //присвоить 0 значением editMode, а первым ф-цию setEditMode которой мы можем менят значение editMode (начальное значение стейта true)   
    let [status, setStatus] = useState(props.status) //из пропсов берём  статус и отдаём его в значения

    const activateEditMode = () => {
        setEditMode(true)  // меняем значение стейта на true 
    }

    const deactivateEditMode = () => { //объявляем метод с помощью стрелочной функции
        setEditMode(false)
        props.updateStatus(status)   // обнови статус
    }

    const onStatusChange = (e) => {   //значения из статуса попадают в локальный стейт
        setStatus(e.currentTarget.value);
    }


    return (
        <div>
            {!editMode && //если editMode = false  покажи status, при нажатии на кнопку обратись к методу activateEditMode и показать инпут
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status || "No status"} </span>
                </div>
            }
            {editMode &&  //если true тогда покажи input
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode} // onBlur срабатывает когда мы уводим курсор с input'а
                        value={status}
                    />
                </div>
            }
        </div>
    )
}


export default ProfileStatusHooks;