import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.item + ' ' + s.active}>Ivan</div>
                <div className={s.item}>Petya</div>
                <div className={s.item}>Sasha</div>
                <div className={s.item}>Valera</div>
                <div className={s.item}>Dima</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;