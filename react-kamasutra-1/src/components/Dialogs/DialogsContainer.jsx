import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateActionMessageText } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateActionMessageText: (body) => {
            dispatch(updateActionMessageText(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;