import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

function mapState(state) {return {dialogs: state.dialogs}}
function mapDispatch(dispatch) {
    return {
        sendMessage: () => {dispatch(sendMessageCreator())},
        onMessageChange: (text) => {dispatch(updateNewMessageBodyCreator(text))}
    }
}

const DialogsContainer = connect(mapState, mapDispatch) (Dialogs);


export default DialogsContainer;