import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a className={s.item}>
                    <span>Profile</span>
                </a>
            </div>
            <div>
                <a className={s.item}>
                    <span>Messages</span>
                </a>
            </div>
            <div>
                <a className={s.item}>
                    <span>News</span>
                </a>
            </div>
            <div>
                <a className={s.item}>
                    <span>Music</span>
                </a>
            </div>
            <div>
                <a className={s.item}>
                    <span>Settings</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;