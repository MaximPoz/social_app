import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from '../Dialogs.module.css';



let maxLength10 = maxLengthCreator(300)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.area}>
                <Field
                    component={Textarea}
                    name='newMessageBody'
                    placeholder='Введите сообщение'
                    validate={[required, maxLength10]} />

                <div><button>Add Message</button></div>
            </div>
        </form>
    )
}

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm); // название формы и компонента которую мы оборачиваем