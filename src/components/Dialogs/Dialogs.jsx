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
};
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};
let DialogData = [
    { id:"1", name:"Ivan"},
    { id:"2", name:"Petya"},
    { id:"3", name:"Sasha"},
    { id:"4", name:"Valera"},
    { id:"5", name:"Dima"},
];
let MessageData = [
    { id:"1", message:"Hi"},
    { id:"2", message:"How are you"},
    { id:"3", message:"Yo"},
    { id:"4", message:"YOyo"},
    { id:"5", message:"YoyoYO"},
];

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name={DialogData[0].name} id={DialogData[0].id}/>
                <DialogItem name={DialogData[1].name} id={DialogData[1].id}/>
                <DialogItem name={DialogData[2].name} id={DialogData[2].id}/>
                <DialogItem name={DialogData[3].name} id={DialogData[3].id}/>
                <DialogItem name={DialogData[4].name} id={DialogData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={MessageData[0].message}/>
                <Message message={MessageData[1].message}/>
                <Message message={MessageData[2].message}/>
                <Message message={MessageData[3].message}/>
                <Message message={MessageData[4].message}/>
            </div>
        </div>
    );
};

export default Dialogs;