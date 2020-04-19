import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Profile" activeClassName={s.active}>
                    <span>Profile</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName={s.active}>
                    <span>Messages</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" activeClassName={s.active}>
                    <span>News</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName={s.active}>
                    <span>Music</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" activeClassName={s.active}>
                    <span>Settings</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;