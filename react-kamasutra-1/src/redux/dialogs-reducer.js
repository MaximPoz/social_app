const SAND_MESSAGE = 'SAND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

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
    newMessageBody: '', //this value for textarea in Dialogs.jsx
};

const dialogsReducer = (state = initialState, action) => { //если объект action имеет тип SAND_MESSAGE тогда выполняем этот код (добовляем message из textarea)


    switch (action.type) {
        case SAND_MESSAGE:
            let body = state.newMessageBody;
            return {...state,                    //сделали копию state
            messages: [...state.messages, { id: 4, message: body + "   ТУЦ-ТУЦ" }],  //создаём новый массив, слева у нас старый массив, а справа у нас новое сообщение (т.е. новое сообщение будет пушиться под старым массивом), если добавить вначало, то будет пушиться над старым массивом.
            newMessageBody: '',                  //зануляем textarea 
        }; 

        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,                //вернули обновлённую копию в textarea
            newMessageBody: action.body};    // обвновляем данные в state.dialogsPage.newMessageBody                

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SAND_MESSAGE })
export const updateActionMessageText = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;