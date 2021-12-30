import React from "react"

class ProfileStatus extends React.Component {

state = {
    editMode: false,
}
activateEditMode = () => { //объявляем метод с помощью стрелочной функции
    this.setState({  // setSate фссинхроннен, это значит что state поменяется не моментально, а во время перерисовки
        editMode: true //установи editMode true и перерисуйся
    })
}
deactivateEditMode = () => { //объявляем метод с помощью стрелочной функции
    this.setState({  // setSate фссинхроннен, это значит что state поменяется не моментально, а во время перерисовки
        editMode: false //установи editMode true и перерисуйся
    })
}

    render() {
        return (
            <div>
                {!this.state.editMode && //если editMode = false  покажи status, при нажатии на кнопку обратись к методу activateEditMode
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}
                        </span>
                    </div>
                }
                {this.state.editMode &&  //если true тогда покажи textAr
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} // onBlur срабатывает когда мы уводим курсор с input'а
                            value={this.props.textAr} /> 
                    </div>
                }
            </div>
        )
    }
}

//class'ы нам нужны что бы создавать однотипные объекты, React видит что мы создали класс, то он создаёт объект из которого дёргает разметку, компоненты жизненного цикла
// покольку получается  это объект, у него должно быть своё состояние в котором может хранится инфа  

export default ProfileStatus