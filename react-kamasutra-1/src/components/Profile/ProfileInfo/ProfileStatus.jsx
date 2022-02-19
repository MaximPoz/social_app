import React from "react"   //react мы подключаем что бы то что мы пишем (jsx) babel транспелировал (переделал) в код понятный virtualDOM

class ProfileStatus extends React.Component {

state = {
    editMode: false,
    status: this.props.status
}
activateEditMode = () => { //объявляем метод с помощью стрелочной функции
    this.setState({  // setSate ассинхроннен, это значит что state поменяется не моментально, а во время перерисовки
        editMode: true //установи editMode true и перерисуйся
    })
}
deactivateEditMode = () => { //объявляем метод с помощью стрелочной функции
    this.setState({  // setSate ассинхроннен, это значит что state поменяется не моментально, а во время перерисовки
        editMode: false, //установи editMode false и перерисуйся
    })
    this.props.updateStatus(this.state.status)
}

onStatusChange=(e)=>{
    this.setState({
        status: e.currentTarget.value
    })
}

componentDidUpdate(prevProps, prevState){ //prev значит увидеть прошлый props и state(componentDidUpdate позволяет нам обновить текущее состояние state)
    
    if(prevProps.status != this.props.status){  // если предыдущий статус не равен текущиму 
        this.setState({
            status: this.props.status // покажи статус
        })
    }
}

    render() {
        return (
            <div>
                {!this.state.editMode && //если editMode = false  покажи status, при нажатии на кнопку обратись к методу activateEditMode
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status" } </span> 
                    </div>
                }
                {this.state.editMode &&  //если true тогда покажи input
                    <div>
                        <input  
                            onChange={this.onStatusChange}
                            autoFocus={true} 
                            onBlur={this.deactivateEditMode} // onBlur срабатывает когда мы уводим курсор с input'а
                            value={this.state.status} /> 
                    </div>
                }
            </div>
        )
    }
}

//class'ы нам нужны что бы создавать однотипные объекты, React видит что мы создали класс, то он создаёт объект из которого дёргает разметку, компоненты жизненного цикла
// покольку получается  это объект, у него должно быть своё состояние в котором может хранится инфа  

export default ProfileStatus