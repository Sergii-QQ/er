import React from 'react';
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css';

function DialogItem(props) {
    return (
        <div className={s.dialogsItem}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;