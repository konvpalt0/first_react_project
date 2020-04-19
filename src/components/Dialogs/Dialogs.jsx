import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.item} >
                    <NavLink to="/dialogs/1" activeClassName={s.active}>
                        <span>Ivan</span>
                    </NavLink>
                </div>
                <div className={s.item} >
                    <NavLink to="/dialogs/2" activeClassName={s.active}>
                        <span>Petya</span>
                    </NavLink>
                </div>
                <div className={s.item} >
                    <NavLink to="/dialogs/3" activeClassName={s.active}>
                        <span>Sasha</span>
                    </NavLink>
                </div>
                <div className={s.item} >
                    <NavLink to="/dialogs/4" activeClassName={s.active}>
                        <span>Valera</span>
                    </NavLink>
                </div>
                <div className={s.item} >
                    <NavLink to="/dialogs/5" activeClassName={s.active}>
                        <span>Dima</span>
                    </NavLink>
                </div>
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