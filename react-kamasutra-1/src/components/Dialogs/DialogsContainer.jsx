import React from 'react';
import { connect } from 'react-redux';
import { whisAuthRedirect } from '../../HOC/whisAuthRedirect';
import { sendMessageActionCreator, updateActionMessageText } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
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

let AuthRedirectComponent = whisAuthRedirect(Dialogs); //оборачивает компоненту Dialogs в whisAuthRedirect (HOC)

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;