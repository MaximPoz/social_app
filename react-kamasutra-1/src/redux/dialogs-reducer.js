const SAND_MESSAGE = 'SAND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'Bro' },
        { id: 3, message: 'tools' }
    ],


    dialogs: [
        { id: 1, name: 'Lena' },
        { id: 2, name: 'Viktor' },
        { id: 3, name: 'Artur' }
    ],

};

const dialogsReducer = (state = initialState, action) => { //если объект action имеет тип SAND_MESSAGE тогда выполняем этот код (добовляем message из textarea)

    switch (action.type) {
        case SAND_MESSAGE:
            let body = action.newMessageBody;
            return {...state,                    //сделали копию state
            messages: [...state.messages, { id: 4, message: body + "   ТУЦ-ТУЦ" }],  //создаём новый массив, слева у нас старый массив, а справа у нас новое сообщение (т.е. новое сообщение будет пушиться под старым массивом), если добавить вначало, то будет пушиться над старым массивом.
        }; 

        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({ type: SAND_MESSAGE, newMessageBody }) // принимаем сообщение из контейнерной компоненты и добовляем его

export default dialogsReducer;