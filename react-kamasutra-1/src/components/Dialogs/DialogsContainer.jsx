import React from 'react';
import { sendMessageActionCreator, updateActionMessageText } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {store => {
            let addMessage = () => {
                store.dispatch(sendMessageActionCreator());  //вызываем action из state.js (добовляем сообщение)
            }
            let onMessageChange = (body) => {
                store.dispatch(updateActionMessageText(body)) //передаём в state что бы обновить и получить сообщение в textarea
            }
           return  <Dialogs updateActionMessageText={onMessageChange}
                sendMessage={addMessage}
                dialogsPage={store.getState().dialogsPage} />
        }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer;