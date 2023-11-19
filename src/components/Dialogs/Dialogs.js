import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
    let dialogsElements = props.dialogs.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} /> );
    let messagesElements = props.dialogs.messages.map( m => <Message key={m.id} message={m.message} /> );
    function sendMessage() {
        props.sendMessage();
    }
    function onMessageChange(e) {
        props.onMessageChange(e.target.value);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        placeholder='Enter your message'
                        value={props.dialogs.newMessageBody}
                        onChange={onMessageChange}>
                    </textarea></div>
                    <div><button onClick={sendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;