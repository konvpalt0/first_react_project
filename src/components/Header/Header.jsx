import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" alt="img"/>
        </header>
    );
}

export default Header;