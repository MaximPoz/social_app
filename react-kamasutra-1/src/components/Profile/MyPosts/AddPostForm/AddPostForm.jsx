import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";


let maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field 
            component={Textarea} // Указываем не в кавычках, а в скобках (ссылка на компонент)
            name='newPost' 
            placeholder="Пиши что на душе"
            validate={[required, maxLength10]} />
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'messageAddPostForm'})(AddPostForm)