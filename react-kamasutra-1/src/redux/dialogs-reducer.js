const SAND_MESSAGE = 'SAND-MESSAGE';
const UPDARE_NEW_MESSAGE_BODY = 'UPDARE_NEW_MESSAGE_BODY';

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
    newMessageBody: 'newMessageBody', //this value for textarea in Dialogs.jsx
};

const dialogsReducer = (state = initialState, action) => { //если объект action имеет тип SAND_MESSAGE тогда выполняем этот код (добовляем message из textarea)
    switch (action.type) {
        case SAND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';       //зануляем textarea 
            state.messages.push({ id: 4, message: body }); // пушит в сообщения
            return state;

        case UPDARE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;   // обвновляем данные в state.dialogsPage.newMessageBody
            return state;                           //тем самым они обновляются в textarea

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SAND_MESSAGE })
export const updateActionMessageText = (body) => ({ type: UPDARE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;