import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { whisAuthRedirect } from '../../HOC/whisAuthRedirect';
import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}



let mapDispatchToProps = (dispatch) => {

    return{
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody)); //пробрасываем сообщение (newMessageBody) в action dialogs-reducer 
        },
    }
}

let AuthRedirectComponent = whisAuthRedirect(Dialogs); 

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default compose( 
    connect (mapStateToProps, mapDispatchToProps), //берёт диалоги и отдаёт им нужную инфу из state и reducer 
    whisAuthRedirect, //оборачивает компоненту Dialogs в whisAuthRedirect (HOC)
 )(Dialogs)  //compose возми диалоги и закинь их в whisAuthRedirect, а этот результат закинь в connect;