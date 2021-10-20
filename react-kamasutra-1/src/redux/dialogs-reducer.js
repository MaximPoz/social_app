const SAND_MESSAGE = 'SAND-MESSAGE';
const UPDARE_NEW_MESSAGE_BODY = 'UPDARE_NEW_MESSAGE_BODY';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SAND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';       //зануляем textarea 
            state.messages.push({ id: 4, message: body }); // пушит в сообщения
            return state;

        case UPDARE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;   // отправляет в state.dialogsPage.newMessageBody
            return state;

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SAND_MESSAGE })
export const updateActionMessageText = (body) => ({ type: UPDARE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;