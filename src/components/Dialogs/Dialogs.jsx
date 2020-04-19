import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.item} >
            <NavLink to={"/dialogs/"+props.id} activeClassName={s.active}>
                <span>{props.name}</span>
            </NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name="Ivan" id="1"/>
                <DialogItem name="Petya" id="2"/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Valera" id="4"/>
                <DialogItem name="Dima" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;