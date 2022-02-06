import React from "react";
import styles from './FormsControls.module.css'

const FormControl = ({ input, meta, child, ...props }) => { // хотим достать input, meta, child а всё остальное оставить в пропсах

    const hasError = meta.touched && meta.error; //мета данные это данные о данных... Если в metа tuoched и error то показывай span, иначе не показывай

    return (                //деструктуризируем (распаровываем)  input и props (в props уже нет input)  //2 строка: если в мета есть ошибка hasError тогда покажи styles.error иначе ничего
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props; // хотим достать input, meta, child а всё остальное оставить в restProps (остаточные пропсы)
    return ( //прокидываем из пропсов input и restProps в элемент
    <FormControl {...props}> 
        <textarea {...input} {...restProps} /> 
    </FormControl>)
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props; 
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>
}