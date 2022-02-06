export const required = value => {  // если значени нет, кнопка не сработает
    if(value) return undefined;

    return "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value && value.length > maxLength ) return `Max length is ${maxLength} symbols`; //если знаение есть  его длинна больше 30 символов, верни "Max length is 30 symbols" (кнопка не сработает)

    return undefined; //иначе undefined
}